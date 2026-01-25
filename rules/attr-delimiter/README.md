# htmlacademy/attr-delimiter

This rule disallows spaces between attribute key and value, i.e., before or after the `=` character. While spaces are technically allowed by the HTML5 specification, using them in this context may indicate a typo.

## true
Attribute key and value must not be separated by spaces.

Invalid:
```html
<input name ="my-field">
<input name= "my-field">
```

Valid:
```html
<input name="my-field">
```
