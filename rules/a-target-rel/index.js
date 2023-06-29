const { is_tag_node, attribute_has_value } = require("@linthtml/dom-utils");

const requiredAttributes = {
  // todo вынести в конфиг правила
  rel: ["nofollow", "noopener"]
};

const isEveryValuePresent = (node, attr, values) => {
  return values.every(val => attribute_has_value(node, attr, val))
}

const isExternalLink = (node) => {
  return is_tag_node(node) && node.name === "a" &&
      attribute_has_value(node, 'target', '_blank')
}

module.exports = {
  name: "htmlacademy/a-target-rel",
  lint(node, rule_config, { report }) {
    if (isExternalLink(node)) {
      for (const [attr, values] of Object.entries(requiredAttributes)) {
        if (!isEveryValuePresent(node, attr, values)) {
          report({
            position: node.loc,
            message: `The <a> element with target="_blank" is missing the "${attr}=${values.join(' ')}" attribute.`
          });
        }
      }
    }
  },
};

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
requiredAttributes
        .filter((attribute) => isMissingAttribute(node, attribute))
        .forEach((attribute) => {
          report({
            position: node.loc,
            message: `The <a> element with target="_blank" is missing the "${attribute.name}=${attribute.value}" attribute.`,
          });
        });
      missingAttributes.forEach((attribute) => {
        report({
          position: node.loc,
          message: `The <a> element with target="_blank" is missing the "${attribute.name}=${attribute.value}" attribute.`,
        });
      });
    }
  },
};
