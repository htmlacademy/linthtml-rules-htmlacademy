import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/attribute-allowed-values');

const inputTypeConfig = [true, {input: {attributes: {type: {enum: ['text', 'email']}}}}];

t.invalid('disallowed value triggers an issue',
  '<input type="foobar">',
  {message: /foobar is not allowed for type/},
  inputTypeConfig);

t.valid('value is matched case-insensitively',
  '<input type="TEXT">',
  inputTypeConfig);

t.valid('allowed value passes',
  '<input type="email">',
  inputTypeConfig);

t.valid('element not listed in config is not checked',
  '<button type="submit">Send</button>',
  inputTypeConfig);

t.valid('empty config never reports',
  '<input type="password">',
  [true, {}]);

t.valid('attribute not listed in config is not checked',
  '<input type="text" autocomplete="off">',
  inputTypeConfig);
