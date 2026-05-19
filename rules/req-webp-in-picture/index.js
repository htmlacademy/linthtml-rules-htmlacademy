import {is_tag_node, attribute_has_value} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/req-webp-in-picture',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && node.tagName === 'picture') {
      const sourceElements = node.children.filter((child) => child.tagName === 'source');
      const allSourcesAreSvg = sourceElements.every((source) => attribute_has_value(source, 'type', 'image/svg+xml'));

      if (allSourcesAreSvg) {
        return;
      }

      const hasWebpSource = sourceElements.some((source) => attribute_has_value(source, 'type', 'image/webp'));
      const hasAvifSource = sourceElements.some((source) => attribute_has_value(source, 'type', 'image/avif'));

      if (!hasWebpSource && !hasAvifSource) {
        report({
          position: node.loc,
          message: 'Element "picture" must contain a "source" child with a "type" attribute containing "webp" or "avif".',
        });
      }
    }
  },
};
