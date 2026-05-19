# htmlacademy/icon-button-aria-label

A `<button>` without visible text content (typically an icon-only button) must expose an accessible name through one of `aria-label`, `aria-labelledby`, or `title`. Otherwise the button is invisible to screen readers.

A button counts as having visible text if any descendant contains a non-whitespace text node.

## true

Invalid:

```html
<button type="button">
  <svg aria-hidden="true">…</svg>
</button>

<button type="button"><img src="close.svg" alt=""></button>

<button> </button>
```

Valid:

```html
<button type="button" aria-label="Закрыть">
  <svg aria-hidden="true">…</svg>
</button>

<button type="button" title="Закрыть"><img src="close.svg" alt=""></button>

<button type="submit">Отправить</button>

<button type="button"><span class="visually-hidden">Меню</span><svg>…</svg></button>
```
