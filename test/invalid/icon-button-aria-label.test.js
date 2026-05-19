import {createTester} from '../utils/test-rule.js';

const t = createTester('htmlacademy/icon-button-aria-label');

t.invalid('button with only an svg child',
  '<button type="button"><svg></svg></button>',
  {message: /accessible name/});

t.invalid('button with only an img alt="" child',
  '<button type="button"><img src="x.svg" alt=""></button>',
  {message: /accessible name/});

t.invalid('empty button',
  '<button type="button"></button>',
  {message: /accessible name/});

t.invalid('whitespace-only button',
  '<button type="button">   </button>',
  {message: /accessible name/});

t.valid('button with text content',
  '<button type="submit">Send</button>');

t.valid('button with text wrapped in a span',
  '<button type="button"><span>Menu</span></button>');

t.valid('icon-only button with aria-label',
  '<button type="button" aria-label="Close"><svg></svg></button>');

t.valid('icon-only button with aria-labelledby',
  '<button type="button" aria-labelledby="cart-title"><svg></svg></button>');

t.valid('icon-only button with title',
  '<button type="button" title="Menu"><svg></svg></button>');

t.valid('visually-hidden text inside icon button',
  '<button type="button"><span class="visually-hidden">Menu</span><svg></svg></button>');
