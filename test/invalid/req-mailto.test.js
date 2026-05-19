import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-mailto');

t.invalid('href is the raw email without mailto:',
  '<a href="example@example.com">example@example.com</a>',
  {message: /must start with "mailto:"/});

t.invalid('href is an unrelated URL but text is an email',
  '<a href="#!">contact@example.com</a>',
  {message: /must start with "mailto:"/});

t.invalid('no href attribute and text is an email',
  '<a>admin@example.com</a>',
  {message: /must start with "mailto:"/});

t.invalid('href is http link but text is an email',
  '<a href="http://example.com">user@example.com</a>',
  {message: /must start with "mailto:"/});

t.valid('href starts with mailto: and text is an email',
  '<a href="mailto:example@example.com">example@example.com</a>');

t.valid('href starts with mailto: but text is not an email',
  '<a href="mailto:example@example.com">Click here</a>');

t.valid('anchor with non-email text content is ignored',
  '<a href="/contact">Contact us</a>');
