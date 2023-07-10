const { is_tag_node, has_non_empty_attribute, is_boolean_attribute} = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/attr-req-value",
  lint(node, rule_config, { report }) {
    if (is_tag_node(node)) {
      const attributes = node.attributes.filter(({ name }) => /^¤+$/.test(name.chars) === false);
      attributes.forEach((attribute) => {
        const name = attribute.name.chars.toLowerCase();

        if (!has_non_empty_attribute(node, name) && !is_boolean_attribute(attribute) && !rule_config.ignore?.includes(name)) {
          report({
            code: "E006",
            position: attribute.loc,
            meta: {
              data: {
                attribute: name
              }
            }
          });
        }
      });
    }
  }
}
