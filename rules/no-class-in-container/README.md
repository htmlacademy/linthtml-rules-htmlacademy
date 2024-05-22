# htmlacademy/no-class-in-container

Правило проверяет наличие атрибута `class` у дочерних элементов внутри указанного контейнера.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content", "wrapper"],
    "ignore": {
      "tags": ["h1", "h2"],
      "class": ["content__title", "content__text"]
    }
  }]
}
```

## true
Если указано `true`, то необходимо передать значение `class` контейнера. В `containers` можно передавать несколько классов, тогда будут проверяться несколько контейнеров.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content", "wysiwg"]
  }]
}
```

Проблемными считаются следующие шаблоны:
```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

Так как на дочернем элементе `<h1>` есть `class`.

Следующие шаблоны **не** считаются проблемами:
```html
<div class="content">
  <h1>title</h1>
</div>

<div class="wysiwg">
  <h1>title</h1>
  <p>text</p>
</div>
```

### ignore
`ignore` принимает теги и классы, которые нужно игнорировать внутри контейнера.

#### ignore.tags
Игнорирует указанные теги внутри контейнера.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "tags": ["h1"]
    }
  }]
}
```

Проблемными считаются следующие шаблоны:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

так как у `<p>` есть атрибут `class`.

Следующие шаблоны **не** считаются проблемами:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p>text</p>
</div>
```

#### ignore.classes
Игнорирует элементы с указанными классами внутри контейнера.

```json
{
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "classes": [ "content__title", "content__text"]
    }
  }]
}
```

Проблемными считаются следующие шаблоны:
```html
<div class="content">
  <h1 class="content__title">title</h1>
  <h2 class="content__subtitle">subtitle</h2>
  <p class="content__text">text</p>
</div>
```

Так как есть `content__subtitle`.

Следующие шаблоны **не** считаются проблемами:

```html
<div class="content">
  <h1 class="content__title">title</h1>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
</div>
```

```html
<div class="content">
  <h1 class="content__title">title</h1>
  <p class="content__text">text</p>
  <svg width="20" height="20"></svg>
</div>
```
