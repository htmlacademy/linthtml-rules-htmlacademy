'use strict';
const { is_comment_node } = require('@linthtml/dom-utils');

const rules = {
  'space': {
    check: (string) => string.startsWith(' ') && string.endsWith(' '),
    errorMessage: 'The comment should contain spaces at the beginning and end of the message.'
  },
  'no-space': {
    check: (string) => !string.startsWith(' ') && !string.endsWith(' '),
    errorMessage: 'The comment should not contain spaces at the beginning and end of the message.'
  }
};

module.exports = {
  name: 'htmlacademy/space-between-comments',
  // eslint-disable-next-line camelcase
  lint(node, rule_config = 'space', { report }) {
    if (is_comment_node(node)) {
      const comment = node.data;
      // eslint-disable-next-line camelcase
      const { check, errorMessage } = rules[rule_config];

      if (!check(comment)) {
        report({
          position: node.loc,
          message: errorMessage
        });
      }
    }
  }
};
