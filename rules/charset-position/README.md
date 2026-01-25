# htmlacademy/charset-position

This rule validates the position of `<meta charset="">` in `<head>`. Accepts `true` or `false`.

## true
`<meta charset="">` must be the first direct child in `<head>`.

Invalid:
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

Valid:
```html
<head>
  <meta charset="utf-8">
  <title>Title</title>
</head>
```
