const { is_tag_node, attribute_has_value } = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/req-head-styles",
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === "link" && attribute_has_value(node, 'rel', 'stylesheet')) {
      if (node.parent.name !== 'head') {
        report({
          position: node.loc,
          message: `Styles must be connected in <head>.`,
        });
      }
    }
  }
}
