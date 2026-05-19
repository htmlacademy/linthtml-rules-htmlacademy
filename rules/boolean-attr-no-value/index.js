import {is_tag_node, is_boolean_attribute} from '@linthtml/dom-utils';

const isPlaceholder = (chars) => /^¤+$/.test(chars);

export default {
  name: 'htmlacademy/boolean-attr-no-value',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || !node.attributes) {
      return;
    }
    for (const attr of node.attributes) {
      if (!is_boolean_attribute(attr)) {
        continue;
      }
      const name = attr.name && attr.name.chars;
      if (!name || isPlaceholder(name)) {
        continue;
      }
      const value = attr.value && attr.value.chars;
      if (!value || isPlaceholder(value)) {
        continue;
      }
      report({
        position: attr.loc,
        message: `Boolean attribute "${name}" must not have a value (write just "${name}", not "${name}=${value}").`,
      });
    }
  },
};
