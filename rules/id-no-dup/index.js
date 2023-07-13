'use strict';
/* eslint-disable camelcase */
const { is_tag_node, attribute_value, has_non_empty_attribute } = require('@linthtml/dom-utils');

module.exports = {
  name: 'htmlacademy/id-no-dup',
  idMap: new Map(),
  lint(node, rule_config, { report }) {
    if (is_tag_node(node) && has_non_empty_attribute(node, 'id')) {
      const id = attribute_value(node, 'id');
      if (/^¤+$/.test(id.chars)) {
        return;
      }
      // node has a duplicate id
      const saved_id = this.idMap.get(id.chars);
      if (saved_id) {
        report({
          code: 'E012',
          position: id.loc,
          meta: {
            data: {
              id: id.chars,
              line: saved_id.loc.start.line,
              column: saved_id.loc.start.column
            }
          }
        });
      }
      // if we haven't seen the id before, remember it
      this.idMap.set(id.chars, id);
    }
  },
  end() {
    // wipe previous table
    this.idMap.clear();
    return [];
  }
};
/* eslint-enable camelcase */
