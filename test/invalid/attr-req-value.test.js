import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/attr-req-value');

t.invalid('empty id attribute',
  '<button id=""></button>',
  {code: 'E006'},
  [true, {ignore: []}]);

t.invalid('class attribute without value',
  '<button class></button>',
  {code: 'E006'},
  [true, {ignore: []}]);

t.invalid('empty alt attribute reported when not in ignore list',
  '<img alt="" src="photo.jpg">',
  {code: 'E006'},
  [true, {ignore: []}]);

t.invalid('select with two empty option values reports both',
  '<select><option value="">Select</option><option value="">Also empty</option></select>',
  {code: 'E006'},
  [true, {ignore: []}]);

t.valid('non-empty attribute',
  '<button class="btn">Submit</button>',
  [true, {ignore: []}]);

t.valid('boolean attribute without value',
  '<button disabled>Submit</button>',
  [true, {ignore: []}]);

t.valid('ignored attribute with empty value',
  '<img alt="" src="photo.jpg">',
  [true, {ignore: ['alt']}]);

t.valid('select with one empty option placeholder',
  `<select>
    <option value="">Select...</option>
    <option value="banana">Banana</option>
  </select>`,
  [true, {ignore: []}]);
