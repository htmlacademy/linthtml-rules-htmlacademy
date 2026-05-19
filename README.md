# LintHTML Rules for HTML Academy Codeguide

[![npm version](https://img.shields.io/npm/v/linthtml-rules-htmlacademy.svg)](https://www.npmjs.com/package/linthtml-rules-htmlacademy)
[![test](https://github.com/htmlacademy/linthtml-rules-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/linthtml-rules-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/linthtml-rules-htmlacademy.svg)](https://github.com/htmlacademy/linthtml-rules-htmlacademy/blob/main/LICENSE)

Custom [LintHTML](https://linthtml.vercel.app) rules for HTML markup validation according to [HTML Academy Codeguide](https://codeguide.academy).

## Requirements

- Node.js >= 24
- `@linthtml/linthtml` >= 0.10.0

## Installation

```bash
npm install -D @linthtml/linthtml linthtml-rules-htmlacademy
```

## Usage

Add the plugin to your `.linthtmlrc` configuration file:

```json
{
  "plugins": ["linthtml-rules-htmlacademy"],
  "rules": {
    "htmlacademy/tag-name-lowercase": true,
    "htmlacademy/replaced-elements-req-dimensions": true
  }
}
```

Most consumers should extend the curated [`linthtml-config-htmlacademy`](https://github.com/htmlacademy/linthtml-config-htmlacademy) instead — it activates every rule from this package with sensible defaults.

## Rules

| Rule | Description |
| --- | --- |
| [htmlacademy/a-target-rel](rules/a-target-rel/) | Requires `rel="noopener"` on `<a target="_blank">` |
| [htmlacademy/aria-label-misuse](rules/aria-label-misuse/) | Requires `aria-label` usage on specific elements only |
| [htmlacademy/attr-delimiter](rules/attr-delimiter/) | Disallows spaces around `=` in attributes |
| [htmlacademy/attr-order](rules/attr-order/) | Enforces an attribute order using configurable groups (default: `class → src/href → data-* → others`) |
| [htmlacademy/attr-req-value](rules/attr-req-value/) | Disallows empty attribute values except those in `ignore` list |
| [htmlacademy/attribute-allowed-values](rules/attribute-allowed-values/) | Validates attribute values against allowed values |
| [htmlacademy/ban-url-spaces](rules/ban-url-spaces/) | Disallows spaces in `href` and `src` URLs |
| [htmlacademy/boolean-attr-no-value](rules/boolean-attr-no-value/) | Disallows assigning a value to HTML boolean attributes (`disabled`, `checked`, …) |
| [htmlacademy/charset-position](rules/charset-position/) | Requires `<meta charset="…">` as the first element of `<head>` |
| [htmlacademy/class-first](rules/class-first/) | Requires `class` to be the first attribute (subset of `attr-order`; prefer `attr-order` for full coverage) |
| [htmlacademy/form-action-attribute](rules/form-action-attribute/) | Requires `action` attribute on `<form>` |
| [htmlacademy/head-meta-charset](rules/head-meta-charset/) | Requires `<meta charset="utf-8">` in `<head>` |
| [htmlacademy/heading-level](rules/heading-level/) | Disallows heading-level skips (`<h1>` → `<h3>`); document must start with `<h1>` |
| [htmlacademy/icon-button-aria-label](rules/icon-button-aria-label/) | Requires an accessible name on icon-only `<button>` elements |
| [htmlacademy/id-no-dup](rules/id-no-dup/) | Disallows duplicate `id` values on page |
| [htmlacademy/input-name-unique](rules/input-name-unique/) | Requires `<input>` names to be unique inside a `<form>` (radio / checkbox groups exempt) |
| [htmlacademy/input-req-label](rules/input-req-label/) | Requires label for input fields, allows `aria-label` |
| [htmlacademy/label-req-for](rules/label-req-for/) | Requires `<label>` to be associated with a form control |
| [htmlacademy/label-req-text](rules/label-req-text/) | Requires `<label>` to contain visible text content (or `aria-label`) |
| [htmlacademy/link-req-content](rules/link-req-content/) | Requires text content in `<a>` elements |
| [htmlacademy/no-blocking-script](rules/no-blocking-script/) | Validates script placement in markup |
| [htmlacademy/no-class-in-container](rules/no-class-in-container/) | Validates `class` attribute on children inside specified container |
| [htmlacademy/no-double-br](rules/no-double-br/) | Disallows consecutive `<br>` elements |
| [htmlacademy/no-px-size](rules/no-px-size/) | Requires `width` and `height` on `<img>`, `<svg>`, `<video>`, `<iframe>` to be integers without units |
| [htmlacademy/replaced-elements-req-dimensions](rules/replaced-elements-req-dimensions/) | Requires `width` and `height` on `<img>`, `<svg>`, `<video>`, `<iframe>` |
| [htmlacademy/req-charset-utf](rules/req-charset-utf/) | Requires `UTF-8` for `<meta charset="">` |
| [htmlacademy/req-head-styles](rules/req-head-styles/) | Disallows stylesheets outside `<head>` |
| [htmlacademy/req-mailto](rules/req-mailto/) | Requires `mailto:` for links with email text |
| [htmlacademy/req-meta-viewport](rules/req-meta-viewport/) | Requires `<meta name="viewport">` in `<head>` |
| [htmlacademy/req-preload-font](rules/req-preload-font/) | Requires font preload in `<head>` |
| [htmlacademy/req-single-styles](rules/req-single-styles/) | Allows only one `<link rel="stylesheet">` in `<head>` |
| [htmlacademy/req-source-width-height](rules/req-source-width-height/) | Requires `width` and `height` on `<source>` inside `<picture>` |
| [htmlacademy/req-stylesheet-link](rules/req-stylesheet-link/) | Requires `<link rel="stylesheet">` with non-empty `href` |
| [htmlacademy/req-submit-button](rules/req-submit-button/) | Requires every `<form>` to contain a submit button |
| [htmlacademy/req-tags-presence](rules/req-tags-presence/) | Requires specified tags on page |
| [htmlacademy/req-webp-in-picture](rules/req-webp-in-picture/) | Requires `webp` or `avif` format in `<picture>` |
| [htmlacademy/section-has-heading](rules/section-has-heading/) | Requires heading element in `<section>` |
| [htmlacademy/space-between-comments](rules/space-between-comments/) | Validates spaces in comments `<!-- Comment -->` |
| [htmlacademy/svg-role-img](rules/svg-role-img/) | Content `<svg>` must have `role="img"` and an accessible name; decorative `<svg>` must use `aria-hidden="true"` |
| [htmlacademy/tag-forbid-attr](rules/tag-forbid-attr/) | Disallows specified attributes (optionally restricted by value) on specified tags |
| [htmlacademy/tag-name-lowercase](rules/tag-name-lowercase/) | Requires lowercase tag names |
| [htmlacademy/tag-req-attr](rules/tag-req-attr/) | Requires specified attributes on specified tags |
| [htmlacademy/tag-self-close](rules/tag-self-close/) | Disallows self-closing void elements (`<br>` not `<br/>`) |

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [LintHTML Plugins Documentation](https://linthtml.vercel.app/developer-guide/plugins)
