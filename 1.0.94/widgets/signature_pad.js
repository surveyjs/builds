(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("signature_pad"));
	else if(typeof define === 'function' && define.amd)
		define("widgets/signature_pad", ["signature_pad"], factory);
	else if(typeof exports === 'object')
		exports["widgets/signature_pad"] = factory(require("signature_pad"));
	else
		root["widgets/signature_pad"] = factory(root["SignaturePad"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_signature_pad__);


function resizeCanvas(canvas) {
  var context = canvas.getContext("2d");
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  var ratio = devicePixelRatio / backingStoreRatio;

  var oldWidth = canvas.width;
  var oldHeight = canvas.height;

  canvas.width = oldWidth * ratio;
  canvas.height = oldHeight * ratio;

  canvas.style.width = oldWidth + "px";
  canvas.style.height = oldHeight + "px";

  context.scale(ratio, ratio);
}

function init(Survey) {
  var widget = {
    name: "signaturepad",
    title: "Signature pad",
    iconName: "icon-signaturepad",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a != "undefined";
    },
    penColor: "#1ab394",
    isFit: function(question) {
      return question.getType() === "signaturepad";
    },
    htmlTemplate:
      "<div class='sjs_sp_container'><div><canvas></canvas></div><div class='sjs_sp_controls'><button type='button' class='sjs_sp_clear' title='Clear'>✖</button></div></div><style>.sjs_sp_container { position: relative; } .sjs_sp_controls { position: absolute; left: 0; bottom: 0; } .sjs_sp_controls > button { user-select: none; }</style>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("signaturepad", [], null, "empty");
      Survey.JsonObject.metaData.addProperties("signaturepad", [
        {
          name: "allowClear:boolean",
          default: true
        },
        {
          name: "width:number",
          default: 300
        },
        {
          name: "height:number",
          default: 200
        }
      ]);
    },
    afterRender: function(question, el) {
      var rootWidget = this;
      var canvas = el.getElementsByTagName("canvas")[0];
      var buttonEl = el.getElementsByTagName("button")[0];
      var signaturePad = new __WEBPACK_IMPORTED_MODULE_0_signature_pad___default.a(canvas);
      if (question.isReadOnly) {
        signaturePad.off();
      }

      buttonEl.onclick = function() {
        question.value = undefined;
      };

      question.readOnlyChangedCallback = function() {
        if (!question.allowClear || question.isReadOnly) {
          signaturePad.off();
          buttonEl.style.display = "none";
        } else {
          signaturePad.on();
          buttonEl.style.display = "block";
        }
      };

      signaturePad.penColor = rootWidget.penColor;
      signaturePad.onEnd = function() {
        var data = signaturePad.toDataURL();
        question.value = data;
      };
      var updateValueHandler = function() {
        var data = question.value;
        canvas.width = question.width;
        canvas.height = question.height;
        resizeCanvas(canvas);
        signaturePad.fromDataURL(
          data || "data:image/gif;base64,R0lGODlhAQABAIAAAP"
        );
      };
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
      question.readOnlyChangedCallback();
      question.signaturePad = signaturePad;
      var propertyChangedHandler = function(sender, options) {
        if (options.name === "width" || options.name === "height") {
          updateValueHandler();
        }
      };
      question.onPropertyChanged.add(propertyChangedHandler);
      question.signaturePad.propertyChangedHandler = propertyChangedHandler;
    },
    willUnmount: function(question, el) {
      if (question.signaturePad) {
        question.onPropertyChanged.remove(
          question.signaturePad.propertyChangedHandler
        );
        question.signaturePad.off();
      }
      question.readOnlyChangedCallback = null;
      question.signaturePad = null;
      question.readOnlyChangedCallback = null;
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YjM3MmE5YTg0MDU1YWQ1OTNlYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ25hdHVyZV9wYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEsZ0Q7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBWTtBQUNoQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdU1BQXVNLG9CQUFvQixFQUFFLG1CQUFtQixvQkFBb0IsU0FBUyxXQUFXLEVBQUUsNEJBQTRCLG1CQUFtQixFQUFFO0FBQzNVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxREFBWTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoid2lkZ2V0cy9zaWduYXR1cmVfcGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwic2lnbmF0dXJlX3BhZFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiLCBbXCJzaWduYXR1cmVfcGFkXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInNpZ25hdHVyZV9wYWRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvc2lnbmF0dXJlX3BhZFwiXSA9IGZhY3Rvcnkocm9vdFtcIlNpZ25hdHVyZVBhZFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdiMzcyYTlhODQwNTVhZDU5M2VjIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiU2lnbmF0dXJlUGFkXCIsXCJjb21tb25qczJcIjpcInNpZ25hdHVyZV9wYWRcIixcImNvbW1vbmpzXCI6XCJzaWduYXR1cmVfcGFkXCIsXCJhbWRcIjpcInNpZ25hdHVyZV9wYWRcIn1cbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiaW1wb3J0IFNpZ25hdHVyZVBhZCBmcm9tIFwic2lnbmF0dXJlX3BhZFwiO1xuXG5mdW5jdGlvbiByZXNpemVDYW52YXMoY2FudmFzKSB7XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgdmFyIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICB2YXIgYmFja2luZ1N0b3JlUmF0aW8gPVxuICAgIGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQubW96QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIDE7XG5cbiAgdmFyIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuXG4gIHZhciBvbGRXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgdmFyIG9sZEhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgY2FudmFzLndpZHRoID0gb2xkV2lkdGggKiByYXRpbztcbiAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xuXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9sZFdpZHRoICsgXCJweFwiO1xuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgXCJweFwiO1xuXG4gIGNvbnRleHQuc2NhbGUocmF0aW8sIHJhdGlvKTtcbn1cblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcbiAgICBuYW1lOiBcInNpZ25hdHVyZXBhZFwiLFxuICAgIHRpdGxlOiBcIlNpZ25hdHVyZSBwYWRcIixcbiAgICBpY29uTmFtZTogXCJpY29uLXNpZ25hdHVyZXBhZFwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgU2lnbmF0dXJlUGFkICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBwZW5Db2xvcjogXCIjMWFiMzk0XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInNpZ25hdHVyZXBhZFwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOlxuICAgICAgXCI8ZGl2IGNsYXNzPSdzanNfc3BfY29udGFpbmVyJz48ZGl2PjxjYW52YXM+PC9jYW52YXM+PC9kaXY+PGRpdiBjbGFzcz0nc2pzX3NwX2NvbnRyb2xzJz48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Nqc19zcF9jbGVhcicgdGl0bGU9J0NsZWFyJz7inJY8L2J1dHRvbj48L2Rpdj48L2Rpdj48c3R5bGU+LnNqc19zcF9jb250YWluZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gLnNqc19zcF9jb250cm9scyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAwOyB9IC5zanNfc3BfY29udHJvbHMgPiBidXR0b24geyB1c2VyLXNlbGVjdDogbm9uZTsgfTwvc3R5bGU+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJzaWduYXR1cmVwYWRcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0aWVzKFwic2lnbmF0dXJlcGFkXCIsIFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiYWxsb3dDbGVhcjpib29sZWFuXCIsXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJ3aWR0aDpudW1iZXJcIixcbiAgICAgICAgICBkZWZhdWx0OiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiaGVpZ2h0Om51bWJlclwiLFxuICAgICAgICAgIGRlZmF1bHQ6IDIwMFxuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9LFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcbiAgICAgIHZhciBjYW52YXMgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAgIHZhciBidXR0b25FbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdO1xuICAgICAgdmFyIHNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQoY2FudmFzKTtcbiAgICAgIGlmIChxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgIHNpZ25hdHVyZVBhZC5vZmYoKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uRWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghcXVlc3Rpb24uYWxsb3dDbGVhciB8fCBxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgICAgc2lnbmF0dXJlUGFkLm9mZigpO1xuICAgICAgICAgIGJ1dHRvbkVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaWduYXR1cmVQYWQub24oKTtcbiAgICAgICAgICBidXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBzaWduYXR1cmVQYWQucGVuQ29sb3IgPSByb290V2lkZ2V0LnBlbkNvbG9yO1xuICAgICAgc2lnbmF0dXJlUGFkLm9uRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IGRhdGE7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHF1ZXN0aW9uLnZhbHVlO1xuICAgICAgICBjYW52YXMud2lkdGggPSBxdWVzdGlvbi53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHF1ZXN0aW9uLmhlaWdodDtcbiAgICAgICAgcmVzaXplQ2FudmFzKGNhbnZhcyk7XG4gICAgICAgIHNpZ25hdHVyZVBhZC5mcm9tRGF0YVVSTChcbiAgICAgICAgICBkYXRhIHx8IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUFwiXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcbiAgICAgIHF1ZXN0aW9uLnJlYWRPbmx5Q2hhbmdlZENhbGxiYWNrKCk7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBzaWduYXR1cmVQYWQ7XG4gICAgICB2YXIgcHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IGZ1bmN0aW9uKHNlbmRlciwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBcIndpZHRoXCIgfHwgb3B0aW9ucy5uYW1lID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBxdWVzdGlvbi5vblByb3BlcnR5Q2hhbmdlZC5hZGQocHJvcGVydHlDaGFuZ2VkSGFuZGxlcik7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlciA9IHByb3BlcnR5Q2hhbmdlZEhhbmRsZXI7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBpZiAocXVlc3Rpb24uc2lnbmF0dXJlUGFkKSB7XG4gICAgICAgIHF1ZXN0aW9uLm9uUHJvcGVydHlDaGFuZ2VkLnJlbW92ZShcbiAgICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQucHJvcGVydHlDaGFuZ2VkSGFuZGxlclxuICAgICAgICApO1xuICAgICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQub2ZmKCk7XG4gICAgICB9XG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XG4gICAgICBxdWVzdGlvbi5zaWduYXR1cmVQYWQgPSBudWxsO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpZ25hdHVyZV9wYWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiXSwic291cmNlUm9vdCI6IiJ9