import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/head-meta-charset');

t.invalid('head with no meta elements',
  '<head><title>Test</title></head>',
  {message: /charset attribute/});

t.invalid('head with meta but no charset attribute',
  '<head><meta name="viewport" content="width=device-width"><title>Test</title></head>',
  {message: /charset attribute/});

t.invalid('completely empty head',
  '<head></head>',
  {message: /charset attribute/});

t.valid('head with meta charset utf-8',
  '<head><meta charset="utf-8"></head>');

t.valid('head with meta charset windows-1251',
  '<head><meta charset="windows-1251"></head>');

t.valid('charset alongside other meta tags',
  '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>');
