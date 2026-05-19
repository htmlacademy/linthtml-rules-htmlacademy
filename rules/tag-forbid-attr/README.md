# htmlacademy/tag-forbid-attr

When enabled, specified attributes (optionally restricted by value) must be absent from the specified tag.

## Configuration

Each entry under a tag is an object `{name, value?}`:

- `name` — attribute name to forbid.
- `value` — optional restriction:
  - omitted → the attribute is forbidden regardless of value,
  - string → the attribute is forbidden only when its value equals the string,
  - `RegExp` → the attribute is forbidden when its value matches the pattern.

```json
{
  "tag-forbid-attr": [
    true,
    {
      "body": [{"name": "class"}],
      "picture": [{"name": "class"}],
      "link": [{"name": "type", "value": "text/css"}],
      "script": [{"name": "type", "value": "text/javascript"}]
    }
  ]
}
```

Invalid:

```html
<body class="page"></body>
<picture class="hero"><img src="" alt=""></picture>
<link rel="stylesheet" href="style.css" type="text/css">
<script src="app.js" type="text/javascript"></script>
```

Valid:

```html
<body></body>
<picture><img class="hero" src="" alt=""></picture>
<link rel="stylesheet" href="style.css">
<script src="app.js"></script>
<script src="app.js" type="module"></script>
```
