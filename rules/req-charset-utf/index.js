const dom_utils = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/req-charset-utf",
  lint(node, rule_config, { report }) {
    if (dom_utils.is_tag_node(node) && node.name === "meta") {
      const hasUtf = node.attributes.some(attribute => attribute.value.chars.toLowerCase() === 'utf-8');
      const hasCharset = node.attributes.some(attribute => attribute.name.chars === "charset");

      if (hasCharset === true && hasUtf === false) {
        report({
          position: node.loc,
          message: `"The attribute charset="" should have a value of 'utf-8'."`,
        });
      }
    }
  }
}
