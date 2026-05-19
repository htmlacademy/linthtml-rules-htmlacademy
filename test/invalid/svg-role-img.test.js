import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/svg-role-img');

t.invalid('bare <svg> without role/aria-hidden is invalid',
  '<svg width="20" height="20"><path d="x"/></svg>',
  {message: /must have role="img"/});

t.invalid('<svg role="img"> without accessible name is invalid',
  '<svg role="img" width="20" height="20"><path d="x"/></svg>',
  {message: /accessible name/});

t.invalid('<svg aria-label="…"> without role="img" is invalid',
  '<svg aria-label="Логотип" width="20" height="20"><path d="x"/></svg>',
  {message: /must have role="img"/});

t.invalid('<svg role="img"> with empty aria-label is invalid',
  '<svg role="img" aria-label="" width="20" height="20"></svg>',
  {message: /accessible name/});

t.valid('<svg role="img" aria-label="…"> is valid',
  '<svg role="img" aria-label="Логотип" width="20" height="20"><path d="x"/></svg>');

t.valid('<svg role="image" aria-labelledby="…"> is valid',
  '<svg role="image" aria-labelledby="t" width="20" height="20"><title id="t">Лого</title></svg>');

t.valid('decorative <svg aria-hidden="true"> is valid',
  '<svg aria-hidden="true" width="16" height="16"></svg>');

t.valid('decorative <svg aria-hidden="true" focusable="false"> is valid',
  '<svg aria-hidden="true" focusable="false" width="16" height="16"><path d="x"/></svg>');

t.valid('non-svg elements are not checked',
  '<div><img src="x.svg" alt="Лого"></div>');
