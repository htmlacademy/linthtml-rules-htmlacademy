# htmlacademy/a-target-rel

This rule checks that `<a>` elements opening in a new browsing context (`target="_blank"`) declare `rel="noreferrer"`. Per the HTML spec, `noreferrer` implies `noopener`, so a single keyword is enough to cover both the privacy concern (no `Referer` header) and the security concern (the opened page cannot access `window.opener`).

Modern browsers (Chrome, Firefox, Safari) also default to `noopener` for `target="_blank"` since 2020, so this rule is disabled by default in the shipped config. Enable it when you need explicit confirmation in source.

## true

Invalid:

```html
<a href="https://htmlacademy.pro" target="_blank">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener">Link</a>
<!-- noopener alone does not block referrer leak -->
```

Valid:

```html
<a href="https://htmlacademy.pro" target="_blank" rel="noreferrer">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener noreferrer">Link</a>
```
