'use strict';
const { is_tag_node, attribute_has_value } = require('@linthtml/dom-utils');

const formSubmitter = ['button', 'input'];

const findSubmitters = (node) => {
  let submitters = [];
  if (is_tag_node(node) && formSubmitter.includes(node.name) && attribute_has_value(node, 'type', 'submit')) {
    submitters.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      submitters = submitters.concat(findSubmitters(child));
    }
  }
  return submitters;
};

module.exports = {
  name: 'htmlacademy/req-submit-button',
  // eslint-disable-next-line camelcase
  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && node.name === 'form') {
      const submitters = findSubmitters(node);

      if(submitters.length === 0) {
        report({
          position: node.loc,
          message: 'Submitter inside form must have type="submit".',
        });
      }
    }
  }
};
