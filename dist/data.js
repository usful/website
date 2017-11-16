module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(28);

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Models = new _models2.default({
  middleware: [_models2.default.middleware.immutable, _models2.default.middleware.events]
});

exports.default = Models;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var fbemitter = {
  EventEmitter: __webpack_require__(30),
  EmitterSubscription : __webpack_require__(2)
};

module.exports = fbemitter;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EmitterSubscription
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventSubscription = __webpack_require__(31);

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */

var EmitterSubscription = (function (_EventSubscription) {
  _inherits(EmitterSubscription, _EventSubscription);

  /**
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  function EmitterSubscription(subscriber, listener, context) {
    _classCallCheck(this, EmitterSubscription);

    _EventSubscription.call(this, subscriber);
    this.listener = listener;
    this.context = context;
  }

  return EmitterSubscription;
})(EventSubscription);

module.exports = EmitterSubscription;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (model) {
  model.prototype._initEmitter = function () {
    if (!this._emitter) {
      this._emitter = new EventEmitter();
    }
  };

  model.prototype.listeners = function () {
    this._initEmitter();
    return this._emitter.listeners.apply(this._emitter, arguments);
  };

  model.prototype.emit = function () {
    if (!this._emitter) {
      return;
    }

    return this._emitter.emit.apply(this._emitter, arguments);
  };

  model.prototype.once = function () {
    this._initEmitter();
    return this._emitter.once.apply(this._emitter, arguments);
  };

  model.prototype.removeAllListeners = function () {
    if (!this._emitter) {
      return;
    }

    return this._emitter.removeAllListeners.apply(this._emitter, arguments);
  };

  model.prototype.addListener = function () {
    this._initEmitter();
    return this._emitter.addListener.apply(this._emitter, arguments);
  };
};

var _fbemitter = __webpack_require__(1);

var _fbemitter2 = _interopRequireDefault(_fbemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = _fbemitter2.default.EventEmitter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('Route', {
  path: String,
  exact: Boolean,
  strict: Boolean
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('Block', {
  id: String,
  type: String,
  text: String,
  url: String,
  align: String,
  by: String,
  content: ['Block'],
  animation: String,
  padding: Number,
  mediaType: String,
  width: Number
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sections = __webpack_require__(9);

var _sections2 = _interopRequireDefault(_sections);

var _App = __webpack_require__(27);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default({
  isSetup: false,
  sections: _sections2.default,
  menu: [{
    showing: false,
    active: false,
    leaving: false,
    id: 'a4',
    hash: '#about',
    name: 'About'
  }, {
    showing: false,
    active: false,
    leaving: false,
    id: 'a5',
    hash: '#contact',
    name: 'Contact'
  }]
});

exports.default = app;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _experiences = __webpack_require__(10);

var _experiences2 = _interopRequireDefault(_experiences);

var _home = __webpack_require__(18);

var _home2 = _interopRequireDefault(_home);

var _market = __webpack_require__(19);

var _market2 = _interopRequireDefault(_market);

var _marketClients = __webpack_require__(20);

var _marketClients2 = _interopRequireDefault(_marketClients);

var _marketPartners = __webpack_require__(21);

var _marketPartners2 = _interopRequireDefault(_marketPartners);

var _technology = __webpack_require__(22);

var _technology2 = _interopRequireDefault(_technology);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_home2.default, _technology2.default, _experiences2.default, _market2.default, _marketClients2.default, _marketPartners2.default];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(11);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  component: null,
  active: false,
  id: 'a1',
  inMenu: true,
  name: 'Experiences',
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/sergio-alejandro-ortiz-110188.jpg',
  route: {
    path: '/experiences',
    strict: false
  },
  projects: _projects2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anthropocene = __webpack_require__(12);

var _anthropocene2 = _interopRequireDefault(_anthropocene);

var _earthWeek = __webpack_require__(13);

var _earthWeek2 = _interopRequireDefault(_earthWeek);

var _interactiveArt = __webpack_require__(14);

var _interactiveArt2 = _interopRequireDefault(_interactiveArt);

var _osheaga = __webpack_require__(15);

var _osheaga2 = _interopRequireDefault(_osheaga);

var _sixCycle = __webpack_require__(16);

var _sixCycle2 = _interopRequireDefault(_sixCycle);

var _terroni = __webpack_require__(17);

var _terroni2 = _interopRequireDefault(_terroni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_sixCycle2.default, _anthropocene2.default, _earthWeek2.default, _interactiveArt2.default, _osheaga2.default, _terroni2.default];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/anthropocene-film',
    strict: true
  },
  id: 'ep4',
  type: 'experiences',
  name: 'Anthropocene',
  tags: ['Tech', 'Environment'],
  hero: 'https://s3.amazonaws.com/anthropocene/vids/water.jpg',
  heroVideo: 'https://s3.amazonaws.com/anthropocene/vids/water.mp4',
  client: 'Ed Burtynsky, The Anthropocene Film Project.',
  description: 'With a goal to be as engaging and impactful as the film is, Usful developed an interactive web platform for The Anthropocene Film Project.',
  impact: 'The first in a series of digital experiences for the Anthropocene film, the site received industry recognition and [awards](https://www.awwwards.com/sites/anthropocene), gathering over 100,000 visitors and helping the film to raise funding for production.',
  content: [{
    id: 'anthropocene-1',
    type: 'TextBlock',
    text: 'The goal of the powerful documentary is to explore a critical point in earth and human history and to expand awareness of our species’ reach and impact.'
  }, {
    id: 'anthropocene-2',
    type: 'MediaBlock',
    align: 'left',
    text: 'Kid. - Universal logo and brand identity. The visually stimulating and interactive site was nominated for an award in 2016 for its creativity and innovative approach to design.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/anthropocene-3.jpg',
    mediaType: 'Image'
  }, {
    id: 'anthropocene-3',
    type: 'QuoteBlock',
    text: 'We humans may have become the impact-equivalent of that asteroid.',
    by: 'Jennifer Baichwal'
  }, {
    id: 'anthropocene-4',
    type: 'MediaBlock',
    align: 'center',
    text: 'The innovative objective was to create an engaging and hard-hitting experience for users that parallels the impact humans have on the planet’s future: As platform engagement and interaction lessens, the experience slowly dies, mirroring the effect humans have on the world if no progression on sustainable resourcing is made. Conversely, the more a user interacts with the site, the longer it will stay alive.',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/anthropocene-hero.mp4',
    width: 90,
    mediaType: 'Video'
  }, {
    id: 'anthropocene-5',
    type: 'MediaBlock',
    align: 'left',
    text: 'The unique display of information, large background images, and dramatic animations encourage site visitors to continue to explore and raise awareness by sharing the cause with others.',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/anthropocene-mobile.mp4',
    width: 67,
    mediaType: 'Video'
  }] //Blocks
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/earth-week',
    strict: true
  },
  id: 'ep3',
  type: 'experiences',
  name: 'Earth Week',
  tags: ['Environment', 'Education'],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-3.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/earth-week-hero-2.mp4',
  client: 'Brookfield Office Properties',
  description: 'We partnered with local urban farming startups to showcase affordable and viable new tech solutions to Toronto’s downtown core with an unexpected installation that became a powerful awareness campaign.',
  impact: 'Over 20,000 people engaged with the installation further recognizing our clients commitment to sustainability & increased awareness for all partners.',
  content: [{
    id: 'earth-week-1',
    type: 'TextBlock',
    text: 'Our team was responsible for the design, concept, and execution of the Earth Week installation. This began with extensive research and development, as we sourced the latest and greatest growing technology.'
  }, {
    id: 'earth-week-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-5.jpg',
    align: 'left',
    text: 'Designed to introduce the concept of urban farming in a palatable and hands-on manner, the installation showcased the simplicity of urban farming by highlighting growing technologies.'
  }, {
    id: 'earth-week-3',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'right',
    text: 'Urban Cultivator - Indoor gardens that grow healthy and organic vegetables, herbs, and microgreens in any kitchen.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-1.jpg'
  }, {
    id: 'earth-week-4',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'left',
    text: 'Language of Plants - Exploring the theme of language as culture through the medium of the black oak savannah ecosystem while discovering a bio-acoustic symphony.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-9.jpg'
  }, {
    id: 'earth-week-5',
    type: 'QuoteBlock',
    text: 'This interactive experience educated me on hydroponic and urban farming methods I can use in my own backyard!',
    by: 'Tenant, Brookfield Properties'
  }, {
    id: 'earth-week-6',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'center',
    text: 'Through the design and construction of the installation, people experienced this technology for themselves, witnessing firsthand how urban gardening could become a reality.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-8.jpg'
  }] //Blocks
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/interactive-art',
    strict: true
  },
  id: 'ep1',
  type: 'experiences',
  name: 'Interactive Art',
  tags: ['Education', 'Community'],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-ed-4.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/art-hero.mp4',
  client: 'Edward Burtynsky, Joshua Jensen Nagle, George Steinmetz, Benjamin Von Wong',
  description: 'Held in typically unused, unique yet convenient spaces, our art projects are attention-grabbing. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience.',
  impact: 'Our installations have connected with over 10,000 young urban professionals daily, resulting in increased foot-traffic, earned media and press, and help fulfill cultural and sustainability initiatives.',
  content: [{
    id: 'interactive-galleries-1',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'From our global network of respected artists, we can transform a blank canvas of a space into an experience that instigates a powerful dialogue.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-strategy.jpg',
    align: 'left'
  }, {
    id: 'interactive-galleries-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'Leave it to us to curate installations – whether clean and simple or infused with technology – that match your objectives, and to craft an experience that will become associated with your brand.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-setup-rendering.jpg',
    align: 'right'
  }, {
    id: 'interactive-galleries-3',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'We took visitors on a self-guided interactive tour that explored the work and world of renowned Canadian artist Ed Burtynsky. To share the works and findings of Manufactured Landscapes – a feature-length documentary on Burtynsky – the tour showcased the photographs of Burtynsky’s 25-year exploration of how industrial activity has created and shaped the landscapes of our world.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-ed-7.jpg',
    align: 'left'
  }, {
    id: 'interactive-galleries-4',
    type: 'QuoteBlock',
    text: 'I wish my artwork could persuade millions of people to join a global conversation about sustainability.',
    by: 'Edward Burtynsky'
  }, {
    id: 'interactive-galleries-5',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'Offering a temporary escape from the daily grind, Toronto-based photographer Joshua Jensen Nagle provided a dose of vacation inspiration with his collection of signature photographs of sun-soaked shorelines.',
    // placeholder url
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-jensen-nagle.jpg',
    align: 'right'
  }, {
    id: 'interactive-galleries-6',
    type: 'CarouselBlock',
    content: [{
      id: 'interactive-galleries-6-1',
      type: 'MediaBlock',
      mediaType: 'Image',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-1.jpg'
    }, {
      id: 'interactive-galleries-6-2',
      type: 'MediaBlock',
      mediaType: 'Image',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-2.jpg'
    }, {
      id: 'interactive-galleries-6-3',
      type: 'MediaBlock',
      mediaType: 'Image',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-3.jpg'
    }]
  }, {
    id: 'interactive-galleries-7',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-vonwong-4.jpg',
    align: 'center',
    text: 'Canadian photographer Benjamin Von Wong turned 10,000 plastic bottles into a visually mind-blowing and informative art experience with #MermaidsHatePlastic. Transforming the lobby of the Bay Adelaide Centre, the exhibition made for a value-added lunch break, as it highlighted the alarming reality of plastic pollution. Accompanying the images was a self-guided tour curated by Usful and available via a mobile app.'
  }, {
    id: 'interactive-galleries-8',
    type: 'QuoteBlock',
    text: 'One of the more interesting things about desert environments is how people and animals can survive in the very limits of existence...',
    by: 'George Steinmetz'
  }, {
    id: 'interactive-galleries-9',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'Visitors were offered a glimpse into some of the world’s most remote environments at Desert Air, a photography exhibition by award-winning National Geographic photographer George Steinmetz.',
    align: 'left',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-steinmetz-1.jpg'
  }, {
    id: 'interactive-galleries-10',
    type: 'MediaBlock',
    mediaType: 'Image',
    text: 'Interactive audio tours are accessible to the public through Usful’s mobile engagement app, Lane.',
    align: 'right',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-interactive-tech.jpg'
  }] //Blocks
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/osheaga-oasis',
    strict: true
  },
  id: 'ep2',
  type: 'experiences',
  name: 'Osheaga Oasis',
  tags: ['Community', 'Tech'],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/osheaga-oasis-3.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/topshop-hero.mp4',
  client: 'TopShop',
  description: 'We were there to make sure [Osheaga](https://www.osheaga.com/en) goers were well aware that the UK’s beloved TopShop was coming to Canada with a “TopShop Urban Oasis” tech installation at the popular Montreal music festival. Offering a place of calm from the festivities, here, guests could rehydrate with water and document their festival experience with branded cameras.  TopShop fans could also deepen their connection with the brand by joining in an interactive experience.',
  impact: 'Not only did TopShop offer an unexpected and well-received experience to the 50,000 festival goers, the tech installation resulted in over 10,000 sign-ups.\n',
  content: [] //Blocks
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/6ix-cycle',
    strict: true
  },
  id: 'ep5',
  type: 'experiences',
  name: '6IX Cycle',
  tags: ['Health', 'Education'],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-2.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-hero.mp4',
  client: 'Multiple',
  description: 'To highlight the benefits of wellness in the workplace, we turned a section of downtown Toronto into a high-energy outdoor spin studio.',
  impact: '100% participation by registered attendees with 4000 impressions on event registration. This success has resulted in quarterly programming and classes pre-booked in advance.',
  content: [{
    id: 'six-cycle-1',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'left',
    text: 'Held in collaboration with a corporate health and wellness program, the outdoor spin cycling event offered two classes per day for two days. It involved a virtual reality (VR) component that allowed participants to experience a virtual cycle race before debriefing over local and healthy refreshments.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-2.jpg'
  }, {
    id: 'six-cycle-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'right',
    text: 'From conception to tear-down, our team designed a sleek outdoor spin studio with spin bikes, music, and refreshments.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-rendering.jpg'
  }, {
    id: 'six-cycle-3',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'left',
    text: 'Necessary equipment and change rooms were provided to all participants.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-5.jpg'
  }, {
    id: 'six-cycle-5',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'right',
    text: 'Refreshments provided on site by local vendors.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-8.jpg'
  }, {
    id: 'six-cycle-4',
    type: 'QuoteBlock',
    text: 'A perfect break in my day to re-energize and refuel.',
    by: '6ix Cycle Participant'
  }, {
    id: 'six-cycle-6',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'center',
    text: 'To offer a layered experience, we sourced top-of-the-line VR technology and administered the experience for the audience. We engaged with participants through a mobile app for signups and check-ins to the event.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/6ix-cycle-4.jpg'
  }] //Blocks
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/terroni',
    strict: true
  },
  id: 'ep8',
  type: 'experiences',
  name: 'Terroni',
  tags: ['Tech', 'Community'],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/terroni-hero.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/terroni-hero.mp4',
  client: 'Terroni Restaurants',
  description: 'We redesigned and developed a new web experience for longtime favourite Toronto and Los Angeles Italian restaurant, [Terroni](http://www.terroni.com/). With a mission to offer a clean, easy, and family-friendly experience, our team devised the digital strategy, and built the entire online presence for Terroni’s family of restaurants.',
  impact: 'The new web experience resulted in increasing Terroni’s visitors from the 10,000s per month, up into the 1,000,000s per month.',
  content: [{
    id: 'terroni-1',
    type: 'MediaBlock',
    align: 'center',
    mediaType: 'Video',
    text: 'We took the original design and aesthetic of the brand and translated it to a visually pleasing online and digital experience filled with crisp, colourful, and delicious-looking photos.',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/terroni-1.mp4',
    width: 90
  }, {
    id: 'terroni-2',
    type: 'MediaBlock',
    align: 'center',
    mediaType: 'Video',
    text: 'The digital experience improves the customer journey while telling the story of the beloved brand while combining all business facets into one seamless experience.',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/terroni-2.mp4',
    width: 90
  }] //Blocks
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  component: null,
  active: false,
  id: 'h1',
  name: 'Home',
  route: {
    path: '/',
    exact: true,
    strict: false
  },
  projects: [],
  inMenu: false
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/market',
    exact: true
  },
  projects: [],
  id: 'a2',
  inMenu: true,
  name: 'Market',
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/brenda-godinez-228181.jpg'
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/market/clients',
    exact: true
  },
  projects: [],
  content: [{
    id: 'mb1',
    type: 'CarouselBlock',
    animation: 'fade',
    content: [{
      id: 'bc1',
      type: 'MediaBlock',
      text: 'A unique, immersive, food-filled turnkey experience.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-pasta.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc3',
      type: 'MediaBlock',
      text: 'Highly configurable and customizable for  any location or event.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-people.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc2',
      type: 'MediaBlock',
      text: 'The best vendors and products the city has to offer.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-sign.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc4',
      type: 'MediaBlock',
      text: 'We bring everything you need to host a market in any space.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-bees.mp4',
      mediaType: 'Video',
      width: 100
    }]
  }],
  id: 'ms1',
  inMenu: false,
  name: 'Market Clients'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/market/partners',
    exact: true
  },
  projects: [],
  content: [{
    id: 'mb1',
    type: 'CarouselBlock',
    animation: 'fade',
    content: [{
      id: 'bc1',
      type: 'MediaBlock',
      text: 'Turn-key vending with access to the best customers.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-stall.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc8',
      type: 'MediaBlock',
      text: 'Join our collective of the best vendors.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-sammiches.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc9',
      type: 'MediaBlock',
      text: 'Different locations, seasons and themes to participate in.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-people.mp4',
      mediaType: 'Video',
      width: 100
    }, {
      id: 'bc10',
      type: 'MediaBlock',
      text: 'Join our market, contact us today!',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-tomato.mp4',
      mediaType: 'Video',
      width: 100
    }]
  }],
  id: 'a2',
  inMenu: false,
  name: 'Market Partners'
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _projects = __webpack_require__(23);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  component: null,
  active: false,
  route: {
    path: '/technology',
    strict: true
  },
  inMenu: true,
  id: 'a3',
  name: 'Technology',
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-3.jpg',
  projects: _projects2.default
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cfd = __webpack_require__(24);

var _cfd2 = _interopRequireDefault(_cfd);

var _lane = __webpack_require__(25);

var _lane2 = _interopRequireDefault(_lane);

var _vini = __webpack_require__(26);

var _vini2 = _interopRequireDefault(_vini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_lane2.default, _vini2.default, _cfd2.default];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/technology/change-for-a-dollar',
    strict: true
  },
  id: 'tp5',
  type: 'technology',
  name: 'Change for a Dollar',
  tags: [],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/technology/change-for-a-dollar-hero.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/cfd-hero.mp4',
  industry: 'Charity, Fundraising',
  tagLine: 'Automated Cashless Giving',
  description: 'Created end-to-end by Usful, the Change for a Dollar mobile and web platform infuses innovation into the concept of charitable giving; it rounds up every purchase made to the nearest dollar and donates the change to the user’s choice of charity.',
  impact: 'Having won a placement at a product innovation event, and secured $5,000,000 in donated hours Change for a Dollar is currently raising a seed round for investment.',
  content: [] //Blocks
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/technology/lane',
    strict: true
  },
  id: 'tp3',
  type: 'technology',
  name: 'Lane',
  tags: [],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-hero.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-hero.mp4',
  industry: 'Commercial Real Estate, SaaS',
  tagLine: 'The first tenant engagement solution for commercial real estate.',
  description: '[Lane](https://www.joinlane.com) brings modern SaaS & Mobile technology to an industry ready for disruption, becoming the central operating system for office buildings and connecting tenants with services and amenities.',
  impact: 'Since the nationwide launch in 2016, the [Lane](https://www.joinlane.com) platform engages 60,000 tenants daily, and is used by companies with portfolios of over 200MM SqFt.',
  content: [{
    id: 'lane-1',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'right',
    text: 'Commercial Real Estate is one of the biggest asset classes in the world, but one that’s had little disruption.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-1.jpg'
  }, {
    id: 'lane-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'left',
    text: 'Noticing a growing need for active tenant engagement in the industry, and a clear void of technology solutions, we created Lane, the first fully featured tenant engagement solution for CRE.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-3.jpg'
  }, {
    id: 'lane-3',
    type: 'MediaBlock',
    mediaType: 'Video',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-web.mp4',
    width: 90,
    text: 'Thanks to training and support from the Lane team, property management companies now have an efficient and modern way to communicate with their tenants, increase engagement, and reduce tenant turnover.'
  }, {
    id: 'lane-4',
    type: 'MediaBlock',
    mediaType: 'Video',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-mobile.mp4',
    width: 67,
    text: 'The mobile app brings modern SaaS & mobile technology to properties becoming the central operating system for connecting tenants with building services and amenities.',
    align: 'left'
  }] //Blocks
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  component: null,
  active: false,
  route: {
    path: '/technology/vini',
    strict: true
  },
  id: 'tp4',
  type: 'technology',
  name: 'VINI',
  tags: [],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/technology/vini-hero.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/vini-hero.mp4',
  industry: 'Ecommerce, Luxury Goods, SaaS',
  tagLine: 'Buy wine easy. The best and hard to find wines delivered to your door.',
  description: '[VINI](http://www.vini.co) is a full featured SaaS e-commerce platform for merchants to offer hard to find wines, and a web and mobile app for wine aficionados to get them delivered.',
  impact: '[VINI](http://www.vini.co) was able to successfully raise $500,000 in seed funding based on the product Usful created with them.',
  content: [{
    id: 'vini-1',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'right',
    text: 'With a mission to eliminate the red tape when it comes to bringing the best and most difficult-to-find wine to your doorstep, Usful helped create VINI.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/vini-1.jpg'
  }, {
    id: 'vini-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    align: 'left',
    text: 'Disrupting the traditional wine industry, the Usful team was responsible for everything from the market research and product design, to product development and funding.',
    url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/vini-2.jpg'
  }, {
    id: 'vini-3',
    type: 'MediaBlock',
    mediaType: 'Video',
    url: 'https://s3.amazonaws.com/usful-portfolio/vids/vini-mobile.mp4',
    width: 33
  }, {
    id: 'vini-4',
    type: 'TextBlock',
    text: 'The result was a full featured SaaS e-commerce platform for merchants to offer hard to find wines, and a web and mobile app for wine aficionados to get them delivered.'
  }] //Blocks
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

var _Menu = __webpack_require__(49);

var _Menu2 = _interopRequireDefault(_Menu);

var _Section = __webpack_require__(50);

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('App', {
  isSetup: Boolean,
  sections: [_Section2.default],
  menu: [_Menu2.default]
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _TypedArray = __webpack_require__(29);

var _TypedArray2 = _interopRequireDefault(_TypedArray);

var _middleware = __webpack_require__(34);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var primitives = [String, Number, Boolean, Array, Date];

function Models(_ref) {
  var _ref$middleware = _ref.middleware,
      middleware = _ref$middleware === undefined ? [] : _ref$middleware,
      _ref$changeThrottle = _ref.changeThrottle,
      changeThrottle = _ref$changeThrottle === undefined ? 1 : _ref$changeThrottle;

  var definitions = {};

  function createModel(properties) {
    function model(data) {
      var _this = this;

      if (this.constructor !== model) {
        throw new Error('Must be invoked with new.');
      }

      this.__data = {};
      this.__parent = null;
      this.__parentKey = null;

      //Call any middleware initializers, if they exist.
      this.constructor.middleware.forEach(function (fn) {
        return fn.initialize ? fn.initialize.call(_this, data) : null;
      });

      if (data) {
        Object.keys(data).forEach(function (key) {
          if (data.hasOwnProperty(key)) {
            _this[key] = data[key];
          }
        });

        //Flush the data.
        if (this.__flush()) {
          this.__flush();
        }
      }

      return this;
    }

    model.changeThrottle = changeThrottle;

    //Store the model definition for later.
    model.def = {
      props: []
    };

    //Process all the properties sent in.
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var key = _step.value;

        if (!properties.hasOwnProperty(key)) {
          return 'continue';
        }

        var property = properties[key];
        var descriptor = Object.getOwnPropertyDescriptor(properties, key);

        //Property can be a getter/setter, a function, a simple definition,
        //a Model, a user defined Type, or a complex definition (wrapped in an object)

        //This is a getter or setter passed in.
        if (descriptor.get || descriptor.set) {
          Object.defineProperty(model.prototype, key, {
            get: descriptor.get,
            set: descriptor.set
          });
          return 'continue';
        }

        var prop = {
          key: key
        };

        //Unpack array types. ie. names: [String]
        if (Array.isArray(descriptor.value)) {
          prop.type = descriptor.value[0];
          prop.isArray = true;
        }

        if (_typeof(descriptor.value) === 'object' && descriptor.value.type) {
          //This is a complex type definition being passed in.
          prop = _extends({
            key: key
          }, property);
        } else if (typeof descriptor.value === 'string') {
          //This is a lazy reference to another model being passed in.  Will be dealt with later.
          prop.type = descriptor.value;
        } else if (primitives.includes(descriptor.value)) {
          //This is a primitive type, defined simply.
          prop.type = descriptor.value;
        } else if (typeof descriptor.value === 'function' && descriptor.value.isModel) {
          //This is a model definition that was passed in.
          prop.type = descriptor.value;
        } else if (typeof descriptor.value === 'function') {
          //Some other kind of function passed in.
          model.prototype[key] = descriptor.value;
          return 'continue';
        }

        //Setup the getters and setter for this guy.
        Object.defineProperty(model.prototype, prop.key, {
          get: function get() {
            return this.__data[prop.key];
          },
          set: function set(val) {
            if (prop.type === Date && val) {
              //TODO: dates could have some more weirdness.
              val = new Date(val);
            } else if (prop.type.isModel || prop.isArray) {

              // If this type is a model (deep object) or an array, we need to be able to propagate changes later.
              //We also need to clear parent values from the old values if they exist for garbage collection.
              if (this.__data[prop.key]) {
                //TODO: what about arrays with parentKeys? Do we need to clear all of them, then reset again?
                this.__data[prop.key].__parent = null;
                this.__data[prop.key].__parentKey = null;
              }

              if (val !== null && val !== undefined) {
                if (prop.isArray && !val.isTypedArray) {
                  //This prop type is an array, and you are not setting a TypedArray, we will cast it for you.
                  val = new _TypedArray2.default(val, prop.type);
                } else if (prop.isArray && val.isTypedArray) {
                  //Clone it, because this is coming from another object?
                  val = new _TypedArray2.default(val.toJSON(), prop.type);
                } else if (prop.type.isModel && val.constructor !== prop.type) {
                  //This value is a model, but it has not been created as a model yet.
                  val = new prop.type(val);
                } else if (prop.type.isModel && val.constructor === prop.type.model) {
                  //This value is a model, and it is coming from another object? Clone it.
                  val = new prop.type(val.toJSON());
                }

                val.__parent = this;
                val.__parentKey = prop.key;
              }
            }

            this.__data[prop.key] = val;

            if (prop.listen !== false) {
              this.__changed(prop.key);
            }
          },
          configurable: false,
          enumerable: true
        });

        model.def.props.push(prop);
      };

      for (var _iterator = Object.keys(properties)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    model.prototype.__changed = function (key) {
      if (this.__parent) {
        this.__parent.__changed(this.__parentKey);
      }
    };

    model.isModel = true;

    return model;
  }

  return new (function () {
    function Models() {
      _classCallCheck(this, Models);
    }

    _createClass(Models, [{
      key: 'create',
      value: function create(name, properties) {
        var model = createModel(properties);

        //Call all the middle wares for this model in order.
        middleware.forEach(function (fn) {
          return fn(model);
        });

        model.model = name;
        model.middleware = middleware;
        definitions[name] = model;

        //TODO: probably a better way to do this than iterate over all after each model is added.
        //Attached references by name (string passed in as prop type).
        for (var modelName in definitions) {
          var modelDefinition = definitions[modelName];

          modelDefinition.def.props.filter(function (prop) {
            return typeof prop.type === 'string';
          }).forEach(function (prop) {
            if (definitions[prop.type]) {
              prop.type = definitions[prop.type];
            }
          });
        }

        return model;
      }
    }, {
      key: 'addMiddleware',
      value: function addMiddleware(mw) {
        for (var definition in definitions) {
          mw(definitions[definition]);
        }

        middleware.push(mw);
      }
    }, {
      key: 'definitions',
      get: function get() {
        return definitions;
      }
    }, {
      key: 'middleware',
      get: function get() {
        return middleware;
      }
    }, {
      key: 'Middleware',
      get: function get() {
        return _middleware2.default;
      }
    }, {
      key: 'changeThrottle',
      get: function get() {
        return changeThrottle;
      }
    }]);

    return Models;
  }())();
}

Models.middleware = _middleware2.default;
Models.TypedArray = _TypedArray2.default;

exports.default = Models;

/**
 const Template = new Models.Document('Template', {name: String});
 const template = new Template({name: 'Test'});
 
 template.validate();
 template.addListener('changed', (data) => console.log(data));
 */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fbemitter = __webpack_require__(1);

var _fbemitter2 = _interopRequireDefault(_fbemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = _fbemitter2.default.EventEmitter;


var ARRAY_FUNCTIONS = ['sort', 'filter', 'join', 'reverse', 'slice', 'concat'];

var FUNCTIONS = ['forEach', 'includes', 'reduce', 'map', 'find', 'findIndex', 'some', 'indexOf'];

var TypedArrayIterator = function () {
  _createClass(TypedArrayIterator, null, [{
    key: 'isTypedArray',
    value: function isTypedArray(obj) {
      return !obj ? false : this === obj.constructor;
    }
  }, {
    key: 'isArray',
    value: function isArray(obj) {
      return Array.isArray(obj);
    }
  }]);

  function TypedArrayIterator(array) {
    _classCallCheck(this, TypedArrayIterator);

    this.i = 0;
    this.array = array;
  }

  _createClass(TypedArrayIterator, [{
    key: 'next',
    value: function next() {
      if (this.i >= this.array.length) {
        this.i = 0;
        return { done: true };
      }

      return { done: false, value: this.array[this.i++] };
    }
  }]);

  return TypedArrayIterator;
}();

var TypedArray = function () {
  function TypedArray(items, type) {
    var _this = this;

    _classCallCheck(this, TypedArray);

    this.__array = Array.isArray(items) ? [].concat(items) : [items];
    this.__parent = null;
    this.__parentKey = null;
    this.type = type;

    for (var i = 0; i < this.__array.length; i++) {
      this.defineIndexProperty(i);
    }

    //Cast any children.
    if (this.isModel) {

      this.__array = this.__array.map(function (item) {
        return !item || item.constructor === _this.type ? item : new _this.type(item);
      });
    }

    //Set any initial children.
    this.setParents();

    this.__json = this._toJSON();
  }

  _createClass(TypedArray, [{
    key: 'defineIndexProperty',
    value: function defineIndexProperty(index) {
      if (!(index in this)) {
        Object.defineProperty(this, index, {
          configurable: true,
          enumerable: true,
          get: function get() {
            return this.__array[index];
          },
          set: function set(val) {
            if (this.type.isModel) {
              //Clear out references for garbage collection
              if (this.__array[index]) {
                this.__array[index].__parent = null;
                this.__array[index].__parentKey = null;
              }

              if (val) {
                val.__parent = this;
                val.__parentKey = index;
              }
            }

            this.__array[index] = val;
            this.__changed(index);
          }
        });
      }
    }
  }, {
    key: 'setParents',
    value: function setParents() {
      if (this.isModel) {
        for (var i = 0; i < this.__array.length; i++) {
          if (this.__array[i]) {
            this.__array[i].__parent = this;
            this.__array[i].__parentKey = i;
          }
        }
      }
    }
  }, {
    key: 'clearParents',
    value: function clearParents() {
      if (this.isModel) {
        for (var i = 0; i < this.__array.length; i++) {
          if (this.__array[i]) {
            this.__array[i].__parent = null;
            this.__array[i].__parentKey = null;
          }
        }
      }
    }
  }, {
    key: '__changed',
    value: function __changed(index) {
      this.__json = this._toJSON();

      this.emit('change', index);

      if (this.__parent) {
        this.__parent.__changed(this.__parentKey);
      }
    }

    /**
     * Iterator implementation.
     * @returns {*}
     */

  }, {
    key: Symbol.iterator,
    value: function value() {
      return new TypedArrayIterator(this);
    }
  }, {
    key: 'push',
    value: function push(item) {
      this.__array.push(item);
      this.defineIndexProperty(this.length - 1);
      this.setParents();
      this.__changed(this.length - 1);
    }
  }, {
    key: 'pop',
    value: function pop() {
      var item = this.__array.pop();

      if (this.isModel && item) {
        item.__parent = null;
        item.__parentKey = null;
      }

      this.setParents();
      this.__changed(this.length);
      return item;
    }
  }, {
    key: 'unshift',
    value: function unshift() {
      var count = this.__array.unshift.apply(this.__array, arguments);

      for (var i = 0; i < count; i++) {
        this.defineIndexProperty(this.length + i);
      }

      this.setParents();
      this.__changed(0);

      return count;
    }
  }, {
    key: 'shift',
    value: function shift() {
      var item = this.__array.shift();

      if (this.isModel && item) {
        item.__parent = null;
        item.__parentKey = null;
      }

      this.setParents();
      this.__changed(0);
      return item;
    }
  }, {
    key: 'splice',
    value: function splice() {
      var _this2 = this;

      // arguments[0] is the start index
      // arguments[1] is the deleteCount
      // arguments[n] for n>1 are items to splice
      var removed = this.__array.splice.apply(this.__array, arguments);

      removed.forEach(function (item) {
        if (_this2.isModel && item) {
          item.__parent = null;
          _this2.__parentKey = null;
        }
      });

      var lengthDelta = -removed.length;
      // splice uses flat parameters to add, not an array
      // need to grab all arguments for n>1
      var toAdd = Array.prototype.slice.call(arguments, 2); // produces an array

      if (toAdd) {
        lengthDelta += toAdd.length;
      }

      if (lengthDelta > 0) {
        for (var i = 0; i < lengthDelta; i++) {
          this.defineIndexProperty(this.length - 1 - i);
        }
      }

      this.setParents();

      this.__changed(this.length);
      return removed;
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.__json;
    }
  }, {
    key: '_toJSON',
    value: function _toJSON() {
      if (this.isModel) {
        this.__json = this.__array.map(function (item) {
          return item ? item.toJSON() : item;
        });
        return this.__json;
      }

      this.__json = [].concat(this.__array);
      return this.__json;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.__json;
    }

    /**
     * Returns an new plain Array with the contents that were in this TypedArray instance.
     *
     * @returns {array}
     */

  }, {
    key: 'toArray',
    value: function toArray() {
      return [].concat(this.__array);
    }
  }, {
    key: '_initEmitter',
    value: function _initEmitter() {
      if (!this._emitter) {
        this._emitter = new EventEmitter();
      }
    }
  }, {
    key: 'listeners',
    value: function listeners() {
      this._initEmitter();
      return this._emitter.listeners.apply(this._emitter, arguments);
    }
  }, {
    key: 'emit',
    value: function emit() {
      if (!this._emitter) {
        return;
      }

      return this._emitter.emit.apply(this._emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      this._initEmitter();
      return this._emitter.once.apply(this._emitter, arguments);
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      if (!this._emitter) {
        return;
      }

      return this._emitter.removeAllListeners.apply(this._emitter, arguments);
    }
  }, {
    key: 'addListener',
    value: function addListener() {
      this._initEmitter();
      return this._emitter.addListener.apply(this._emitter, arguments);
    }
  }, {
    key: 'isModel',
    get: function get() {
      return this.type && this.type.isModel;
    }
  }, {
    key: 'length',
    get: function get() {
      return this.__array.length;
    }
  }, {
    key: 'isTypedArray',
    get: function get() {
      return true;
    }
  }]);

  return TypedArray;
}();

exports.default = TypedArray;


ARRAY_FUNCTIONS.forEach(function (f) {
  return TypedArray.prototype[f] = function () {
    var newArr = new TypedArray(this.__array[f].apply(this.__array, arguments), this.type);

    newArr.__parent = this.__parent;
    newArr.__parentKey = this.__parentKey;

    return newArr;
  };
});

FUNCTIONS.forEach(function (f) {
  return TypedArray.prototype[f] = function () {
    return this.__array[f].apply(this.__array, arguments);
  };
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BaseEventEmitter
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EmitterSubscription = __webpack_require__(2);
var EventSubscriptionVendor = __webpack_require__(32);

var emptyFunction = __webpack_require__(33);
var invariant = __webpack_require__(3);

/**
 * @class BaseEventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. In addition to the
 * data for the given event it also sends a event control object which allows
 * the listeners/handlers to prevent the default behavior of the given event.
 *
 * The emitter is designed to be generic enough to support all the different
 * contexts in which one might want to emit events. It is a simple multicast
 * mechanism on top of which extra functionality can be composed. For example, a
 * more advanced emitter may use an EventHolder and EventFactory.
 */

var BaseEventEmitter = (function () {
  /**
   * @constructor
   */

  function BaseEventEmitter() {
    _classCallCheck(this, BaseEventEmitter);

    this._subscriber = new EventSubscriptionVendor();
    this._currentSubscription = null;
  }

  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
  };

  /**
   * Similar to addListener, except that the listener is removed after it is
   * invoked once.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke only once when the
   *   specified event is emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */

  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
    var emitter = this;
    return this.addListener(eventType, function () {
      emitter.removeCurrentListener();
      listener.apply(context, arguments);
    });
  };

  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */

  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  };

  /**
   * Provides an API that can be called during an eventing cycle to remove the
   * last listener that was invoked. This allows a developer to provide an event
   * object that can remove the listener (or listener map) during the
   * invocation.
   *
   * If it is called when not inside of an emitting cycle it will throw.
   *
   * @throws {Error} When called not during an eventing cycle
   *
   * @example
   *   var subscription = emitter.addListenerMap({
   *     someEvent: function(data, event) {
   *       console.log(data);
   *       emitter.removeCurrentListener();
   *     }
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   *   emitter.emit('someEvent', 'def'); // does not log anything
   */

  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
    this._subscriber.removeSubscription(this._currentSubscription);
  };

  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @return {array}
   */

  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
      return subscription.listener;
    }) : [];
  };

  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */

  BaseEventEmitter.prototype.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      var keys = Object.keys(subscriptions);
      for (var ii = 0; ii < keys.length; ii++) {
        var key = keys[ii];
        var subscription = subscriptions[key];
        // The subscription may have been removed during this event loop.
        if (subscription) {
          this._currentSubscription = subscription;
          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
        }
      }
      this._currentSubscription = null;
    }
  };

  /**
   * Provides a hook to override how the emitter emits an event to a specific
   * subscription. This allows you to set up logging and error boundaries
   * specific to your environment.
   *
   * @param {EmitterSubscription} subscription
   * @param {string} eventType
   * @param {*} Arbitrary arguments to be passed to each registered listener
   */

  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
    var args = Array.prototype.slice.call(arguments, 2);
    subscription.listener.apply(subscription.context, args);
  };

  return BaseEventEmitter;
})();

