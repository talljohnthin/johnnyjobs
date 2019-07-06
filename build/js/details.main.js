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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/details.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/details.js":
/*!***************************!*\
  !*** ./src/js/details.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n //get selected job id from localstorage\n\nvar jobID = localStorage.getItem('selected-job');\nvar jobList = JSON.parse(localStorage.getItem('job-list'));\nvar htmlItem = document.querySelector('.job__listing');\nvar htmlCompany = document.querySelector('.company__data');\n\nvar formatNumber = function formatNumber(num) {\n  return num.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \"$1,\");\n};\n\nif (jobID) {\n  var arrayFiltered = jobList.filter(function (e) {\n    return e.JobID == jobID;\n  }); //job filter\n\n  arrayFiltered.forEach(function (item) {\n    var newHTMLElement = document.createElement('div');\n    newHTMLElement.setAttribute('class', 'each__job row');\n    newHTMLElement.innerHTML = \"\\n            <div class=\\\"col-sm-12\\\">\\n                <div class=\\\"job__title\\\">\".concat(item.JobTitle, \"</div>\\n                <div class=\\\"job__data row\\\">\\n                    <div class=\\\"text\\\">\\n                        <i class=\\\"fa fa-calendar-check-o\\\" aria-hidden=\\\"true\\\"></i>\\n                        <div class=\\\"year__of__experience\\\"> \").concat(item.YearsOfExperience, \"</div>yrs of Experience\\n                    </div>\\n                    <div class=\\\"text\\\">\\n                        <i class=\\\"fa fa-calendar\\\" aria-hidden=\\\"true\\\"></i>\\n                        Date posted <div class=\\\"date__posted\\\"> \").concat(item.DatePosted, \"</div>\\n                    </div>\\n                </div>\\n                <div class=\\\"job__company row\\\">\\n                    <div class=\\\"text\\\">\\n                        <i class=\\\"fa fa-cube\\\" aria-hidden=\\\"true\\\"></i>\\n                        <div class=\\\"company__name\\\">\").concat(item.CompanyName, \"</div>\\n                    </div>\\n                    <div class=\\\"text\\\">\\n                        <i class=\\\"fa fa-map\\\" aria-hidden=\\\"true\\\"></i>\\n                        <div class=\\\"company__location\\\">\").concat(item.Location, \"</div>\\n                    </div>\\n                </div>\\n                <div class=\\\"job__salary\\\">Minimum pay at <i class=\\\"fa fa-usd\\\" aria-hidden=\\\"true\\\"></i> \").concat(formatNumber(item.Salary), \"</div>\\n                <div class=\\\"job__description\\\">\").concat(item.JobDescriptions, \"</div>\\n                <div class=\\\"jobID hidden\\\">\").concat(item.JobID, \"</div>\\n            </div>\\n        \");\n    htmlItem.appendChild(newHTMLElement);\n  }); //company info\n\n  arrayFiltered.forEach(function (item) {\n    var newHTMLElement = document.createElement('div');\n    newHTMLElement.setAttribute('class', 'company__row');\n    newHTMLElement.innerHTML = \"\\n            <div class=\\\"company__name\\\">About <span>\".concat(item.CompanyName, \"</span></div>\\n            <div class=\\\"company__descriptions\\\"> \").concat(item.CompanyDescriptions, \" </div>\\n            <div class=\\\"division__title\\\">Contact</div>\\n            <div class=\\\"company__phone\\\"><i class=\\\"fas fa-phone-square\\\"></i> \").concat(item.ContactNumber, \" </div>\\n        \");\n    htmlCompany.appendChild(newHTMLElement);\n  });\n} else {\n  window.location.href = \"./index.html\";\n} // submit new job applicaltion\n\n\nvar _ref = '',\n    _ref2 = _slicedToArray(_ref, 5),\n    jobForm = _ref2[0],\n    formName = _ref2[1],\n    formEmail = _ref2[2],\n    formPhone = _ref2[3],\n    formCover = _ref2[4];\n\nvar appliedJob = JSON.parse(localStorage.getItem('jobs-applied'));\n\nvar getFormData = function getFormData() {\n  formName = document.querySelector(\"#job__app__name\").value, formEmail = document.querySelector('#job__app__email').value, formPhone = document.querySelector('#job__app__phone').value, formCover = document.querySelector('#job__app__cover').value;\n};\n\nvar clearForm = function clearForm() {\n  document.querySelector(\"#job__app__name\").value = '', document.querySelector('#job__app__email').value = '', document.querySelector('#job__app__phone').value = '', document.querySelector('#job__app__cover').value = '';\n};\n\nvar addNew = function addNew(jobID, name, email, phone, cover) {\n  var data = {\n    jobID: jobID,\n    name: name,\n    email: email,\n    phone: phone,\n    cover: cover\n  };\n  appliedJob.push(data);\n  localStorage.setItem('jobs-applied', JSON.stringify(appliedJob));\n  var targetSuccess = document.getElementById('alertSuccess');\n  targetSuccess.classList.add('show');\n  clearForm();\n  setTimeout(function () {\n    targetSuccess.classList.remove('show');\n  }, 4000);\n};\n\nvar validate = function validate(formEmail, formPhone, formName, formCover) {\n  var email = true,\n      name = true,\n      phone = true,\n      message = true; // email regex-\n\n  var emailRegx = /^([a-zA-Z0-9\\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;\n  var targetEmail = document.getElementById('alertEmail');\n\n  if (emailRegx.test(formEmail) === false) {\n    email = false;\n    targetEmail.classList.add('show');\n  } else {\n    email = true;\n    targetEmail.classList.remove('show');\n  } // phone regex-\n\n\n  var phoneRegx = /^[0-9]{11,11}$/;\n  var targetPhone = document.getElementById('alertPhone');\n\n  if (phoneRegx.test(formPhone) === false) {\n    phone = false;\n    targetPhone.classList.add('show');\n  } else {\n    phone = true;\n    targetPhone.classList.remove('show');\n  } // name check if less than 2 character\n\n\n  var targetName = document.getElementById('alertName');\n\n  if (formName.length < 2) {\n    name = false;\n    targetName.classList.add('show');\n  } else {\n    name = true;\n    targetName.classList.remove('show');\n  } // cover check if less than 2 character\n\n\n  var targetCover = document.getElementById('alertCover');\n\n  if (formCover.length < 2) {\n    message = false;\n    targetCover.classList.add('show');\n  } else {\n    message = true;\n    targetCover.classList.remove('show');\n  }\n\n  if (name == true && phone == true && email == true && message == true) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\ndocument.querySelector('.job__app__form').addEventListener('submit', function (e) {\n  e.preventDefault();\n  getFormData();\n  validate(formEmail, formPhone, formName, formCover);\n\n  if (validate(formEmail, formPhone, formName, formCover)) {\n    addNew(jobID, formName, formEmail, formPhone, formCover);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/details.js?");

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