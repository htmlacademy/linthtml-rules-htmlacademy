# htmlacademy/ban-url-spaces
This rule checks for spaces in URLs within `href` and `src` attributes.

While browsers may escape characters, spaces in URLs are forbidden by the specification.

Invalid:
```html
<a href="https://htmlacademy.pro?query=some long param">Link</a>
```

Valid:

```html
<a href="https://htmlacademy.pro?query=some%20long%20param">Link</a>
```
