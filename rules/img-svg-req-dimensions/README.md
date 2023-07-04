# htmlacademy/img-svg-req-dimensions

Правило проверяет наличие атрибутов `width` и `height` у элементов `<img>` и `<svg>`. Правило принимает значения `true` или `false`.

## true
Элементы `<img>` и `<svg>` содержат оба атрибута `width` и `height`.

Проблемными считаются следующие шаблоны:

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

Следующие шаблоны **не** считаются проблемами:
```html
<img src="images/image.jpg" width="500" height="300" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
