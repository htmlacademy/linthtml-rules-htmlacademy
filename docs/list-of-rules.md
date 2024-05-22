# Список правил от HTML Academy

| Имя правила                                                                        | Описания                                                                                           |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [htmlacademy/a-target-rel](../rules/a-target-rel/README.md)                        | Проверяет наличие `rel="noopener noreferrer"` у `<a target="_blank"></a>`                          |
| [htmlacademy/aria-label-misuse](../rules/aria-label-misuse/README.md)              | Требует использование `aria-label` на определённых элементах                                       |
| [htmlacademy/attr-delimiter](../rules/attr-delimiter/README.md)                    | Требует удалить пробел между `=` для атрибутов                                                     |
| [htmlacademy/attr-req-value](../rules/attr-req-value/README.md)                    | Запрещает пустые атрибуты `""`, кроме тех что в `ignore: []`                                       |
| [htmlacademy/attribute-allowed-values](../rules/attribute-allowed-values/README.md) | Проверяет атрибуты на наличие допустимых значений                                                  |
| [htmlacademy/ban-url-spaces](../rules/ban-url-spaces/README.md)                    | Проверяет наличие пробелов в адресах в атрибутах `href` и `src`.                                   |
| [htmlacademy/charset-position](../rules/charset-position/README.md)                | Требует указывать `<meta charset="utf-8">` первым элементов в `<head>`                             |
| [htmlacademy/class-first](../rules/class-first/README.md)                          | Требует указывать первым атрибутом у любого элемента `class`                                       |
| [htmlacademy/form-action-attribute](../rules/form-action-attribute/README.md)      | Требует указывать атрибут `action` у `<form>`                                                      |
| [htmlacademy/head-meta-charset](../rules/head-meta-charset/README.md)              | Проверяет наличие `<meta charset="utf-8">` в `<head>`                                              |
| [htmlacademy/id-no-dup](../rules/id-no-dup/README.md)                              | Запрешает дублирование `id` на странице                                                            |
| [htmlacademy/img-svg-req-dimensions](../rules/img-svg-req-dimensions/README.md)    | Требует атрибуты `width` и `height` у `<img>` и `<svg>`                                            |
| [htmlacademy/input-req-label](../rules/input-req-label/README.md)                  | Требует наличие метки для поля ввода, и позволяет указать метку в `aria-label`                     |
| [htmlacademy/link-req-content](../rules/link-req-content/README.md)                | Проверяет наличие текстового содержания у `<a>`                                                    |
| [htmlacademy/no-blocking-script](../rules/no-blocking-script/README.md)            | Проверяет расположение скриптов в разметке                                                         |
| [htmlacademy/no-class-in-container](../rules/no-class-in-container/README.md)            | Проверяет атрибут `class` у дочерних элементов внутри указанного контейнера                        |
| [htmlacademy/no-double-br](../rules/no-double-br/README.md)                        | Запрещает идущие подряд двойной `<br>`                                                             |
| [htmlacademy/no-px-size](../rules/no-px-size/README.md)                            | Атрибуты `width` и `height` содержат только цифры, без единиц измерения                            |
| [htmlacademy/req-charset-utf](../rules/req-charset-utf/README.md)                  | Требует `UTF-8` для `<meta charset="">`                                                            |
| [htmlacademy/req-head-styles](../rules/req-head-styles/README.md)                  | Запрещает подключение стилей вне `<head>`                                                          |
| [htmlacademy/req-mailto](../rules/req-mailto/README.md)                            | Требует `mailto:` для ссылок c email-текстом                                                       |
| [htmlacademy/req-meta-viewport](../rules/req-meta-viewport/README.md)              | Проверяет наличие `<meta name="viewport" content="width=device-width,initial-scale=1">` в `<head>` |
| [htmlacademy/req-preload-font](../rules/req-preload-font/README.md)               | Проверяет наличие предзагрузки шрифта в `<head>`                                                   |
| [htmlacademy/req-single-styles](../rules/req-single-styles/README.md)              | Разрешает не более одного `link rel="stylesheet"` в `<head>`                                       |
| [htmlacademy/req-source-width-height](../rules/req-source-width-height/README.md)              | Требует `width` и `height` у `<source>` внутри `<picture>`                                         |
| [htmlacademy/req-stylesheet-link](../rules/req-stylesheet-link/README.md)          | Проверяет наличие `<link rel="stylesheet" href="">` с непустым `href`                              |
| [htmlacademy/req-tags-presence](../rules/req-tags-presence/README.md)           | Требует указанные теги на странице                                                                 |
| [htmlacademy/req-webp-in-picture](../rules/req-webp-in-picture/README.md)           | Требует `webp` в `<picture>`                                                                       |
| [htmlacademy/section-has-heading](../rules/section-has-heading/README.md)          | Требует добавление заголовка любого уровня в `<section>`                                           |
| [htmlacademy/space-between-comments](../rules/space-between-comments/README.md)    | Проверят пробелы у комментария `<!-- Это комментарий -->`                                          |
| [htmlacademy/tag-forbid-attr](../rules/tag-forbid-attr/README.md)                  | Указанные атрибуты должны отсутствовать в указанном теге                                           |
| [htmlacademy/tag-name-lowercase](../rules/tag-name-lowercase/README.md)            | Имена тегов должны быть строчными                                                                  |
| [htmlacademy/tag-req-attr](../rules/tag-req-attr/README.md)                        | Указанные атрибуты должны присутствовать в указанном теге                                          |
| [htmlacademy/tag-self-close](../rules/tag-self-close/README.md)                    | Одиночные элементы не должны быть закрыты, `<br>` вместо `<br/>`                                   |
