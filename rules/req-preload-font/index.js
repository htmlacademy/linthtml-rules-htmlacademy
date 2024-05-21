'use strict';
const { has_non_empty_attribute, is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-preload-font',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'head') {
      const hasRequiredPreload = node.children.some((child) =>
        is_tag_node(child) &&
        child.name === 'link' &&
        attribute_has_value(child, 'rel', 'preload') &&
        has_non_empty_attribute(child, 'href') &&
        attribute_has_value(child, 'type', /^font\//i) &&
        attribute_has_value(child, 'as', 'font')
      );

      if (!hasRequiredPreload) {
        report({
          position: node.loc,
          message: 'The head tag should contain a link tag with rel="preload", type="font/woff2", and as="font".',
        });
      }
    }
  }
};
