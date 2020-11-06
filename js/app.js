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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* dependencyLibs/inputmask.dependencyLib.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.8
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ../global/window */ "./node_modules/inputmask/dist/inputmask/global/window.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function(window) {
    var document = window.document;
    function indexOf(list, elem) {
        var i = 0, len = list.length;
        for (;i < len; i++) {
            if (list[i] === elem) {
                return i;
            }
        }
        return -1;
    }
    function isWindow(obj) {
        return obj != null && obj === obj.window;
    }
    function isArraylike(obj) {
        var length = "length" in obj && obj.length, ltype = typeof obj;
        if (ltype === "function" || isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return ltype === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function isValidElement(elem) {
        return elem instanceof Element;
    }
    function DependencyLib(elem) {
        if (elem instanceof DependencyLib) {
            return elem;
        }
        if (!(this instanceof DependencyLib)) {
            return new DependencyLib(elem);
        }
        if (elem !== undefined && elem !== null && elem !== window) {
            this[0] = elem.nodeName ? elem : elem[0] !== undefined && elem[0].nodeName ? elem[0] : document.querySelector(elem);
            if (this[0] !== undefined && this[0] !== null) {
                this[0].eventRegistry = this[0].eventRegistry || {};
            }
        }
    }
    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    DependencyLib.prototype = {
        on: function(events, handler) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                var addEvent = function(ev, namespace) {
                    if (elem.addEventListener) {
                        elem.addEventListener(ev, handler, false);
                    } else if (elem.attachEvent) {
                        elem.attachEvent("on" + ev, handler);
                    }
                    eventRegistry[ev] = eventRegistry[ev] || {};
                    eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
                    eventRegistry[ev][namespace].push(handler);
                };
                var _events = events.split(" ");
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    addEvent(ev, namespace);
                }
            }
            return this;
        },
        off: function(events, handler) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                var removeEvent = function(ev, namespace, handler) {
                    if (ev in eventRegistry === true) {
                        if (elem.removeEventListener) {
                            elem.removeEventListener(ev, handler, false);
                        } else if (elem.detachEvent) {
                            elem.detachEvent("on" + ev, handler);
                        }
                        if (namespace === "global") {
                            for (var nmsp in eventRegistry[ev]) {
                                eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
                            }
                        } else {
                            eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                        }
                    }
                };
                var resolveNamespace = function(ev, namespace) {
                    var evts = [], hndx, hndL;
                    if (ev.length > 0) {
                        if (handler === undefined) {
                            for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
                                evts.push({
                                    ev: ev,
                                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                                    handler: eventRegistry[ev][namespace][hndx]
                                });
                            }
                        } else {
                            evts.push({
                                ev: ev,
                                namespace: namespace && namespace.length > 0 ? namespace : "global",
                                handler: handler
                            });
                        }
                    } else if (namespace.length > 0) {
                        for (var evNdx in eventRegistry) {
                            for (var nmsp in eventRegistry[evNdx]) {
                                if (nmsp === namespace) {
                                    if (handler === undefined) {
                                        for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                                            evts.push({
                                                ev: evNdx,
                                                namespace: nmsp,
                                                handler: eventRegistry[evNdx][nmsp][hndx]
                                            });
                                        }
                                    } else {
                                        evts.push({
                                            ev: evNdx,
                                            namespace: nmsp,
                                            handler: handler
                                        });
                                    }
                                }
                            }
                        }
                    }
                    return evts;
                };
                var _events = events.split(" ");
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), offEvents = resolveNamespace(nsEvent[0], nsEvent[1]);
                    for (var i = 0, offEventsL = offEvents.length; i < offEventsL; i++) {
                        removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                    }
                }
            }
            return this;
        },
        trigger: function(events) {
            if (isValidElement(this[0])) {
                var eventRegistry = this[0].eventRegistry, elem = this[0];
                var _events = typeof events === "string" ? events.split(" ") : [ events.type ];
                for (var endx = 0; endx < _events.length; endx++) {
                    var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                    if (document !== undefined && namespace === "global") {
                        var evnt, i, params = {
                            bubbles: true,
                            cancelable: true,
                            detail: arguments[1]
                        };
                        if (document.createEvent) {
                            try {
                                evnt = new CustomEvent(ev, params);
                            } catch (e) {
                                evnt = document.createEvent("CustomEvent");
                                evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                            }
                            if (events.type) DependencyLib.extend(evnt, events);
                            elem.dispatchEvent(evnt);
                        } else {
                            evnt = document.createEventObject();
                            evnt.eventType = ev;
                            evnt.detail = arguments[1];
                            if (events.type) DependencyLib.extend(evnt, events);
                            elem.fireEvent("on" + evnt.eventType, evnt);
                        }
                    } else if (eventRegistry[ev] !== undefined) {
                        arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]);
                        if (namespace === "global") {
                            for (var nmsp in eventRegistry[ev]) {
                                for (i = 0; i < eventRegistry[ev][nmsp].length; i++) {
                                    eventRegistry[ev][nmsp][i].apply(elem, arguments);
                                }
                            }
                        } else {
                            for (i = 0; i < eventRegistry[ev][namespace].length; i++) {
                                eventRegistry[ev][namespace][i].apply(elem, arguments);
                            }
                        }
                    }
                }
            }
            return this;
        }
    };
    DependencyLib.isFunction = function(obj) {
        return typeof obj === "function";
    };
    DependencyLib.noop = function() {};
    DependencyLib.isArray = Array.isArray;
    DependencyLib.inArray = function(elem, arr, i) {
        return arr == null ? -1 : indexOf(arr, elem, i);
    };
    DependencyLib.valHooks = undefined;
    DependencyLib.isPlainObject = function(obj) {
        if (typeof obj !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }
        if (obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
        return true;
    };
    DependencyLib.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== "object" && !DependencyLib.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this;
            i--;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && DependencyLib.isArray(src) ? src : [];
                        } else {
                            clone = src && DependencyLib.isPlainObject(src) ? src : {};
                        }
                        target[name] = DependencyLib.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    DependencyLib.each = function(obj, callback) {
        var value, i = 0;
        if (isArraylike(obj)) {
            for (var length = obj.length; i < length; i++) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                value = callback.call(obj[i], i, obj[i]);
                if (value === false) {
                    break;
                }
            }
        }
        return obj;
    };
    DependencyLib.data = function(owner, key, value) {
        if (value === undefined) {
            return owner.__data ? owner.__data[key] : null;
        } else {
            owner.__data = owner.__data || {};
            owner.__data[key] = value;
        }
    };
    if (typeof window.CustomEvent === "function") {
        DependencyLib.Event = window.CustomEvent;
    } else {
        DependencyLib.Event = function(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        DependencyLib.Event.prototype = window.Event.prototype;
    }
    return DependencyLib;
});

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/global/window.js":
/*!****************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/global/window.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* global/window.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.8
*/

