import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/link-req-content');

t.invalid('empty anchor',
  '<a href="#"></a>',
  {message: /must have a text/});

t.invalid('anchor with only whitespace',
  '<a href="#">   </a>',
  {message: /must have a text/});

t.invalid('anchor with image but no alt',
  '<a href="#"><img src="cat.jpg"></a>',
  {message: /must have a text/});

t.invalid('anchor with svg and no aria-label',
  '<a href="#"><svg viewBox="0 0 10 10"></svg></a>',
  {message: /must have a text/});

t.valid('anchor with text content',
  '<a href="#">Click here</a>');

t.valid('anchor with aria-label',
  '<a href="#" aria-label="Go to homepage"></a>');

t.valid('anchor with image with alt',
  '<a href="#"><img src="logo.png" alt="Logo"></a>');

t.valid('anchor with nested text',
  '<a href="#"><span>Read more</span></a>');
