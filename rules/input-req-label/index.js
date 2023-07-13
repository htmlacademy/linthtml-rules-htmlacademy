'use strict';
/* eslint-disable camelcase */
const {is_tag_node, attribute_value, attribute_has_value, has_non_empty_attribute,} = require('@linthtml/dom-utils');

class Issue {
  code;
  position;
  rule;
  message;
  data = {};
  severity = 'error';

  constructor(rule_name, position, options) {
    this.position = position;
    this.code = options.code;
    this.rule = rule_name;
    this.message = options.message ?? '';
    this.data = options.data || {};
    this.severity = options.severity || 'error';
  }
}

module.exports = {
  name: 'htmlacademy/input-req-label',
  labels: {},
  inputsInfo: [],
  lint(node, rule_config, { report }) {
    if (!is_tag_node(node) || !['input', 'label'].includes(node.name)) {
      return;
    }
    // if it's a label with a 'for', store that value
    if (node.name === 'label') {
      const for_attribute = attribute_value(node, 'for');
      if (for_attribute) {
        this.labels[for_attribute.chars] = node;
      }
      return;
    }

    if (attribute_has_value(node, 'type', 'hidden')) {
      return;
    }

    if (has_non_empty_attribute(node, 'aria-label')) {
      return;
    }

    // check if the input has a label as a parent.
    for (let e = node; (e = e.parent);) {
      if (e.name === 'label') {
        return;
      }
    }

    // check if the input has a named label, by storing the values to
    // check at the end.
    const id = attribute_value(node, 'id');
    if (id) {
      this.inputsInfo.push({
        id: id.chars, loc: node.open.loc,
      });
    } else {
      report({
        code: 'E033', position: node.open.loc, meta: {
          data: {
            idValue: 'null',
          },
        },
      });
    }
  },
  end() {
    const issues = [];
    const {
      inputsInfo, labels,
    } = this;
    inputsInfo.forEach(({ id, loc }) => {
      if (!labels[id]) {
        issues.push(new Issue('input-req-label', loc, {
          code: 'E033', rule: 'input-req-label', data: {
            idValue: id,
          },
        }));
      }
    });

    // wipe previous table
    for (const key in this.labels) {
      delete this.labels[key];
    }
    this.inputsInfo.length = 0;

    return issues;
  },
};
/* eslint-enable camelcase */
