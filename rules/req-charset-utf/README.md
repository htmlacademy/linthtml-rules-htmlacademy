# htmlacademy/req-charset-utf

This rule checks that `<meta charset="">` has the value `utf-8`. Accepts `true` or `false`.

## true
`<meta charset="">` must have the value `utf-8`.

Invalid:
```html
<head>
  <meta charset="windows-1251">
</head>
```

Valid:
```html
<head>
  <meta charset="utf-8">
</head>
```
