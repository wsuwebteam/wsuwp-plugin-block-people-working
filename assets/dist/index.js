(window["webpackJsonp_wsuwp_plugin_block_people_working"] = window["webpackJsonp_wsuwp_plugin_block_people_working"] || []).push([["style-index"],{

/***/ "./assets/src/style.scss":
/*!*******************************!*\
  !*** ./assets/src/style.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"index": 0
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
/******/ 	var jsonpArray = window["webpackJsonp_wsuwp_plugin_block_people_working"] = window["webpackJsonp_wsuwp_plugin_block_people_working"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/edit.js":
/*!****************************!*\
  !*** ./assets/src/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./assets/src/editor.scss");

const {
  __
} = wp.i18n;
const {
  useBlockProps,
  InspectorControls
} = wp.blockEditor;
const {
  TextControl,
  SelectControl,
  PanelBody,
  PanelRow
} = wp.components;


function Edit({
  className,
  attributes,
  setAttributes
}) {
  const [profiles, setProfiles] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const attributeKeys = Object.keys(attributes);
  const debouncedAttributes = useDebounce(attributes, 1000);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function loadProfiles() {
      // build url params based on attributes
      const params = attributeKeys.reduce(function (acc, curr, idx) {
        if (attributes[curr]) {
          acc.push(curr.replace('_', '-') + '=' + attributes[curr]);
        }

        return acc;
      }, []).join('&'); // make request

      const response = await fetch('http://peopleapi.local/wp-json/peopleapi/v1/people?' + params);

      if (!response.ok) {
        return;
      } // update state


      const profilesJson = await response.json();
      setProfiles(JSON.parse(profilesJson));
    }

    loadProfiles();
  }, [debouncedAttributes]); // only run on init and when attributes are changed

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", useBlockProps(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: "Directory Filters",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Number of Results",
    help: "Number of results per page. 'All' returns all profiles. Defaults to 10.",
    value: attributes.count,
    onChange: newval => setAttributes({
      count: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Page",
    help: "Integer representing the page of results to return",
    value: attributes.page,
    onChange: newval => setAttributes({
      page: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "Network IDs",
    help: "Comma delimited list of people network ids",
    value: attributes.nid,
    onChange: newval => setAttributes({
      nid: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "University Category",
    help: "Comma delimited list of wsuwp_university_category taxonomy slugs",
    value: attributes.university_category,
    onChange: newval => setAttributes({
      university_category: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "University Location",
    help: "Comma delimited list of wsuwp_university_location taxonomy slugs",
    value: attributes.university_location,
    onChange: newval => setAttributes({
      university_location: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
    label: "University Organization",
    help: "Comma delimited list of wsuwp_university_org taxonomy slugs",
    value: attributes.university_organization,
    onChange: newval => setAttributes({
      university_organization: newval
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    label: "Photo Size",
    help: "Photo size (thumbnail, medium, medium_large, large, full). Defaults to medium.",
    value: attributes.size,
    onChange: newval => setAttributes({
      size: newval
    }),
    options: [{
      label: 'Thumbnail',
      value: 'thumbnail'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'Medium Large',
      value: 'medium_large'
    }, {
      label: 'Large',
      value: 'large'
    }, {
      label: 'Full',
      value: 'full'
    }]
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "profiles"
  }, profiles.map((p, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "profile",
    key: index
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "profile__img-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "profile__img",
    src: p.photo
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    className: "profile__name"
  }, p.name), p.title.map((t, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: index
  }, t)), p.university_organization.map((o, index) => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: index
  }, o.name))))));
} // useDebounce Hook - https://usehooks.com/useDebounce/

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

/***/ }),

/***/ "./assets/src/editor.scss":
/*!********************************!*\
  !*** ./assets/src/editor.scss ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./assets/src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./assets/src/edit.js");
const {
  registerBlockType
} = wp.blocks;


registerBlockType('wsuwp/people', {
  title: 'People',
  icon: 'groups',
  category: 'common',
  attributes: {
    count: {
      type: 'string',
      default: '10'
    },
    page: {
      type: 'string',
      default: '1'
    },
    nid: {
      type: 'string',
      default: ''
    },
    university_category: {
      type: 'string',
      default: ''
    },
    university_location: {
      type: 'string',
      default: ''
    },
    university_organization: {
      type: 'string',
      default: ''
    },
    size: {
      type: 'string',
      default: 'medium'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function () {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map