import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-single-styles');

t.invalid('two stylesheet links in head',
  '<head><link rel="stylesheet" href="styles/header.css"><link rel="stylesheet" href="styles/main.css"></head>',
  {message: /Styles must be connected by a single file/});

t.invalid('three stylesheet links in head reports two issues',
  '<head><link rel="stylesheet" href="a.css"><link rel="stylesheet" href="b.css"><link rel="stylesheet" href="c.css"></head>',
  {message: /Styles must be connected by a single file/});

t.valid('single stylesheet link in head',
  '<head><link rel="stylesheet" href="styles/styles.css"></head>');

t.valid('no stylesheet links in head',
  '<head></head>');

t.valid('stylesheet link alongside non-stylesheet link',
  '<head><link rel="stylesheet" href="styles.css"><link rel="preload" href="font.woff2" as="font"></head>');
