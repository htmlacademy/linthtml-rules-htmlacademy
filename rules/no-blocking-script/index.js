'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, has_attribute } = require('@linthtml/dom-utils');
const isAsync = (node) => has_attribute(node, 'async') || has_attribute(node, 'defer');
const isLastBodyElement = (node) => {
  if (node.parent.name !== 'body') {
    return false;
  }
  const { children } = node.parent;
  let index = children.length;
  while (index-- > 0) {
    if (is_tag_node(children[index])) {
      return children[index] === node;
    }
  }
  return false;
};
module.exports = {
  name: 'htmlacademy/no-blocking-script',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'script') {
      if (!isAsync(node) && !isLastBodyElement(node)) {
        report({
          position: node.loc,
          message: 'Script tag should be the last element or async.',
        });
      }
    }
  }
};
