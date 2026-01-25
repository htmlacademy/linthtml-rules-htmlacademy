# htmlacademy/req-mailto

This rule checks whether the `href` attribute of an `<a>` tag contains `mailto:` when the link content is an email address.

## true

Invalid:

```html
<a href="example@example.com">example@example.com</a> <!-- missing mailto: -->

<a href="#!">contact@example.com</a> <!-- missing mailto: -->

<a href="http://example.com">user@example.com</a> <!-- missing mailto: -->

<a href="/contact">support@example.com</a> <!-- missing mailto: -->

<a>admin@example.com</a> <!-- missing href with mailto: -->

<a href="javascript:void(0);">info@example.com</a> <!-- missing mailto: -->
```

Valid:

```html
<a href="mailto:">example@example.com</a> <!-- does not check for email after mailto: -->

<a href="mailto:example@com">example@com</a> <!-- link content is not an email -->

<a href="mailto:example@example.com">Click here</a> <!-- link content is not an email -->

<a href="mailto:example@example.com">example@example.com</a> <!-- link content is an email and href has mailto -->

<a href="mailto:example@example.com" onclick="someFunction();">example@example.com</a>
```
