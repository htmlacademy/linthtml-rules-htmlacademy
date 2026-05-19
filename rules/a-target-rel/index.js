import {is_tag_node, attribute_has_value} from '@linthtml/dom-utils';
const requiredAttributes = {
  // `noreferrer` implicitly enables `noopener` per the HTML spec, so requiring it alone
  // is sufficient. Modern browsers also default to `noopener` for `target="_blank"`.
  rel: ['noreferrer'],
};

const isEveryValuePresent = (node, attr, values) => values.every((val) => attribute_has_value(node, attr, new RegExp(val)));

const isExternalLink = (node) => is_tag_node(node) && node.name === 'a' &&
    attribute_has_value(node, 'target', '_blank');

export default {
  name: 'htmlacademy/a-target-rel',

  lint(node, rule_config, {report}) {
    if (isExternalLink(node)) {
      for (const [attr, values] of Object.entries(requiredAttributes)) {
        if (!isEveryValuePresent(node, attr, values)) {
          report({
            position: node.loc,
            message: `The <a> element with target="_blank" is missing the "${attr}=${values.join(' ')}" attribute.`,
          });
        }
      }
    }
  },
};
