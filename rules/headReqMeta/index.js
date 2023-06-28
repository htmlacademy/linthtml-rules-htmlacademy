const dom_utils = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/head-req-meta",
  lint(node, rule_config, { report }) {
    if (dom_utils.is_tag_node(node) && node.name === "head") {
      const meta = node.children.filter((child) => child.name === "meta");
      const hasCharset = meta.some((meta) => {
        return meta.attributes.some((attribute) => {
          return attribute.name.chars === "charset";
        });
      });
      if (hasCharset === false) {
        report({
          position: node.loc,
          message: `The <meta> tag should have a charset attribute.`,
        });
      }
    }
  }
}
