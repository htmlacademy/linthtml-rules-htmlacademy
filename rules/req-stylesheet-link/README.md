# htmlacademy/req-stylesheet-link

В `<head>` должны быть подключён файл стилей. Атрибут `href` не должен быть пустым.

Проблемными считаются следующие шаблоны:
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

Следующие шаблоны **не** считаются проблемами:
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
