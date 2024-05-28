'use strict';
const { is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/req-webp-in-picture',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.tagName === 'picture') {
      const sourceElements = node.children.filter((child) => child.tagName === 'source');
      const allSourcesAreSvg = sourceElements.every((source) => attribute_has_value(source, 'type', 'image/svg+xml'));

      if (allSourcesAreSvg) {
        return;
      }

      const hasWebpSource = sourceElements.some((source) => attribute_has_value(source, 'type', 'image/webp'));

      if (!hasWebpSource) {
        report({
          position: node.loc,
          message: 'Element "picture" must contain a "source" child with a "type" attribute containing "webp".'
        });
      }
    }
  }
};
