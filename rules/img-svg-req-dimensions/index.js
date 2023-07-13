'use strict';
// eslint-disable-next-line camelcase
const {is_tag_node, has_non_empty_attribute} = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/img-svg-req-dimensions',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && (node.name === 'img' || node.name === 'svg')) {
      const requiredAttributes = ['width', 'height'];
      const missingAttributes = requiredAttributes.filter((attribute) =>
        !has_non_empty_attribute(node, attribute)
      );

      if (missingAttributes.length > 0) {
        const missingAttributesString = missingAttributes.join(' and ');
        report({
          position: node.loc,
          message: `The <${node.name}> element is missing ${missingAttributesString} attribute(s).`,
        });
      }
    }
  },
};
