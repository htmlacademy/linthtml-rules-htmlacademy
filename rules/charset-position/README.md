# htmlacademy/charset-position

Правило позиционирования `<meta charset="">` в `<head>`. Правило принимает значения `true` или `false`

## true 
`<meta charset="">` указан первым непосредственным ребёнком в `<head>`.

Проблемными считаются следующие шаблоны:
```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
</head>

<head>
  <title>Title</title>
  <meta charset="utf-8">
</head>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Title</title>
  <link href="./styles/styles.css" rel="stylesheet">
  <meta charset="utf-8">
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <meta charset="utf-8">
  <title>Title</title>
</head>
```