if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/inputmask.js":
/*!************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/inputmask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.8
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./dependencyLibs/inputmask.dependencyLib */ "./node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js"), __webpack_require__(/*! ./global/window */ "./node_modules/inputmask/dist/inputmask/global/window.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function($, window, undefined) {
    var document = window.document, ua = navigator.userAgent, ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0, mobile = isInputEventSupported("touchstart"), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile;
    function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) {
            return new Inputmask(alias, options, internal);
        }
        this.el = undefined;
        this.events = {};
        this.maskset = undefined;
        this.refreshValue = false;
        if (internal !== true) {
            if ($.isPlainObject(alias)) {
                options = alias;
            } else {
                options = options || {};
                if (alias) options.alias = alias;
            }
            this.opts = $.extend(true, {}, this.defaults, options);
            this.noMasksCache = options && options.definitions !== undefined;
            this.userOptions = options || {};
            this.isRTL = this.opts.numericInput;
            resolveAlias(this.opts.alias, options, this.opts);
        }
    }
    Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: [ "[", "]" ],
            quantifiermarker: [ "{", "}" ],
            groupmarker: [ "(", ")" ],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: false,
            autoUnmask: false,
            removeMaskOnSubmit: false,
            clearMaskOnLostFocus: true,
            insertMode: true,
            clearIncomplete: false,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function(pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: true,
            showMaskOnHover: true,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: false,
            rightAlign: false,
            undoOnEscape: true,
            radixPoint: "",
            _radixDance: false,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: true,
            tabThrough: false,
            supportsInputType: [ "text", "tel", "url", "password", "search" ],
            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: undefined,
            jitMasking: false,
            nullable: true,
            inputEventOnly: false,
            noValuePatching: false,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: false,
            disablePredictiveText: false,
            importDataAttributes: true,
            shiftPositions: true
        },
        definitions: {
            9: {
                validator: "[0-9\uff11-\uff19]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
            }
        },
        aliases: {},
        masksCache: {},
        mask: function(elems) {
            var that = this;
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                if (opts.importDataAttributes === true) {
                    var attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
                    var importOption = function(option, optionData) {
                        optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
                        if (optionData !== null) {
                            if (typeof optionData === "string") {
                                if (option.indexOf("on") === 0) optionData = window[optionData]; else if (optionData === "false") optionData = false; else if (optionData === "true") optionData = true;
                            }
                            userOptions[option] = optionData;
                        }
                    };
                    if (attrOptions && attrOptions !== "") {
                        attrOptions = attrOptions.replace(/'/g, '"');
                        dataoptions = JSON.parse("{" + attrOptions + "}");
                    }
                    if (dataoptions) {
                        optionData = undefined;
                        for (p in dataoptions) {
                            if (p.toLowerCase() === "alias") {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                    }
                    importOption("alias", optionData);
                    if (userOptions.alias) {
                        resolveAlias(userOptions.alias, userOptions, opts);
                    }
                    for (option in opts) {
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) {
                                if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                        }
                        importOption(option, optionData);
                    }
                }
                $.extend(true, opts, userOptions);
                if (npt.dir === "rtl" || opts.rightAlign) {
                    npt.style.textAlign = "right";
                }
                if (npt.dir === "rtl" || opts.numericInput) {
                    npt.dir = "ltr";
                    npt.removeAttribute("dir");
                    opts.isRTL = true;
                }
                return Object.keys(userOptions).length;
            }
            if (typeof elems === "string") {
                elems = document.getElementById(elems) || document.querySelectorAll(elems);
            }
            elems = elems.nodeName ? [ elems ] : elems;
            $.each(elems, function(ndx, el) {
                var scopedOpts = $.extend(true, {}, that.opts);
                if (importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute)) {
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    if (maskset !== undefined) {
                        if (el.inputmask !== undefined) {
                            el.inputmask.opts.autoUnmask = true;
                            el.inputmask.remove();
                        }
                        el.inputmask = new Inputmask(undefined, undefined, true);
                        el.inputmask.opts = scopedOpts;
                        el.inputmask.noMasksCache = that.noMasksCache;
                        el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
                        el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput;
                        el.inputmask.el = el;
                        el.inputmask.maskset = maskset;
                        $.data(el, "_inputmask_opts", scopedOpts);
                        maskScope.call(el.inputmask, {
                            action: "mask"
                        });
                    }
                }
            });
            return elems && elems[0] ? elems[0].inputmask || this : this;
        },
        option: function(options, noremask) {
            if (typeof options === "string") {
                return this.opts[options];
            } else if (typeof options === "object") {
                $.extend(this.userOptions, options);
                if (this.el && noremask !== true) {
                    this.mask(this.el);
                }
                return this;
            }
        },
        unmaskedvalue: function(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "unmaskedvalue",
                value: value
            });
        },
        remove: function() {
            return maskScope.call(this, {
                action: "remove"
            });
        },
        getemptymask: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "getemptymask"
            });
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask;
        },
        isComplete: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "isComplete"
            });
        },
        getmetadata: function() {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "getmetadata"
            });
        },
        isValid: function(value) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "isValid",
                value: value
            });
        },
        format: function(value, metadata) {
            this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
            return maskScope.call(this, {
                action: "format",
                value: value,
                metadata: metadata
            });
        },
        setValue: function(value) {
            if (this.el) {
                $(this.el).trigger("setvalue", [ value ]);
            }
        },
        analyseMask: function(mask, regexMask, opts) {
            var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = false, currentToken = new MaskToken(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, groupToken;
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [];
                this.openGroup = isGroup || false;
                this.alternatorGroup = false;
                this.isGroup = isGroup || false;
                this.isOptional = isOptional || false;
                this.isQuantifier = isQuantifier || false;
                this.isAlternator = isAlternator || false;
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function insertTestDefinition(mtoken, element, position) {
                position = position !== undefined ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) {
                    if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w]/i.test(element) || element === ".") {
                        mtoken.matches.splice(position++, 0, {
                            fn: new RegExp(element, opts.casing ? "i" : ""),
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element,
                            casing: null,
                            def: element,
                            placeholder: undefined,
                            nativeDef: element
                        });
                    } else {
                        if (escaped) element = element[element.length - 1];
                        $.each(element.split(""), function(ndx, lmnt) {
                            prevMatch = mtoken.matches[position - 1];
                            mtoken.matches.splice(position++, 0, {
                                fn: null,
                                optionality: false,
                                newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== lmnt && prevMatch.fn !== null,
                                casing: null,
                                def: opts.staticDefinitionSymbol || lmnt,
                                placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                                nativeDef: (escaped ? "'" : "") + lmnt
                            });
                        });
                    }
                    escaped = false;
                } else {
                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                    if (maskdef && !escaped) {
                        mtoken.matches.splice(position++, 0, {
                            fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                this.test = maskdef.validator;
                            }() : new RegExp("."),
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            nativeDef: element
                        });
                    } else {
                        mtoken.matches.splice(position++, 0, {
                            fn: null,
                            optionality: false,
                            newBlockMarker: prevMatch === undefined ? "master" : prevMatch.def !== element && prevMatch.fn !== null,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                            nativeDef: (escaped ? "'" : "") + element
                        });
                        escaped = false;
                    }
                }
            }
            function verifyGroupMarker(maskToken) {
                if (maskToken && maskToken.matches) {
                    $.each(maskToken.matches, function(ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) {
                            token.isGroup = false;
                            if (!regexMask) {
                                insertTestDefinition(token, opts.groupmarker[0], 0);
                                if (token.openGroup !== true) {
                                    insertTestDefinition(token, opts.groupmarker[1]);
                                }
                            }
                        }
                        verifyGroupMarker(token);
                    });
                }
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    currentOpeningToken = openenings[openenings.length - 1];
                    insertTestDefinition(currentOpeningToken, m);
                    if (currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                            if (alternator.matches[mndx].isGroup) alternator.matches[mndx].isGroup = false;
                        }
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(alternator);
                        } else {
                            currentToken.matches.push(alternator);
                        }
                    }
                } else {
                    insertTestDefinition(currentToken, m);
                }
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    if (st === opts.optionalmarker[0]) st = opts.optionalmarker[1]; else if (st === opts.optionalmarker[1]) st = opts.optionalmarker[0]; else if (st === opts.groupmarker[0]) st = opts.groupmarker[1]; else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
                    return st;
                }
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) {
                    if (maskToken.matches.hasOwnProperty(match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1);
                            maskToken.matches.splice(intMatch + 1, 0, qt);
                        }
                        if (maskToken.matches[match].matches !== undefined) {
                            maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
                        } else {
                            maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                        }
                    }
                }
                return maskToken;
            }
            function groupify(matches) {
                var groupToken = new MaskToken(true);
                groupToken.openGroup = false;
                groupToken.matches = matches;
                return groupToken;
            }
            if (regexMask) {
                opts.optionalmarker[0] = undefined;
                opts.optionalmarker[1] = undefined;
            }
            while (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask)) {
                m = match[0];
                if (regexMask) {
                    switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;

                      case "+":
                      case "*":
                        m = "{" + m + "}";
                        break;
                    }
                }
                if (escaped) {
                    defaultCase();
                    continue;
                }
                switch (m.charAt(0)) {
                  case "(?=":
                    break;

                  case "(?!":
                    break;

                  case "(?<=":
                    break;

                  case "(?<!":
                    break;

                  case opts.escapeChar:
                    escaped = true;
                    if (regexMask) {
                        defaultCase();
                    }
                    break;

                  case opts.optionalmarker[1]:
                  case opts.groupmarker[1]:
                    openingToken = openenings.pop();
                    openingToken.openGroup = false;
                    if (openingToken !== undefined) {
                        if (openenings.length > 0) {
                            currentOpeningToken = openenings[openenings.length - 1];
                            currentOpeningToken.matches.push(openingToken);
                            if (currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
                                    alternator.matches[mndx].isGroup = false;
                                    alternator.matches[mndx].alternatorGroup = false;
                                }
                                if (openenings.length > 0) {
                                    currentOpeningToken = openenings[openenings.length - 1];
                                    currentOpeningToken.matches.push(alternator);
                                } else {
                                    currentToken.matches.push(alternator);
                                }
                            }
                        } else {
                            currentToken.matches.push(openingToken);
                        }
                    } else defaultCase();
                    break;

                  case opts.optionalmarker[0]:
                    openenings.push(new MaskToken(false, true));
                    break;

                  case opts.groupmarker[0]:
                    openenings.push(new MaskToken(true));
                    break;

                  case opts.quantifiermarker[0]:
                    var quantifier = new MaskToken(false, false, true);
                    m = m.replace(/[{}]/g, "");
                    var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                    if (mq0 === "*" || mq0 === "+") {
                        mq0 = mq1 === "*" ? 0 : 1;
                    }
                    quantifier.quantifier = {
                        min: mq0,
                        max: mq1,
                        jit: mqj[1]
                    };
                    var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
                    match = matches.pop();
                    if (match.isAlternator) {
                        matches.push(match);
                        matches = match.matches;
                        var groupToken = new MaskToken(true);
                        var tmpMatch = matches.pop();
                        matches.push(groupToken);
                        matches = groupToken.matches;
                        match = tmpMatch;
                    }
                    if (!match.isGroup) {
                        match = groupify([ match ]);
                    }
                    matches.push(match);
                    matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    var groupQuantifier = function(matches) {
                        var lastMatch = matches.pop();
                        if (lastMatch.isQuantifier) {
                            lastMatch = groupify([ matches.pop(), lastMatch ]);
                        }
                        return lastMatch;
                    };
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        if (currentOpeningToken.openGroup && (subToken.matches === undefined || subToken.isGroup === false && subToken.isAlternator === false)) {
                            lastMatch = openenings.pop();
                        } else {
                            lastMatch = groupQuantifier(currentOpeningToken.matches);
                        }
                    } else {
                        lastMatch = groupQuantifier(currentToken.matches);
                    }
                    if (lastMatch.isAlternator) {
                        openenings.push(lastMatch);
                    } else {
                        if (lastMatch.alternatorGroup) {
                            alternator = openenings.pop();
                            lastMatch.alternatorGroup = false;
                        } else {
                            alternator = new MaskToken(false, false, false, true);
                        }
                        alternator.matches.push(lastMatch);
                        openenings.push(alternator);
                        if (lastMatch.openGroup) {
                            lastMatch.openGroup = false;
                            var alternatorGroup = new MaskToken(true);
                            alternatorGroup.alternatorGroup = true;
                            openenings.push(alternatorGroup);
                        }
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            while (openenings.length > 0) {
                openingToken = openenings.pop();
                currentToken.matches.push(openingToken);
            }
            if (currentToken.matches.length > 0) {
                verifyGroupMarker(currentToken);
                maskTokens.push(currentToken);
            }
            if (opts.numericInput || opts.isRTL) {
                reverseTokens(maskTokens[0]);
            }
            return maskTokens;
        },
        positionColorMask: function(input, template) {
            input.style.left = template.offsetLeft + "px";
        }
    };
    Inputmask.extendDefaults = function(options) {
        $.extend(true, Inputmask.prototype.defaults, options);
    };
    Inputmask.extendDefinitions = function(definition) {
        $.extend(true, Inputmask.prototype.definitions, definition);
    };
    Inputmask.extendAliases = function(alias) {
        $.extend(true, Inputmask.prototype.aliases, alias);
    };
    Inputmask.format = function(value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    };
    Inputmask.unmask = function(value, options) {
        return Inputmask(options).unmaskedvalue(value);
    };
    Inputmask.isValid = function(value, options) {
        return Inputmask(options).isValid(value);
    };
    Inputmask.remove = function(elems) {
        if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
        }
        elems = elems.nodeName ? [ elems ] : elems;
        $.each(elems, function(ndx, el) {
            if (el.inputmask) el.inputmask.remove();
        });
    };
    Inputmask.setValue = function(elems, value) {
        if (typeof elems === "string") {
            elems = document.getElementById(elems) || document.querySelectorAll(elems);
        }
        elems = elems.nodeName ? [ elems ] : elems;
        $.each(elems, function(ndx, el) {
            if (el.inputmask) el.inputmask.setValue(value); else $(el).trigger("setvalue", [ value ]);
        });
    };
    Inputmask.escapeRegex = function(str) {
        var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
        return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
    };
    Inputmask.keyCode = {
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        X: 88,
        CONTROL: 17
    };
    Inputmask.dependencyLib = $;
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        if (aliasDefinition) {
            if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts);
            $.extend(true, opts, aliasDefinition);
            $.extend(true, opts, options);
            return true;
        } else if (opts.mask === null) {
            opts.mask = aliasStr;
        }
        return false;
    }
    function generateMaskSet(opts, nocache) {
        function generateMask(mask, metadata, opts) {
            var regexMask = false;
            if (mask === null || mask === "") {
                regexMask = opts.regex !== null;
                if (regexMask) {
                    mask = opts.regex;
                    mask = mask.replace(/^(\^)(.*)(\$)$/, "$2");
                } else {
                    regexMask = true;
                    mask = ".*";
                }
            }
            if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
                opts.placeholder = "";
            }
            if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
                var repeatStart = opts.repeat === "*" ? 0 : opts.repeat === "+" ? 1 : opts.repeat;
                mask = opts.groupmarker[0] + mask + opts.groupmarker[1] + opts.quantifiermarker[0] + repeatStart + "," + opts.repeat + opts.quantifiermarker[1];
            }
            var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
            if (Inputmask.prototype.masksCache[maskdefKey] === undefined || nocache === true) {
                masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: undefined,
                    buffer: undefined,
                    tests: {},
                    excludes: {},
                    metadata: metadata,
                    maskLength: undefined,
                    jitOffset: {}
                };
                if (nocache !== true) {
                    Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition;
                    masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
                }
            } else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[maskdefKey]);
            return masksetDefinition;
        }
        var ms;
        if ($.isFunction(opts.mask)) {
            opts.mask = opts.mask(opts);
        }
        if ($.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                if (opts.keepStatic === null) {
                    opts.keepStatic = "auto";
                    for (var i = 0; i < opts.mask.length; i++) {
                        if (opts.mask[i].charAt(0) !== opts.mask[0].charAt(0)) {
                            opts.keepStatic = true;
                            break;
                        }
                    }
                }
                var altMask = opts.groupmarker[0];
                $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                    if (altMask.length > 1) {
                        altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0];
                    }
                    if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
                        altMask += msk.mask;
                    } else {
                        altMask += msk;
                    }
                });
                altMask += opts.groupmarker[1];
                return generateMask(altMask, opts.mask, opts);
            } else opts.mask = opts.mask.pop();
        }
        if (opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
            ms = generateMask(opts.mask.mask, opts.mask, opts);
        } else {
            ms = generateMask(opts.mask, opts.mask, opts);
        }
        return ms;
    }
    function isInputEventSupported(eventName) {
        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
        if (!isSupported) {
            el.setAttribute(evName, "return;");
            isSupported = typeof el[evName] === "function";
        }
        el = null;
        return isSupported;
    }
    function maskScope(actionObj, maskset, opts) {
        maskset = maskset || this.maskset;
        opts = opts || this.opts;
        var inputmask = this, el = this.el, isRTL = this.isRTL, undoValue, $el, skipKeyPressEvent = false, skipInputEvent = false, ignorable = false, maxLength, mouseEnter = false, colorMask, originalPlaceholder;
        var getMaskTemplate = function(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
            var greedy = opts.greedy;
            if (clearOptionalTail) opts.greedy = false;
            minimalPos = minimalPos || 0;
            var maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, lvp = getLastValidPosition();
            do {
                if (baseOnInput === true && getMaskSet().validPositions[pos]) {
                    testPos = clearOptionalTail && getMaskSet().validPositions[pos].match.optionality === true && getMaskSet().validPositions[pos + 1] === undefined && (getMaskSet().validPositions[pos].generatedInput === true || getMaskSet().validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1)) : getMaskSet().validPositions[pos];
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                } else {
                    testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                    test = testPos.match;
                    ndxIntlzr = testPos.locator.slice();
                    var jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
                    if (jitMasking === false || jitMasking === undefined || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
                        maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
                    }
                }
                if (opts.keepStatic === "auto") {
                    if (test.newBlockMarker && test.fn !== null) {
                        opts.keepStatic = pos - 1;
                    }
                }
                pos++;
            } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
            if (maskTemplate[maskTemplate.length - 1] === "") {
                maskTemplate.pop();
            }
            if (includeMode !== false || getMaskSet().maskLength === undefined) getMaskSet().maskLength = pos - 1;
            opts.greedy = greedy;
            return maskTemplate;
        };
        function getMaskSet() {
            return maskset;
        }
        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined;
            if (soft !== true) {
                maskset.validPositions = {};
                maskset.p = 0;
            }
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
            if (closestTo === undefined) closestTo = -1;
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
                    if (psNdx <= closestTo) before = psNdx;
                    if (psNdx >= closestTo) after = psNdx;
                }
            }
            return before === -1 || before == closestTo ? after : after == -1 ? before : closestTo - before < after - closestTo ? before : after;
        }
        function getDecisionTaker(tst) {
            var decisionTaker = tst.locator[tst.alternation];
            if (typeof decisionTaker == "string" && decisionTaker.length > 0) {
                decisionTaker = decisionTaker.split(",")[0];
            }
            return decisionTaker !== undefined ? decisionTaker.toString() : "";
        }
        function getLocator(tst, align) {
            var locator = (tst.alternation != undefined ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
            if (locator !== "") while (locator.length < align) locator += "0";
            return locator;
        }
        function determineTestTemplate(pos, tests) {
            pos = pos > 0 ? pos - 1 : 0;
            var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
            for (var ndx = 0; ndx < tests.length; ndx++) {
                var tst = tests[ndx];
                tstLocator = getLocator(tst, targetLocator.length);
                var distance = Math.abs(tstLocator - targetLocator);
                if (closest === undefined || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || !tst.match.newBlockMarker) || bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
                    closest = distance;
                    bestMatch = tst;
                }
            }
            return bestMatch;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function getTest(pos, tests) {
            if (getMaskSet().validPositions[pos]) {
                return getMaskSet().validPositions[pos];
            }
            return (tests || getTests(pos))[0];
        }
        function positionCanMatchDefinition(pos, def) {
            var valid = false, tests = getTests(pos);
            for (var tndx = 0; tndx < tests.length; tndx++) {
                if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = true;
                    break;
                }
            }
            return valid;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            var maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
                        if (!firstMatch) {
                            $.each(tokenGroup.matches, function(ndx, match) {
                                if (match.isQuantifier === true) firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]); else if (match.hasOwnProperty("matches")) firstMatch = isFirstMatch(latestMatch, match);
                                if (firstMatch) return false;
                            });
                        }
                        return firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
                            $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                if (lmnt.mloc[alternateNdx]) {
                                    bestMatch = lmnt;
                                    return false;
                                }
                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
                                    bestMatch = lmnt;
                                    indexPos = ndxPos;
                                }
                            });
                        }
                        if (bestMatch) {
                            var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation];
                            var locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                            return locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1);
                        } else {
                            return targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }
                    }
                    function isSubsetOf(source, target) {
                        function expand(pattern) {
                            var expanded = [], start, end;
                            for (var i = 0, l = pattern.length; i < l; i++) {
                                if (pattern.charAt(i) === "-") {
                                    end = pattern.charCodeAt(i + 1);
                                    while (++start < end) expanded.push(String.fromCharCode(start));
                                } else {
                                    start = pattern.charCodeAt(i);
                                    expanded.push(pattern.charAt(i));
                                }
                            }
                            return expanded.join("");
                        }
                        if (opts.regex && source.match.fn !== null && target.match.fn !== null) {
                            return expand(target.match.def.replace(/[\[\]]/g, "")).indexOf(expand(source.match.def.replace(/[\[\]]/g, ""))) !== -1;
                        }
                        return source.match.def === target.match.nativeDef;
                    }
                    function staticCanMatchDefinition(source, target) {
                        var sloc = source.locator.slice(source.alternation).join(""), tloc = target.locator.slice(target.alternation).join(""), canMatch = sloc == tloc;
                        canMatch = canMatch && source.match.fn === null && target.match.fn !== null ? target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false) : false;
                        return canMatch;
                    }
                    function setMergeLocators(targetMatch, altMatch) {
                        if (altMatch === undefined || targetMatch.alternation === altMatch.alternation && targetMatch.locator[targetMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
                            targetMatch.mloc = targetMatch.mloc || {};
                            var locNdx = targetMatch.locator[targetMatch.alternation];
                            if (locNdx === undefined) targetMatch.alternation = undefined; else {
                                if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
                                if (targetMatch.mloc[locNdx] === undefined) targetMatch.mloc[locNdx] = targetMatch.locator.slice();
                                if (altMatch !== undefined) {
                                    for (var ndx in altMatch.mloc) {
                                        if (typeof ndx === "string") ndx = ndx.split(",")[0];
                                        if (targetMatch.mloc[ndx] === undefined) targetMatch.mloc[ndx] = altMatch.mloc[ndx];
                                    }
                                    targetMatch.locator[targetMatch.alternation] = Object.keys(targetMatch.mloc).join(",");
                                }
                                return true;
                            }
                        }
                        return false;
                    }
                    if (testPos > 500 && quantifierRecurse !== undefined) {
                        throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    }
                    if (testPos === pos && match.matches === undefined) {
                        matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency,
                            mloc: {}
                        });
                        return true;
                    } else if (match.matches !== undefined) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx, quantifierRecurse);
                            if (match) return true;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) {
                                $.each(matches, function(ndx, mtch) {
                                    mtch.match.optionality = true;
                                });
                                latestMatch = matches[matches.length - 1].match;
                                if (quantifierRecurse === undefined && isFirstMatch(latestMatch, optionalToken)) {
                                    insertStop = true;
                                    testPos = pos;
                                } else return true;
                            }
                        } else if (match.isAlternator) {
                            var alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx.length;
                            var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (altIndex === -1 || typeof altIndex === "string") {
                                var currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [], amndx;
                                if (typeof altIndex == "string") {
                                    altIndexArr = altIndex.split(",");
                                } else {
                                    for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
                                        altIndexArr.push(amndx.toString());
                                    }
                                }
                                if (getMaskSet().excludes[pos]) {
                                    var altIndexArrClone = altIndexArr.slice();
                                    for (var i = 0, el = getMaskSet().excludes[pos].length; i < el; i++) {
                                        altIndexArr.splice(altIndexArr.indexOf(getMaskSet().excludes[pos][i].toString()), 1);
                                    }
                                    if (altIndexArr.length === 0) {
                                        getMaskSet().excludes[pos] = undefined;
                                        altIndexArr = altIndexArrClone;
                                    }
                                }
                                if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic) altIndexArr = altIndexArr.slice(0, 1);
                                var unMatchedAlternation = false;
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    amndx = parseInt(altIndexArr[ndx]);
                                    matches = [];
                                    ndxInitializer = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
                                    if (alternateToken.matches[amndx] && handleMatch(alternateToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse)) match = true; else if (ndx === 0) {
                                        unMatchedAlternation = true;
                                    }
                                    maltMatches = matches.slice();
                                    testPos = currentPos;
                                    matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = false;
                                        altMatch.match.jit = altMatch.match.jit || unMatchedAlternation;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                        setMergeLocators(altMatch);
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if (typeof altIndex !== "string" || altMatch.alternation !== undefined && $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
                                                if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                    dropMatch = true;
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                } else if (isSubsetOf(altMatch, altMatch2)) {
                                                    if (setMergeLocators(altMatch, altMatch2)) {
                                                        dropMatch = true;
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                    }
                                                    break;
                                                } else if (isSubsetOf(altMatch2, altMatch)) {
                                                    setMergeLocators(altMatch2, altMatch);
                                                    break;
                                                } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                    if (setMergeLocators(altMatch, altMatch2)) {
                                                        dropMatch = true;
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch);
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        if (!dropMatch) {
                                            malternateMatches.push(altMatch);
                                        }
                                    }
                                }
                                matches = currentMatches.concat(malternateMatches);
                                testPos = pos;
                                insertStop = matches.length > 0;
                                match = malternateMatches.length > 0;
                                ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                            if (match) return true;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
                            var qt = match;
                            for (var qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup);
                                if (match) {
                                    latestMatch = matches[matches.length - 1].match;
                                    latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
                                    latestMatch.jit = (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit;
                                    if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                                        insertStop = true;
                                        testPos = pos;
                                        break;
                                    }
                                    if (latestMatch.jit) {
                                        getMaskSet().jitOffset[pos] = tokenGroup.matches.indexOf(latestMatch);
                                    }
                                    return true;
                                }
                            }
                        } else {
                            match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
                            if (match) return true;
                        }
                    } else {
                        testPos++;
                    }
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) {
                    if (maskToken.matches[tndx].isQuantifier !== true) {
                        var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) {
                            return match;
                        } else if (testPos > pos) {
                            break;
                        }
                    }
                }
            }
            function mergeLocators(pos, tests) {
                var locator = [];
                if (!$.isArray(tests)) tests = [ tests ];
                if (tests.length > 0) {
                    if (tests[0].alternation === undefined) {
                        locator = determineTestTemplate(pos, tests.slice()).locator.slice();
                        if (locator.length === 0) locator = tests[0].locator.slice();
                    } else {
                        $.each(tests, function(ndx, tst) {
                            if (tst.def !== "") {
                                if (locator.length === 0) locator = tst.locator.slice(); else {
                                    for (var i = 0; i < locator.length; i++) {
                                        if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
                                            locator[i] += "," + tst.locator[i];
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
                return locator;
            }
            if (pos > -1) {
                if (ndxIntlzr === undefined) {
                    var previousPos = pos - 1, test;
                    while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
                        previousPos--;
                    }
                    if (test !== undefined && previousPos > -1) {
                        ndxInitializer = mergeLocators(previousPos, test);
                        cacheDependency = ndxInitializer.join("");
                        testPos = previousPos;
                    }
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) {
                    return getMaskSet().tests[pos];
                }
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]);
                    if (match && testPos === pos || testPos > pos) {
                        break;
                    }
                }
            }
            if (matches.length === 0 || insertStop) {
                matches.push({
                    match: {
                        fn: null,
                        optionality: false,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    mloc: {},
                    cd: cacheDependency
                });
            }
            if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) {
                return $.extend(true, [], matches);
            }
            getMaskSet().tests[pos] = $.extend(true, [], matches);
            return getMaskSet().tests[pos];
        }
        function getBufferTemplate() {
            if (getMaskSet()._buffer === undefined) {
                getMaskSet()._buffer = getMaskTemplate(false, 1);
                if (getMaskSet().buffer === undefined) getMaskSet().buffer = getMaskSet()._buffer.slice();
            }
            return getMaskSet()._buffer;
        }
        function getBuffer(noCache) {
            if (getMaskSet().buffer === undefined || noCache === true) {
                getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                if (getMaskSet()._buffer === undefined) getMaskSet()._buffer = getMaskSet().buffer.slice();
            }
            return getMaskSet().buffer;
        }
        function refreshFromBuffer(start, end, buffer) {
            var i, p;
            if (start === true) {
                resetMaskSet();
                start = 0;
                end = buffer.length;
            } else {
                for (i = start; i < end; i++) {
                    delete getMaskSet().validPositions[i];
                }
            }
            p = start;
            for (i = start; i < end; i++) {
                resetMaskSet(true);
                if (buffer[i] !== opts.skipOptionalPartCharacter) {
                    var valResult = isValid(p, buffer[i], true, true);
                    if (valResult !== false) {
                        resetMaskSet(true);
                        p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1;
                    }
                }
            }
        }
        function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = getMaskSet().validPositions[pos - 1];
                if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                    elem = elem.toUpperCase();
                } else {
                    elem = elem.toLowerCase();
                }
                break;

              default:
                if ($.isFunction(opts.casing)) {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(getMaskSet().validPositions);
                    elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== undefined ? na.split(",") : [], naNdx;
            for (var i = 0; i < naArr.length; i++) {
                if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
                    altArr1.splice(naNdx, 1);
                }
            }
            for (var alndx = 0; alndx < altArr1.length; alndx++) {
                if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                    isMatch = true;
                    break;
                }
            }
            return isMatch;
        }
        function alternate(pos, c, strict, fromSetValid, rAltPos) {
            var validPsClone = $.extend(true, {}, getMaskSet().validPositions), lastAlt, alternation, isValidRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== undefined ? rAltPos : getLastValidPosition();
            if (lAltPos === -1 && rAltPos === undefined) {
                lastAlt = 0;
                prevAltPos = getTest(lastAlt);
                alternation = prevAltPos.alternation;
            } else {
                for (;lAltPos >= 0; lAltPos--) {
                    altPos = getMaskSet().validPositions[lAltPos];
                    if (altPos && altPos.alternation !== undefined) {
                        if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
                            break;
                        }
                        lastAlt = lAltPos;
                        alternation = getMaskSet().validPositions[lastAlt].alternation;
                        prevAltPos = altPos;
                    }
                }
            }
            if (alternation !== undefined) {
                decisionPos = parseInt(lastAlt);
                getMaskSet().excludes[decisionPos] = getMaskSet().excludes[decisionPos] || [];
                if (pos !== true) {
                    getMaskSet().excludes[decisionPos].push(getDecisionTaker(prevAltPos));
                }
                var validInputsClone = [], staticInputsBeforePos = 0;
                for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) {
                    validPos = getMaskSet().validPositions[i];
                    if (validPos && validPos.generatedInput !== true) {
                        validInputsClone.push(validPos.input);
                    } else if (i < pos) staticInputsBeforePos++;
                    delete getMaskSet().validPositions[i];
                }
                while (getMaskSet().excludes[decisionPos] && getMaskSet().excludes[decisionPos].length < 10) {
                    var posOffset = staticInputsBeforePos * -1, validInputs = validInputsClone.slice();
                    getMaskSet().tests[decisionPos] = undefined;
                    resetMaskSet(true);
                    isValidRslt = true;
                    while (validInputs.length > 0) {
                        var input = validInputs.shift();
                        if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
                            break;
                        }
                    }
                    if (isValidRslt && c !== undefined) {
                        var targetLvp = getLastValidPosition(pos) + 1;
                        for (i = decisionPos; i < getLastValidPosition() + 1; i++) {
                            validPos = getMaskSet().validPositions[i];
                            if ((validPos === undefined || validPos.match.fn == null) && i < pos + posOffset) {
                                posOffset++;
                            }
                        }
                        pos = pos + posOffset;
                        isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
                    }
                    if (!isValidRslt) {
                        resetMaskSet();
                        prevAltPos = getTest(decisionPos);
                        getMaskSet().validPositions = $.extend(true, {}, validPsClone);
                        if (getMaskSet().excludes[decisionPos]) {
                            var decisionTaker = getDecisionTaker(prevAltPos);
                            if (getMaskSet().excludes[decisionPos].indexOf(decisionTaker) !== -1) {
                                isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                                break;
                            }
                            getMaskSet().excludes[decisionPos].push(decisionTaker);
                            for (i = decisionPos; i < getLastValidPosition(undefined, true) + 1; i++) delete getMaskSet().validPositions[i];
                        } else {
                            isValidRslt = alternate(pos, c, strict, fromSetValid, decisionPos - 1);
                            break;
                        }
                    } else break;
                }
            }
            getMaskSet().excludes[decisionPos] = undefined;
            return isValidRslt;
        }
        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
            function isSelection(posObj) {
                return isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1;
            }
            strict = strict === true;
            var maskPos = pos;
            if (pos.begin !== undefined) {
                maskPos = isRTL ? pos.end : pos.begin;
            }
            function _isValid(position, c, strict) {
                var rslt = false;
                $.each(getTests(position), function(ndx, tst) {
                    var test = tst.match;
                    getBuffer(true);
                    rslt = test.fn != null ? test.fn.test(c, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? {
                        c: getPlaceholder(position, test, true) || test.def,
                        pos: position
                    } : false;
                    if (rslt !== false) {
                        var elem = rslt.c !== undefined ? rslt.c : c, validatedPos = position;
                        elem = elem === opts.skipOptionalPartCharacter && test.fn === null ? getPlaceholder(position, test, true) || test.def : elem;
                        if (rslt.remove !== undefined) {
                            if (!$.isArray(rslt.remove)) rslt.remove = [ rslt.remove ];
                            $.each(rslt.remove.sort(function(a, b) {
                                return b - a;
                            }), function(ndx, lmnt) {
                                revalidateMask({
                                    begin: lmnt,
                                    end: lmnt + 1
                                });
                            });
                        }
                        if (rslt.insert !== undefined) {
                            if (!$.isArray(rslt.insert)) rslt.insert = [ rslt.insert ];
                            $.each(rslt.insert.sort(function(a, b) {
                                return a - b;
                            }), function(ndx, lmnt) {
                                isValid(lmnt.pos, lmnt.c, true, fromSetValid);
                            });
                        }
                        if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) {
                            validatedPos = rslt.pos;
                        }
                        if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
                            return false;
                        }
                        if (!revalidateMask(pos, $.extend({}, tst, {
                            input: casing(elem, test, validatedPos)
                        }), fromSetValid, validatedPos)) {
                            rslt = false;
                        }
                        return false;
                    }
                });
                return rslt;
            }
            var result = true, positionsClone = $.extend(true, {}, getMaskSet().validPositions);
            if ($.isFunction(opts.preValidation) && !strict && fromSetValid !== true && validateOnly !== true) {
                result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts, getMaskSet());
            }
            if (result === true) {
                trackbackPositions(undefined, maskPos, true);
                if (maxLength === undefined || maskPos < maxLength) {
                    result = _isValid(maskPos, c, strict);
                    if ((!strict || fromSetValid === true) && result === false && validateOnly !== true) {
                        var currentPosValid = getMaskSet().validPositions[maskPos];
                        if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
                            result = {
                                caret: seekNext(maskPos)
                            };
                        } else {
                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && (!isMask(maskPos, true) || getMaskSet().jitOffset[maskPos])) {
                                if (getMaskSet().jitOffset[maskPos] && getMaskSet().validPositions[seekNext(maskPos)] === undefined) {
                                    result = isValid(maskPos + getMaskSet().jitOffset[maskPos], c, strict);
                                    if (result !== false) result.caret = maskPos;
                                } else for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
                                    result = _isValid(nPos, c, strict);
                                    if (result !== false) {
                                        result = trackbackPositions(maskPos, result.pos !== undefined ? result.pos : nPos) || result;
                                        maskPos = nPos;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (result === false && opts.keepStatic !== false && (opts.regex == null || isComplete(getBuffer())) && !strict && fromAlternate !== true) {
                    result = alternate(maskPos, c, strict, fromSetValid);
                }
                if (result === true) {
                    result = {
                        pos: maskPos
                    };
                }
            }
            if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true && validateOnly !== true) {
                var postResult = opts.postValidation(getBuffer(true), pos.begin !== undefined ? isRTL ? pos.end : pos.begin : pos, result, opts);
                if (postResult !== undefined) {
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = postResult === true ? result : postResult;
                }
            }
            if (result && result.pos === undefined) {
                result.pos = maskPos;
            }
            if (result === false || validateOnly === true) {
                resetMaskSet(true);
                getMaskSet().validPositions = $.extend(true, {}, positionsClone);
            }
            return result;
        }
        function trackbackPositions(originalPos, newPos, fillOnly) {
            var result;
            if (originalPos === undefined) {
                for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
                    if (getMaskSet().validPositions[originalPos]) break;
                }
            }
            for (var ps = originalPos; ps < newPos; ps++) {
                if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
                    var vp = ps == 0 ? getTest(ps) : getMaskSet().validPositions[ps - 1];
                    if (vp) {
                        var tests = getTests(ps).slice();
                        if (tests[tests.length - 1].match.def === "") tests.pop();
                        var bestMatch = determineTestTemplate(ps, tests);
                        bestMatch = $.extend({}, bestMatch, {
                            input: getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
                        });
                        bestMatch.generatedInput = true;
                        revalidateMask(ps, bestMatch, true);
                        if (fillOnly !== true) {
                            var cvpInput = getMaskSet().validPositions[newPos].input;
                            getMaskSet().validPositions[newPos] = undefined;
                            result = isValid(newPos, cvpInput, true, true);
                        }
                    }
                }
            }
            return result;
        }
        function revalidateMask(pos, validTest, fromSetValid, validatedPos) {
            function IsEnclosedStatic(pos, valids, selection) {
                var posMatch = valids[pos];
                if (posMatch !== undefined && (posMatch.match.fn === null && posMatch.match.optionality !== true || posMatch.input === opts.radixPoint)) {
                    var prevMatch = selection.begin <= pos - 1 ? valids[pos - 1] && valids[pos - 1].match.fn === null && valids[pos - 1] : valids[pos - 1], nextMatch = selection.end > pos + 1 ? valids[pos + 1] && valids[pos + 1].match.fn === null && valids[pos + 1] : valids[pos + 1];
                    return prevMatch && nextMatch;
                }
                return false;
            }
            var begin = pos.begin !== undefined ? pos.begin : pos, end = pos.end !== undefined ? pos.end : pos;
            if (pos.begin > pos.end) {
                begin = pos.end;
                end = pos.begin;
            }
            validatedPos = validatedPos !== undefined ? validatedPos : begin;
            if (begin !== end || opts.insertMode && getMaskSet().validPositions[validatedPos] !== undefined && fromSetValid === undefined) {
                var positionsClone = $.extend(true, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, true), i;
                getMaskSet().p = begin;
                for (i = lvp; i >= begin; i--) {
                    if (getMaskSet().validPositions[i] && getMaskSet().validPositions[i].match.nativeDef === "+") {
                        opts.isNegative = false;
                    }
                    delete getMaskSet().validPositions[i];
                }
                var valid = true, j = validatedPos, vps = getMaskSet().validPositions, needsValidation = false, posMatch = j, i = j;
                if (validTest) {
                    getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
                    posMatch++;
                    j++;
                    if (begin < end) i++;
                }
                for (;i <= lvp; i++) {
                    var t = positionsClone[i];
                    if (t !== undefined && (i >= end || i >= begin && t.generatedInput !== true && IsEnclosedStatic(i, positionsClone, {
                        begin: begin,
                        end: end
                    }))) {
                        while (getTest(posMatch).match.def !== "") {
                            if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.nativeDef === t.match.nativeDef) {
                                getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
                                getMaskSet().validPositions[posMatch].input = t.input;
                                trackbackPositions(undefined, posMatch, true);
                                j = posMatch + 1;
                                valid = true;
                            } else if (opts.shiftPositions && positionCanMatchDefinition(posMatch, t.match.def)) {
                                var result = isValid(posMatch, t.input, true, true);
                                valid = result !== false;
                                j = result.caret || result.insert ? getLastValidPosition() : posMatch + 1;
                                needsValidation = true;
                            } else {
                                valid = t.generatedInput === true || t.input === opts.radixPoint && opts.numericInput === true;
                            }
                            if (valid) break;
                            if (!valid && posMatch > end && isMask(posMatch, true) && (t.match.fn !== null || posMatch > getMaskSet().maskLength)) {
                                break;
                            }
                            posMatch++;
                        }
                        if (getTest(posMatch).match.def == "") valid = false;
                        posMatch = j;
                    }
                    if (!valid) break;
                }
                if (!valid) {
                    getMaskSet().validPositions = $.extend(true, {}, positionsClone);
                    resetMaskSet(true);
                    return false;
                }
            } else if (validTest) {
                getMaskSet().validPositions[validatedPos] = $.extend(true, {}, validTest);
            }
            resetMaskSet(true);
            return true;
        }
        function isMask(pos, strict) {
            var test = getTestTemplate(pos).match;
            if (test.def === "") test = getTest(pos).match;
            if (test.fn != null) {
                return test.fn;
            }
            if (strict !== true && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
            }
            return false;
        }
        function seekNext(pos, newBlock) {
            var position = pos + 1;
            while (getTest(position).match.def !== "" && (newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position)) || newBlock !== true && !isMask(position))) {
                position++;
            }
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var position = pos, tests;
            if (position <= 0) return 0;
            while (--position > 0 && (newBlock === true && getTest(position).match.newBlockMarker !== true || newBlock !== true && !isMask(position) && (tests = getTests(position), 
            tests.length < 2 || tests.length === 2 && tests[1].match.def === ""))) {}
            return position;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
                        buffer = getBuffer(true);
                    }
                    if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
                }
            }
            if (input !== undefined) {
                input.inputmask._valueSet(buffer.join(""));
                if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
                    caret(input, caretPos);
                } else renderColorMask(input, caretPos, buffer.length === 0);
                if (triggerEvents === true) {
                    var $input = $(input), nptVal = input.inputmask._valueGet();
                    skipInputEvent = true;
                    $input.trigger("input");
                    setTimeout(function() {
                        if (nptVal === getBufferTemplate().join("")) {
                            $input.trigger("cleared");
                        } else if (isComplete(buffer) === true) {
                            $input.trigger("complete");
                        }
                    }, 0);
                }
            }
        }
        function getPlaceholder(pos, test, returnPL) {
            test = test || getTest(pos).match;
            if (test.placeholder !== undefined || returnPL === true) {
                return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            } else if (test.fn === null) {
                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                    var tests = getTests(pos), staticAlternations = [], prevTest;
                    if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
                        for (var i = 0; i < tests.length; i++) {
                            if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
                                staticAlternations.push(tests[i]);
                                if (tests[i].match.fn === null) prevTest = tests[i];
                                if (staticAlternations.length > 1) {
                                    if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                                        return opts.placeholder.charAt(pos % opts.placeholder.length);
                                    }
                                }
                            }
                        }
                    }
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function HandleNativePlaceholder(npt, value) {
            if (ie) {
                if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
                    var buffer = getBuffer().slice(), nptValue = npt.inputmask._valueGet();
                    if (nptValue !== value) {
                        var lvp = getLastValidPosition();
                        if (lvp === -1 && nptValue === getBufferTemplate().join("")) {
                            buffer = [];
                        } else if (lvp !== -1) {
                            clearOptionalTail(buffer);
                        }
                        writeBuffer(npt, buffer);
                    }
                }
            } else if (npt.placeholder !== value) {
                npt.placeholder = value;
                if (npt.placeholder === "") npt.removeAttribute("placeholder");
            }
        }
        var EventRuler = {
            on: function(input, eventName, eventHandler) {
                var ev = function(e) {
                    var that = this;
                    if (that.inputmask === undefined && this.nodeName !== "FORM") {
                        var imOpts = $.data(that, "_inputmask_opts");
                        if (imOpts) new Inputmask(imOpts).mask(that); else EventRuler.off(that);
                    } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                        e.preventDefault();
                    } else {
                        switch (e.type) {
                          case "input":
                            if (skipInputEvent === true) {
                                skipInputEvent = false;
                                return e.preventDefault();
                            }
                            if (mobile) {
                                var args = arguments;
                                setTimeout(function() {
                                    eventHandler.apply(that, args);
                                    caret(that, that.inputmask.caretPos, undefined, true);
                                }, 0);
                                return false;
                            }
                            break;

                          case "keydown":
                            skipKeyPressEvent = false;
                            skipInputEvent = false;
                            break;

                          case "keypress":
                            if (skipKeyPressEvent === true) {
                                return e.preventDefault();
                            }
                            skipKeyPressEvent = true;
                            break;

                          case "click":
                            if (iemobile || iphone) {
                                var args = arguments;
                                setTimeout(function() {
                                    eventHandler.apply(that, args);
                                }, 0);
                                return false;
                            }
                            break;
                        }
                        var returnVal = eventHandler.apply(that, arguments);
                        if (returnVal === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        return returnVal;
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
                input.inputmask.events[eventName].push(ev);
                if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                    if (input.form !== null) $(input.form).on(eventName, ev);
                } else {
                    $(input).on(eventName, ev);
                }
            },
            off: function(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    if (event) {
                        events = [];
                        events[event] = input.inputmask.events[event];
                    } else {
                        events = input.inputmask.events;
                    }
                    $.each(events, function(eventName, evArr) {
                        while (evArr.length > 0) {
                            var ev = evArr.pop();
                            if ($.inArray(eventName, [ "submit", "reset" ]) !== -1) {
                                if (input.form !== null) $(input.form).off(eventName, ev);
                            } else {
                                $(input).off(eventName, ev);
                            }
                        }
                        delete input.inputmask.events[eventName];
                    });
                }
            }
        };
        var EventHandlers = {
            keydownEvent: function(e) {
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                    e.preventDefault();
                    handleRemove(input, k, pos);
                    writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
                } else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = seekNext(getLastValidPosition());
                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
                } else if (k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP) {
                    e.preventDefault();
                    caret(input, 0, e.shiftKey ? pos.begin : 0, true);
                } else if ((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || k === 90 && e.ctrlKey) && e.altKey !== true) {
                    checkVal(input, true, false, undoValue.split(""));
                    $input.trigger("click");
                } else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                    opts.insertMode = !opts.insertMode;
                    input.setAttribute("im-insert", opts.insertMode);
                } else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
                    if (e.shiftKey === true) {
                        if (getTest(pos.begin).match.fn === null) {
                            pos.begin = seekNext(pos.begin);
                        }
                        pos.end = seekPrevious(pos.begin, true);
                        pos.begin = seekPrevious(pos.end, true);
                    } else {
                        pos.begin = seekNext(pos.begin, true);
                        pos.end = seekNext(pos.begin, true);
                        if (pos.end < getMaskSet().maskLength) pos.end--;
                    }
                    if (pos.begin < getMaskSet().maskLength) {
                        e.preventDefault();
                        caret(input, pos.begin, pos.end);
                    }
                }
                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
                ignorable = $.inArray(k, opts.ignorables) !== -1;
            },
            keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
                    if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
                        undoValue = getBuffer().join("");
                        setTimeout(function() {
                            $input.trigger("change");
                        }, 0);
                    }
                    return true;
                } else {
                    if (k) {
                        if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
                        var pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input), forwardPosition, c = String.fromCharCode(k), offset = 0;
                        if (opts._radixDance && opts.numericInput) {
                            var caretPos = getBuffer().indexOf(opts.radixPoint.charAt(0)) + 1;
                            if (pos.begin <= caretPos) {
                                if (k === opts.radixPoint.charCodeAt(0)) offset = 1;
                                pos.begin -= 1;
                                pos.end -= 1;
                            }
                        }
                        getMaskSet().writeOutBuffer = true;
                        var valResult = isValid(pos, c, strict);
                        if (valResult !== false) {
                            resetMaskSet(true);
                            forwardPosition = valResult.caret !== undefined ? valResult.caret : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos);
                            getMaskSet().p = forwardPosition;
                        }
                        forwardPosition = (opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition) + offset;
                        if (writeOut !== false) {
                            setTimeout(function() {
                                opts.onKeyValidation.call(input, k, valResult, opts);
                            }, 0);
                            if (getMaskSet().writeOutBuffer && valResult !== false) {
                                var buffer = getBuffer();
                                writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
                            }
                        }
                        e.preventDefault();
                        if (checkval) {
                            if (valResult !== false) valResult.forwardPosition = forwardPosition;
                            return valResult;
                        }
                    }
                }
            },
            pasteEvent: function(e) {
                var input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(true), caretPos = caret(input), tempValue;
                if (isRTL) {
                    tempValue = caretPos.end;
                    caretPos.end = caretPos.begin;
                    caretPos.begin = tempValue;
                }
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
                if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
                if (window.clipboardData && window.clipboardData.getData) {
                    inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
                } else if (ev.clipboardData && ev.clipboardData.getData) {
                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                } else return true;
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts);
                    if (pasteValue === false) {
                        return e.preventDefault();
                    }
                    if (!pasteValue) {
                        pasteValue = inputValue;
                    }
                }
                checkVal(input, false, false, pasteValue.toString().split(""));
                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
                return e.preventDefault();
            },
            inputFallBackEvent: function(e) {
                function radixPointHandler(input, inputValue, caretPos) {
                    if (inputValue.charAt(caretPos.begin - 1) === "." && opts.radixPoint !== "") {
                        inputValue = inputValue.split("");
                        inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0);
                        inputValue = inputValue.join("");
                    }
                    return inputValue;
                }
                function ieMobileHandler(input, inputValue, caretPos) {
                    if (iemobile) {
                        var inputChar = inputValue.replace(getBuffer().join(""), "");
                        if (inputChar.length === 1) {
                            var iv = inputValue.split("");
                            iv.splice(caretPos.begin, 0, inputChar);
                            inputValue = iv.join("");
                        }
                    }
                    return inputValue;
                }
                var input = this, inputValue = input.inputmask._valueGet();
                if (getBuffer().join("") !== inputValue) {
                    var caretPos = caret(input);
                    inputValue = radixPointHandler(input, inputValue, caretPos);
                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                    if (getBuffer().join("") !== inputValue) {
                        var buffer = getBuffer().join(""), offset = !opts.numericInput && inputValue.length > buffer.length ? -1 : 0, frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin + offset), backBufferPart = buffer.substr(caretPos.begin + offset);
                        var selection = caretPos, entries = "", isEntry = false;
                        if (frontPart !== frontBufferPart) {
                            var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i;
                            for (i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) ;
                            if (isEntry) {
                                selection.begin = i - offset;
                                entries += frontPart.slice(i, selection.end);
                            }
                        }
                        if (backPart !== backBufferPart) {
                            if (backPart.length > backBufferPart.length) {
                                entries += backPart.slice(0, 1);
                            } else {
                                if (backPart.length < backBufferPart.length) {
                                    selection.end += backBufferPart.length - backPart.length;
                                    if (!isEntry && opts.radixPoint !== "" && backPart === "" && frontPart.charAt(selection.begin + offset - 1) === opts.radixPoint) {
                                        selection.begin--;
                                        entries = opts.radixPoint;
                                    }
                                }
                            }
                        }
                        writeBuffer(input, getBuffer(), {
                            begin: selection.begin + offset,
                            end: selection.end + offset
                        });
                        if (entries.length > 0) {
                            $.each(entries.split(""), function(ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0);
                                ignorable = false;
                                EventHandlers.keypressEvent.call(input, keypress);
                            });
                        } else {
                            if (selection.begin === selection.end - 1) {
                                selection.begin = seekPrevious(selection.begin + 1);
                                if (selection.begin === selection.end - 1) {
                                    caret(input, selection.begin);
                                } else {
                                    caret(input, selection.begin, selection.end);
                                }
                            }
                            var keydown = new $.Event("keydown");
                            keydown.keyCode = opts.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                            EventHandlers.keydownEvent.call(input, keydown);
                        }
                        e.preventDefault();
                    }
                }
            },
            beforeInputEvent: function(e) {
                if (e.cancelable) {
                    var input = this;
                    switch (e.inputType) {
                      case "insertText":
                        $.each(e.data.split(""), function(ndx, entry) {
                            var keypress = new $.Event("keypress");
                            keypress.which = entry.charCodeAt(0);
                            ignorable = false;
                            EventHandlers.keypressEvent.call(input, keypress);
                        });
                        return e.preventDefault();

                      case "deleteContentBackward":
                        var keydown = new $.Event("keydown");
                        keydown.keyCode = Inputmask.keyCode.BACKSPACE;
                        EventHandlers.keydownEvent.call(input, keydown);
                        return e.preventDefault();

                      case "deleteContentForward":
                        var keydown = new $.Event("keydown");
                        keydown.keyCode = Inputmask.keyCode.DELETE;
                        EventHandlers.keydownEvent.call(input, keydown);
                        return e.preventDefault();
                    }
                }
            },
            setValueEvent: function(e) {
                this.inputmask.refreshValue = false;
                var input = this, value = e && e.detail ? e.detail[0] : arguments[1], value = value || input.inputmask._valueGet(true);
                if ($.isFunction(opts.onBeforeMask)) value = opts.onBeforeMask.call(inputmask, value, opts) || value;
                value = value.toString().split("");
                checkVal(input, true, false, value);
                undoValue = getBuffer().join("");
                if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
                    input.inputmask._valueSet("");
                }
            },
            focusEvent: function(e) {
                var input = this, nptValue = input.inputmask._valueGet();
                if (opts.showMaskOnFocus) {
                    if (nptValue !== getBuffer().join("")) {
                        writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
                    } else if (mouseEnter === false) {
                        caret(input, seekNext(getLastValidPosition()));
                    }
                }
                if (opts.positionCaretOnTab === true && mouseEnter === false) {
                    EventHandlers.clickEvent.apply(input, [ e, true ]);
                }
                undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function(e) {
                var input = this;
                mouseEnter = false;
                if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
                    HandleNativePlaceholder(input, originalPlaceholder);
                }
            },
            clickEvent: function(e, tabbed) {
                function doRadixFocus(clickPos) {
                    if (opts.radixPoint !== "") {
                        var vps = getMaskSet().validPositions;
                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1)) return true;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (radixPos !== -1) {
                                for (var vp in vps) {
                                    if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
                                        return false;
                                    }
                                }
                                return true;
                            }
                        }
                    }
                    return false;
                }
                var input = this;
                setTimeout(function() {
                    if (document.activeElement === input) {
                        var selectedCaret = caret(input);
                        if (tabbed) {
                            if (isRTL) {
                                selectedCaret.end = selectedCaret.begin;
                            } else {
                                selectedCaret.begin = selectedCaret.end;
                            }
                        }
                        if (selectedCaret.begin === selectedCaret.end) {
                            switch (opts.positionCaretOnClick) {
                              case "none":
                                break;

                              case "select":
                                caret(input, 0, getBuffer().length);
                                break;

                              case "ignore":
                                caret(input, seekNext(getLastValidPosition()));
                                break;

                              case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                    break;
                                }

                              default:
                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, true), lastPosition = seekNext(lvclickPosition);
                                if (clickPosition < lastPosition) {
                                    caret(input, !isMask(clickPosition, true) && !isMask(clickPosition - 1, true) ? seekNext(clickPosition) : clickPosition);
                                } else {
                                    var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                    if (placeholder !== "" && getBuffer()[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder) {
                                        var newPos = seekNext(lastPosition);
                                        if (clickPosition >= newPos || clickPosition === lastPosition) {
                                            lastPosition = newPos;
                                        }
                                    }
                                    caret(input, lastPosition);
                                }
                                break;
                            }
                        }
                    }
                }, 0);
            },
            cutEvent: function(e) {
                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e;
                var clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
                if (document.execCommand) document.execCommand("copy");
                handleRemove(input, Inputmask.keyCode.DELETE, pos);
                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));
            },
            blurEvent: function(e) {
                var $input = $(this), input = this;
                if (input.inputmask) {
                    HandleNativePlaceholder(input, originalPlaceholder);
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                    if (nptValue !== "" || colorMask !== undefined) {
                        if (opts.clearMaskOnLostFocus) {
                            if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
                                buffer = [];
                            } else {
                                clearOptionalTail(buffer);
                            }
                        }
                        if (isComplete(buffer) === false) {
                            setTimeout(function() {
                                $input.trigger("incomplete");
                            }, 0);
                            if (opts.clearIncomplete) {
                                resetMaskSet();
                                if (opts.clearMaskOnLostFocus) {
                                    buffer = [];
                                } else {
                                    buffer = getBufferTemplate().slice();
                                }
                            }
                        }
                        writeBuffer(input, buffer, undefined, e);
                    }
                    if (undoValue !== getBuffer().join("")) {
                        undoValue = buffer.join("");
                        $input.trigger("change");
                    }
                }
            },
            mouseenterEvent: function(e) {
                var input = this;
                mouseEnter = true;
                if (document.activeElement !== input && opts.showMaskOnHover) {
                    HandleNativePlaceholder(input, (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(""));
                }
            },
            submitEvent: function(e) {
                if (undoValue !== getBuffer().join("")) {
                    $el.trigger("change");
                }
                if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
                    el.inputmask._valueSet("");
                }
                if (opts.clearIncomplete && isComplete(getBuffer()) === false) {
                    el.inputmask._valueSet("");
                }
                if (opts.removeMaskOnSubmit) {
                    el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
                    setTimeout(function() {
                        writeBuffer(el, getBuffer());
                    }, 0);
                }
            },
            resetEvent: function(e) {
                el.inputmask.refreshValue = true;
                setTimeout(function() {
                    $el.trigger("setvalue");
                }, 0);
            }
        };
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            var inputmask = this || input.inputmask, inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
            function isTemplateMatch(ndx, charCodes) {
                var charCodeNdx = getMaskTemplate(true, 0, false).slice(ndx, seekNext(ndx)).join("").replace(/'/g, "").indexOf(charCodes);
                return charCodeNdx !== -1 && !isMask(ndx) && (getTest(ndx).match.nativeDef === charCodes.charAt(0) || getTest(ndx).match.fn === null && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0) || getTest(ndx).match.nativeDef === " " && (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) || getTest(ndx + 1).match.fn === null && getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)));
            }
            resetMaskSet();
            if (!strict && opts.autoUnmask !== true) {
                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                if (matches && matches.length > 0) {
                    inputValue.splice(0, matches.length * staticInput.length);
                    initialNdx = seekNext(initialNdx);
                }
            } else {
                initialNdx = seekNext(initialNdx);
            }
            if (initialNdx === -1) {
                getMaskSet().p = seekNext(initialNdx);
                initialNdx = 0;
            } else getMaskSet().p = initialNdx;
            inputmask.caretPos = {
                begin: initialNdx
            };
            $.each(inputValue, function(ndx, charCode) {
                if (charCode !== undefined) {
                    if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, true) && isValid(ndx, inputValue[ndx], true, undefined, undefined, true) === false) {
                        getMaskSet().p++;
                    } else {
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0);
                        charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, true);
                        if (!isTemplateMatch(initialNdx, charCodes)) {
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, inputmask.caretPos.begin);
                            if (result) {
                                initialNdx = inputmask.caretPos.begin + 1;
                                charCodes = "";
                            }
                        } else {
                            result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, lvp + 1);
                        }
                        if (result) {
                            writeBuffer(undefined, getBuffer(), result.forwardPosition, keypress, false);
                            inputmask.caretPos = {
                                begin: result.forwardPosition,
                                end: result.forwardPosition
                            };
                        }
                    }
                }
            });
            if (writeOut) writeBuffer(input, getBuffer(), result ? result.forwardPosition : undefined, initiatingEvent || new $.Event("checkval"), initiatingEvent && initiatingEvent.type === "input");
        }
        function unmaskedvalue(input) {
            if (input) {
                if (input.inputmask === undefined) {
                    return input.value;
                }
                if (input.inputmask && input.inputmask.refreshValue) {
                    EventHandlers.setValueEvent.call(input);
                }
            }
            var umValue = [], vps = getMaskSet().validPositions;
            for (var pndx in vps) {
                if (vps[pndx].match && vps[pndx].match.fn != null) {
                    umValue.push(vps[pndx].input);
                }
            }
            var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                if (isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
                    pos = el.inputmask._valueGet().length - pos;
                }
                return pos;
            }
            var range;
            if (begin !== undefined) {
                if ($.isArray(begin)) {
                    end = isRTL ? begin[0] : begin[1];
                    begin = isRTL ? begin[1] : begin[0];
                }
                if (begin.begin !== undefined) {
                    end = isRTL ? begin.begin : begin.end;
                    begin = isRTL ? begin.end : begin.begin;
                }
                if (typeof begin === "number") {
                    begin = notranslate ? begin : translatePosition(begin);
                    end = notranslate ? end : translatePosition(end);
                    end = typeof end == "number" ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
                    input.inputmask.caretPos = {
                        begin: begin,
                        end: end
                    };
                    if (input === document.activeElement) {
                        if ("selectionStart" in input) {
                            input.selectionStart = begin;
                            input.selectionEnd = end;
                        } else if (window.getSelection) {
                            range = document.createRange();
                            if (input.firstChild === undefined || input.firstChild === null) {
                                var textNode = document.createTextNode("");
                                input.appendChild(textNode);
                            }
                            range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
                            range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
                            range.collapse(true);
                            var sel = window.getSelection();
                            sel.removeAllRanges();
                            sel.addRange(range);
                        } else if (input.createTextRange) {
                            range = input.createTextRange();
                            range.collapse(true);
                            range.moveEnd("character", end);
                            range.moveStart("character", begin);
                            range.select();
                        }
                        renderColorMask(input, {
                            begin: begin,
                            end: end
                        });
                    }
                }
            } else {
                if ("selectionStart" in input) {
                    begin = input.selectionStart;
                    end = input.selectionEnd;
                } else if (window.getSelection) {
                    range = window.getSelection().getRangeAt(0);
                    if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
                        begin = range.startOffset;
                        end = range.endOffset;
                    }
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
                    end = begin + range.text.length;
                }
                return {
                    begin: notranslate ? begin : translatePosition(begin),
                    end: notranslate ? end : translatePosition(end)
                };
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            var buffer = getMaskTemplate(true, getLastValidPosition(), true, true), bl = buffer.length, pos, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined, testPos;
            for (pos = lvp + 1; pos < buffer.length; pos++) {
                testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                ndxIntlzr = testPos.locator.slice();
                positions[pos] = $.extend(true, {}, testPos);
            }
            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp; pos--) {
                testPos = positions[pos];
                if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null || testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")) && buffer[pos] === getPlaceholder(pos, testPos.match)) {
                    bl--;
                } else break;
            }
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : undefined
            } : bl;
        }
        function clearOptionalTail(buffer) {
            buffer.length = 0;
            var template = getMaskTemplate(true, 0, true, undefined, true), lmnt, validPos;
            while (lmnt = template.shift(), lmnt !== undefined) buffer.push(lmnt);
            return buffer;
        }
        function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if (opts.repeat === "*") return undefined;
            var complete = false, lrp = determineLastRequiredPosition(true), aml = seekPrevious(lrp.l);
            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = true;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate(i).match;
                    if (test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true || test.fn === null && buffer[i] !== getPlaceholder(i, test)) {
                        complete = false;
                        break;
                    }
                }
            }
            return complete;
        }
        function handleRemove(input, k, pos, strict, fromIsValid) {
            if (opts.numericInput || isRTL) {
                if (k === Inputmask.keyCode.BACKSPACE) {
                    k = Inputmask.keyCode.DELETE;
                } else if (k === Inputmask.keyCode.DELETE) {
                    k = Inputmask.keyCode.BACKSPACE;
                }
                if (isRTL) {
                    var pend = pos.end;
                    pos.end = pos.begin;
                    pos.begin = pend;
                }
            }
            if (k === Inputmask.keyCode.BACKSPACE && pos.end - pos.begin < 1) {
                pos.begin = seekPrevious(pos.begin);
                if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                    pos.begin--;
                }
            } else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
                pos.end = isMask(pos.end, true) && (getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint) ? pos.end + 1 : seekNext(pos.end) + 1;
                if (getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator) {
                    pos.end++;
                }
            }
            revalidateMask(pos);
            if (strict !== true && opts.keepStatic !== false || opts.regex !== null) {
                var result = alternate(true);
                if (result) {
                    var newPos = result.caret !== undefined ? result.caret : result.pos ? seekNext(result.pos.begin ? result.pos.begin : result.pos) : getLastValidPosition(-1, true);
                    if (k !== Inputmask.keyCode.DELETE || pos.begin > newPos) {
                        pos.begin == newPos;
                    }
                }
            }
            var lvp = getLastValidPosition(pos.begin, true);
            if (lvp < pos.begin || pos.begin === -1) {
                getMaskSet().p = seekNext(lvp);
            } else if (strict !== true) {
                getMaskSet().p = pos.begin;
                if (fromIsValid !== true) {
                    while (getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined) {
                        getMaskSet().p++;
                    }
                }
            }
        }
        function initializeColorMask(input) {
            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
            function findCaretPos(clientx) {
                var e = document.createElement("span"), caretPos;
                for (var style in computedStyle) {
                    if (isNaN(style) && style.indexOf("font") !== -1) {
                        e.style[style] = computedStyle[style];
                    }
                }
                e.style.textTransform = computedStyle.textTransform;
                e.style.letterSpacing = computedStyle.letterSpacing;
                e.style.position = "absolute";
                e.style.height = "auto";
                e.style.width = "auto";
                e.style.visibility = "hidden";
                e.style.whiteSpace = "nowrap";
                document.body.appendChild(e);
                var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                    e.innerHTML += inputText.charAt(caretPos) || "_";
                    if (e.offsetWidth >= clientx) {
                        var offset1 = clientx - previousWidth;
                        var offset2 = e.offsetWidth - clientx;
                        e.innerHTML = inputText.charAt(caretPos);
                        offset1 -= e.offsetWidth / 3;
                        caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                        break;
                    }
                    previousWidth = e.offsetWidth;
                }
                document.body.removeChild(e);
                return caretPos;
            }
            var template = document.createElement("div");
            template.style.width = computedStyle.width;
            template.style.textAlign = computedStyle.textAlign;
            colorMask = document.createElement("div");
            input.inputmask.colorMask = colorMask;
            colorMask.className = "im-colormask";
            input.parentNode.insertBefore(colorMask, input);
            input.parentNode.removeChild(input);
            colorMask.appendChild(input);
            colorMask.appendChild(template);
            input.style.left = template.offsetLeft + "px";
            $(colorMask).on("mouseleave", function(e) {
                return EventHandlers.mouseleaveEvent.call(input, [ e ]);
            });
            $(colorMask).on("mouseenter", function(e) {
                return EventHandlers.mouseenterEvent.call(input, [ e ]);
            });
            $(colorMask).on("click", function(e) {
                caret(input, findCaretPos(e.clientX));
                return EventHandlers.clickEvent.call(input, [ e ]);
            });
        }
        function renderColorMask(input, caretPos, clear) {
            var maskTemplate = [], isStatic = false, test, testPos, ndxIntlzr, pos = 0;
            function setEntry(entry) {
                if (entry === undefined) entry = "";
                if (!isStatic && (test.fn === null || testPos.input === undefined)) {
                    isStatic = true;
                    maskTemplate.push("<span class='im-static'>" + entry);
                } else if (isStatic && (test.fn !== null && testPos.input !== undefined || test.def === "")) {
                    isStatic = false;
                    var mtl = maskTemplate.length;
                    maskTemplate[mtl - 1] = maskTemplate[mtl - 1] + "</span>";
                    maskTemplate.push(entry);
                } else maskTemplate.push(entry);
            }
            function setCaret() {
                if (document.activeElement === input) {
                    maskTemplate.splice(caretPos.begin, 0, caretPos.begin === caretPos.end || caretPos.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                    maskTemplate.splice(caretPos.end + 1, 0, "</mark>");
                }
            }
            if (colorMask !== undefined) {
                var buffer = getBuffer();
                if (caretPos === undefined) {
                    caretPos = caret(input);
                } else if (caretPos.begin === undefined) {
                    caretPos = {
                        begin: caretPos,
                        end: caretPos
                    };
                }
                if (clear !== true) {
                    var lvp = getLastValidPosition();
                    do {
                        if (getMaskSet().validPositions[pos]) {
                            testPos = getMaskSet().validPositions[pos];
                            test = testPos.match;
                            ndxIntlzr = testPos.locator.slice();
                            setEntry(buffer[pos]);
                        } else {
                            testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
                            test = testPos.match;
                            ndxIntlzr = testPos.locator.slice();
                            if (opts.jitMasking === false || pos < lvp || typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos) {
                                setEntry(getPlaceholder(pos, test));
                            } else isStatic = false;
                        }
                        pos++;
                    } while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos || isStatic);
                    if (isStatic) setEntry();
                    setCaret();
                }
                var template = colorMask.getElementsByTagName("div")[0];
                template.innerHTML = maskTemplate.join("");
                input.inputmask.positionColorMask(input, template);
            }
        }
        function mask(elem) {
            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    var valueGet;
                    var valueSet;
                    function patchValhook(type) {
                        if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                return elem.value;
                            };
                            var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                elem.value = value;
                                return elem;
                            };
                            $.valHooks[type] = {
                                get: function(elem) {
                                    if (elem.inputmask) {
                                        if (elem.inputmask.opts.autoUnmask) {
                                            return elem.inputmask.unmaskedvalue();
                                        } else {
                                            var result = valhookGet(elem);
                                            return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
                                        }
                                    } else return valhookGet(elem);
                                },
                                set: function(elem, value) {
                                    var $elem = $(elem), result;
                                    result = valhookSet(elem, value);
                                    if (elem.inputmask) {
                                        $elem.trigger("setvalue", [ value ]);
                                    }
                                    return result;
                                },
                                inputmaskpatch: true
                            };
                        }
                    }
                    function getter() {
                        if (this.inputmask) {
                            return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== true ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "";
                        } else return valueGet.call(this);
                    }
                    function setter(value) {
                        valueSet.call(this, value);
                        if (this.inputmask) {
                            $(this).trigger("setvalue", [ value ]);
                        }
                    }
                    function installNativeValueSetFallback(npt) {
                        EventRuler.on(npt, "mouseenter", function(event) {
                            var $input = $(this), input = this, value = input.inputmask._valueGet();
                            if (value !== getBuffer().join("")) {
                                $input.trigger("setvalue");
                            }
                        });
                    }
                    if (!npt.inputmask.__valueGet) {
                        if (opts.noValuePatching !== true) {
                            if (Object.getOwnPropertyDescriptor) {
                                if (typeof Object.getPrototypeOf !== "function") {
                                    Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function(object) {
                                        return object.__proto__;
                                    } : function(object) {
                                        return object.constructor.prototype;
                                    };
                                }
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                if (valueProperty && valueProperty.get && valueProperty.set) {
                                    valueGet = valueProperty.get;
                                    valueSet = valueProperty.set;
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                } else if (npt.tagName !== "INPUT") {
                                    valueGet = function() {
                                        return this.textContent;
                                    };
                                    valueSet = function(value) {
                                        this.textContent = value;
                                    };
                                    Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: true
                                    });
                                }
                            } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
                                valueGet = npt.__lookupGetter__("value");
                                valueSet = npt.__lookupSetter__("value");
                                npt.__defineGetter__("value", getter);
                                npt.__defineSetter__("value", setter);
                            }
                            npt.inputmask.__valueGet = valueGet;
                            npt.inputmask.__valueSet = valueSet;
                        }
                        npt.inputmask._valueGet = function(overruleRTL) {
                            return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                        };
                        npt.inputmask._valueSet = function(value, overruleRTL) {
                            valueSet.call(this.el, value === null || value === undefined ? "" : overruleRTL !== true && isRTL ? value.split("").reverse().join("") : value);
                        };
                        if (valueGet === undefined) {
                            valueGet = function() {
                                return this.value;
                            };
                            valueSet = function(value) {
                                this.value = value;
                            };
                            patchValhook(npt.type);
                            installNativeValueSetFallback(npt);
                        }
                    }
                }
                var elementType = input.getAttribute("type");
                var isSupported = input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || input.tagName === "TEXTAREA";
                if (!isSupported) {
                    if (input.tagName === "INPUT") {
                        var el = document.createElement("input");
                        el.setAttribute("type", elementType);
                        isSupported = el.type === "text";
                        el = null;
                    } else isSupported = "partial";
                }
                if (isSupported !== false) {
                    patchValueProperty(input);
                } else input.inputmask = undefined;
                return isSupported;
            }
            EventRuler.off(elem);
            var isSupported = isElementTypeSupported(elem, opts);
            if (isSupported !== false) {
                el = elem;
                $el = $(el);
                originalPlaceholder = el.placeholder;
                maxLength = el !== undefined ? el.maxLength : undefined;
                if (maxLength === -1) maxLength = undefined;
                if (opts.colorMask === true) {
                    initializeColorMask(el);
                }
                if (mobile) {
                    if ("inputmode" in el) {
                        el.inputmode = opts.inputmode;
                        el.setAttribute("inputmode", opts.inputmode);
                    }
                    if (opts.disablePredictiveText === true) {
                        if ("autocorrect" in el) {
                            el.autocorrect = false;
                        } else {
                            if (opts.colorMask !== true) {
                                initializeColorMask(el);
                            }
                            el.type = "password";
                        }
                    }
                }
                if (isSupported === true) {
                    el.setAttribute("im-insert", opts.insertMode);
                    EventRuler.on(el, "submit", EventHandlers.submitEvent);
                    EventRuler.on(el, "reset", EventHandlers.resetEvent);
                    EventRuler.on(el, "blur", EventHandlers.blurEvent);
                    EventRuler.on(el, "focus", EventHandlers.focusEvent);
                    if (opts.colorMask !== true) {
                        EventRuler.on(el, "click", EventHandlers.clickEvent);
                        EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
                        EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
                    }
                    EventRuler.on(el, "paste", EventHandlers.pasteEvent);
                    EventRuler.on(el, "cut", EventHandlers.cutEvent);
                    EventRuler.on(el, "complete", opts.oncomplete);
                    EventRuler.on(el, "incomplete", opts.onincomplete);
                    EventRuler.on(el, "cleared", opts.oncleared);
                    if (!mobile && opts.inputEventOnly !== true) {
                        EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
                        EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
                    } else {
                        el.removeAttribute("maxLength");
                    }
                    EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
                    EventRuler.on(el, "beforeinput", EventHandlers.beforeInputEvent);
                }
                EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
                undoValue = getBufferTemplate().join("");
                if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(true), opts) || el.inputmask._valueGet(true) : el.inputmask._valueGet(true);
                    if (initialValue !== "") checkVal(el, true, false, initialValue.split(""));
                    var buffer = getBuffer().slice();
                    undoValue = buffer.join("");
                    if (isComplete(buffer) === false) {
                        if (opts.clearIncomplete) {
                            resetMaskSet();
                        }
                    }
                    if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
                        if (getLastValidPosition() === -1) {
                            buffer = [];
                        } else {
                            clearOptionalTail(buffer);
                        }
                    }
                    if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && document.activeElement === el || el.inputmask._valueGet(true) !== "") writeBuffer(el, buffer);
                    if (document.activeElement === el) {
                        caret(el, seekNext(getLastValidPosition()));
                    }
                }
            }
        }
        var valueBuffer;
        if (actionObj !== undefined) {
            switch (actionObj.action) {
              case "isComplete":
                el = actionObj.el;
                return isComplete(getBuffer());

              case "unmaskedvalue":
                if (el === undefined || actionObj.value !== undefined) {
                    valueBuffer = actionObj.value;
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split("");
                    checkVal.call(this, undefined, false, false, valueBuffer);
                    if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts);
                }
                return unmaskedvalue(el);

              case "mask":
                mask(el);
                break;

              case "format":
                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split("");
                checkVal.call(this, undefined, true, false, valueBuffer);
                if (actionObj.metadata) {
                    return {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, maskset, opts)
                    };
                }
                return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

              case "isValid":
                if (actionObj.value) {
                    valueBuffer = actionObj.value.split("");
                    checkVal.call(this, undefined, true, true, valueBuffer);
                } else {
                    actionObj.value = getBuffer().join("");
                }
                var buffer = getBuffer();
                var rl = determineLastRequiredPosition(), lmib = buffer.length - 1;
                for (;lmib > rl; lmib--) {
                    if (isMask(lmib)) break;
                }
                buffer.splice(rl, lmib + 1 - rl);
                return isComplete(buffer) && actionObj.value === getBuffer().join("");

              case "getemptymask":
                return getBufferTemplate().join("");

              case "remove":
                if (el && el.inputmask) {
                    $.data(el, "_inputmask_opts", null);
                    $el = $(el);
                    el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(true));
                    EventRuler.off(el);
                    if (el.inputmask.colorMask) {
                        colorMask = el.inputmask.colorMask;
                        colorMask.removeChild(el);
                        colorMask.parentNode.insertBefore(el, colorMask);
                        colorMask.parentNode.removeChild(colorMask);
                    }
                    var valueProperty;
                    if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                        valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
                        if (valueProperty) {
                            if (el.inputmask.__valueGet) {
                                Object.defineProperty(el, "value", {
                                    get: el.inputmask.__valueGet,
                                    set: el.inputmask.__valueSet,
                                    configurable: true
                                });
                            }
                        }
                    } else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
                        if (el.inputmask.__valueGet) {
                            el.__defineGetter__("value", el.inputmask.__valueGet);
                            el.__defineSetter__("value", el.inputmask.__valueSet);
                        }
                    }
                    el.inputmask = undefined;
                }
                return el;
                break;

              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                    var maskTarget = getMaskTemplate(true, 0, false).join("");
                    $.each(maskset.metadata, function(ndx, mtdt) {
                        if (mtdt.mask === maskTarget) {
                            maskTarget = mtdt;
                            return false;
                        }
                    });
                    return maskTarget;
                }
                return maskset.metadata;
            }
        }
    }
    return Inputmask;
});

