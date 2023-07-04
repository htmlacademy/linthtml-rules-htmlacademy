const dom_utils = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/form-action-attribute",
  lint(node, rule_config, { report }) {
    if (dom_utils.is_tag_node(node) && node.name === "form") {
      const actionAttribute = node.attributes.find(
        (attr) => attr.name.chars === "action"
      );

      if (!actionAttribute) {
        report({
          position: node.loc,
          message: `The <form> element is missing the "action" attribute.`,
        });
      } else if (actionAttribute.value === null) {
        report({
          position: actionAttribute.loc,
          message: `The value of the "action" attribute for the <form> element is empty.`,
        });
      }
    }
  },
};
