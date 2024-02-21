'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, has_non_empty_attribute, has_attribute, attribute_value } = require('@linthtml/dom-utils');
const checkAttributes = (node, requiredAttributes, report) => {
  requiredAttributes.forEach(({ name, allowEmpty, ignore }) => {
    allowEmpty = typeof allowEmpty === 'undefined' ? false : allowEmpty;
    if (ignore) {
      let shouldIgnore = false;
      for (const key in ignore) {
        if (has_attribute(node, key) && attribute_value(node, key).chars === ignore[key]) {
          shouldIgnore = true;
          break;
        }
      }
      if (shouldIgnore) {
        return;
      }
    }

    if (!has_attribute(node, name) || !has_non_empty_attribute(node, name, allowEmpty)) {
      report({
        code: 'E057',
        position: node.open.loc,
        meta: {
          data: {
            attribute: name,
            tag: node.name
          }
        }
      });
    }
  });
};


module.exports = {
  name: 'htmlacademy/tag-req-attr',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node)) {
      // eslint-disable-next-line camelcase
      for (const tagName in rule_config) {
        if (Object.hasOwnProperty.call(rule_config, tagName) && tagName === node.name) { // Ensured property belongs to object
          // eslint-disable-next-line camelcase
          const requiredAttributes = rule_config[tagName];
          checkAttributes(node, requiredAttributes, report);
        }
      }
    }
  },
};
