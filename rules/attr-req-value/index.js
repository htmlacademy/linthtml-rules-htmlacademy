'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, has_non_empty_attribute, is_boolean_attribute } = require('@linthtml/dom-utils');
const matchesIgnoreList = (attributeName, ignoreList) => ignoreList.some((ignoreItem) => {
  if (typeof ignoreItem === 'string') {
    const regexString = ignoreItem.startsWith('/') && ignoreItem.endsWith('/') ? ignoreItem.slice(1, -1) : ignoreItem;
    const regex = new RegExp(regexString);
    return regex.test(attributeName);
  } else if (ignoreItem instanceof RegExp) {
    return ignoreItem.test(attributeName);
  } else {
    return attributeName === ignoreItem;
  }
});

const isValidOptionValue = (node, name) => {
  if (name !== 'value' || !node.parent || node.parent.tagName !== 'select') {
    return true;
  }

  const emptyOptions = node.parent.children.filter((child) =>
    child.tagName === 'option' && !has_non_empty_attribute(child, 'value')
  );

  return emptyOptions.length > 1;
};

module.exports = {
  name: 'htmlacademy/attr-req-value',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node)) {
      const attributes = node.attributes.filter(({ name }) => /^¤+$/.test(name.chars) === false);
      attributes.forEach((attribute) => {
        const name = attribute.name.chars.toLowerCase();

        // eslint-disable-next-line camelcase
        if (!has_non_empty_attribute(node, name) && !is_boolean_attribute(attribute) && !matchesIgnoreList(name, rule_config.ignore)) {
          if (isValidOptionValue(node, name)) {
            report({
              code: 'E006',
              position: attribute.loc,
              meta: {
                data: {
                  attribute: name,
                },
              },
            });
          }
        }
      });
    }
  },
};
