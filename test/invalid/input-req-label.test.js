import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/input-req-label');

t.invalid('input with no id and no label parent',
  '<input type="text">',
  {code: 'E033'});

t.invalid('input with no id inside a div',
  '<div><input type="text"></div>',
  {code: 'E033'});

t.invalid('input with id but no matching label',
  '<input type="text" id="name">',
  {code: 'E033'});

t.invalid('label for different id than input has',
  '<label for="email">Email</label><input type="text" id="name">',
  {code: 'E033'});

t.valid('input wrapped in label',
  '<label>Name <input type="text"></label>');

t.valid('explicit label for/id pair',
  '<label for="city">City</label><input type="text" id="city">');

t.valid('input with aria-label',
  '<input type="text" aria-label="Search">');

t.valid('hidden input skipped',
  '<input type="hidden" value="token">');

t.valid('submit input skipped',
  '<input type="submit" value="Send">');
