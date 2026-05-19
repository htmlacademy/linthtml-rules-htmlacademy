import {is_tag_node, attribute_has_value} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/req-head-styles',

  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && node.name === 'link' && attribute_has_value(node, 'rel', 'stylesheet') && node.parent.name !== 'head') {
      report({
        position: node.loc,
        message: 'Styles must be connected in <head>.',
      });
    }
  },
};
