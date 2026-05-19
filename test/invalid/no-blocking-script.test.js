import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/no-blocking-script');

t.invalid('script in head without async or defer',
  `<html>
    <head><script src="app.js"></script></head>
    <body></body>
  </html>`,
  {message: /should be the last element or async/});

t.invalid('script in middle of body',
  `<html>
    <head></head>
    <body><p>content</p><script src="app.js"></script><p>more</p></body>
  </html>`,
  {message: /should be the last element or async/});

t.valid('script as last element in body',
  `<html>
    <head></head>
    <body><p>content</p><script src="app.js"></script></body>
  </html>`);

t.valid('script with async in head',
  `<html>
    <head><script async src="app.js"></script></head>
    <body></body>
  </html>`);

t.valid('script with defer in head',
  `<html>
    <head><script defer src="app.js"></script></head>
    <body></body>
  </html>`);

t.valid('script with type=module in head',
  `<html>
    <head><script src="app.js" type="module"></script></head>
    <body></body>
  </html>`);
