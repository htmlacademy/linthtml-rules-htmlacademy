import {is_tag_node} from '@linthtml/dom-utils';

export default {
  name: 'htmlacademy/head-meta-charset',

  lint(node, rule_config, {report}) {

    if (is_tag_node(node) && node.name === 'head') {
      const metaElements = node.children.filter((child) => child.name === 'meta');
      const hasCharset = metaElements.some((meta) => meta.attributes.some((attribute) => attribute.name.chars === 'charset'));
      if (hasCharset === false) {
        report({
          position: node.loc,
          message: 'The <meta> tag should have a charset attribute.',
        });
      }
    }
  },
};
