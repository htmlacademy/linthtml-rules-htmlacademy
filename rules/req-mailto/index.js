'use strict';
const { has_non_empty_attribute, is_tag_node, attribute_value } = require('@linthtml/dom-utils');

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const isNotEmptyLink = (node) => node.childNodes.length > 0;
const isEmailContent = (node) => emailRegex.test(node.childNodes[0].data);
const reportError = (node) => ({
  position: node.loc,
  message: 'The href attribute of the <a> tag must start with "mailto:" if it contains an email'
});

module.exports = {
  name: 'htmlacademy/req-mailto',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && node.name === 'a') {
      if (isNotEmptyLink(node) && isEmailContent(node)) {
        if (has_non_empty_attribute(node, 'href')) {
          const hrefValue = attribute_value(node, 'href').chars;

          if (!hrefValue.startsWith('mailto:')) {
            report(reportError(node));
          }
        } else {
          report(reportError(node));
        }
      }
    }
  }
};
