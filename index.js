/*! v5.3.0 - 2019-05-08T20:26:17.193Z */
APP_VERSION="5.3.0";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([275,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Symbol) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _availity_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(270);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _availity_reactstrap_validation_select_resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _components_Agreement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(268);
/* harmony import */ var _stores_spaceStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(269);
var _jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/sso/areas/SsoForm.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      customerId = _useState2[0],
      setCustomerId = _useState2[1];

  var _useSpace = Object(_stores_spaceStore__WEBPACK_IMPORTED_MODULE_6__[/* useSpace */ "a"])(),
      space = _useSpace.space;

  console.log("Space:", space);

  var onCancel = function onCancel() {
    return window.history.back();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_availity_page_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    appName: "Single Sign-On",
    spaceId: "48C607A70B5A46A3864A34E2BDDDEA04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__["AvForm"], {
    onValidSubmit: function onValidSubmit() {
      console.log("valid submit");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_availity_reactstrap_validation_select_resources__WEBPACK_IMPORTED_MODULE_4__[/* AvOrganizationSelect */ "a"], {
    label: "Select and Organization",
    onChange: function onChange(e) {
      return setCustomerId(e.customerId);
    },
    name: "organization",
    validate: {
      required: {
        value: true,
        errorMessage: 'This field is required'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_availity_reactstrap_validation_select_resources__WEBPACK_IMPORTED_MODULE_4__[/* AvProviderSelect */ "b"], {
    label: "Select your Provider",
    name: "provider",
    customerId: customerId,
    requiredParams: ['customerId'],
    resetParams: ['customerId'],
    watchParams: ['customerId'],
    validate: {
      required: {
        value: true,
        errorMessage: 'This field is required'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Agreement__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "form-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "cancel-button",
    onClick: onCancel,
    color: "default",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    id: "submit-button",
    "aria-describedby": "sso-desc",
    type: "submit",
    color: "success",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Submit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    className: "sr-only",
    id: "sso-desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Signing in will redirect you to your payer space in a new tab.")));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var _jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/sso/components/Agreement.js";




var Agreement = function Agreement() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "disclaimer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "I have fully read this agreement and understand that I am entering into a legally binding agreement and that my organization is bound by the terms and conditions contained therein. I attest and certify that I am the Primary Controlling Authority for the organization named herein and that I possess the necessary legal authority to bind this organization. I further attest and certify my organization&quote;s designation as a Covered Entity under", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
    title: "Health Insurance Portability and Accountability Act",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "HIPAA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvGroup"], {
    check: true,
    className: "custom-control custom-checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvInput"], {
    id: "agreement",
    name: "request.acceptTerms",
    type: "checkbox",
    className: "custom-control-input",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    for: "agreement",
    className: "custom-control-label",
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "I agree to the terms and conditions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_1__["AvFeedback"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "You must agree to terms")));
};

/* harmony default export */ __webpack_exports__["a"] = (Agreement);

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* unused harmony export SpaceContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useSpace; });
/* harmony import */ var _Users_kgray_Workspaces_availity_availity_workflow_packages_example_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _Users_kgray_Workspaces_availity_availity_workflow_packages_example_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kgray_Workspaces_availity_availity_workflow_packages_example_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _availity_api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);


var _class, _descriptor, _descriptor2, _temp;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }





var SpaceStore = (_class = (_temp = function SpaceStore() {
  var _this = this;

  _classCallCheck(this, SpaceStore);

  _initializerDefineProperty(this, "space", _descriptor, this);

  _initializerDefineProperty(this, "error", _descriptor2, this);

  this.fetchSpace =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _Users_kgray_Workspaces_availity_availity_workflow_packages_example_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(spaceId) {
      var response;
      return _Users_kgray_Workspaces_availity_availity_workflow_packages_example_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _availity_api_axios__WEBPACK_IMPORTED_MODULE_3__["avSlotmachineApi"].query(spaceQuery(spaceId));

            case 2:
              response = _context.sent;
              _this.space = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(response, 'data.space.space');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "space", [mobx__WEBPACK_IMPORTED_MODULE_2__[/* observable */ "g"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "error", [mobx__WEBPACK_IMPORTED_MODULE_2__[/* observable */ "g"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
})), _class);
var SpaceContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(new SpaceStore());
var useSpace = function useSpace(spaceId) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(SpaceContext),
      space = _useContext.space,
      fetchSpace = _useContext.fetchSpace,
      rest = _objectWithoutProperties(_useContext, ["space", "fetchSpace"]);

  if (!space) {
    fetchSpace(spaceId);
  }

  return _objectSpread({
    space: space
  }, rest);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/react-dom/index.js
var react_dom = __webpack_require__(19);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/@reach/router/es/index.js
var es = __webpack_require__(41);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/availity-uikit/scss/_bootstrap.scss
var _bootstrap = __webpack_require__(309);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/react-block-ui/style.css
var style = __webpack_require__(310);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/hash-source/src/dist/createHashSource.js
var createHashSource = __webpack_require__(252);
var createHashSource_default = /*#__PURE__*/__webpack_require__.n(createHashSource);

// CONCATENATED MODULE: ./hashHistory.js


var source = createHashSource_default()();
var hashHistory = Object(es["c" /* createHistory */])(source);
/* harmony default export */ var hashHistory_0 = (hashHistory);
// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(18);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/availity-reactstrap-validation/lib/index.js
var lib = __webpack_require__(7);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/reactstrap/dist/reactstrap.es.js
var reactstrap_es = __webpack_require__(3);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/mobx-react-lite/dist/index.module.js
var index_module = __webpack_require__(50);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/lodash.set/index.js
var lodash_set = __webpack_require__(115);
var lodash_set_default = /*#__PURE__*/__webpack_require__.n(lodash_set);

// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(65);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// CONCATENATED MODULE: ./templates/authorizations/stores/appStore.js
var _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }




var appStore_AppStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function AppStore(state) {
    _classCallCheck(this, AppStore);

    _initializerDefineProperty(this, "setSelectValue", _descriptor, this);

    _initializerDefineProperty(this, "setValue", _descriptor2, this);

    _initializerDefineProperty(this, "toggle", _descriptor3, this);

    this.state = state;
  }

  _createClass(AppStore, [{
    key: "isProviderDisabled",
    get: function get() {
      return lodash_get_default()(this, 'state.request.organization.customerId') === null;
    } // react-select doesn't return the event so we pass additional
    // argument to event handler:
    //  - https://github.com/JedWatson/react-select/issues/1631
    //  - https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers

  }]);

  return AppStore;
}(), _temp), (_applyDecoratedDescriptor(_class.prototype, "isProviderDisabled", [mobx_module["c" /* computed */]], Object.getOwnPropertyDescriptor(_class.prototype, "isProviderDisabled"), _class.prototype), _descriptor = _applyDecoratedDescriptor(_class.prototype, "setSelectValue", [mobx_module["b" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return function (event, name) {
      if (name && event) {
        lodash_set_default()(_this.state, name, event);
      }
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "setValue", [mobx_module["b" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (_ref) {
      var _ref$target = _ref.target,
          target = _ref$target === void 0 ? {} : _ref$target;
      var name = target.name,
          value = target.value;

      if (name !== undefined && value !== undefined) {
        lodash_set_default()(_this2.state, name, value);
      }
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "toggle", [mobx_module["b" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (_ref2) {
      var _ref2$target = _ref2.target,
          target = _ref2$target === void 0 ? {} : _ref2$target;
      var name = target.name,
          checked = target.checked;

      if (name !== undefined && checked !== undefined) {
        lodash_set_default()(_this3.state, name, checked);
      }
    };
  }
})), _class);

// CONCATENATED MODULE: ./templates/authorizations/stores/stateStore.js
var stateStore_class;

function stateStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stateStore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function stateStore_createClass(Constructor, protoProps, staticProps) { if (protoProps) stateStore_defineProperties(Constructor.prototype, protoProps); if (staticProps) stateStore_defineProperties(Constructor, staticProps); return Constructor; }

function stateStore_applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }


var emptyState = {
  request: {
    organization: {
      customerId: null
    },
    provider: null,
    memberId: null,
    acceptTerms: false
  }
};
var stateStore_StateStore = (stateStore_class =
/*#__PURE__*/
function () {
  function StateStore() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    stateStore_classCallCheck(this, StateStore);

    Object(mobx_module["e" /* extendObservable */])(this, emptyState, state);
  }

  stateStore_createClass(StateStore, [{
    key: "reset",
    value: function reset() {
      Object(mobx_module["h" /* set */])(this, emptyState);
    }
  }]);

  return StateStore;
}(), (stateStore_applyDecoratedDescriptor(stateStore_class.prototype, "reset", [mobx_module["b" /* action */]], Object.getOwnPropertyDescriptor(stateStore_class.prototype, "reset"), stateStore_class.prototype)), stateStore_class);
/* harmony default export */ var stateStore = (new stateStore_StateStore());
// CONCATENATED MODULE: ./templates/authorizations/stores/index.js



var appStore = new appStore_AppStore(stateStore);
var AppStoreContext = Object(react["createContext"])(appStore);
var StateStoreContext = Object(react["createContext"])(stateStore);

var stores_useStateStore = function useStateStore() {
  return Object(react["useContext"])(StateStoreContext);
};

var stores_useAppStore = function useAppStore() {
  return Object(react["useContext"])(AppStoreContext);
};


// CONCATENATED MODULE: ./templates/authorizations/Request/components/Agreement.js
var _jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Request/components/Agreement.js";





/* harmony default export */ var Agreement = (Object(index_module["a" /* observer */])(function () {
  var _useStateStore = stores_useStateStore(),
      acceptTerms = _useStateStore.acceptTerms;

  var _useAppStore = stores_useAppStore(),
      toggle = _useAppStore.toggle;

  return react_default.a.createElement("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react_default.a.createElement("div", {
    className: "disclaimer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "I have fully read this agreement and understand that I am entering into a legally binding agreement and that my organization is bound by the terms and conditions contained therein. I attest and certify that I am the Primary Controlling Authority for the organization named herein and that I possess the necessary legal authority to bind this organization. I further attest and certify my organization&quote;s designation as a Covered Entity under", react_default.a.createElement("abbr", {
    title: "Health Insurance Portability and Accountability Act",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "HIPAA")), react_default.a.createElement(lib["AvGroup"], {
    check: true,
    className: "custom-control custom-checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react_default.a.createElement(lib["AvInput"], {
    id: "agreement",
    name: "request.acceptTerms",
    type: "checkbox",
    className: "custom-control-input",
    checked: acceptTerms,
    onChange: toggle,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react_default.a.createElement(reactstrap_es["Label"], {
    for: "agreement",
    className: "custom-control-label",
    check: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "I agree to the terms and conditions"), react_default.a.createElement(lib["AvFeedback"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "You must agree to terms")));
}));
// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/@availity/reactstrap-validation-date/index.js + 4 modules
var reactstrap_validation_date = __webpack_require__(271);

// CONCATENATED MODULE: ./templates/authorizations/Request/components/Patient.js
var Patient_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Request/components/Patient.js";






/* harmony default export */ var Patient = (Object(index_module["a" /* observer */])(function () {
  var _useStateStore = stores_useStateStore(),
      memberId = _useStateStore.request.memberId;

  var _useAppStore = stores_useAppStore(),
      onChange = _useAppStore.onChange;

  return react_default.a.createElement("fieldset", {
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react_default.a.createElement("legend", {
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Member"), react_default.a.createElement(reactstrap_es["Label"], {
    id: "memberid-help",
    for: "memberID",
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Member ID", react_default.a.createElement("span", {
    className: "inline-help",
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "What's this?")), react_default.a.createElement(reactstrap_es["UncontrolledTooltip"], {
    target: "memberid-help",
    placement: "top",
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Also known as subscriber ID or member number"), react_default.a.createElement(lib["AvField"], {
    name: "memberID",
    value: memberId,
    onChange: onChange,
    validate: {
      pattern: {
        value: '^[0-9]*$',
        errorMessage: 'Must be a number'
      },
      minLength: {
        value: 5,
        errorMessage: '5 Character Minimum'
      }
    },
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react_default.a.createElement(reactstrap_validation_date["a" /* AvDateField */], {
    name: "dob",
    label: "Date of Birth",
    validate: {
      date: {
        format: 'MM/DD/YYYY'
      }
    },
    required: true,
    __source: {
      fileName: Patient_jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}));
// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/@availity/reactstrap-validation-select/resources.js + 3 modules
var resources = __webpack_require__(76);

// CONCATENATED MODULE: ./templates/authorizations/Request/components/Provider.js
var Provider_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Request/components/Provider.js";




/* harmony default export */ var Provider = (Object(index_module["a" /* observer */])(function () {
  var _useStateStore = stores_useStateStore(),
      _useStateStore$reques = _useStateStore.request,
      organization = _useStateStore$reques.organization,
      provider = _useStateStore$reques.provider;

  var _useAppStore = stores_useAppStore(),
      setSelectValue = _useAppStore.setSelectValue,
      isProviderDisabled = _useAppStore.isProviderDisabled;

  var customerId = organization.customerId;
  return react_default.a.createElement("fieldset", {
    __source: {
      fileName: Provider_jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react_default.a.createElement("legend", {
    __source: {
      fileName: Provider_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Provider"), react_default.a.createElement(resources["a" /* AvOrganizationSelect */], {
    name: "request.organization",
    label: "Select a Organization",
    value: organization,
    onChange: function onChange(e) {
      return setSelectValue(e, 'request.organization');
    },
    required: true,
    __source: {
      fileName: Provider_jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react_default.a.createElement(resources["b" /* AvProviderSelect */], {
    name: "request.provider",
    customerId: customerId,
    value: provider,
    requiredParams: ['customerId'],
    watchParams: ['customerId'],
    onChange: function onChange(e) {
      return setSelectValue(e, 'request.provider');
    },
    label: "Select a provider",
    isDisabled: isProviderDisabled,
    required: true,
    __source: {
      fileName: Provider_jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}));
// CONCATENATED MODULE: ./templates/authorizations/Request/components/index.js




// CONCATENATED MODULE: ./templates/authorizations/components/Footer.js
var Footer_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/components/Footer.js";

/* harmony default export */ var Footer = (function () {
  return react_default.a.createElement("p", {
    className: "text-center mt-3",
    __source: {
      fileName: Footer_jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Made with ", react_default.a.createElement("i", {
    className: "icon icon-heart text-danger",
    __source: {
      fileName: Footer_jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), " by ", react_default.a.createElement("a", {
    href: "http://www.availity.com",
    __source: {
      fileName: Footer_jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Availity"), " 2018");
});
// EXTERNAL MODULE: /Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/node_modules/@availity/breadcrumbs/index.js + 1 modules
var breadcrumbs = __webpack_require__(114);

// CONCATENATED MODULE: ./templates/authorizations/components/Header.js
var Header_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/components/Header.js";


/* harmony default export */ var Header = (function () {
  return react_default.a.createElement("div", {
    __source: {
      fileName: Header_jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react_default.a.createElement(breadcrumbs["a" /* default */], {
    active: "My Healthcare App",
    __source: {
      fileName: Header_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react_default.a.createElement("h2", {
    className: "page-header mt-3",
    __source: {
      fileName: Header_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react_default.a.createElement("div", {
    className: "page-header-title",
    __source: {
      fileName: Header_jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react_default.a.createElement("span", {
    className: "app-icon app-icon-blue",
    __source: {
      fileName: Header_jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "ar"), " AR")));
});
// CONCATENATED MODULE: ./templates/authorizations/components/index.js



// CONCATENATED MODULE: ./templates/authorizations/Request/index.js
var Request_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Request/index.js";






var Request_AuthorizationsRequest = function AuthorizationsRequest(_ref) {
  var navigate = _ref.navigate;

  var submit = function submit() {
    navigate('/authorizations/response');
  };

  return react_default.a.createElement("div", {
    className: "container-sm",
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react_default.a.createElement(Header, {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react_default.a.createElement(lib["AvForm"], {
    onValidSubmit: submit,
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["Card"], {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["CardBody"], {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react_default.a.createElement(Provider, {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react_default.a.createElement(Patient, {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react_default.a.createElement(Agreement, {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react_default.a.createElement("hr", {
    className: "divider",
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react_default.a.createElement("div", {
    className: "form-controls form-controls-card",
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["Button"], {
    type: "submit",
    className: "btn btn-default",
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Authorize"))))), react_default.a.createElement(Footer, {
    __source: {
      fileName: Request_jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

/* harmony default export */ var Request = (Request_AuthorizationsRequest);
// CONCATENATED MODULE: ./templates/authorizations/Response/components/Status.js
var Status_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Response/components/Status.js";


/* harmony default export */ var Status = (function () {
  return react_default.a.createElement(reactstrap_es["Row"], {
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Status"), react_default.a.createElement("p", {
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "good")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Diagnosis Version"), react_default.a.createElement("p", {
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "28347")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Request Type"), react_default.a.createElement("p", {
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "boom")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Payer"), react_default.a.createElement("p", {
    __source: {
      fileName: Status_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Acme Health")));
});
// CONCATENATED MODULE: ./templates/authorizations/Response/components/Patient.js
var components_Patient_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Response/components/Patient.js";


/* harmony default export */ var components_Patient = (function () {
  return react_default.a.createElement(reactstrap_es["Row"], {
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Certification Number"), react_default.a.createElement("p", {
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "383837")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Patient Name"), react_default.a.createElement("p", {
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Jane Smith")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Patient Date of Birth"), react_default.a.createElement("p", {
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "10/10/2011")), react_default.a.createElement(reactstrap_es["Col"], {
    sm: "3",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react_default.a.createElement("h5", {
    className: "text-label",
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Member ID"), react_default.a.createElement("p", {
    __source: {
      fileName: components_Patient_jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "1234343")));
});
// CONCATENATED MODULE: ./templates/authorizations/Response/components/Transaction.js
var Transaction_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Response/components/Transaction.js";




/* harmony default export */ var Transaction = (Object(index_module["a" /* observer */])(function () {
  var _useStateStore = stores_useStateStore(),
      customerId = _useStateStore.request.organization.customerId;

  return react_default.a.createElement(reactstrap_es["CardBody"], {
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react_default.a.createElement("div", {
    className: "card-header-secondary",
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react_default.a.createElement("small", {
    className: "text-label text-label-inline",
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Transaction ID"), react_default.a.createElement(reactstrap_es["Badge"], {
    color: "info",
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "236316981"), react_default.a.createElement("small", {
    className: "text-label text-label-inline",
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Customer ID"), react_default.a.createElement(reactstrap_es["Badge"], {
    color: "info",
    __source: {
      fileName: Transaction_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, customerId)));
}));
// CONCATENATED MODULE: ./templates/authorizations/Response/components/index.js




// CONCATENATED MODULE: ./templates/authorizations/Response/index.js
var Response_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/Response/index.js";




/* harmony default export */ var Response = (function () {
  return react_default.a.createElement("div", {
    className: "container-sm",
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react_default.a.createElement(Header, {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react_default.a.createElement(Transaction, {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react_default.a.createElement(reactstrap_es["Card"], {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react_default.a.createElement(reactstrap_es["CardBody"], {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react_default.a.createElement(components_Patient, {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react_default.a.createElement(Status, {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), react_default.a.createElement(Footer, {
    __source: {
      fileName: Response_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
});
// CONCATENATED MODULE: ./templates/authorizations/App.js
var App_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/authorizations/App.js";





Object(mobx_module["d" /* configure */])({
  enforceActions: 'observed'
});

var App_App = function App() {
  return react_default.a.createElement(es["b" /* Router */], {
    style: {
      height: '100%'
    },
    primary: false,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react_default.a.createElement(Request, {
    path: "/",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react_default.a.createElement(Response, {
    path: "/response",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};


/* harmony default export */ var authorizations_App = (App_App);
// EXTERNAL MODULE: ./templates/sso/areas/SsoForm.js
var SsoForm = __webpack_require__(261);

// CONCATENATED MODULE: ./templates/sso/App.js
var sso_App_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/templates/sso/App.js";



/* harmony default export */ var sso_App = (function () {
  return react_default.a.createElement(es["b" /* Router */], {
    __source: {
      fileName: sso_App_jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react_default.a.createElement(SsoForm["a" /* default */], {
    path: "/",
    __source: {
      fileName: sso_App_jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
});
// CONCATENATED MODULE: ./App.js
var App_jsxFileName_0 = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/App.js";




/* harmony default export */ var App_0 = (function () {
  return react_default.a.createElement(es["b" /* Router */], {
    __source: {
      fileName: App_jsxFileName_0,
      lineNumber: 7
    },
    __self: this
  }, react_default.a.createElement(Request, {
    exact: true,
    path: "/authorizations",
    __source: {
      fileName: App_jsxFileName_0,
      lineNumber: 8
    },
    __self: this
  }), react_default.a.createElement(Response, {
    exact: true,
    path: "/authorizations/response",
    __source: {
      fileName: App_jsxFileName_0,
      lineNumber: 9
    },
    __self: this
  }), react_default.a.createElement(sso_App, {
    path: "/sso",
    __source: {
      fileName: App_jsxFileName_0,
      lineNumber: 10
    },
    __self: this
  }));
});
// CONCATENATED MODULE: ./index.js
var index_jsxFileName = "/Users/kgray/Workspaces/availity/availity-workflow/packages/example-react/project/app/index.js";







Object(react_dom["render"])(react_default.a.createElement(es["a" /* LocationProvider */], {
  history: hashHistory_0,
  __source: {
    fileName: index_jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react_default.a.createElement(App_0, {
  __source: {
    fileName: index_jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=index.js.map