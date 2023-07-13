'use strict';
// eslint-disable-next-line camelcase
const {is_tag_node, has_non_empty_attribute, attribute_value, get_attribute} = require('@linthtml/dom-utils');

const onlyDigits = (val) => /^\d+$/.test(val);

module.exports = {
  name: 'htmlacademy/no-px-size',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && (node.name === 'img' || node.name === 'svg')) {
      const requiredAttributes = ['width', 'height'];
      const missingAttributes = requiredAttributes.filter((attr) =>
        has_non_empty_attribute(node, attr) && !onlyDigits(attribute_value(node, attr).chars)
      );
      missingAttributes.forEach((attr) => {
        report({
          position: get_attribute(node, attr).loc,
          message: `Bad value for attribute ${attr} on element. Expected a digit.`,
        });
      });
    }
  },
};
