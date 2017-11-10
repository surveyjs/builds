(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/jquery-bar-rating", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/jquery-bar-rating"] = factory();
	else
		root["widgets/jquery-bar-rating"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey) {
    var widget = {
        name: "barrating",
        title: "Bar rating",
        iconName: "icon-barrating",
        widgetIsLoaded: function() { return typeof Barrating !== undefined; },
        defaultJSON: {choices: [1, 2, 3, 4, 5]},
        isFit : function(question) { return question.getType() === 'barrating'; },
        isDefaultRender: true,
        activatedByChanged: function(activatedBy) {
            Survey.JsonObject.metaData.addClass("barrating", [ {name: "showValues:boolean", default: false}, 
            {name:"hasOther", visible: false}, {name: "otherText", visible: false}, {name: "optionsCaption", visible: false}, 
            {name: "otherErrorText", visible: false}, {name: "storeOthersAsComment", visible: false}, {name: "renderAs", visible: false}], null, "dropdown");
            Survey.JsonObject.metaData.addProperty("barrating", {name: "ratingTheme", default: "fontawesome-stars", choices: ["fontawesome-stars", "css-stars", "bars-pill", "bars-1to10", "bars-movie", "bars-square", "bars-reversed", "bars-horizontal", "bootstrap-stars", "fontawesome-stars-o"]});
        },
        afterRender: function(question, el) {
            var $el = $(el).is("select") ? $(el) : $(el).find("select");
            $el.barrating('show', {
                theme: question.ratingTheme,
                initialRating: question.value,
                showValues: question.showValues,
                showSelectedRating: false,
                onSelect: function(value, text) {
                    question.value = value;
                }
            });
            question.valueChangedCallback = function() {
                $(el).find('select').barrating('set', question.value);
            }
        },
        willUnmount: function(question, el) {
            var $el = $(el).find("select");
            $el.barrating('destroy');
        } 
    }

    Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
    init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMzU0NTA3NTNkNmU1NDNhM2Y1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LWJhci1yYXRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUMsRUFBRTtBQUM3RSxzQkFBc0IseUJBQXlCO0FBQy9DLG9DQUFvQywyQ0FBMkMsRUFBRTtBQUNqRjtBQUNBO0FBQ0EsZ0VBQWdFLDJDQUEyQztBQUMzRyxhQUFhLGdDQUFnQyxHQUFHLGtDQUFrQyxHQUFHLHVDQUF1QztBQUM1SCxhQUFhLHVDQUF1QyxHQUFHLDZDQUE2QyxHQUFHLGlDQUFpQztBQUN4SSxpRUFBaUUscU9BQXFPO0FBQ3RTLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFIiwiZmlsZSI6IndpZGdldHMvanF1ZXJ5LWJhci1yYXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvanF1ZXJ5LWJhci1yYXRpbmdcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9qcXVlcnktYmFyLXJhdGluZ1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL2pxdWVyeS1iYXItcmF0aW5nXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzNTQ1MDc1M2Q2ZTU0M2EzZjVlIiwiZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcclxuICAgIHZhciB3aWRnZXQgPSB7XHJcbiAgICAgICAgbmFtZTogXCJiYXJyYXRpbmdcIixcclxuICAgICAgICB0aXRsZTogXCJCYXIgcmF0aW5nXCIsXHJcbiAgICAgICAgaWNvbk5hbWU6IFwiaWNvbi1iYXJyYXRpbmdcIixcclxuICAgICAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7IHJldHVybiB0eXBlb2YgQmFycmF0aW5nICE9PSB1bmRlZmluZWQ7IH0sXHJcbiAgICAgICAgZGVmYXVsdEpTT046IHtjaG9pY2VzOiBbMSwgMiwgMywgNCwgNV19LFxyXG4gICAgICAgIGlzRml0IDogZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmdldFR5cGUoKSA9PT0gJ2JhcnJhdGluZyc7IH0sXHJcbiAgICAgICAgaXNEZWZhdWx0UmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2YXRlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYWN0aXZhdGVkQnkpIHtcclxuICAgICAgICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJiYXJyYXRpbmdcIiwgWyB7bmFtZTogXCJzaG93VmFsdWVzOmJvb2xlYW5cIiwgZGVmYXVsdDogZmFsc2V9LCBcclxuICAgICAgICAgICAge25hbWU6XCJoYXNPdGhlclwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm90aGVyVGV4dFwiLCB2aXNpYmxlOiBmYWxzZX0sIHtuYW1lOiBcIm9wdGlvbnNDYXB0aW9uXCIsIHZpc2libGU6IGZhbHNlfSwgXHJcbiAgICAgICAgICAgIHtuYW1lOiBcIm90aGVyRXJyb3JUZXh0XCIsIHZpc2libGU6IGZhbHNlfSwge25hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnRcIiwgdmlzaWJsZTogZmFsc2V9LCB7bmFtZTogXCJyZW5kZXJBc1wiLCB2aXNpYmxlOiBmYWxzZX1dLCBudWxsLCBcImRyb3Bkb3duXCIpO1xyXG4gICAgICAgICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRQcm9wZXJ0eShcImJhcnJhdGluZ1wiLCB7bmFtZTogXCJyYXRpbmdUaGVtZVwiLCBkZWZhdWx0OiBcImZvbnRhd2Vzb21lLXN0YXJzXCIsIGNob2ljZXM6IFtcImZvbnRhd2Vzb21lLXN0YXJzXCIsIFwiY3NzLXN0YXJzXCIsIFwiYmFycy1waWxsXCIsIFwiYmFycy0xdG8xMFwiLCBcImJhcnMtbW92aWVcIiwgXCJiYXJzLXNxdWFyZVwiLCBcImJhcnMtcmV2ZXJzZWRcIiwgXCJiYXJzLWhvcml6b250YWxcIiwgXCJib290c3RyYXAtc3RhcnNcIiwgXCJmb250YXdlc29tZS1zdGFycy1vXCJdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5pcyhcInNlbGVjdFwiKSA/ICQoZWwpIDogJChlbCkuZmluZChcInNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJGVsLmJhcnJhdGluZygnc2hvdycsIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBxdWVzdGlvbi5yYXRpbmdUaGVtZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxSYXRpbmc6IHF1ZXN0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1ZhbHVlczogcXVlc3Rpb24uc2hvd1ZhbHVlcyxcclxuICAgICAgICAgICAgICAgIHNob3dTZWxlY3RlZFJhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24odmFsdWUsIHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ3NlbGVjdCcpLmJhcnJhdGluZygnc2V0JywgcXVlc3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xyXG4gICAgICAgICAgICAkZWwuYmFycmF0aW5nKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpbml0KFN1cnZleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanF1ZXJ5LWJhci1yYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDgiXSwic291cmNlUm9vdCI6IiJ9