/***/ }),

/***/ "./node_modules/inputmask/dist/inputmask/jquery.inputmask.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask/jquery.inputmask.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* jquery.inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.8
*/

(function(factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./inputmask */ "./node_modules/inputmask/dist/inputmask/inputmask.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function($, Inputmask) {
    if ($.fn.inputmask === undefined) {
        $.fn.inputmask = function(fn, options) {
            var nptmask, input = this[0];
            if (options === undefined) options = {};
            if (typeof fn === "string") {
                switch (fn) {
                  case "unmaskedvalue":
                    return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

                  case "remove":
                    return this.each(function() {
                        if (this.inputmask) this.inputmask.remove();
                    });

                  case "getemptymask":
                    return input && input.inputmask ? input.inputmask.getemptymask() : "";

                  case "hasMaskedValue":
                    return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;

                  case "isComplete":
                    return input && input.inputmask ? input.inputmask.isComplete() : true;

                  case "getmetadata":
                    return input && input.inputmask ? input.inputmask.getmetadata() : undefined;

                  case "setvalue":
                    Inputmask.setValue(input, options);
                    break;

                  case "option":
                    if (typeof options === "string") {
                        if (input && input.inputmask !== undefined) {
                            return input.inputmask.option(options);
                        }
                    } else {
                        return this.each(function() {
                            if (this.inputmask !== undefined) {
                                return this.inputmask.option(options);
                            }
                        });
                    }
                    break;

                  default:
                    options.alias = fn;
                    nptmask = new Inputmask(options);
                    return this.each(function() {
                        nptmask.mask(this);
                    });
                }
            } else if (Array.isArray(fn)) {
                options.alias = fn;
                nptmask = new Inputmask(options);
                return this.each(function() {
                    nptmask.mask(this);
                });
            } else if (typeof fn == "object") {
                nptmask = new Inputmask(fn);
                if (fn.mask === undefined && fn.alias === undefined) {
                    return this.each(function() {
                        if (this.inputmask !== undefined) {
                            return this.inputmask.option(fn);
                        } else nptmask.mask(this);
                    });
                } else {
                    return this.each(function() {
                        nptmask.mask(this);
                    });
                }
            } else if (fn === undefined) {
                return this.each(function() {
                    nptmask = new Inputmask(options);
                    nptmask.mask(this);
                });
            }
        };
    }
    return $.fn.inputmask;
});

