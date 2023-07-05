# htmlacademy/img-svg-req-dimensions

Правило проверяет идущий подряд двойной `<br>`. Правило принимает значения `true` или `false`.

## true
После элемента `<br>` не идёт другой `<br>`. 

Проблемными считаются следующие шаблоны:

```html
<p>Lorem ipsum dolor sit amet.</p>
<br>
<br>
<p>Lorem ipsum dolor sit amet.</p>

<p>Lorem ipsum dolor sit amet.</p>
<br>


<br>
<p>Lorem ipsum dolor sit amet.</p>
```

```html
<p>Lorem ipsum <br><br>sit amet.</p>
<p>Lorem ipsum <br> <br>sit amet.</p>
```

Следующие шаблоны **не** считаются проблемами:
```html
<p>Lorem ipsum <br>dolor <br>sit amet.</p>
```

```html
<p>Lorem ipsum <br>dolor sit amet.</p>
<p><br>sit amet.</p>
```

