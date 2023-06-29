const dom_utils = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/img-svg-req-dimensions",
  lint(node, rule_config, { report }) {
    if (dom_utils.is_tag_node(node) && (node.name === "img" || node.name === "svg")) {
      const requiredAttributes = ["width", "height"];
      const missingAttributes = requiredAttributes.filter((attribute) =>
          !node.attributes.some(
            (attr) => attr.name.chars === attribute
          )
      );

      if (missingAttributes.length > 0) {
        const missingAttributesString = missingAttributes.join(" and ");
        report({
          position: node.loc,
          message: `The <${node.name}> element is missing ${missingAttributesString} attribute(s).`,
        });
      }
    }
  },
};
