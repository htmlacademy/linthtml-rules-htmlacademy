# htmlacademy/label-req-text

A `<label>` must contain visible text so that users (including screen reader users) understand what the associated control is for. A label without visible text provides no accessible description.

A label counts as having visible text if any descendant contains a non-whitespace text node at any depth.

If the `<label>` itself carries an `aria-label` attribute with a non-empty value, it is considered valid.

## true

Invalid:

```html
<label><input type="text"></label>

<label>   <input type="text">   </label>

<label></label>
```

Valid:

```html
<label>Имя<input type="text"></label>

<label for="name">Имя</label>

<label><span>Имя</span><input type="text"></label>

<label aria-label="Имя"><input type="text"></label>
```
