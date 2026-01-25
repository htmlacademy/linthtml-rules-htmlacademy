# htmlacademy/req-head-styles

Project styles must be linked in `<head>`.
This rule disallows linking styles outside of `<head>`.

Invalid:
```html
<body>
  <link rel="stylesheet" href="styles/main.css">
</body>
```

Valid:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
