# htmlacademy/req-meta-viewport

This rule checks for the presence of `<meta name="viewport" content="width=device-width,initial-scale=1">` in `<head>`. Accepts `true` or `false`.

## true
`<head>` must contain `<meta name="viewport" content="width=device-width,initial-scale=1">`.

Invalid:
```html
<head>
  ...
</head>
```

Valid:
```html
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
```
