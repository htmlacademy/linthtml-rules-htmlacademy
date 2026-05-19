
import {
  is_tag_node,
  is_labelable,
  attribute_value,
  has_attribute,
  has_non_empty_attribute,
} from '@linthtml/dom-utils';

const hasLabelableDescendant = (node) => {
  if (!node.children) {
    return false;
  }
  for (const child of node.children) {
    if (!is_tag_node(child)) {
      continue;
    }
    if (is_labelable(child)) {
      return true;
    }
    if (hasLabelableDescendant(child)) {
      return true;
    }
  }
  return false;
};

const makeIssue = ({code, position, message}) => ({
  code,
  rule: 'htmlacademy/label-req-for',
  position,
  message,
  severity: 'error',
  data: {},
});

export default {
  name: 'htmlacademy/label-req-for',
  idMap: new Map(),
  labels: [],
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node)) {
      return;
    }
    if (has_non_empty_attribute(node, 'id')) {
      const id = attribute_value(node, 'id');
      if (id && !this.idMap.has(id.chars)) {
        this.idMap.set(id.chars, {tag: node.name, labelable: is_labelable(node)});
      }
    }
    if (node.name === 'label') {
      this.labels.push(node);
    }
  },
  end() {
    const issues = [];
    for (const label of this.labels) {
      if (has_attribute(label, 'for')) {
        const forAttr = attribute_value(label, 'for');
        const forChars = forAttr ? forAttr.chars : '';

        // Empty `for=""` is explicitly allowed (matches the HTML spec's no-association case).
        if (forChars === '') {
          continue;
        }

        const target = this.idMap.get(forChars);
        if (!target) {
          issues.push(makeIssue({
            code: 'HTMLA061',
            position: (forAttr && forAttr.loc) || label.loc,
            message: `<label for="${forChars}"> references missing id "${forChars}".`,
          }));
          continue;
        }

        if (!target.labelable) {
          issues.push(makeIssue({
            code: 'HTMLA062',
            position: (forAttr && forAttr.loc) || label.loc,
            message: `<label for="${forChars}"> references <${target.tag}>, which is not a labelable element.`,
          }));
        }

        continue;
      }

      if (hasLabelableDescendant(label)) {
        continue;
      }

      issues.push(makeIssue({
        code: 'HTMLA060',
        position: label.loc,
        message: '<label> must have a "for" attribute or contain a form control.',
      }));
    }

    this.idMap.clear();
    this.labels.length = 0;

    return issues;
  },
};

