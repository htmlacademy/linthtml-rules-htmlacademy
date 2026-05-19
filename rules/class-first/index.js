import {is_tag_node, get_attribute} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/class-first',

  lint(node, rule_config, {report}) {

    if (is_tag_node(node) === false) {
      return;
    }

    const attribute = get_attribute(node, 'class');
    if (attribute && attribute !== node.attributes[0]) {
      report({
        position: attribute.loc,
        message: 'The class attribute should be the first.',
      });
    }
  },
};
