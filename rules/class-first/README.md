# htmlacademy/class-first

Правило проверяет расположение атрибута `class` у тега. Правило принимает значения `true` или `false`

## true
Атрибут `class` должен быть указан первым.

Проблемными считаются следующие шаблоны:
```html
<a href="" class="link"></a>
<input type="text" class="field">
<div data-attr="test" class="products"></div>
```

Следующие шаблоны **не** считаются проблемами:
```html
<a class="link" href=""></a>
<input class="field" type="text">
<div class="products" data-attr="test"></div>
```

