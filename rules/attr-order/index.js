import {is_tag_node} from '@linthtml/dom-utils';

const DEFAULT_GROUPS = [['class'], ['src', 'href'], ['data-*'], ['*']];
const PLACEHOLDER = /^¤+$/;

const matchPattern = (pattern, name) => {
  if (pattern === '*') {
    return true;
  }
  if (pattern.endsWith('*')) {
    return name.startsWith(pattern.slice(0, -1));
  }
  return pattern === name;
};

const groupIndex = (groups, name) => {
  for (const [i, group] of groups.entries()) {
    for (const pattern of group) {
      if (matchPattern(pattern, name)) {
        return i;
      }
    }
  }
  return groups.length;
};

const describeOrder = (groups) => groups
  .map((group) => group.map((p) => (p === '*' ? 'others' : p)).join('/'))
  .join(' → ');

export default {
  name: 'htmlacademy/attr-order',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || !node.attributes || node.attributes.length < 2) {
      return;
    }
    const groups = Array.isArray(rule_config) ? rule_config : DEFAULT_GROUPS;
    const orderDescription = describeOrder(groups);

    let maxGroupSeen = -1;
    let lastValidName = null;
    for (const attr of node.attributes) {
      const rawName = attr.name && attr.name.chars;
      if (!rawName || PLACEHOLDER.test(rawName)) {
        continue;
      }
      const name = rawName.toLowerCase();
      const idx = groupIndex(groups, name);
      if (idx < maxGroupSeen) {
        report({
          position: attr.loc,
          message: `Attribute "${rawName}" must come before "${lastValidName}" on <${node.name}>. Expected order: ${orderDescription}.`,
        });
        return;
      }
      if (idx > maxGroupSeen) {
        maxGroupSeen = idx;
      }
      lastValidName = rawName;
    }
  },
};
