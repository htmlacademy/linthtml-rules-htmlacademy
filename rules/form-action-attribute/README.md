# htmlacademy/form-action-attribute

This rule checks the `action` attribute on `<form>` elements. Accepts `true` or `false`.

## true
`<form>` must have a non-empty `action` attribute.

Invalid:
```html
<form action=""></form>
<form></form>
```

Valid:
```html
<form action="https://echo.htmlacademy.ru"></form>
```
