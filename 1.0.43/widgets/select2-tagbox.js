(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/select2-tagbox", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/select2-tagbox"] = factory();
	else
		root["widgets/select2-tagbox"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function init(Survey, $) {
  $ = $ || window.$;
  var widget = {
    name: "tagbox",
    title: "Tag box",
    iconName: "icon-tagbox",
    widgetIsLoaded: function() {
      return typeof $ == "function" && !!$.fn.select2;
    },
    defaultJSON: {
      choices: ["Item 1", "Item 2", "Item 3"]
    },
    htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
    isFit: function(question) {
      return question.getType() === "tagbox";
    },
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass(
        "tagbox",
        [
          {
            name: "hasOther",
            visible: false
          }
        ],
        null,
        "checkbox"
      );
      Survey.JsonObject.metaData.addProperty("tagbox", {
        name: "select2Config",
        default: null
      });
    },
    afterRender: function(question, el) {
      var settings = question.select2Config;
      var $el = $(el).is("select") ? $(el) : $(el).find("select");
      $el.select2({
        tags: "true",
        disabled: question.isReadOnly,
        theme: "classic"
      });
      var updateValueHandler = function() {
        $el.val(question.value).trigger("change");
      };
      var updateChoices = function() {
        $el.select2().empty();

        if (settings) {
          if (settings.ajax) {
            $el.select2(settings);
          } else {
            settings.data = question.visibleChoices.map(function(choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            });
            $el.select2(settings);
          }
        } else {
          $el.select2({
            data: question.visibleChoices.map(function(choice) {
              return {
                id: choice.value,
                text: choice.text
              };
            })
          });
        }

        updateValueHandler();
      };

      question.readOnlyChangedCallback = function() {
        $el.prop("disabled", question.isReadOnly);
      };

      question.choicesChangedCallback = updateChoices;
      question.valueChangedCallback = updateValueHandler;
      $el.on("select2:select", function(e) {
        question.value = (question.value || []).concat(e.params.data.id);
      });
      $el.on("select2:unselect", function(e) {
        var index = (question.value || []).indexOf(e.params.data.id);
        if (index !== -1) {
          var val = question.value;
          val.splice(index, 1);
          question.value = val;
        }
      });
      updateChoices();
    },
    willUnmount: function(question, el) {
      $(el)
        .find("select")
        .off("select2:select")
        .select2("destroy");
      question.readOnlyChangedCallback = null;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NjdlNTNlZmM4OGFmOWI1YWRmMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0Mi10YWdib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6IndpZGdldHMvc2VsZWN0Mi10YWdib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvc2VsZWN0Mi10YWdib3hcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9zZWxlY3QyLXRhZ2JveFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aWRnZXRzL3NlbGVjdDItdGFnYm94XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NjdlNTNlZmM4OGFmOWI1YWRmMyIsImZ1bmN0aW9uIGluaXQoU3VydmV5LCAkKSB7XG4gICQgPSAkIHx8IHdpbmRvdy4kO1xuICB2YXIgd2lkZ2V0ID0ge1xuICAgIG5hbWU6IFwidGFnYm94XCIsXG4gICAgdGl0bGU6IFwiVGFnIGJveFwiLFxuICAgIGljb25OYW1lOiBcImljb24tdGFnYm94XCIsXG4gICAgd2lkZ2V0SXNMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiAkID09IFwiZnVuY3Rpb25cIiAmJiAhISQuZm4uc2VsZWN0MjtcbiAgICB9LFxuICAgIGRlZmF1bHRKU09OOiB7XG4gICAgICBjaG9pY2VzOiBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl1cbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTogXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9zZWxlY3Q+XCIsXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcInRhZ2JveFwiO1xuICAgIH0sXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXG4gICAgICAgIFwidGFnYm94XCIsXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImhhc090aGVyXCIsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJjaGVja2JveFwiXG4gICAgICApO1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkUHJvcGVydHkoXCJ0YWdib3hcIiwge1xuICAgICAgICBuYW1lOiBcInNlbGVjdDJDb25maWdcIixcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBxdWVzdGlvbi5zZWxlY3QyQ29uZmlnO1xuICAgICAgdmFyICRlbCA9ICQoZWwpLmlzKFwic2VsZWN0XCIpID8gJChlbCkgOiAkKGVsKS5maW5kKFwic2VsZWN0XCIpO1xuICAgICAgJGVsLnNlbGVjdDIoe1xuICAgICAgICB0YWdzOiBcInRydWVcIixcbiAgICAgICAgZGlzYWJsZWQ6IHF1ZXN0aW9uLmlzUmVhZE9ubHksXG4gICAgICAgIHRoZW1lOiBcImNsYXNzaWNcIlxuICAgICAgfSk7XG4gICAgICB2YXIgdXBkYXRlVmFsdWVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRlbC52YWwocXVlc3Rpb24udmFsdWUpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICB9O1xuICAgICAgdmFyIHVwZGF0ZUNob2ljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJGVsLnNlbGVjdDIoKS5lbXB0eSgpO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgICAgIGlmIChzZXR0aW5ncy5hamF4KSB7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRhdGEgPSBxdWVzdGlvbi52aXNpYmxlQ2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBjaG9pY2UudGV4dFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkZWwuc2VsZWN0MihzZXR0aW5ncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbC5zZWxlY3QyKHtcbiAgICAgICAgICAgIGRhdGE6IHF1ZXN0aW9uLnZpc2libGVDaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogY2hvaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNob2ljZS50ZXh0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG4gICAgICB9O1xuXG4gICAgICBxdWVzdGlvbi5yZWFkT25seUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWwucHJvcChcImRpc2FibGVkXCIsIHF1ZXN0aW9uLmlzUmVhZE9ubHkpO1xuICAgICAgfTtcblxuICAgICAgcXVlc3Rpb24uY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZUNob2ljZXM7XG4gICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IHVwZGF0ZVZhbHVlSGFuZGxlcjtcbiAgICAgICRlbC5vbihcInNlbGVjdDI6c2VsZWN0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcXVlc3Rpb24udmFsdWUgPSAocXVlc3Rpb24udmFsdWUgfHwgW10pLmNvbmNhdChlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgIH0pO1xuICAgICAgJGVsLm9uKFwic2VsZWN0Mjp1bnNlbGVjdFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IChxdWVzdGlvbi52YWx1ZSB8fCBbXSkuaW5kZXhPZihlLnBhcmFtcy5kYXRhLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhciB2YWwgPSBxdWVzdGlvbi52YWx1ZTtcbiAgICAgICAgICB2YWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBxdWVzdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB1cGRhdGVDaG9pY2VzKCk7XG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAub2ZmKFwic2VsZWN0MjpzZWxlY3RcIilcbiAgICAgICAgLnNlbGVjdDIoXCJkZXN0cm95XCIpO1xuICAgICAgcXVlc3Rpb24ucmVhZE9ubHlDaGFuZ2VkQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBTdXJ2ZXkuQ3VzdG9tV2lkZ2V0Q29sbGVjdGlvbi5JbnN0YW5jZS5hZGRDdXN0b21XaWRnZXQod2lkZ2V0LCBcImN1c3RvbXR5cGVcIik7XG59XG5cbmlmICh0eXBlb2YgU3VydmV5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGluaXQoU3VydmV5LCB3aW5kb3cuJCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWxlY3QyLXRhZ2JveC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgOCJdLCJzb3VyY2VSb290IjoiIn0=