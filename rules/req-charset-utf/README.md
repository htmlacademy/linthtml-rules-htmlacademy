# htmlacademy/req-charset-utf

Правило проверяет наличие значение `utf-8` у `<meta charset="">`. Правило принимает значения `true` или `false`

## true
У `<meta charset="">` значение `utf-8`.

Проблемными считаются следующие шаблоны:
```html
<head>
  <meta charset="windows-1251">
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <meta charset="utf-8">
</head>
```

