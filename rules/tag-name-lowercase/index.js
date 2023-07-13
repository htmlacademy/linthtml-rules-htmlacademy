'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/tag-name-lowercase',
  lint(node, { ignore = []}, { report }) {
    // eslint-disable-next-line camelcase
    if (is_tag_node(node) && /[A-Z]/.test(node.open.chars) && !ignore?.includes(node.name)) {
      report({
        code: 'E017',
        position: node.open.loc,
        meta: {
          data: {
            name: node.name
          }
        }
      });
    }
  }
};
