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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n\nObject(_js_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _job_listing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-listing.js */ \"./src/js/job-listing.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./src/js/filter.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.js */ \"./src/js/select.js\");\n\n\n\n //import jobEntry from './job-entry';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {//console.log(listing);\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/data-filter.js":
/*!*******************************!*\
  !*** ./src/js/data-filter.js ***!
  \*******************************/
/*! exports provided: categories, salaries, locations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"categories\", function() { return categories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"salaries\", function() { return salaries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locations\", function() { return locations; });\nvar categories = [{\n  category: 'All'\n}, {\n  category: 'Front End'\n}, {\n  category: 'Back End'\n}, {\n  category: 'Fullstack'\n}];\nvar salaries = [{\n  salary: 15000\n}, {\n  salary: 20000\n}, {\n  salary: 30000\n}, {\n  salary: 40000\n}, {\n  salary: 50000\n}, {\n  salary: 60000\n}, {\n  salary: 70000\n}];\nvar locations = [{\n  location: \"Metro Manila\"\n}, {\n  location: \"Cebu\"\n}, {\n  location: \"Davao\"\n}, {\n  location: \"Luzon\"\n}, {\n  location: \"Visayas\"\n}, {\n  location: \"Mindanao\"\n}];\n\n\n//# sourceURL=webpack:///./src/js/data-filter.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [];\n\nif (!localStorage.getItem('job-list')) {\n  data = [{\n    JobTitle: ' Front End Developer',\n    JobID: '1',\n    YearsOfExperience: '2',\n    Location: 'Metro Manila, Luzon',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 14000,\n    Category: 'Front End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'Google',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: 'Java Developer',\n    JobID: '2',\n    YearsOfExperience: '3',\n    Location: 'Metro Manila',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 30000,\n    Category: 'Fullstack',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'facebook',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: ' BackEnd Developer',\n    JobID: '3',\n    YearsOfExperience: '4',\n    Location: 'Davao, Mindanao',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 40000,\n    Category: 'Back End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'github',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }];\n  localStorage.setItem('job-list', JSON.stringify(data));\n  data = JSON.parse(localStorage.getItem('job-list'));\n} else {\n  data = JSON.parse(localStorage.getItem('job-list'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ \"./src/js/select.js\");\n/* harmony import */ var _data_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-filter.js */ \"./src/js/data-filter.js\");\n/* harmony import */ var _jobs_applied_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs-applied.js */ \"./src/js/jobs-applied.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar filterCategories = document.querySelector('.filter__categories'),\n    filterSalaries = document.querySelector('.filter__salaries'),\n    filterLocations = document.querySelector('.filter__locations');\n\nvar Filter = function Filter(data, target, item) {\n  var _this = this;\n\n  _classCallCheck(this, Filter);\n\n  this.data = data;\n  this.target = target;\n  this.item = item;\n  this.data.forEach(function (item) {\n    var newListElement = document.createElement('li');\n\n    if (_this.item == \"category\") {\n      newListElement.innerHTML = \"\".concat(item.category, \" (\").concat(noOfJobList(item.category, 'category'), \")\");\n      newListElement.setAttribute('data-value', item.category);\n    } else if (_this.item == \"salary\") {\n      newListElement.innerHTML = \"\".concat(item.salary, \" (\").concat(noOfJobList(item.salary, 'salary'), \")\");\n      newListElement.setAttribute('data-value', item.salary);\n    } else if (_this.item == \"location\") {\n      newListElement.innerHTML = \"\".concat(item.location, \" (\").concat(noOfJobList(item.location, 'location'), \")\");\n      newListElement.setAttribute('data-value', item.location);\n    }\n\n    _this.target.appendChild(newListElement);\n  });\n}; //populate aside filter \n\n\nvar populateCategories = new Filter(_data_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"categories\"], filterCategories, 'category');\nvar populateSalaries = new Filter(_data_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"salaries\"], filterSalaries, 'salary');\nvar populateLocations = new Filter(_data_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"locations\"], filterLocations, 'location'); //update listing base on the seclected filter\n\nvar source = null;\nvar htmlItem = document.querySelector('.job__listing');\n\nvar checkFilter = function checkFilter(target, value) {\n  if (value == 'All') {\n    source = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    updateList();\n  }\n\n  if (target == 'Category' && value != 'All') {\n    source = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(function (item) {\n      return item.Category.includes(value);\n    });\n    updateList(target, source.length);\n  } else if (target == 'Location' && value != 'All') {\n    source = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(function (item) {\n      return item.Location.includes(value);\n    });\n    updateList(target, source.length);\n  } else if (target == 'Salary' && value != 'All') {\n    source = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(function (item) {\n      return item.Salary >= value;\n    });\n    updateList(target, source.length);\n  }\n}; //update number of job list per item category\n\n\nfunction noOfJobList(currentItem, targetFilter) {\n  var noOfFilterItem = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter(function (item) {\n    if (targetFilter == 'category') {\n      if (currentItem == 'All') {\n        return noOfFilterItem = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n      }\n\n      return item.Category.includes(currentItem);\n    } else if (targetFilter == 'location') {\n      return item.Location.includes(currentItem);\n    } else if (targetFilter == 'salary') {\n      return item.Salary >= currentItem;\n    }\n  });\n  return noOfFilterItem.length;\n} //set a reset\n\n\nvar updateList = function updateList(target, sourceLength) {\n  //remove all data\n  htmlItem.innerHTML = ''; //if no job found\n\n  if (!sourceLength && target !== undefined) {\n    htmlItem.innerHTML = \"\\n        <h3 class=\\\"no__job__post\\\">No job post about this \".concat(target.toLowerCase(), \" at this moment!</h3>\\n        \");\n  } //create new list base on filter\n\n\n  createList(); // attach btn view code\n\n  Object(_select_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nvar filterItem = document.querySelectorAll('.data__filter li');\nArray.from(filterItem).forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    var parentAttribute = e.target.parentElement.getAttribute('data-job-filter'); //populate filter\n\n    checkFilter(parentAttribute, e.target.getAttribute('data-value'));\n  });\n});\n\nvar createList = function createList() {\n  if (source !== null) {\n    source.forEach(function (item) {\n      var newHTMLElement = document.createElement('div');\n      newHTMLElement.setAttribute('class', 'each__job row');\n      newHTMLElement.innerHTML = \"\\n                <div class=\\\"col-sm-12 col-md-10\\\">\\n                    <div class=\\\"job__title\\\">\".concat(item.JobTitle, \"</div>\\n                    <div class=\\\"job__data row\\\">\\n                        <div class=\\\"text\\\">\\n                            <i class=\\\"fa fa-calendar-check-o\\\" aria-hidden=\\\"true\\\"></i>\\n                            <div class=\\\"year__of__experience\\\"> \").concat(item.YearsOfExperience, \"</div> yrs of Experience\\n                        </div>\\n                        <div class=\\\"text\\\">\\n                            <i class=\\\"fa fa-calendar\\\" aria-hidden=\\\"true\\\"></i>\\n                            Date posted <div class=\\\"date__posted\\\">\").concat(item.DatePosted, \"</div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"job__company row\\\">\\n                        <div class=\\\"text\\\">\\n                            <i class=\\\"fa fa-cube\\\" aria-hidden=\\\"true\\\"></i>\\n                            <div class=\\\"company__name\\\">\").concat(item.CompanyName, \"</div>\\n                        </div>\\n                        <div class=\\\"text\\\">\\n                            <i class=\\\"fa fa-map\\\" aria-hidden=\\\"true\\\"></i>\\n                            <div class=\\\"company__location\\\">\").concat(item.Location, \"</div>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"jobID hidden\\\">\").concat(item.JobID, \"</div>\\n                </div>\\n                <div class=\\\"col-sm-12 col-md-2 box-right\\\">\\n                    <a href=\\\"./details.html\\\" class=\\\"btn btn-primary btn-view\\\"> <span>View</span> </a>\\n                </div>\\n                <span class=\\\"total__applied\\\"> \").concat(Object(_jobs_applied_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item.JobID)\n      /* from jobs-applied */\n      , \"</span>  \\n            \");\n      htmlItem.appendChild(newHTMLElement);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/filter.js?");

