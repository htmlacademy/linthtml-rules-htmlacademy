import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/no-class-in-container');

t.invalid('direct child with class inside container',
  '<div class="content"><h1 class="content__title">Title</h1></div>',
  {message: /should not have a class attribute/},
  [true, {containers: ['content']}]);

t.invalid('nested child with class inside container',
  '<div class="content"><div><p class="text">hi</p></div></div>',
  {message: /should not have a class attribute/},
  [true, {containers: ['content']}]);

t.invalid('multiple classed children reports first',
  '<div class="wrapper"><p class="a">one</p><p class="b">two</p></div>',
  {message: /should not have a class attribute/},
  [true, {containers: ['wrapper']}]);

t.valid('child without class inside container',
  '<div class="content"><h1>Title</h1><p>Text</p></div>',
  [true, {containers: ['content']}]);

t.valid('ignored tag is exempt',
  '<div class="content"><h1 class="content__title">Title</h1></div>',
  [true, {containers: ['content'], ignore: {tags: ['h1']}}]);

t.valid('ignored class is exempt',
  '<div class="content"><p class="content__text">Text</p></div>',
  [true, {containers: ['content'], ignore: {classes: ['content__text']}}]);

t.valid('container class not matched, no check',
  '<div class="sidebar"><p class="note">Text</p></div>',
  [true, {containers: ['content']}]);
