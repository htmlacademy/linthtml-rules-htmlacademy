'use strict';
const { has_non_empty_attribute, is_tag_node } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-source-width-height',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'picture') {
      node.children.forEach((child) => {
        if (is_tag_node(child) && child.name === 'source') {
          const hasWidth = has_non_empty_attribute(child, 'width');
          const hasHeight = has_non_empty_attribute(child, 'height');

          if (!hasWidth || !hasHeight) {
            report({
              position: child.loc,
              message: 'The <source> tag inside <picture> must have both "width" and "height" attributes.',
            });
          }
        }
      });
    }
  }
};
