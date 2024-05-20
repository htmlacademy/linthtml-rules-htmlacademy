# htmlacademy/tag-forbid-attr

Если установлено, указанные атрибуты должны отсутствовать в указанном теге.

## true

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

Нарушениями считаются следующие модели:

```html
<body class="page__body">
</body>
```

```html
<picture class="product__image">
  <img width="200" height="68" src="" alt="">
</picture>
```

Следующие детали **не** считаются нарушениями:

```html
<body>

</body>
```

```html
<picture>
  <img class="product__image" width="200" height="68" src="" alt="">
</picture>
```
