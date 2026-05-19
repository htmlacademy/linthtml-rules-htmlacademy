import {is_tag_node} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/attr-delimiter',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node)) {
      node.attributes.forEach((attribute) => {
        if (attribute.value?.chars.length > 0 && /\s/.test(attribute.equal.chars)) {
          report({
            position: attribute.loc,
            message: 'Attribute value must not be delimited by whitespace',
          });
        }
      });
    }
  },
};
