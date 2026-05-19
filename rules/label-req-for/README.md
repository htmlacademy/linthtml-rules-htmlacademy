# htmlacademy/label-req-for

This rule checks that every `<label>` is properly associated with a form control. A label must either:

- Have a non-empty `for` attribute pointing to the `id` of a form control (`<input>`, `<select>`, `<textarea>`, `<button>`, `<meter>`, `<output>`, `<progress>`), or
- Contain a labelable element as a descendant (implicit association).

An empty `for=""` attribute is allowed and skipped — it matches the HTML spec's "explicitly no association" case.

## true

Invalid:

```html
<label>Username</label> <!-- no for, no descendant control -->

<label for="missing-id">Email</label> <!-- no element with id="missing-id" -->

<label for="block">Section</label>
<div id="block"></div> <!-- <div> is not a form control -->
```

Valid:

```html
<label for="username">Username</label>
<input type="text" id="username">

<label>
  Email
  <input type="email">
</label> <!-- implicit association -->

<label for="city">City</label>
<select id="city"><option>Moscow</option></select>

<label for="">Detached text</label> <!-- empty for is explicitly allowed -->
```
