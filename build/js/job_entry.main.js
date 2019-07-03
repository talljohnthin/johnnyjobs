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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/job-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [];\n\nif (!localStorage.getItem('job-list')) {\n  data = [{\n    JobTitle: ' Front End Developer',\n    JobID: 'ID1',\n    YearsOfExperience: '2',\n    Location: 'Metro Manila, Luzon',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 14000,\n    Category: 'Front End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'Google',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: 'Java Developer',\n    JobID: 'ID2',\n    YearsOfExperience: '3',\n    Location: 'Metro Manila',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 30000,\n    Category: 'Fullstack',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'facebook',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: ' BackEnd Developer',\n    JobID: 'ID3',\n    YearsOfExperience: '4',\n    Location: 'Davao, Mindanao',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 40000,\n    Category: 'Back End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'github',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }];\n  localStorage.setItem('job-list', JSON.stringify(data));\n  data = JSON.parse(localStorage.getItem('job-list'));\n} else {\n  data = JSON.parse(localStorage.getItem('job-list'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/job-entry.js":
/*!*****************************!*\
  !*** ./src/js/job-entry.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n\nconsole.log(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/job-entry.js?");

/***/ })

/******/ });