/***/ }),

/***/ "./src/js/job-listing.js":
/*!*******************************!*\
  !*** ./src/js/job-listing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n/* harmony import */ var _jobs_applied_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-applied.js */ \"./src/js/jobs-applied.js\");\n\n\nvar source = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nvar htmlItem = document.querySelector('.job__listing');\nsource.forEach(function (item) {\n  var newHTMLElement = document.createElement('div');\n  newHTMLElement.setAttribute('class', 'each__job row');\n  newHTMLElement.innerHTML = \"\\n        <div class=\\\"box-left\\\">\\n            <div class=\\\"job__title\\\">\".concat(item.JobTitle, \"</div>\\n            <div class=\\\"job__data row\\\">\\n                <div class=\\\"text\\\">\\n                    <i class=\\\"fa fa-calendar-check-o\\\" aria-hidden=\\\"true\\\"></i>\\n                    <div class=\\\"year__of__experience\\\">\").concat(item.YearsOfExperience, \"</div>yrs of Experience\\n                </div>\\n                <div class=\\\"text\\\">\\n                    <i class=\\\"fa fa-calendar\\\" aria-hidden=\\\"true\\\"></i>\\n                    Date posted <div class=\\\"date__posted\\\"> \").concat(item.DatePosted, \"</div>\\n                </div>\\n            </div>\\n            <div class=\\\"job__company row\\\">\\n                <div class=\\\"text\\\">\\n                    <i class=\\\"fa fa-cube\\\" aria-hidden=\\\"true\\\"></i>\\n                    <div class=\\\"company__name\\\">\").concat(item.CompanyName, \"</div>\\n                </div>\\n                <div class=\\\"text\\\">\\n                    <i class=\\\"fa fa-map\\\" aria-hidden=\\\"true\\\"></i>\\n                    <div class=\\\"company__location\\\">\").concat(item.Location, \"</div>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"jobID hidden\\\">\").concat(item.JobID, \"</div>\\n        <div class=\\\"box-right\\\">\\n            <a href=\\\"./details.html\\\" class=\\\"btn btn-primary btn-view\\\"> <span>View</span> </a>\\n        </div> \\n        <span class=\\\"total__applied\\\"> \").concat(Object(_jobs_applied_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.JobID)\n  /* from jobs-applied */\n  , \"</span> \\n    \");\n  htmlItem.appendChild(newHTMLElement);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/js/job-listing.js?");

