import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-source-width-height');

t.invalid('source inside picture without any dimensions',
  '<picture><source srcset="img-tablet.jpg" media="(min-width: 768px)"><img src="img-mobile.jpg" alt=""></picture>',
  {message: /must have both "width" and "height"/});

t.invalid('source inside picture with only width',
  '<picture><source srcset="img.jpg" width="100"><img src="img.jpg" alt=""></picture>',
  {message: /must have both "width" and "height"/});

t.invalid('source inside picture with only height',
  '<picture><source srcset="img.jpg" height="200"><img src="img.jpg" alt=""></picture>',
  {message: /must have both "width" and "height"/});

t.valid('source inside picture with both width and height',
  `<picture>
  <source srcset="img-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="img-mobile.jpg" width="320" height="148" alt="">
</picture>`);

t.valid('picture with only img and no source is valid',
  '<picture><img src="img.jpg" width="320" height="200" alt=""></picture>');

t.valid('source outside picture is ignored',
  '<video><source src="video.mp4" type="video/mp4"></video>');
