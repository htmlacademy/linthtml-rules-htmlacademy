# htmlacademy/attribute-allowed-values
Validates attributes against allowed values. Enumerated string values are matched case-insensitively.


```js
{
  'htmlacademy/attribute-allowed-values': [true,
    {
      "input": {
        "attributes": {
          "type": {
            "enum": ["text", "email"]
          }
        }
      }
    }
  ]
}
```

Invalid:

```html
<input type="foobar">
```

Valid:

```html
<input type="text">
```
