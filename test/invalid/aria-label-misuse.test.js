import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/aria-label-misuse');

t.invalid('aria-label on <div>',
  '<div aria-label="Description">Content</div>',
  {message: /"aria-label" cannot be used on this element/});

t.invalid('aria-label on <span>',
  '<span aria-label="Description">Text</span>',
  {message: /"aria-label" cannot be used on this element/});

t.invalid('aria-label on <p>',
  '<p aria-label="Description">Text</p>',
  {message: /"aria-label" cannot be used on this element/});

t.invalid('aria-label on <svg> without role',
  '<svg aria-label="Декорация" width="20" height="20"></svg>',
  {message: /"aria-label" cannot be used on this element/});

t.valid('aria-label on <input>',
  '<input type="text" aria-label="Name">');

t.valid('aria-label on <button>',
  '<button aria-label="Close">X</button>');

t.valid('aria-label on <nav>',
  '<nav aria-label="Main navigation">Menu</nav>');

t.valid('aria-label on <section>',
  '<section aria-label="Featured articles">Content</section>');

t.valid('aria-label on <div> with tabindex',
  '<div tabindex="0" aria-label="Interactive region">Content</div>');

t.valid('aria-label on <svg role="img">',
  '<svg role="img" aria-label="Логотип" width="20" height="20"></svg>');
