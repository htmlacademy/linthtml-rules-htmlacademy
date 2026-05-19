import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-submit-button');

t.invalid('form without any submit-capable child',
  '<form action="/api"><input type="text" name="x"></form>',
  {code: 'HTMLA063'});

t.invalid('form with reset-only button',
  '<form action="/api"><button type="reset">Reset</button></form>',
  {code: 'HTMLA063'});

t.invalid('form with explicit type="button"',
  '<form action="/api"><button type="button">Click</button></form>',
  {code: 'HTMLA063'});

t.invalid('external submitter targets a different form id',
  '<form id="a" action="/api"><input type="text"></form><button form="b" type="submit">Send</button>',
  {code: 'HTMLA063'});

t.valid('explicit <button type="submit">',
  '<form action="/api"><button type="submit">Send</button></form>');

t.valid('<input type="submit">',
  '<form action="/api"><input type="submit" value="Send"></form>');

t.valid('<button> without type defaults to submit',
  '<form action="/api"><button>Send</button></form>');

t.valid('submitter nested inside wrapper element',
  '<form action="/api"><div><button type="submit">Send</button></div></form>');

t.valid('external submitter linked via form attribute',
  '<form id="contact" action="/api"><input type="text"></form><button form="contact" type="submit">Send</button>');