/***/ }),

/***/ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery-mask-plugin/dist/jquery.mask.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                    el.data('mask-previus-value', el.val());
                    el.data('mask-previus-caret-pos', p.getCaret());
                    p.maskDigitPosMapOld = p.maskDigitPosMap;
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function(oldVal) {
                var newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                      caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                          var caretPos = caretPosNew;
                          caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                          caretPosNew -= maskDigitsBeforeCaret;
                          if (p.maskDigitPosMap[caretPosNew])  {
                            caretPosNew = caretPos;
                          }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret(),
                        oldVal = el.data('mask-previus-value') || '';

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                      p.setCaret(p.calculateCaretPosition(oldVal));
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
              var maskDiff = options.reverse ? newVal.length - valLen : 0;
              p.maskDigitPosMap = {};
              for (var i = 0; i < maskDigitPosArr.length; i++) {
                p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
              }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, __webpack_provided_window_dot_jQuery, window.Zepto));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery-validation/dist/additional-methods.js":
/*!*******************************************************************!*\
  !*** ./node_modules/jquery-validation/dist/additional-methods.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.19.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./jquery.validate */ "./node_modules/jquery-validation/dist/jquery.validate.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

/**
 * This is used in the United States to process payments, deposits,
 * or transfers using the Automated Clearing House (ACH) or Fedwire
 * systems. A very common use case would be to validate a form for
 * an ACH bill payment.
 */
