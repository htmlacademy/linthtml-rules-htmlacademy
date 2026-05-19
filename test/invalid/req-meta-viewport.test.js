import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-meta-viewport');

t.invalid('empty head has no viewport meta',
  '<head></head>',
  {message: /should have a <meta name="viewport">/});

t.invalid('head with unrelated meta and no viewport',
  '<head><meta name="description" content="test"></head>',
  {message: /should have a <meta name="viewport">/});

t.invalid('viewport meta without required content value',
  '<head><meta name="viewport" content="width=device-width"></head>',
  {message: /should have a <meta name="viewport">/});

t.valid('correct viewport meta without spaces',
  '<head><meta name="viewport" content="width=device-width,initial-scale=1"></head>');

t.valid('correct viewport meta with spaces after comma',
  '<head><meta name="viewport" content="width=device-width, initial-scale=1"></head>');

t.valid('initial-scale before width=device-width is accepted',
  '<head><meta name="viewport" content="initial-scale=1,width=device-width"></head>');
