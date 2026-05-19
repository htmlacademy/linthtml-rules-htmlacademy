import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/label-req-text');

t.invalid('label with only an input child',
  '<label><input type="text"></label>',
  {message: /visible text/});

t.invalid('empty label',
  '<label></label>',
  {message: /visible text/});

t.invalid('whitespace-only label',
  '<label>   <input type="text">   </label>',
  {message: /visible text/});

t.valid('label with inline text before input',
  '<label>Имя<input type="text"></label>');

t.valid('label for with text content',
  '<label for="name">Имя</label>');

t.valid('label with text inside a span',
  '<label><span>Имя</span><input type="text"></label>');

t.valid('label with aria-label without visible text',
  '<label aria-label="Имя"><input type="text"></label>');
