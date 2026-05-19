import {is_tag_node, attribute_has_value, has_non_empty_attribute} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/req-stylesheet-link',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && node.name === 'head') {
      const styles = node.children.filter((child) =>
        child.name === 'link' && attribute_has_value(child, 'rel', 'stylesheet') && has_non_empty_attribute(child, 'href'),
      );

      if (styles.length === 0) {
        report({
          position: node.loc,
          message: 'The <link> tag with rel="stylesheet" and a non-empty href attribute is missing.',
        });
      }
    }
  },
};
