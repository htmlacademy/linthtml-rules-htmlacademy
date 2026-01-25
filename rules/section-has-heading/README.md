# htmlacademy/section-has-heading

This rule checks that `<section>` elements have a heading (h1-h6). Accepts `true` or `false`.

## true
`<section>` must have a child heading at any level (h1-h6).

Invalid:
```html
<section>
  ...
</section>
```

Valid:
```html
 <section>
  <h2>title</h2>
</section>

 <section>
   <div>
      <h2>title</h2>
   </div>
</section>
```

The heading (h1-h6) can be nested at any level.
