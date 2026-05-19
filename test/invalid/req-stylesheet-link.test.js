import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-stylesheet-link');

t.invalid('empty head has no stylesheet link',
  '<head></head>',
  {message: /rel="stylesheet" and a non-empty href/});

t.invalid('stylesheet link with empty href',
  '<head><link rel="stylesheet" href=""></head>',
  {message: /rel="stylesheet" and a non-empty href/});

t.invalid('stylesheet link without href attribute',
  '<head><link rel="stylesheet"></head>',
  {message: /rel="stylesheet" and a non-empty href/});

t.invalid('link with wrong rel value',
  '<head><link rel="style" href="styles/style.css"></head>',
  {message: /rel="stylesheet" and a non-empty href/});

t.valid('valid stylesheet link in head',
  '<head><link rel="stylesheet" href="styles/styles.css"></head>');

t.valid('stylesheet link with extra attributes',
  '<head><link rel="stylesheet" href="styles/style.css" type="text/css" media="screen,projection"></head>');

t.valid('stylesheet link with external URL',
  '<head><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"></head>');
