'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, is_void_node, is_self_closing } = require('@linthtml/dom-utils');

const COMMON_SVG_VOID_NODES = [
  'path',
  'circle',
  'ellipse',
  'line',
  'rect',
  'use',
  'stop',
  'polyline',
  'polygon'
];

module.exports = {
  name: 'htmlacademy/tag-self-close',
  lint(node, style, { report }) {
    // eslint-disable-next-line camelcase
    if (!is_tag_node(node) || !is_void_node(node)) {
      return;
    }
    const { name, close } = node;
    // If the tag did not close itself
    // remove toLowerCase
    if (!close || name.toLowerCase() !== close.chars.toLowerCase()) {
      const selfClose = is_self_closing(node);
      const isSvgVoid = COMMON_SVG_VOID_NODES.includes(node.name);
      if ((style === 'always' && !selfClose) || (style === 'never' && !isSvgVoid && selfClose)) {
        report({
          code: 'E018',
          position: node.open.loc,
          meta: {
            data: {
              expect: style
            }
          }
        });
      }
    }
  },
};
