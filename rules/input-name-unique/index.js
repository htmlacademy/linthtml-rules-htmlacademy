
import {is_tag_node, attribute_value, has_non_empty_attribute, attribute_has_value} from '@linthtml/dom-utils';

const collectInputs = (node, inputs) => {
  if (!node.children) {
    return;
  }
  for (const child of node.children) {
    if (!is_tag_node(child)) {
      continue;
    }
    if (child.name === 'input' && has_non_empty_attribute(child, 'name')) {
      inputs.push(child);
    }
    collectInputs(child, inputs);
  }
};

const makeIssue = ({position, message}) => ({
  code: 'HTMLA064',
  rule: 'htmlacademy/input-name-unique',
  position,
  message,
  severity: 'error',
  data: {},
});

export default {
  name: 'htmlacademy/input-name-unique',
  pendingIssues: [],
  lint(node) {
    if (!is_tag_node(node) || node.name !== 'form') {
      return;
    }

    const inputs = [];
    collectInputs(node, inputs);

    /** @type {Map<string, Array<{node: object, isGroupable: boolean}>>} */
    const nameMap = new Map();

    for (const input of inputs) {
      const nameAttr = attribute_value(input, 'name');
      if (!nameAttr) {
        continue;
      }
      const name = nameAttr.chars;
      // Radio and checkbox legitimately share a `name` to form a group / submit as a list.
      const isGroupable = attribute_has_value(input, 'type', 'radio')
        || attribute_has_value(input, 'type', 'checkbox');

      if (!nameMap.has(name)) {
        nameMap.set(name, []);
      }
      nameMap.get(name).push({node: input, isGroupable});
    }

    for (const [, entries] of nameMap) {
      if (entries.length < 2) {
        continue;
      }
      // All duplicates are groupable inputs (radio / checkbox) — valid group, skip.
      if (entries.every((e) => e.isGroupable)) {
        continue;
      }
      // Report second and subsequent duplicates.
      for (const entry of entries.slice(1)) {
        const nameAttr = attribute_value(entry.node, 'name');
        const nameValue = nameAttr ? nameAttr.chars : '';
        this.pendingIssues.push(makeIssue({
          position: (nameAttr && nameAttr.loc) || entry.node.loc,
          message: `<input name="${nameValue}"> duplicates a name already used in this <form>. Each <input> must have a unique name (except radio / checkbox groups).`,
        }));
      }
    }
  },
  end() {
    const issues = [...this.pendingIssues];
    this.pendingIssues.length = 0;
    return issues;
  },
};
