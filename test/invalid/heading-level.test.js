import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/heading-level');

t.invalid('h1 followed by h3 skips h2',
  '<h1>Title</h1><h3>Subsection</h3>',
  {message: /level skipped/i});

t.invalid('first heading is h2, not h1',
  '<h2>Section</h2><p>Content</p>',
  {message: /first heading must be/i});

t.invalid('h1 -> h2 -> h4 skips h3',
  '<h1>Title</h1><h2>Section</h2><h4>Deep</h4>',
  {message: /level skipped/i});

t.invalid('after returning to h2, jumping to h4 skips h3',
  '<h1>Title</h1><h2>Section</h2><h3>Sub</h3><h2>Another</h2><h4>Deep</h4>',
  {message: /level skipped/i});

t.valid('h1 -> h2 -> h3 -> h2 -> h3 going back up is OK',
  '<h1>Title</h1><h2>Section</h2><h3>Sub</h3><h2>Another</h2><h3>Another sub</h3>');

t.valid('same level repeated',
  '<h1>Title</h1><h2>Section one</h2><h2>Section two</h2><h3>Subsection</h3>');

t.valid('single h1',
  '<h1>Title</h1>');

t.valid('no headings at all',
  '<div><p>No headings here.</p></div>');
