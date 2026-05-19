# htmlacademy/boolean-attr-no-value

Boolean HTML attributes (`disabled`, `required`, `checked`, `readonly`, `multiple`, `selected`, `autofocus`, `hidden`, `open`, `async`, `defer`, `ismap`, `novalidate`, `formnovalidate`, `autoplay`, `controls`, `loop`, `muted`, `default`, `reversed`, `nomodule`, `inert`, `playsinline`, `itemscope`) must be written without a value. Their mere presence on an element activates the behaviour, so any explicit value is redundant and visually noisy.

The rule relies on `@linthtml/dom-utils`' `is_boolean_attribute` to determine which attributes are boolean.

## true

Invalid:

```html
<input type="text" disabled="disabled">

<input type="checkbox" checked="true">

<button type="submit" autofocus="autofocus">Send</button>

<details open="open"><summary>Title</summary></details>
```

Valid:

```html
<input type="text" disabled>

<input type="checkbox" checked>

<button type="submit" autofocus>Send</button>

<details open><summary>Title</summary></details>
```
