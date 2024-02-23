# htmlacademy/req-mailto

Правило осуществляет проверку того, содержит ли атрибут `href` тега `<a>` строку `mailto:`, при условии, что содержимое ссылки представляет собой текст в формате электронной почты.

## true

Проблемными считаются следующие шаблоны:

```html
<a href="example@example.com">example@example.com</a> <!-- отсутствует mailto: -->

<a href="#!">contact@example.com</a> <!-- отсутствует mailto: -->

<a href="http://example.com">user@example.com</a> <!-- отсутствует mailto: -->

<a href="/contact">support@example.com</a> <!-- отсутствует mailto: -->

<a>admin@example.com</a> <!-- отсутствует href с  mailto: -->

<a href="javascript:void(0);">info@example.com</a> <!-- отсутствует mailto: -->
```

Следующие шаблоны **не** считаются проблемами:

```html
<a href="mailto:">example@example.com</a> <!-- не проверяет наличие email после mailto: -->

<a href="mailto:example@com">example@com</a> <!-- в теле ссылки не email -->

<a href="mailto:example@example.com">Click here</a> <!-- в теле ссылки не email -->

<a href="mailto:example@example.com">example@example.com</a> <!-- контентом ссылки является email, а href имеет mailto -->

<a href="mailto:example@example.com" onclick="someFunction();">example@example.com</a>
```
