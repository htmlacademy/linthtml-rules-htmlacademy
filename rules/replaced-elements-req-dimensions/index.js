'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node, has_non_empty_attribute } = require('@linthtml/dom-utils');

const REPLACED_ELEMENTS = ['img', 'svg', 'video', 'iframe'];

module.exports = {
  name: 'htmlacademy/replaced-elements-req-dimensions',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && REPLACED_ELEMENTS.includes(node.name)) {
      const requiredAttributes = ['width', 'height'];
      const missingAttributes = requiredAttributes.filter((attribute) =>
        !has_non_empty_attribute(node, attribute)
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
