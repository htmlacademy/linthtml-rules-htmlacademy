# htmlacademy/attr-delimiter

Это правило запрещает использование пробелов, разделяющих ключ атрибута и значение, то есть до или после символа `=`. Технически пробелы разрешены спецификацией HTML5.
Использование пробелов в этом контексте может быть признаком опечатки.

## true
Ключ атрибута и значение не разделены пробелами

Проблемными считаются следующие шаблоны:
```html
<input name ="my-field">
<input name= "my-field">
```

Следующие шаблоны **не** считаются проблемами:
```html
<input name="my-field">
```

