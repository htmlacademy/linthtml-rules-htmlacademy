# htmlacademy/replaced-elements-req-dimensions

This rule checks for the presence of `width` and `height` attributes on `<img>`, `<svg>`, `<video>`, and `<iframe>` elements. Accepts `true` or `false`.

## true
`<img>`, `<svg>`, `<video>`, and `<iframe>` elements must have both `width` and `height` attributes.

Invalid:

```html
<img src="images/image.jpg">
<img width="100" src="images/image.jpg">
<img height="100" src="images/image.jpg">

<img src="images/image.jpg" width="500" height="" alt="">
<img src="images/image.jpg" width="" height="300" alt="">
<img src="images/image.jpg" width="" height="" alt="">
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg width="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<svg width="" height="" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```

```html
<video src="video.mp4"></video>
<video width="640" src="video.mp4"></video>
```

```html
<iframe src="https://example.com"></iframe>
<iframe width="560" src="https://www.youtube.com/embed/example"></iframe>
```

Valid:
```html
<img src="images/image.jpg" width="500" height="300" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>

<video width="640" height="360" src="video.mp4"></video>

<iframe width="560" height="315" src="https://www.youtube.com/embed/example"></iframe>
```
