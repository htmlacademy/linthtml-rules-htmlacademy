# htmlacademy/attr-req-value
Checks that attributes are not empty.

Fork: https://linthtml.vercel.app/user-guide/rules/list/attr-req-value

This rule requires attributes to have values, and allows specifying a list of exceptions in `ignore`.

## true
When enabled, attributes cannot be empty.

> Boolean attributes may have no values, e.g., `disabled` or `hidden`.

Invalid:
```html
<button id= ></button>
<button id=""></button>
<button id= class="bar" ></button>
<button class></button>
```

Valid:

```html
<button class="foo"></button>

<button disabled></button>
```

### ignore
Ignores listed attributes. Accepts `string|regex` values.

```js
{
  'htmlacademy/attr-req-value': [true,
    {
      ignore: ['alt', '/^data-/']
    }
  ]
}
```

Invalid:

```html
<button id=""></button>
```

Valid:

```html
<img src="images/image.jpg" width="100" height="100" alt="">
<section data-test></section>
```

## Exceptions
One `<option>` in a `<select>` may have an empty `value` attribute if it is selected by default.

The following pattern is valid:

```html
<label for="fruits">Fruits</label>
<select id="fruits" name="fruits" required>
  <option value="">Select...</option>
  <option value="banana">Banana</option>
  <option value="apple">Apple</option>
</select>
```
