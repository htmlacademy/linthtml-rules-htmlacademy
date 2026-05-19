import {is_tag_node} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/tag-name-lowercase',
  lint(node, {ignore = []}, {report}) {

    if (is_tag_node(node) && /[A-Z]/.test(node.open.chars) && !ignore?.includes(node.name)) {
      report({
        code: 'E017',
        position: node.open.loc,
        meta: {
          data: {
            name: node.name,
          },
        },
      });
    }
  },
};
