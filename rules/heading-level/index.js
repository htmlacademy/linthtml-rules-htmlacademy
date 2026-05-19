
import {is_tag_node} from '@linthtml/dom-utils';

const HEADING_RE = /^h([1-6])$/i;

export default {
  name: 'htmlacademy/heading-level',
  lastLevel: 0,
  firstSeen: false,

  lint(node, rule_config, {report}) {
    if (!is_tag_node(node)) {
      return;
    }

    const match = node.name.match(HEADING_RE);
    if (!match) {
      return;
    }

    const level = Number(match[1]);

    if (!this.firstSeen) {
      this.firstSeen = true;
      this.lastLevel = level;

      if (level !== 1) {
        report({
          position: node.loc,
          message: `First heading must be <h1>, found <h${level}>.`,
        });
      }

      return;
    }

    if (level > this.lastLevel + 1) {
      report({
        position: node.loc,
        message: `Heading level skipped: <h${level}> follows <h${this.lastLevel}>.`,
      });
    }

    this.lastLevel = level;
  },

  end() {
    this.lastLevel = 0;
    this.firstSeen = false;
    return [];
  },
};
