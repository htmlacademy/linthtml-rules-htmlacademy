# htmlacademy/section-has-heading

Правило проверяет наличие заголовка любого уровня h1-h6 у `<section>`. Правило принимает значения `true` или `false`

## true
У `<section>` есть дочерний заголовок любого уровня h1-h6.

Проблемными считаются следующие шаблоны:
```html
<section>
  ...
</section>
```

Следующие шаблоны **не** считаются проблемами:
```html
 <section>
  <h2>title</h2>
</section>

 <section>
   <div>
      <h2>title</h2>
   </div>
</section>
```

Вложенность заголовка(h1-h6) может быть любой.