$.validator.addMethod( "abaRoutingNumber", function( value ) {
	var checksum = 0;
	var tokens = value.split( "" );
	var length = tokens.length;

	// Length Check
	if ( length !== 9 ) {
		return false;
	}

	// Calc the checksum
	// https://en.wikipedia.org/wiki/ABA_routing_transit_number
	for ( var i = 0; i < length; i += 3 ) {
		checksum +=	parseInt( tokens[ i ], 10 )     * 3 +
					parseInt( tokens[ i + 1 ], 10 ) * 7 +
					parseInt( tokens[ i + 2 ], 10 );
	}

	// If not zero and divisible by 10 then valid
	if ( checksum !== 0 && checksum % 10 === 0 ) {
		return true;
	}

	return false;
}, "Please enter a valid routing number." );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;
	}

	// Can be either
	return control === control_digit || control === control_letter;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CNH number (Carteira Nacional de Habilitacao) is the License Driver number.
 * CNH numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cnhBR", function( value ) {

  // Removing special characters from value
  value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

  // Checking value to have 11 digits only
  if ( value.length !== 11 ) {
    return false;
  }

  var sum = 0, dsc = 0, firstChar,
		firstCN, secondCN, i, j, v;

  firstChar = value.charAt( 0 );

  if ( new Array( 12 ).join( firstChar ) === value ) {
    return false;
  }

  // Step 1 - using first Check Number:
  for ( i = 0, j = 9, v = 0; i < 9; ++i, --j ) {
    sum += +( value.charAt( i ) * j );
  }

  firstCN = sum % 11;
  if ( firstCN >= 10 ) {
    firstCN = 0;
    dsc = 2;
  }

  sum = 0;
  for ( i = 0, j = 1, v = 0; i < 9; ++i, ++j ) {
    sum += +( value.charAt( i ) * j );
  }

  secondCN = sum % 11;
  if ( secondCN >= 10 ) {
    secondCN = 0;
  } else {
    secondCN = secondCN - dsc;
  }

  return ( String( firstCN ).concat( secondCN ) === value.substr( -2 ) );

}, "Please specify a valid CNH number" );

