# Changelog

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
