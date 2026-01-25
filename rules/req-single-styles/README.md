# htmlacademy/req-single-styles

Project styles must be linked as a single file in `<head>`.
This rule allows no more than one `link rel="stylesheet"` in `<head>`.

Invalid:
```html
<head>
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="styles/footer.css">
</head>
```

Valid:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>
```
