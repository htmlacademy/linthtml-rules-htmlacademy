import {is_tag_node, has_non_empty_attribute, has_attribute, attribute_value} from '@linthtml/dom-utils';
const checkAttributes = (node, requiredAttributes, report) => {
  requiredAttributes.forEach(({name, allowEmpty, ignore}) => {
    allowEmpty = allowEmpty === undefined ? false : allowEmpty;
    if (ignore) {
      let shouldIgnore = false;
      for (const key in ignore) {
        if (has_attribute(node, key) && attribute_value(node, key).chars === ignore[key]) {
          shouldIgnore = true;
          break;
        }
      }
      if (shouldIgnore) {
        return;
      }
    }

    if (!has_attribute(node, name) || !has_non_empty_attribute(node, name, allowEmpty)) {
      report({
        code: 'E057',
        position: node.open.loc,
        meta: {
          data: {
            attribute: name,
            tag: node.name,
          },
        },
      });
    }
  });
};


export default {
  name: 'htmlacademy/tag-req-attr',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node)) {

      for (const tagName in rule_config) {
        if (Object.hasOwn(rule_config, tagName) && tagName === node.name) { // Ensured property belongs to object

          const requiredAttributes = rule_config[tagName];
          checkAttributes(node, requiredAttributes, report);
        }
      }
    }
  },
};
