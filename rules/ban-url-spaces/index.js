'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/ban-url-spaces',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node)) {
      // eslint-disable-next-line camelcase
      const checkList = rule_config.attributes || ['href', 'src'];
      const attributes = node.attributes.filter(
        ({ name }) => checkList.includes(name.chars)
      );
      if (!attributes.length) {
        return;
      }
      attributes.forEach((item) => {
        if (/\s/.test(item.value?.chars)) {
          report({
            position: item.loc,
            message: 'Spaces in URL not allowed.'
          });
        }
      });
    }
  },
};
