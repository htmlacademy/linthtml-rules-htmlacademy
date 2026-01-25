# htmlacademy/head-meta-charset

This rule checks for the presence of `<meta charset="">` in `<head>`. Accepts `true` or `false`.

## true
`<head>` must contain `<meta charset="">`.

Invalid:
```html
<head>
  ...
</head>
```

Valid:
```html
<head>
  <meta charset="windows-1251">
</head>

<head>
  <meta charset="utf-8">
</head>
```
