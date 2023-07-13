# htmlacademy/no-px-size

Правило проверяет значение атрибутов `width` и `height` у элементов `<img>` и `<svg>`. Правило принимает значения `true` или `false`.

## true
Атрибуты `width` и `height` содержат только цифры, без единиц измерения.

Проблемными считаются следующие шаблоны:

```html
<img width="100px" height="100%" src="images/image.jpg">
```

Следующие шаблоны **не** считаются проблемами:
```html
<img width="500" height="300" src="images/image.jpg" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```