/*
 * Brazillian value number (Cadastrado de Pessoas Juridica).
 * value numbers have 14 digits in total: 12 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cnpjBR", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	// Removing no number
	value = value.replace( /[^\d]+/g, "" );

	// Checking value to have 14 digits only
	if ( value.length !== 14 ) {
		return false;
	}

	// Elimina values invalidos conhecidos
	if ( value === "00000000000000" ||
		value === "11111111111111" ||
		value === "22222222222222" ||
		value === "33333333333333" ||
		value === "44444444444444" ||
		value === "55555555555555" ||
		value === "66666666666666" ||
		value === "77777777777777" ||
		value === "88888888888888" ||
		value === "99999999999999" ) {
		return false;
	}

	// Valida DVs
	var tamanho = ( value.length - 2 );
	var numeros = value.substring( 0, tamanho );
	var digitos = value.substring( tamanho );
	var soma = 0;
	var pos = tamanho - 7;

	for ( var i = tamanho; i >= 1; i-- ) {
		soma += numeros.charAt( tamanho - i ) * pos--;
		if ( pos < 2 ) {
			pos = 9;
		}
	}

	var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if ( resultado !== parseInt( digitos.charAt( 0 ), 10 ) ) {
		return false;
	}

	tamanho = tamanho + 1;
	numeros = value.substring( 0, tamanho );
	soma = 0;
	pos = tamanho - 7;

	for ( var il = tamanho; il >= 1; il-- ) {
		soma += numeros.charAt( tamanho - il ) * pos--;
		if ( pos < 2 ) {
			pos = 9;
		}
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if ( resultado !== parseInt( digitos.charAt( 1 ), 10 ) ) {
		return false;
	}

	return true;

}, "Please specify a CNPJ value number" );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// https://jqueryvalidation.org/creditcard-method/
// based on https://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// https://dev.ean.com/general-info/valid-card-types/
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && ( /^(5[12345])/.test( value ) || /^(2[234567])/.test( value ) ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

$.validator.addMethod( "greaterThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
        target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
            $( element ).valid();
        } );
    }

    return value > target.val();
}, "Please enter a greater value." );

$.validator.addMethod( "greaterThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-greaterThanEqual-blur" ).length ) {
        target.addClass( "validate-greaterThanEqual-blur" ).on( "blur.validate-greaterThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value >= target.val();
}, "Please enter a greater value." );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lessThan", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThan-blur" ).length ) {
        target.addClass( "validate-lessThan-blur" ).on( "blur.validate-lessThan", function() {
            $( element ).valid();
        } );
    }

    return value < target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lessThanEqual", function( value, element, param ) {
    var target = $( param );

    if ( this.settings.onfocusout && target.not( ".validate-lessThanEqual-blur" ).length ) {
        target.addClass( "validate-lessThanEqual-blur" ).on( "blur.validate-lessThanEqual", function() {
            $( element ).valid();
        } );
    }

    return value <= target.val();
}, "Please enter a lesser value." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

// Limit the number of files in a FileList.
$.validator.addMethod( "maxfiles", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length > param ) {
			return false;
		}
	}

	return true;
}, $.validator.format( "Please select no more than {0} files." ) );

// Limit the size of each individual file in a FileList.
$.validator.addMethod( "maxsize", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			for ( var i = 0; i < element.files.length; i++ ) {
				if ( element.files[ i ].size > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "File size must not exceed {0} bytes each." ) );

// Limit the size of all files in a FileList.
$.validator.addMethod( "maxsizetotal", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}

	if ( $( element ).attr( "type" ) === "file" ) {
		if ( element.files && element.files.length ) {
			var totalSize = 0;

			for ( var i = 0; i < element.files.length; i++ ) {
				totalSize += element.files[ i ].size;
				if ( totalSize > param ) {
					return false;
				}
			}
		}
	}

	return true;
}, $.validator.format( "Total size of all files must not exceed {0} bytes." ) );


$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

$.validator.addMethod( "mobileRU", function( phone_number, element ) {
	var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

$.validator.addMethod( "netmask", function( value, element ) {
    return this.optional( element ) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test( value );
}, "Please enter a valid netmask." );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 1 ) % 23 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

/*
 * Numer identyfikacji podatkowej ( NIP ) is the way tax identification used in Poland for companies
 */
