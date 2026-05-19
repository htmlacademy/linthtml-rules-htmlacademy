import {is_tag_node, has_non_empty_attribute, attribute_has_value} from '@linthtml/dom-utils';

const hasRoleImg = (node) =>
  attribute_has_value(node, 'role', 'img') || attribute_has_value(node, 'role', 'image');

const hasAccessibleName = (node) =>
  has_non_empty_attribute(node, 'aria-label') || has_non_empty_attribute(node, 'aria-labelledby');

export default {
  name: 'htmlacademy/svg-role-img',
  lint(node, rule_config, {report}) {
    if (!is_tag_node(node) || node.name.toLowerCase() !== 'svg') {
      return;
    }

    if (attribute_has_value(node, 'aria-hidden', 'true')) {
      return;
    }

    if (!hasRoleImg(node)) {
      report({
        position: node.loc,
        message: '<svg> conveying content must have role="img" (or aria-hidden="true" if purely decorative).',
      });
      return;
    }

    if (!hasAccessibleName(node)) {
      report({
        position: node.loc,
        message: '<svg role="img"> must have an accessible name via aria-label or aria-labelledby.',
      });
    }
  },
};
