# htmlacademy/no-blocking-script

This rule checks the placement of scripts in markup. Accepts `true` or `false`.

## true
Scripts should be placed at the bottom of the page to avoid blocking content rendering during page load.

If a script is non-blocking (`defer`, `async`, or `type="module"`), it can be placed in `<head>`.

Invalid:
```html
<html lang="ru">
<head>
  <script src="app.js"></script>
</head>
<body>…</body>
</html>
```

Valid:
```html
<html lang="ru">
<head>…</head>
<body>
<!-- Page content -->
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

```html
<html lang="ru">
<head>
  <script src="app.js" type="module"></script>
</head>
<body>…</body>
</html>
```
