import {is_tag_node, is_text_node, has_non_empty_attribute} from '@linthtml/dom-utils';

const NAMING_ATTRIBUTES = ['aria-label', 'aria-labelledby', 'title'];

const hasVisibleTextContent = (node) => {
  if (!node.children) {
    return false;
  }
  for (const child of node.children) {
    if (is_text_node(child) && child.data && child.data.trim() !== '') {
      return true;
    }
    if (is_tag_node(child) && hasVisibleTextContent(child)) {
      return true;
    }
  }
  return false;
};

const hasAccessibleName = (node) =>
  NAMING_ATTRIBUTES.some((attr) => has_non_empty_attribute(node, attr));

export default {
  name: 'htmlacademy/icon-button-aria-label',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || node.name !== 'button') {
      return;
    }
    if (hasVisibleTextContent(node) || hasAccessibleName(node)) {
      return;
    }
    report({
      position: node.loc,
      message: '<button> without visible text must have an accessible name via aria-label, aria-labelledby, or title.',
    });
  },
};
