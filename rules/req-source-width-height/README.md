# htmlacademy/req-source-width-height

Правило требует наличие атрибутов `width` и `height` у `<source>`, находящихся внутри `<piture>`.

## true
Если включён, `<source>` без атрибутов `width` и `height` считаются проблемой.


Проблемными считаются следующие шаблоны:
```html
<picture>
  <source srcset="images/image-tablet.jpg" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```

Следующие шаблоны **не** считаются проблемами:

```html
<picture>
  <source srcset="images/image-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```
