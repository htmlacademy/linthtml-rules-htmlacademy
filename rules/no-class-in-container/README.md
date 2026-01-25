# htmlacademy/no-class-in-container

This rule checks for `class` attributes on child elements inside a specified container.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content", "wrapper"],
    "ignore": {
      "tags": ["h1", "h2"],
      "class": ["content__title", "content__text"]
    }
  }]
}
```

## true
When set to `true`, you must provide the container's `class` value. Multiple classes can be passed to `containers` to check multiple containers.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content", "wysiwg"]
  }]
}
```

Invalid:
```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

Because the child element `<h1>` has a `class`.

Valid:
```html
<div class="content">
  <h1>title</h1>
</div>

<div class="wysiwg">
  <h1>title</h1>
  <p>text</p>
</div>
```

### ignore
`ignore` accepts tags and classes to ignore inside the container.

#### ignore.tags
Ignores specified tags inside the container.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "tags": ["h1"]
    }
  }]
}
```

Invalid:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

because `<p>` has a `class` attribute.

Valid:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p>text</p>
</div>
```

#### ignore.classes
Ignores elements with specified classes inside the container.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "classes": [ "content__title", "content__text"]
    }
  }]
}
```

Invalid:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <h2 class="content__subtitle">subtitle</h2>
  <p class="content__text">text</p>
</div>
```

Because `content__subtitle` is present.

Valid:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
  <svg width="20" height="20"></svg>
</div>
```
