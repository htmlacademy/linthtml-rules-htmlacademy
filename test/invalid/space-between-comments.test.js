import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/space-between-comments');

t.invalid('no spaces at all, rule=space',
  '<!--comment-->',
  {message: /spaces at the beginning and end/},
  [true, 'space']);

t.invalid('trailing space only, rule=space',
  '<!--comment -->',
  {},
  [true, 'space']);

t.invalid('leading space only, rule=space',
  '<!-- comment-->',
  {},
  [true, 'space']);

t.invalid('spaces present, rule=no-space',
  '<!-- comment -->',
  {message: /should not contain spaces/},
  [true, 'no-space']);

t.invalid('leading space only, rule=no-space',
  '<!-- comment-->',
  {},
  [true, 'no-space']);

t.valid('both spaces present, rule=space',
  '<!-- comment -->',
  [true, 'space']);

t.valid('no spaces present, rule=no-space',
  '<!--comment-->',
  [true, 'no-space']);
