# htmlacademy/req-webp-in-picture

Правило проверяет наличие webp изображений в теге `<picture>`.

## true

Проблемными считаются следующие шаблоны:

```html
<picture>
  <source width="400" height="200" srcset="image.jpg" type="image/jpeg">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>

<picture
  <source width="800" height="400" srcset="image-800w.png" type="image/png" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.png" type="image/png" media="(min-width: 400px)">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```

Следующие шаблоны **не** считаются проблемами:

```html
<picture>
  <source width="800" height="400" srcset="image-800w.webp" type="image/webp" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.webp" type="image/webp" media="(min-width: 400px)">
  <source width="800" height="400" srcset="image-800w.png" type="image/png" media="(min-width: 800px)">
  <source width="400" height="200" srcset="image-400w.png" type="image/png" media="(min-width: 400px)">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```

```html
<picture>
  <source width="400" height="200" srcset="image.webp" type="image/webp">
  <source width="400" height="200" srcset="image.jpg" type="image/jpeg">
  <img width="400" height="200" src="image.png" alt="Example image">
</picture>
```
