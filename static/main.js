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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar something = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"fuck\");\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function something() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/extract-text-webpack-plugin/dist/loader.js):\\nTypeError: text.forEach is not a function\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\extract-text-webpack-plugin\\\\dist\\\\loader.js:145:16\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:343:11\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:22:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:678:31\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1423:35\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1414:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1409:36\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1405:32\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:4:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at Compilation.seal (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1342:27)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:675:18\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1261:4\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at AsyncSeriesHook.lazyCompileHook (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at Compilation.finish (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1253:28)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:672:17\\n    at eval (eval at create (C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:9:1)\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1185:12\\n    at C:\\\\Users\\\\DELL\\\\Desktop\\\\dongtube\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1097:9\");\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });