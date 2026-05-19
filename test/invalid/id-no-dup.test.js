import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/id-no-dup');

t.invalid('two elements with the same id',
  '<div id="hero"></div><section id="hero"></section>',
  {code: 'E012'});

t.invalid('three elements sharing one id',
  '<div id="box"></div><p id="box"></p><span id="box"></span>',
  {code: 'E012'});

t.invalid('duplicate in nested structure',
  '<main id="main"><div id="item"><p id="item">text</p></div></main>',
  {code: 'E012'});

t.valid('all unique ids',
  '<div id="header"></div><div id="main"></div><div id="footer"></div>');

t.valid('no id attributes at all',
  '<div class="one"></div><div class="two"></div>');

t.valid('single element with id',
  '<section id="about"><h2>About</h2></section>');
