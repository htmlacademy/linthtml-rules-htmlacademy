import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-head-styles');

t.invalid('stylesheet linked inside body',
  '<body><link rel="stylesheet" href="styles/main.css"></body>',
  {message: /Styles must be connected in <head>/});

t.invalid('stylesheet linked directly in html (no head)',
  '<html><body><link rel="stylesheet" href="styles/main.css"></body></html>',
  {message: /Styles must be connected in <head>/});

t.valid('stylesheet linked inside head',
  '<head><link rel="stylesheet" href="styles/style.css"></head>');

t.valid('stylesheet inside head in full document',
  '<html><head><link rel="stylesheet" href="styles/main.css"></head><body></body></html>');

t.valid('non-stylesheet link in body is ignored',
  '<body><link rel="preload" href="font.woff2" as="font"></body>');
