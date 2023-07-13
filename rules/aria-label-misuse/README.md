# htmlacademy/aria-label-misuse

Запрещает неправильное использование `aria-label`. Атрибут может быть использован только для следующих элементов:

- [Interactive elements](https://html.spec.whatwg.org/multipage/interactive-elements.html#interactive-elements)
- [Landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role)
- `<iframe>`
- `<summary>`
- `<table>`, `<td>` and `<th>`

Хотя `aria-label` допускается для любого элемента, на практике `aria-label` поддерживается только для интерактивных элементов, виджетов и iframes.

Используйте `aria-label`, чтобы обеспечить доступное имя, для интерактивных элементов, таких как ссылки, видео, элементы управления формами, для ориентиров и виджетов.

## true

Проблемными считаются следующие шаблоны:
```html
<svg aria-label="description"></svg>
```

Следующие шаблоны **не** считаются проблемами:
```html
<input type="text" name="name" aria-label="description">
```
