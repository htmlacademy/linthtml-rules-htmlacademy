# htmlacademy/attr-req-value
Проверяет значения атрибутов на пустоту.

Форк: https://linthtml.vercel.app/user-guide/rules/list/attr-req-value

Правило требует заполнения атрибутов, и позволяет указать список исключений в `ignore`

## true
Если включён, то атрибуты не могут быть пустыми.

> Логические атрибуты могут не иметь значений, например `disabled` или `hidden`.

Проблемными считаются следующие шаблоны:
```html
<button id= ></button>
<button id=""></button>
<button id= class="bar" ></button>
<button class></button>
```

Следующие шаблоны **не** считаются проблемами:

```html
<button class="foo"></button>

<button disabled></button>
```

### ignore
Игнорирует перечисленный список атрибутов. Принимает значения `string|regex`

```js
{
  'htmlacademy/attr-req-value': [true, 
    { 
      ignore: ['alt', '/^data-/']
    }
  ]
}
```

Проблемными считаются следующие шаблоны:

```html
<button id=""></button>
```

Следующие шаблоны **не** считаются проблемами:

```html
<img src="images/image.jpg" width="100" height="100" alt="">
<section data-test></section>
```

## Исключения
Один `<option>` в `<select>` может быть с пустым значением для атрибута `value`, если он выбран по умолчанию.

Следующий шаблон **не** считается проблемой:

```html
<label for="fruits">Fruits</label>
<select id="fruits" name="fruits" required>
  <option value="">Select...</option>
  <option value="banana">Banana</option>
  <option value="apple">Apple</option>
</select>
```
