import {is_tag_node, has_attribute, attribute_value} from '@linthtml/dom-utils';

const matchesValue = (forbiddenValue, actualValue) => {
  if (forbiddenValue === undefined) {
    return true;
  }
  if (typeof forbiddenValue === 'string') {
    return actualValue === forbiddenValue;
  }
  if (forbiddenValue instanceof RegExp) {
    return forbiddenValue.test(actualValue);
  }
  return false;
};

const checkForbiddenAttributes = (node, forbiddenAttributes, report) => {
  forbiddenAttributes.forEach(({name, value}) => {
    if (!has_attribute(node, name)) {
      return;
    }

    if (value === undefined) {
      report({
        position: node.loc,
        message: `The attribute "${name}" should not be present in the <${node.name}> tag.`,
      });
      return;
    }

    const attr = attribute_value(node, name);
    const actual = attr ? attr.chars : '';
    if (matchesValue(value, actual)) {
      report({
        position: node.loc,
        message: `The attribute "${name}=${actual}" is not allowed on <${node.name}> tag.`,
      });
    }
  });
};

export default {
  name: 'htmlacademy/tag-forbid-attr',
  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && rule_config[node.name]) {
      const forbiddenAttributes = rule_config[node.name];
      checkForbiddenAttributes(node, forbiddenAttributes, report);
    }
  },
};
