# htmlacademy/input-name-unique

This rule checks that every `<input>` inside a `<form>` has a unique `name` attribute. Radio inputs are exempt because sharing a `name` is required for radio-button group semantics.

## true

Invalid:

```html
<form action="/api">
  <input type="text" name="email">
  <input type="hidden" name="email"> <!-- duplicate, not radio -->
</form>

<form action="/api">
  <input type="text" name="query">
  <input type="text" name="query"> <!-- two plain text inputs with same name -->
  <input type="text" name="query"> <!-- third duplicate also reported -->
</form>

<form action="/api">
  <input type="radio" name="color" value="red">
  <input type="text" name="color"> <!-- radio + non-radio mix with same name -->
</form>
```

Valid:

```html
<form action="/api">
  <input type="radio" name="size" value="s">
  <input type="radio" name="size" value="m">
  <input type="radio" name="size" value="l">
</form>

<form action="/api">
  <input type="text" name="first-name">
  <input type="text" name="last-name">
</form>

<form id="form-a" action="/api">
  <input type="text" name="query">
</form>
<form id="form-b" action="/api">
  <input type="text" name="query"> <!-- same name, different form — valid -->
</form>
```

## Scope

- Only `<input>` elements that are direct or nested descendants of a `<form>` are checked.
- `<input>` elements outside any `<form>` are ignored.
- `<input>` elements without a `name` attribute or with an empty `name` are ignored.
