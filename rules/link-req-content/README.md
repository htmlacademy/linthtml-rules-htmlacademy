# htmlacademy/link-req-content

This rule checks that links have text content. [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H30) requires that every `<a>` link contains text describing the link's purpose, using either plain text or an `<img>` with an `alt` attribute set.

The rule recognizes the following patterns:
- Text (non-whitespace) inside the link
- Images with non-empty alt text
- `aria-label` either on the link or on at least one descendant.

## true

Invalid:
```html
<a>
  <img src="images/cat.gif" width="100" height="1000">
</a>

<a href="#">
  <svg>...</svg>
</a>
```

Valid:
```html
<a href="#">
  lorem ipsum
</a>

<a href="#">
  <img src="images/cat.gif" width="100" height="100" alt="cat page">
</a>

<a href="#" aria-label="lorem ipsum"></a>
```
