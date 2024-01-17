'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, get_attribute } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/class-first',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    // eslint-disable-next-line camelcase
    if (is_tag_node(node) === false) {
      return;
    }
    // eslint-disable-next-line camelcase
    const attribute = get_attribute(node, 'class');
    if (attribute && attribute !== node.attributes[0]) {
      report({
        position: attribute.loc,
        message: 'The class attribute should be the first.',
      });
    }
  }
};
