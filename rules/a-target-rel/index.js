'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');
const requiredAttributes = {
  // todo вынести в конфиг правила
  rel: ['noreferrer', 'noopener']
};

const isEveryValuePresent = (node, attr, values) => values.every((val) => attribute_has_value(node, attr, new RegExp(val)));

const isExternalLink = (node) => is_tag_node(node) && node.name === 'a' &&
    attribute_has_value(node, 'target', '_blank');

module.exports = {
  name: 'htmlacademy/a-target-rel',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (isExternalLink(node)) {
      for (const [attr, values] of Object.entries(requiredAttributes)) {
        if (!isEveryValuePresent(node, attr, values)) {
          report({
            position: node.loc,
            message: `The <a> element with target="_blank" is missing the "${attr}=${values.join(' ')}" attribute.`
          });
        }
      }
    }
  },
};
