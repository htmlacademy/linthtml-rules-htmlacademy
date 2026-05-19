import {is_comment_node} from '@linthtml/dom-utils';

const rules = {
  'space': {
    check: (string) => string.startsWith(' ') && string.endsWith(' '),
    errorMessage: 'The comment should contain spaces at the beginning and end of the message.',
  },
  'no-space': {
    check: (string) => !string.startsWith(' ') && !string.endsWith(' '),
    errorMessage: 'The comment should not contain spaces at the beginning and end of the message.',
  },
};

export default {
  name: 'htmlacademy/space-between-comments',

  lint(node, rule_config, {report}) {

    const ruleKey = rule_config ?? 'space';
    if (is_comment_node(node)) {
      const comment = node.data;
      const {check, errorMessage} = rules[ruleKey];

      if (!check(comment)) {
        report({
          position: node.loc,
          message: errorMessage,
        });
      }
    }
  },
};
