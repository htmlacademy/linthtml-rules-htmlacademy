import {is_tag_node} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/ban-url-spaces',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node)) {

      const checkList = rule_config.attributes || ['href', 'src'];
      const attributes = node.attributes.filter(
        ({name}) => checkList.includes(name.chars),
      );
      if (attributes.length === 0) {
        return;
      }
      attributes.forEach((item) => {
        if (/\s/.test(item.value?.chars)) {
          report({
            position: item.loc,
            message: 'Spaces in URL not allowed.',
          });
        }
      });
    }
  },
};
