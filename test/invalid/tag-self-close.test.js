import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/tag-self-close');

t.invalid('br self-closed with never option',
  '<br/>',
  {code: 'E018'},
  [true, 'never']);

t.invalid('img self-closed with never option',
  '<img src="photo.jpg" alt="photo"/>',
  {code: 'E018'},
  [true, 'never']);

t.invalid('input self-closed with never option',
  '<input type="text" name="q"/>',
  {code: 'E018'},
  [true, 'never']);

t.invalid('img without self-close with always option',
  '<img src="photo.jpg" alt="photo">',
  {code: 'E018'},
  [true, 'always']);

t.valid('br without self-close passes with never option',
  '<br>',
  [true, 'never']);

t.valid('img without self-close passes with never option',
  '<img src="photo.jpg" alt="photo">',
  [true, 'never']);

t.valid('img self-closed passes with always option',
  '<img src="photo.jpg" alt="photo"/>',
  [true, 'always']);

t.valid('svg void path self-closed is exempt from never',
  '<svg><path d="M0 0 L10 10"/></svg>',
  [true, 'never']);
