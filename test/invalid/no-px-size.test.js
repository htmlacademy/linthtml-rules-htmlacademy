import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/no-px-size');

t.invalid('img with px width',
  '<img width="100px" height="100" src="x.jpg" alt="">',
  {message: /Bad value for attribute width/});

t.invalid('img with percent height',
  '<img width="100" height="100%" src="x.jpg" alt="">',
  {message: /Bad value for attribute height/});

t.invalid('img with px in both width and height reports width',
  '<img width="100px" height="200px" src="x.jpg" alt="">',
  {message: /Bad value for attribute width/});

t.invalid('svg with em width',
  '<svg width="20em" height="20"></svg>',
  {message: /Bad value for attribute width/});

t.invalid('video with px width',
  '<video src="v.mp4" width="640px" height="360"></video>',
  {message: /Bad value for attribute width on <video>/});

t.invalid('iframe with em height',
  '<iframe src="/x" width="600" height="20em"></iframe>',
  {message: /Bad value for attribute height on <iframe>/});

t.valid('img with numeric width and height',
  '<img width="500" height="300" src="x.jpg" alt="">');

t.valid('svg with numeric width and height',
  '<svg width="200" height="100" viewBox="0 0 200 100"></svg>');

t.valid('img without width or height attributes',
  '<img src="x.jpg" alt="photo">');

t.valid('video with numeric width and height',
  '<video src="v.mp4" width="640" height="360"></video>');

t.valid('iframe with numeric width and height',
  '<iframe src="/x" width="600" height="400"></iframe>');
