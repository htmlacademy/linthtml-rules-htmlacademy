import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/replaced-elements-req-dimensions');

t.invalid('img without width and height',
  '<img src="images/photo.jpg">',
  {message: /missing width and height/});

t.invalid('img with only width',
  '<img src="images/photo.jpg" width="100">',
  {message: /missing height/});

t.invalid('svg without dimensions',
  '<svg viewBox="0 0 200 100"></svg>',
  {message: /missing width and height/});

t.invalid('video without dimensions',
  '<video src="video.mp4"></video>',
  {message: /missing width and height/});

t.invalid('iframe without dimensions',
  '<iframe src="https://example.com"></iframe>',
  {message: /missing width and height/});

t.valid('img with both width and height',
  '<img src="images/photo.jpg" width="500" height="300" alt="">');

t.valid('svg with both width and height',
  '<svg width="200" height="100" viewBox="0 0 200 100"></svg>');

t.valid('video with both dimensions',
  '<video width="640" height="360" src="video.mp4"></video>');

t.valid('iframe with both dimensions',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/example"></iframe>');
