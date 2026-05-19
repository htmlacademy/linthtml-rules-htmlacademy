import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/section-has-heading');

t.invalid('section with only paragraph, no heading',
  '<section><p>Some content here.</p></section>',
  {message: /section.*heading/i});

t.invalid('empty section',
  '<section></section>');

t.invalid('section with only div wrapper, no heading inside',
  '<section><div><p>text</p></div></section>');

t.invalid('svg inside section does not count as heading container',
  '<section><svg><text>Title</text></svg></section>');

t.valid('section with direct h2 child',
  '<section><h2>Title</h2><p>Content</p></section>');

t.valid('heading nested inside wrapper div',
  '<section><div><h3>Nested title</h3><p>Content</p></div></section>');

t.valid('h1 at any level counts',
  '<section><article><h1>Deep title</h1></article></section>');
