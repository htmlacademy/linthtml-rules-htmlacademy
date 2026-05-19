import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-preload-font');

t.invalid('empty head has no font preload',
  '<head></head>',
  {message: /link tag with rel="preload"/});

t.invalid('preload link with empty href',
  '<head><link rel="preload" href="" as="font" type="font/woff2"></head>',
  {message: /link tag with rel="preload"/});

t.invalid('preload link missing as="font"',
  '<head><link rel="preload" href="font.woff2" type="font/woff2"></head>',
  {message: /link tag with rel="preload"/});

t.invalid('preload link missing type="font/*"',
  '<head><link rel="preload" href="font.woff2" as="font"></head>',
  {message: /link tag with rel="preload"/});

t.valid('correct preload link with font/woff2',
  '<head><link rel="preload" href="fonts/font.woff2" as="font" type="font/woff2"></head>');

t.valid('correct preload link with crossorigin attribute',
  '<head><link rel="preload" href="fonts/font.woff2" as="font" type="font/woff2" crossorigin="anonymous"></head>');

t.valid('type font/woff (not just font/woff2) is also valid',
  '<head><link rel="preload" href="fonts/font.woff" as="font" type="font/woff"></head>');
