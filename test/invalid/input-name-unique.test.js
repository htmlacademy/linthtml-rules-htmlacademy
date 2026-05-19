import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/input-name-unique');

t.invalid('two non-radio inputs with same name',
  '<form><input type="text" name="email"><input type="hidden" name="email"></form>',
  {code: 'HTMLA064', message: /duplicates a name/});

t.invalid('three non-radio inputs with same name reports first duplicate',
  '<form><input type="text" name="q"><input type="text" name="q"><input type="text" name="q"></form>',
  {code: 'HTMLA064', message: /duplicates a name/});

t.invalid('radio mixed with non-radio same name',
  '<form><input type="radio" name="color" value="red"><input type="text" name="color"></form>',
  {code: 'HTMLA064', message: /duplicates a name/});

t.invalid('checkbox mixed with text input on same name',
  '<form><input type="checkbox" name="color" value="red"><input type="text" name="color"></form>',
  {code: 'HTMLA064', message: /duplicates a name/});

t.valid('radio group with same name',
  `<form>
    <input type="radio" name="size" value="s">
    <input type="radio" name="size" value="m">
    <input type="radio" name="size" value="l">
  </form>`);

t.valid('inputs without name attribute',
  '<form><input type="text"><input type="text"></form>');

t.valid('same name in different forms',
  `<form id="a"><input type="text" name="query"></form>
  <form id="b"><input type="text" name="query"></form>`);

t.valid('input outside form with duplicate name is ignored',
  '<input type="text" name="standalone"><input type="text" name="standalone">');

t.valid('checkbox group with same name',
  `<form>
    <input type="checkbox" name="color" value="red">
    <input type="checkbox" name="color" value="blue">
    <input type="checkbox" name="color" value="pink">
  </form>`);

t.valid('mixed checkbox and radio with same name',
  '<form><input type="checkbox" name="x"><input type="radio" name="x" value="a"></form>');
