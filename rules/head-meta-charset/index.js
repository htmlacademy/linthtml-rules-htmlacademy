'use strict';
// eslint-disable-next-line camelcase
const dom_utils = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/head-meta-charset',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    // eslint-disable-next-line camelcase
    if (dom_utils.is_tag_node(node) && node.name === 'head') {
      const metaElements = node.children.filter((child) => child.name === 'meta');
      const hasCharset = metaElements.some((meta) => meta.attributes.some((attribute) => attribute.name.chars === 'charset'));
      if (hasCharset === false) {
        report({
          position: node.loc,
          message: 'The <meta> tag should have a charset attribute.',
        });
      }
    }
  }
};
