# htmlacademy/a-target-rel
Правило проверяет наличие атрибута `rel` со значениями `nofollow` и `noopener` у ссылок` <a>` с атрибутом `target="_blank"`. Правило принимает значения true или false.

## true
Ссылки `<a>` с атрибутом `target="_blank"` содержат атрибут `rel` со значениями `nofollow` и `noopener`.

Проблемными считаются следующие шаблоны:
```html
<a href="https://htmlacademy.pro" target="_blank">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="nofollow">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener">Link</a>
```

Следующие шаблоны **не** считаются проблемами:

```html
<a href="https://htmlacademy.pro" target="_blank" rel="nofollow noopener">Link</a>

<a href="https://htmlacademy.pro" target="_blank" rel="noopener nofollow">Link</a>
```
