# htmlacademy/req-single-styles

Собственные стили проекта должны быть подключены одним файлом в `<head>`.
Правило разрешает не более одного `link rel="stylesheet"` в `<head>`.

Проблемными считаются следующие шаблоны:
```html
<head>
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/footer.css">
</head>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
