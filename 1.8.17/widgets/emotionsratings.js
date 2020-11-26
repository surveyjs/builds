(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/emotionsratings", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/emotionsratings"] = factory();
	else
		root["widgets/emotionsratings"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;

  var widget = {
    name: "emotionsratings",
    title: "Emotions Ratings",
    iconName: "icon-emotionsratings",
    widgetIsLoaded: function () {
      return typeof $ == "function" && !!$.fn.emotionsRating;
    },
    defaultJSON: {
      choices: [1, 2, 3, 4, 5],
    },
    isFit: function (question) {
      return question.getType() === "emotionsratings";
    },
    isDefaultRender: false,
    htmlTemplate: "<div style='height: 33px'></div>",
    activatedByChanged: function (activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "emotionsratings",
        [
          {
            name: "hasOther",
            visible: false,
          },
          {
            name: "otherText",
            visible: false,
          },
          {
            name: "optionsCaption",
            visible: false,
          },
          {
            name: "otherErrorText",
            visible: false,
          },
          {
            name: "storeOthersAsComment",
            visible: false,
          },
          {
            name: "renderAs",
            visible: false,
          },
        ],
        null,
        "dropdown"
      );
      Survey.JsonObject.metaData.addProperties("emotionsratings", [
        {
          name: "emotions:itemvalues",
          category: "emotions",
          categoryIndex: 1,
          default: ["angry", "disappointed", "meh", "happy", "inLove"],
        },
        {
          name: "emotionSize:number",
          category: "emotions",
          default: 30,
        },
        {
          name: "emotionsCount:number",
          category: "emotions",
          default: 5,
        },
        {
          name: "bgEmotion",
          category: "emotions",
          default: "happy",
        },
        {
          name: "emotionColor",
          category: "emotions",
          default: "#FF0066",
        },
      ]);
    },
    afterRender: function (question, el) {
      var emotions = (question.emotions || []).map(function (item) {
        return item.value;
      });
      if (emotions.length === 0) {
        emotions = ["angry", "disappointed", "meh", "happy", "inLove"];
      }
      var options = {
        emotionSize: question.emotionSize,
        bgEmotion: question.bgEmotion,
        emotions: emotions,
        initialRating: question.value,
        color: question.emotionColor,
        count: question.emotionsCount,
        onUpdate: function (value) {
          question.value = value;
        },
      };
      initWidget();

      question.valueChangedCallback = initWidget;
      question.readOnlyChangedCallback = initWidget;

      function initWidget() {
        el.innerHTML = "<div></div>";
        $(el).off();
        options.initialRating = question.value || 0;
        options.disabled = question.isReadOnly;
        $(el).find("div").emotionsRating(options);
      }
    },
    willUnmount: function (question, el) {
      el.innerHTML = null;
      $(el).off();
      question.readOnlyChangedCallback = null;
      question.valueChangedCallback = null;
    },
    pdfQuestionType: "dropdown",
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey, window.$);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsIndlYnBhY2s6Ly8vLi9zcmMvZW1vdGlvbnNyYXRpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJ3aWRnZXRzL2Vtb3Rpb25zcmF0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2lkZ2V0cy9lbW90aW9uc3JhdGluZ3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9lbW90aW9uc3JhdGluZ3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9lbW90aW9uc3JhdGluZ3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGIyMTNkMDY1YzNkODAxNzg0OSIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XHJcbiAgJCA9ICQgfHwgd2luZG93LiQ7XHJcblxyXG4gIHZhciB3aWRnZXQgPSB7XHJcbiAgICBuYW1lOiBcImVtb3Rpb25zcmF0aW5nc1wiLFxyXG4gICAgdGl0bGU6IFwiRW1vdGlvbnMgUmF0aW5nc1wiLFxyXG4gICAgaWNvbk5hbWU6IFwiaWNvbi1lbW90aW9uc3JhdGluZ3NcIixcclxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgJCA9PSBcImZ1bmN0aW9uXCIgJiYgISEkLmZuLmVtb3Rpb25zUmF0aW5nO1xyXG4gICAgfSxcclxuICAgIGRlZmF1bHRKU09OOiB7XHJcbiAgICAgIGNob2ljZXM6IFsxLCAyLCAzLCA0LCA1XSxcclxuICAgIH0sXHJcbiAgICBpc0ZpdDogZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwiZW1vdGlvbnNyYXRpbmdzXCI7XHJcbiAgICB9LFxyXG4gICAgaXNEZWZhdWx0UmVuZGVyOiBmYWxzZSxcclxuICAgIGh0bWxUZW1wbGF0ZTogXCI8ZGl2IHN0eWxlPSdoZWlnaHQ6IDMzcHgnPjwvZGl2PlwiLFxyXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbiAoYWN0aXZhdGVkQnkpIHtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXHJcbiAgICAgICAgXCJlbW90aW9uc3JhdGluZ3NcIixcclxuICAgICAgICBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiaGFzT3RoZXJcIixcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm90aGVyVGV4dFwiLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwib3B0aW9uc0NhcHRpb25cIixcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzdG9yZU90aGVyc0FzQ29tbWVudFwiLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwicmVuZGVyQXNcIixcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcImRyb3Bkb3duXCJcclxuICAgICAgKTtcclxuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydGllcyhcImVtb3Rpb25zcmF0aW5nc1wiLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJlbW90aW9uczppdGVtdmFsdWVzXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJlbW90aW9uc1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnlJbmRleDogMSxcclxuICAgICAgICAgIGRlZmF1bHQ6IFtcImFuZ3J5XCIsIFwiZGlzYXBwb2ludGVkXCIsIFwibWVoXCIsIFwiaGFwcHlcIiwgXCJpbkxvdmVcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImVtb3Rpb25TaXplOm51bWJlclwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZW1vdGlvbnNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJlbW90aW9uc0NvdW50Om51bWJlclwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZW1vdGlvbnNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcImJnRW1vdGlvblwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiZW1vdGlvbnNcIixcclxuICAgICAgICAgIGRlZmF1bHQ6IFwiaGFwcHlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiZW1vdGlvbkNvbG9yXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJlbW90aW9uc1wiLFxyXG4gICAgICAgICAgZGVmYXVsdDogXCIjRkYwMDY2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uIChxdWVzdGlvbiwgZWwpIHtcclxuICAgICAgdmFyIGVtb3Rpb25zID0gKHF1ZXN0aW9uLmVtb3Rpb25zIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChlbW90aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBlbW90aW9ucyA9IFtcImFuZ3J5XCIsIFwiZGlzYXBwb2ludGVkXCIsIFwibWVoXCIsIFwiaGFwcHlcIiwgXCJpbkxvdmVcIl07XHJcbiAgICAgIH1cclxuICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW1vdGlvblNpemU6IHF1ZXN0aW9uLmVtb3Rpb25TaXplLFxyXG4gICAgICAgIGJnRW1vdGlvbjogcXVlc3Rpb24uYmdFbW90aW9uLFxyXG4gICAgICAgIGVtb3Rpb25zOiBlbW90aW9ucyxcclxuICAgICAgICBpbml0aWFsUmF0aW5nOiBxdWVzdGlvbi52YWx1ZSxcclxuICAgICAgICBjb2xvcjogcXVlc3Rpb24uZW1vdGlvbkNvbG9yLFxyXG4gICAgICAgIGNvdW50OiBxdWVzdGlvbi5lbW90aW9uc0NvdW50LFxyXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgIHF1ZXN0aW9uLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgaW5pdFdpZGdldCgpO1xyXG5cclxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBpbml0V2lkZ2V0O1xyXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGluaXRXaWRnZXQ7XHJcblxyXG4gICAgICBmdW5jdGlvbiBpbml0V2lkZ2V0KCkge1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiPGRpdj48L2Rpdj5cIjtcclxuICAgICAgICAkKGVsKS5vZmYoKTtcclxuICAgICAgICBvcHRpb25zLmluaXRpYWxSYXRpbmcgPSBxdWVzdGlvbi52YWx1ZSB8fCAwO1xyXG4gICAgICAgIG9wdGlvbnMuZGlzYWJsZWQgPSBxdWVzdGlvbi5pc1JlYWRPbmx5O1xyXG4gICAgICAgICQoZWwpLmZpbmQoXCJkaXZcIikuZW1vdGlvbnNSYXRpbmcob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24gKHF1ZXN0aW9uLCBlbCkge1xyXG4gICAgICBlbC5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAkKGVsKS5vZmYoKTtcclxuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgcGRmUXVlc3Rpb25UeXBlOiBcImRyb3Bkb3duXCIsXHJcbiAgfTtcclxuXHJcbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Vtb3Rpb25zcmF0aW5ncy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEyIl0sInNvdXJjZVJvb3QiOiIifQ==