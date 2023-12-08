'use strict';
const { is_comment_node } = require('@linthtml/dom-utils');

const hasSpacesAtStartAndEnd = (string) => string.startsWith(' ') && string.endsWith(' ');

module.exports = {
  name: 'htmlacademy/space-between-comments',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_comment_node(node)) {
      const comment = node.data;
      const isEdges = hasSpacesAtStartAndEnd(comment);

      if (!isEdges) {
        report({
          position: node.loc,
          message: 'The comment does not contain spaces at the beginning and end of the message.'
        });
      }
    }
  }
};