$.validator.addMethod( "nipPL", function( value ) {
	"use strict";

	value = value.replace( /[^0-9]/g, "" );

	if ( value.length !== 10 ) {
		return false;
	}

	var arrSteps = [ 6, 5, 7, 2, 3, 4, 5, 6, 7 ];
	var intSum = 0;
	for ( var i = 0; i < 9; i++ ) {
		intSum += arrSteps[ i ] * value[ i ];
	}
	var int2 = intSum % 11;
	var intControlNr = ( int2 === 10 ) ? 0 : int2;

	return ( intControlNr === parseInt( value[ 9 ], 10 ) );
}, "Please specify a valid NIP number." );

/**
 * Created for project jquery-validation.
 * @Description Brazillian PIS or NIS number (Número de Identificação Social Pis ou Pasep) is the equivalent of a
 * Brazilian tax registration number NIS of PIS numbers have 11 digits in total: 10 numbers followed by 1 check numbers
 * that are being used for validation.
 * @copyright (c) 21/08/2018 13:14, Cleiton da Silva Mendonça
 * @author Cleiton da Silva Mendonça <cleiton.mendonca@gmail.com>
 * @link http://gitlab.com/csmendonca Gitlab of Cleiton da Silva Mendonça
 * @link http://github.com/csmendonca Github of Cleiton da Silva Mendonça
 */
$.validator.addMethod( "nisBR", function( value ) {
	var number;
	var cn;
	var sum = 0;
	var dv;
	var count;
	var multiplier;

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	//Get check number of value
	cn = parseInt( value.substring( 10, 11 ), 10 );

	//Get number with 10 digits of the value
	number = parseInt( value.substring( 0, 10 ), 10 );

	for ( count = 2; count < 12; count++ ) {
		multiplier = count;
		if ( count === 10 ) {
			multiplier = 2;
		}
		if ( count === 11 ) {
			multiplier = 3;
		}
		sum += ( ( number % 10 ) * multiplier );
		number = parseInt( number / 10, 10 );
	}
	dv = ( sum % 11 );

	if ( dv > 1 ) {
		dv = ( 11 - dv );
	} else {
		dv = 0;
	}

	if ( cn === dv ) {
		return true;
	} else {
		return false;
	}
}, "Please specify a valid NIS/PIS number" );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/**
 * Polish telephone numbers have 9 digits.
 *
 * Mobile phone numbers starts with following digits:
 * 45, 50, 51, 53, 57, 60, 66, 69, 72, 73, 78, 79, 88.
 *
 * Fixed-line numbers starts with area codes:
 * 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 29, 32, 33,
 * 34, 41, 42, 43, 44, 46, 48, 52, 54, 55, 56, 58, 59, 61,
 * 62, 63, 65, 67, 68, 71, 74, 75, 76, 77, 81, 82, 83, 84,
 * 85, 86, 87, 89, 91, 94, 95.
 *
 * Ministry of National Defence numbers and VoIP numbers starts with 26 and 39.
 *
 * Excludes intelligent networks (premium rate, shared cost, free phone numbers).
 *
 * Poland National Numbering Plan http://www.itu.int/oth/T02020000A8/en
 */
$.validator.addMethod( "phonePL", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	var regexp = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
	return this.optional( element ) || regexp.test( phone_number );
}, "Please specify a valid phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));

/***/ }),

/***/ "./node_modules/jquery-validation/dist/jquery.validate.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery-validation/dist/jquery.validate.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.19.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/microplugin/src/microplugin.js":
/*!*****************************************************!*\
  !*** ./node_modules/microplugin/src/microplugin.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/***/ }),

