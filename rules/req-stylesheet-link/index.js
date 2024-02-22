'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, attribute_has_value, has_non_empty_attribute } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-stylesheet-link',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'head') {
      const styles = node.children.filter((child) =>
        child.name === 'link' && attribute_has_value(child, 'rel', 'stylesheet') && has_non_empty_attribute(child, 'href')
      );

      if (styles.length === 0) {
        report({
          position: node.loc,
          message: 'The <link> tag with rel="stylesheet" and a non-empty href attribute is missing.',
        });
      }
    }
  }
};
