# Changelog

## 2.0.0 — ???

### Breaking

- Migrated to ESM. The plugin now requires Node.js >= 24 and is loaded via ESM `import`. Configs that reference the plugin by name (`plugins: ["linthtml-rules-htmlacademy"]` in `.linthtmlrc`) keep working.
- Renamed `htmlacademy/img-svg-req-dimensions` → `htmlacademy/replaced-elements-req-dimensions`. The renamed rule also covers `<video>` and `<iframe>` (previously only `<img>` and `<svg>`).

### Added

- New rule `htmlacademy/label-req-for`: validates that every `<label>` is properly associated with a form control. A label must either have a non-empty `for` attribute pointing to the `id` of a labelable element (`<input>`, `<select>`, `<textarea>`, `<button>`, `<meter>`, `<output>`, `<progress>`), or contain a labelable descendant. Empty `for=""` is explicitly allowed.
- New rule `htmlacademy/req-submit-button`: requires every `<form>` to contain a submit button. Recognises `<button type="submit">`, `<button>` (defaults to submit per the HTML spec), `<input type="submit">`, and external submitters linked through the `form` attribute. Closes [#40](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/40).
- New rule `htmlacademy/boolean-attr-no-value`: disallows assigning a value to HTML boolean attributes (`disabled`, `required`, `checked`, `readonly`, `multiple`, `selected`, `autofocus`, `hidden`, `open`, `async`, `defer`, `autoplay`, `controls`, `loop`, `muted`, `inert`, and others recognised by `@linthtml/dom-utils`). Implements the codeguide rule about boolean attributes being written without a value.
- New rule `htmlacademy/icon-button-aria-label`: a `<button>` without visible text content must have an accessible name via `aria-label`, `aria-labelledby`, or `title`. Covers icon-only buttons that would otherwise be invisible to screen readers. Addresses [#80](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/80) — the upstream `button-req-content` rule does not recognise `aria-labelledby`, so this plugin rule explicitly requires an accessible name for content-less buttons.
- New rule `htmlacademy/attr-order`: enforces an attribute order using configurable groups. The default order matches the codeguide policy `class → src/href → data-* → others` and supports glob patterns like `data-*`, `aria-*`, and `*` for the catch-all group. Order inside a group is free.
- New rule `htmlacademy/input-name-unique`: each `<input>` inside a `<form>` must have a unique `name`. Radio and checkbox groups (legitimate same-name patterns) are exempt. Closes [#46](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/46).
- New rule `htmlacademy/heading-level`: document headings must not skip levels (`<h1>` → `<h3>` is flagged) and must start with `<h1>`. Returning to a higher level (`<h3>` → `<h2>`) is allowed. Closes [#41](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/41).
- New rule `htmlacademy/label-req-text`: `<label>` must contain visible text (or carry an `aria-label`). `<label><input></label>` without any text is reported. Closes [#67](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/67).
- New rule `htmlacademy/svg-role-img`: inline `<svg>` must declare itself as content via `role="img"` + `aria-label`/`aria-labelledby`, or as decorative via `aria-hidden="true"`. Bare `<svg>` is flagged. Closes [#53](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/53).
- `peerDependency` on `@linthtml/linthtml >= 0.10.0` so consumers get a clear error when the host package is missing.
- `node:test`-based test suite: one `test/invalid/<rule>.test.js` per rule with positive and negative cases (~317 tests across all 39 rules).

### Changed

- `htmlacademy/a-target-rel`: now requires `rel="noreferrer"` (previously required `noopener` + `noreferrer`). Per the HTML spec, `noreferrer` implicitly enables `noopener` behaviour, so one keyword is enough. Modern browsers also default to `noopener` for `target="_blank"` since 2020, which is why the rule is still disabled by default in the shipped config — enable it when you want the requirement explicit in source.
- `htmlacademy/req-webp-in-picture`: accepts `image/avif` as an alternative to `image/webp`.
- `htmlacademy/attribute-allowed-values`: rule body was non-functional due to a property-access bug (`node.name.chars` on a plain string). The rule now correctly validates attribute values.
- `htmlacademy/attr-req-value`: no longer crashes when activated without an `ignore` option — an empty ignore list is assumed.
- `htmlacademy/input-req-label`: end-of-pass issues now use the `htmlacademy/` namespace prefix consistently (previously the second code path reported under `input-req-label` without the namespace).
- `htmlacademy/no-px-size`: extended to cover `<video>` and `<iframe>` in addition to `<img>` and `<svg>`.
- `htmlacademy/charset-position`: fixed inverted logic that silently accepted `<meta name="viewport">` (or any other non-charset `<meta>`) as the first child of `<head>`. The rule now strictly requires the first element to be `<meta>` with a `charset` attribute.
- `htmlacademy/tag-forbid-attr`: each forbidden entry now supports an optional `value` (string or `RegExp`) so attributes can be forbidden only when their value matches, e.g. disallowing `type="text/css"` on `<link>` but allowing other `type` values.
- `htmlacademy/aria-label-misuse`: `aria-label` on `<svg role="img">` (or `role="image"`) is now considered valid usage, matching how content SVG is exposed to assistive technology. Closes [#79](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/79).
- Node.js requirement bumped to >= 24.

### Migration notes

- Programmatic consumers (`import` or `require`) must use `import plugin from 'linthtml-rules-htmlacademy'`. Configs in `.linthtmlrc` that reference the plugin by name keep working without changes.
- Replace any usage of `htmlacademy/img-svg-req-dimensions` with `htmlacademy/replaced-elements-req-dimensions` in project-level overrides.
- If you extend `linthtml-config-htmlacademy`, no action is required — the config already references the new rule names.

## 1.0.21
Fixes `req-webp-in-picture` to not check `<picture>` if all `<source>` have attribute `type="image/svg+xml"`.

## 1.0.20
- Adds a `req-tags-presence` rule that requires the specified tags on the page.
- Adds a `req-preload-font` rule that requires the `preload` value for the font.
- Adds a `req-webp-in-picture` rule that requires `webp` in `<picture>`
- Adds a `no-class-in-container` rule that checks the `class` attribute for child elements inside the specified container.

```json
{
  "htmlacademy/req-tags-presence": [ true, ["header", "nav", "main", "section", "h1", "footer"]],
  "htmlacademy/req-preload-font": true,
  "htmlacademy/req-webp-in-picture": true,
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "tags": ["h1", "p"],
      "classes": ["content__title"]
    }
  }]
}
```

## 1.0.19
Adds a `tag-forbid-attr` rule that disallows the use of specified attributes on the specified tag.

```json
{
  "tag-forbid-attr": [
    true,
    {
      "picture": [
        {
          "name": "class"
        }
      ],
      "body": [
        {
          "name": "class"
        }
      ]
    }
  ]
}
```

## 1.0.18
Fixes `report` in the `req-source-width-height`

## 1.0.17
Added a new rule [htmlacademy/req-source-width-height](rules/req-source-width-height/README.md) that requires the `width` and `height` attributes of `<source>`, inside `<picture>`.

```json
{
  "htmlacademy/req-source-width-height": true
}
```

```html
<picture>
  <source srcset="images/image-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```

## 1.0.16
Clarifies the [no-blocking-script](rules/no-blocking-script/README.md) rule for the `<script>` tag. You can now add modules to `<head>`.

```html
<html lang="ru">
<head>
  <script src="app.js" type="module"></script>
</head>
<body>…</body>
</html>
```

## 1.0.15
Added a new rule [htmlacademy/req-mailto](rules/req-mailto/README.md), which requires `mailto:` for email-text links.
```json
{
  "htmlacademy/req-mailto": true
}
```

```html
<a href="mailto:example@example.com">example@example.com</a>
```

## 1.0.14
Added a new rule [htmlacademy/req-stylesheet-link](rules/req-stylesheet-link/README.md) that checks for a link tag with the `rel="stylesheet"` attribute inside the head tag.
```json
{
  "htmlacademy/req-stylesheet-link": true
}
```

```html
<head>
  <link rel="stylesheet" href="styles/style.css">
</head>
```

## 1.0.13
- Excludes the `<input type="submit">` check from the [input-req-label](rules/input-req-label/README.md) rule.
- Adds `ignore` option for [tag-req-attr](rules/tag-req-attr/README.md)
```js
"input": [
  {
    name: "name",
    ignore: {
      "type": "submit"
    }
  },
],
```

will not require a name attribute for `<input`> with `type="submit"`


## 1.0.12
Fix `htmlacademy/attr-req-value` rule

### Exceptions
A single `<option>` in `<select>` may have an empty value for the `value` attribute if it is selected by default.

The following pattern is **not** considered a problem:

```html
<label for="fruits">Fruits</label>
<select id="fruits" name="fruits" required>
  <option value="">Select...</option>
  <option value="banana">Banana</option>
  <option value="apple">Apple</option>
</select>
```

## 1.0.11
Added [htmlacademy/space-between-comments](rules/space-between-comments/README.md)
```js
rules: {
  "htmlacademy/space-between-comments": [true, "space" | "no-space]
}
```

```html
<!-- Comment --> // space
<!--Comment--> // no-space
```

## 1.0.10
`attr-req-value` can now accept regex for ignore

## 1.0.9
Fixed `req-charset-utf` rule

## 1.0.8
- Refines the list of interactive elements for aria-label-misuse
  - Adds `<label>`

## 1.0.7
Added so many new rules:
- [htmlacademy/aria-label-misuse](rules/aria-label-misuse/README.md)
- [attr-delimiter](rules/attr-delimiter/README.md)
- [attribute-allowed-values](rules/attribute-allowed-values/README.md)
- [ban-url-spaces](rules/ban-url-spaces/README.md)
- [id-no-dup](rules/id-no-dup/README.md)
- [input-req-label](rules/input-req-label/README.md)
- [link-req-content](rules/link-req-content/README.md)
- [no-blocking-script](rules/no-blocking-script/README.md)
- [no-px-size](rules/no-px-size/README.md)
- [req-head-styles](rules/req-head-styles/README.md)
- [req-meta-viewport](rules/req-meta-viewport/README.md)
- [req-single-styles](rules/req-single-styles/README.md)
- [tag-name-lowercase](rules/tag-name-lowercase/README.md)
- [tag-self-close](rules/tag-self-close/README.md)

## 1.0.6
Adds new rule `htmlacademy/attr-req-value`: the attribute cannot be empty, except for the list from ignore

```js
{
  "htmlacademy/attr-req-value": [true, { ignore: ["alt"]}]
}
```

```html
<button class="foo"></button>
<button disabled></button>
<img src="images/image.jpg" width="100" height="100" alt="">
```

## 1.0.5
Adds new rule `htmlacademy/section-has-heading`
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

## 1.0.4
Fixed name for `head-meta-charset`

## 1.0.3
- Rename `head-req-charset-utf` to `req-charset-utf`
- Rename `head-req-meta` to `head-meta-charset`
- Adds a description of the rules
- Adds `htmlacademy/charset-position`
```html
<head>
  <meta charset="utf-8">
  <title>Title</title>
</head>
```

- Adds `form-action-attribute`
```html
<form action="https://echo.htmlacademy.ru"></form>
```

- Adds `img-svg-req-dimensions`
```html
<img src="images/image.jpg" width="500" height="300" alt="">

<svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0"></rect>
</svg>
```

- Adds `no-double-br`
```html
<p>Lorem ipsum <br>dolor <br>sit amet.</p>
```

```html
<p>Lorem ipsum <br>dolor sit amet.</p>
<p><br>sit amet.</p>
```

- Adds `a-target-rel`
```html
<a href="https://htmlacademy.pro" target="_blank" rel="noreferrer noopener">Link</a>
```

## 1.0.2
- removes `attr-value-style`;
- takes the rules to the components.

## 1.0.1
Three rules were added:
- Class attribute location;
- Charset;
- Attribute value style.

## 1.0.0
Init rules