/***/ }),

/***/ "./src/js/jobs-applied.js":
/*!********************************!*\
  !*** ./src/js/jobs-applied.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Create and fill sample applied jobs\nvar totalApplied = JSON.stringify([{\n  \"jobID\": \"1\",\n  \"name\": \"Johnrel Limpag\",\n  \"email\": \"test@gmail.com\",\n  \"phone\": \"0987654321\",\n  \"cover\": \"Cover letter\"\n}, {\n  \"jobID\": \"2\",\n  \"name\": \"Juan Dela X\",\n  \"email\": \"sample@gmail.com\",\n  \"phone\": \"0987654321\",\n  \"cover\": \"Cover letter\"\n}]);\nif (localStorage.getItem(\"jobs-applied\") === null) localStorage.setItem('jobs-applied', totalApplied); // count total applied for each job\n\nvar applicationTotal = function applicationTotal(id) {\n  var applicationStorage = JSON.parse(localStorage.getItem(\"jobs-applied\")),\n      newApplicationStorage = Array.from(applicationStorage),\n      totalApplied = newApplicationStorage.filter(function (e) {\n    return e.jobID == id;\n  });\n  return totalApplied.length > 0 ? 'Total Number of Application: ' + totalApplied.length : 'Hurry and be the first to apply';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (applicationTotal);\n\n//# sourceURL=webpack:///./src/js/jobs-applied.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setJobId = function setJobId() {\n  var btnView = document.getElementsByClassName('btn-view');\n  var btns = Array.from(btnView);\n  btns.forEach(function (e) {\n    e.addEventListener('click', function (element) {\n      element.preventDefault();\n      var currentID = e.parentElement.parentElement.querySelector('.jobID').innerText;\n      localStorage.setItem('selected-job', currentID);\n      window.location.href = \"./details.html\";\n      console.log(currentID);\n    });\n  });\n};\n\nsetJobId();\n/* harmony default export */ __webpack_exports__[\"default\"] = (setJobId);\n\n//# sourceURL=webpack:///./src/js/select.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/app.scss?");

/***/ })

/******/ });