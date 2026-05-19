import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/charset-position');

t.invalid('title as first head child',
  '<head><title>Doc</title><meta charset="utf-8"></head>',
  {message: /first element in <head> must be <meta charset/});

t.invalid('link as first head child',
  '<head><link rel="stylesheet" href="style.css"><meta charset="utf-8"></head>',
  {message: /first element in <head> must be <meta charset/});

t.invalid('script as first head child',
  '<head><script src="app.js"></script><meta charset="utf-8"></head>',
  {message: /first element in <head> must be <meta charset/});

t.invalid('<meta name="viewport"> as first head child',
  '<head><meta name="viewport" content="width=device-width"><meta charset="utf-8"></head>',
  {message: /first element in <head> must be <meta charset/});

t.valid('meta charset as first head child',
  '<head><meta charset="utf-8"><title>Doc</title></head>');

t.valid('meta charset as only head child',
  '<head><meta charset="utf-8"></head>');
