'use strict';
// eslint-disable-next-line camelcase
const dom_utils = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/charset-position',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    // eslint-disable-next-line camelcase
    if (dom_utils.is_tag_node(node) && node.name === 'head') {
      const childrenWithoutText = node.children.filter((children) => children.type !== 'text');
      const firstElement = childrenWithoutText[0];
      const hasMeta = firstElement.name === 'meta';
      const hasUtf = firstElement.attributes.some((attribute) => attribute.value.chars.toLowerCase() === 'utf-8');
      const hasCharset = firstElement.attributes.some((attribute) => attribute.name.chars === 'charset');

      if (!hasMeta && !hasUtf && !hasCharset) {
        report({
          position: node.loc,
          message: '<meta charset=""> is not the first child element in <head>',
        });
      }
    }
  }
};
