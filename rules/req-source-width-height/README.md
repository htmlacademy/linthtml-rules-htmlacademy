# htmlacademy/req-source-width-height

This rule requires `width` and `height` attributes on `<source>` elements inside `<picture>`.

## true
When enabled, `<source>` elements without `width` and `height` attributes are considered invalid.


Invalid:
```html
<picture>
  <source srcset="images/image-tablet.jpg" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```

Valid:

```html
<picture>
  <source srcset="images/image-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```
