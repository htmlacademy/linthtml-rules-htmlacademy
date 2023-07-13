'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

function checkPrevNode(node) {
  if (!node.prev) {
    return false;
  }
  if (is_tag_node(node.prev)) {
    return node.prev.name === 'br';
  }
  if (node.prev.data.trim()) {
    return false;
  }
  return checkPrevNode(node.prev);
}

module.exports = {
  name: 'htmlacademy/no-double-br',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) === false || node.name !== 'br') {
      return;
    }
    if (checkPrevNode(node)) {
      report({
        position: node.loc,
        message: 'do not use combined <br> tags',
      });
    }
  }
};
