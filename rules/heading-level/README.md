# htmlacademy/heading-level

This rule checks that heading levels (`<h1>`-`<h6>`) are used without skipping levels in the document.

The first heading in the document must be `<h1>`. Each subsequent heading may go up by one level at most (e.g. `<h2>` after `<h1>`), but may return to any previous or equal level freely.

## true

Invalid:

```html
<!-- first heading is not h1 -->
<h2>Section</h2>
<p>Content</p>

<!-- skip from h1 to h3 -->
<h1>Title</h1>
<h3>Subsection</h3>

<!-- skip from h2 to h4 -->
<h1>Title</h1>
<h2>Section</h2>
<h4>Deep</h4>

<!-- after returning to h2, skipping to h4 -->
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h2>Another section</h2>
<h4>Deep</h4>
```

Valid:

```html
<!-- single h1 -->
<h1>Title</h1>

<!-- sequential levels -->
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

<!-- going up and back down is OK -->
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h2>Another section</h2>
<h3>Another subsection</h3>

<!-- same level repeated is OK -->
<h1>Title</h1>
<h2>Section one</h2>
<h2>Section two</h2>
<h3>Subsection</h3>
```
