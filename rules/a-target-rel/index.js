const dom_utils = require("@linthtml/dom-utils");
const requiredAttributes = [
  { name: 'rel', value: 'nofollow' },
  { name: 'rel', value: 'noopener' },
];

function isMissingAttribute(node, attribute) {
  return !node.attributes.some((attr) => (
    attr.name.chars === attribute.name && attr.value.chars.includes(attribute.value)
  ));
}
module.exports = {
  name: "htmlacademy/a-target-rel",
  lint(node, rule_config, { report }) {
    if (
      dom_utils.is_tag_node(node) &&
      node.name === "a" &&
      node.attributes.some(
        (attr) => attr.name.chars === "target" && attr.value.chars === "_blank"
      )
    ) {
      const requiredAttributes = [
        { name: "rel", value: "nofollow" },
        { name: "rel", value: "noopener" },
      ];
      const missingAttributes = requiredAttributes.filter((attribute) =>
        !node.attributes.some(
          (attr) =>
            attr.name.chars === attribute.name &&
            attr.value.chars.includes(attribute.value)
        )
      );

      missingAttributes.forEach((attribute) => {
        report({
          position: node.loc,
          message: `The <a> element with target="_blank" is missing the "${attribute.name}=${attribute.value}" attribute.`,
        });
      });
    }
  },
};
