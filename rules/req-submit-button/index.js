
import {
  is_tag_node,
  attribute_value,
  attribute_has_value,
  has_attribute,
  has_non_empty_attribute,
} from '@linthtml/dom-utils';

const SUBMITTER_TAGS = new Set(['button', 'input']);

const isSubmitButton = (node) => {
  if (!SUBMITTER_TAGS.has(node.name)) {
    return false;
  }
  if (node.name === 'input') {
    return attribute_has_value(node, 'type', 'submit');
  }
  // <button> defaults to type="submit" when type attribute is missing
  // or when it is present without a recognised value.
  if (!has_attribute(node, 'type')) {
    return true;
  }
  return attribute_has_value(node, 'type', 'submit');
};

const findInternalSubmitter = (node) => {
  if (!node.children) {
    return false;
  }
  for (const child of node.children) {
    if (!is_tag_node(child)) {
      continue;
    }
    if (
      isSubmitButton(child)
      && !has_non_empty_attribute(child, 'form')
    ) {
      return true;
    }
    if (findInternalSubmitter(child)) {
      return true;
    }
  }
  return false;
};

const makeIssue = ({code, position, message}) => ({
  code,
  rule: 'htmlacademy/req-submit-button',
  position,
  message,
  severity: 'error',
  data: {},
});

export default {
  name: 'htmlacademy/req-submit-button',
  formsWithoutSubmit: [],
  externalSubmitFormIds: new Set(),
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node)) {
      return;
    }

    if (isSubmitButton(node) && has_non_empty_attribute(node, 'form')) {
      const formAttr = attribute_value(node, 'form');
      if (formAttr) {
        this.externalSubmitFormIds.add(formAttr.chars);
      }
    }

    if (node.name === 'form') {
      if (findInternalSubmitter(node)) {
        return;
      }
      const idAttr = has_non_empty_attribute(node, 'id') ? attribute_value(node, 'id') : null;
      this.formsWithoutSubmit.push({
        node,
        id: idAttr ? idAttr.chars : null,
      });
    }
  },
  end() {
    const issues = [];
    for (const {node, id} of this.formsWithoutSubmit) {
      if (id && this.externalSubmitFormIds.has(id)) {
        continue;
      }
      issues.push(makeIssue({
        code: 'HTMLA063',
        position: node.loc,
        message: '<form> must contain a submit button or be linked to one via the "form" attribute.',
      }));
    }
    this.formsWithoutSubmit.length = 0;
    this.externalSubmitFormIds.clear();
    return issues;
  },
};

