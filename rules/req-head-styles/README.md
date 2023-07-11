# htmlacademy/req-head-styles

Собственные стили проекта должны быть подключены в `<head>`.
Правило запрещает подключение стилей вне `<head>`.

Проблемными считаются следующие шаблоны:
```html
<body>
  <link rel="stylesheet" href="styles/main.css">
</body>
```

Следующие шаблоны **не** считаются проблемами:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
