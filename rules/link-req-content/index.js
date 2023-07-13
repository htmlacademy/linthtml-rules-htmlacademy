'use strict';
// eslint-disable-next-line camelcase
const { has_non_empty_attribute, is_comment_node, is_text_node, is_tag_node } = require('@linthtml/dom-utils');

// eslint-disable-next-line camelcase
function has_text_content(node) {
  if (is_comment_node(node)) {
    return false;
  }
  if (is_text_node(node)) {
    return node.data.trim().length > 0;
  }
  if (has_non_empty_attribute(node, 'aria-label')) {
    return true;
  }
  if (has_non_empty_attribute(node, 'alt')) {
    return true;
  }
  for (const child of node.children) {
    if (has_text_content(child)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  name: 'htmlacademy/link-req-content',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'a') {
      if (has_text_content(node) === false) {
        report({
          position: node.loc,
          message: 'The <a> element must have a text describing the purpose of the link.',
        });
      }
    }
  }
};
