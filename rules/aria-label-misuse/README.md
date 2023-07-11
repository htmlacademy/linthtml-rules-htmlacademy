# htmlacademy/aria-label-misuse

Запрещает неправильное использование `aria-label`. Атрибут может быть использован только для следующих элементов:

- Interactive elements
- Labelable elements
- Landmark elements
- `<area>`
- `<form>` and `<fieldset>`
- `<iframe>`
- `<img>` and `<figure>`
- `<summary>`
- `<table>`, `<td>` and `<th>`

## true

Проблемными считаются следующие шаблоны:
```html
<img src="" aria-label="foobar">
```

Следующие шаблоны **не** считаются проблемами:
```html
<input type="text" aria-label="foobar">
```
