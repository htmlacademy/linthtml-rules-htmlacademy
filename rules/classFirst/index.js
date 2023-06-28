const dom_utils = require("@linthtml/dom-utils");

module.exports = {
  name: "htmlacademy/class-first",
  lint(node, rule_config, { report }) {
    if (dom_utils.is_tag_node(node) === false) {
      return;
    }
    const attribute = dom_utils.get_attribute(node, 'class');
    if (attribute && attribute !== node.attributes[0]) {
      report({
        position: attribute.loc,
        message: `The class attribute should be the first.`,
      });
    }
  }
};
