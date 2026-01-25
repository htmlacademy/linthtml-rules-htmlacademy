# htmlacademy/no-px-size

This rule checks the values of `width` and `height` attributes on `<img>` and `<svg>` elements. Accepts `true` or `false`.

## true
The `width` and `height` attributes must contain only numbers, without units.

Invalid:

```html
<img width="100px" height="100%" src="images/image.jpg">
```

Valid:
```html
<img width="500" height="300" src="images/image.jpg" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
