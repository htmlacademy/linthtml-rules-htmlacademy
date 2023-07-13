# Changelog

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

## 1.0.6
Adds new rule `htmlacademy/attr-req-value`: the attribute cannot be empty, except for the list from ignore

```js
{
  'htmlacademy/attr-req-value': [true, { ignore: ['alt']}]
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
