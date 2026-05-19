import {is_tag_node, has_non_empty_attribute} from '@linthtml/dom-utils';

const REPLACED_ELEMENTS = new Set(['img', 'svg', 'video', 'iframe']);

export default {
  name: 'htmlacademy/replaced-elements-req-dimensions',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && REPLACED_ELEMENTS.has(node.name)) {
      const requiredAttributes = ['width', 'height'];
      const missingAttributes = requiredAttributes.filter((attribute) =>
        !has_non_empty_attribute(node, attribute),
      );

      if (missingAttributes.length > 0) {
        const missingAttributesString = missingAttributes.join(' and ');
        report({
          position: node.loc,
          message: `The <${node.name}> element is missing ${missingAttributesString} attribute(s).`,
        });
      }
    }
  },
};
