import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/attr-delimiter');

t.invalid('space before = sign',
  '<input name ="my-field">',
  {message: /must not be delimited by whitespace/});

t.invalid('space after = sign',
  '<input name= "my-field">',
  {message: /must not be delimited by whitespace/});

t.invalid('spaces on both sides of = sign',
  '<input name = "my-field">',
  {message: /must not be delimited by whitespace/});

t.valid('no spaces around = sign',
  '<input name="my-field">');

t.valid('multiple attributes without spaces',
  '<a href="https://example.com" class="link" target="_blank">Link</a>');

t.valid('boolean attribute without value',
  '<input disabled>');
