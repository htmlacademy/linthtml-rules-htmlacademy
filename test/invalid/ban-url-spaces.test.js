import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/ban-url-spaces');

t.invalid('space in href value',
  '<a href="https://example.com?query=some long param">Link</a>',
  {message: /Spaces in URL not allowed/});

t.invalid('space in src value',
  '<img src="images/my photo.jpg" alt="Photo">',
  {message: /Spaces in URL not allowed/});

t.invalid('space in custom attribute from config',
  '<source srcset="image path.webp">',
  {message: /Spaces in URL not allowed/},
  [true, {attributes: ['srcset']}]);

t.valid('encoded URL in href',
  '<a href="https://example.com?query=some%20long%20param">Link</a>');

t.valid('clean URL without spaces',
  '<a href="https://example.com/page">Link</a>');

t.valid('src without spaces',
  '<img src="images/photo.jpg" alt="Photo">');
