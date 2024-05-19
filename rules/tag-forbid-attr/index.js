'use strict';
const { is_tag_node, has_attribute } = require('@linthtml/dom-utils');

const checkForbiddenAttributes = (node, forbiddenAttributes, report) => {
  forbiddenAttributes.forEach(({ name }) => {
    if (has_attribute(node, name)) {
      report({
        position: node.loc,
        message: `The attribute '${name}' should not be present in the <${node.name}> tag.`
      });
    }
  });
};

module.exports = {
  name: 'htmlacademy/tag-forbid-attr',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    // eslint-disable-next-line camelcase
    if (is_tag_node(node) && rule_config[node.name]) {
      // eslint-disable-next-line camelcase
      const forbiddenAttributes = rule_config[node.name];
      checkForbiddenAttributes(node, forbiddenAttributes, report);
    }
  },
};
