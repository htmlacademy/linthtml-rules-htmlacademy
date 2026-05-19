import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/class-first');

t.invalid('class after href on <a>',
  '<a href="/" class="link">Link</a>',
  {message: /class attribute should be the first/});

t.invalid('class after type on <input>',
  '<input type="text" class="field">',
  {message: /class attribute should be the first/});

t.invalid('class after data attribute on <div>',
  '<div data-attr="test" class="products">Content</div>',
  {message: /class attribute should be the first/});

t.valid('class as first attribute on <a>',
  '<a class="link" href="/">Link</a>');

t.valid('class as first attribute on <input>',
  '<input class="field" type="text">');

t.valid('element without class attribute',
  '<div id="main">Content</div>');

t.valid('class as only attribute',
  '<div class="box">Content</div>');
