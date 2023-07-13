'use strict';
// eslint-disable-next-line camelcase
const {is_tag_node, has_non_empty_attribute } = require('@linthtml/dom-utils');

const whitelisted = [
  'main', 'nav', 'table', 'td', 'th', 'aside', 'header', 'footer', 'section', 'article', 'summary',
];

const interactive = [
  'a', 'audio', 'button', 'details', 'iframe', 'input', 'label', 'progress', 'select', 'textarea', 'video',
];

function isValidUsage(node) {
  /* landmark and other whitelisted elements are valid */
  if (whitelisted.includes(node.name.toLowerCase())) {
    return true;
  }

  if (interactive.includes(node.name.toLowerCase())) {
    return true;
  }

  /* elements with tabindex (implicit interactive) are valid */
  return has_non_empty_attribute(node, 'tabindex');
}

module.exports = {
  name: 'htmlacademy/aria-label-misuse',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && has_non_empty_attribute(node, 'aria-label') && !isValidUsage(node)) {
      report({
        position: node.loc,
        message: '"aria-label" cannot be used on this element',
      });
    }
  },
};