module.exports = BaseEventEmitter;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventSubscription
 * @typechecks
 */



/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventSubscription = (function () {

  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */

  function EventSubscription(subscriber) {
    _classCallCheck(this, EventSubscription);

    this.subscriber = subscriber;
  }

  /**
   * Removes this subscription from the subscriber that controls it.
   */

  EventSubscription.prototype.remove = function remove() {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  };

  return EventSubscription;
})();

module.exports = EventSubscription;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * 
 * @providesModule EventSubscriptionVendor
 * @typechecks
 */



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(3);

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */

var EventSubscriptionVendor = (function () {
  function EventSubscriptionVendor() {
    _classCallCheck(this, EventSubscriptionVendor);

    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  /**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */

  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }
    var key = this._subscriptionsForType[eventType].length;
    this._subscriptionsForType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  };

  /**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */

  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
    if (eventType === undefined) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  };

  /**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */

  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;

    var subscriptionsForType = this._subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  };

  /**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @return {?array}
   */

  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  };

  return EventSubscriptionVendor;
})();

module.exports = EventSubscriptionVendor;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _validation = __webpack_require__(35);

var _validation2 = _interopRequireDefault(_validation);

var _immutable = __webpack_require__(48);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  events: _events2.default,
  validation: _validation2.default,
  immutable: _immutable2.default
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Validation = __webpack_require__(36);

