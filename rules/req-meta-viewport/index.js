'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-meta-viewport',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'head') {
      const metaViewport = node.children.filter((child) =>
        child.name === 'meta' && attribute_has_value(child, 'name', 'viewport')
      );
      const hasViewport = metaViewport.some((meta) => attribute_has_value(meta, 'content', /width=device-width,.*initial-scale=1|initial-scale=1,.*width=device-width/));
      if (hasViewport === false) {
        report({
          position: node.loc,
          message: 'The <head> tag should have a <meta name="viewport"> attribute.',
        });
      }
    }
  }
};
