# htmlacademy/attr-order

Enforces a consistent order of HTML attributes within a tag. Attributes are organised into ordered groups; the rule reports the first attribute that appears in an earlier group than one already seen.

## Configuration

The rule accepts either `true` (use the default order) or `[true, groups]`, where `groups` is an array of arrays. Each inner array lists patterns that belong to the same group; order within a group is unrestricted.

Patterns:
- exact name — `"class"`, `"href"`,
- glob with trailing `*` — `"data-*"`, `"aria-*"`,
- wildcard `"*"` — matches anything not handled by an earlier group.

The default groups follow HTML Academy Codeguide:

```js
[['class'], ['src', 'href'], ['data-*'], ['*']]
```

That is: `class → src/href → data-* → others`.

## true

Invalid:

```html
<input type="text" class="field" id="login">

<a href="/contacts" class="link">Contacts</a>

<img alt="Photo" width="200" height="200" src="photo.jpg">

<input class="field" type="text" data-role="login" placeholder="...">
<!-- placeholder must come after data-role per the default order -->
```

Valid:

```html
<input class="field" type="text" id="login">

<a class="link" href="/contacts">Contacts</a>

<img class="hero" src="photo.jpg" alt="Photo" width="200" height="200">

<input class="field" type="text" data-role="login">
<!-- order inside the "others" group is free -->
<input class="field" type="text" placeholder="..." autocomplete="off">
```

## Custom configuration

```json
{
  "htmlacademy/attr-order": [
    true,
    [
      ["class"],
      ["id"],
      ["name", "type"],
      ["src", "href", "for"],
      ["data-*", "aria-*"],
      ["*"]
    ]
  ]
}
```
