# htmlacademy/aria-label-misuse

Disallows improper use of `aria-label`. The attribute may only be used for the following elements:

- [Interactive elements](https://html.spec.whatwg.org/multipage/interactive-elements.html#interactive-elements)
- [Landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
- `<iframe>`
- `<summary>`
- `<table>`, `<td>` and `<th>`

While `aria-label` is allowed on any element, in practice `aria-label` is only supported for interactive elements, widgets, and iframes.

Use `aria-label` to provide an accessible name for interactive elements such as links, videos, form controls, landmarks, and widgets.

## true

Invalid:
```html
<svg aria-label="description"></svg>
```

Valid:
```html
<input type="text" name="name" aria-label="description">
```
