# LintHTML Rules for HTML Academy CODEGUIDE

[![npm version](https://img.shields.io/npm/v/linthtml-rules-htmlacademy.svg)](https://www.npmjs.com/package/linthtml-rules-htmlacademy)
[![test](https://github.com/htmlacademy/linthtml-rules-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/linthtml-rules-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/linthtml-rules-htmlacademy.svg)](https://github.com/htmlacademy/linthtml-rules-htmlacademy/blob/main/LICENSE)

Custom LintHTML rules by [HTML Academy](https://htmlacademy.ru) for validating HTML markup according to the [HTML Academy Codeguide](https://codeguide.academy).

## Installation

```bash
npm install linthtml-rules-htmlacademy --save-dev
```

## Usage

Add the plugin to your `.linthtmlrc` configuration file:

```json
{
  "plugins": ["linthtml-rules-htmlacademy"],
  "rules": {
    "htmlacademy/tag-name-lowercase": true,
    "htmlacademy/img-svg-req-dimensions": true
  }
}
```

## Rules

| Rule | Description |
| --- | --- |
| [htmlacademy/a-target-rel](rules/a-target-rel/) | Requires `rel="noopener noreferrer"` on `<a target="_blank">` |
| [htmlacademy/aria-label-misuse](rules/aria-label-misuse/) | Requires `aria-label` usage on specific elements only |
| [htmlacademy/attr-delimiter](rules/attr-delimiter/) | Disallows spaces around `=` in attributes |
| [htmlacademy/attr-req-value](rules/attr-req-value/) | Disallows empty attribute values except those in `ignore` list |
| [htmlacademy/attribute-allowed-values](rules/attribute-allowed-values/) | Validates attribute values against allowed values |
| [htmlacademy/ban-url-spaces](rules/ban-url-spaces/) | Disallows spaces in `href` and `src` URLs |
| [htmlacademy/charset-position](rules/charset-position/) | Requires `<meta charset="utf-8">` as first element in `<head>` |
| [htmlacademy/class-first](rules/class-first/) | Requires `class` to be the first attribute on any element |
| [htmlacademy/form-action-attribute](rules/form-action-attribute/) | Requires `action` attribute on `<form>` |
| [htmlacademy/head-meta-charset](rules/head-meta-charset/) | Requires `<meta charset="utf-8">` in `<head>` |
| [htmlacademy/id-no-dup](rules/id-no-dup/) | Disallows duplicate `id` values on page |
| [htmlacademy/img-svg-req-dimensions](rules/img-svg-req-dimensions/) | Requires `width` and `height` on `<img>` and `<svg>` |
| [htmlacademy/input-req-label](rules/input-req-label/) | Requires label for input fields, allows `aria-label` |
| [htmlacademy/link-req-content](rules/link-req-content/) | Requires text content in `<a>` elements |
| [htmlacademy/no-blocking-script](rules/no-blocking-script/) | Validates script placement in markup |
| [htmlacademy/no-class-in-container](rules/no-class-in-container/) | Validates `class` attribute on children inside specified container |
| [htmlacademy/no-double-br](rules/no-double-br/) | Disallows consecutive `<br>` elements |
| [htmlacademy/no-px-size](rules/no-px-size/) | Requires `width` and `height` to contain only numbers without units |
| [htmlacademy/req-charset-utf](rules/req-charset-utf/) | Requires `UTF-8` for `<meta charset="">` |
| [htmlacademy/req-head-styles](rules/req-head-styles/) | Disallows stylesheets outside `<head>` |
| [htmlacademy/req-mailto](rules/req-mailto/) | Requires `mailto:` for links with email text |
| [htmlacademy/req-meta-viewport](rules/req-meta-viewport/) | Requires `<meta name="viewport">` in `<head>` |
| [htmlacademy/req-preload-font](rules/req-preload-font/) | Requires font preload in `<head>` |
| [htmlacademy/req-single-styles](rules/req-single-styles/) | Allows only one `<link rel="stylesheet">` in `<head>` |
| [htmlacademy/req-source-width-height](rules/req-source-width-height/) | Requires `width` and `height` on `<source>` inside `<picture>` |
| [htmlacademy/req-stylesheet-link](rules/req-stylesheet-link/) | Requires `<link rel="stylesheet">` with non-empty `href` |
| [htmlacademy/req-tags-presence](rules/req-tags-presence/) | Requires specified tags on page |
| [htmlacademy/req-webp-in-picture](rules/req-webp-in-picture/) | Requires `webp` format in `<picture>` |
| [htmlacademy/section-has-heading](rules/section-has-heading/) | Requires heading element in `<section>` |
| [htmlacademy/space-between-comments](rules/space-between-comments/) | Validates spaces in comments `<!-- Comment -->` |
| [htmlacademy/tag-forbid-attr](rules/tag-forbid-attr/) | Disallows specified attributes on specified tags |
| [htmlacademy/tag-name-lowercase](rules/tag-name-lowercase/) | Requires lowercase tag names |
| [htmlacademy/tag-req-attr](rules/tag-req-attr/) | Requires specified attributes on specified tags |
| [htmlacademy/tag-self-close](rules/tag-self-close/) | Disallows self-closing void elements (`<br>` not `<br/>`) |

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [LintHTML Plugins Documentation](https://linthtml.vercel.app/developer-guide/plugins)
