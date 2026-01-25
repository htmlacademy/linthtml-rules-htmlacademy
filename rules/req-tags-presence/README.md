# htmlacademy/req-tags-presence

When enabled, specified tags must be present on the page. The rule is violated if any tags are missing.

## true

Any tags can be passed in the array. If at least one of them is missing, the rule is violated.


```json
{
  "htmlacademy/req-tags-presence": [true, ["h1", "main"]]
}
```

Invalid:

Missing `<h1>` and `<main>` tags:

```html
<body>
  <div></div>
  <div></div>
  <div></div>
</body>
```

Missing `<h1>` tag:

```html
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
```

Valid:

```html
<body>
  <main>
    <h1></h1>
  </main>
</body>
```
