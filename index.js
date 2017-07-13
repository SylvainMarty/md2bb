(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("marked"));
	else if(typeof define === 'function' && define.amd)
		define(["marked"], factory);
	else if(typeof exports === 'object')
		exports["md2steam-bbcode"] = factory(require("marked"));
	else
		root["md2steam-bbcode"] = factory(root["marked"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _marked = __webpack_require__(1);

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = new _marked2.default.Renderer();

// Heading
renderer.heading = function (string, level) {
  if (level > 2) {
    return '\n[h1]' + string + '[/h1]\n';
  }
  return '\n[h1][b]' + string + '[/b][/h1]\n';
};

// Italic
renderer.em = function (string) {
  return '[i]' + string + '[/i]';
};

// Strong
renderer.strong = function (string) {
  return '[b]' + string + '[/b]';
};

// Strike
renderer.del = function (string) {
  return '[strike]' + string + '[/strike]';
};

// Paragraph
renderer.paragraph = function (text) {
  return '\n' + text + '\n';
};

renderer.br = function () {
  return '\n';
};

// Url
renderer.link = function (href, title, text) {
  return '[url=' + href + ']' + text + '[/url]';
};

// List or Olist
renderer.list = function (body, ordered) {
  if (ordered) {
    return '[olist]\n' + body + '[/olist]\n';
  }
  return '[list]\n' + body + '[/list]\n';
};

// List item
renderer.listitem = function (string) {
  return '[*]' + string + '\n';
};

// Quote
renderer.blockquote = function (text) {
  var reg = /^\[(.*?)\]/;
  if (reg.test(text)) {
    // Contain author
    return '[quote=' + RegExp.$1 + ']' + text.replace(reg, '') + '[/quote]\n';
  }
  return '[quote]' + text + '[/quote]\n';
};

// Code
renderer.code = function (string) {
  return '[code]\n' + string + '\n[/code]\n';
};

renderer.codespan = function (string) {
  return '[b][i]' + string + '[/i][/b]';
};

renderer.image = function (href) {
  return '[img]' + href + '[/img]';
};

module.exports = function (text) {
  return (0, _marked2.default)(text, { renderer: renderer, smartypants: false });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});