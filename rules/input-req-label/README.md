# htmlacademy/input-req-label

Форк: https://linthtml.vercel.app/user-guide/rules/list/input-req-label

Правило требует наличие метки для поля ввода, и позволяет указать метку в `aria-label`.

## true
Если включён, то метки не могут быть пустыми.


Проблемными считаются следующие шаблоны:
```html
<input type="text" value="great">

<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="text" id="romeo">
</section>
```

Следующие шаблоны **не** считаются проблемами:

```html
<div>
  <label for="dinosaur">Label!</label>
</div>
<section>
  <input type="radio" id="dinosaur">
</section>

<label>
  Label!
  <input type="text">
</label>

<input type="text" aria-label="dinosaur">

<input type="hidden" value="dinosaur">

```
