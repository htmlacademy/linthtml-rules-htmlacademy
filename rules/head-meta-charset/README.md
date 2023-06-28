# htmlacademy/head-meta-charset

Правило проверяет наличие `<meta charset="">` в `<head>`. Правило принимает значения `true` или `false`

## true
В `<head>` находится `<meta charset="">`.

Проблемными считаются следующие шаблоны:
```html
<head>
  ...
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <meta charset="windows-1251">
</head>

<head>
  <meta charset="utf-8">
</head>
```

