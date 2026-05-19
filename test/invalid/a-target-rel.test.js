import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/a-target-rel');

t.invalid('target="_blank" with no rel attribute',
  '<a href="https://example.com" target="_blank">Link</a>',
  {message: /missing the "rel=noreferrer"/});

t.invalid('target="_blank" with rel="noopener" only does not block referrer',
  '<a href="https://example.com" target="_blank" rel="noopener">Link</a>',
  {message: /missing the "rel=noreferrer"/});

t.valid('target="_blank" with rel="noreferrer" only (noreferrer implies noopener)',
  '<a href="https://example.com" target="_blank" rel="noreferrer">Link</a>');

t.valid('target="_blank" with rel="noopener noreferrer"',
  '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>');

t.valid('target="_blank" with rel="noreferrer noopener"',
  '<a href="https://example.com" target="_blank" rel="noreferrer noopener">Link</a>');

t.valid('link without target="_blank" does not require rel',
  '<a href="https://example.com">Link</a>');

t.valid('link with target="_self" does not require rel',
  '<a href="https://example.com" target="_self">Link</a>');
