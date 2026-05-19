import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/boolean-attr-no-value');

t.invalid('disabled="disabled"',
  '<input type="text" disabled="disabled">',
  {message: /Boolean attribute "disabled"/});

t.invalid('checked="true"',
  '<input type="checkbox" checked="true">',
  {message: /Boolean attribute "checked"/});

t.invalid('autofocus="autofocus"',
  '<button autofocus="autofocus" type="submit">Send</button>',
  {message: /Boolean attribute "autofocus"/});

t.invalid('open="open" on <details>',
  '<details open="open"><summary>x</summary></details>',
  {message: /Boolean attribute "open"/});

t.invalid('multiple boolean attrs with values report multiple issues',
  '<input disabled="disabled" required="required">',
  {message: /Boolean attribute "disabled"/});

t.valid('disabled without a value',
  '<input type="text" disabled>');

t.valid('combined booleans without values',
  '<input type="checkbox" checked required>');

t.valid('non-boolean attribute with a value is ignored',
  '<input type="text" placeholder="example">');

t.valid('video boolean attributes without values',
  '<video src="v.mp4" autoplay controls loop muted></video>');
