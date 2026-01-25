# htmlacademy/input-req-label

Fork: https://linthtml.vercel.app/user-guide/rules/list/input-req-label

This rule requires a label for input fields, and allows specifying the label via `aria-label`.

## true
When enabled, labels cannot be empty.


Invalid:
```html
<input type="text" value="great">

<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="text" id="romeo">
</section>
```

Valid:

```html
<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="radio" id="dinosaur">
</section>

<label>
  Label!
  <input type="text">
</label>

<input type="text" aria-label="dinosaur">

<input type="hidden" value="dinosaur">

<input type="submit" value="submit">
```
