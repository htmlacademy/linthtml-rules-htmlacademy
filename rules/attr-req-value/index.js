import {is_tag_node, has_non_empty_attribute, is_boolean_attribute} from '@linthtml/dom-utils';
const matchesIgnoreList = (attributeName, ignoreList) => ignoreList.some((ignoreItem) => {
  if (typeof ignoreItem === 'string') {
    const regexString = ignoreItem.startsWith('/') && ignoreItem.endsWith('/') ? ignoreItem.slice(1, -1) : ignoreItem;
    const regex = new RegExp(regexString);
    return regex.test(attributeName);
  } else if (ignoreItem instanceof RegExp) {
    return ignoreItem.test(attributeName);
  }
  return attributeName === ignoreItem;

});

const isValidOptionValue = (node, name) => {
  if (name !== 'value' || !node.parent || node.parent.tagName !== 'select') {
    return true;
  }

  const emptyOptions = node.parent.children.filter((child) =>
    child.tagName === 'option' && !has_non_empty_attribute(child, 'value'),
  );

  return emptyOptions.length > 1;
};

export default {
  name: 'htmlacademy/attr-req-value',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node)) {
      const ignoreList = (rule_config && rule_config.ignore) || [];
      const attributes = node.attributes.filter(({name}) => /^¤+$/.test(name.chars) === false);
      attributes.forEach((attribute) => {
        const name = attribute.name.chars.toLowerCase();


        if (!has_non_empty_attribute(node, name) && !is_boolean_attribute(attribute) && !matchesIgnoreList(name, ignoreList) && isValidOptionValue(node, name)) {
          report({
            code: 'E006',
            position: attribute.loc,
            meta: {
              data: {
                attribute: name,
              },
            },
          });
        }
      });
    }
  },
};
