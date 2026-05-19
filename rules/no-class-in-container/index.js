import {is_tag_node, has_attribute} from '@linthtml/dom-utils';

const checkChildNodes = (node, report, container, ignore) => {
  node.children.forEach((child) => {
    if (is_tag_node(child)) {
      if (ignore?.tags?.includes(child.name)) {
        return;
      }
      if (has_attribute(child, 'class')) {
        let hasIgnoredClass = false;
        child.attributes.forEach((attribute) => {
          const classList = attribute.value.chars.split(' ');
          if (classList.some((className) => ignore?.classes?.includes(className))) {
            hasIgnoredClass = true;
          }
        });
        if (hasIgnoredClass) {
          return;
        }
        report({
          position: child.loc,
          message: `Element inside the specified container '${container}' should not have a class attribute`,
        });
      }
    }
    if (child.children) {
      checkChildNodes(child, report, container, ignore);
    }
  });
};

export default {
  name: 'htmlacademy/no-class-in-container',
  lint(node, {containers, ignore = {}}, {report}) {
    if (is_tag_node(node) && has_attribute(node, 'class')) {
      node.attributes.forEach((attribute) => {
        const classList = new Set(attribute.value.chars.split(' '));
        containers.forEach((container) => {
          if (classList.has(container)) {
            checkChildNodes(node, report, container, ignore);
          }
        });
      });
    }
  },
};