var _Validation2 = _interopRequireDefault(_Validation);

var _ValidationError = __webpack_require__(47);

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ValidationMiddleware(model) {
  model.prototype.validate = function () {
    var _this = this;

    var result = {};
    var props = this.constructor.def.props.filter(function (prop) {
      return prop.validators && prop.validators.length > 0;
    });

    var valid = true;

    props.forEach(function (prop) {
      //Required is a special validator, so we will check to see if its in the list.
      var isRequired = prop.validators.some(function (validator) {
        return validator === _Validation2.default.required;
      });

      var hasValue = _Validation2.default.required.validate.call(_this, _this.__data[prop.key]);

      if (isRequired && !hasValue) {
        valid = false;
        result[prop.key] = false;
        //If required validation failed, no need to continue.
        return;
      } else if (!isRequired && !hasValue) {
        //If something is not required, and it has no value, it is technically valid.
        result[prop.key] = true;
        return;
      }

      prop.validators.forEach(function (validator) {
        if (validator === _Validation2.default.required) {
          return;
        }

        result[prop.key] = validator.call(_this, _this.__data[prop.key]);

        if (!result[prop.key]) {
          valid = false;
        }
      });
    });

    if (!valid) {
      throw new _ValidationError2.default(result);
    }

    return true;
  };
}

