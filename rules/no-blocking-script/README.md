# htmlacademy/no-blocking-script

Правило проверяет расположение скриптов в разметке. Правило принимает значения `true` или `false`.

## true
Скрипты должны быть подключены в самом низу страницы, чтобы при её загрузке не блокировать отображение содержимого.

Если скрипт не блокирующий (`defer`, `async`), то можно в `<head>`

Проблемными считаются следующие шаблоны:
```html
<html lang="ru">
<head>
  <script src="app.js"></script>
</head>
<body>…</body>
</html>
```

Следующие шаблоны **не** считаются проблемами:
```html
<html lang="ru">
<head>…</head>
<body>
<!-- Содержимое страницы -->
<script src="app.js"></script>
</body>
</html>
```

```html
<html lang="ru">
<head>
  <script async src="app.js"></script>
</head>
<body>…</body>
</html>
```

