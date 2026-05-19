# htmlacademy/svg-role-img

Inline `<svg>` elements either convey content or are purely decorative; assistive technology can only tell them apart with explicit attributes. The rule requires:

- a content `<svg>` to have `role="img"` (or `role="image"`) **and** an accessible name through `aria-label` or `aria-labelledby`;
- a decorative `<svg>` to opt out with `aria-hidden="true"`.

## true

Invalid:

```html
<svg width="20" height="20"><path d="…"/></svg>
<!-- neither content nor decorative -->

<svg role="img" width="20" height="20"><path d="…"/></svg>
<!-- role="img" without aria-label / aria-labelledby -->

<svg aria-label="Logo" width="20" height="20"><path d="…"/></svg>
<!-- aria-label without role="img" — assistive tech may ignore it -->
```

Valid:

```html
<svg role="img" aria-label="Логотип" width="20" height="20"><path d="…"/></svg>

<svg role="image" aria-labelledby="logo-title" width="20" height="20">
  <title id="logo-title">Логотип</title>
  <path d="…"/>
</svg>

<svg aria-hidden="true" focusable="false" width="16" height="16"><path d="…"/></svg>
<!-- decorative -->
```
