'use strict';
const { has_non_empty_attribute, is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-charset-utf',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'meta') {
      const hasCharset = has_non_empty_attribute(node, 'charset', true);
      const hasUtf = attribute_has_value(node, 'charset', /^utf-8$/i);

      if (hasCharset === true && hasUtf === false) {
        report({
          position: node.loc,
          message: 'The attribute charset should have a value of "utf-8".',
        });
      }
    }
  }
};
