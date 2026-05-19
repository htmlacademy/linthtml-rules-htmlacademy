import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-tags-presence');

t.invalid('both h1 and main missing',
  '<!DOCTYPE html><html><head></head><body><div></div></body></html>',
  {message: /missing the following tags/},
  [true, ['h1', 'main']]);

t.invalid('only h1 missing',
  '<!DOCTYPE html><html><head></head><body><main><p>content</p></main></body></html>',
  {message: /h1/},
  [true, ['h1', 'main']]);

t.invalid('only main missing',
  '<!DOCTYPE html><html><head></head><body><h1>Title</h1></body></html>',
  {message: /main/},
  [true, ['h1', 'main']]);

t.valid('both h1 and main present',
  '<!DOCTYPE html><html><head></head><body><main><h1>Title</h1></main></body></html>',
  [true, ['h1', 'main']]);

t.valid('h1 nested deeply inside main',
  `<!DOCTYPE html><html><head></head><body>
  <main><div><section><h1>Title</h1></section></div></main>
</body></html>`,
  [true, ['h1', 'main']]);

t.valid('only h1 required and present',
  '<!DOCTYPE html><html><head></head><body><h1>Title</h1></body></html>',
  [true, ['h1']]);
