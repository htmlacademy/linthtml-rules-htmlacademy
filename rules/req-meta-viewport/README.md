# htmlacademy/req-meta-viewport

Правило проверяет наличие `<meta name="viewport" content="width=device-width,initial-scale=1">` в `<head>`. Правило принимает значения `true` или `false`

## true
В `<head>` находится `<meta name="viewport" content="width=device-width,initial-scale=1">`.

Проблемными считаются следующие шаблоны:
```html
<head>
  ...
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
```

