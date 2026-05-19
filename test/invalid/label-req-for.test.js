import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/label-req-for');

t.invalid('missing for and no labelable child',
  '<label>Username</label>',
  {message: /must have a "for"/});

t.invalid('for references missing id',
  '<label for="username">Username</label>',
  {message: /references missing id/});

t.invalid('for references non-labelable element',
  '<label for="x">Text</label><div id="x"></div>',
  {code: 'HTMLA062', message: /not a labelable element/});

t.valid('implicit association via descendant',
  '<label><input type="text"></label>');

t.valid('explicit for/id pair pointing at input',
  '<label for="x">Text</label><input id="x">');

t.valid('empty for is explicitly allowed',
  '<label for="">Detached</label>');

t.valid('implicit association with nested wrapper',
  '<label>Text <span><input type="text"></span></label>');

t.valid('select counts as a form control',
  '<label for="city">City</label><select id="city"></select>');
