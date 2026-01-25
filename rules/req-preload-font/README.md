# htmlacademy/req-preload-font

This rule checks for font `preload` declarations.

## true
Font preloading must be specified in `<head>`.

```html
<head>
  <link rel="preload" href="path/to/font.font" as="font" type="font/*" crossorigin="anonymous">
</head>
```

`*` - font type
`path/to/font.font` - path to font


Invalid:

Without `preload`:
```html
<head>

</head>
```

With empty or missing href:
```html
<head>
  <link rel="preload" href="" type="font/woff2" as="font">
</head>
```

Valid:
```html
<head>
  <link rel="preload" href="path/to/font.woff2" as="font" type="font/woff2">
</head>
```
