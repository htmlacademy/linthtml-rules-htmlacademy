import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-charset-utf');

t.invalid('charset set to windows-1251',
  '<meta charset="windows-1251">',
  {message: /charset should have a value of "utf-8"/});

t.invalid('charset set to iso-8859-1',
  '<meta charset="iso-8859-1">',
  {message: /charset should have a value of "utf-8"/});

t.valid('charset is utf-8 lowercase',
  '<meta charset="utf-8">');

t.valid('charset is UTF-8 uppercase',
  '<meta charset="UTF-8">');

t.valid('meta without charset attribute is ignored',
  '<meta name="viewport" content="width=device-width,initial-scale=1">');
