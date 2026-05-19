import {is_tag_node, has_non_empty_attribute, attribute_value, get_attribute} from '@linthtml/dom-utils';

const REPLACED_ELEMENTS = new Set(['img', 'svg', 'video', 'iframe']);
const onlyDigits = (val) => /^\d+$/.test(val);

export default {
  name: 'htmlacademy/no-px-size',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || !REPLACED_ELEMENTS.has(node.name)) {
      return;
    }
    const requiredAttributes = ['width', 'height'];
    const invalidAttributes = requiredAttributes.filter((attr) =>
      has_non_empty_attribute(node, attr) && !onlyDigits(attribute_value(node, attr).chars),
    );
    invalidAttributes.forEach((attr) => {
      report({
        position: get_attribute(node, attr).loc,
        message: `Bad value for attribute ${attr} on <${node.name}>. Expected a non-negative integer without units.`,
      });
    });
  },
};
