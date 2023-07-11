# htmlacademy/attribute-allowed-values
Проверяет атрибуты на наличие допустимых значений. Перечисляемые строковые значения сопоставляются без учёта регистра.


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

Проблемными считаются следующие шаблоны:

```html
<input type="foobar">
```

Следующие шаблоны **не** считаются проблемами:

```html
<input type="text">
```