ValidationMiddleware.validators = _Validation2.default;
ValidationMiddleware.ValidationError = _ValidationError2.default;

exports.default = ValidationMiddleware;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RegexValidator = __webpack_require__(37);

var _RegexValidator2 = _interopRequireDefault(_RegexValidator);

var _MaxLengthValidator = __webpack_require__(38);

var _MaxLengthValidator2 = _interopRequireDefault(_MaxLengthValidator);

var _MinLengthValidator = __webpack_require__(39);

var _MinLengthValidator2 = _interopRequireDefault(_MinLengthValidator);

var _MatchValidator = __webpack_require__(40);

var _MatchValidator2 = _interopRequireDefault(_MatchValidator);

var _InValidator = __webpack_require__(41);

var _InValidator2 = _interopRequireDefault(_InValidator);

var _MaxValidator = __webpack_require__(42);

var _MaxValidator2 = _interopRequireDefault(_MaxValidator);

var _MinValidator = __webpack_require__(43);

var _MinValidator2 = _interopRequireDefault(_MinValidator);

var _integer = __webpack_require__(44);

var _integer2 = _interopRequireDefault(_integer);

var _required = __webpack_require__(45);

var _required2 = _interopRequireDefault(_required);

var _empty = __webpack_require__(46);

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Regex: _RegexValidator2.default,
  MaxLength: _MaxLengthValidator2.default,
  MinLength: _MinLengthValidator2.default,
  Match: _MatchValidator2.default,
  In: _InValidator2.default,
  Max: _MaxValidator2.default,
  Min: _MinValidator2.default,
  integer: _integer2.default,
  required: _required2.default,
  empty: _empty2.default
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A regex validator object that encapsulates a validation function and a message to be displayed on validation failure
 *  If you have a very specific use case, with a static regex pattern, consider creating your own validator type
 *  to take advantage of the gains by using regex literals
 * @param {string} [pattern=null] Regex pattern to test
 * @param {string} [flags=''] Flags to apply to regex test pattern,
 * @param {string} [message='Value does not match expected pattern'] Message associated with failure of validation
 * @returns {{validate: validate, message: string}}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pattern) {
  var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Value does not match expected pattern';


  var regex = pattern.constructor !== RegExp ? new RegExp(pattern, flags) : pattern;

  return {
    validate: function validate(value) {
      return value && regex.test(value);
    },
    message: message,
    name: 'RegexValidator'
  };
};

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (maxLength) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (typeof maxLength !== 'number') {
    throw new Error('maxLength must be provided and must be a number');
  }

  message = message || 'Value length can be at most ' + maxLength;

  return {
    validate: function validate(value) {
      return value && value.length <= maxLength;
    },
    message: message,
    name: 'MaxLengthValidator',
    args: 'maxLength',
    maxLength: maxLength
  };
};

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (minLength) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (typeof minLength !== 'number') {
    throw new Error('minLength must be provided and must be a number');
  }

  message = message || 'Value length must be at least ' + minLength;

  return {
    validate: function validate(value) {
      return value && value.length >= minLength;
    },
    message: message,
    name: 'MinLengthValidator',
    args: ['minLength'],
    minLength: minLength
  };
};

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (field) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Values do not match';


  return {
    validate: function validate(value) {
      return this[field] === value;
    },
    message: message,
    name: 'MatchValidator'
  };
};

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inValidator;
function inValidator(values, message) {
  if (!Array.isArray(values)) {
    throw new Error('An array of values must be provided to the InValidator.');
  }

  message = message || 'Value must be one of ' + values.join(',');

  return {
    validate: function validate(value) {
      return values.includes(value);
    },
    message: message,
    name: 'InValidator',
    args: ['values'],
    values: values
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaxValidator;
function MaxValidator(max, message) {
  if (typeof max !== 'number') {
    throw new Error('max must be provided and must be a number.');
  }

  message = message || 'Value must be max ' + max;

  return {
    validate: function validate(value) {
      return value <= max;
    },
    message: message,
    name: 'MaxValidator',
    args: ['max'],
    max: max
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MinValidator;
function MinValidator(min, message) {
  if (typeof min !== 'number') {
    throw new Error('min must be provided and must be a number.');
  }

  message = message || 'Value must be min ' + min;

  return {
    validate: function validate(value) {
      return value >= min;
    },
    message: message,
    name: MinValidator,
    args: ['min'],
    min: min
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  validate: function validate(n) {
    return n === +n && n === (n | 0);
  },
  message: 'You have to enter a whole number value.',
  name: 'integer'
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  validate: function validate(value) {
    return value !== null && value !== undefined;
  },
  message: 'This field is required.',
  name: 'required'
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  validate: function validate(value) {
    return !Boolean(value);
  },
  message: 'This field must be empty.',
  name: 'empty'
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function ValidationError(result) {
  this.name = 'ValidationError';
  this.message = 'Validation Failed';
  this.validation = result;
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

exports.default = ValidationError;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function immutableMiddleware(model) {
  model.prototype.valueOf = function () {
    return this.__json;
  };

  model.prototype.toJSON = function () {
    return this.__json;
  };

  model.prototype.__changed2 = model.prototype.__changed;

  model.prototype.__flush = function () {
    var data = _extends({}, this.__data);

    this.constructor.def.props.filter(function (prop) {
      return !prop.virtual && (prop.type.isModel || prop.isArray);
    }).forEach(function (prop) {
      return data[prop.key] = data[prop.key] ? data[prop.key].toJSON() : data[prop.key];
    });

    this.__json = data;
    this.__dirty = false;

    if (this.constructor.middleware.includes(_events2.default)) {
      this.emit('change', data);
    }
  };

  model.prototype.__changed = function (key) {
    var _this = this;

    if (!this.__dirty) {
      this.__dirty = setTimeout(function () {
        return _this.__flush();
      }, this.constructor.changeThrottle);
    }

    if (this.constructor.middleware.includes(_events2.default)) {
      this.emit(key + 'Changed');
    }

    this.__changed2(key);
  };
}

immutableMiddleware.initialize = function (data) {
  this.__json = {};
  this.__dirty = false;
};

exports.default = immutableMiddleware;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('Menu', {
  showing: Boolean,
  active: Boolean,
  leaving: Boolean,
  id: String,
  hash: String,
  name: String
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

var _Route = __webpack_require__(5);

var _Route2 = _interopRequireDefault(_Route);

var _Project = __webpack_require__(51);

var _Project2 = _interopRequireDefault(_Project);

var _Block = __webpack_require__(6);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('Section', {
  component: {
    type: Object,
    listen: false
  },
  active: Boolean,
  id: String,
  name: String,
  inMenu: Boolean,
  route: _Route2.default,
  projects: [_Project2.default],
  content: [_Block2.default]
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Models = __webpack_require__(0);

var _Models2 = _interopRequireDefault(_Models);

var _Route = __webpack_require__(5);

var _Route2 = _interopRequireDefault(_Route);

var _Block = __webpack_require__(6);

var _Block2 = _interopRequireDefault(_Block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Models2.default.create('Project', {
  component: Object,
  active: Boolean,
  route: _Route2.default,
  id: String,
  type: String,
  name: String,
  tags: [String],
  hero: String,
  heroVideo: String,
  client: String,
  industry: String,
  description: String,
  impact: String,
  content: [_Block2.default]
});

/***/ })
/******/ ]);