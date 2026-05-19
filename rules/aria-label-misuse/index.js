import {is_tag_node, has_non_empty_attribute, attribute_has_value} from '@linthtml/dom-utils';

const whitelisted = new Set([
  'main', 'nav', 'table', 'td', 'th', 'aside', 'header', 'footer', 'section', 'article', 'summary',
]);

const interactive = new Set([
  'a', 'audio', 'button', 'details', 'iframe', 'input', 'label', 'progress', 'select', 'textarea', 'video',
]);

const isSvgImage = (node) =>
  node.name.toLowerCase() === 'svg'
  && (attribute_has_value(node, 'role', 'img') || attribute_has_value(node, 'role', 'image'));

const isValidUsage = (node) => {
  const tagName = node.name.toLowerCase();

  if (whitelisted.has(tagName)) {
    return true;
  }
  if (interactive.has(tagName)) {
    return true;
  }
  if (isSvgImage(node)) {
    return true;
  }
  return has_non_empty_attribute(node, 'tabindex');
};

export default {
  name: 'htmlacademy/aria-label-misuse',
  lint(node, rule_config, {report}) {
    if (is_tag_node(node) && has_non_empty_attribute(node, 'aria-label') && !isValidUsage(node)) {
      report({
        position: node.loc,
        message: '"aria-label" cannot be used on this element',
      });
    }
  },
};
