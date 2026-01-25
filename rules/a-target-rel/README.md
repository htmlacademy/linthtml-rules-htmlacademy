# htmlacademy/a-target-rel
This rule checks that `<a>` links with `target="_blank"` have a `rel` attribute with both `noreferrer` and `noopener` values. Accepts `true` or `false`.

## true
Links `<a>` with `target="_blank"` must have a `rel` attribute with both `noreferrer` and `noopener` values.

Invalid:
```html
<a href="https://htmlacademy.pro" target="_blank">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noreferrer">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener">Link</a>
```

Valid:
```html
<a href="https://htmlacademy.pro" target="_blank" rel="noreferrer noopener">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener noreferrer">Link</a>
```
