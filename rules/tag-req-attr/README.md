# htmlacademy/tag-req-attr

Если установлено, указанные атрибуты должны присутствовать в указанном теге.

Форк: https://linthtml.vercel.app/user-guide/rules/list/tag-req-attr

## true

```json
'htmlacademy/tag-req-attr': [
  true, {
    'input': [
      {
        name: 'name'
      },
    ],
    // Другие элементы...
  },
]
```

```json
{
  "tag-req-attr": [
    true,
    {
      "img": [
        {
          "name": "src"
        },
        {
          "name": "alt"
        }
      ]
    }
  ]
}
```

Нарушениями считаются следующие модели:

```html
<img/>
```

```html
<img src="link"/>
```

```html
<img alt="No image">
```

Следующие детали не считаются нарушениями:

```html
<img alt="Picture of a cute cat" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiHzdu5n4ThAhXOxYUKHebmDXoQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FHzG2YW8&psig=AOvVaw3w5Zu0oMuDZy83zsfn0NMU&ust=1552742695628256">
```

## ignore

Поле `ignore` позволяет игнорировать атрибуты в зависимости от их значений.

```json
{
  'htmlacademy/tag-req-attr': [
    true,
    {
      'input': [
        {
          name: 'name',
          ignore: {
            'type': 'submit'
          }
        }
      ]
    }
  ]
}
```

Нарушениями считаются следующие модели:

```html
<input name="name" type="submit">
```

Следующие детали **не** считаются нарушениями:

Если у элемента `input` атрибут `type` имеет значение `submit`, то атрибут `name` не обязателен.
```html
<input type="submit" value="Submit">
```
