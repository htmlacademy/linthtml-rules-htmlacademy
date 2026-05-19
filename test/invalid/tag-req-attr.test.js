import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/tag-req-attr');

t.invalid('input missing required name attribute',
  '<input type="text">',
  {code: 'E057'},
  [true, {input: [{name: 'name'}]}]);

t.invalid('img missing both required src and alt',
  '<img>',
  {code: 'E057'},
  [true, {img: [{name: 'src'}, {name: 'alt'}]}]);

t.invalid('img has src but missing alt',
  '<img src="photo.jpg">',
  {code: 'E057'},
  [true, {img: [{name: 'src'}, {name: 'alt'}]}]);

t.valid('input with name attribute present',
  '<input type="text" name="username">',
  [true, {input: [{name: 'name'}]}]);

t.valid('img with both src and alt present',
  '<img src="photo.jpg" alt="A photo">',
  [true, {img: [{name: 'src'}, {name: 'alt'}]}]);

t.valid('input type=submit ignores name via ignore config',
  '<input type="submit" value="Go">',
  [true, {input: [{name: 'name', ignore: {type: 'submit'}}]}]);

t.valid('rule does not apply to unconfigured tags',
  '<div></div>',
  [true, {input: [{name: 'name'}]}]);
