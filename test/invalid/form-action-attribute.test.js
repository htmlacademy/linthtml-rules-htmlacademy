import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/form-action-attribute');

t.invalid('form without action attribute',
  '<form><input type="submit"></form>',
  {message: /missing the "action" attribute/});

t.invalid('form with empty action attribute',
  '<form action><input type="submit"></form>',
  {message: /value of the "action" attribute.*is empty/});

t.invalid('form with empty string action',
  '<form action=""><input type="submit"></form>',
  {message: /value of the "action" attribute.*is empty/});

t.valid('form with valid action URL',
  '<form action="https://echo.htmlacademy.ru"><button type="submit">Send</button></form>');

t.valid('form with relative path action',
  '<form action="/submit"><input type="submit" value="Go"></form>');

t.valid('non-form element ignored',
  '<div><input type="text"></div>');
