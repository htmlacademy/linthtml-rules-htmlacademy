import {is_tag_node, is_text_node, has_non_empty_attribute} from '@linthtml/dom-utils';

const hasVisibleText = (node) => {
  if (!node.children) {
    return false;
  }
  for (const child of node.children) {
    if (is_text_node(child) && child.data && child.data.trim() !== '') {
      return true;
    }
    if (is_tag_node(child) && hasVisibleText(child)) {
      return true;
    }
  }
  return false;
};

export default {
  name: 'htmlacademy/label-req-text',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || node.name !== 'label') {
      return;
    }
    if (has_non_empty_attribute(node, 'aria-label')) {
      return;
    }
    if (hasVisibleText(node)) {
      return;
    }
    report({
      position: node.loc,
      message: '<label> must contain visible text.',
    });
  },
};
