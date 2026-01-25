# htmlacademy/req-stylesheet-link

A stylesheet must be linked in `<head>`. The `href` attribute must not be empty.

Invalid:
```html
<head>
  <link rel="stylesheet" href="">
</head>

<head>
  <link rel="stylesheet">
</head>

<head>
  <link rel="style" href="styles/style.css">
</head>
```

Valid:
```html
<head>
  <link rel="stylesheet" href="styles/styles.css">
</head>

<head>
  <link rel="stylesheet" href="styles/style.css" type="text/css" media="screen,projection">
</head>

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap">
</head>
```
