'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-single-styles',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'head') {
      const styles = node.children.filter((child) =>
        child.name === 'link' && attribute_has_value(child, 'rel', 'stylesheet')
      );
      if (styles.length > 1) {
        styles.slice(1).forEach((link) => {
          report({
            position: link.loc,
            message: 'Styles must be connected by a single file.',
          });
        });
      }
    }
  }
};
