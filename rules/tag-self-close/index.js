import {is_tag_node, is_void_node, is_self_closing} from '@linthtml/dom-utils';

const COMMON_SVG_VOID_NODES = new Set([
  'path',
  'circle',
  'ellipse',
  'line',
  'rect',
  'use',
  'stop',
  'polyline',
  'polygon',
]);

export default {
  name: 'htmlacademy/tag-self-close',
  lint(node, style, {report}) {

    if (!is_tag_node(node) || !is_void_node(node)) {
      return;
    }
    const {name, close} = node;
    // If the tag did not close itself
    // remove toLowerCase
    if (!close || name.toLowerCase() !== close.chars.toLowerCase()) {
      const selfClose = is_self_closing(node);
      const isSvgVoid = COMMON_SVG_VOID_NODES.has(node.name);
      if ((style === 'always' && !selfClose) || (style === 'never' && !isSvgVoid && selfClose)) {
        report({
          code: 'E018',
          position: node.open.loc,
          meta: {
            data: {
              expect: style,
            },
          },
        });
      }
    }
  },
};
