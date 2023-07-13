'use strict';
// eslint-disable-next-line camelcase
const { is_tag_node } = require('@linthtml/dom-utils');

const isSectionElement = (node) => is_tag_node(node) && node.name === 'section';
const isHeadingElement = (node) => is_tag_node(node) && /^h[1-6]$/.test(node.name);
const isNotSvg = (node) => node.name !== 'svg';
const checkChildNode = (node) => {
  if (isHeadingElement(node)) {
    return true;
  }

  if (node.children && isNotSvg(node)) {
    for (const child of node.children) {
      if (checkChildNode(child)) {
        return true;
      }
    }
  }

  return false;
};

module.exports = {
  name: 'htmlacademy/section-has-heading',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, { report }) {
    if (isSectionElement(node) && !checkChildNode(node)) {
      report({
        position: node.loc,
        message: 'The <section> element must contain a heading of any level.',
      });
    }
  }
};
