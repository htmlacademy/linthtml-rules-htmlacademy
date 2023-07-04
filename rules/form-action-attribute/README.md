# htmlacademy/form-action-attribute

Правило проверяет расположение атрибута `action` у тега `<form>`. Правило принимает значения `true` или `false`

## true
У `<form>` должен быть заполненный атрибут `action`.

Проблемными считаются следующие шаблоны:
```html
<form action=""></form>
<form></form>
```

Следующие шаблоны **не** считаются проблемами:
```html
<form action="https://echo.htmlacademy.ru"></form>
```
