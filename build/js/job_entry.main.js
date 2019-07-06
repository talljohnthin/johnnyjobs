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
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [];\n\nif (!localStorage.getItem('job-list')) {\n  data = [{\n    JobTitle: ' Front End Developer',\n    JobID: '1',\n    YearsOfExperience: '2',\n    Location: 'Metro Manila, Luzon',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 14000,\n    Category: 'Front End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'Google',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: 'Java Developer',\n    JobID: '2',\n    YearsOfExperience: '3',\n    Location: 'Metro Manila',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 30000,\n    Category: 'Fullstack',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'facebook',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }, {\n    JobTitle: ' BackEnd Developer',\n    JobID: '3',\n    YearsOfExperience: '4',\n    Location: 'Davao, Mindanao',\n    JobDescriptions: ' Our Front-End Web Developer is responsible for providing technical support to our Inbound Marketing Specialist on Marketo. He or she stays current on both marketing automation industry standards in general, and Marketo application in particular.',\n    Salary: 40000,\n    Category: 'Back End',\n    DatePosted: 'July 11, 1991',\n    CompanyName: 'github',\n    CompanyDescriptions: ' StraightArrow is a Creative Process Outsourcing (CPO) company providing creative talent as a virtual resource to digital agencies, creative studios, marketing teams and business owners. Our virtual teams act as true extensions of our clients operations - helping them develop and implement their strategies and plans.',\n    ContactNumber: '123456789'\n  }];\n  localStorage.setItem('job-list', JSON.stringify(data));\n  data = JSON.parse(localStorage.getItem('job-list'));\n} else {\n  data = JSON.parse(localStorage.getItem('job-list'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/data.js?");

/***/ }),

/***/ "./src/js/job-entry.js":
/*!*****************************!*\
  !*** ./src/js/job-entry.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/js/data.js\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // Add Job\n\nvar _ref = '',\n    _ref2 = _slicedToArray(_ref, 9),\n    JobTitle = _ref2[0],\n    YearsOfExperience = _ref2[1],\n    Location = _ref2[2],\n    JobDescriptions = _ref2[3],\n    Salary = _ref2[4],\n    Category = _ref2[5],\n    CompanyName = _ref2[6],\n    CompanyDescriptions = _ref2[7],\n    ContactNumber = _ref2[8];\n\nvar job_list = JSON.parse(localStorage.getItem('job-list'));\n\nvar getFormData = function getFormData() {\n  JobTitle = document.querySelector(\"#job__title\").value;\n  YearsOfExperience = document.querySelector('#job__years__exp').value;\n  Location = document.querySelector('#formLocation').value;\n  JobDescriptions = document.querySelector('#job__descriptions').value;\n  Salary = document.querySelector('#formSalary').value;\n  Category = document.querySelector('#formCategory').value;\n  CompanyName = document.querySelector('#job__company').value;\n  CompanyDescriptions = document.querySelector('#job__company__descriptions').value;\n  ContactNumber = document.querySelector('#job__company__phone').value;\n};\n\nvar clearForm = function clearForm() {\n  document.querySelector(\"#job__title\").value = '';\n  document.querySelector('#job__years__exp').value = '';\n  document.querySelector('#formLocation').value = '';\n  document.querySelector('#job__descriptions').value = '';\n  document.querySelector('#formSalary').value = '';\n  document.querySelector('#formCategory').value = '';\n  document.querySelector('#job__company').value = '';\n  document.querySelector('#job__company__descriptions').value = '';\n  document.querySelector('#job__company__phone').value = '';\n};\n\nvar addNew = function addNew(JobTitle, YearsOfExperience, Location, JobDescriptions, Salary, Category, CompanyName, CompanyDescriptions, ContactNumber) {\n  var job_list = JSON.parse(localStorage.getItem('job-list'));\n  var jobIDArray = job_list.map(function (e) {\n    return parseInt(e.JobID);\n  });\n  var last_id = Math.max.apply(Math, _toConsumableArray(jobIDArray));\n  var newJob = {\n    JobTitle: JobTitle,\n    JobID: last_id + 1,\n    YearsOfExperience: YearsOfExperience,\n    Location: Location,\n    JobDescriptions: JobDescriptions,\n    Salary: Salary,\n    Category: Category,\n    DatePosted: new Date().toLocaleDateString(\"en-US\"),\n    CompanyName: CompanyName,\n    CompanyDescriptions: CompanyDescriptions,\n    ContactNumber: ContactNumber\n  };\n  var jobList = Array.from(job_list);\n  console.log(newJob);\n  jobList.push(newJob);\n  localStorage.setItem('job-list', JSON.stringify(jobList));\n  var targetSuccess = document.getElementById('alertSuccess');\n  targetSuccess.classList.add('show');\n  clearForm();\n  setTimeout(function () {\n    targetSuccess.classList.remove('show');\n  }, 4000);\n};\n\nvar validate = function validate(job_title, years_of_experience, job__descriptions, company_name, company_descriptions, company_phone) {\n  var title = true,\n      experience = true,\n      job__desc = true,\n      company = true,\n      company_desc = true,\n      phone = true;\n\n  var checkLen = function checkLen(alertTarget, input, isValid) {\n    var alert = document.getElementById(alertTarget);\n\n    if (input.length < 2) {\n      isValid = false;\n      alert.classList.add('show');\n    } else {\n      isValid = true;\n      alert.classList.remove('show');\n    }\n  };\n\n  var checkNum = /^[0-9]$/;\n  var targetExperience = document.getElementById('alertYearExp');\n\n  if (!checkNum.test(years_of_experience)) {\n    experience = false;\n    targetExperience.classList.add('show');\n  } else {\n    experience = true;\n    targetExperience.classList.remove('show');\n  } // phone regex-\n\n\n  var phoneRegx = /^[0-9]{11,11}$/;\n  var targetPhone = document.getElementById('alertCompanyPhone');\n\n  if (phoneRegx.test(company_phone) === false) {\n    phone = false;\n    targetPhone.classList.add('show');\n  } else {\n    phone = true;\n    targetPhone.classList.remove('show');\n  } // check if less than 2 character\n\n\n  checkLen('alertTitle', job_title, title);\n  checkLen('alertCompany', company_name, company);\n  checkLen('alertJobDescriptions', job__descriptions, job__desc);\n  checkLen('alertCompanyDescriptions', company_descriptions, company_desc);\n\n  if (title == true && experience == true && job__desc == true && company == true && company_desc == true && phone == true) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\ndocument.querySelector('.job__entry__form').addEventListener('submit', function (e) {\n  e.preventDefault();\n  getFormData();\n  validate(JobTitle, YearsOfExperience, JobDescriptions, CompanyName, CompanyDescriptions, ContactNumber);\n\n  if (validate(JobTitle, YearsOfExperience, JobDescriptions, CompanyName, CompanyDescriptions, ContactNumber)) {\n    addNew(JobTitle, YearsOfExperience, Location, JobDescriptions, Salary, Category, CompanyName, CompanyDescriptions, ContactNumber);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/job-entry.js?");

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