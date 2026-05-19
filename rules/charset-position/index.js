import {is_tag_node, has_attribute} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/charset-position',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || node.name !== 'head') {
      return;
    }
    const elementChild = (node.children || []).find((child) => is_tag_node(child));
    const firstElement = elementChild;
    const isMetaCharset = firstElement
      && firstElement.name === 'meta'
      && has_attribute(firstElement, 'charset');
    if (!isMetaCharset) {
      report({
        position: (firstElement || node).loc,
        message: 'The first element in <head> must be <meta charset="...">.',
      });
    }
  },
};
