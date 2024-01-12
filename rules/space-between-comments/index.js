'use strict';
const { is_comment_node } = require('@linthtml/dom-utils');

const hasSpacesAtStartAndEnd = (rule, string) => {
  rule = rule === undefined ? 'space' : rule;

  if (rule === 'space') {
    return string.startsWith(' ') && string.endsWith(' ');
  } else if (rule === 'no-space') {
    return !string.startsWith(' ') && !string.endsWith(' ');
  }
};

module.exports = {
  name: 'htmlacademy/space-between-comments',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_comment_node(node)) {
      const comment = node.data;
      const isEdges = hasSpacesAtStartAndEnd(rule_config, comment);

      if (!isEdges) {
        // eslint-disable-next-line camelcase
        const message = rule_config === 'space'
          ? 'The comment should contain spaces at the beginning and end of the message.'
          : 'The comment should not contain spaces at the beginning and end of the message.';

        report({
          position: node.loc,
          message
        });
      }
    }
  }
};
