import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/tag-name-lowercase');

t.invalid('uppercase DIV tag',
  '<DIV></DIV>',
  {code: 'E017'},
  [true, {ignore: []}]);

t.invalid('uppercase H1 tag',
  '<H1>Title</H1>',
  {code: 'E017'},
  [true, {ignore: []}]);

t.invalid('mixed-case Span tag',
  '<Span>text</Span>',
  {code: 'E017'},
  [true, {ignore: []}]);

t.invalid('non-ignored tag still reported when other tag is ignored',
  '<SECTION><H1>Title</H1></SECTION>',
  {code: 'E017'},
  [true, {ignore: ['h1']}]);

t.valid('all lowercase tags are valid',
  '<div><p>text</p></div>',
  [true, {ignore: []}]);

t.valid('ignored tag name passes (node.name is lowercased)',
  '<H1>Title</H1>',
  [true, {ignore: ['h1']}]);
