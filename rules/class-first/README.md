# htmlacademy/class-first

This rule checks the position of the `class` attribute on elements. Accepts `true` or `false`.

## true
The `class` attribute must be listed first.

Invalid:
```html
<a href="" class="link"></a>
<input type="text" class="field">
<div data-attr="test" class="products"></div>
```

Valid:
```html
<a class="link" href=""></a>
<input class="field" type="text">
<div class="products" data-attr="test"></div>
```
