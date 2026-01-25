# htmlacademy/tag-req-attr

When enabled, specified attributes must be present on the specified tag.

Fork: https://linthtml.vercel.app/user-guide/rules/list/tag-req-attr

## true

```json
'htmlacademy/tag-req-attr': [
  true, {
    'input': [
      {
        name: 'name'
      },
    ],
    // Other elements...
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

Invalid:

```html
<img/>
```

```html
<img src="link"/>
```

```html
<img alt="No image">
```

Valid:

```html
<img alt="Picture of a cute cat" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiHzdu5n4ThAhXOxYUKHebmDXoQjRx6BAgBEAU&url=https%3A%2F%2Fimgur.com%2Fgallery%2FHzG2YW8&psig=AOvVaw3w5Zu0oMuDZy83zsfn0NMU&ust=1552742695628256">
```

## ignore

The `ignore` field allows ignoring attributes based on their values.

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

Invalid:

```html
<input name="name" type="submit">
```

Valid:

If an `input` element has `type` attribute with value `submit`, then the `name` attribute is not required.
```html
<input type="submit" value="Submit">
```