/***/ "./node_modules/selectize/dist/js/selectize.js":
/*!*****************************************************!*\
  !*** ./node_modules/selectize/dist/js/selectize.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * selectize.js (v0.12.6)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"),__webpack_require__(/*! sifter */ "./node_modules/sifter/sifter.js"),__webpack_require__(/*! microplugin */ "./node_modules/microplugin/src/microplugin.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			// Wrap matching part of text node with highlighting <span>, e.g.
			// Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} 
			// Recurse element node, looking for child text nodes to highlight, unless element 
			// is childless, <script>, <style>, or already highlighted: <span class="hightlight">
			else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && ( node.className !== 'highlight' || node.tagName !== 'SPAN' )) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with() and pass js strict mode
	 */
	$.fn.removeHighlight = function() {
		return this.find("span.highlight").each(function() {
			this.parentNode.firstChild.nodeName;
			var parent = this.parentNode;
			parent.replaceChild(this.firstChild, this);
			parent.normalize();
		}).end();
	};
	
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;
	
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
	
		if (!Selectize.$testInput) {
			Selectize.$testInput = $('<span />').css({
				position: 'absolute',
				top: -99999,
				left: -99999,
				width: 'auto',
				padding: 0,
				whiteSpace: 'pre'
			}).appendTo('body');
		}
	
		Selectize.$testInput.text(str);
	
		transferStyles($parent, Selectize.$testInput, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		return Selectize.$testInput.width();
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
	
		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};
	
			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					(keyCode >= 65 && keyCode <= 90)   || // a-z
					(keyCode >= 96 && keyCode <= 111)  || // numpad 0-9, numeric operators
					(keyCode >= 186 && keyCode <= 222) || // semicolon, equal, comma, dash, etc.
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var domToString = function(d) {
		var tmp = document.createElement('div');
	
		tmp.appendChild(d.cloneNode(true));
	
		return tmp.innerHTML;
	};
	
	var logError = function(message, options){
		if(!options) options = {};
		var component = "Selectize";
	
		console.error(component + ": " + message)
	
		if(options.explanation){
			// console.group is undefined in <IE11
			if(console.group) console.group();
			console.error(options.explanation);
			if(console.group) console.groupEnd();
		}
	}
	
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isBlurring       : false,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}
	
		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	
	if(typeof MicroPlugin !== "undefined"){
		MicroPlugin.mixin(Selectize);
	}else{
		logError("Dependency MicroPlugin is missing",
			{explanation:
				"Make sure you either: (1) are using the \"standalone\" "+
				"version of Selectize, or (2) require MicroPlugin before you "+
				"load Selectize."}
		);
	}
	
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;
			var inputId;
	
			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			if(inputId = $input.attr('id')) {
				$control_input.attr('id', inputId + '-selectized');
				$("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
			}
	
			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}
	
			$wrapper.css({
				width: $input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}
	
			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}
	
			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}
			$control_input[0].type = $input[0].type;
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter mousedown click', '[data-disabled]>[data-selectable]', function(e) { e.stopImmediatePropagation(); });
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};
	
			$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if ($input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
	
			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
	
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
	    // also necessary to reopen a dropdown that has been closed by
	    // closeAfterSelect
			if (!self.isFocused || !self.isOpen) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
	
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
				return;
			}
	
			// If a regex or string is included, this will split the pasted
			// input and create Items for each separate value
			if (self.settings.splitOn) {
	
				// Wait for pasted text to be recognized in value
				setTimeout(function() {
					var pastedText = self.$control_input.val();
					if(!pastedText.match(self.settings.splitOn)){ return }
	
					var splitInput = $.trim(pastedText).split(self.settings.splitOn);
					for (var i = 0, n = splitInput.length; i < n; i++) {
						self.createItem(splitInput[i]);
					}
				}, 0);
			}
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
	
						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
	
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadThrottle` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;
	
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!wasFocused) self.trigger('focus');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;
	
			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}
	
			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();
	
				// IE11 bug: element still marked as active
				dest && dest.focus && dest.focus();
	
				self.isBlurring = false;
				self.ignoreFocus = false;
				self.trigger('blur');
			};
	
			self.isBlurring = true;
			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				this.clear(silent);
				this.addItems(value, silent);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort,
				nesting     : settings.nesting
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
			groups_order = [];
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = document.createDocumentFragment();
						groups_order.push(optgroup);
					}
					groups[optgroup].appendChild(option_html);
				}
			}
	
			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}
	
			// render optgroup headers & join groups
			html = document.createDocumentFragment();
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = document.createDocumentFragment();
					html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
					html_children.appendChild(groups[optgroup]);
	
					html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: domToString(html_children),
						dom:  html_children
					})));
				} else {
					html.appendChild(groups[optgroup]);
				}
			}
	
			$dropdown_content.html(html);
	
			// highlight matching terms inline
			if (self.settings.highlight) {
				$dropdown_content.removeHighlight();
				if (results.query.length && results.tokens.length) {
					for (i = 0, n = results.tokens.length; i < n; i++) {
						highlight($dropdown_content, results.tokens[i].regex);
					}
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},
	
		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},
	
		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;
	
			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},
	
		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},
	
		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
			order_old = self.options[value].$order;
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);
	
			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];
	
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			var options = self.options;
			$.each(self.options, function(key, value) {
				if(self.items.indexOf(key) == -1) {
					delete options[key];
				}
			});
			self.options = self.sifter.items = options;
			self.lastQuery = null;
			self.trigger('option_clear');
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			this.buffer = document.createDocumentFragment();
	
			var childNodes = this.$control[0].childNodes;
			for (var i = 0; i < childNodes.length; i++) {
				this.buffer.appendChild(childNodes[i]);
			}
	
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
	
			var control = this.$control[0];
			control.insertBefore(this.buffer, control.firstChild);
	
			this.buffer = null;
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear(silent);
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else if (!self.isPending) {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
	
					if (!self.isPending) {
						self.updateOriginalInput({silent: silent});
					}
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;
	
			$item = (value instanceof $) ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');
	
			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};
	
			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}
	
			if (!self.canCreate(input)) {
				callback();
				return false;
			}
	
			self.lock();
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				this.addItem(this.items);
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			this.refreshValidityState();
			this.refreshClasses();
		},
	
		/**
		 * Update the `required` attribute of both input and control input.
		 *
		 * The `required` property needs to be activated on the control input
		 * for the error to be displayed at the right place. `required` also
		 * needs to be temporarily deactivated on the input since the input is
		 * hidden and can't show errors.
		 */
		refreshValidityState: function() {
			if (!this.isRequired) return false;
	
			var invalid = !this.items.length;
	
			this.isInvalid = invalid;
			this.$control_input.prop('required', invalid);
			this.$input.prop('required', !invalid);
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};
	
			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}
	
			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
	
				// Do not trigger blur while inside a blur event,
				// this fixes some weird tabbing behavior in FF and IE.
				// See #1164
				if (!self.isBlurring) {
					self.$control_input.blur(); // close keyboard on iOS
				}
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control[0].getBoundingClientRect().width,
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			var el = $el[0];
			var target = this.buffer || this.$control[0];
	
			if (caret === 0) {
				target.insertBefore(el, target.firstChild);
			} else {
				target.insertBefore(el, target.childNodes[caret]);
			}
	
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');
	
			if (--Selectize.count == 0 && Selectize.$testInput) {
				Selectize.$testInput.remove();
				Selectize.$testInput = undefined;
			}
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = $(self.settings.render[templateName].apply(this, [data, escape_html]));
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				if (!data[self.settings.disabledField]) {
					html.attr('data-selectable', '');
				}
			}
			else if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html.attr('data-group', id);
				if(data[self.settings.disabledField]) {
					html.attr('data-disabled', '');
				}
			}
			if (templateName === 'option' || templateName === 'item') {
				html.attr('data-value', value || '');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html[0];
			}
	
			return html[0];
		},
	
		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},
	
		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],
	
		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		disabledField: 'disabled',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		copyClassesToDropdown: true,
	
		/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_disabled       = settings.disabledField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;
	
			var data_raw = $input.attr(attr_data);
	
			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
			var optionsMap = {};
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				$option = $($option);
	
				var value = hash_key($option.val());
				if (!value && !settings.allowEmptyOption) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}
	
				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_disabled] = option[field_disabled] || $option.prop('disabled');
				option[field_optgroup] = option[field_optgroup] || group;
	
				optionsMap[value] = option;
				options.push(option);
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					optgroup[field_disabled] = $optgroup.prop('disabled');
					settings_element.optgroups.push(optgroup);
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}
	
			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};
	
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;
	
			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		options = $.extend({
				label     : '&times;',
				title     : 'Remove',
				className : 'remove',
				append    : true
			}, options);
	
			var singleClose = function(thisRef, options) {
	
				options.className = 'remove-single';
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					return $('<span>').append(html_container)
						.append(html_element);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var id = $(self.$input.context).attr('id');
							var selectizer = $('#'+id);
	
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							self.clear();
						});
	
					};
				})();
			};
	
			var multiClose = function(thisRef, options) {
	
				var self = thisRef;
				var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
				/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */
				var append = function(html_container, html_element) {
					var pos = html_container.search(/(<\/[^>]+>\s*)$/);
					return html_container.substring(0, pos) + html_element + html_container.substring(pos);
				};
	
				thisRef.setup = (function() {
					var original = self.setup;
					return function() {
						// override the item rendering method to add the button to each
						if (options.append) {
							var render_item = self.settings.render.item;
							self.settings.render.item = function(data) {
								return append(render_item.apply(thisRef, arguments), html);
							};
						}
	
						original.apply(thisRef, arguments);
	
						// add event listener
						thisRef.$control.on('click', '.' + options.className, function(e) {
							e.preventDefault();
							if (self.isLocked) return;
	
							var $item = $(e.currentTarget).parent();
							self.setActiveItem($item);
							if (self.deleteSelection()) {
								self.setCaret(self.items.length);
							}
						});
	
					};
				})();
			};
	
			if (this.settings.mode === 'single') {
				singleClose(this, options);
				return;
			} else {
				multiClose(this, options);
			}
	});
	
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});
	

	return Selectize;
}));

/***/ }),

/***/ "./node_modules/sifter/sifter.js":
/*!***************************************!*\
  !*** ./node_modules/sifter/sifter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count, nesting;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;
		nesting     = search.options.nesting;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(getattr(data, fields[0], nesting), token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(getattr(data, fields[i], nesting), token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return getattr(self.items[result.id], name, options.nesting);
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */
	var getattr = function(obj, name, nesting) {
	    if (!obj || !name) return;
	    if (!nesting) return obj[name];
	    var names = name.split(".");
	    while(names.length && (obj = obj[names.shift()]));
	    return obj;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
		'b': '[b␢βΒB฿𐌁ᛒ]',
		'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
		'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
		'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
		'f': '[fƑƒḞḟ]',
		'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
		'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
		'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
		'j': '[jȷĴĵɈɉʝɟʲ]',
		'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
		'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
		'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
		'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
		'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
		'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
		'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
		's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
		't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
		'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
		'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
		'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
		'x': '[xẌẍẊẋχ]',
		'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
		'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/forms */ "./resources/js/utils/forms.js");
/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/selector */ "./resources/js/utils/selector.js");
/* harmony import */ var _utils_numbermasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/numbermasks */ "./resources/js/utils/numbermasks.js");
/* harmony import */ var _blocks_steps_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/steps-form */ "./resources/js/blocks/steps-form.js");
/* harmony import */ var _blocks_select_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/select-content */ "./resources/js/blocks/select-content.js");








/***/ }),

/***/ "./resources/js/blocks/select-content.js":
/*!***********************************************!*\
  !*** ./resources/js/blocks/select-content.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var documentSelect = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select');
  var documentPassport = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-passport');
  var documentDrive = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-drive');
  documentSelect.on('change', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() === '1') {
      documentDrive.hide();
      documentPassport.show();
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() === '2') {
      documentDrive.show();
      documentPassport.hide();
    }
  });
});

/***/ }),

/***/ "./resources/js/blocks/steps-form.js":
/*!*******************************************!*\
  !*** ./resources/js/blocks/steps-form.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-btn-nex').on('click', function () {
    var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.form-applicant');
    form.validate({
      submitHandler: function submitHandler(form) {
        var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(form);
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function () {
          try {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.steps-form__block').hide();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.steps-form__success').css('display', 'flex');
          } catch (c) {}
        }).fail(function () {
          console.log('fail');
        });
      },
      rules: {
        surname: 'required',
        youname: 'required',
        patronymic: 'required',
        email: {
          emailField: true
        },
        phone: {
          phoneNumber: true
        },
        passportSeries: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '1';
          },
          minlength: 4
        },
        passportNumber: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '1';
          },
          minlength: 6
        },
        passportDay: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '1';
          }
        },
        passportMonth: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '1';
          }
        },
        passportYear: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '1';
          },
          minlength: 4
        },
        driveNumber: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '2';
          },
          minlength: 10
        },
        driveChapter: {
          required: function required() {
            return jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-document-select').val() === '2';
          },
          minlength: 4
        }
      },
      messages: {
        surname: '',
        youname: '',
        patronymic: '',
        email: '',
        phone: '',
        passportSeries: '',
        passportNumber: '',
        passportDay: '',
        passportMonth: '',
        passportYear: '',
        driveNumber: '',
        driveChapter: ''
      }
    });

    if (form.valid() === true) {
      var currentStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.steps-form__block');
      var nextStep = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.steps-form__block').next();
      nextStep.removeClass('steps-form__block--disabled steps-form__block--success');
      currentStep.addClass('steps-form__block--success');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-checkbox-form').on('click', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-checkbox-form:checked').length > 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-btn-form').prop('disabled', false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-btn-form').prop('disabled', true);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-edit-step-one').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.steps-form__block').addClass('steps-form__block--disabled');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.steps-form__block').removeClass('steps-form__block--disabled steps-form__block--success');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-edit-step-two').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.step-form__block--three').addClass('steps-form__block--disabled');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.steps-form__block').removeClass('steps-form__block--success');
  });
});

/***/ }),

/***/ "./resources/js/utils/forms.js":
/*!*************************************!*\
  !*** ./resources/js/utils/forms.js ***!
  \*************************************/
/*! exports provided: isEmail, isTrueEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrueEmail", function() { return isTrueEmail; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask/dist/inputmask/jquery.inputmask */ "./node_modules/inputmask/dist/inputmask/jquery.inputmask.js");
/* harmony import */ var inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-validation/dist/additional-methods */ "./node_modules/jquery-validation/dist/additional-methods.js");
/* harmony import */ var jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_dist_additional_methods__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_phonemask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/phonemask.js */ "./resources/js/vendor/phonemask.js");
/* harmony import */ var _vendor_fiomask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/fiomask.js */ "./resources/js/vendor/fiomask.js");







jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.mask = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.inputmask;
Object(_vendor_phonemask_js__WEBPACK_IMPORTED_MODULE_5__["bind_phone_mask"])('form input[name="phone"]');
Object(_vendor_fiomask_js__WEBPACK_IMPORTED_MODULE_6__["bind_fio_mask"])('form .js-input-fio');
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.validator.addMethod('phoneNumber', function (value, element) {
  return Object(_vendor_phonemask_js__WEBPACK_IMPORTED_MODULE_5__["validate_phone"])(value);
}, 'Введите существующий номер.');
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.validator.addMethod('emailField', function (value, element) {
  return isTrueEmail(value);
}, 'Введите существующий email.');

jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.clearValidation = function () {
  var v = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).validate();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('[name]', this).each(function () {
    v.successList.push(this);
    v.showErrors();
  });
  v.resetForm();
  v.reset();
};

var isEmail = function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
var isTrueEmail = function isTrueEmail(email) {
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return jquery__WEBPACK_IMPORTED_MODULE_1___default.a.trim(email).match(pattern) ? true : false;
};

/***/ }),

/***/ "./resources/js/utils/numbermasks.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/numbermasks.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-passport-series').mask('0000');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-passport-number').mask('000000');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-passport-day').mask('00');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-passport-month').mask('00');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-passport-year').mask('0000');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-drive-number').mask('0000000000');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-drive-chapter').mask('0000');
});

/***/ }),

/***/ "./resources/js/utils/selector.js":
/*!****************************************!*\
  !*** ./resources/js/utils/selector.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selectize */ "./node_modules/selectize/dist/js/selectize.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('select').selectize();
});

/***/ }),

/***/ "./resources/js/vendor/fiomask.js":
/*!****************************************!*\
  !*** ./resources/js/vendor/fiomask.js ***!
  \****************************************/
/*! exports provided: bind_fio_mask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind_fio_mask", function() { return bind_fio_mask; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



function bind_fio_mask(inputEl) {
  var regexMask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[^a-zA-Zа-яА-ЯёЁ \-]/g;
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(inputEl).on('input', function () {
    var regexp = regexMask;

    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val().match(regexp)) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val().replace(regexp, ''));
    }
  });
}

/***/ }),

/***/ "./resources/js/vendor/phonemask.js":
/*!******************************************!*\
  !*** ./resources/js/vendor/phonemask.js ***!
  \******************************************/
/*! exports provided: bind_phone_mask, validate_phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind_phone_mask", function() { return bind_phone_mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_phone", function() { return validate_phone; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask/dist/inputmask/jquery.inputmask */ "./node_modules/inputmask/dist/inputmask/jquery.inputmask.js");
/* harmony import */ var inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_inputmask_jquery_inputmask__WEBPACK_IMPORTED_MODULE_2__);



function bind_phone_mask(inputEl, regexMask, placeholder) {
  if (regexMask == null) {
    regexMask = '^\\+7 \\([3489]\\d\\d\\) \\d\\d\\d \\d\\d \\d\\d$';
  }

  if (placeholder == null) {
    placeholder = '+7 (___) ___ __ __';
  }

  var $input = jquery__WEBPACK_IMPORTED_MODULE_1___default()(inputEl);
  $input.inputmask({
    regex: regexMask,
    placeholder: placeholder,
    postValidation: function postValidation(buffer, pos, currentResult, opts) {
      var nums = buffer.join('').replace(/[^0-9]+/g, '');
      var hasSevenNumbersInARow = /(\d)\1{6}/g.test(nums);
      return !hasSevenNumbersInARow;
    }
  });
  $input.on('input', function (event) {
    var val = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val();

    if (val.replace(/[^0-9]+/g, '') === '789') {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val('79');
    }
  });
}
function validate_phone(value, regex) {
  if (value == null) {
    value = '';
  }

  if (regex == null) {
    regex = /^\+7 \([3489]\d\d\) \d\d\d \d\d \d\d$/g;
  }

  var nums = value.replace(/[^0-9]+/g, '');
  return regex.test(value) && !/(\d)\1{6}/g.test(nums);
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/administrator/projects/gos-test/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/administrator/projects/gos-test/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });