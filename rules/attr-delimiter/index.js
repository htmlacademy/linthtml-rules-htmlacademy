'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/attr-delimiter',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node)) {
      node.attributes.forEach((attribute) => {
        if (attribute.value?.chars.length > 0 && /\s/.test(attribute.equal.chars)) {
          report({
            position: attribute.loc,
            message: 'Attribute value must not be delimited by whitespace',
          });
        }
      });
    }
  }
};
