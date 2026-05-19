import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/no-double-br');

t.invalid('two consecutive br tags',
  '<p>text<br><br>more</p>',
  {message: /combined <br> tags/});

t.invalid('two br tags with whitespace between',
  '<p>text<br> <br>more</p>',
  {message: /combined <br> tags/});

t.invalid('two br tags separated by newline whitespace',
  '<p>text<br>\n<br>more</p>',
  {message: /combined <br> tags/});

t.valid('single br tag',
  '<p>text<br>more</p>');

t.valid('two br tags separated by actual text',
  '<p>line one<br>line two<br>line three</p>');

t.valid('br in different parents',
  '<p>text<br>end</p><p><br>start</p>');
