# htmlacademy/no-double-br

This rule checks for consecutive double `<br>` elements. Accepts `true` or `false`.

## true
A `<br>` element must not be immediately followed by another `<br>`.

Invalid:

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

Valid:
```html
<p>Lorem ipsum <br>dolor <br>sit amet.</p>
```

```html
<p>Lorem ipsum <br>dolor sit amet.</p>
<p><br>sit amet.</p>
```
