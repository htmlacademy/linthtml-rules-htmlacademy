# htmlacademy/req-preload-font

Правило проверяет наличие значение `preload` для шрифта.

## true
В `<head>` должна быть указана предзагрузка шрифтов 

```html
<head>
  <link rel="preload" href="path/to/font.font" as="font" type="font/*" crossorigin="anonymous">
</head>
```

`*` - тип шрифта
`path/to/font.font` - путь до шрифта


Проблемными считаются следующие шаблоны:

Без `preload`:
```html
<head>
  
</head>
```

С пустым или отсутствующим href:
```html
<head>
  <link rel="preload" href="" type="font/woff2" as="font">
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <link rel="preload" href="path/to/font.woff2" as="font" type="font/woff2">
</head>
```

