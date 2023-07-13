# htmlacademy/ban-url-spaces
Правило проверяет наличие пробелов в адресах в атрибутах `href` и `src`.

Хотя браузер может экранировать символы, пробелы в адресе запрещены спецификацией.

Проблемными считаются следующие шаблоны:
```html
<a href="https://htmlacademy.pro?query=some long param">Link</a>
```

Следующие шаблоны **не** считаются проблемами:

```html
<a href="https://htmlacademy.pro?query=some%20long%20param">Link</a>
```
