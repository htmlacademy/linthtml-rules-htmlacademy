import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/attr-order');

t.invalid('class after href (default order)',
  '<a href="/x" class="link">Link</a>',
  {message: /class.*must come before "href"/});

t.invalid('class after type/id (default order)',
  '<input type="text" id="login" class="field">',
  {message: /class/});

t.invalid('"others" before data-* even with class first',
  '<input class="field" type="text" data-role="login" placeholder="...">',
  {message: /data-role.*must come before "type"/});

t.invalid('"others" before data-*',
  '<input class="field" placeholder="..." data-role="login">',
  {message: /data-role.*must come before/});

t.invalid('src after "others"',
  '<img alt="Photo" src="x.jpg" width="100" height="100">',
  {message: /src.*must come before "alt"/});

t.invalid('custom groups catch violations against custom order',
  '<input class="field" src="x" id="login">',
  {message: /id.*must come before "src"/},
  [true, [['class'], ['id'], ['src', 'href'], ['*']]]);

t.valid('default order is followed',
  '<a class="link" href="/x" data-track="footer">Link</a>');

t.valid('full chain class → src → data-* → others',
  '<img class="hero" src="x.jpg" data-id="1" alt="Photo" width="100" height="100">');

t.valid('free order inside the "others" group',
  '<input class="field" placeholder="x" autocomplete="off" type="text">');

t.valid('no attributes — nothing to check',
  '<div></div>');

t.valid('single attribute — nothing to check',
  '<input class="field">');

t.valid('data-* before "others"',
  '<input class="field" data-role="login" type="text" placeholder="...">');

t.valid('custom groups: id before src is valid with custom order',
  '<input class="field" id="login" src="x">',
  [true, [['class'], ['id'], ['src', 'href'], ['*']]]);
