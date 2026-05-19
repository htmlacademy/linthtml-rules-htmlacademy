# htmlacademy/req-submit-button

This rule requires every `<form>` to contain a submit button or to be linked to one via the `form` attribute. A submit button is either:

- `<button type="submit">` — explicit submit button,
- `<button>` without a `type` attribute — the HTML spec defaults `<button>` inside a form to `type="submit"`,
- `<input type="submit">`,
- a `<button type="submit">` or `<input type="submit">` placed outside the form and linked to it through `form="<form-id>"`.

A submit button whose `form` attribute points at a different form is not counted as the inner form's submitter.

## true

Invalid:

```html
<form action="/api">
  <input type="text" name="name">
</form> <!-- no submit button at all -->

<form action="/api">
  <button type="reset">Clear</button>
</form> <!-- only a reset button -->

<form action="/api">
  <button type="button">Click</button>
</form> <!-- explicit non-submit type -->
```

Valid:

```html
<form action="/api">
  <button type="submit">Send</button>
</form>

<form action="/api">
  <button>Send</button> <!-- default type is "submit" -->
</form>

<form action="/api">
  <input type="submit" value="Send">
</form>

<form action="/api">
  <div>
    <button type="submit">Send</button>
  </div>
</form>

<form id="contact" action="/api">
  <input type="text" name="name">
</form>
<button form="contact" type="submit">Send</button>
```
