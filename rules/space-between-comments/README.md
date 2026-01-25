# htmlacademy/space-between-comments

This rule checks for spaces at the beginning and end of comment blocks.

## Options

`string`: `"space"|"no-space"`

## Value `space`
If the comment has spaces at both the beginning and end of the comment block, it is valid.

Invalid:
```html
<!-- This is a comment-->
<!--This is a comment -->
<!--This is a comment-->
```

Valid:
```html
<!-- This is a comment -->
```

## Value `no-space`
If the comment has **no** spaces at either the beginning or end of the comment block, it is valid.

Invalid:
```html
<!-- This is a comment-->
<!--This is a comment -->
<!-- This is a comment -->
```

Valid:
```html
<!--This is a comment-->
```
