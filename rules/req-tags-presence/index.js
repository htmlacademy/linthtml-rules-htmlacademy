import {is_tag_node} from '@linthtml/dom-utils';

const traverseNode = (node, remainingTags) => {
  if (is_tag_node(node)) {
    remainingTags.delete(node.name);
  }
  if (node.children) {
    for (const child of node.children) {
      traverseNode(child, remainingTags);
    }
  }
};

const findMissingTags = (node, remainingTags) => {
  traverseNode(node, remainingTags);
  return remainingTags;
};

export default {
  name: 'htmlacademy/req-tags-presence',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && node.name.toLowerCase() === 'html') {
      const missingTags = findMissingTags(node, new Set(rule_config));
      if (missingTags.size > 0) {
        report({
          position: {
            start: {line: 1, column: 1},
            end: {line: 1, column: 1},
          },
          message: `The page is missing the following tags: ${[...missingTags].join(', ')}.`,
        });
      }
    }
  },
};
