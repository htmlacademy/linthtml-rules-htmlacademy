const dom_utils = require("@linthtml/dom-utils");
const check_format = (value) => /^([a-z\d]+(-[a-z\d]+)*)(\s[a-z\d]+(-[a-z\d]+)*)*$/.test(value);
module.exports = {
  rules: [
    {
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
    },
    {
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
    },
    {
      name: "htmlacademy/attr-value-style",
      lint(node, { ignore = [] }, { report }) {
        if (dom_utils.is_tag_node(node)) {
          node.attributes.forEach(({ value, name }) => {
            if (!ignore.includes(name.chars) && value && check_format(value.chars) === false) {
              report({
                position: value.loc,
                message: `The value ${value.chars} of the attribute ${name.chars} should be in the dash format.`
              });
            }
          });
        }
      }
    }
  ]
};
