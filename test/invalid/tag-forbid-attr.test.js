import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/tag-forbid-attr');

t.invalid('body with forbidden class attribute',
  '<body class="page__body"></body>',
  {message: /class.*body/},
  [true, {body: [{name: 'class'}]}]);

t.invalid('picture with forbidden class attribute',
  '<picture class="product__image"><img src="img.jpg" alt=""></picture>',
  {message: /class.*picture/},
  [true, {picture: [{name: 'class'}]}]);

t.invalid('multiple forbidden attrs, one present',
  '<body style="color:red"></body>',
  {message: /style.*body/},
  [true, {body: [{name: 'class'}, {name: 'style'}]}]);

t.invalid('forbids attribute only when value matches the string',
  '<link rel="stylesheet" href="s.css" type="text/css">',
  {message: /text\/css.*link/},
  [true, {link: [{name: 'type', value: 'text/css'}]}]);

t.invalid('forbids attribute via RegExp value match',
  '<link rel="stylesheet" href="s.css" type="text/CSS">',
  {message: /link/},
  [true, {link: [{name: 'type', value: /^text\/css$/i}]}]);

t.valid('body without forbidden attribute',
  '<body><div></div></body>',
  [true, {body: [{name: 'class'}]}]);

t.valid('picture without forbidden attribute',
  '<picture><img class="product__image" src="img.jpg" alt=""></picture>',
  [true, {picture: [{name: 'class'}]}]);

t.valid('forbidden attr on different tag is not checked',
  '<div class="container"></div>',
  [true, {body: [{name: 'class'}]}]);

t.valid('leaves alternate values intact when restriction is value-specific',
  '<script src="x.js" type="module"></script>',
  [true, {script: [{name: 'type', value: 'text/javascript'}]}]);
