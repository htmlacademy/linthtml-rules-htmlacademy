import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/req-webp-in-picture');

t.invalid('only jpeg source, no webp or avif',
  '<picture><source type="image/jpeg" srcset="img.jpg"><img src="img.jpg" alt=""></picture>',
  {message: /webp.*avif/});

t.invalid('only png sources, no webp or avif',
  `<picture>
    <source type="image/png" srcset="img-800.png" media="(min-width: 800px)">
    <source type="image/png" srcset="img-400.png">
    <img src="img.png" alt="">
  </picture>`,
  {message: /webp.*avif/});

t.invalid('source without type attribute',
  '<picture><source srcset="img.jpg"><img src="img.jpg" alt=""></picture>');

t.valid('webp source present',
  '<picture><source type="image/webp" srcset="img.webp"><source type="image/jpeg" srcset="img.jpg"><img src="img.jpg" alt=""></picture>');

t.valid('avif source present',
  '<picture><source type="image/avif" srcset="img.avif"><source type="image/jpeg" srcset="img.jpg"><img src="img.jpg" alt=""></picture>');

t.valid('all sources are svg, rule skipped',
  '<picture><source type="image/svg+xml" srcset="logo.svg" media="(min-width: 768px)"><img src="logo.svg" alt=""></picture>');
