(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("widgets/microphone", [], factory);
	else if(typeof exports === 'object')
		exports["widgets/microphone"] = factory();
	else
		root["widgets/microphone"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recordrtc__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recordrtc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recordrtc__);


function init(Survey) {
  var widget = {
	
    name: "microphone",
    title: "Microphone",
    iconName: "icon-microphone",
    widgetIsLoaded: function() {
      return typeof __WEBPACK_IMPORTED_MODULE_0_recordrtc___default.a != "undefined";
    },
    isFit: function(question) {
      return question.getType() === "microphone";
    },
    htmlTemplate:
		"<div>"+
		"<button type='button'  title='Record'><i class='fa fa-microphone' aria-hidden='true'></i></button>"+ 
		"&nbsp;<button type='button' title='Save'><i class='fa fa-cloud' aria-hidden='true'></i></button>"+
		"&nbsp;<audio style='"+
		"position:relative; "+
		"top:16px; "+
		"left:10px; "+
		"height:35px;"+
		"-moz-box-shadow: 2px 2px 4px 0px #006773;"+
		"-webkit-box-shadow:  2px 2px 4px 0px #006773;"+
		"box-shadow: 2px 2px 4px 0px #006773;"+
		"' "+
		"controls='true' >"+
		"</audio>"+
		"</div>",
    activatedByChanged: function(activatedBy) {
      Survey.JsonObject.metaData.addClass("microphone", [], null, "empty");
    },
	
    afterRender: function(question, el) {
      var rootWidget = this;
	  var buttonStartEl = el.getElementsByTagName("button")[0];
	  var buttonStopEl = el.getElementsByTagName("button")[1];
	  var audioEl = el.getElementsByTagName("audio")[0];
	 
//////////  RecordRTC logic	
	  
	  var successCallback = function(stream) {
		var options={
			type: 'audio',
			mimeType: 'audio/webm',
			audioBitsPerSecond: 44100,
			sampleRate: 44100, 
			bufferSize: 16384, 
			numberOfAudioChannels: 1
		};  
		console.log("successCallback");
		question.survey.mystream = stream;
		question.survey.recordRTC = __WEBPACK_IMPORTED_MODULE_0_recordrtc___default()(question.survey.mystream, options);
		if(typeof question.survey.recordRTC != "undefined"){
			console.log("startRecording");
			question.survey.recordRTC.startRecording();
		}
	  };

	  var errorCallback=function() {
		alert('No microphone');
		question.survey.recordRTC=undefined;
		question.survey.mystream=undefined;
	  };

	  var processAudio= function(audioVideoWebMURL) {
		console.log("processAudio");
		var recordedBlob = question.survey.recordRTC.getBlob();
		
		var fileReader = new FileReader();
        fileReader.onload = function(event){
		  var dataUri = event.target.result;
		  console.log("dataUri: " +dataUri);
		  question.value = dataUri;
		  audioEl.src=dataUri;
		  
		  console.log("cleaning");
		  question.survey.recordRTC=undefined;
		  question.survey.mystream=undefined;
        };
        fileReader.readAsDataURL(recordedBlob);
	  };

      var startRecording=function() {
		  
		 // erase previous data 
		 question.value=undefined;
		
       	// if recorder open on another question	- try to stop recording		
		if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(doNothingHandler);
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				}
				);
			}
		}
			 
		var mediaConstraints = {
		  video: false,
		  audio: true
		};
		
		navigator.mediaDevices
			.getUserMedia(mediaConstraints)
			.then(successCallback.bind(this), errorCallback.bind(this));
     };

	  var stopRecording=function() {
		  console.log("stopRecording");
		  if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(processAudio.bind(this));
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				}
				);
			}
		  }
	  };
	
//////////////  end RTC logic //////////////////
	  
	  if (!question.isReadOnly) {
        buttonStartEl.onclick = startRecording;
      } else {
        buttonStartEl.parentNode.removeChild(buttonStartEl);
      }
	  
	  if (!question.isReadOnly) {
        buttonStopEl.onclick = stopRecording;
      } else {
        buttonStopEl.parentNode.removeChild(buttonStopEl);
      }
	  
	  
      audioEl.src=question.value
      
      var updateValueHandler = function() {
        
      };
	  
	  var doNothingHandler = function() {
        
      };
	  
      question.valueChangedCallback = updateValueHandler;
      updateValueHandler();
	  
     
    },
    willUnmount: function(question, el) {
      console.log("unmount microphone no record ");
      if(typeof question.survey.recordRTC != "undefined"){
			question.survey.recordRTC.stopRecording(doNothingHandler);
			if(typeof question.survey.mystream != "undefined"){
				question.survey.mystream.getAudioTracks().forEach(function(track) {
				track.stop();
				});
			}
		question.value=undefined;
		question.survey.recordRTC=undefined;
		question.survey.mystream=undefined;
	   }
    }
  };

  Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
}

if (typeof Survey !== "undefined") {
  init(Survey);
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2018-06-17 2:39:19 AM UTC

// ________________
// RecordRTC v5.4.7

// Open-Sourced: https://github.com/muaz-khan/RecordRTC

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows. 
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function RecordRTC(mediaStream, config) {
    if (!mediaStream) {
        throw 'First parameter is required.';
    }

    config = config || {
        type: 'video'
    };

    config = new RecordRTCConfiguration(mediaStream, config);

    // a reference to user's recordRTC object
    var self = this;

    function startRecording(config2) {
        if (!!config2) {
            // allow users to set options using startRecording method
            // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
            config = new RecordRTCConfiguration(mediaStream, config2);
        }

        if (!config.disableLogs) {
            console.log('started recording ' + config.type + ' stream.');
        }

        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder.record();

            setState('recording');

            if (self.recordingDuration) {
                handleRecordingDuration();
            }
            return self;
        }

        initRecorder(function() {
            if (self.recordingDuration) {
                handleRecordingDuration();
            }
        });

        return self;
    }

    function initRecorder(initCallback) {
        if (initCallback) {
            config.initCallback = function() {
                initCallback();
                initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
            };
        }

        var Recorder = new GetRecorderType(mediaStream, config);

        mediaRecorder = new Recorder(mediaStream, config);
        mediaRecorder.record();

        setState('recording');

        if (!config.disableLogs) {
            console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
        }
    }

    function stopRecording(callback) {
        callback = callback || function() {};

        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state === 'paused') {
            self.resumeRecording();

            setTimeout(function() {
                stopRecording(callback);
            }, 1);
            return;
        }

        if (self.state !== 'recording' && !config.disableLogs) {
            console.warn('Recording state should be: "recording", however current state is: ', self.state);
        }

        if (!config.disableLogs) {
            console.log('Stopped recording ' + config.type + ' stream.');
        }

        if (config.type !== 'gif') {
            mediaRecorder.stop(_callback);
        } else {
            mediaRecorder.stop();
            _callback();
        }

        setState('stopped');

        function _callback(__blob) {
            if (!mediaRecorder) {
                if (typeof callback.call === 'function') {
                    callback.call(self, '');
                } else {
                    callback('');
                }
                return;
            }

            Object.keys(mediaRecorder).forEach(function(key) {
                if (typeof mediaRecorder[key] === 'function') {
                    return;
                }

                self[key] = mediaRecorder[key];
            });

            var blob = mediaRecorder.blob;

            if (!blob) {
                if (__blob) {
                    mediaRecorder.blob = blob = __blob;
                } else {
                    throw 'Recording failed.';
                }
            }

            if (blob && !config.disableLogs) {
                console.log(blob.type, '->', bytesToSize(blob.size));
            }

            if (callback) {
                var url = URL.createObjectURL(blob);

                if (typeof callback.call === 'function') {
                    callback.call(self, url);
                } else {
                    callback(url);
                }
            }

            if (!config.autoWriteToDisk) {
                return;
            }

            getDataURL(function(dataURL) {
                var parameter = {};
                parameter[config.type + 'Blob'] = dataURL;
                DiskStorage.Store(parameter);
            });
        }
    }

    function pauseRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'recording') {
            if (!config.disableLogs) {
                console.warn('Unable to pause the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('paused');

        mediaRecorder.pause();

        if (!config.disableLogs) {
            console.log('Paused recording.');
        }
    }

    function resumeRecording() {
        if (!mediaRecorder) {
            warningLog();
            return;
        }

        if (self.state !== 'paused') {
            if (!config.disableLogs) {
                console.warn('Unable to resume the recording. Recording state: ', self.state);
            }
            return;
        }

        setState('recording');

        // not all libs have this method yet
        mediaRecorder.resume();

        if (!config.disableLogs) {
            console.log('Resumed recording.');
        }
    }

    function readFile(_blob) {
        postMessage(new FileReaderSync().readAsDataURL(_blob));
    }

    function getDataURL(callback, _mediaRecorder) {
        if (!callback) {
            throw 'Pass a callback function over getDataURL.';
        }

        var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

        if (!blob) {
            if (!config.disableLogs) {
                console.warn('Blob encoder did not finish its job yet.');
            }

            setTimeout(function() {
                getDataURL(callback, _mediaRecorder);
            }, 1000);
            return;
        }

        if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
            var webWorker = processInWebWorker(readFile);

            webWorker.onmessage = function(event) {
                callback(event.data);
            };

            webWorker.postMessage(blob);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function(event) {
                callback(event.target.result);
            };
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            URL.revokeObjectURL(blob);
            return worker;
        }
    }

    function handleRecordingDuration(counter) {
        counter = counter || 0;

        if (self.state === 'paused') {
            setTimeout(function() {
                handleRecordingDuration(counter);
            }, 1000);
            return;
        }

        if (self.state === 'stopped') {
            return;
        }

        if (counter >= self.recordingDuration) {
            stopRecording(self.onRecordingStopped);
            return;
        }

        counter += 1000; // 1-second

        setTimeout(function() {
            handleRecordingDuration(counter);
        }, 1000);
    }

    function setState(state) {
        if (!self) {
            return;
        }

        self.state = state;

        if (typeof self.onStateChanged.call === 'function') {
            self.onStateChanged.call(self, state);
        } else {
            self.onStateChanged(state);
        }
    }

    var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

    function warningLog() {
        if (config.disableLogs === true) {
            return;
        }

        console.warn(WARNING);
    }

    var mediaRecorder;

    var returnObject = {
        /**
         * This method starts the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var recorder = RecordRTC(mediaStream, {
         *     type: 'video'
         * });
         * recorder.startRecording();
         */
        startRecording: startRecording,

        /**
         * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     // use either "this" or "recorder" object; both are identical
         *     video.src = this.toURL();
         *     var blob = this.getBlob();
         * });
         */
        stopRecording: stopRecording,

        /**
         * This method pauses the recording. You can resume recording using "resumeRecording" method.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Firefox is unable to pause the recording. Fix it.
         * @example
         * recorder.pauseRecording();  // pause the recording
         * recorder.resumeRecording(); // resume again
         */
        pauseRecording: pauseRecording,

        /**
         * This method resumes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.pauseRecording();  // first of all, pause the recording
         * recorder.resumeRecording(); // now resume it
         */
        resumeRecording: resumeRecording,

        /**
         * This method initializes the recording.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * recorder.initRecorder();
         */
        initRecorder: initRecorder,

        /**
         * Ask RecordRTC to auto-stop the recording after 5 minutes.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var fiveMinutes = 5 * 1000 * 60;
         * recorder.setRecordingDuration(fiveMinutes, function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         * 
         * // or otherwise
         * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
         *    var blob = this.getBlob();
         *    video.src = this.toURL();
         * });
         */
        setRecordingDuration: function(recordingDuration, callback) {
            if (typeof recordingDuration === 'undefined') {
                throw 'recordingDuration is required.';
            }

            if (typeof recordingDuration !== 'number') {
                throw 'recordingDuration must be a number.';
            }

            self.recordingDuration = recordingDuration;
            self.onRecordingStopped = callback || function() {};

            return {
                onRecordingStopped: function(callback) {
                    self.onRecordingStopped = callback;
                }
            };
        },

        /**
         * This method can be used to clear/reset all the recorded data.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
         * @example
         * recorder.clearRecordedData();
         */
        clearRecordedData: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            mediaRecorder.clearRecordedData();

            if (!config.disableLogs) {
                console.log('Cleared old recorded data.');
            }
        },

        /**
         * Get the recorded blob. Use this method inside the "stopRecording" callback.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.getBlob();
         *
         *     var file = new File([blob], 'filename.webm', {
         *         type: 'video/webm'
         *     });
         *
         *     var formData = new FormData();
         *     formData.append('file', file); // upload "File" object rather than a "Blob"
         *     uploadToServer(formData);
         * });
         * @returns {Blob} Returns recorded data as "Blob" object.
         */
        getBlob: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return mediaRecorder.blob;
        },

        /**
         * Get data-URI instead of Blob.
         * @param {function} callback - Callback to get the Data-URI.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     recorder.getDataURL(function(dataURI) {
         *         video.src = dataURI;
         *     });
         * });
         */
        getDataURL: getDataURL,

        /**
         * Get virtual/temporary URL. Usage of this URL is limited to current tab.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     video.src = this.toURL();
         * });
         * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
         */
        toURL: function() {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            return URL.createObjectURL(mediaRecorder.blob);
        },

        /**
         * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * var internal = recorder.getInternalRecorder();
         * if(internal instanceof MultiStreamRecorder) {
         *     internal.addStreams([newAudioStream]);
         *     internal.resetVideoStreams([screenStream]);
         * }
         * @returns {Object} Returns internal recording object.
         */
        getInternalRecorder: function() {
            return mediaRecorder;
        },

        /**
         * Invoke save-as dialog to save the recorded blob into your disk.
         * @param {string} fileName - Set your own file name.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.stopRecording(function() {
         *     this.save('file-name');
         *
         *     // or manually:
         *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
         * });
         */
        save: function(fileName) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            invokeSaveAsDialog(mediaRecorder.blob, fileName);
        },

        /**
         * This method gets a blob from indexed-DB storage.
         * @param {function} callback - Callback to get the recorded blob.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.getFromDisk(function(dataURL) {
         *     video.src = dataURL;
         * });
         */
        getFromDisk: function(callback) {
            if (!mediaRecorder) {
                warningLog();
                return;
            }

            RecordRTC.getFromDisk(config.type, callback);
        },

        /**
         * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
         * @type {Array.<Array>}
         * @param {Array} arrayOfWebPImages - Array of webp images.
         * @method
         * @memberof RecordRTC
         * @instance
         * @todo This method should be deprecated.
         * @example
         * var arrayOfWebPImages = [];
         * arrayOfWebPImages.push({
         *     duration: index,
         *     image: 'data:image/webp;base64,...'
         * });
         * recorder.setAdvertisementArray(arrayOfWebPImages);
         */
        setAdvertisementArray: function(arrayOfWebPImages) {
            config.advertisement = [];

            var length = arrayOfWebPImages.length;
            for (var i = 0; i < length; i++) {
                config.advertisement.push({
                    duration: i,
                    image: arrayOfWebPImages[i]
                });
            }
        },

        /**
         * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
         * @property {Blob} blob - Recorded Blob can be accessed using this property.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var blob = this.blob;
         *
         *     // below one is recommended
         *     var blob = this.getBlob();
         * });
         */
        blob: null,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} bufferSize - Buffer-size used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used this buffer-size: ' + this.bufferSize);
         * });
         */
        bufferSize: 0,

        /**
         * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
         * @property {number} sampleRate - Sample-rates used to encode the WAV container
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     alert('Recorder used these sample-rates: ' + this.sampleRate);
         * });
         */
        sampleRate: 0,

        /**
         * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
         * @memberof RecordRTC
         * @instance
         * @readonly
         * @example
         * recorder.stopRecording(function() {
         *     var arrayBuffer = this.buffer;
         *     alert(arrayBuffer.byteLength);
         * });
         */
        buffer: null,

        /**
         * This method resets the recorder. So that you can reuse single recorder instance many times.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.reset();
         * recorder.startRecording();
         */
        reset: function() {
            if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
                mediaRecorder.clearRecordedData();
            }
            mediaRecorder = null;
            setState('inactive');
            self.blob = null;
        },

        /**
         * This method is called whenever recorder's state changes. Use this as an "event".
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @method
         * @memberof RecordRTC
         * @instance
         * @example
         * recorder.onStateChanged = function(state) {
         *     console.log('Recorder state: ', state);
         * };
         */
        onStateChanged: function(state) {
            if (!config.disableLogs) {
                console.log('Recorder state changed:', state);
            }
        },

        /**
         * A recorder can have inactive, recording, paused or stopped states.
         * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * // this looper function will keep you updated about the recorder's states.
         * (function looper() {
         *     document.querySelector('h1').innerHTML = 'Recorder's state is: ' + recorder.state;
         *     if(recorder.state === 'stopped') return; // ignore+stop
         *     setTimeout(looper, 1000); // update after every 3-seconds
         * })();
         * recorder.startRecording();
         */
        state: 'inactive',

        /**
         * Get recorder's readonly state.
         * @method
         * @memberof RecordRTC
         * @example
         * var state = recorder.getState();
         * @returns {String} Returns recording state.
         */
        getState: function() {
            return self.state;
        },

        /**
         * Destroy RecordRTC instance. Clear all recorders and objects.
         * @method
         * @memberof RecordRTC
         * @example
         * recorder.destroy();
         */
        destroy: function() {
            var disableLogsCache = config.disableLogs;

            config = {
                disableLogs: true
            };
            self.reset();
            setState('destroyed');
            returnObject = self = null;

            if (Storage.AudioContextConstructor) {
                Storage.AudioContextConstructor.close();
                Storage.AudioContextConstructor = null;
            }

            config.disableLogs = disableLogsCache;

            if (!config.disableLogs) {
                console.warn('RecordRTC is destroyed.');
            }
        },

        /**
         * RecordRTC version number
         * @property {String} version - Release version number.
         * @memberof RecordRTC
         * @static
         * @readonly
         * @example
         * alert(recorder.version);
         */
        version: '5.4.7'
    };

    if (!this) {
        self = returnObject;
        return returnObject;
    }

    // if someone wants to use RecordRTC with the "new" keyword.
    for (var prop in returnObject) {
        this[prop] = returnObject[prop];
    }

    self = this;

    return returnObject;
}

RecordRTC.version = '5.4.7';

if (true /* && !!module.exports*/ ) {
    module.exports = RecordRTC;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return RecordRTC;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

RecordRTC.getFromDisk = function(type, callback) {
    if (!callback) {
        throw 'callback is mandatory.';
    }

    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
    DiskStorage.Fetch(function(dataURL, _type) {
        if (type !== 'all' && _type === type + 'Blob' && callback) {
            callback(dataURL);
        }

        if (type === 'all' && callback) {
            callback(dataURL, _type.replace('Blob', ''));
        }
    });
};

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
RecordRTC.writeToDisk = function(options) {
    console.log('Writing recorded blob(s) to disk!');
    options = options || {};
    if (options.audio && options.video && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                options.gif.getDataURL(function(gifDataURL) {
                    DiskStorage.Store({
                        audioBlob: audioDataURL,
                        videoBlob: videoDataURL,
                        gifBlob: gifDataURL
                    });
                });
            });
        });
    } else if (options.audio && options.video) {
        options.audio.getDataURL(function(audioDataURL) {
            options.video.getDataURL(function(videoDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    videoBlob: videoDataURL
                });
            });
        });
    } else if (options.audio && options.gif) {
        options.audio.getDataURL(function(audioDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    audioBlob: audioDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.video && options.gif) {
        options.video.getDataURL(function(videoDataURL) {
            options.gif.getDataURL(function(gifDataURL) {
                DiskStorage.Store({
                    videoBlob: videoDataURL,
                    gifBlob: gifDataURL
                });
            });
        });
    } else if (options.audio) {
        options.audio.getDataURL(function(audioDataURL) {
            DiskStorage.Store({
                audioBlob: audioDataURL
            });
        });
    } else if (options.video) {
        options.video.getDataURL(function(videoDataURL) {
            DiskStorage.Store({
                videoBlob: videoDataURL
            });
        });
    } else if (options.gif) {
        options.gif.getDataURL(function(gifDataURL) {
            DiskStorage.Store({
                gifBlob: gifDataURL
            });
        });
    }
};

// __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */

function RecordRTCConfiguration(mediaStream, config) {
    if (!config.recorderType && !config.type) {
        if (!!config.audio && !!config.video) {
            config.type = 'video';
        } else if (!!config.audio && !config.video) {
            config.type = 'audio';
        }
    }

    if (config.recorderType && !config.type) {
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
                config.type = 'video';
            } else if (mediaStream.getAudioTracks().length && !mediaStream.getVideoTracks().length) {
                config.type = 'audio';
            } else if (!mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
                config.type = 'audio';
            } else {
                // config.type = 'UnKnown';
            }
        }
    }

    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if (!config.mimeType) {
            config.mimeType = 'video/webm';
        }

        if (!config.type) {
            config.type = config.mimeType.split('/')[0];
        }

        if (!config.bitsPerSecond) {
            // config.bitsPerSecond = 128000;
        }
    }

    // consider default type=audio
    if (!config.type) {
        if (config.mimeType) {
            config.type = config.mimeType.split('/')[0];
        }
        if (!config.type) {
            config.type = 'audio';
        }
    }

    return config;
}

// __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */

function GetRecorderType(mediaStream, config) {
    var recorder;

    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
    if (isChrome || isEdge || isOpera) {
        // Media Stream Recording API has not been implemented in chrome yet;
        // That's why using WebAudio API to record stereo audio in WAV format
        recorder = StereoAudioRecorder;
    }

    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
        recorder = MediaStreamRecorder;
    }

    // video recorder (in WebM format)
    if (config.type === 'video' && (isChrome || isOpera)) {
        recorder = WhammyRecorder;
    }

    // video recorder (in Gif format)
    if (config.type === 'gif') {
        recorder = GifRecorder;
    }

    // html2canvas recording!
    if (config.type === 'canvas') {
        recorder = CanvasRecorder;
    }

    if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
        if ((mediaStream.getVideoTracks && mediaStream.getVideoTracks().length) || (mediaStream.getAudioTracks && mediaStream.getAudioTracks().length)) {
            // audio-only recording
            if (config.type === 'audio') {
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
                    recorder = MediaStreamRecorder;
                }
                // else recorder = StereoAudioRecorder;
            } else {
                // video or screen tracks
                if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
                    recorder = MediaStreamRecorder;
                }
            }
        }
    }

    if (mediaStream instanceof Array && mediaStream.length) {
        recorder = MultiStreamRecorder;
    }

    if (config.recorderType) {
        recorder = config.recorderType;
    }

    if (!config.disableLogs && !!recorder && !!recorder.name) {
        console.log('Using recorderType:', recorder.name || recorder.constructor.name);
    }

    return recorder;
}

// _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */

function MRecordRTC(mediaStream) {

    /**
     * This method attaches MediaStream object to {@link MRecordRTC}.
     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.addStream(MediaStream);
     */
    this.addStream = function(_mediaStream) {
        if (_mediaStream) {
            mediaStream = _mediaStream;
        }
    };

    /**
     * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
     * @property {object} mediaType - {audio: true, video: true, gif: true}
     * @memberof MRecordRTC
     * @example
     * var recorder = new MRecordRTC();
     * recorder.mediaType = {
     *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder
     *     gif  : true  // TRUE or GifRecorder
     * };
     */
    this.mediaType = {
        audio: true,
        video: true
    };

    /**
     * This method starts recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.startRecording();
     */
    this.startRecording = function() {
        var mediaType = this.mediaType;
        var recorderType;
        var mimeType = this.mimeType || {
            audio: null,
            video: null,
            gif: null
        };

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && mediaStream.getAudioTracks && !mediaStream.getAudioTracks().length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && mediaStream.getVideoTracks && !mediaStream.getVideoTracks().length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && mediaStream.getVideoTracks && !mediaStream.getVideoTracks().length) {
            mediaType.gif = false;
        }

        if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
            throw 'MediaStream must have either audio or video tracks.';
        }

        if (!!mediaType.audio) {
            recorderType = null;
            if (typeof mediaType.audio === 'function') {
                recorderType = mediaType.audio;
            }

            this.audioRecorder = new RecordRTC(mediaStream, {
                type: 'audio',
                bufferSize: this.bufferSize,
                sampleRate: this.sampleRate,
                numberOfAudioChannels: this.numberOfAudioChannels || 2,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.audio,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.video) {
                this.audioRecorder.startRecording();
            }
        }

        if (!!mediaType.video) {
            recorderType = null;
            if (typeof mediaType.video === 'function') {
                recorderType = mediaType.video;
            }

            var newStream = mediaStream;

            if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
                var videoTrack = mediaStream.getVideoTracks()[0];

                if (!!navigator.mozGetUserMedia) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT support webp-encoding yet
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream([videoTrack]);
                }
            }

            this.videoRecorder = new RecordRTC(newStream, {
                type: 'video',
                video: this.video,
                canvas: this.canvas,
                frameInterval: this.frameInterval || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.video,
                timeSlice: this.timeSlice,
                onTimeStamp: this.onTimeStamp
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            // this line prevents StereoAudioRecorder
            // todo: fix it
            if (isMediaRecorderCompatible() /* && !this.audioRecorder */ ) {
                self.audioRecorder = null;
                self.videoRecorder.startRecording();
            } else {
                self.videoRecorder.initRecorder(function() {
                    self.audioRecorder.initRecorder(function() {
                        // Both recorders are ready to record things accurately
                        self.videoRecorder.startRecording();
                        self.audioRecorder.startRecording();
                    });
                });
            }
        }

        if (!!mediaType.gif) {
            recorderType = null;
            if (typeof mediaType.gif === 'function') {
                recorderType = mediaType.gif;
            }
            this.gifRecorder = new RecordRTC(mediaStream, {
                type: 'gif',
                frameRate: this.frameRate || 200,
                quality: this.quality || 10,
                disableLogs: this.disableLogs,
                recorderType: recorderType,
                mimeType: mimeType.gif
            });
            this.gifRecorder.startRecording();
        }
    };

    /**
     * This method stops recording.
     * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.stopRecording(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     */
    this.stopRecording = function(callback) {
        callback = callback || function() {};

        if (this.audioRecorder) {
            this.audioRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'audio');
            });
        }

        if (this.videoRecorder) {
            this.videoRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'video');
            });
        }

        if (this.gifRecorder) {
            this.gifRecorder.stopRecording(function(blobURL) {
                callback(blobURL, 'gif');
            });
        }
    };

    /**
     * This method pauses recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.pauseRecording();
     */
    this.pauseRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.pauseRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.pauseRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.pauseRecording();
        }
    };

    /**
     * This method resumes recording.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.resumeRecording();
     */
    this.resumeRecording = function() {
        if (this.audioRecorder) {
            this.audioRecorder.resumeRecording();
        }

        if (this.videoRecorder) {
            this.videoRecorder.resumeRecording();
        }

        if (this.gifRecorder) {
            this.gifRecorder.resumeRecording();
        }
    };

    /**
     * This method can be used to manually get all recorded blobs.
     * @param {function} callback - All recorded blobs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getBlob(function(recording){
     *     var audioBlob = recording.audio;
     *     var videoBlob = recording.video;
     *     var gifBlob   = recording.gif;
     * });
     * // or
     * var audioBlob = recorder.getBlob().audio;
     * var videoBlob = recorder.getBlob().video;
     */
    this.getBlob = function(callback) {
        var output = {};

        if (this.audioRecorder) {
            output.audio = this.audioRecorder.getBlob();
        }

        if (this.videoRecorder) {
            output.video = this.videoRecorder.getBlob();
        }

        if (this.gifRecorder) {
            output.gif = this.gifRecorder.getBlob();
        }

        if (callback) {
            callback(output);
        }

        return output;
    };

    /**
     * Destroy all recorder instances.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.destroy();
     */
    this.destroy = function() {
        if (this.audioRecorder) {
            this.audioRecorder.destroy();
            this.audioRecorder = null;
        }

        if (this.videoRecorder) {
            this.videoRecorder.destroy();
            this.videoRecorder = null;
        }

        if (this.gifRecorder) {
            this.gifRecorder.destroy();
            this.gifRecorder = null;
        }
    };

    /**
     * This method can be used to manually get all recorded blobs' DataURLs.
     * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.getDataURL(function(recording){
     *     var audioDataURL = recording.audio;
     *     var videoDataURL = recording.video;
     *     var gifDataURL   = recording.gif;
     * });
     */
    this.getDataURL = function(callback) {
        this.getBlob(function(blob) {
            if (blob.audio && blob.video) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    getDataURL(blob.video, function(_videoDataURL) {
                        callback({
                            audio: _audioDataURL,
                            video: _videoDataURL
                        });
                    });
                });
            } else if (blob.audio) {
                getDataURL(blob.audio, function(_audioDataURL) {
                    callback({
                        audio: _audioDataURL
                    });
                });
            } else if (blob.video) {
                getDataURL(blob.video, function(_videoDataURL) {
                    callback({
                        video: _videoDataURL
                    });
                });
            }
        });

        function getDataURL(blob, callback00) {
            if (typeof Worker !== 'undefined') {
                var webWorker = processInWebWorker(function readFile(_blob) {
                    postMessage(new FileReaderSync().readAsDataURL(_blob));
                });

                webWorker.onmessage = function(event) {
                    callback00(event.data);
                };

                webWorker.postMessage(blob);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(event) {
                    callback00(event.target.result);
                };
            }
        }

        function processInWebWorker(_function) {
            var blob = URL.createObjectURL(new Blob([_function.toString(),
                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
            ], {
                type: 'application/javascript'
            }));

            var worker = new Worker(blob);
            var url;
            if (typeof URL !== 'undefined') {
                url = URL;
            } else if (typeof webkitURL !== 'undefined') {
                url = webkitURL;
            } else {
                throw 'Neither URL nor webkitURL detected.';
            }
            url.revokeObjectURL(blob);
            return worker;
        }
    };

    /**
     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.writeToDisk();
     */
    this.writeToDisk = function() {
        RecordRTC.writeToDisk({
            audio: this.audioRecorder,
            video: this.videoRecorder,
            gif: this.gifRecorder
        });
    };

    /**
     * This method can be used to invoke a save-as dialog for all recorded blobs.
     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
     * @method
     * @memberof MRecordRTC
     * @example
     * recorder.save({
     *     audio: 'audio-file-name',
     *     video: 'video-file-name',
     *     gif  : 'gif-file-name'
     * });
     */
    this.save = function(args) {
        args = args || {
            audio: true,
            video: true,
            gif: true
        };

        if (!!args.audio && this.audioRecorder) {
            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
        }

        if (!!args.video && this.videoRecorder) {
            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
        }
        if (!!args.gif && this.gifRecorder) {
            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
        }
    };
}

/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */
MRecordRTC.getFromDisk = RecordRTC.getFromDisk;

/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */
MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function(that) {
    if (!that) {
        return;
    }

    if (typeof window !== 'undefined') {
        return;
    }

    if (typeof global === 'undefined') {
        return;
    }

    global.navigator = {
        userAgent: browserFakeUserAgent,
        getUserMedia: function() {}
    };

    if (!global.console) {
        global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
        global.console.error = global.console.log = global.console.log || function() {
            console.log(arguments);
        };
    }

    if (typeof document === 'undefined') {
        /*global document:true */
        that.document = {};

        document.createElement = document.captureStream = document.mozCaptureStream = function() {
            var obj = {
                getContext: function() {
                    return obj;
                },
                play: function() {},
                pause: function() {},
                drawImage: function() {},
                toDataURL: function() {
                    return '';
                }
            };
            return obj;
        };

        that.HTMLVideoElement = function() {};
    }

    if (typeof location === 'undefined') {
        /*global location:true */
        that.location = {
            protocol: 'file:',
            href: '',
            hash: ''
        };
    }

    if (typeof screen === 'undefined') {
        /*global screen:true */
        that.screen = {
            width: 0,
            height: 0
        };
    }

    if (typeof URL === 'undefined') {
        /*global screen:true */
        that.URL = {
            createObjectURL: function() {
                return '';
            },
            revokeObjectURL: function() {
                return '';
            }
        };
    }

    /*global window:true */
    that.window = global;
})(typeof global !== 'undefined' ? global : null);

// _____________________________
// Cross-Browser-Declarations.js

// animation-frame used in WebM recording

/*jshint -W079 */
var requestAnimationFrame = window.requestAnimationFrame;
if (typeof requestAnimationFrame === 'undefined') {
    if (typeof webkitRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = webkitRequestAnimationFrame;
    } else if (typeof mozRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = mozRequestAnimationFrame;
    } else if (typeof msRequestAnimationFrame !== 'undefined') {
        /*global requestAnimationFrame:true */
        requestAnimationFrame = msRequestAnimationFrame;
    } else if (typeof requestAnimationFrame === 'undefined') {
        // via: https://gist.github.com/paulirish/1579671
        var lastTime = 0;

        /*global requestAnimationFrame:true */
        requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
}

/*jshint -W079 */
var cancelAnimationFrame = window.cancelAnimationFrame;
if (typeof cancelAnimationFrame === 'undefined') {
    if (typeof webkitCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = webkitCancelAnimationFrame;
    } else if (typeof mozCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = mozCancelAnimationFrame;
    } else if (typeof msCancelAnimationFrame !== 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = msCancelAnimationFrame;
    } else if (typeof cancelAnimationFrame === 'undefined') {
        /*global cancelAnimationFrame:true */
        cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}

// WebAudio API representer
var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
        /*global AudioContext:true */
        AudioContext = mozAudioContext;
    }
}

/*jshint -W079 */
var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
        navigator.getUserMedia = navigator.mozGetUserMedia;
    }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || isSafari;

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
    if (!('getVideoTracks' in MediaStream.prototype)) {
        MediaStream.prototype.getVideoTracks = function() {
            if (!this.getTracks) {
                return [];
            }

            var tracks = [];
            this.getTracks().forEach(function(track) {
                if (track.kind.toString().indexOf('video') !== -1) {
                    tracks.push(track);
                }
            });
            return tracks;
        };

        MediaStream.prototype.getAudioTracks = function() {
            if (!this.getTracks) {
                return [];
            }

            var tracks = [];
            this.getTracks().forEach(function(track) {
                if (track.kind.toString().indexOf('audio') !== -1) {
                    tracks.push(track);
                }
            });
            return tracks;
        };
    }

    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
        MediaStream.prototype.stop = function() {
            this.getTracks().forEach(function(track) {
                track.stop();
            });
        };
    }
}

// below function via: http://goo.gl/B3ae8c
/**
 * @param {number} bytes - Pass bytes and get formafted string.
 * @returns {string} - formafted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Bytes';
    }
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function invokeSaveAsDialog(file, fileName) {
    if (!file) {
        throw 'Blob object is required.';
    }

    if (!file.type) {
        try {
            file.type = 'video/webm';
        } catch (e) {}
    }

    var fileExtension = (file.type || 'video/webm').split('/')[1];

    if (fileName && fileName.indexOf('.') !== -1) {
        var splitted = fileName.split('.');
        fileName = splitted[0];
        fileExtension = splitted[1];
    }

    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;

    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
        return navigator.msSaveOrOpenBlob(file, fileFullName);
    } else if (typeof navigator.msSaveBlob !== 'undefined') {
        return navigator.msSaveBlob(file, fileFullName);
    }

    var hyperlink = document.createElement('a');
    hyperlink.href = URL.createObjectURL(file);
    hyperlink.download = fileFullName;

    hyperlink.style = 'display:none;opacity:0;color:transparent;';
    (document.body || document.documentElement).appendChild(hyperlink);

    if (typeof hyperlink.click === 'function') {
        hyperlink.click();
    } else {
        hyperlink.target = '_blank';
        hyperlink.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    URL.revokeObjectURL(hyperlink.href);
}

/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function setSrcObject(stream, element, ignoreCreateObjectURL) {
    if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
        try {
            element.src = URL.createObjectURL(stream);
        } catch (e) {
            setSrcObject(stream, element, true);
            return;
        }
    } else if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        alert('createObjectURL/srcObject both are not supported.');
    }
}

// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Storage = {};

if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = (!!window.chrome && !isOpera) || isElectron();
    var isFirefox = typeof window.InstallTrigger !== 'undefined';

    if (isFirefox) {
        return true;
    }

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    if (isChrome || isOpera) {
        verOffset = nAgt.indexOf('Chrome');
        fullVersion = nAgt.substring(verOffset + 7);
    }

    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(';')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
        fullVersion = fullVersion.substring(0, ix);
    }

    majorVersion = parseInt('' + fullVersion, 10);

    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return majorVersion >= 49;
}

// ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */

function MediaStreamRecorder(mediaStream, config) {
    var self = this;

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    if (typeof MediaRecorder === 'undefined') {
        throw 'Your browser does not supports Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
    }

    config = config || {
        // bitsPerSecond: 256 * 8 * 1024,
        mimeType: 'video/webm'
    };

    if (config.type === 'audio') {
        if (mediaStream.getVideoTracks().length && mediaStream.getAudioTracks().length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(mediaStream.getAudioTracks()[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(mediaStream.getAudioTracks());
            }
            mediaStream = stream;
        }

        if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
            config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
        }

        if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
            // forcing better codecs on Firefox (via #166)
            config.mimeType = 'audio/ogg';
        }
    }

    var arrayOfBlobs = [];

    /**
     * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var arrayOfBlobs = recorder.getArrayOfBlobs();
     * @returns {Array} Returns array of recorded blobs.
     */
    this.getArrayOfBlobs = function() {
        return arrayOfBlobs;
    };

    /**
     * This method records MediaStream.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // set defaults
        self.blob = null;
        self.clearRecordedData();
        self.timestamps = [];
        allStates = [];
        arrayOfBlobs = [];

        var recorderHints = config;

        if (!config.disableLogs) {
            console.log('Passing following config over MediaRecorder API.', recorderHints);
        }

        if (mediaRecorder) {
            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
            mediaRecorder = null;
        }

        if (isChrome && !isMediaRecorderCompatible()) {
            // to support video-only recording on stable
            recorderHints = 'video/vp8';
        }

        if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
            if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
                if (!config.disableLogs) {
                    console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
                }

                recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
            }
        }

        // using MediaRecorder API here
        try {
            mediaRecorder = new MediaRecorder(mediaStream, recorderHints);

            // reset
            config.mimeType = recorderHints.mimeType;
        } catch (e) {
            // chrome-based fallback
            mediaRecorder = new MediaRecorder(mediaStream);
        }

        // old hack?
        if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
            if (!config.disableLogs) {
                console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
            }
        }

        // Dispatching OnDataAvailable Handler
        mediaRecorder.ondataavailable = function(e) {
            if (e.data) {
                allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
            }

            if (typeof config.timeSlice === 'number') {
                if (e.data && e.data.size && e.data.size > 100) {
                    arrayOfBlobs.push(e.data);
                    updateTimeStamp();

                    if (typeof config.ondataavailable === 'function') {
                        // intervals based blobs
                        var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                            type: getMimeType(recorderHints)
                        });
                        config.ondataavailable(blob);
                    }
                }
                return;
            }

            if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
                // make sure that stopRecording always getting fired
                // even if there is invalid data
                if (self.recordingCallback) {
                    self.recordingCallback(new Blob([], {
                        type: getMimeType(recorderHints)
                    }));
                    self.recordingCallback = null;
                }
                return;
            }

            self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
                type: getMimeType(recorderHints)
            });

            if (self.recordingCallback) {
                self.recordingCallback(self.blob);
                self.recordingCallback = null;
            }
        };

        mediaRecorder.onstart = function() {
            allStates.push('started');
        };

        mediaRecorder.onpause = function() {
            allStates.push('paused');
        };

        mediaRecorder.onresume = function() {
            allStates.push('resumed');
        };

        mediaRecorder.onstop = function() {
            allStates.push('stopped');
        };

        mediaRecorder.onerror = function(error) {
            allStates.push('error: ' + error);

            if (!config.disableLogs) {
                // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
                if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
                } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
                    console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
                } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
                    console.error('MediaRecorder security error', error);
                }

                // older code below
                else if (error.name === 'OutOfMemory') {
                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'IllegalStreamModification') {
                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'OtherRecordingError') {
                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
                } else if (error.name === 'GenericError') {
                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
                } else {
                    console.error('MediaRecorder Error', error);
                }
            }

            (function(looper) {
                if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
                    delete config.timeslice;

                    // 10 minutes, enough?
                    mediaRecorder.start(10 * 60 * 1000);
                    return;
                }

                setTimeout(looper, 1000);
            })();

            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
                mediaRecorder.stop();
            }
        };

        if (typeof config.timeSlice === 'number') {
            updateTimeStamp();
            mediaRecorder.start(config.timeSlice);
        } else {
            // default is 60 minutes; enough?
            // use config => {timeSlice: 1000} otherwise

            mediaRecorder.start(3.6e+6);
        }

        if (config.initCallback) {
            config.initCallback(); // old code
        }
    };

    /**
     * @property {Array} timestamps - Array of time stamps
     * @memberof MediaStreamRecorder
     * @example
     * console.log(recorder.timestamps);
     */
    this.timestamps = [];

    function updateTimeStamp() {
        self.timestamps.push(new Date().getTime());

        if (typeof config.onTimeStamp === 'function') {
            config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
        }
    }

    function getMimeType(secondObject) {
        if (mediaRecorder && mediaRecorder.mimeType) {
            return mediaRecorder.mimeType;
        }

        return secondObject.mimeType || 'video/webm';
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        self.manuallyStopped = true; // used inside the mediaRecorder.onerror

        if (!mediaRecorder) {
            return;
        }

        this.recordingCallback = callback;

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
        }

        if (typeof config.timeSlice === 'number') {
            setTimeout(function() {
                self.blob = new Blob(arrayOfBlobs, {
                    type: getMimeType(config)
                });

                self.recordingCallback(self.blob);
            }, 100);
        }
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'recording') {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (!mediaRecorder) {
            return;
        }

        if (mediaRecorder.state === 'paused') {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            self.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        arrayOfBlobs = [];
        mediaRecorder = null;
        self.timestamps = [];
    }

    // Reference to "MediaRecorder" object
    var mediaRecorder;

    /**
     * Access to native MediaRecorder API
     * @method
     * @memberof MediaStreamRecorder
     * @instance
     * @example
     * var internal = recorder.getInternalRecorder();
     * internal.ondataavailable = function() {}; // override
     * internal.stream, internal.onpause, internal.onstop, etc.
     * @returns {Object} Returns internal recording object.
     */
    this.getInternalRecorder = function() {
        return mediaRecorder;
    };

    function isMediaStreamActive() {
        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof MediaStreamRecorder
     * @example
     * recorder.stop(function() {
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;


    /**
     * Get MediaRecorder readonly state.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    this.getState = function() {
        if (!mediaRecorder) {
            return 'inactive';
        }

        return mediaRecorder.state || 'inactive';
    };

    // list of all recording states
    var allStates = [];

    /**
     * Get MediaRecorder all recording states.
     * @method
     * @memberof MediaStreamRecorder
     * @example
     * var state = recorder.getAllStates();
     * @returns {Array} Returns all recording states
     */
    this.getAllStates = function() {
        return allStates;
    };

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = false; // disable to minimize CPU usage
    }

    var self = this;

    // this method checks if media stream is stopped
    // or if any track is ended.
    (function looper() {
        if (!mediaRecorder || config.checkForInactiveTracks === false) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            self.stop();
            return;
        }

        setTimeout(looper, 1000); // check every second
    })();

    // for debugging
    this.name = 'MediaStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
}

// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */

function StereoAudioRecorder(mediaStream, config) {
    if (!mediaStream.getAudioTracks().length) {
        throw 'Your stream has no audio tracks.';
    }

    config = config || {};

    var self = this;

    // variables
    var leftchannel = [];
    var rightchannel = [];
    var recording = false;
    var recordingLength = 0;
    var jsAudioNode;

    var numberOfAudioChannels = 2;

    /**
     * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
     * @property {number} desiredSampRate - Desired Bits per sample * 1000
     * @memberof StereoAudioRecorder
     * @instance
     * @example
     * var recorder = StereoAudioRecorder(mediaStream, {
     *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
     * });
     */
    var desiredSampRate = config.desiredSampRate;

    // backward compatibility
    if (config.leftChannel === true) {
        numberOfAudioChannels = 1;
    }

    if (config.numberOfAudioChannels === 1) {
        numberOfAudioChannels = 1;
    }

    if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
        numberOfAudioChannels = 2;
    }

    if (!config.disableLogs) {
        console.log('StereoAudioRecorder is set to record number of channels: ', numberOfAudioChannels);
    }

    // if any Track within the MediaStream is muted or not enabled at any time, 
    // the browser will only record black frames 
    // or silence since that is the content produced by the Track
    // so we need to stopRecording as soon as any single track ends.
    if (typeof config.checkForInactiveTracks === 'undefined') {
        config.checkForInactiveTracks = true;
    }

    function isMediaStreamActive() {
        if (config.checkForInactiveTracks === false) {
            // always return "true"
            return true;
        }

        if ('active' in mediaStream) {
            if (!mediaStream.active) {
                return false;
            }
        } else if ('ended' in mediaStream) { // old hack
            if (mediaStream.ended) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method records MediaStream.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        resetVariables();

        isAudioProcessStarted = isPaused = false;
        recording = true;

        if (typeof config.timeSlice !== 'undefined') {
            looper();
        }
    };

    function mergeLeftRightBuffers(config, callback) {
        function mergeAudioBuffers(config, cb) {
            var numberOfAudioChannels = config.numberOfAudioChannels;

            // todo: "slice(0)" --- is it causes loop? Should be removed?
            var leftBuffers = config.leftBuffers.slice(0);
            var rightBuffers = config.rightBuffers.slice(0);
            var sampleRate = config.sampleRate;
            var internalInterleavedLength = config.internalInterleavedLength;
            var desiredSampRate = config.desiredSampRate;

            if (numberOfAudioChannels === 2) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                    rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
                }
            }

            if (numberOfAudioChannels === 1) {
                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

                if (desiredSampRate) {
                    leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
                }
            }

            // set sample rate as desired sample rate
            if (desiredSampRate) {
                sampleRate = desiredSampRate;
            }

            // for changing the sampling rate, reference:
            // http://stackoverflow.com/a/28977136/552182
            function interpolateArray(data, newSampleRate, oldSampleRate) {
                var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
                var newData = [];
                var springFactor = Number((data.length - 1) / (fitCount - 1));
                newData[0] = data[0];
                for (var i = 1; i < fitCount - 1; i++) {
                    var tmp = i * springFactor;
                    var before = Number(Math.floor(tmp)).toFixed();
                    var after = Number(Math.ceil(tmp)).toFixed();
                    var atPoint = tmp - before;
                    newData[i] = linearInterpolate(data[before], data[after], atPoint);
                }
                newData[fitCount - 1] = data[data.length - 1];
                return newData;
            }

            function linearInterpolate(before, after, atPoint) {
                return before + (after - before) * atPoint;
            }

            function mergeBuffers(channelBuffer, rLength) {
                var result = new Float64Array(rLength);
                var offset = 0;
                var lng = channelBuffer.length;

                for (var i = 0; i < lng; i++) {
                    var buffer = channelBuffer[i];
                    result.set(buffer, offset);
                    offset += buffer.length;
                }

                return result;
            }

            function interleave(leftChannel, rightChannel) {
                var length = leftChannel.length + rightChannel.length;

                var result = new Float64Array(length);

                var inputIndex = 0;

                for (var index = 0; index < length;) {
                    result[index++] = leftChannel[inputIndex];
                    result[index++] = rightChannel[inputIndex];
                    inputIndex++;
                }
                return result;
            }

            function writeUTFBytes(view, offset, string) {
                var lng = string.length;
                for (var i = 0; i < lng; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }

            // interleave both channels together
            var interleaved;

            if (numberOfAudioChannels === 2) {
                interleaved = interleave(leftBuffers, rightBuffers);
            }

            if (numberOfAudioChannels === 1) {
                interleaved = leftBuffers;
            }

            var interleavedLength = interleaved.length;

            // create wav file
            var resultingBufferLength = 44 + interleavedLength * 2;

            var buffer = new ArrayBuffer(resultingBufferLength);

            var view = new DataView(buffer);

            // RIFF chunk descriptor/identifier 
            writeUTFBytes(view, 0, 'RIFF');

            // RIFF chunk length
            view.setUint32(4, 44 + interleavedLength * 2, true);

            // RIFF type 
            writeUTFBytes(view, 8, 'WAVE');

            // format chunk identifier 
            // FMT sub-chunk
            writeUTFBytes(view, 12, 'fmt ');

            // format chunk length 
            view.setUint32(16, 16, true);

            // sample format (raw)
            view.setUint16(20, 1, true);

            // stereo (2 channels)
            view.setUint16(22, numberOfAudioChannels, true);

            // sample rate 
            view.setUint32(24, sampleRate, true);

            // byte rate (sample rate * block align)
            view.setUint32(28, sampleRate * 2, true);

            // block align (channel count * bytes per sample) 
            view.setUint16(32, numberOfAudioChannels * 2, true);

            // bits per sample 
            view.setUint16(34, 16, true);

            // data sub-chunk
            // data chunk identifier 
            writeUTFBytes(view, 36, 'data');

            // data chunk length 
            view.setUint32(40, interleavedLength * 2, true);

            // write the PCM samples
            var lng = interleavedLength;
            var index = 44;
            var volume = 1;
            for (var i = 0; i < lng; i++) {
                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
                index += 2;
            }

            if (cb) {
                return cb({
                    buffer: buffer,
                    view: view
                });
            }

            postMessage({
                buffer: buffer,
                view: view
            });
        }

        if (isEdge || isOpera || isSafari || config.noWorker) {
            mergeAudioBuffers(config, function(data) {
                callback(data.buffer, data.view);
            });
            return;
        }


        var webWorker = processInWebWorker(mergeAudioBuffers);

        webWorker.onmessage = function(event) {
            callback(event.data.buffer, event.data.view);

            // release memory
            URL.revokeObjectURL(webWorker.workerURL);
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (e) {' + _function.name + '(e.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(workerURL);
        worker.workerURL = workerURL;
        return worker;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        // stop recording
        recording = false;

        mergeLeftRightBuffers({
            desiredSampRate: desiredSampRate,
            sampleRate: sampleRate,
            numberOfAudioChannels: numberOfAudioChannels,
            internalInterleavedLength: recordingLength,
            leftBuffers: leftchannel,
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel
        }, function(buffer, view) {
            /**
             * @property {Blob} blob - The recorded blob object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var blob = recorder.blob;
             * });
             */
            self.blob = new Blob([view], {
                type: 'audio/wav'
            });

            /**
             * @property {ArrayBuffer} buffer - The recorded buffer object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var buffer = recorder.buffer;
             * });
             */
            self.buffer = new ArrayBuffer(view.buffer.byteLength);

            /**
             * @property {DataView} view - The recorded data-view object.
             * @memberof StereoAudioRecorder
             * @example
             * recorder.stop(function(){
             *     var view = recorder.view;
             * });
             */
            self.view = view;

            self.sampleRate = desiredSampRate || sampleRate;
            self.bufferSize = bufferSize;

            // recorded audio length
            self.length = recordingLength;

            isAudioProcessStarted = false;

            if (callback) {
                callback(self.blob);
            }
        });
    };

    if (!Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    var context = Storage.AudioContextConstructor;

    // creates an audio node from the microphone incoming stream
    var audioInput = context.createMediaStreamSource(mediaStream);

    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];

    /**
     * From the spec: This value controls how frequently the audioprocess event is
     * dispatched and how many sample-frames need to be processed each call.
     * Lower values for buffer size will result in a lower (better) latency.
     * Higher values will be necessary to avoid audio breakup and glitches
     * The size of the buffer (in sample-frames) which needs to
     * be processed each time onprocessaudio is called.
     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     bufferSize: 4096
     * });
     */

    // "0" means, let chrome decide the most accurate buffer-size for current platform.
    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

    if (legalBufferValues.indexOf(bufferSize) === -1) {
        if (!config.disableLogs) {
            console.warn('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
        }
    }

    if (context.createJavaScriptNode) {
        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else if (context.createScriptProcessor) {
        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
    } else {
        throw 'WebAudio API has no support on this browser.';
    }

    // connect the stream to the script processor
    audioInput.connect(jsAudioNode);

    if (!config.bufferSize) {
        bufferSize = jsAudioNode.bufferSize; // device buffer-size
    }

    /**
     * The sample rate (in sample-frames per second) at which the
     * AudioContext handles audio. It is assumed that all AudioNodes
     * in the context run at this rate. In making this assumption,
     * sample-rate converters or "varispeed" processors are not supported
     * in real-time processing.
     * The sampleRate parameter describes the sample-rate of the
     * linear PCM audio data in the buffer in sample-frames per second.
     * An implementation must support sample-rates in at least
     * the range 22050 to 96000.
     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
     * @memberof StereoAudioRecorder
     * @example
     * recorder = new StereoAudioRecorder(mediaStream, {
     *     sampleRate: 44100
     * });
     */
    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

    if (sampleRate < 22050 || sampleRate > 96000) {
        // Ref: http://stackoverflow.com/a/26303918/552182
        if (!config.disableLogs) {
            console.warn('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        console.log('sample-rate', sampleRate);
        console.log('buffer-size', bufferSize);

        if (config.desiredSampRate) {
            console.log('Desired sample-rate', config.desiredSampRate);
        }
    }

    var isPaused = false;
    /**
     * This method pauses the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (isMediaStreamActive() === false) {
            throw 'Please make sure MediaStream is active.';
        }

        if (!recording) {
            if (!config.disableLogs) {
                console.log('Seems recording has been restarted.');
            }
            this.record();
            return;
        }

        isPaused = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof StereoAudioRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        config.checkForInactiveTracks = false;

        if (recording) {
            this.stop(clearRecordedDataCB);
        }

        clearRecordedDataCB();
    };

    function resetVariables() {
        leftchannel = [];
        rightchannel = [];
        recordingLength = 0;
        isAudioProcessStarted = false;
        recording = false;
        isPaused = false;
        context = null;

        self.leftchannel = leftchannel;
        self.rightchannel = rightchannel;
        self.numberOfAudioChannels = numberOfAudioChannels;
        self.desiredSampRate = desiredSampRate;
        self.sampleRate = sampleRate;
        self.recordingLength = recordingLength;

        intervalsBasedBuffers = {
            left: [],
            right: [],
            recordingLength: 0
        };
    }

    function clearRecordedDataCB() {
        if (jsAudioNode) {
            jsAudioNode.onaudioprocess = null;
            jsAudioNode.disconnect();
            jsAudioNode = null;
        }

        if (audioInput) {
            audioInput.disconnect();
            audioInput = null;
        }

        resetVariables();
    }

    // for debugging
    this.name = 'StereoAudioRecorder';
    this.toString = function() {
        return this.name;
    };

    var isAudioProcessStarted = false;

    function onAudioProcessDataAvailable(e) {
        if (isPaused) {
            return;
        }

        if (isMediaStreamActive() === false) {
            if (!config.disableLogs) {
                console.log('MediaStream seems stopped.');
            }
            jsAudioNode.disconnect();
            recording = false;
        }

        if (!recording) {
            if (audioInput) {
                audioInput.disconnect();
                audioInput = null;
            }
            return;
        }

        /**
         * This method is called on "onaudioprocess" event's first invocation.
         * @method {function} onAudioProcessStarted
         * @memberof StereoAudioRecorder
         * @example
         * recorder.onAudioProcessStarted: function() { };
         */
        if (!isAudioProcessStarted) {
            isAudioProcessStarted = true;
            if (config.onAudioProcessStarted) {
                config.onAudioProcessStarted();
            }

            if (config.initCallback) {
                config.initCallback();
            }
        }

        var left = e.inputBuffer.getChannelData(0);

        // we clone the samples
        var chLeft = new Float32Array(left);
        leftchannel.push(chLeft);

        if (numberOfAudioChannels === 2) {
            var right = e.inputBuffer.getChannelData(1);
            var chRight = new Float32Array(right);
            rightchannel.push(chRight);
        }

        recordingLength += bufferSize;

        // export raw PCM
        self.recordingLength = recordingLength;

        if (typeof config.timeSlice !== 'undefined') {
            intervalsBasedBuffers.recordingLength += bufferSize;
            intervalsBasedBuffers.left.push(chLeft);

            if (numberOfAudioChannels === 2) {
                intervalsBasedBuffers.right.push(chRight);
            }
        }
    }

    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;

    // to prevent self audio to be connected with speakers
    jsAudioNode.connect(context.destination);

    // export raw PCM
    this.leftchannel = leftchannel;
    this.rightchannel = rightchannel;
    this.numberOfAudioChannels = numberOfAudioChannels;
    this.desiredSampRate = desiredSampRate;
    this.sampleRate = sampleRate;
    self.recordingLength = recordingLength;

    // helper for intervals based blobs
    var intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
    };

    // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)
    function looper() {
        if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
            return;
        }

        if (intervalsBasedBuffers.left.length) {
            mergeLeftRightBuffers({
                desiredSampRate: desiredSampRate,
                sampleRate: sampleRate,
                numberOfAudioChannels: numberOfAudioChannels,
                internalInterleavedLength: intervalsBasedBuffers.recordingLength,
                leftBuffers: intervalsBasedBuffers.left,
                rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
            }, function(buffer, view) {
                var blob = new Blob([view], {
                    type: 'audio/wav'
                });
                config.ondataavailable(blob);

                setTimeout(looper, config.timeSlice);
            });

            intervalsBasedBuffers = {
                left: [],
                right: [],
                recordingLength: 0
            };
        } else {
            setTimeout(looper, config.timeSlice);
        }
    }
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
}

// _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */

function CanvasRecorder(htmlElement, config) {
    if (typeof html2canvas === 'undefined') {
        throw 'Please link: https://cdn.webrtc-experiment.com/screenshot.js';
    }

    config = config || {};
    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    // via DetectRTC.js
    var isCanvasSupportsStreamCapturing = false;
    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
        if (item in document.createElement('canvas')) {
            isCanvasSupportsStreamCapturing = true;
        }
    });

    var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

    var chromeVersion = 50;
    var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (_isChrome && matchArray && matchArray[2]) {
        chromeVersion = parseInt(matchArray[2], 10);
    }

    if (_isChrome && chromeVersion < 52) {
        isCanvasSupportsStreamCapturing = false;
    }

    if (config.useWhammyRecorder) {
        isCanvasSupportsStreamCapturing = false;
    }

    var globalCanvas, mediaStreamRecorder;

    if (isCanvasSupportsStreamCapturing) {
        if (!config.disableLogs) {
            console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
        }

        if (htmlElement instanceof HTMLCanvasElement) {
            globalCanvas = htmlElement;
        } else if (htmlElement instanceof CanvasRenderingContext2D) {
            globalCanvas = htmlElement.canvas;
        } else {
            throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
        }
    } else if (!!navigator.mozGetUserMedia) {
        if (!config.disableLogs) {
            console.error('Canvas recording is NOT supported in Firefox.');
        }
    }

    var isRecording;

    /**
     * This method records Canvas.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        isRecording = true;

        if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
            // CanvasCaptureMediaStream
            var canvasMediaStream;
            if ('captureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
            } else if ('mozCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.mozCaptureStream(25);
            } else if ('webkitCaptureStream' in globalCanvas) {
                canvasMediaStream = globalCanvas.webkitCaptureStream(25);
            }

            try {
                var mdStream = new MediaStream();
                mdStream.addTrack(canvasMediaStream.getVideoTracks()[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: 'video/webm'
            });
            mediaStreamRecorder.record();
        } else {
            whammy.frames = [];
            lastTime = new Date().getTime();
            drawCanvasFrame();
        }

        if (config.initCallback) {
            config.initCallback();
        }
    };

    this.getWebPImages = function(callback) {
        if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
            callback();
            return;
        }

        var framesLength = whammy.frames.length;
        whammy.frames.forEach(function(frame, idx) {
            var framesRemaining = framesLength - idx;
            if (!config.disableLogs) {
                console.log(framesRemaining + '/' + framesLength + ' frames remaining');
            }

            if (config.onEncodingCallback) {
                config.onEncodingCallback(framesRemaining, framesLength);
            }

            var webp = frame.image.toDataURL('image/webp', 1);
            whammy.frames[idx].image = webp;
        });

        if (!config.disableLogs) {
            console.log('Generating WebM');
        }

        callback();
    };

    /**
     * This method stops recording Canvas.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        isRecording = false;

        var that = this;

        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
            mediaStreamRecorder.stop(callback);
            return;
        }

        this.getWebPImages(function() {
            /**
             * @property {Blob} blob - Recorded frames in video/webm blob.
             * @memberof CanvasRecorder
             * @example
             * recorder.stop(function() {
             *     var blob = recorder.blob;
             * });
             */
            whammy.compile(function(blob) {
                if (!config.disableLogs) {
                    console.log('Recording finished!');
                }

                that.blob = blob;

                if (that.blob.forEach) {
                    that.blob = new Blob([], {
                        type: 'video/webm'
                    });
                }

                if (callback) {
                    callback(that.blob);
                }

                whammy.frames = [];
            });
        });
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.pause();
            return;
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (mediaStreamRecorder instanceof MediaStreamRecorder) {
            mediaStreamRecorder.resume();
            return;
        }

        if (!isRecording) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof CanvasRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (isRecording) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isRecording = false;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'CanvasRecorder';
    this.toString = function() {
        return this.name;
    };

    function cloneCanvas() {
        //create a new canvas
        var newCanvas = document.createElement('canvas');
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = htmlElement.width;
        newCanvas.height = htmlElement.height;

        //apply the old canvas to the new one
        context.drawImage(htmlElement, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function drawCanvasFrame() {
        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawCanvasFrame, 500);
        }

        if (htmlElement.nodeName.toLowerCase() === 'canvas') {
            var duration = new Date().getTime() - lastTime;
            // via #206, by Jack i.e. @Seymourr
            lastTime = new Date().getTime();

            whammy.frames.push({
                image: cloneCanvas(),
                duration: duration
            });

            if (isRecording) {
                setTimeout(drawCanvasFrame, config.frameInterval);
            }
            return;
        }

        html2canvas(htmlElement, {
            grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
            onrendered: function(canvas) {
                var duration = new Date().getTime() - lastTime;
                if (!duration) {
                    return setTimeout(drawCanvasFrame, config.frameInterval);
                }

                // via #206, by Jack i.e. @Seymourr
                lastTime = new Date().getTime();

                whammy.frames.push({
                    image: canvas.toDataURL('image/webp', 1),
                    duration: duration
                });

                if (isRecording) {
                    setTimeout(drawCanvasFrame, config.frameInterval);
                }
            }
        });
    }

    var lastTime = new Date().getTime();

    var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.CanvasRecorder = CanvasRecorder;
}

// _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */

function WhammyRecorder(mediaStream, config) {

    config = config || {};

    if (!config.frameInterval) {
        config.frameInterval = 10;
    }

    if (!config.disableLogs) {
        console.log('Using frames-interval:', config.frameInterval);
    }

    /**
     * This method records video.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (!config.width) {
            config.width = 320;
        }

        if (!config.height) {
            config.height = 240;
        }

        if (!config.video) {
            config.video = {
                width: config.width,
                height: config.height
            };
        }

        if (!config.canvas) {
            config.canvas = {
                width: config.width,
                height: config.height
            };
        }

        canvas.width = config.canvas.width || 320;
        canvas.height = config.canvas.height || 240;

        context = canvas.getContext('2d');

        // setting defaults
        if (config.video && config.video instanceof HTMLVideoElement) {
            video = config.video.cloneNode();

            if (config.initCallback) {
                config.initCallback();
            }
        } else {
            video = document.createElement('video');

            setSrcObject(mediaStream, video);

            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
                if (config.initCallback) {
                    config.initCallback();
                }
            };

            video.width = config.video.width;
            video.height = config.video.height;
        }

        video.muted = true;
        video.play();

        lastTime = new Date().getTime();
        whammy = new Whammy.Video();

        if (!config.disableLogs) {
            console.log('canvas resolutions', canvas.width, '*', canvas.height);
            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
        }

        drawFrames(config.frameInterval);
    };

    /**
     * Draw and push frames to Whammy
     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
     */
    function drawFrames(frameInterval) {
        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;

        var duration = new Date().getTime() - lastTime;
        if (!duration) {
            return setTimeout(drawFrames, frameInterval, frameInterval);
        }

        if (isPausedRecording) {
            lastTime = new Date().getTime();
            return setTimeout(drawFrames, 100);
        }

        // via #206, by Jack i.e. @Seymourr
        lastTime = new Date().getTime();

        if (video.paused) {
            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
            // Tweak for Android Chrome
            video.play();
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        whammy.frames.push({
            duration: duration,
            image: canvas.toDataURL('image/webp')
        });

        if (!isStopDrawing) {
            setTimeout(drawFrames, frameInterval, frameInterval);
        }
    }

    function asyncLoop(o) {
        var i = -1,
            length = o.length;

        (function loop() {
            i++;
            if (i === length) {
                o.callback();
                return;
            }

            // "setTimeout" added by Jim McLeod
            setTimeout(function() {
                o.functionToLoop(loop, i);
            }, 1);
        })();
    }


    /**
     * remove black frames from the beginning to the specified frame
     * @param {Array} _frames - array of frames to be checked
     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
     * @returns {Array} - array of frames
     */
    // pull#293 by @volodalexey
    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, callback) {
        var localCanvas = document.createElement('canvas');
        localCanvas.width = canvas.width;
        localCanvas.height = canvas.height;
        var context2d = localCanvas.getContext('2d');
        var resultFrames = [];

        var checkUntilNotBlack = _framesToCheck === -1;
        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
            _framesToCheck : _frames.length;
        var sampleColor = {
            r: 0,
            g: 0,
            b: 0
        };
        var maxColorDifference = Math.sqrt(
            Math.pow(255, 2) +
            Math.pow(255, 2) +
            Math.pow(255, 2)
        );
        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
        var doNotCheckNext = false;

        asyncLoop({
            length: endCheckFrame,
            functionToLoop: function(loop, f) {
                var matchPixCount, endPixCheck, maxPixCount;

                var finishImage = function() {
                    if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
                        // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
                    } else {
                        // console.log('frame is passed : ' + f);
                        if (checkUntilNotBlack) {
                            doNotCheckNext = true;
                        }
                        resultFrames.push(_frames[f]);
                    }
                    loop();
                };

                if (!doNotCheckNext) {
                    var image = new Image();
                    image.onload = function() {
                        context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
                        var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
                        matchPixCount = 0;
                        endPixCheck = imageData.data.length;
                        maxPixCount = imageData.data.length / 4;

                        for (var pix = 0; pix < endPixCheck; pix += 4) {
                            var currentColor = {
                                r: imageData.data[pix],
                                g: imageData.data[pix + 1],
                                b: imageData.data[pix + 2]
                            };
                            var colorDifference = Math.sqrt(
                                Math.pow(currentColor.r - sampleColor.r, 2) +
                                Math.pow(currentColor.g - sampleColor.g, 2) +
                                Math.pow(currentColor.b - sampleColor.b, 2)
                            );
                            // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
                            if (colorDifference <= maxColorDifference * pixTolerance) {
                                matchPixCount++;
                            }
                        }
                        finishImage();
                    };
                    image.src = _frames[f].image;
                } else {
                    finishImage();
                }
            },
            callback: function() {
                resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

                if (resultFrames.length <= 0) {
                    // at least one last frame should be available for next manipulation
                    // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
                    resultFrames.push(_frames[_frames.length - 1]);
                }
                callback(resultFrames);
            }
        });
    }

    var isStopDrawing = false;

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        isStopDrawing = true;

        var _this = this;
        // analyse of all frames takes some time!
        setTimeout(function() {
            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
            dropBlackFrames(whammy.frames, -1, null, null, function(frames) {
                whammy.frames = frames;

                // to display advertisement images!
                if (config.advertisement && config.advertisement.length) {
                    whammy.frames = config.advertisement.concat(whammy.frames);
                }

                /**
                 * @property {Blob} blob - Recorded frames in video/webm blob.
                 * @memberof WhammyRecorder
                 * @example
                 * recorder.stop(function() {
                 *     var blob = recorder.blob;
                 * });
                 */
                whammy.compile(function(blob) {
                    _this.blob = blob;

                    if (_this.blob.forEach) {
                        _this.blob = new Blob([], {
                            type: 'video/webm'
                        });
                    }

                    if (callback) {
                        callback(_this.blob);
                    }
                });
            });
        }, 10);
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;

        if (isStopDrawing) {
            this.record();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WhammyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (!isStopDrawing) {
            this.stop(clearRecordedDataCB);
        }
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        whammy.frames = [];
        isStopDrawing = true;
        isPausedRecording = false;
    }

    // for debugging
    this.name = 'WhammyRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var video;
    var lastTime;
    var whammy;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WhammyRecorder = WhammyRecorder;
}

// https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js

// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */

var Whammy = (function() {
    // a more abstract-ish API

    function WhammyVideo(duration) {
        this.frames = [];
        this.duration = duration || 1;
        this.quality = 0.8;
    }

    /**
     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.add(canvas || context || 'image/webp');
     * @param {string} frame - Canvas || Context || image/webp
     * @param {number} duration - Stick a duration (in milliseconds)
     */
    WhammyVideo.prototype.add = function(frame, duration) {
        if ('canvas' in frame) { //CanvasRenderingContext2D
            frame = frame.canvas;
        }

        if ('toDataURL' in frame) {
            frame = frame.toDataURL('image/webp', this.quality);
        }

        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
        }
        this.frames.push({
            image: frame,
            duration: duration || this.duration
        });
    };

    function processInWebWorker(_function) {
        var blob = URL.createObjectURL(new Blob([_function.toString(),
            'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
        ], {
            type: 'application/javascript'
        }));

        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
    }

    function whammyInWebWorker(frames) {
        function ArrayToWebM(frames) {
            var info = checkFrames(frames);
            if (!info) {
                return [];
            }

            var clusterMaxDuration = 30000;

            var EBML = [{
                'id': 0x1a45dfa3, // EBML
                'data': [{
                    'data': 1,
                    'id': 0x4286 // EBMLVersion
                }, {
                    'data': 1,
                    'id': 0x42f7 // EBMLReadVersion
                }, {
                    'data': 4,
                    'id': 0x42f2 // EBMLMaxIDLength
                }, {
                    'data': 8,
                    'id': 0x42f3 // EBMLMaxSizeLength
                }, {
                    'data': 'webm',
                    'id': 0x4282 // DocType
                }, {
                    'data': 2,
                    'id': 0x4287 // DocTypeVersion
                }, {
                    'data': 2,
                    'id': 0x4285 // DocTypeReadVersion
                }]
            }, {
                'id': 0x18538067, // Segment
                'data': [{
                    'id': 0x1549a966, // Info
                    'data': [{
                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
                        'id': 0x2ad7b1 // TimecodeScale
                    }, {
                        'data': 'whammy',
                        'id': 0x4d80 // MuxingApp
                    }, {
                        'data': 'whammy',
                        'id': 0x5741 // WritingApp
                    }, {
                        'data': doubleToString(info.duration),
                        'id': 0x4489 // Duration
                    }]
                }, {
                    'id': 0x1654ae6b, // Tracks
                    'data': [{
                        'id': 0xae, // TrackEntry
                        'data': [{
                            'data': 1,
                            'id': 0xd7 // TrackNumber
                        }, {
                            'data': 1,
                            'id': 0x73c5 // TrackUID
                        }, {
                            'data': 0,
                            'id': 0x9c // FlagLacing
                        }, {
                            'data': 'und',
                            'id': 0x22b59c // Language
                        }, {
                            'data': 'V_VP8',
                            'id': 0x86 // CodecID
                        }, {
                            'data': 'VP8',
                            'id': 0x258688 // CodecName
                        }, {
                            'data': 1,
                            'id': 0x83 // TrackType
                        }, {
                            'id': 0xe0, // Video
                            'data': [{
                                'data': info.width,
                                'id': 0xb0 // PixelWidth
                            }, {
                                'data': info.height,
                                'id': 0xba // PixelHeight
                            }]
                        }]
                    }]
                }]
            }];

            //Generate clusters (max duration)
            var frameNumber = 0;
            var clusterTimecode = 0;
            while (frameNumber < frames.length) {

                var clusterFrames = [];
                var clusterDuration = 0;
                do {
                    clusterFrames.push(frames[frameNumber]);
                    clusterDuration += frames[frameNumber].duration;
                    frameNumber++;
                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

                var clusterCounter = 0;
                var cluster = {
                    'id': 0x1f43b675, // Cluster
                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
                }; //Add cluster to segment
                EBML[1].data.push(cluster);
                clusterTimecode += clusterDuration;
            }

            return generateEBML(EBML);
        }

        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
            return [{
                'data': clusterTimecode,
                'id': 0xe7 // Timecode
            }].concat(clusterFrames.map(function(webp) {
                var block = makeSimpleBlock({
                    discardable: 0,
                    frame: webp.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(clusterCounter)
                });
                clusterCounter += webp.duration;
                return {
                    data: block,
                    id: 0xa3
                };
            }));
        }

        // sums the lengths of all the frames and gets the duration

        function checkFrames(frames) {
            if (!frames[0]) {
                postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                });
                return;
            }

            var width = frames[0].width,
                height = frames[0].height,
                duration = frames[0].duration;

            for (var i = 1; i < frames.length; i++) {
                duration += frames[i].duration;
            }
            return {
                duration: duration,
                width: width,
                height: height
            };
        }

        function numToBuffer(num) {
            var parts = [];
            while (num > 0) {
                parts.push(num & 0xff);
                num = num >> 8;
            }
            return new Uint8Array(parts.reverse());
        }

        function strToBuffer(str) {
            return new Uint8Array(str.split('').map(function(e) {
                return e.charCodeAt(0);
            }));
        }

        function bitsToBuffer(bits) {
            var data = [];
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data.push(parseInt(bits.substr(i, 8), 2));
            }
            return new Uint8Array(data);
        }

        function generateEBML(json) {
            var ebml = [];
            for (var i = 0; i < json.length; i++) {
                var data = json[i].data;

                if (typeof data === 'object') {
                    data = generateEBML(data);
                }

                if (typeof data === 'number') {
                    data = bitsToBuffer(data.toString(2));
                }

                if (typeof data === 'string') {
                    data = strToBuffer(data);
                }

                var len = data.size || data.byteLength || data.length;
                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
                var sizeToString = len.toString(2);
                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
                var size = (new Array(zeroes)).join('0') + '1' + padded;

                ebml.push(numToBuffer(json[i].id));
                ebml.push(bitsToBuffer(size));
                ebml.push(data);
            }

            return new Blob(ebml, {
                type: 'video/webm'
            });
        }

        function toBinStrOld(bits) {
            var data = '';
            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
            bits = pad + bits;
            for (var i = 0; i < bits.length; i += 8) {
                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
            }
            return data;
        }

        function makeSimpleBlock(data) {
            var flags = 0;

            if (data.keyframe) {
                flags |= 128;
            }

            if (data.invisible) {
                flags |= 8;
            }

            if (data.lacing) {
                flags |= (data.lacing << 1);
            }

            if (data.discardable) {
                flags |= 1;
            }

            if (data.trackNum > 127) {
                throw 'TrackNumber > 127 not supported';
            }

            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
                return String.fromCharCode(e);
            }).join('') + data.frame;

            return out;
        }

        function parseWebP(riff) {
            var VP8 = riff.RIFF[0].WEBP[0];

            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
            for (var i = 0, c = []; i < 4; i++) {
                c[i] = VP8.charCodeAt(frameStart + 3 + i);
            }

            var width, height, tmp;

            //the code below is literally copied verbatim from the bitstream spec
            tmp = (c[1] << 8) | c[0];
            width = tmp & 0x3FFF;
            tmp = (c[3] << 8) | c[2];
            height = tmp & 0x3FFF;
            return {
                width: width,
                height: height,
                data: VP8,
                riff: riff
            };
        }

        function getStrLength(string, offset) {
            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
                var unpadded = i.charCodeAt(0).toString(2);
                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
            }).join(''), 2);
        }

        function parseRIFF(string) {
            var offset = 0;
            var chunks = {};

            while (offset < string.length) {
                var id = string.substr(offset, 4);
                var len = getStrLength(string, offset);
                var data = string.substr(offset + 4 + 4, len);
                offset += 4 + 4 + len;
                chunks[id] = chunks[id] || [];

                if (id === 'RIFF' || id === 'LIST') {
                    chunks[id].push(parseRIFF(data));
                } else {
                    chunks[id].push(data);
                }
            }
            return chunks;
        }

        function doubleToString(num) {
            return [].slice.call(
                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
                return String.fromCharCode(e);
            }).reverse().join('');
        }

        var webm = new ArrayToWebM(frames.map(function(frame) {
            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
            webp.duration = frame.duration;
            return webp;
        }));

        postMessage(webm);
    }

    /**
     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * recorder.compile(function(blob) {
     *    // blob.size - blob.type
     * });
     */
    WhammyVideo.prototype.compile = function(callback) {
        var webWorker = processInWebWorker(whammyInWebWorker);

        webWorker.onmessage = function(event) {
            if (event.data.error) {
                console.error(event.data.error);
                return;
            }
            callback(event.data);
        };

        webWorker.postMessage(this.frames);
    };

    return {
        /**
         * A more abstract-ish API.
         * @method
         * @memberof Whammy
         * @example
         * recorder = new Whammy().Video(0.8, 100);
         * @param {?number} speed - 0.8
         * @param {?number} quality - 100
         */
        Video: WhammyVideo
    };
})();

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.Whammy = Whammy;
}

// ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
    /**
     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.init();
     */
    init: function() {
        var self = this;

        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
            console.error('IndexedDB API are not available in this browser.');
            return;
        }

        var dbVersion = 1;
        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
            db;
        var request = indexedDB.open(dbName, dbVersion);

        function createObjectStore(dataBase) {
            dataBase.createObjectStore(self.dataStoreName);
        }

        function putInDB() {
            var transaction = db.transaction([self.dataStoreName], 'readwrite');

            if (self.videoBlob) {
                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
            }

            if (self.gifBlob) {
                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
            }

            if (self.audioBlob) {
                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
            }

            function getFromStore(portionName) {
                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
                    if (self.callback) {
                        self.callback(event.target.result, portionName);
                    }
                };
            }

            getFromStore('audioBlob');
            getFromStore('videoBlob');
            getFromStore('gifBlob');
        }

        request.onerror = self.onError;

        request.onsuccess = function() {
            db = request.result;
            db.onerror = self.onError;

            if (db.setVersion) {
                if (db.version !== dbVersion) {
                    var setVersion = db.setVersion(dbVersion);
                    setVersion.onsuccess = function() {
                        createObjectStore(db);
                        putInDB();
                    };
                } else {
                    putInDB();
                }
            } else {
                putInDB();
            }
        };
        request.onupgradeneeded = function(event) {
            createObjectStore(event.target.result);
        };
    },
    /**
     * This method fetches stored blobs from IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Fetch(function(dataURL, type) {
     *     if(type === 'audioBlob') { }
     *     if(type === 'videoBlob') { }
     *     if(type === 'gifBlob')   { }
     * });
     */
    Fetch: function(callback) {
        this.callback = callback;
        this.init();

        return this;
    },
    /**
     * This method stores blobs in IndexedDB.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.Store({
     *     audioBlob: yourAudioBlob,
     *     videoBlob: yourVideoBlob,
     *     gifBlob  : yourGifBlob
     * });
     */
    Store: function(config) {
        this.audioBlob = config.audioBlob;
        this.videoBlob = config.videoBlob;
        this.gifBlob = config.gifBlob;

        this.init();

        return this;
    },
    /**
     * This function is invoked for any known/unknown error.
     * @method
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.onError = function(error){
     *     alerot( JSON.stringify(error) );
     * };
     */
    onError: function(error) {
        console.error(JSON.stringify(error, null, '\t'));
    },

    /**
     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
     * @memberof DiskStorage
     * @internal
     * @example
     * DiskStorage.dataStoreName = 'recordRTC';
     */
    dataStoreName: 'recordRTC',
    dbName: null
};

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.DiskStorage = DiskStorage;
}

// ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */

function GifRecorder(mediaStream, config) {
    if (typeof GIFEncoder === 'undefined') {
        var script = document.createElement('script');
        script.src = 'https://cdn.webrtc-experiment.com/gif-recorder.js';
        (document.body || document.documentElement).appendChild(script);
    }

    config = config || {};

    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;

    /**
     * This method records MediaStream.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        if (typeof GIFEncoder === 'undefined') {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isLoadedMetaData) {
            setTimeout(self.record, 1000);
            return;
        }

        if (!isHTMLObject) {
            if (!config.width) {
                config.width = video.offsetWidth || 320;
            }

            if (!config.height) {
                config.height = video.offsetHeight || 240;
            }

            if (!config.video) {
                config.video = {
                    width: config.width,
                    height: config.height
                };
            }

            if (!config.canvas) {
                config.canvas = {
                    width: config.width,
                    height: config.height
                };
            }

            canvas.width = config.canvas.width || 320;
            canvas.height = config.canvas.height || 240;

            video.width = config.video.width || 320;
            video.height = config.video.height || 240;
        }

        // external library to record as GIF images
        gifEncoder = new GIFEncoder();

        // void setRepeat(int iter) 
        // Sets the number of times the set of GIF frames should be played. 
        // Default is 1; 0 means play indefinitely.
        gifEncoder.setRepeat(0);

        // void setFrameRate(Number fps) 
        // Sets frame rate in frames per second. 
        // Equivalent to setDelay(1000/fps).
        // Using "setDelay" instead of "setFrameRate"
        gifEncoder.setDelay(config.frameRate || 200);

        // void setQuality(int quality) 
        // Sets quality of color quantization (conversion of images to the 
        // maximum 256 colors allowed by the GIF specification). 
        // Lower values (minimum = 1) produce better colors, 
        // but slow processing significantly. 10 is the default, 
        // and produces good color mapping at reasonable speeds. 
        // Values greater than 20 do not yield significant improvements in speed.
        gifEncoder.setQuality(config.quality || 10);

        // Boolean start() 
        // This writes the GIF Header and returns false if it fails.
        gifEncoder.start();

        if (typeof config.onGifRecordingStarted === 'function') {
            config.onGifRecordingStarted();
        }

        startTime = Date.now();

        function drawVideoFrame(time) {
            if (self.clearedRecordedData === true) {
                return;
            }

            if (isPausedRecording) {
                return setTimeout(function() {
                    drawVideoFrame(time);
                }, 100);
            }

            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

            if (typeof lastFrameTime === undefined) {
                lastFrameTime = time;
            }

            // ~10 fps
            if (time - lastFrameTime < 90) {
                return;
            }

            if (!isHTMLObject && video.paused) {
                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
                // Tweak for Android Chrome
                video.play();
            }

            if (!isHTMLObject) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            if (config.onGifPreview) {
                config.onGifPreview(canvas.toDataURL('image/png'));
            }

            gifEncoder.addFrame(context);
            lastFrameTime = time;
        }

        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

        if (config.initCallback) {
            config.initCallback();
        }
    };

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(blob) {
     *     img.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        callback = callback || function() {};

        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }

        endTime = Date.now();

        /**
         * @property {Blob} blob - The recorded blob object.
         * @memberof GifRecorder
         * @example
         * recorder.stop(function(){
         *     var blob = recorder.blob;
         * });
         */
        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
            type: 'image/gif'
        });

        callback(this.blob);

        // bug: find a way to clear old recorded blobs
        gifEncoder.stream().bin = [];
    };

    var isPausedRecording = false;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPausedRecording = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPausedRecording = false;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof GifRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        self.clearedRecordedData = true;
        clearRecordedDataCB();
    };

    function clearRecordedDataCB() {
        if (gifEncoder) {
            gifEncoder.stream().bin = [];
        }
    }

    // for debugging
    this.name = 'GifRecorder';
    this.toString = function() {
        return this.name;
    };

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    if (isHTMLObject) {
        if (mediaStream instanceof CanvasRenderingContext2D) {
            context = mediaStream;
            canvas = context.canvas;
        } else if (mediaStream instanceof HTMLCanvasElement) {
            context = mediaStream.getContext('2d');
            canvas = mediaStream;
        }
    }

    var isLoadedMetaData = true;

    if (!isHTMLObject) {
        var video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;

        isLoadedMetaData = false;
        video.onloadedmetadata = function() {
            isLoadedMetaData = true;
        };

        setSrcObject(mediaStream, video);

        video.play();
    }

    var lastAnimationFrame = null;
    var startTime, endTime, lastFrameTime;

    var gifEncoder;

    var self = this;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.GifRecorder = GifRecorder;
}

// Last time updated: 2018-03-02 2:56:28 AM UTC

// ________________________
// MultiStreamsMixer v1.0.5

// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

function MultiStreamsMixer(arrayOfMediaStreams) {

    // requires: chrome://flags/#enable-experimental-web-platform-features

    var videos = [];
    var isStopDrawingFrames = false;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style = 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000; margin-top:-1000000000;margin-left:-1000000000;';
    (document.body || document.documentElement).appendChild(canvas);

    this.disableLogs = false;
    this.frameInterval = 10;

    this.width = 360;
    this.height = 240;

    // use gain node to prevent echo
    this.useGainNode = true;

    var self = this;

    // _____________________________
    // Cross-Browser-Declarations.js

    // WebAudio API representer
    var AudioContext = window.AudioContext;

    if (typeof AudioContext === 'undefined') {
        if (typeof webkitAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = webkitAudioContext;
        }

        if (typeof mozAudioContext !== 'undefined') {
            /*global AudioContext:true */
            AudioContext = mozAudioContext;
        }
    }

    /*jshint -W079 */
    var URL = window.URL;

    if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
        /*global URL:true */
        URL = webkitURL;
    }

    if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') { // maybe window.navigator?
        if (typeof navigator.webkitGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.webkitGetUserMedia;
        }

        if (typeof navigator.mozGetUserMedia !== 'undefined') {
            navigator.getUserMedia = navigator.mozGetUserMedia;
        }
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        if (!('getVideoTracks' in MediaStream.prototype)) {
            MediaStream.prototype.getVideoTracks = function() {
                if (!this.getTracks) {
                    return [];
                }

                var tracks = [];
                this.getTracks.forEach(function(track) {
                    if (track.kind.toString().indexOf('video') !== -1) {
                        tracks.push(track);
                    }
                });
                return tracks;
            };

            MediaStream.prototype.getAudioTracks = function() {
                if (!this.getTracks) {
                    return [];
                }

                var tracks = [];
                this.getTracks.forEach(function(track) {
                    if (track.kind.toString().indexOf('audio') !== -1) {
                        tracks.push(track);
                    }
                });
                return tracks;
            };
        }

        // override "stop" method for all browsers
        if (typeof MediaStream.prototype.stop === 'undefined') {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    var Storage = {};

    if (typeof AudioContext !== 'undefined') {
        Storage.AudioContext = AudioContext;
    } else if (typeof webkitAudioContext !== 'undefined') {
        Storage.AudioContext = webkitAudioContext;
    }

    function setSrcObject(stream, element, ignoreCreateObjectURL) {
        if ('createObjectURL' in URL && !ignoreCreateObjectURL) {
            try {
                element.src = URL.createObjectURL(stream);
            } catch (e) {
                setSrcObject(stream, element, true);
                return;
            }
        } else if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            alert('createObjectURL/srcObject both are not supported.');
        }
    }

    this.startDrawingFrames = function() {
        drawVideosToCanvas();
    };

    function drawVideosToCanvas() {
        if (isStopDrawingFrames) {
            return;
        }

        var videosLength = videos.length;

        var fullcanvas = false;
        var remaining = [];
        videos.forEach(function(video) {
            if (!video.stream) {
                video.stream = {};
            }

            if (video.stream.fullcanvas) {
                fullcanvas = video;
            } else {
                remaining.push(video);
            }
        });

        if (fullcanvas) {
            canvas.width = fullcanvas.stream.width;
            canvas.height = fullcanvas.stream.height;
        } else if (remaining.length) {
            canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;

            var height = 1;
            if (videosLength === 3 || videosLength === 4) {
                height = 2;
            }
            if (videosLength === 5 || videosLength === 6) {
                height = 3;
            }
            if (videosLength === 7 || videosLength === 8) {
                height = 4;
            }
            if (videosLength === 9 || videosLength === 10) {
                height = 5;
            }
            canvas.height = remaining[0].height * height;
        } else {
            canvas.width = self.width || 360;
            canvas.height = self.height || 240;
        }

        if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
            drawImage(fullcanvas);
        }

        remaining.forEach(function(video, idx) {
            drawImage(video, idx);
        });

        setTimeout(drawVideosToCanvas, self.frameInterval);
    }

    function drawImage(video, idx) {
        if (isStopDrawingFrames) {
            return;
        }

        var x = 0;
        var y = 0;
        var width = video.width;
        var height = video.height;

        if (idx === 1) {
            x = video.width;
        }

        if (idx === 2) {
            y = video.height;
        }

        if (idx === 3) {
            x = video.width;
            y = video.height;
        }

        if (idx === 4) {
            y = video.height * 2;
        }

        if (idx === 5) {
            x = video.width;
            y = video.height * 2;
        }

        if (idx === 6) {
            y = video.height * 3;
        }

        if (idx === 7) {
            x = video.width;
            y = video.height * 3;
        }

        if (typeof video.stream.left !== 'undefined') {
            x = video.stream.left;
        }

        if (typeof video.stream.top !== 'undefined') {
            y = video.stream.top;
        }

        if (typeof video.stream.width !== 'undefined') {
            width = video.stream.width;
        }

        if (typeof video.stream.height !== 'undefined') {
            height = video.stream.height;
        }

        context.drawImage(video, x, y, width, height);

        if (typeof video.stream.onRender === 'function') {
            video.stream.onRender(context, x, y, width, height, idx);
        }
    }

    function getMixedStream() {
        isStopDrawingFrames = false;
        var mixedVideoStream = getMixedVideoStream();

        var mixedAudioStream = getMixedAudioStream();
        if (mixedAudioStream) {
            mixedAudioStream.getAudioTracks().forEach(function(track) {
                mixedVideoStream.addTrack(track);
            });
        }

        var fullcanvas;
        arrayOfMediaStreams.forEach(function(stream) {
            if (stream.fullcanvas) {
                fullcanvas = true;
            }
        });

        return mixedVideoStream;
    }

    function getMixedVideoStream() {
        resetVideoStreams();

        var capturedStream;

        if ('captureStream' in canvas) {
            capturedStream = canvas.captureStream();
        } else if ('mozCaptureStream' in canvas) {
            capturedStream = canvas.mozCaptureStream();
        } else if (!self.disableLogs) {
            console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
        }

        var videoStream = new MediaStream();

        capturedStream.getVideoTracks().forEach(function(track) {
            videoStream.addTrack(track);
        });

        canvas.stream = videoStream;

        return videoStream;
    }

    function getMixedAudioStream() {
        // via: @pehrsons
        if (!Storage.AudioContextConstructor) {
            Storage.AudioContextConstructor = new Storage.AudioContext();
        }

        self.audioContext = Storage.AudioContextConstructor;

        self.audioSources = [];

        if (self.useGainNode === true) {
            self.gainNode = self.audioContext.createGain();
            self.gainNode.connect(self.audioContext.destination);
            self.gainNode.gain.value = 0; // don't hear self
        }

        var audioTracksLength = 0;
        arrayOfMediaStreams.forEach(function(stream) {
            if (!stream.getAudioTracks().length) {
                return;
            }

            audioTracksLength++;

            var audioSource = self.audioContext.createMediaStreamSource(stream);

            if (self.useGainNode === true) {
                audioSource.connect(self.gainNode);
            }

            self.audioSources.push(audioSource);
        });

        if (!audioTracksLength) {
            return;
        }

        self.audioDestination = self.audioContext.createMediaStreamDestination();
        self.audioSources.forEach(function(audioSource) {
            audioSource.connect(self.audioDestination);
        });
        return self.audioDestination.stream;
    }

    function getVideo(stream) {
        var video = document.createElement('video');

        setSrcObject(stream, video);

        video.muted = true;
        video.volume = 0;

        video.width = stream.width || self.width || 360;
        video.height = stream.height || self.height || 240;

        video.play();

        return video;
    }

    this.appendStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        streams.forEach(function(stream) {
            if (stream.getVideoTracks().length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);
            }

            if (stream.getAudioTracks().length && self.audioContext) {
                var audioSource = self.audioContext.createMediaStreamSource(stream);
                audioSource.connect(self.audioDestination);
                self.audioSources.push(audioSource);
            }
        });
    };

    this.releaseStreams = function() {
        videos = [];
        isStopDrawingFrames = true;

        if (self.gainNode) {
            self.gainNode.disconnect();
            self.gainNode = null;
        }

        if (self.audioSources.length) {
            self.audioSources.forEach(function(source) {
                source.disconnect();
            });
            self.audioSources = [];
        }

        if (self.audioDestination) {
            self.audioDestination.disconnect();
            self.audioDestination = null;
        }

        if (self.audioContext) {
            self.audioContext.close();
        }

        self.audioContext = null;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (canvas.stream) {
            canvas.stream.stop();
            canvas.stream = null;
        }
    };

    this.resetVideoStreams = function(streams) {
        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        resetVideoStreams(streams);
    };

    function resetVideoStreams(streams) {
        videos = [];
        streams = streams || arrayOfMediaStreams;

        // via: @adrian-ber
        streams.forEach(function(stream) {
            if (!stream.getVideoTracks().length) {
                return;
            }

            var video = getVideo(stream);
            video.stream = stream;
            videos.push(video);
        });
    }

    // for debugging
    this.name = 'MultiStreamsMixer';
    this.toString = function() {
        return this.name;
    };

    this.getMixedStream = getMixedStream;

}

// ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */

function MultiStreamRecorder(arrayOfMediaStreams, options) {
    arrayOfMediaStreams = arrayOfMediaStreams || [];
    var self = this;

    var mixer;
    var mediaRecorder;

    options = options || {
        mimeType: 'video/webm',
        video: {
            width: 360,
            height: 240
        }
    };

    if (!options.frameInterval) {
        options.frameInterval = 10;
    }

    if (!options.video) {
        options.video = {};
    }

    if (!options.video.width) {
        options.video.width = 360;
    }

    if (!options.video.height) {
        options.video.height = 240;
    }

    /**
     * This method records all MediaStreams.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        // github/muaz-khan/MultiStreamsMixer
        mixer = new MultiStreamsMixer(arrayOfMediaStreams);

        if (getVideoTracks().length) {
            mixer.frameInterval = options.frameInterval || 10;
            mixer.width = options.video.width || 360;
            mixer.height = options.video.height || 240;
            mixer.startDrawingFrames();
        }

        if (options.previewStream && typeof options.previewStream === 'function') {
            options.previewStream(mixer.getMixedStream());
        }

        // record using MediaRecorder API
        mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
        mediaRecorder.record();
    };

    function getVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            stream.getVideoTracks().forEach(function(track) {
                tracks.push(track);
            });
        });
        return tracks;
    }

    /**
     * This method stops recording MediaStream.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        if (!mediaRecorder) {
            return;
        }

        mediaRecorder.stop(function(blob) {
            self.blob = blob;

            callback(blob);

            self.clearRecordedData();
        });
    };

    /**
     * This method pauses the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        if (mediaRecorder) {
            mediaRecorder.pause();
        }
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        if (mediaRecorder) {
            mediaRecorder.resume();
        }
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof MultiStreamRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        if (mediaRecorder) {
            mediaRecorder.clearRecordedData();
            mediaRecorder = null;
        }

        if (mixer) {
            mixer.releaseStreams();
            mixer = null;
        }
    };

    /**
     * Add extra media-streams to existing recordings.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.addStreams([newAudioStream, newVideoStream]);
     */
    this.addStreams = function(streams) {
        if (!streams) {
            throw 'First parameter is required.';
        }

        if (!(streams instanceof Array)) {
            streams = [streams];
        }

        arrayOfMediaStreams.concat(streams);

        if (!mediaRecorder || !mixer) {
            return;
        }

        mixer.appendStreams(streams);
    };

    /**
     * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
     * @method
     * @memberof MultiStreamRecorder
     * @param {MediaStreams} mediaStreams - Array of MediaStreams
     * @example
     * recorder.resetVideoStreams([newVideo1, newVideo2]);
     */
    this.resetVideoStreams = function(streams) {
        if (!mixer) {
            return;
        }

        if (streams && !(streams instanceof Array)) {
            streams = [streams];
        }

        mixer.resetVideoStreams(streams);
    };

    // for debugging
    this.name = 'MultiStreamRecorder';
    this.toString = function() {
        return this.name;
    };
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
}

// _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */

function RecordRTCPromisesHandler(mediaStream, options) {
    if (!this) {
        throw 'Use "new RecordRTCPromisesHandler()"';
    }

    if (typeof mediaStream === 'undefined') {
        throw 'First argument "MediaStream" is required.';
    }

    var self = this;

    /**
     * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * var internal = recorder.recordRTC.getInternalRecorder();
     * alert(internal instanceof MediaStreamRecorder);
     */
    self.recordRTC = new RecordRTC(mediaStream, options);

    /**
     * This method records MediaStream.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.startRecording()
     *         .then(successCB)
     *         .catch(errorCB);
     */
    this.startRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.startRecording();
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method stops the recording.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.stopRecording = function() {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.stopRecording(function(url) {
                    self.blob = self.recordRTC.getBlob();
                    resolve(url);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns data-url for the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     recorder.getDataURL().then(function(dataURL) {
     *         window.open(dataURL);
     *     }).catch(errorCB);;
     * }).catch(errorCB);
     */
    this.getDataURL = function(callback) {
        return new Promise(function(resolve, reject) {
            try {
                self.recordRTC.getDataURL(function(dataURL) {
                    resolve(dataURL);
                });
            } catch (e) {
                reject(e);
            }
        });
    };

    /**
     * This method returns the recorded blob.
     * @method
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return self.recordRTC.getBlob();
    };

    /**
     * @property {Blob} blob - Recorded data as "Blob" object.
     * @memberof RecordRTCPromisesHandler
     * @example
     * recorder.stopRecording().then(function() {
     *     var blob = recorder.getBlob();
     * }).catch(errorCB);
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(21)))

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNWRmMTdjNzI1MGFhN2NjZmFkOSIsIndlYnBhY2s6Ly8vLi9zcmMvbWljcm9waG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb3JkcnRjL1JlY29yZFJUQy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osYUFBYTtBQUNiLGVBQWU7QUFDZiw0Q0FBNEM7QUFDNUMs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QUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFD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QUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFNBQVM7QUFDVCxXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPLFdBQVc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxnQkFBZ0IsU0FBUztBQUMvRSwwQkFBMEI7QUFDMUIsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPLFdBQVc7QUFDN0I7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLEtBQUssaUNBQWlDLGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzE4S0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoid2lkZ2V0cy9taWNyb3Bob25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ3aWRnZXRzL21pY3JvcGhvbmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2lkZ2V0cy9taWNyb3Bob25lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndpZGdldHMvbWljcm9waG9uZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI1ZGYxN2M3MjUwYWE3Y2NmYWQ5IiwiaW1wb3J0IFJlY29yZFJUQyBmcm9tIFwicmVjb3JkcnRjXCI7XG5cbmZ1bmN0aW9uIGluaXQoU3VydmV5KSB7XG4gIHZhciB3aWRnZXQgPSB7XG5cdFxuICAgIG5hbWU6IFwibWljcm9waG9uZVwiLFxuICAgIHRpdGxlOiBcIk1pY3JvcGhvbmVcIixcbiAgICBpY29uTmFtZTogXCJpY29uLW1pY3JvcGhvbmVcIixcbiAgICB3aWRnZXRJc0xvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIFJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH0sXG4gICAgaXNGaXQ6IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XG4gICAgICByZXR1cm4gcXVlc3Rpb24uZ2V0VHlwZSgpID09PSBcIm1pY3JvcGhvbmVcIjtcbiAgICB9LFxuICAgIGh0bWxUZW1wbGF0ZTpcblx0XHRcIjxkaXY+XCIrXG5cdFx0XCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgIHRpdGxlPSdSZWNvcmQnPjxpIGNsYXNzPSdmYSBmYS1taWNyb3Bob25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPjwvYnV0dG9uPlwiKyBcblx0XHRcIiZuYnNwOzxidXR0b24gdHlwZT0nYnV0dG9uJyB0aXRsZT0nU2F2ZSc+PGkgY2xhc3M9J2ZhIGZhLWNsb3VkJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPjwvYnV0dG9uPlwiK1xuXHRcdFwiJm5ic3A7PGF1ZGlvIHN0eWxlPSdcIitcblx0XHRcInBvc2l0aW9uOnJlbGF0aXZlOyBcIitcblx0XHRcInRvcDoxNnB4OyBcIitcblx0XHRcImxlZnQ6MTBweDsgXCIrXG5cdFx0XCJoZWlnaHQ6MzVweDtcIitcblx0XHRcIi1tb3otYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICMwMDY3NzM7XCIrXG5cdFx0XCItd2Via2l0LWJveC1zaGFkb3c6ICAycHggMnB4IDRweCAwcHggIzAwNjc3MztcIitcblx0XHRcImJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjMDA2NzczO1wiK1xuXHRcdFwiJyBcIitcblx0XHRcImNvbnRyb2xzPSd0cnVlJyA+XCIrXG5cdFx0XCI8L2F1ZGlvPlwiK1xuXHRcdFwiPC9kaXY+XCIsXG4gICAgYWN0aXZhdGVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhY3RpdmF0ZWRCeSkge1xuICAgICAgU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtaWNyb3Bob25lXCIsIFtdLCBudWxsLCBcImVtcHR5XCIpO1xuICAgIH0sXG5cdFxuICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbihxdWVzdGlvbiwgZWwpIHtcbiAgICAgIHZhciByb290V2lkZ2V0ID0gdGhpcztcblx0ICB2YXIgYnV0dG9uU3RhcnRFbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzBdO1xuXHQgIHZhciBidXR0b25TdG9wRWwgPSBlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKVsxXTtcblx0ICB2YXIgYXVkaW9FbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXVkaW9cIilbMF07XG5cdCBcbi8vLy8vLy8vLy8gIFJlY29yZFJUQyBsb2dpY1x0XG5cdCAgXG5cdCAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRcdHZhciBvcHRpb25zPXtcblx0XHRcdHR5cGU6ICdhdWRpbycsXG5cdFx0XHRtaW1lVHlwZTogJ2F1ZGlvL3dlYm0nLFxuXHRcdFx0YXVkaW9CaXRzUGVyU2Vjb25kOiA0NDEwMCxcblx0XHRcdHNhbXBsZVJhdGU6IDQ0MTAwLCBcblx0XHRcdGJ1ZmZlclNpemU6IDE2Mzg0LCBcblx0XHRcdG51bWJlck9mQXVkaW9DaGFubmVsczogMVxuXHRcdH07ICBcblx0XHRjb25zb2xlLmxvZyhcInN1Y2Nlc3NDYWxsYmFja1wiKTtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gPSBzdHJlYW07XG5cdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyA9IFJlY29yZFJUQyhxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0sIG9wdGlvbnMpO1xuXHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJzdGFydFJlY29yZGluZ1wiKTtcblx0XHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuc3RhcnRSZWNvcmRpbmcoKTtcblx0XHR9XG5cdCAgfTtcblxuXHQgIHZhciBlcnJvckNhbGxiYWNrPWZ1bmN0aW9uKCkge1xuXHRcdGFsZXJ0KCdObyBtaWNyb3Bob25lJyk7XG5cdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQz11bmRlZmluZWQ7XG5cdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtPXVuZGVmaW5lZDtcblx0ICB9O1xuXG5cdCAgdmFyIHByb2Nlc3NBdWRpbz0gZnVuY3Rpb24oYXVkaW9WaWRlb1dlYk1VUkwpIHtcblx0XHRjb25zb2xlLmxvZyhcInByb2Nlc3NBdWRpb1wiKTtcblx0XHR2YXIgcmVjb3JkZWRCbG9iID0gcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5nZXRCbG9iKCk7XG5cdFx0XG5cdFx0dmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KXtcblx0XHQgIHZhciBkYXRhVXJpID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblx0XHQgIGNvbnNvbGUubG9nKFwiZGF0YVVyaTogXCIgK2RhdGFVcmkpO1xuXHRcdCAgcXVlc3Rpb24udmFsdWUgPSBkYXRhVXJpO1xuXHRcdCAgYXVkaW9FbC5zcmM9ZGF0YVVyaTtcblx0XHQgIFxuXHRcdCAgY29uc29sZS5sb2coXCJjbGVhbmluZ1wiKTtcblx0XHQgIHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEM9dW5kZWZpbmVkO1xuXHRcdCAgcXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtPXVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKHJlY29yZGVkQmxvYik7XG5cdCAgfTtcblxuICAgICAgdmFyIHN0YXJ0UmVjb3JkaW5nPWZ1bmN0aW9uKCkge1xuXHRcdCAgXG5cdFx0IC8vIGVyYXNlIHByZXZpb3VzIGRhdGEgXG5cdFx0IHF1ZXN0aW9uLnZhbHVlPXVuZGVmaW5lZDtcblx0XHRcbiAgICAgICBcdC8vIGlmIHJlY29yZGVyIG9wZW4gb24gYW5vdGhlciBxdWVzdGlvblx0LSB0cnkgdG8gc3RvcCByZWNvcmRpbmdcdFx0XG5cdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLnN0b3BSZWNvcmRpbmcoZG9Ob3RoaW5nSGFuZGxlcik7XG5cdFx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRcdHRyYWNrLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcdCBcblx0XHR2YXIgbWVkaWFDb25zdHJhaW50cyA9IHtcblx0XHQgIHZpZGVvOiBmYWxzZSxcblx0XHQgIGF1ZGlvOiB0cnVlXG5cdFx0fTtcblx0XHRcblx0XHRuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG5cdFx0XHQuZ2V0VXNlck1lZGlhKG1lZGlhQ29uc3RyYWludHMpXG5cdFx0XHQudGhlbihzdWNjZXNzQ2FsbGJhY2suYmluZCh0aGlzKSwgZXJyb3JDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgfTtcblxuXHQgIHZhciBzdG9wUmVjb3JkaW5nPWZ1bmN0aW9uKCkge1xuXHRcdCAgY29uc29sZS5sb2coXCJzdG9wUmVjb3JkaW5nXCIpO1xuXHRcdCAgaWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLnN0b3BSZWNvcmRpbmcocHJvY2Vzc0F1ZGlvLmJpbmQodGhpcykpO1xuXHRcdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0XHR0cmFjay5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHQgIH1cblx0ICB9O1xuXHRcbi8vLy8vLy8vLy8vLy8vICBlbmQgUlRDIGxvZ2ljIC8vLy8vLy8vLy8vLy8vLy8vL1xuXHQgIFxuXHQgIGlmICghcXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICBidXR0b25TdGFydEVsLm9uY2xpY2sgPSBzdGFydFJlY29yZGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvblN0YXJ0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b25TdGFydEVsKTtcbiAgICAgIH1cblx0ICBcblx0ICBpZiAoIXF1ZXN0aW9uLmlzUmVhZE9ubHkpIHtcbiAgICAgICAgYnV0dG9uU3RvcEVsLm9uY2xpY2sgPSBzdG9wUmVjb3JkaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uU3RvcEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uU3RvcEVsKTtcbiAgICAgIH1cblx0ICBcblx0ICBcbiAgICAgIGF1ZGlvRWwuc3JjPXF1ZXN0aW9uLnZhbHVlXG4gICAgICBcbiAgICAgIHZhciB1cGRhdGVWYWx1ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICB9O1xuXHQgIFxuXHQgIHZhciBkb05vdGhpbmdIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIFxuICAgICAgfTtcblx0ICBcbiAgICAgIHF1ZXN0aW9uLnZhbHVlQ2hhbmdlZENhbGxiYWNrID0gdXBkYXRlVmFsdWVIYW5kbGVyO1xuICAgICAgdXBkYXRlVmFsdWVIYW5kbGVyKCk7XG5cdCAgXG4gICAgIFxuICAgIH0sXG4gICAgd2lsbFVubW91bnQ6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgY29uc29sZS5sb2coXCJ1bm1vdW50IG1pY3JvcGhvbmUgbm8gcmVjb3JkIFwiKTtcbiAgICAgIGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGRvTm90aGluZ0hhbmRsZXIpO1xuXHRcdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdFx0cXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuXHRcdFx0XHR0cmFjay5zdG9wKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdHF1ZXN0aW9uLnZhbHVlPXVuZGVmaW5lZDtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDPXVuZGVmaW5lZDtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW09dW5kZWZpbmVkO1xuXHQgICB9XG4gICAgfVxuICB9O1xuXG4gIFN1cnZleS5DdXN0b21XaWRnZXRDb2xsZWN0aW9uLkluc3RhbmNlLmFkZEN1c3RvbVdpZGdldCh3aWRnZXQsIFwiY3VzdG9tdHlwZVwiKTtcbn1cblxuaWYgKHR5cGVvZiBTdXJ2ZXkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaW5pdChTdXJ2ZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWljcm9waG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBMYXN0IHRpbWUgdXBkYXRlZDogMjAxOC0wNi0xNyAyOjM5OjE5IEFNIFVUQ1xyXG5cclxuLy8gX19fX19fX19fX19fX19fX1xyXG4vLyBSZWNvcmRSVEMgdjUuNC43XHJcblxyXG4vLyBPcGVuLVNvdXJjZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBNdWF6IEtoYW4gICAgIC0gd3d3Lk11YXpLaGFuLmNvbVxyXG4vLyBNSVQgTGljZW5zZSAgIC0gd3d3LldlYlJUQy1FeHBlcmltZW50LmNvbS9saWNlbmNlXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBfX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLmpzXHJcblxyXG4vKipcclxuICoge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQ30gaXMgYSBXZWJSVEMgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBhdWRpby92aWRlbyBhcyB3ZWxsIGFzIHNjcmVlbiBhY3Rpdml0eSByZWNvcmRpbmcuIEl0IHN1cHBvcnRzIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIEFuZHJvaWQsIGFuZCBNaWNyb3NvZnQgRWRnZS4gUGxhdGZvcm1zOiBMaW51eCwgTWFjIGFuZCBXaW5kb3dzLiBcclxuICogQHN1bW1hcnkgUmVjb3JkIGF1ZGlvLCB2aWRlbyBvciBzY3JlZW4gaW5zaWRlIHRoZSBicm93c2VyLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBSZWNvcmRSVEMobWVkaWFTdHJlYW0gb3IgW2FycmF5T2ZNZWRpYVN0cmVhbV0sIHtcclxuICogICAgIHR5cGU6ICd2aWRlbycsIC8vIGF1ZGlvIG9yIHZpZGVvIG9yIGdpZiBvciBjYW52YXNcclxuICogICAgIHJlY29yZGVyVHlwZTogTWVkaWFTdHJlYW1SZWNvcmRlciB8fCBDYW52YXNSZWNvcmRlciB8fCBTdGVyZW9BdWRpb1JlY29yZGVyIHx8IEV0Y1xyXG4gKiB9KTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICogQHNlZSBGb3IgZnVydGhlciBpbmZvcm1hdGlvbjpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIFNpbmdsZSBtZWRpYS1zdHJlYW0gb2JqZWN0LCBhcnJheSBvZiBtZWRpYS1zdHJlYW1zLCBodG1sLWNhbnZhcy1lbGVtZW50LCBldGMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7dHlwZTpcInZpZGVvXCIsIHJlY29yZGVyVHlwZTogTWVkaWFTdHJlYW1SZWNvcmRlciwgZGlzYWJsZUxvZ3M6IHRydWUsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgYnVmZmVyU2l6ZTogMCwgc2FtcGxlUmF0ZTogMCwgZGVzaXJlZFNhbXBSYXRlOiAxNjAwMCwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gUmVjb3JkUlRDKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIGlmICghbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICB0aHJvdyAnRmlyc3QgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHtcclxuICAgICAgICB0eXBlOiAndmlkZW8nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbmZpZyA9IG5ldyBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG5cclxuICAgIC8vIGEgcmVmZXJlbmNlIHRvIHVzZXIncyByZWNvcmRSVEMgb2JqZWN0XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRSZWNvcmRpbmcoY29uZmlnMikge1xyXG4gICAgICAgIGlmICghIWNvbmZpZzIpIHtcclxuICAgICAgICAgICAgLy8gYWxsb3cgdXNlcnMgdG8gc2V0IG9wdGlvbnMgdXNpbmcgc3RhcnRSZWNvcmRpbmcgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIGNvbmZpZzIgaXMgc2ltaWxhciB0byBtYWluIFwiY29uZmlnXCIgb2JqZWN0IChzZWNvbmQgcGFyYW1ldGVyIG92ZXIgUmVjb3JkUlRDIGNvbnN0cnVjdG9yKVxyXG4gICAgICAgICAgICBjb25maWcgPSBuZXcgUmVjb3JkUlRDQ29uZmlndXJhdGlvbihtZWRpYVN0cmVhbSwgY29uZmlnMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRlZCByZWNvcmRpbmcgJyArIGNvbmZpZy50eXBlICsgJyBzdHJlYW0uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZSgncmVjb3JkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRSZWNvcmRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYucmVjb3JkaW5nRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFJlY29yZGVyKGluaXRDYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChpbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2sgPSBjb25maWcuaW5pdENhbGxiYWNrID0gbnVsbDsgLy8gcmVjb3JkZXIuaW5pdFJlY29yZGVyIHNob3VsZCBiZSBjYWxsLWJhY2tlZCBvbmNlLlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIFJlY29yZGVyID0gbmV3IEdldFJlY29yZGVyVHlwZShtZWRpYVN0cmVhbSwgY29uZmlnKTtcclxuXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBSZWNvcmRlcihtZWRpYVN0cmVhbSwgY29uZmlnKTtcclxuICAgICAgICBtZWRpYVJlY29yZGVyLnJlY29yZCgpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZSgncmVjb3JkaW5nJyk7XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplZCByZWNvcmRlclR5cGU6JywgbWVkaWFSZWNvcmRlci5jb25zdHJ1Y3Rvci5uYW1lLCAnZm9yIG91dHB1dC10eXBlOicsIGNvbmZpZy50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcFJlY29yZGluZyhjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdwYXVzZWQnKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVzdW1lUmVjb3JkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcFJlY29yZGluZyhjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gJ3JlY29yZGluZycgJiYgIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JlY29yZGluZyBzdGF0ZSBzaG91bGQgYmU6IFwicmVjb3JkaW5nXCIsIGhvd2V2ZXIgY3VycmVudCBzdGF0ZSBpczogJywgc2VsZi5zdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3RvcHBlZCByZWNvcmRpbmcgJyArIGNvbmZpZy50eXBlICsgJyBzdHJlYW0uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLnR5cGUgIT09ICdnaWYnKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcChfY2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBfY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdzdG9wcGVkJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIF9jYWxsYmFjayhfX2Jsb2IpIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYsICcnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZWRpYVJlY29yZGVyKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVJlY29yZGVyW2tleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZltrZXldID0gbWVkaWFSZWNvcmRlcltrZXldO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBibG9iID0gbWVkaWFSZWNvcmRlci5ibG9iO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX19ibG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5ibG9iID0gYmxvYiA9IF9fYmxvYjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ1JlY29yZGluZyBmYWlsZWQuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJsb2IgJiYgIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmxvYi50eXBlLCAnLT4nLCBieXRlc1RvU2l6ZShibG9iLnNpemUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYsIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmF1dG9Xcml0ZVRvRGlzaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSB7fTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcltjb25maWcudHlwZSArICdCbG9iJ10gPSBkYXRhVVJMO1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhdXNlUmVjb3JkaW5nKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcGF1c2UgdGhlIHJlY29yZGluZy4gUmVjb3JkaW5nIHN0YXRlOiAnLCBzZWxmLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTdGF0ZSgncGF1c2VkJyk7XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdXNlZCByZWNvcmRpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3VtZVJlY29yZGluZygpIHtcclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIHJlc3VtZSB0aGUgcmVjb3JkaW5nLiBSZWNvcmRpbmcgc3RhdGU6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgLy8gbm90IGFsbCBsaWJzIGhhdmUgdGhpcyBtZXRob2QgeWV0XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VtZWQgcmVjb3JkaW5nLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkRmlsZShfYmxvYikge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlKG5ldyBGaWxlUmVhZGVyU3luYygpLnJlYWRBc0RhdGFVUkwoX2Jsb2IpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgJ1Bhc3MgYSBjYWxsYmFjayBmdW5jdGlvbiBvdmVyIGdldERhdGFVUkwuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBibG9iID0gX21lZGlhUmVjb3JkZXIgPyBfbWVkaWFSZWNvcmRlci5ibG9iIDogKG1lZGlhUmVjb3JkZXIgfHwge30pLmJsb2I7XHJcblxyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdCbG9iIGVuY29kZXIgZGlkIG5vdCBmaW5pc2ggaXRzIGpvYiB5ZXQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihyZWFkRmlsZSk7XHJcblxyXG4gICAgICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKGJsb2IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtfZnVuY3Rpb24udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICd0aGlzLm9ubWVzc2FnZSA9ICBmdW5jdGlvbiAoZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpIHtcclxuICAgICAgICBjb3VudGVyID0gY291bnRlciB8fCAwO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdzdG9wcGVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+PSBzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoc2VsZi5vblJlY29yZGluZ1N0b3BwZWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3VudGVyICs9IDEwMDA7IC8vIDEtc2Vjb25kXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9uU3RhdGVDaGFuZ2VkLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgc2VsZi5vblN0YXRlQ2hhbmdlZC5jYWxsKHNlbGYsIHN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLm9uU3RhdGVDaGFuZ2VkKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFdBUk5JTkcgPSAnSXQgc2VlbXMgdGhhdCByZWNvcmRlciBpcyBkZXN0cm95ZWQgb3IgXCJzdGFydFJlY29yZGluZ1wiIGlzIG5vdCBpbnZva2VkIGZvciAnICsgY29uZmlnLnR5cGUgKyAnIHJlY29yZGVyLic7XHJcblxyXG4gICAgZnVuY3Rpb24gd2FybmluZ0xvZygpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmRpc2FibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2FybihXQVJOSU5HKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVkaWFSZWNvcmRlcjtcclxuXHJcbiAgICB2YXIgcmV0dXJuT2JqZWN0ID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0cyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgcmVjb3JkZXIgPSBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgKiAgICAgdHlwZTogJ3ZpZGVvJ1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhcnRSZWNvcmRpbmc6IHN0YXJ0UmVjb3JkaW5nLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyB0aGUgcmVjb3JkaW5nLiBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBnZXQgXCJibG9iXCIgb3IgXCJVUklcIiBpbnNpZGUgdGhlIGNhbGxiYWNrIHRvIG1ha2Ugc3VyZSBhbGwgcmVjb3JkZXJzIGZpbmlzaGVkIHRoZWlyIGpvYi5cclxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIHRvIGdldCB0aGUgcmVjb3JkZWQgYmxvYi5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgLy8gdXNlIGVpdGhlciBcInRoaXNcIiBvciBcInJlY29yZGVyXCIgb2JqZWN0OyBib3RoIGFyZSBpZGVudGljYWxcclxuICAgICAgICAgKiAgICAgdmlkZW8uc3JjID0gdGhpcy50b1VSTCgpO1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0b3BSZWNvcmRpbmc6IHN0b3BSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nLiBZb3UgY2FuIHJlc3VtZSByZWNvcmRpbmcgdXNpbmcgXCJyZXN1bWVSZWNvcmRpbmdcIiBtZXRob2QuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBGaXJlZm94IGlzIHVuYWJsZSB0byBwYXVzZSB0aGUgcmVjb3JkaW5nLiBGaXggaXQuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5wYXVzZVJlY29yZGluZygpOyAgLy8gcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyByZXN1bWUgYWdhaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXVzZVJlY29yZGluZzogcGF1c2VSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTsgIC8vIGZpcnN0IG9mIGFsbCwgcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyBub3cgcmVzdW1lIGl0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzdW1lUmVjb3JkaW5nOiByZXN1bWVSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIHRoZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmluaXRSZWNvcmRlcigpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluaXRSZWNvcmRlcjogaW5pdFJlY29yZGVyLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBc2sgUmVjb3JkUlRDIHRvIGF1dG8tc3RvcCB0aGUgcmVjb3JkaW5nIGFmdGVyIDUgbWludXRlcy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogdmFyIGZpdmVNaW51dGVzID0gNSAqIDEwMDAgKiA2MDtcclxuICAgICAgICAgKiByZWNvcmRlci5zZXRSZWNvcmRpbmdEdXJhdGlvbihmaXZlTWludXRlcywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgdmFyIGJsb2IgPSB0aGlzLmdldEJsb2IoKTtcclxuICAgICAgICAgKiAgICB2aWRlby5zcmMgPSB0aGlzLnRvVVJMKCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogLy8gb3Igb3RoZXJ3aXNlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0UmVjb3JkaW5nRHVyYXRpb24oZml2ZU1pbnV0ZXMpLm9uUmVjb3JkaW5nU3RvcHBlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbjogZnVuY3Rpb24ocmVjb3JkaW5nRHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVjb3JkaW5nRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncmVjb3JkaW5nRHVyYXRpb24gaXMgcmVxdWlyZWQuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWNvcmRpbmdEdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdyZWNvcmRpbmdEdXJhdGlvbiBtdXN0IGJlIGEgbnVtYmVyLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nRHVyYXRpb24gPSByZWNvcmRpbmdEdXJhdGlvbjtcclxuICAgICAgICAgICAgc2VsZi5vblJlY29yZGluZ1N0b3BwZWQgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9uUmVjb3JkaW5nU3RvcHBlZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uUmVjb3JkaW5nU3RvcHBlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGNsZWFyL3Jlc2V0IGFsbCB0aGUgcmVjb3JkZWQgZGF0YS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIEZpZ3VyZSBvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBcInJlc2V0XCIgYW5kIFwiY2xlYXJSZWNvcmRlZERhdGFcIiBtZXRob2RzLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsZWFyZWQgb2xkIHJlY29yZGVkIGRhdGEuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIHJlY29yZGVkIGJsb2IuIFVzZSB0aGlzIG1ldGhvZCBpbnNpZGUgdGhlIFwic3RvcFJlY29yZGluZ1wiIGNhbGxiYWNrLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIHZhciBmaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCAnZmlsZW5hbWUud2VibScsIHtcclxuICAgICAgICAgKiAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAqICAgICB9KTtcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgKiAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7IC8vIHVwbG9hZCBcIkZpbGVcIiBvYmplY3QgcmF0aGVyIHRoYW4gYSBcIkJsb2JcIlxyXG4gICAgICAgICAqICAgICB1cGxvYWRUb1NlcnZlcihmb3JtRGF0YSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogQHJldHVybnMge0Jsb2J9IFJldHVybnMgcmVjb3JkZWQgZGF0YSBhcyBcIkJsb2JcIiBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QmxvYjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWVkaWFSZWNvcmRlci5ibG9iO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBkYXRhLVVSSSBpbnN0ZWFkIG9mIEJsb2IuXHJcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBnZXQgdGhlIERhdGEtVVJJLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICByZWNvcmRlci5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkkpIHtcclxuICAgICAgICAgKiAgICAgICAgIHZpZGVvLnNyYyA9IGRhdGFVUkk7XHJcbiAgICAgICAgICogICAgIH0pO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldERhdGFVUkw6IGdldERhdGFVUkwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB2aXJ0dWFsL3RlbXBvcmFyeSBVUkwuIFVzYWdlIG9mIHRoaXMgVVJMIGlzIGxpbWl0ZWQgdG8gY3VycmVudCB0YWIuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIGEgdmlydHVhbC90ZW1wb3JhcnkgVVJMIGZvciB0aGUgcmVjb3JkZWQgXCJCbG9iXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG9VUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobWVkaWFSZWNvcmRlci5ibG9iKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgaW50ZXJuYWwgcmVjb3JkaW5nIG9iamVjdCAoaS5lLiBpbnRlcm5hbCBtb2R1bGUpIGUuZy4gTXV0bGlTdHJlYW1SZWNvcmRlciwgTWVkaWFTdHJlYW1SZWNvcmRlciwgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBXaGFtbXlSZWNvcmRlciBldGMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLmdldEludGVybmFsUmVjb3JkZXIoKTtcclxuICAgICAgICAgKiBpZihpbnRlcm5hbCBpbnN0YW5jZW9mIE11bHRpU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwuYWRkU3RyZWFtcyhbbmV3QXVkaW9TdHJlYW1dKTtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwucmVzZXRWaWRlb1N0cmVhbXMoW3NjcmVlblN0cmVhbV0pO1xyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0SW50ZXJuYWxSZWNvcmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZSBzYXZlLWFzIGRpYWxvZyB0byBzYXZlIHRoZSByZWNvcmRlZCBibG9iIGludG8geW91ciBkaXNrLlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIFNldCB5b3VyIG93biBmaWxlIG5hbWUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHRoaXMuc2F2ZSgnZmlsZS1uYW1lJyk7XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgLy8gb3IgbWFudWFsbHk6XHJcbiAgICAgICAgICogICAgIGludm9rZVNhdmVBc0RpYWxvZyh0aGlzLmdldEJsb2IoKSwgJ2ZpbGVuYW1lLndlYm0nKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlOiBmdW5jdGlvbihmaWxlTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW52b2tlU2F2ZUFzRGlhbG9nKG1lZGlhUmVjb3JkZXIuYmxvYiwgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGdldHMgYSBibG9iIGZyb20gaW5kZXhlZC1EQiBzdG9yYWdlLlxyXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdG8gZ2V0IHRoZSByZWNvcmRlZCBibG9iLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5nZXRGcm9tRGlzayhmdW5jdGlvbihkYXRhVVJMKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IGRhdGFVUkw7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0RnJvbURpc2s6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWNvcmRSVEMuZ2V0RnJvbURpc2soY29uZmlnLnR5cGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBhcHBlbmRzIGFuIGFycmF5IG9mIHdlYnAgaW1hZ2VzIHRvIHRoZSByZWNvcmRlZCB2aWRlby1ibG9iLiBJdCB0YWtlcyBhbiBcImFycmF5XCIgb2JqZWN0LlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48QXJyYXk+fVxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5T2ZXZWJQSW1hZ2VzIC0gQXJyYXkgb2Ygd2VicCBpbWFnZXMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBhcnJheU9mV2ViUEltYWdlcyA9IFtdO1xyXG4gICAgICAgICAqIGFycmF5T2ZXZWJQSW1hZ2VzLnB1c2goe1xyXG4gICAgICAgICAqICAgICBkdXJhdGlvbjogaW5kZXgsXHJcbiAgICAgICAgICogICAgIGltYWdlOiAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwuLi4nXHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0QWR2ZXJ0aXNlbWVudEFycmF5KGFycmF5T2ZXZWJQSW1hZ2VzKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRBZHZlcnRpc2VtZW50QXJyYXk6IGZ1bmN0aW9uKGFycmF5T2ZXZWJQSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5hZHZlcnRpc2VtZW50ID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJyYXlPZldlYlBJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuYWR2ZXJ0aXNlbWVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXJyYXlPZldlYlBJbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXQgaXMgZXF1aXZhbGVudCB0byA8Y29kZSBjbGFzcz1cInN0clwiPlwicmVjb3JkZXIuZ2V0QmxvYigpXCI8L2NvZGU+IG1ldGhvZC4gVXNhZ2Ugb2YgXCJnZXRCbG9iXCIgaXMgcmVjb21tZW5kZWQsIHRob3VnaC5cclxuICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBCbG9iIGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGlzIHByb3BlcnR5LlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5ibG9iO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIC8vIGJlbG93IG9uZSBpcyByZWNvbW1lbmRlZFxyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2I6IG51bGwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgd29ya3Mgb25seSB3aXRoIHtyZWNvcmRlclR5cGU6U3RlcmVvQXVkaW9SZWNvcmRlcn0uIFVzZSB0aGlzIHByb3BlcnR5IG9uIFwic3RvcFJlY29yZGluZ1wiIHRvIHZlcmlmeSB0aGUgZW5jb2RlcidzIHNhbXBsZS1yYXRlcy5cclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhpcyBidWZmZXItc2l6ZTogJyArIHRoaXMuYnVmZmVyU2l6ZSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnVmZmVyU2l6ZTogMCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyB3b3JrcyBvbmx5IHdpdGgge3JlY29yZGVyVHlwZTpTdGVyZW9BdWRpb1JlY29yZGVyfS4gVXNlIHRoaXMgcHJvcGVydHkgb24gXCJzdG9wUmVjb3JkaW5nXCIgdG8gdmVyaWZ5IHRoZSBlbmNvZGVyJ3Mgc2FtcGxlLXJhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYW1wbGVSYXRlIC0gU2FtcGxlLXJhdGVzIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhlc2Ugc2FtcGxlLXJhdGVzOiAnICsgdGhpcy5zYW1wbGVSYXRlKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYW1wbGVSYXRlOiAwLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB7cmVjb3JkZXJUeXBlOlN0ZXJlb0F1ZGlvUmVjb3JkZXJ9IHJldHVybnMgQXJyYXlCdWZmZXIgb2JqZWN0LlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciAtIEF1ZGlvIEFycmF5QnVmZmVyLCBzdXBwb3J0ZWQgb25seSBpbiBDaHJvbWUuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdmFyIGFycmF5QnVmZmVyID0gdGhpcy5idWZmZXI7XHJcbiAgICAgICAgICogICAgIGFsZXJ0KGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJ1ZmZlcjogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgcmVzZXRzIHRoZSByZWNvcmRlci4gU28gdGhhdCB5b3UgY2FuIHJldXNlIHNpbmdsZSByZWNvcmRlciBpbnN0YW5jZSBtYW55IHRpbWVzLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5yZXNldCgpO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiB0eXBlb2YgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSgnaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgcmVjb3JkZXIncyBzdGF0ZSBjaGFuZ2VzLiBVc2UgdGhpcyBhcyBhbiBcImV2ZW50XCIuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXRlIC0gQSByZWNvcmRlcidzIHN0YXRlIGNhbiBiZTogcmVjb3JkaW5nLCBwYXVzZWQsIHN0b3BwZWQgb3IgaW5hY3RpdmUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgKiAgICAgY29uc29sZS5sb2coJ1JlY29yZGVyIHN0YXRlOiAnLCBzdGF0ZSk7XHJcbiAgICAgICAgICogfTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdGF0ZSBjaGFuZ2VkOicsIHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVjb3JkZXIgY2FuIGhhdmUgaW5hY3RpdmUsIHJlY29yZGluZywgcGF1c2VkIG9yIHN0b3BwZWQgc3RhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGF0ZSAtIEEgcmVjb3JkZXIncyBzdGF0ZSBjYW4gYmU6IHJlY29yZGluZywgcGF1c2VkLCBzdG9wcGVkIG9yIGluYWN0aXZlLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAvLyB0aGlzIGxvb3BlciBmdW5jdGlvbiB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgYWJvdXQgdGhlIHJlY29yZGVyJ3Mgc3RhdGVzLlxyXG4gICAgICAgICAqIChmdW5jdGlvbiBsb29wZXIoKSB7XHJcbiAgICAgICAgICogICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MID0gJ1JlY29yZGVyJ3Mgc3RhdGUgaXM6ICcgKyByZWNvcmRlci5zdGF0ZTtcclxuICAgICAgICAgKiAgICAgaWYocmVjb3JkZXIuc3RhdGUgPT09ICdzdG9wcGVkJykgcmV0dXJuOyAvLyBpZ25vcmUrc3RvcFxyXG4gICAgICAgICAqICAgICBzZXRUaW1lb3V0KGxvb3BlciwgMTAwMCk7IC8vIHVwZGF0ZSBhZnRlciBldmVyeSAzLXNlY29uZHNcclxuICAgICAgICAgKiB9KSgpO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGU6ICdpbmFjdGl2ZScsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCByZWNvcmRlcidzIHJlYWRvbmx5IHN0YXRlLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgcmVjb3JkaW5nIHN0YXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc3RhdGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzdHJveSBSZWNvcmRSVEMgaW5zdGFuY2UuIENsZWFyIGFsbCByZWNvcmRlcnMgYW5kIG9iamVjdHMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVMb2dzQ2FjaGUgPSBjb25maWcuZGlzYWJsZUxvZ3M7XHJcblxyXG4gICAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlTG9nczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZWxmLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKCdkZXN0cm95ZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuT2JqZWN0ID0gc2VsZiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3Rvci5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5kaXNhYmxlTG9ncyA9IGRpc2FibGVMb2dzQ2FjaGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZWNvcmRSVEMgaXMgZGVzdHJveWVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVjb3JkUlRDIHZlcnNpb24gbnVtYmVyXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHZlcnNpb24gLSBSZWxlYXNlIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiBhbGVydChyZWNvcmRlci52ZXJzaW9uKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICB2ZXJzaW9uOiAnNS40LjcnXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcykge1xyXG4gICAgICAgIHNlbGYgPSByZXR1cm5PYmplY3Q7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBzb21lb25lIHdhbnRzIHRvIHVzZSBSZWNvcmRSVEMgd2l0aCB0aGUgXCJuZXdcIiBrZXl3b3JkLlxyXG4gICAgZm9yICh2YXIgcHJvcCBpbiByZXR1cm5PYmplY3QpIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gcmV0dXJuT2JqZWN0W3Byb3BdO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiByZXR1cm5PYmplY3Q7XHJcbn1cclxuXHJcblJlY29yZFJUQy52ZXJzaW9uID0gJzUuNC43JztcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAvKiAmJiAhIW1vZHVsZS5leHBvcnRzKi8gKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFJlY29yZFJUQztcclxufVxyXG5cclxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKCdSZWNvcmRSVEMnLCBbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlY29yZFJUQztcclxuICAgIH0pO1xyXG59XG5cclxuUmVjb3JkUlRDLmdldEZyb21EaXNrID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICB0aHJvdyAnY2FsbGJhY2sgaXMgbWFuZGF0b3J5Lic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgcmVjb3JkZWQgJyArICh0eXBlID09PSAnYWxsJyA/ICdibG9icycgOiB0eXBlICsgJyBibG9iICcpICsgJyBmcm9tIGRpc2shJyk7XHJcbiAgICBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCBfdHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlICE9PSAnYWxsJyAmJiBfdHlwZSA9PT0gdHlwZSArICdCbG9iJyAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJyAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMLCBfdHlwZS5yZXBsYWNlKCdCbG9iJywgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBzdG9yZSByZWNvcmRlZCBibG9icyBpbnRvIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIHthdWRpbzogQmxvYiwgdmlkZW86IEJsb2IsIGdpZjogQmxvYn1cclxuICogQG1ldGhvZFxyXG4gKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIFJlY29yZFJUQy53cml0ZVRvRGlzayh7XHJcbiAqICAgICBhdWRpbzogYXVkaW9CbG9iLFxyXG4gKiAgICAgdmlkZW86IHZpZGVvQmxvYixcclxuICogICAgIGdpZiAgOiBnaWZCbG9iXHJcbiAqIH0pO1xyXG4gKi9cclxuUmVjb3JkUlRDLndyaXRlVG9EaXNrID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgY29uc29sZS5sb2coJ1dyaXRpbmcgcmVjb3JkZWQgYmxvYihzKSB0byBkaXNrIScpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBpZiAob3B0aW9ucy5hdWRpbyAmJiBvcHRpb25zLnZpZGVvICYmIG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmdpZi5nZXREYXRhVVJMKGZ1bmN0aW9uKGdpZkRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0Jsb2I6IHZpZGVvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmQmxvYjogZ2lmRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMudmlkZW8pIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb0Jsb2I6IHZpZGVvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLmdpZi5nZXREYXRhVVJMKGZ1bmN0aW9uKGdpZkRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudmlkZW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hdWRpbykge1xyXG4gICAgICAgIG9wdGlvbnMuYXVkaW8uZ2V0RGF0YVVSTChmdW5jdGlvbihhdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgYXVkaW9CbG9iOiBhdWRpb0RhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudmlkZW8pIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmdpZikge1xyXG4gICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFJlY29yZFJUQy1Db25maWd1cmF0aW9uLmpzXHJcblxyXG4vKipcclxuICoge0BsaW5rIFJlY29yZFJUQ0NvbmZpZ3VyYXRpb259IGlzIGFuIGlubmVyL3ByaXZhdGUgaGVscGVyIGZvciB7QGxpbmsgUmVjb3JkUlRDfS5cclxuICogQHN1bW1hcnkgSXQgY29uZmlndXJlcyB0aGUgMm5kIHBhcmFtZXRlciBwYXNzZWQgb3ZlciB7QGxpbmsgUmVjb3JkUlRDfSBhbmQgcmV0dXJucyBhIHZhbGlkIFwiY29uZmlnXCIgb2JqZWN0LlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDQ29uZmlndXJhdGlvblxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIG9wdGlvbnMgPSBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHt0eXBlOlwidmlkZW9cIiwgZGlzYWJsZUxvZ3M6IHRydWUsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgYnVmZmVyU2l6ZTogMCwgc2FtcGxlUmF0ZTogMCwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGdldE5hdGl2ZUJsb2I6dHJ1ZSwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIGlmICghY29uZmlnLnJlY29yZGVyVHlwZSAmJiAhY29uZmlnLnR5cGUpIHtcclxuICAgICAgICBpZiAoISFjb25maWcuYXVkaW8gJiYgISFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAndmlkZW8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISFjb25maWcuYXVkaW8gJiYgIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlICYmICFjb25maWcudHlwZSkge1xyXG4gICAgICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBXaGFtbXlSZWNvcmRlciB8fCBjb25maWcucmVjb3JkZXJUeXBlID09PSBDYW52YXNSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBHaWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICdnaWYnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnJlY29yZGVyVHlwZSA9PT0gU3RlcmVvQXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBNZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCAmJiBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAndmlkZW8nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoICYmICFtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnYXVkaW8nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCAmJiBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAnYXVkaW8nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uZmlnLnR5cGUgPSAnVW5Lbm93bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBNZWRpYVN0cmVhbVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVkaWFSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3REYXRhJyBpbiBNZWRpYVJlY29yZGVyLnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmICghY29uZmlnLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5taW1lVHlwZSA9ICd2aWRlby93ZWJtJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLnR5cGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSBjb25maWcubWltZVR5cGUuc3BsaXQoJy8nKVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmJpdHNQZXJTZWNvbmQpIHtcclxuICAgICAgICAgICAgLy8gY29uZmlnLmJpdHNQZXJTZWNvbmQgPSAxMjgwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNpZGVyIGRlZmF1bHQgdHlwZT1hdWRpb1xyXG4gICAgaWYgKCFjb25maWcudHlwZSkge1xyXG4gICAgICAgIGlmIChjb25maWcubWltZVR5cGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSBjb25maWcubWltZVR5cGUuc3BsaXQoJy8nKVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb25maWcudHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19cclxuLy8gR2V0UmVjb3JkZXJUeXBlLmpzXHJcblxyXG4vKipcclxuICoge0BsaW5rIEdldFJlY29yZGVyVHlwZX0gaXMgYW4gaW5uZXIvcHJpdmF0ZSBoZWxwZXIgZm9yIHtAbGluayBSZWNvcmRSVEN9LlxyXG4gKiBAc3VtbWFyeSBJdCByZXR1cm5zIGJlc3QgcmVjb3JkZXItdHlwZSBhdmFpbGFibGUgZm9yIHlvdXIgYnJvd3Nlci5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIEdldFJlY29yZGVyVHlwZVxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIFJlY29yZGVyVHlwZSA9IEdldFJlY29yZGVyVHlwZShvcHRpb25zKTtcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFJlY29yZGVyVHlwZShvcHRpb25zKTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHt0eXBlOlwidmlkZW9cIiwgZGlzYWJsZUxvZ3M6IHRydWUsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgYnVmZmVyU2l6ZTogMCwgc2FtcGxlUmF0ZTogMCwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gR2V0UmVjb3JkZXJUeXBlKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIHZhciByZWNvcmRlcjtcclxuXHJcbiAgICAvLyBTdGVyZW9BdWRpb1JlY29yZGVyIGNhbiB3b3JrIHdpdGggYWxsIHRocmVlOiBFZGdlLCBGaXJlZm94IGFuZCBDaHJvbWVcclxuICAgIC8vIHRvZG86IGRldGVjdCBpZiBpdCBpcyBFZGdlLCB0aGVuIGF1dG8gdXNlOiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICBpZiAoaXNDaHJvbWUgfHwgaXNFZGdlIHx8IGlzT3BlcmEpIHtcclxuICAgICAgICAvLyBNZWRpYSBTdHJlYW0gUmVjb3JkaW5nIEFQSSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gY2hyb21lIHlldDtcclxuICAgICAgICAvLyBUaGF0J3Mgd2h5IHVzaW5nIFdlYkF1ZGlvIEFQSSB0byByZWNvcmQgc3RlcmVvIGF1ZGlvIGluIFdBViBmb3JtYXRcclxuICAgICAgICByZWNvcmRlciA9IFN0ZXJlb0F1ZGlvUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdERhdGEnIGluIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlICYmICFpc0Nocm9tZSkge1xyXG4gICAgICAgIHJlY29yZGVyID0gTWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWRlbyByZWNvcmRlciAoaW4gV2ViTSBmb3JtYXQpXHJcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICd2aWRlbycgJiYgKGlzQ2hyb21lIHx8IGlzT3BlcmEpKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBXaGFtbXlSZWNvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWRlbyByZWNvcmRlciAoaW4gR2lmIGZvcm1hdClcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2dpZicpIHtcclxuICAgICAgICByZWNvcmRlciA9IEdpZlJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwyY2FudmFzIHJlY29yZGluZyFcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2NhbnZhcycpIHtcclxuICAgICAgICByZWNvcmRlciA9IENhbnZhc1JlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgcmVjb3JkZXIgIT09IENhbnZhc1JlY29yZGVyICYmIHJlY29yZGVyICE9PSBHaWZSZWNvcmRlciAmJiB0eXBlb2YgTWVkaWFSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3REYXRhJyBpbiBNZWRpYVJlY29yZGVyLnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmICgobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MgJiYgbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpIHx8IChtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcyAmJiBtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgLy8gYXVkaW8tb25seSByZWNvcmRpbmdcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy50eXBlID09PSAnYXVkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkID09PSAnZnVuY3Rpb24nICYmIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKCdhdWRpby93ZWJtJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHJlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHZpZGVvIG9yIHNjcmVlbiB0cmFja3NcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQoJ3ZpZGVvL3dlYm0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGVyID0gTWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBBcnJheSAmJiBtZWRpYVN0cmVhbS5sZW5ndGgpIHtcclxuICAgICAgICByZWNvcmRlciA9IE11bHRpU3RyZWFtUmVjb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUpIHtcclxuICAgICAgICByZWNvcmRlciA9IGNvbmZpZy5yZWNvcmRlclR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MgJiYgISFyZWNvcmRlciAmJiAhIXJlY29yZGVyLm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgcmVjb3JkZXJUeXBlOicsIHJlY29yZGVyLm5hbWUgfHwgcmVjb3JkZXIuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZGVyO1xyXG59XHJcblxyXG4vLyBfX19fX19fX19fX19fXHJcbi8vIE1SZWNvcmRSVEMuanNcclxuXHJcbi8qKlxyXG4gKiBNUmVjb3JkUlRDIHJ1bnMgb24gdG9wIG9mIHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIG11bHRpcGxlIHJlY29yZGluZ3MgaW4gYSBzaW5nbGUgcGxhY2UsIGJ5IHByb3ZpZGluZyBzaW1wbGUgQVBJLlxyXG4gKiBAc3VtbWFyeSBNUmVjb3JkUlRDIHN0YW5kcyBmb3IgXCJNdWx0aXBsZS1SZWNvcmRSVENcIi5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIE1SZWNvcmRSVENcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBNUmVjb3JkUlRDKCk7XHJcbiAqIHJlY29yZGVyLmFkZFN0cmVhbShNZWRpYVN0cmVhbSk7XHJcbiAqIHJlY29yZGVyLm1lZGlhVHlwZSA9IHtcclxuICogICAgIGF1ZGlvOiB0cnVlLCAvLyBvciBTdGVyZW9BdWRpb1JlY29yZGVyIG9yIE1lZGlhU3RyZWFtUmVjb3JkZXJcclxuICogICAgIHZpZGVvOiB0cnVlLCAvLyBvciBXaGFtbXlSZWNvcmRlciBvciBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAqICAgICBnaWY6IHRydWUgICAgLy8gb3IgR2lmUmVjb3JkZXJcclxuICogfTtcclxuICogLy8gbWltZVR5cGUgaXMgb3B0aW9uYWwgYW5kIHNob3VsZCBiZSBzZXQgb25seSBpbiBhZHZhbmNlIGNhc2VzLlxyXG4gKiByZWNvcmRlci5taW1lVHlwZSA9IHtcclxuICogICAgIGF1ZGlvOiAnYXVkaW8vd2F2JyxcclxuICogICAgIHZpZGVvOiAndmlkZW8vd2VibScsXHJcbiAqICAgICBnaWY6ICAgJ2ltYWdlL2dpZidcclxuICogfTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICogQHNlZSBGb3IgZnVydGhlciBpbmZvcm1hdGlvbjpcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMvdHJlZS9tYXN0ZXIvTVJlY29yZFJUQ3xNUmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHJlcXVpcmVzIHtAbGluayBSZWNvcmRSVEN9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gTVJlY29yZFJUQyhtZWRpYVN0cmVhbSkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgYXR0YWNoZXMgTWVkaWFTdHJlYW0gb2JqZWN0IHRvIHtAbGluayBNUmVjb3JkUlRDfS5cclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gQSBNZWRpYVN0cmVhbSBvYmplY3QsIGVpdGhlciBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEksIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmFkZFN0cmVhbShNZWRpYVN0cmVhbSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkU3RyZWFtID0gZnVuY3Rpb24oX21lZGlhU3RyZWFtKSB7XHJcbiAgICAgICAgaWYgKF9tZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbSA9IF9tZWRpYVN0cmVhbTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBwcm9wZXJ0eSBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIHJlY29yZGluZyB0eXBlIGUuZy4gYXVkaW8sIG9yIHZpZGVvLCBvciBnaWYsIG9yIGNhbnZhcy5cclxuICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBtZWRpYVR5cGUgLSB7YXVkaW86IHRydWUsIHZpZGVvOiB0cnVlLCBnaWY6IHRydWV9XHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciByZWNvcmRlciA9IG5ldyBNUmVjb3JkUlRDKCk7XHJcbiAgICAgKiByZWNvcmRlci5tZWRpYVR5cGUgPSB7XHJcbiAgICAgKiAgICAgYXVkaW86IHRydWUsIC8vIFRSVUUgb3IgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiAgICAgdmlkZW86IHRydWUsIC8vIFRSVUUgb3IgV2hhbW15UmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogICAgIGdpZiAgOiB0cnVlICAvLyBUUlVFIG9yIEdpZlJlY29yZGVyXHJcbiAgICAgKiB9O1xyXG4gICAgICovXHJcbiAgICB0aGlzLm1lZGlhVHlwZSA9IHtcclxuICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0cyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnRSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWVkaWFUeXBlID0gdGhpcy5tZWRpYVR5cGU7XHJcbiAgICAgICAgdmFyIHJlY29yZGVyVHlwZTtcclxuICAgICAgICB2YXIgbWltZVR5cGUgPSB0aGlzLm1pbWVUeXBlIHx8IHtcclxuICAgICAgICAgICAgYXVkaW86IG51bGwsXHJcbiAgICAgICAgICAgIHZpZGVvOiBudWxsLFxyXG4gICAgICAgICAgICBnaWY6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS5hdWRpbyAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgbWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MgJiYgIW1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS5hdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUudmlkZW8gIT09ICdmdW5jdGlvbicgJiYgaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpICYmIG1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzICYmICFtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtZWRpYVR5cGUudmlkZW8gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmdpZiAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MgJiYgIW1lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS5naWYgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWVkaWFUeXBlLmF1ZGlvICYmICFtZWRpYVR5cGUudmlkZW8gJiYgIW1lZGlhVHlwZS5naWYpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ01lZGlhU3RyZWFtIG11c3QgaGF2ZSBlaXRoZXIgYXVkaW8gb3IgdmlkZW8gdHJhY2tzLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFtZWRpYVR5cGUuYXVkaW8pIHtcclxuICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUuYXVkaW8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG1lZGlhVHlwZS5hdWRpbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyID0gbmV3IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclNpemU6IHRoaXMuYnVmZmVyU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVsczogdGhpcy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgfHwgMixcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0aGlzLmRpc2FibGVMb2dzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlOiByZWNvcmRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUuYXVkaW8sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2xpY2U6IHRoaXMudGltZVNsaWNlLFxyXG4gICAgICAgICAgICAgICAgb25UaW1lU3RhbXA6IHRoaXMub25UaW1lU3RhbXBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICByZWNvcmRlclR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS52aWRlbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLnZpZGVvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gbWVkaWFTdHJlYW07XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpICYmICEhbWVkaWFUeXBlLmF1ZGlvICYmIHR5cGVvZiBtZWRpYVR5cGUuYXVkaW8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2aWRlb1RyYWNrID0gbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISFuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyZWFtLmFkZFRyYWNrKHZpZGVvVHJhY2spO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkZXJUeXBlICYmIHJlY29yZGVyVHlwZSA9PT0gV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBkb2VzIE5PVCBzdXBwb3J0IHdlYnAtZW5jb2RpbmcgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oW3ZpZGVvVHJhY2tdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyID0gbmV3IFJlY29yZFJUQyhuZXdTdHJlYW0sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlbyxcclxuICAgICAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgICAgICAgICBmcmFtZUludGVydmFsOiB0aGlzLmZyYW1lSW50ZXJ2YWwgfHwgMTAsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlTG9nczogdGhpcy5kaXNhYmxlTG9ncyxcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZTogcmVjb3JkZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLnZpZGVvLFxyXG4gICAgICAgICAgICAgICAgdGltZVNsaWNlOiB0aGlzLnRpbWVTbGljZSxcclxuICAgICAgICAgICAgICAgIG9uVGltZVN0YW1wOiB0aGlzLm9uVGltZVN0YW1wXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFtZWRpYVR5cGUuYXVkaW8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFtZWRpYVR5cGUuYXVkaW8gJiYgISFtZWRpYVR5cGUudmlkZW8pIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcyBsaW5lIHByZXZlbnRzIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgICAgLy8gdG9kbzogZml4IGl0XHJcbiAgICAgICAgICAgIGlmIChpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgLyogJiYgIXRoaXMuYXVkaW9SZWNvcmRlciAqLyApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9SZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnZpZGVvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRlci5pbml0UmVjb3JkZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpb1JlY29yZGVyLmluaXRSZWNvcmRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm90aCByZWNvcmRlcnMgYXJlIHJlYWR5IHRvIHJlY29yZCB0aGluZ3MgYWNjdXJhdGVseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZpZGVvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhbWVkaWFUeXBlLmdpZikge1xyXG4gICAgICAgICAgICByZWNvcmRlclR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS5naWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG1lZGlhVHlwZS5naWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlciA9IG5ldyBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdnaWYnLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiB0aGlzLmZyYW1lUmF0ZSB8fCAyMDAsXHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiB0aGlzLnF1YWxpdHkgfHwgMTAsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlTG9nczogdGhpcy5kaXNhYmxlTG9ncyxcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZTogcmVjb3JkZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLmdpZlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhbGwgZW5jb2RlcnMgZmluaXNoZWQgdGhlaXIgam9icy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbihyZWNvcmRpbmcpe1xyXG4gICAgICogICAgIHZhciBhdWRpb0Jsb2IgPSByZWNvcmRpbmcuYXVkaW87XHJcbiAgICAgKiAgICAgdmFyIHZpZGVvQmxvYiA9IHJlY29yZGluZy52aWRlbztcclxuICAgICAqICAgICB2YXIgZ2lmQmxvYiAgID0gcmVjb3JkaW5nLmdpZjtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3BSZWNvcmRpbmcgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbihibG9iVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9iVVJMLCAnYXVkaW8nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JVUkwsICd2aWRlbycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbihibG9iVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhibG9iVVJMLCAnZ2lmJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgcmVjb3JkaW5nLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZVJlY29yZGluZygpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlUmVjb3JkaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgcmVjb3JkaW5nLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWVSZWNvcmRpbmcoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWVSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5yZXN1bWVSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5yZXN1bWVSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gbWFudWFsbHkgZ2V0IGFsbCByZWNvcmRlZCBibG9icy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQWxsIHJlY29yZGVkIGJsb2JzIGFyZSBwYXNzZWQgYmFjayB0byB0aGUgXCJjYWxsYmFja1wiIGZ1bmN0aW9uLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5nZXRCbG9iKGZ1bmN0aW9uKHJlY29yZGluZyl7XHJcbiAgICAgKiAgICAgdmFyIGF1ZGlvQmxvYiA9IHJlY29yZGluZy5hdWRpbztcclxuICAgICAqICAgICB2YXIgdmlkZW9CbG9iID0gcmVjb3JkaW5nLnZpZGVvO1xyXG4gICAgICogICAgIHZhciBnaWZCbG9iICAgPSByZWNvcmRpbmcuZ2lmO1xyXG4gICAgICogfSk7XHJcbiAgICAgKiAvLyBvclxyXG4gICAgICogdmFyIGF1ZGlvQmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKS5hdWRpbztcclxuICAgICAqIHZhciB2aWRlb0Jsb2IgPSByZWNvcmRlci5nZXRCbG9iKCkudmlkZW87XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0QmxvYiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5hdWRpbyA9IHRoaXMuYXVkaW9SZWNvcmRlci5nZXRCbG9iKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWRlb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC52aWRlbyA9IHRoaXMudmlkZW9SZWNvcmRlci5nZXRCbG9iKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICBvdXRwdXQuZ2lmID0gdGhpcy5naWZSZWNvcmRlci5nZXRCbG9iKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sob3V0cHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSBhbGwgcmVjb3JkZXIgaW5zdGFuY2VzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gbWFudWFsbHkgZ2V0IGFsbCByZWNvcmRlZCBibG9icycgRGF0YVVSTHMuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEFsbCByZWNvcmRlZCBibG9icycgRGF0YVVSTHMgYXJlIHBhc3NlZCBiYWNrIHRvIHRoZSBcImNhbGxiYWNrXCIgZnVuY3Rpb24uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmdldERhdGFVUkwoZnVuY3Rpb24ocmVjb3JkaW5nKXtcclxuICAgICAqICAgICB2YXIgYXVkaW9EYXRhVVJMID0gcmVjb3JkaW5nLmF1ZGlvO1xyXG4gICAgICogICAgIHZhciB2aWRlb0RhdGFVUkwgPSByZWNvcmRpbmcudmlkZW87XHJcbiAgICAgKiAgICAgdmFyIGdpZkRhdGFVUkwgICA9IHJlY29yZGluZy5naWY7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXREYXRhVVJMID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmdldEJsb2IoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoYmxvYi5hdWRpbyAmJiBibG9iLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGJsb2IuYXVkaW8sIGZ1bmN0aW9uKF9hdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGJsb2IudmlkZW8sIGZ1bmN0aW9uKF92aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IF9hdWRpb0RhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogX3ZpZGVvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2IuYXVkaW8pIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi5hdWRpbywgZnVuY3Rpb24oX2F1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW86IF9hdWRpb0RhdGFVUkxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJsb2IudmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi52aWRlbywgZnVuY3Rpb24oX3ZpZGVvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IF92aWRlb0RhdGFVUkxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldERhdGFVUkwoYmxvYiwgY2FsbGJhY2swMCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3ZWJXb3JrZXIgPSBwcm9jZXNzSW5XZWJXb3JrZXIoZnVuY3Rpb24gcmVhZEZpbGUoX2Jsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZShuZXcgRmlsZVJlYWRlclN5bmMoKS5yZWFkQXNEYXRhVVJMKF9ibG9iKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazAwKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB3ZWJXb3JrZXIucG9zdE1lc3NhZ2UoYmxvYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2swMChldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtfZnVuY3Rpb24udG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICd0aGlzLm9ubWVzc2FnZSA9ICBmdW5jdGlvbiAoZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgVVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVVJMO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB3ZWJraXRVUkw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnTmVpdGhlciBVUkwgbm9yIHdlYmtpdFVSTCBkZXRlY3RlZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFzayB7QGxpbmsgTVJlY29yZFJUQ30gdG8gd3JpdGUgYWxsIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLndyaXRlVG9EaXNrKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMud3JpdGVUb0Rpc2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBSZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gICAgICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1JlY29yZGVyLFxyXG4gICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlb1JlY29yZGVyLFxyXG4gICAgICAgICAgICBnaWY6IHRoaXMuZ2lmUmVjb3JkZXJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBpbnZva2UgYSBzYXZlLWFzIGRpYWxvZyBmb3IgYWxsIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSB7YXVkaW86ICdhdWRpby1uYW1lJywgdmlkZW86ICd2aWRlby1uYW1lJywgZ2lmOiAnZ2lmLW5hbWUnfVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zYXZlKHtcclxuICAgICAqICAgICBhdWRpbzogJ2F1ZGlvLWZpbGUtbmFtZScsXHJcbiAgICAgKiAgICAgdmlkZW86ICd2aWRlby1maWxlLW5hbWUnLFxyXG4gICAgICogICAgIGdpZiAgOiAnZ2lmLWZpbGUtbmFtZSdcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgYXJncyA9IGFyZ3MgfHwge1xyXG4gICAgICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgICAgIGdpZjogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghIWFyZ3MuYXVkaW8gJiYgdGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zYXZlKHR5cGVvZiBhcmdzLmF1ZGlvID09PSAnc3RyaW5nJyA/IGFyZ3MuYXVkaW8gOiAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFhcmdzLnZpZGVvICYmIHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy52aWRlbyA9PT0gJ3N0cmluZycgPyBhcmdzLnZpZGVvIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFhcmdzLmdpZiAmJiB0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy5naWYgPT09ICdzdHJpbmcnID8gYXJncy5naWYgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGdldCBhbGwgcmVjb3JkZWQgYmxvYnMgZnJvbSBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnYWxsJyBvciAnYXVkaW8nIG9yICd2aWRlbycgb3IgJ2dpZidcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgYWxsIHN0b3JlZCBibG9icy5cclxuICogQG1ldGhvZFxyXG4gKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBNUmVjb3JkUlRDLmdldEZyb21EaXNrKCdhbGwnLCBmdW5jdGlvbihkYXRhVVJMLCB0eXBlKXtcclxuICogICAgIGlmKHR5cGUgPT09ICdhdWRpbycpIHsgfVxyXG4gKiAgICAgaWYodHlwZSA9PT0gJ3ZpZGVvJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAnZ2lmJykgICB7IH1cclxuICogfSk7XHJcbiAqL1xyXG5NUmVjb3JkUlRDLmdldEZyb21EaXNrID0gUmVjb3JkUlRDLmdldEZyb21EaXNrO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge2F1ZGlvOiBCbG9iLCB2aWRlbzogQmxvYiwgZ2lmOiBCbG9ifVxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIE1SZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gKiAgICAgYXVkaW86IGF1ZGlvQmxvYixcclxuICogICAgIHZpZGVvOiB2aWRlb0Jsb2IsXHJcbiAqICAgICBnaWYgIDogZ2lmQmxvYlxyXG4gKiB9KTtcclxuICovXHJcbk1SZWNvcmRSVEMud3JpdGVUb0Rpc2sgPSBSZWNvcmRSVEMud3JpdGVUb0Rpc2s7XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5NUmVjb3JkUlRDID0gTVJlY29yZFJUQztcclxufVxuXHJcbnZhciBicm93c2VyRmFrZVVzZXJBZ2VudCA9ICdGYWtlLzUuMCAoRmFrZU9TKSBBcHBsZVdlYktpdC8xMjMgKEtIVE1MLCBsaWtlIEdlY2tvKSBGYWtlLzEyLjMuNDU2Ny44OSBGYWtlLzEyMy40NSc7XHJcblxyXG4oZnVuY3Rpb24odGhhdCkge1xyXG4gICAgaWYgKCF0aGF0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2xvYmFsLm5hdmlnYXRvciA9IHtcclxuICAgICAgICB1c2VyQWdlbnQ6IGJyb3dzZXJGYWtlVXNlckFnZW50LFxyXG4gICAgICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24oKSB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWdsb2JhbC5jb25zb2xlKSB7XHJcbiAgICAgICAgZ2xvYmFsLmNvbnNvbGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbC5jb25zb2xlLmxvZyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGdsb2JhbC5jb25zb2xlLmVycm9yID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGdsb2JhbC5jb25zb2xlLmVycm9yID0gZ2xvYmFsLmNvbnNvbGUubG9nID0gZ2xvYmFsLmNvbnNvbGUubG9nIHx8IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBkb2N1bWVudDp0cnVlICovXHJcbiAgICAgICAgdGhhdC5kb2N1bWVudCA9IHt9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQuY2FwdHVyZVN0cmVhbSA9IGRvY3VtZW50Lm1vekNhcHR1cmVTdHJlYW0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGxheTogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgZHJhd0ltYWdlOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgdG9EYXRhVVJMOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhhdC5IVE1MVmlkZW9FbGVtZW50ID0gZnVuY3Rpb24oKSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGxvY2F0aW9uOnRydWUgKi9cclxuICAgICAgICB0aGF0LmxvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBwcm90b2NvbDogJ2ZpbGU6JyxcclxuICAgICAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgICAgIGhhc2g6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHNjcmVlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBzY3JlZW46dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQuc2NyZWVuID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIFVSTCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBzY3JlZW46dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQuVVJMID0ge1xyXG4gICAgICAgICAgICBjcmVhdGVPYmplY3RVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXZva2VPYmplY3RVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKmdsb2JhbCB3aW5kb3c6dHJ1ZSAqL1xyXG4gICAgdGhhdC53aW5kb3cgPSBnbG9iYWw7XHJcbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogbnVsbCk7XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gQ3Jvc3MtQnJvd3Nlci1EZWNsYXJhdGlvbnMuanNcclxuXHJcbi8vIGFuaW1hdGlvbi1mcmFtZSB1c2VkIGluIFdlYk0gcmVjb3JkaW5nXHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAodHlwZW9mIHdlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1velJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IG1velJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gbXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gdmlhOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MVxyXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XHJcblxyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcclxuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLypqc2hpbnQgLVcwNzkgKi9cclxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG5pZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vekNhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IG1vekNhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXNDYW5jZWxBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBtc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgY2FuY2VsQW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBXZWJBdWRpbyBBUEkgcmVwcmVzZW50ZXJcclxudmFyIEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQ7XHJcblxyXG5pZiAodHlwZW9mIEF1ZGlvQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbW96QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgQXVkaW9Db250ZXh0ID0gbW96QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgVVJMID0gd2luZG93LlVSTDtcclxuXHJcbmlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0VVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgLypnbG9iYWwgVVJMOnRydWUgKi9cclxuICAgIFVSTCA9IHdlYmtpdFVSTDtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID09PSAndW5kZWZpbmVkJykgeyAvLyBtYXliZSB3aW5kb3cubmF2aWdhdG9yP1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGlzRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpICE9PSAtMSAmJiAoISFuYXZpZ2F0b3IubXNTYXZlQmxvYiB8fCAhIW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKTtcclxudmFyIGlzT3BlcmEgPSAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ09QUi8nKSAhPT0gLTE7XHJcbnZhciBpc1NhZmFyaSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmkvJykgPiAtMTtcclxudmFyIGlzQ2hyb21lID0gKCFpc09wZXJhICYmICFpc0VkZ2UgJiYgISFuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKSB8fCBpc0VsZWN0cm9uKCkgfHwgaXNTYWZhcmk7XHJcblxyXG52YXIgTWVkaWFTdHJlYW0gPSB3aW5kb3cuTWVkaWFTdHJlYW07XHJcblxyXG5pZiAodHlwZW9mIE1lZGlhU3RyZWFtID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0TWVkaWFTdHJlYW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBNZWRpYVN0cmVhbSA9IHdlYmtpdE1lZGlhU3RyZWFtO1xyXG59XHJcblxyXG4vKmdsb2JhbCBNZWRpYVN0cmVhbTp0cnVlICovXHJcbmlmICh0eXBlb2YgTWVkaWFTdHJlYW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAoISgnZ2V0VmlkZW9UcmFja3MnIGluIE1lZGlhU3RyZWFtLnByb3RvdHlwZSkpIHtcclxuICAgICAgICBNZWRpYVN0cmVhbS5wcm90b3R5cGUuZ2V0VmlkZW9UcmFja3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmdldFRyYWNrcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdHJhY2tzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrLmtpbmQudG9TdHJpbmcoKS5pbmRleE9mKCd2aWRlbycpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFja3M7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgTWVkaWFTdHJlYW0ucHJvdG90eXBlLmdldEF1ZGlvVHJhY2tzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5nZXRUcmFja3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRyYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmFjay5raW5kLnRvU3RyaW5nKCkuaW5kZXhPZignYXVkaW8nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJhY2tzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3ZlcnJpZGUgXCJzdG9wXCIgbWV0aG9kIGZvciBhbGwgYnJvd3NlcnNcclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW0ucHJvdG90eXBlLnN0b3AgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgTWVkaWFTdHJlYW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGJlbG93IGZ1bmN0aW9uIHZpYTogaHR0cDovL2dvby5nbC9CM2FlOGNcclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBieXRlcyAtIFBhc3MgYnl0ZXMgYW5kIGdldCBmb3JtYWZ0ZWQgc3RyaW5nLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIGZvcm1hZnRlZCBzdHJpbmdcclxuICogQGV4YW1wbGVcclxuICogYnl0ZXNUb1NpemUoMTAyNCoxMDI0KjUpID09PSAnNSBHQidcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKi9cclxuZnVuY3Rpb24gYnl0ZXNUb1NpemUoYnl0ZXMpIHtcclxuICAgIHZhciBrID0gMTAwMDtcclxuICAgIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICAgIGlmIChieXRlcyA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAnMCBCeXRlcyc7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpLCAxMCk7XHJcbiAgICByZXR1cm4gKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvUHJlY2lzaW9uKDMpICsgJyAnICsgc2l6ZXNbaV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0Jsb2J9IGZpbGUgLSBGaWxlIG9yIEJsb2Igb2JqZWN0LiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIC0gT3B0aW9uYWwgZmlsZSBuYW1lIGUuZy4gXCJSZWNvcmRlZC1WaWRlby53ZWJtXCJcclxuICogQGV4YW1wbGVcclxuICogaW52b2tlU2F2ZUFzRGlhbG9nKGJsb2Igb3IgZmlsZSwgW29wdGlvbmFsXSBmaWxlTmFtZSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcbmZ1bmN0aW9uIGludm9rZVNhdmVBc0RpYWxvZyhmaWxlLCBmaWxlTmFtZSkge1xyXG4gICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgICAgdGhyb3cgJ0Jsb2Igb2JqZWN0IGlzIHJlcXVpcmVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmaWxlLnR5cGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmaWxlLnR5cGUgPSAndmlkZW8vd2VibSc7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmlsZUV4dGVuc2lvbiA9IChmaWxlLnR5cGUgfHwgJ3ZpZGVvL3dlYm0nKS5zcGxpdCgnLycpWzFdO1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSAmJiBmaWxlTmFtZS5pbmRleE9mKCcuJykgIT09IC0xKSB7XHJcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gZmlsZU5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICBmaWxlTmFtZSA9IHNwbGl0dGVkWzBdO1xyXG4gICAgICAgIGZpbGVFeHRlbnNpb24gPSBzcGxpdHRlZFsxXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmlsZUZ1bGxOYW1lID0gKGZpbGVOYW1lIHx8IChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTk5KSArIDg4ODg4ODg4OCkpICsgJy4nICsgZmlsZUV4dGVuc2lvbjtcclxuXHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihmaWxlLCBmaWxlRnVsbE5hbWUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1zU2F2ZUJsb2IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iKGZpbGUsIGZpbGVGdWxsTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGh5cGVybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGh5cGVybGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgIGh5cGVybGluay5kb3dubG9hZCA9IGZpbGVGdWxsTmFtZTtcclxuXHJcbiAgICBoeXBlcmxpbmsuc3R5bGUgPSAnZGlzcGxheTpub25lO29wYWNpdHk6MDtjb2xvcjp0cmFuc3BhcmVudDsnO1xyXG4gICAgKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChoeXBlcmxpbmspO1xyXG5cclxuICAgIGlmICh0eXBlb2YgaHlwZXJsaW5rLmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaHlwZXJsaW5rLmNsaWNrKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGh5cGVybGluay50YXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICBoeXBlcmxpbmsuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XHJcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGh5cGVybGluay5ocmVmKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9jaGV0b24vaXMtZWxlY3Ryb24vYmxvYi9tYXN0ZXIvaW5kZXguanNcclxuICoqL1xyXG5mdW5jdGlvbiBpc0VsZWN0cm9uKCkge1xyXG4gICAgLy8gUmVuZGVyZXIgcHJvY2Vzc1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cucHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gcHJvY2Vzc1xyXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyA9PT0gJ29iamVjdCcgJiYgISFwcm9jZXNzLnZlcnNpb25zLmVsZWN0cm9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV0ZWN0IHRoZSB1c2VyIGFnZW50IHdoZW4gdGhlIGBub2RlSW50ZWdyYXRpb25gIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBuYXZpZ2F0b3IudXNlckFnZW50ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VsZWN0cm9uJykgPj0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U3JjT2JqZWN0KHN0cmVhbSwgZWxlbWVudCwgaWdub3JlQ3JlYXRlT2JqZWN0VVJMKSB7XHJcbiAgICBpZiAoJ2NyZWF0ZU9iamVjdFVSTCcgaW4gVVJMICYmICFpZ25vcmVDcmVhdGVPYmplY3RVUkwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgnc3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB9IGVsc2UgaWYgKCdtb3pTcmNPYmplY3QnIGluIGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50Lm1velNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ2NyZWF0ZU9iamVjdFVSTC9zcmNPYmplY3QgYm90aCBhcmUgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgIH1cclxufVxuXHJcbi8vIF9fX19fX19fX18gKHVzZWQgdG8gaGFuZGxlIHN0dWZmIGxpa2UgaHR0cDovL2dvby5nbC94bUU1ZWcpIGlzc3VlICMxMjlcclxuLy8gU3RvcmFnZS5qc1xyXG5cclxuLyoqXHJcbiAqIFN0b3JhZ2UgaXMgYSBzdGFuZGFsb25lIG9iamVjdCB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHN0b3JlIHJldXNhYmxlIG9iamVjdHMgZS5nLiBcIm5ldyBBdWRpb0NvbnRleHRcIi5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEBleGFtcGxlXHJcbiAqIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID09PSB3ZWJraXRBdWRpb0NvbnRleHRcclxuICogQHByb3BlcnR5IHt3ZWJraXRBdWRpb0NvbnRleHR9IEF1ZGlvQ29udGV4dCAtIEtlZXBzIGEgcmVmZXJlbmNlIHRvIEF1ZGlvQ29udGV4dCBvYmplY3QuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcblxyXG52YXIgU3RvcmFnZSA9IHt9O1xyXG5cclxuaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dCA9IEF1ZGlvQ29udGV4dDtcclxufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLlN0b3JhZ2UgPSBTdG9yYWdlO1xyXG59XG5cclxuZnVuY3Rpb24gaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpIHtcclxuICAgIHZhciBpc09wZXJhID0gISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDA7XHJcbiAgICB2YXIgaXNDaHJvbWUgPSAoISF3aW5kb3cuY2hyb21lICYmICFpc09wZXJhKSB8fCBpc0VsZWN0cm9uKCk7XHJcbiAgICB2YXIgaXNGaXJlZm94ID0gdHlwZW9mIHdpbmRvdy5JbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG4gICAgaWYgKGlzRmlyZWZveCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgdmFyIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB2YXIgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuXHJcbiAgICBpZiAoaXNDaHJvbWUgfHwgaXNPcGVyYSkge1xyXG4gICAgICAgIHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ2hyb21lJyk7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cmltIHRoZSBmdWxsVmVyc2lvbiBzdHJpbmcgYXQgc2VtaWNvbG9uL3NwYWNlIGlmIHByZXNlbnRcclxuICAgIGlmICgoaXggPSBmdWxsVmVyc2lvbi5pbmRleE9mKCc7JykpICE9PSAtMSkge1xyXG4gICAgICAgIGZ1bGxWZXJzaW9uID0gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGl4ID0gZnVsbFZlcnNpb24uaW5kZXhPZignICcpKSAhPT0gLTEpIHtcclxuICAgICAgICBmdWxsVmVyc2lvbiA9IGZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyBmdWxsVmVyc2lvbiwgMTApO1xyXG5cclxuICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ham9yVmVyc2lvbiA+PSA0OTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cbi8vIE1lZGlhU3RyZWFtUmVjb3JkZXIuanNcblxuLyoqXG4gKiBNZWRpYVN0cmVhbVJlY29yZGVyIGlzIGFuIGFic3RyYWN0aW9uIGxheWVyIGZvciB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1yZWNvcmQvTWVkaWFSZWNvcmRlci5odG1sfE1lZGlhUmVjb3JkZXIgQVBJfS4gSXQgaXMgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byByZWNvcmQgTWVkaWFTdHJlYW0ocykgaW4gYm90aCBDaHJvbWUgYW5kIEZpcmVmb3guXG4gKiBAc3VtbWFyeSBSdW5zIHRvcCBvdmVyIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLXJlY29yZC9NZWRpYVJlY29yZGVyLmh0bWx8TWVkaWFSZWNvcmRlciBBUEl9LlxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxuICogQGF1dGhvciB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbnxNdWF6IEtoYW59XG4gKiBAdHlwZWRlZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gKiBAY2xhc3NcbiAqIEBleGFtcGxlXG4gKiB2YXIgY29uZmlnID0ge1xuICogICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibScsIC8vIHZwOCwgdnA5LCBoMjY0LCBta3YsIG9wdXMvdm9yYmlzXG4gKiAgICAgYXVkaW9CaXRzUGVyU2Vjb25kIDogMjU2ICogOCAqIDEwMjQsXG4gKiAgICAgdmlkZW9CaXRzUGVyU2Vjb25kIDogMjU2ICogOCAqIDEwMjQsXG4gKiAgICAgYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsICAvLyBpZiB0aGlzIGlzIHByb3ZpZGVkLCBza2lwIGFib3ZlIHR3b1xuICogICAgIGNoZWNrRm9ySW5hY3RpdmVUcmFja3M6IHRydWUsXG4gKiAgICAgdGltZVNsaWNlOiAxMDAwLCAvLyBjb25jYXRlbmF0ZSBpbnRlcnZhbHMgYmFzZWQgYmxvYnNcbiAqICAgICBvbmRhdGFhdmFpbGFibGU6IGZ1bmN0aW9uKCkge30gLy8gZ2V0IGludGVydmFscyBiYXNlZCBibG9ic1xuICogfVxuICogdmFyIHJlY29yZGVyID0gbmV3IE1lZGlhU3RyZWFtUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZyk7XG4gKiByZWNvcmRlci5yZWNvcmQoKTtcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gKlxuICogICAgIC8vIG9yXG4gKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xuICogfSk7XG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgbWltZVR5cGU6IFwidmlkZW8vd2VibVwiLCB0aW1lU2xpY2U6IDEwMDB9XG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgZmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIG1pc3NpbmcuIEFsc28gdGhyb3dzIGVycm9yIGlmIFwiTWVkaWFSZWNvcmRlciBBUElcIiBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci5cbiAqL1xuXG5mdW5jdGlvbiBNZWRpYVN0cmVhbVJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIG1lZGlhU3RyZWFtID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyAnRmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIHJlcXVpcmVkLic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyAnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnRzIE1lZGlhIFJlY29yZGVyIEFQSS4gUGxlYXNlIHRyeSBvdGhlciBtb2R1bGVzIGUuZy4gV2hhbW15UmVjb3JkZXIgb3IgU3RlcmVvQXVkaW9SZWNvcmRlci4nO1xuICAgIH1cblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7XG4gICAgICAgIC8vIGJpdHNQZXJTZWNvbmQ6IDI1NiAqIDggKiAxMDI0LFxuICAgICAgICBtaW1lVHlwZTogJ3ZpZGVvL3dlYm0nXG4gICAgfTtcblxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICBpZiAobWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGggJiYgbWVkaWFTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW07XG4gICAgICAgICAgICBpZiAoISFuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICAgICAgc3RyZWFtLmFkZFRyYWNrKG1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB3ZWJraXRNZWRpYVN0cmVhbVxuICAgICAgICAgICAgICAgIHN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbShtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lZGlhU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25maWcubWltZVR5cGUgfHwgY29uZmlnLm1pbWVUeXBlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhdWRpbycpID09PSAtMSkge1xuICAgICAgICAgICAgY29uZmlnLm1pbWVUeXBlID0gaXNDaHJvbWUgPyAnYXVkaW8vd2VibScgOiAnYXVkaW8vb2dnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcubWltZVR5cGUgJiYgY29uZmlnLm1pbWVUeXBlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPT0gJ2F1ZGlvL29nZycgJiYgISFuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICAvLyBmb3JjaW5nIGJldHRlciBjb2RlY3Mgb24gRmlyZWZveCAodmlhICMxNjYpXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSAnYXVkaW8vb2dnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheU9mQmxvYnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYXJyYXkgb2YgYmxvYnMuIFVzZSBvbmx5IHdpdGggXCJ0aW1lU2xpY2VcIi4gSXRzIHVzZWZ1bCB0byBwcmV2aWV3IHJlY29yZGluZyBhbnl0aW1lLCB3aXRob3V0IHVzaW5nIHRoZSBcInN0b3BcIiBtZXRob2QuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgYXJyYXlPZkJsb2JzID0gcmVjb3JkZXIuZ2V0QXJyYXlPZkJsb2JzKCk7XG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFycmF5IG9mIHJlY29yZGVkIGJsb2JzLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0QXJyYXlPZkJsb2JzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcnJheU9mQmxvYnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgTWVkaWFTdHJlYW0uXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcbiAgICAgKi9cbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBzZXQgZGVmYXVsdHNcbiAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcbiAgICAgICAgc2VsZi5jbGVhclJlY29yZGVkRGF0YSgpO1xuICAgICAgICBzZWxmLnRpbWVzdGFtcHMgPSBbXTtcbiAgICAgICAgYWxsU3RhdGVzID0gW107XG4gICAgICAgIGFycmF5T2ZCbG9icyA9IFtdO1xuXG4gICAgICAgIHZhciByZWNvcmRlckhpbnRzID0gY29uZmlnO1xuXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFzc2luZyBmb2xsb3dpbmcgY29uZmlnIG92ZXIgTWVkaWFSZWNvcmRlciBBUEkuJywgcmVjb3JkZXJIaW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xuICAgICAgICAgICAgLy8gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBGaXJlZm94IGRvZXNuJ3QgZmFpbHMgdG8gcmVjb3JkIHN0cmVhbXMgMy00IHRpbWVzIHdpdGhvdXQgcmVsb2FkaW5nIHRoZSBwYWdlLlxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNDaHJvbWUgJiYgIWlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSkge1xuICAgICAgICAgICAgLy8gdG8gc3VwcG9ydCB2aWRlby1vbmx5IHJlY29yZGluZyBvbiBzdGFibGVcbiAgICAgICAgICAgIHJlY29yZGVySGludHMgPSAndmlkZW8vdnA4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgcmVjb3JkZXJIaW50cy5taW1lVHlwZSkge1xuICAgICAgICAgICAgaWYgKCFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChyZWNvcmRlckhpbnRzLm1pbWVUeXBlKSkge1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWVkaWFSZWNvcmRlciBBUEkgc2VlbXMgdW5hYmxlIHRvIHJlY29yZCBtaW1lVHlwZTonLCByZWNvcmRlckhpbnRzLm1pbWVUeXBlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWNvcmRlckhpbnRzLm1pbWVUeXBlID0gY29uZmlnLnR5cGUgPT09ICdhdWRpbycgPyAnYXVkaW8vd2VibScgOiAndmlkZW8vd2VibSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1c2luZyBNZWRpYVJlY29yZGVyIEFQSSBoZXJlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWFTdHJlYW0sIHJlY29yZGVySGludHMpO1xuXG4gICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgY29uZmlnLm1pbWVUeXBlID0gcmVjb3JkZXJIaW50cy5taW1lVHlwZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gY2hyb21lLWJhc2VkIGZhbGxiYWNrXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWFTdHJlYW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb2xkIGhhY2s/XG4gICAgICAgIGlmIChyZWNvcmRlckhpbnRzLm1pbWVUeXBlICYmICFNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCAmJiAnY2FuUmVjb3JkTWltZVR5cGUnIGluIG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5jYW5SZWNvcmRNaW1lVHlwZShyZWNvcmRlckhpbnRzLm1pbWVUeXBlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZWRpYVJlY29yZGVyIEFQSSBzZWVtcyB1bmFibGUgdG8gcmVjb3JkIG1pbWVUeXBlOicsIHJlY29yZGVySGludHMubWltZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGF0Y2hpbmcgT25EYXRhQXZhaWxhYmxlIEhhbmRsZXJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ29uZGF0YWF2YWlsYWJsZTogJyArIGJ5dGVzVG9TaXplKGUuZGF0YS5zaXplKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5zaXplICYmIGUuZGF0YS5zaXplID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZCbG9icy5wdXNoKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVTdGFtcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uZGF0YWF2YWlsYWJsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWxzIGJhc2VkIGJsb2JzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IGNvbmZpZy5nZXROYXRpdmVCbG9iID8gZS5kYXRhIDogbmV3IEJsb2IoW2UuZGF0YV0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBnZXRNaW1lVHlwZShyZWNvcmRlckhpbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25kYXRhYXZhaWxhYmxlKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFlLmRhdGEgfHwgIWUuZGF0YS5zaXplIHx8IGUuZGF0YS5zaXplIDwgMTAwIHx8IHNlbGYuYmxvYikge1xuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHN0b3BSZWNvcmRpbmcgYWx3YXlzIGdldHRpbmcgZmlyZWRcbiAgICAgICAgICAgICAgICAvLyBldmVuIGlmIHRoZXJlIGlzIGludmFsaWQgZGF0YVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nQ2FsbGJhY2sobmV3IEJsb2IoW10sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKHJlY29yZGVySGludHMpXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5ibG9iID0gY29uZmlnLmdldE5hdGl2ZUJsb2IgPyBlLmRhdGEgOiBuZXcgQmxvYihbZS5kYXRhXSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKHJlY29yZGVySGludHMpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHNlbGYucmVjb3JkaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZGluZ0NhbGxiYWNrKHNlbGYuYmxvYik7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgnc3RhcnRlZCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3BhdXNlZCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25yZXN1bWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdyZXN1bWVkJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdzdG9wcGVkJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdlcnJvcjogJyArIGVycm9yKTtcblxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcbiAgICAgICAgICAgICAgICAvLyB2aWE6IGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtcmVjb3JkL01lZGlhUmVjb3JkZXIuaHRtbCNleGNlcHRpb24tc3VtbWFyeVxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpbnZhbGlkc3RhdGUnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIE1lZGlhUmVjb3JkZXIgaXMgbm90IGluIGEgc3RhdGUgaW4gd2hpY2ggdGhlIHByb3Bvc2VkIG9wZXJhdGlvbiBpcyBhbGxvd2VkIHRvIGJlIGV4ZWN1dGVkLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ25vdHN1cHBvcnRlZCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNSU1FIHR5cGUgKCcsIHJlY29yZGVySGludHMubWltZVR5cGUsICcpIGlzIG5vdCBzdXBwb3J0ZWQuJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VjdXJpdHknKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVkaWFSZWNvcmRlciBzZWN1cml0eSBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvbGRlciBjb2RlIGJlbG93XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ091dE9mTWVtb3J5Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVUEgaGFzIGV4aGF1c2VkIHRoZSBhdmFpbGFibGUgbWVtb3J5LiBVc2VyIGFnZW50cyBTSE9VTEQgcHJvdmlkZSBhcyBtdWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYXMgcG9zc2libGUgaW4gdGhlIG1lc3NhZ2UgYXR0cmlidXRlLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdJbGxlZ2FsU3RyZWFtTW9kaWZpY2F0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBIG1vZGlmaWNhdGlvbiB0byB0aGUgc3RyZWFtIGhhcyBvY2N1cnJlZCB0aGF0IG1ha2VzIGl0IGltcG9zc2libGUgdG8gY29udGludWUgcmVjb3JkaW5nLiBBbiBleGFtcGxlIHdvdWxkIGJlIHRoZSBhZGRpdGlvbiBvZiBhIFRyYWNrIHdoaWxlIHJlY29yZGluZyBpcyBvY2N1cnJpbmcuIFVzZXIgYWdlbnRzIFNIT1VMRCBwcm92aWRlIGFzIG11Y2ggYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhcyBwb3NzaWJsZSBpbiB0aGUgbWVzc2FnZSBhdHRyaWJ1dGUuJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ090aGVyUmVjb3JkaW5nRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZWQgZm9yIGFuIGZhdGFsIGVycm9yIG90aGVyIHRoYW4gdGhvc2UgbGlzdGVkIGFib3ZlLiBVc2VyIGFnZW50cyBTSE9VTEQgcHJvdmlkZSBhcyBtdWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYXMgcG9zc2libGUgaW4gdGhlIG1lc3NhZ2UgYXR0cmlidXRlLicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdHZW5lcmljRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBVQSBjYW5ub3QgcHJvdmlkZSB0aGUgY29kZWMgb3IgcmVjb3JkaW5nIG9wdGlvbiB0aGF0IGhhcyBiZWVuIHJlcXVlc3RlZC4nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVkaWFSZWNvcmRlciBFcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIChmdW5jdGlvbihsb29wZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWFudWFsbHlTdG9wcGVkICYmIG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ2luYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnRpbWVzbGljZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAxMCBtaW51dGVzLCBlbm91Z2g/XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RhcnQoMTAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChsb29wZXIsIDEwMDApO1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09ICdpbmFjdGl2ZScgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSAhPT0gJ3N0b3BwZWQnKSB7XG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcudGltZVNsaWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdXBkYXRlVGltZVN0YW1wKCk7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KGNvbmZpZy50aW1lU2xpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBpcyA2MCBtaW51dGVzOyBlbm91Z2g/XG4gICAgICAgICAgICAvLyB1c2UgY29uZmlnID0+IHt0aW1lU2xpY2U6IDEwMDB9IG90aGVyd2lzZVxuXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KDMuNmUrNik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xuICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpOyAvLyBvbGQgY29kZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHRpbWVzdGFtcHMgLSBBcnJheSBvZiB0aW1lIHN0YW1wc1xuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBjb25zb2xlLmxvZyhyZWNvcmRlci50aW1lc3RhbXBzKTtcbiAgICAgKi9cbiAgICB0aGlzLnRpbWVzdGFtcHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVTdGFtcCgpIHtcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzLnB1c2gobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVGltZVN0YW1wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25maWcub25UaW1lU3RhbXAoc2VsZi50aW1lc3RhbXBzW3NlbGYudGltZXN0YW1wcy5sZW5ndGggLSAxXSwgc2VsZi50aW1lc3RhbXBzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1pbWVUeXBlKHNlY29uZE9iamVjdCkge1xuICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLm1pbWVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVkaWFSZWNvcmRlci5taW1lVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWNvbmRPYmplY3QubWltZVR5cGUgfHwgJ3ZpZGVvL3dlYm0nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyBNZWRpYVN0cmVhbS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAqIH0pO1xuICAgICAqL1xuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICBzZWxmLm1hbnVhbGx5U3RvcHBlZCA9IHRydWU7IC8vIHVzZWQgaW5zaWRlIHRoZSBtZWRpYVJlY29yZGVyLm9uZXJyb3JcblxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkaW5nQ2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcudGltZVNsaWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmJsb2IgPSBuZXcgQmxvYihhcnJheU9mQmxvYnMsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZ2V0TWltZVR5cGUoY29uZmlnKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhzZWxmLmJsb2IpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxuICAgICAqIEBleGFtcGxlXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcbiAgICAgKi9cbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIuc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcbiAgICAgKi9cbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncGF1c2VkJykge1xuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xuICAgICAqL1xuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICAgICAgICAgIHNlbGYuc3RvcChjbGVhclJlY29yZGVkRGF0YUNCKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyUmVjb3JkZWREYXRhQ0IoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xlYXJSZWNvcmRlZERhdGFDQigpIHtcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xuICAgICAgICBzZWxmLnRpbWVzdGFtcHMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBSZWZlcmVuY2UgdG8gXCJNZWRpYVJlY29yZGVyXCIgb2JqZWN0XG4gICAgdmFyIG1lZGlhUmVjb3JkZXI7XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgdG8gbmF0aXZlIE1lZGlhUmVjb3JkZXIgQVBJXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgaW50ZXJuYWwgPSByZWNvcmRlci5nZXRJbnRlcm5hbFJlY29yZGVyKCk7XG4gICAgICogaW50ZXJuYWwub25kYXRhYXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7fTsgLy8gb3ZlcnJpZGVcbiAgICAgKiBpbnRlcm5hbC5zdHJlYW0sIGludGVybmFsLm9ucGF1c2UsIGludGVybmFsLm9uc3RvcCwgZXRjLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgaW50ZXJuYWwgcmVjb3JkaW5nIG9iamVjdC5cbiAgICAgKi9cbiAgICB0aGlzLmdldEludGVybmFsUmVjb3JkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1lZGlhUmVjb3JkZXI7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGlzTWVkaWFTdHJlYW1BY3RpdmUoKSB7XG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBtZWRpYVN0cmVhbSkge1xuICAgICAgICAgICAgaWYgKCFtZWRpYVN0cmVhbS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoJ2VuZGVkJyBpbiBtZWRpYVN0cmVhbSkgeyAvLyBvbGQgaGFja1xuICAgICAgICAgICAgaWYgKG1lZGlhU3RyZWFtLmVuZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIGRhdGEgYXMgXCJCbG9iXCIgb2JqZWN0LlxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XG4gICAgICogfSk7XG4gICAgICovXG4gICAgdGhpcy5ibG9iID0gbnVsbDtcblxuXG4gICAgLyoqXG4gICAgICogR2V0IE1lZGlhUmVjb3JkZXIgcmVhZG9ubHkgc3RhdGUuXG4gICAgICogQG1ldGhvZFxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRTdGF0ZSgpO1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgcmVjb3JkaW5nIHN0YXRlLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2luYWN0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLnN0YXRlIHx8ICdpbmFjdGl2ZSc7XG4gICAgfTtcblxuICAgIC8vIGxpc3Qgb2YgYWxsIHJlY29yZGluZyBzdGF0ZXNcbiAgICB2YXIgYWxsU3RhdGVzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTWVkaWFSZWNvcmRlciBhbGwgcmVjb3JkaW5nIHN0YXRlcy5cbiAgICAgKiBAbWV0aG9kXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBzdGF0ZSA9IHJlY29yZGVyLmdldEFsbFN0YXRlcygpO1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbGwgcmVjb3JkaW5nIHN0YXRlc1xuICAgICAqL1xuICAgIHRoaXMuZ2V0QWxsU3RhdGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhbGxTdGF0ZXM7XG4gICAgfTtcblxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcbiAgICAvLyB0aGUgYnJvd3NlciB3aWxsIG9ubHkgcmVjb3JkIGJsYWNrIGZyYW1lcyBcbiAgICAvLyBvciBzaWxlbmNlIHNpbmNlIHRoYXQgaXMgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIFRyYWNrXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID0gZmFsc2U7IC8vIGRpc2FibGUgdG8gbWluaW1pemUgQ1BVIHVzYWdlXG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gdGhpcyBtZXRob2QgY2hlY2tzIGlmIG1lZGlhIHN0cmVhbSBpcyBzdG9wcGVkXG4gICAgLy8gb3IgaWYgYW55IHRyYWNrIGlzIGVuZGVkLlxuICAgIChmdW5jdGlvbiBsb29wZXIoKSB7XG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlciB8fCBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYVN0cmVhbSBzZWVtcyBzdG9wcGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGxvb3BlciwgMTAwMCk7IC8vIGNoZWNrIGV2ZXJ5IHNlY29uZFxuICAgIH0pKCk7XG5cbiAgICAvLyBmb3IgZGVidWdnaW5nXG4gICAgdGhpcy5uYW1lID0gJ01lZGlhU3RyZWFtUmVjb3JkZXInO1xuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xufVxuXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBSZWNvcmRSVEMuTWVkaWFTdHJlYW1SZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XG59XG5cclxuLy8gc291cmNlIGNvZGUgZnJvbTogaHR0cDovL3R5cGVkYXJyYXkub3JnL3dwLWNvbnRlbnQvcHJvamVjdHMvV2ViQXVkaW9SZWNvcmRlci9zY3JpcHQuanNcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdHRkaWFtb25kL1JlY29yZGVyanMjbGljZW5zZS1taXRcclxuLy8gX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBTdGVyZW9BdWRpb1JlY29yZGVyLmpzXHJcblxyXG4vKipcclxuICogU3RlcmVvQXVkaW9SZWNvcmRlciBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyBcInN0ZXJlb1wiIGF1ZGlvLXJlY29yZGluZyBpbiBjaHJvbWUuXHJcbiAqIEBzdW1tYXJ5IEphdmFTY3JpcHQgc3RhbmRhbG9uZSBvYmplY3QgZm9yIHN0ZXJlbyBhdWRpbyByZWNvcmRpbmcuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgU3RlcmVvQXVkaW9SZWNvcmRlcihNZWRpYVN0cmVhbSwge1xyXG4gKiAgICAgc2FtcGxlUmF0ZTogNDQxMDAsXHJcbiAqICAgICBidWZmZXJTaXplOiA0MDk2XHJcbiAqIH0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtzYW1wbGVSYXRlOiA0NDEwMCwgYnVmZmVyU2l6ZTogNDA5NiwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBldGMufVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKCFtZWRpYVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93ICdZb3VyIHN0cmVhbSBoYXMgbm8gYXVkaW8gdHJhY2tzLic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyB2YXJpYWJsZXNcclxuICAgIHZhciBsZWZ0Y2hhbm5lbCA9IFtdO1xyXG4gICAgdmFyIHJpZ2h0Y2hhbm5lbCA9IFtdO1xyXG4gICAgdmFyIHJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgdmFyIHJlY29yZGluZ0xlbmd0aCA9IDA7XHJcbiAgICB2YXIganNBdWRpb05vZGU7XHJcblxyXG4gICAgdmFyIG51bWJlck9mQXVkaW9DaGFubmVscyA9IDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgc2FtcGxlIHJhdGVzIHN1Y2ggYXMgOEsgb3IgMTZLLiBSZWZlcmVuY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4OTc3MTM2LzU1MjE4MlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRlc2lyZWRTYW1wUmF0ZSAtIERlc2lyZWQgQml0cyBwZXIgc2FtcGxlICogMTAwMFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciByZWNvcmRlciA9IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgZGVzaXJlZFNhbXBSYXRlOiAxNiAqIDEwMDAgLy8gYml0cy1wZXItc2FtcGxlICogMTAwMFxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHZhciBkZXNpcmVkU2FtcFJhdGUgPSBjb25maWcuZGVzaXJlZFNhbXBSYXRlO1xyXG5cclxuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgIGlmIChjb25maWcubGVmdENoYW5uZWwgPT09IHRydWUpIHtcclxuICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcubnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAxKSB7XHJcbiAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW51bWJlck9mQXVkaW9DaGFubmVscyB8fCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPCAxKSB7XHJcbiAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGVyZW9BdWRpb1JlY29yZGVyIGlzIHNldCB0byByZWNvcmQgbnVtYmVyIG9mIGNoYW5uZWxzOiAnLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcclxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgb25seSByZWNvcmQgYmxhY2sgZnJhbWVzIFxyXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xyXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxyXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNNZWRpYVN0cmVhbUFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIGFsd2F5cyByZXR1cm4gXCJ0cnVlXCJcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVN0cmVhbS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoJ2VuZGVkJyBpbiBtZWRpYVN0cmVhbSkgeyAvLyBvbGQgaGFja1xyXG4gICAgICAgICAgICBpZiAobWVkaWFTdHJlYW0uZW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXRWYXJpYWJsZXMoKTtcclxuXHJcbiAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGxvb3BlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VMZWZ0UmlnaHRCdWZmZXJzKGNvbmZpZywgY2FsbGJhY2spIHtcclxuICAgICAgICBmdW5jdGlvbiBtZXJnZUF1ZGlvQnVmZmVycyhjb25maWcsIGNiKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBjb25maWcubnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbzogXCJzbGljZSgwKVwiIC0tLSBpcyBpdCBjYXVzZXMgbG9vcD8gU2hvdWxkIGJlIHJlbW92ZWQ/XHJcbiAgICAgICAgICAgIHZhciBsZWZ0QnVmZmVycyA9IGNvbmZpZy5sZWZ0QnVmZmVycy5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0QnVmZmVycyA9IGNvbmZpZy5yaWdodEJ1ZmZlcnMuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIHZhciBzYW1wbGVSYXRlID0gY29uZmlnLnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoID0gY29uZmlnLmludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBkZXNpcmVkU2FtcFJhdGUgPSBjb25maWcuZGVzaXJlZFNhbXBSYXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCdWZmZXJzID0gbWVyZ2VCdWZmZXJzKHJpZ2h0QnVmZmVycywgaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2lyZWRTYW1wUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdWZmZXJzID0gaW50ZXJwb2xhdGVBcnJheShsZWZ0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnMgPSBpbnRlcnBvbGF0ZUFycmF5KHJpZ2h0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0QnVmZmVycyA9IGludGVycG9sYXRlQXJyYXkobGVmdEJ1ZmZlcnMsIGRlc2lyZWRTYW1wUmF0ZSwgc2FtcGxlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzYW1wbGUgcmF0ZSBhcyBkZXNpcmVkIHNhbXBsZSByYXRlXHJcbiAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZvciBjaGFuZ2luZyB0aGUgc2FtcGxpbmcgcmF0ZSwgcmVmZXJlbmNlOlxyXG4gICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODk3NzEzNi81NTIxODJcclxuICAgICAgICAgICAgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcnJheShkYXRhLCBuZXdTYW1wbGVSYXRlLCBvbGRTYW1wbGVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZml0Q291bnQgPSBNYXRoLnJvdW5kKGRhdGEubGVuZ3RoICogKG5ld1NhbXBsZVJhdGUgLyBvbGRTYW1wbGVSYXRlKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmluZ0ZhY3RvciA9IE51bWJlcigoZGF0YS5sZW5ndGggLSAxKSAvIChmaXRDb3VudCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFbMF0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBmaXRDb3VudCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBpICogc3ByaW5nRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBOdW1iZXIoTWF0aC5mbG9vcih0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gTnVtYmVyKE1hdGguY2VpbCh0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0UG9pbnQgPSB0bXAgLSBiZWZvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IGxpbmVhckludGVycG9sYXRlKGRhdGFbYmVmb3JlXSwgZGF0YVthZnRlcl0sIGF0UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVtmaXRDb3VudCAtIDFdID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRlKGJlZm9yZSwgYWZ0ZXIsIGF0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiZWZvcmUgKyAoYWZ0ZXIgLSBiZWZvcmUpICogYXRQb2ludDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVyZ2VCdWZmZXJzKGNoYW5uZWxCdWZmZXIsIHJMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KHJMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5nID0gY2hhbm5lbEJ1ZmZlci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBjaGFubmVsQnVmZmVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoYnVmZmVyLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGludGVybGVhdmUobGVmdENoYW5uZWwsIHJpZ2h0Q2hhbm5lbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGxlZnRDaGFubmVsLmxlbmd0aCArIHJpZ2h0Q2hhbm5lbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkobGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSBsZWZ0Q2hhbm5lbFtpbnB1dEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSByaWdodENoYW5uZWxbaW5wdXRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVVVEZCeXRlcyh2aWV3LCBvZmZzZXQsIHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IHN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxuZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQgKyBpLCBzdHJpbmcuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGVhdmUgYm90aCBjaGFubmVscyB0b2dldGhlclxyXG4gICAgICAgICAgICB2YXIgaW50ZXJsZWF2ZWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCA9IGludGVybGVhdmUobGVmdEJ1ZmZlcnMsIHJpZ2h0QnVmZmVycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGludGVybGVhdmVkID0gbGVmdEJ1ZmZlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcmxlYXZlZExlbmd0aCA9IGludGVybGVhdmVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB3YXYgZmlsZVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0aW5nQnVmZmVyTGVuZ3RoID0gNDQgKyBpbnRlcmxlYXZlZExlbmd0aCAqIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHJlc3VsdGluZ0J1ZmZlckxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUklGRiBjaHVuayBkZXNjcmlwdG9yL2lkZW50aWZpZXIgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMCwgJ1JJRkYnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJJRkYgY2h1bmsgbGVuZ3RoXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDQsIDQ0ICsgaW50ZXJsZWF2ZWRMZW5ndGggKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJJRkYgdHlwZSBcclxuICAgICAgICAgICAgd3JpdGVVVEZCeXRlcyh2aWV3LCA4LCAnV0FWRScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9ybWF0IGNodW5rIGlkZW50aWZpZXIgXHJcbiAgICAgICAgICAgIC8vIEZNVCBzdWItY2h1bmtcclxuICAgICAgICAgICAgd3JpdGVVVEZCeXRlcyh2aWV3LCAxMiwgJ2ZtdCAnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvcm1hdCBjaHVuayBsZW5ndGggXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDE2LCAxNiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYW1wbGUgZm9ybWF0IChyYXcpXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDIwLCAxLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0ZXJlbyAoMiBjaGFubmVscylcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMjIsIG51bWJlck9mQXVkaW9DaGFubmVscywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYW1wbGUgcmF0ZSBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoMjQsIHNhbXBsZVJhdGUsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gYnl0ZSByYXRlIChzYW1wbGUgcmF0ZSAqIGJsb2NrIGFsaWduKVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMigyOCwgc2FtcGxlUmF0ZSAqIDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gYmxvY2sgYWxpZ24gKGNoYW5uZWwgY291bnQgKiBieXRlcyBwZXIgc2FtcGxlKSBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMzIsIG51bWJlck9mQXVkaW9DaGFubmVscyAqIDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gYml0cyBwZXIgc2FtcGxlIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigzNCwgMTYsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0YSBzdWItY2h1bmtcclxuICAgICAgICAgICAgLy8gZGF0YSBjaHVuayBpZGVudGlmaWVyIFxyXG4gICAgICAgICAgICB3cml0ZVVURkJ5dGVzKHZpZXcsIDM2LCAnZGF0YScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGF0YSBjaHVuayBsZW5ndGggXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDQwLCBpbnRlcmxlYXZlZExlbmd0aCAqIDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gd3JpdGUgdGhlIFBDTSBzYW1wbGVzXHJcbiAgICAgICAgICAgIHZhciBsbmcgPSBpbnRlcmxlYXZlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gNDQ7XHJcbiAgICAgICAgICAgIHZhciB2b2x1bWUgPSAxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxuZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3LnNldEludDE2KGluZGV4LCBpbnRlcmxlYXZlZFtpXSAqICgweDdGRkYgKiB2b2x1bWUpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICB2aWV3OiB2aWV3XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXHJcbiAgICAgICAgICAgICAgICB2aWV3OiB2aWV3XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRWRnZSB8fCBpc09wZXJhIHx8IGlzU2FmYXJpIHx8IGNvbmZpZy5ub1dvcmtlcikge1xyXG4gICAgICAgICAgICBtZXJnZUF1ZGlvQnVmZmVycyhjb25maWcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuYnVmZmVyLCBkYXRhLnZpZXcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciB3ZWJXb3JrZXIgPSBwcm9jZXNzSW5XZWJXb3JrZXIobWVyZ2VBdWRpb0J1ZmZlcnMpO1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YS5idWZmZXIsIGV2ZW50LmRhdGEudmlldyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZWxlYXNlIG1lbW9yeVxyXG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHdlYldvcmtlci53b3JrZXJVUkwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdlYldvcmtlci5wb3N0TWVzc2FnZShjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgd29ya2VyVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbX2Z1bmN0aW9uLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICc7dGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGUuZGF0YSk7fSdcclxuICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyVVJMKTtcclxuICAgICAgICB3b3JrZXIud29ya2VyVVJMID0gd29ya2VyVVJMO1xyXG4gICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgLy8gc3RvcCByZWNvcmRpbmdcclxuICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbWVyZ2VMZWZ0UmlnaHRCdWZmZXJzKHtcclxuICAgICAgICAgICAgZGVzaXJlZFNhbXBSYXRlOiBkZXNpcmVkU2FtcFJhdGUsXHJcbiAgICAgICAgICAgIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVsczogbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLFxyXG4gICAgICAgICAgICBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoOiByZWNvcmRpbmdMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlZnRCdWZmZXJzOiBsZWZ0Y2hhbm5lbCxcclxuICAgICAgICAgICAgcmlnaHRCdWZmZXJzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEgPyBbXSA6IHJpZ2h0Y2hhbm5lbFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGJ1ZmZlciwgdmlldykge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gVGhlIHJlY29yZGVkIGJsb2Igb2JqZWN0LlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICAgICAqIH0pO1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gbmV3IEJsb2IoW3ZpZXddLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8vd2F2J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0FycmF5QnVmZmVyfSBidWZmZXIgLSBUaGUgcmVjb3JkZWQgYnVmZmVyIG9iamVjdC5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIGJ1ZmZlciA9IHJlY29yZGVyLmJ1ZmZlcjtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLmJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih2aWV3LmJ1ZmZlci5ieXRlTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IC0gVGhlIHJlY29yZGVkIGRhdGEtdmlldyBvYmplY3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICogICAgIHZhciB2aWV3ID0gcmVjb3JkZXIudmlldztcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5zYW1wbGVSYXRlID0gZGVzaXJlZFNhbXBSYXRlIHx8IHNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIHNlbGYuYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyByZWNvcmRlZCBhdWRpbyBsZW5ndGhcclxuICAgICAgICAgICAgc2VsZi5sZW5ndGggPSByZWNvcmRpbmdMZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5ibG9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yID0gbmV3IFN0b3JhZ2UuQXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYW4gYXVkaW8gbm9kZSBmcm9tIHRoZSBtaWNyb3Bob25lIGluY29taW5nIHN0cmVhbVxyXG4gICAgdmFyIGF1ZGlvSW5wdXQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhU3RyZWFtKTtcclxuXHJcbiAgICB2YXIgbGVnYWxCdWZmZXJWYWx1ZXMgPSBbMCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDQwOTYsIDgxOTIsIDE2Mzg0XTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZyb20gdGhlIHNwZWM6IFRoaXMgdmFsdWUgY29udHJvbHMgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpc1xyXG4gICAgICogZGlzcGF0Y2hlZCBhbmQgaG93IG1hbnkgc2FtcGxlLWZyYW1lcyBuZWVkIHRvIGJlIHByb2Nlc3NlZCBlYWNoIGNhbGwuXHJcbiAgICAgKiBMb3dlciB2YWx1ZXMgZm9yIGJ1ZmZlciBzaXplIHdpbGwgcmVzdWx0IGluIGEgbG93ZXIgKGJldHRlcikgbGF0ZW5jeS5cclxuICAgICAqIEhpZ2hlciB2YWx1ZXMgd2lsbCBiZSBuZWNlc3NhcnkgdG8gYXZvaWQgYXVkaW8gYnJlYWt1cCBhbmQgZ2xpdGNoZXNcclxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBidWZmZXIgKGluIHNhbXBsZS1mcmFtZXMpIHdoaWNoIG5lZWRzIHRvXHJcbiAgICAgKiBiZSBwcm9jZXNzZWQgZWFjaCB0aW1lIG9ucHJvY2Vzc2F1ZGlvIGlzIGNhbGxlZC5cclxuICAgICAqIExlZ2FsIHZhbHVlcyBhcmUgKDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyLCAxNjM4NCkuXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIGZvciBob3cgZnJlcXVlbnRseSB0aGUgYXVkaW9wcm9jZXNzIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgICBidWZmZXJTaXplOiA0MDk2XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG5cclxuICAgIC8vIFwiMFwiIG1lYW5zLCBsZXQgY2hyb21lIGRlY2lkZSB0aGUgbW9zdCBhY2N1cmF0ZSBidWZmZXItc2l6ZSBmb3IgY3VycmVudCBwbGF0Zm9ybS5cclxuICAgIHZhciBidWZmZXJTaXplID0gdHlwZW9mIGNvbmZpZy5idWZmZXJTaXplID09PSAndW5kZWZpbmVkJyA/IDQwOTYgOiBjb25maWcuYnVmZmVyU2l6ZTtcclxuXHJcbiAgICBpZiAobGVnYWxCdWZmZXJWYWx1ZXMuaW5kZXhPZihidWZmZXJTaXplKSA9PT0gLTEpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0xlZ2FsIHZhbHVlcyBmb3IgYnVmZmVyLXNpemUgYXJlICcgKyBKU09OLnN0cmluZ2lmeShsZWdhbEJ1ZmZlclZhbHVlcywgbnVsbCwgJ1xcdCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGUpIHtcclxuICAgICAgICBqc0F1ZGlvTm9kZSA9IGNvbnRleHQuY3JlYXRlSmF2YVNjcmlwdE5vZGUoYnVmZmVyU2l6ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfSBlbHNlIGlmIChjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcikge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlID0gY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmZmVyU2l6ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyAnV2ViQXVkaW8gQVBJIGhhcyBubyBzdXBwb3J0IG9uIHRoaXMgYnJvd3Nlci4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbm5lY3QgdGhlIHN0cmVhbSB0byB0aGUgc2NyaXB0IHByb2Nlc3NvclxyXG4gICAgYXVkaW9JbnB1dC5jb25uZWN0KGpzQXVkaW9Ob2RlKTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5idWZmZXJTaXplKSB7XHJcbiAgICAgICAgYnVmZmVyU2l6ZSA9IGpzQXVkaW9Ob2RlLmJ1ZmZlclNpemU7IC8vIGRldmljZSBidWZmZXItc2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNhbXBsZSByYXRlIChpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQpIGF0IHdoaWNoIHRoZVxyXG4gICAgICogQXVkaW9Db250ZXh0IGhhbmRsZXMgYXVkaW8uIEl0IGlzIGFzc3VtZWQgdGhhdCBhbGwgQXVkaW9Ob2Rlc1xyXG4gICAgICogaW4gdGhlIGNvbnRleHQgcnVuIGF0IHRoaXMgcmF0ZS4gSW4gbWFraW5nIHRoaXMgYXNzdW1wdGlvbixcclxuICAgICAqIHNhbXBsZS1yYXRlIGNvbnZlcnRlcnMgb3IgXCJ2YXJpc3BlZWRcIiBwcm9jZXNzb3JzIGFyZSBub3Qgc3VwcG9ydGVkXHJcbiAgICAgKiBpbiByZWFsLXRpbWUgcHJvY2Vzc2luZy5cclxuICAgICAqIFRoZSBzYW1wbGVSYXRlIHBhcmFtZXRlciBkZXNjcmliZXMgdGhlIHNhbXBsZS1yYXRlIG9mIHRoZVxyXG4gICAgICogbGluZWFyIFBDTSBhdWRpbyBkYXRhIGluIHRoZSBidWZmZXIgaW4gc2FtcGxlLWZyYW1lcyBwZXIgc2Vjb25kLlxyXG4gICAgICogQW4gaW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IHNhbXBsZS1yYXRlcyBpbiBhdCBsZWFzdFxyXG4gICAgICogdGhlIHJhbmdlIDIyMDUwIHRvIDk2MDAwLlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNhbXBsZVJhdGUgLSBCdWZmZXItc2l6ZSBmb3IgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpcyBkaXNwYXRjaGVkLlxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlciA9IG5ldyBTdGVyZW9BdWRpb1JlY29yZGVyKG1lZGlhU3RyZWFtLCB7XHJcbiAgICAgKiAgICAgc2FtcGxlUmF0ZTogNDQxMDBcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB2YXIgc2FtcGxlUmF0ZSA9IHR5cGVvZiBjb25maWcuc2FtcGxlUmF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyBjb25maWcuc2FtcGxlUmF0ZSA6IGNvbnRleHQuc2FtcGxlUmF0ZSB8fCA0NDEwMDtcclxuXHJcbiAgICBpZiAoc2FtcGxlUmF0ZSA8IDIyMDUwIHx8IHNhbXBsZVJhdGUgPiA5NjAwMCkge1xyXG4gICAgICAgIC8vIFJlZjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjYzMDM5MTgvNTUyMTgyXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdzYW1wbGUtcmF0ZSBtdXN0IGJlIHVuZGVyIHJhbmdlIDIyMDUwIGFuZCA5NjAwMC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FtcGxlLXJhdGUnLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYnVmZmVyLXNpemUnLCBidWZmZXJTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5kZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rlc2lyZWQgc2FtcGxlLXJhdGUnLCBjb25maWcuZGVzaXJlZFNhbXBSYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWVtcyByZWNvcmRpbmcgaGFzIGJlZW4gcmVzdGFydGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VmFyaWFibGVzKCkge1xyXG4gICAgICAgIGxlZnRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmlnaHRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmVjb3JkaW5nTGVuZ3RoID0gMDtcclxuICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBzZWxmLmxlZnRjaGFubmVsID0gbGVmdGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5yaWdodGNoYW5uZWwgPSByaWdodGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcbiAgICAgICAgc2VsZi5kZXNpcmVkU2FtcFJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgc2VsZi5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTtcclxuICAgICAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdLFxyXG4gICAgICAgICAgICByZWNvcmRpbmdMZW5ndGg6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgaWYgKGpzQXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLm9uYXVkaW9wcm9jZXNzID0gbnVsbDtcclxuICAgICAgICAgICAganNBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBqc0F1ZGlvTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICBhdWRpb0lucHV0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgYXVkaW9JbnB1dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFZhcmlhYmxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdTdGVyZW9BdWRpb1JlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gb25BdWRpb1Byb2Nlc3NEYXRhQXZhaWxhYmxlKGUpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTWVkaWFTdHJlYW1BY3RpdmUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYVN0cmVhbSBzZWVtcyBzdG9wcGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlY29yZGluZykge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9JbnB1dC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0lucHV0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gXCJvbmF1ZGlvcHJvY2Vzc1wiIGV2ZW50J3MgZmlyc3QgaW52b2NhdGlvbi5cclxuICAgICAgICAgKiBAbWV0aG9kIHtmdW5jdGlvbn0gb25BdWRpb1Byb2Nlc3NTdGFydGVkXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uQXVkaW9Qcm9jZXNzU3RhcnRlZDogZnVuY3Rpb24oKSB7IH07XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCFpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgICAvLyB3ZSBjbG9uZSB0aGUgc2FtcGxlc1xyXG4gICAgICAgIHZhciBjaExlZnQgPSBuZXcgRmxvYXQzMkFycmF5KGxlZnQpO1xyXG4gICAgICAgIGxlZnRjaGFubmVsLnB1c2goY2hMZWZ0KTtcclxuXHJcbiAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDEpO1xyXG4gICAgICAgICAgICB2YXIgY2hSaWdodCA9IG5ldyBGbG9hdDMyQXJyYXkocmlnaHQpO1xyXG4gICAgICAgICAgICByaWdodGNoYW5uZWwucHVzaChjaFJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aCArPSBidWZmZXJTaXplO1xyXG5cclxuICAgICAgICAvLyBleHBvcnQgcmF3IFBDTVxyXG4gICAgICAgIHNlbGYucmVjb3JkaW5nTGVuZ3RoID0gcmVjb3JkaW5nTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycy5yZWNvcmRpbmdMZW5ndGggKz0gYnVmZmVyU2l6ZTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQucHVzaChjaExlZnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLnJpZ2h0LnB1c2goY2hSaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganNBdWRpb05vZGUub25hdWRpb3Byb2Nlc3MgPSBvbkF1ZGlvUHJvY2Vzc0RhdGFBdmFpbGFibGU7XHJcblxyXG4gICAgLy8gdG8gcHJldmVudCBzZWxmIGF1ZGlvIHRvIGJlIGNvbm5lY3RlZCB3aXRoIHNwZWFrZXJzXHJcbiAgICBqc0F1ZGlvTm9kZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xyXG5cclxuICAgIC8vIGV4cG9ydCByYXcgUENNXHJcbiAgICB0aGlzLmxlZnRjaGFubmVsID0gbGVmdGNoYW5uZWw7XHJcbiAgICB0aGlzLnJpZ2h0Y2hhbm5lbCA9IHJpZ2h0Y2hhbm5lbDtcclxuICAgIHRoaXMubnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gbnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG4gICAgdGhpcy5kZXNpcmVkU2FtcFJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICB0aGlzLnNhbXBsZVJhdGUgPSBzYW1wbGVSYXRlO1xyXG4gICAgc2VsZi5yZWNvcmRpbmdMZW5ndGggPSByZWNvcmRpbmdMZW5ndGg7XHJcblxyXG4gICAgLy8gaGVscGVyIGZvciBpbnRlcnZhbHMgYmFzZWQgYmxvYnNcclxuICAgIHZhciBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMgPSB7XHJcbiAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgcmlnaHQ6IFtdLFxyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aDogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB0aGlzIGxvb3BlciBpcyB1c2VkIHRvIHN1cHBvcnQgaW50ZXJ2YWxzIGJhc2VkIGJsb2JzICh2aWEgdGltZVNsaWNlK29uZGF0YWF2YWlsYWJsZSlcclxuICAgIGZ1bmN0aW9uIGxvb3BlcigpIHtcclxuICAgICAgICBpZiAoIXJlY29yZGluZyB8fCB0eXBlb2YgY29uZmlnLm9uZGF0YWF2YWlsYWJsZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGludGVydmFsc0Jhc2VkQnVmZmVycy5sZWZ0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtZXJnZUxlZnRSaWdodEJ1ZmZlcnMoe1xyXG4gICAgICAgICAgICAgICAgZGVzaXJlZFNhbXBSYXRlOiBkZXNpcmVkU2FtcFJhdGUsXHJcbiAgICAgICAgICAgICAgICBzYW1wbGVSYXRlOiBzYW1wbGVSYXRlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsXHJcbiAgICAgICAgICAgICAgICBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoOiBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMucmVjb3JkaW5nTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnM6IGludGVydmFsc0Jhc2VkQnVmZmVycy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgcmlnaHRCdWZmZXJzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEgPyBbXSA6IGludGVydmFsc0Jhc2VkQnVmZmVycy5yaWdodFxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihidWZmZXIsIHZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZpZXddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2F1ZGlvL3dhdidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uZGF0YWF2YWlsYWJsZShibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3BlciwgY29uZmlnLnRpbWVTbGljZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgICAgICAgICByaWdodDogW10sXHJcbiAgICAgICAgICAgICAgICByZWNvcmRpbmdMZW5ndGg6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3BlciwgY29uZmlnLnRpbWVTbGljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5TdGVyZW9BdWRpb1JlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcjtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fXHJcbi8vIENhbnZhc1JlY29yZGVyLmpzXHJcblxyXG4vKipcclxuICogQ2FudmFzUmVjb3JkZXIgaXMgYSBzdGFuZGFsb25lIGNsYXNzIHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgSFRNTDUtQ2FudmFzIHJlY29yZGluZyBpbnRvIHZpZGVvIFdlYk0uIEl0IHVzZXMgSFRNTDJDYW52YXMgbGlicmFyeSBhbmQgcnVucyB0b3Agb3ZlciB7QGxpbmsgV2hhbW15fS5cclxuICogQHN1bW1hcnkgSFRNTDJDYW52YXMgcmVjb3JkaW5nIGludG8gdmlkZW8gV2ViTS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIENhbnZhc1JlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgQ2FudmFzUmVjb3JkZXIoaHRtbEVsZW1lbnQsIHsgZGlzYWJsZUxvZ3M6IHRydWUsIHVzZVdoYW1teVJlY29yZGVyOiB0cnVlIH0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBodG1sRWxlbWVudCAtIHF1ZXJ5U2VsZWN0b3IvZ2V0RWxlbWVudEJ5SWQvZ2V0RWxlbWVudHNCeVRhZ05hbWVbMF0vZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge2Rpc2FibGVMb2dzOnRydWUsIGluaXRDYWxsYmFjazogZnVuY3Rpb259XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gQ2FudmFzUmVjb3JkZXIoaHRtbEVsZW1lbnQsIGNvbmZpZykge1xyXG4gICAgaWYgKHR5cGVvZiBodG1sMmNhbnZhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnUGxlYXNlIGxpbms6IGh0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9zY3JlZW5zaG90LmpzJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBpZiAoIWNvbmZpZy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgY29uZmlnLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWEgRGV0ZWN0UlRDLmpzXHJcbiAgICB2YXIgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgWydjYXB0dXJlU3RyZWFtJywgJ21vekNhcHR1cmVTdHJlYW0nLCAnd2Via2l0Q2FwdHVyZVN0cmVhbSddLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKSB7XHJcbiAgICAgICAgICAgIGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBfaXNDaHJvbWUgPSAoISF3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24gfHwgISF3aW5kb3cud2Via2l0R2V0VXNlck1lZGlhKSAmJiAhIXdpbmRvdy5jaHJvbWU7XHJcblxyXG4gICAgdmFyIGNocm9tZVZlcnNpb24gPSA1MDtcclxuICAgIHZhciBtYXRjaEFycmF5ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb20oZXxpdW0pXFwvKFswLTldKylcXC4vKTtcclxuICAgIGlmIChfaXNDaHJvbWUgJiYgbWF0Y2hBcnJheSAmJiBtYXRjaEFycmF5WzJdKSB7XHJcbiAgICAgICAgY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KG1hdGNoQXJyYXlbMl0sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoX2lzQ2hyb21lICYmIGNocm9tZVZlcnNpb24gPCA1Mikge1xyXG4gICAgICAgIGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLnVzZVdoYW1teVJlY29yZGVyKSB7XHJcbiAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxDYW52YXMsIG1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcblxyXG4gICAgaWYgKGlzQ2FudmFzU3VwcG9ydHNTdHJlYW1DYXB0dXJpbmcpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIHN1cHBvcnRzIGJvdGggTWVkaVJlY29yZGVyIEFQSSBhbmQgY2FudmFzLmNhcHR1cmVTdHJlYW0hJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaHRtbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBnbG9iYWxDYW52YXMgPSBodG1sRWxlbWVudDtcclxuICAgICAgICB9IGVsc2UgaWYgKGh0bWxFbGVtZW50IGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbENhbnZhcyA9IGh0bWxFbGVtZW50LmNhbnZhcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyAnUGxlYXNlIHBhc3MgZWl0aGVyIEhUTUxDYW52YXNFbGVtZW50IG9yIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC4nO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoISFuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FudmFzIHJlY29yZGluZyBpcyBOT1Qgc3VwcG9ydGVkIGluIEZpcmVmb3guJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc1JlY29yZGluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgQ2FudmFzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNSZWNvcmRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyAmJiAhY29uZmlnLnVzZVdoYW1teVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIC8vIENhbnZhc0NhcHR1cmVNZWRpYVN0cmVhbVxyXG4gICAgICAgICAgICB2YXIgY2FudmFzTWVkaWFTdHJlYW07XHJcbiAgICAgICAgICAgIGlmICgnY2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy5jYXB0dXJlU3RyZWFtKDI1KTsgLy8gMjUgRlBTXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ21vekNhcHR1cmVTdHJlYW0nIGluIGdsb2JhbENhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBnbG9iYWxDYW52YXMubW96Q2FwdHVyZVN0cmVhbSgyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ3dlYmtpdENhcHR1cmVTdHJlYW0nIGluIGdsb2JhbENhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBnbG9iYWxDYW52YXMud2Via2l0Q2FwdHVyZVN0cmVhbSgyNSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWRTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgICAgICAgICAgICAgIG1kU3RyZWFtLmFkZFRyYWNrKGNhbnZhc01lZGlhU3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF0pO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzTWVkaWFTdHJlYW0gPSBtZFN0cmVhbTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgIGlmICghY2FudmFzTWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdjYXB0dXJlU3RyZWFtIEFQSSBhcmUgTk9UIGF2YWlsYWJsZS4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBKYW4gMTgsIDIwMTYgc3RhdHVzIGlzIHRoYXQsIFxyXG4gICAgICAgICAgICAvLyBGaXJlZm94IE1lZGlhUmVjb3JkZXIgQVBJIGNhbid0IHJlY29yZCBDYW52YXNDYXB0dXJlTWVkaWFTdHJlYW0gb2JqZWN0LlxyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyID0gbmV3IE1lZGlhU3RyZWFtUmVjb3JkZXIoY2FudmFzTWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBkcmF3Q2FudmFzRnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0V2ViUEltYWdlcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFtZXNMZW5ndGggPSB3aGFtbXkuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oZnJhbWUsIGlkeCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVzUmVtYWluaW5nID0gZnJhbWVzTGVuZ3RoIC0gaWR4O1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJhbWVzUmVtYWluaW5nICsgJy8nICsgZnJhbWVzTGVuZ3RoICsgJyBmcmFtZXMgcmVtYWluaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKGZyYW1lc1JlbWFpbmluZywgZnJhbWVzTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdlYnAgPSBmcmFtZS5pbWFnZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCAxKTtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lc1tpZHhdLmltYWdlID0gd2VicDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dlbmVyYXRpbmcgV2ViTScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaXNSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyAmJiBtZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIuc3RvcChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0V2ViUEltYWdlcyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIGZyYW1lcyBpbiB2aWRlby93ZWJtIGJsb2IuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdoYW1teS5jb21waWxlKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZGluZyBmaW5pc2hlZCEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LmJsb2IuZm9yRWFjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYmxvYiA9IG5ldyBCbG9iKFtdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoYXQuYmxvYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtUmVjb3JkZXIgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVN0cmVhbVJlY29yZGVyIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKGNsZWFyUmVjb3JkZWREYXRhQ0IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnQ2FudmFzUmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb25lQ2FudmFzKCkge1xyXG4gICAgICAgIC8vY3JlYXRlIGEgbmV3IGNhbnZhc1xyXG4gICAgICAgIHZhciBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAvL3NldCBkaW1lbnNpb25zXHJcbiAgICAgICAgbmV3Q2FudmFzLndpZHRoID0gaHRtbEVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgbmV3Q2FudmFzLmhlaWdodCA9IGh0bWxFbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9hcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGh0bWxFbGVtZW50LCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdGhlIG5ldyBjYW52YXNcclxuICAgICAgICByZXR1cm4gbmV3Q2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdDYW52YXNGcmFtZSgpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWRSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgIC8vIHZpYSAjMjA2LCBieSBKYWNrIGkuZS4gQFNleW1vdXJyXHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGNsb25lQ2FudmFzKCksXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbDJjYW52YXMoaHRtbEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgZ3JhYk1vdXNlOiB0eXBlb2YgY29uZmlnLnNob3dNb3VzZVBvaW50ZXIgPT09ICd1bmRlZmluZWQnIHx8IGNvbmZpZy5zaG93TW91c2VQb2ludGVyLFxyXG4gICAgICAgICAgICBvbnJlbmRlcmVkOiBmdW5jdGlvbihjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmlhICMyMDYsIGJ5IEphY2sgaS5lLiBAU2V5bW91cnJcclxuICAgICAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2Uvd2VicCcsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChkcmF3Q2FudmFzRnJhbWUsIGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB3aGFtbXkgPSBuZXcgV2hhbW15LlZpZGVvKDEwMCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLkNhbnZhc1JlY29yZGVyID0gQ2FudmFzUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX1xyXG4vLyBXaGFtbXlSZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teVJlY29yZGVyIGlzIGEgc3RhbmRhbG9uZSBjbGFzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIHZpZGVvIHJlY29yZGluZyBpbiBDaHJvbWUuIEl0IHJ1bnMgdG9wIG92ZXIge0BsaW5rIFdoYW1teX0uXHJcbiAqIEBzdW1tYXJ5IFZpZGVvIHJlY29yZGluZyBmZWF0dXJlIGluIENocm9tZS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczogdHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgY29uZmlnLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBmcmFtZXMtaW50ZXJ2YWw6JywgY29uZmlnLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyB2aWRlby5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy53aWR0aCA9IDMyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gMjQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgY29uZmlnLnZpZGVvID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW52YXMgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSBjb25maWcuY2FudmFzLndpZHRoIHx8IDMyMDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmNhbnZhcy5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgZGVmYXVsdHNcclxuICAgICAgICBpZiAoY29uZmlnLnZpZGVvICYmIGNvbmZpZy52aWRlbyBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBjb25maWcudmlkZW8uY2xvbmVOb2RlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3JjT2JqZWN0KG1lZGlhU3RyZWFtLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7IC8vIFwib25sb2FkZWRtZXRhZGF0YVwiIG1heSBOT1Qgd29yayBpbiBGRj9cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSBjb25maWcudmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHZpZGVvLmhlaWdodCA9IGNvbmZpZy52aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdoYW1teSA9IG5ldyBXaGFtbXkuVmlkZW8oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbnZhcyByZXNvbHV0aW9ucycsIGNhbnZhcy53aWR0aCwgJyonLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHdpZHRoL2hlaWdodCcsIHZpZGVvLndpZHRoIHx8IGNhbnZhcy53aWR0aCwgJyonLCB2aWRlby5oZWlnaHQgfHwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkcmF3RnJhbWVzKGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3IGFuZCBwdXNoIGZyYW1lcyB0byBXaGFtbXlcclxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gZnJhbWVJbnRlcnZhbCAtIHNldCBtaW5pbXVtIGludGVydmFsIChpbiBtaWxsaXNlY29uZHMpIGJldHdlZW4gZWFjaCB0aW1lIHdlIHB1c2ggYSBmcmFtZSB0byBXaGFtbXlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZHJhd0ZyYW1lcyhmcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgZnJhbWVJbnRlcnZhbCA9IHR5cGVvZiBmcmFtZUludGVydmFsICE9PSAndW5kZWZpbmVkJyA/IGZyYW1lSW50ZXJ2YWwgOiAxMDtcclxuXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsYXN0VGltZTtcclxuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIGZyYW1lSW50ZXJ2YWwsIGZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGF1c2VkUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aWEgIzIwNiwgYnkgSmFjayBpLmUuIEBTZXltb3VyclxyXG4gICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgLy8gdmlhOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L3B1bGwvMzE2XHJcbiAgICAgICAgICAgIC8vIFR3ZWFrIGZvciBBbmRyb2lkIENocm9tZVxyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGltYWdlOiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS93ZWJwJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0ZyYW1lcywgZnJhbWVJbnRlcnZhbCwgZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jTG9vcChvKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSxcclxuICAgICAgICAgICAgbGVuZ3RoID0gby5sZW5ndGg7XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG8uY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gXCJzZXRUaW1lb3V0XCIgYWRkZWQgYnkgSmltIE1jTGVvZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgby5mdW5jdGlvblRvTG9vcChsb29wLCBpKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYmxhY2sgZnJhbWVzIGZyb20gdGhlIGJlZ2lubmluZyB0byB0aGUgc3BlY2lmaWVkIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBfZnJhbWVzIC0gYXJyYXkgb2YgZnJhbWVzIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfZnJhbWVzVG9DaGVjayAtIG51bWJlciBvZiBmcmFtZSB1bnRpbCBjaGVjayB3aWxsIGJlIGV4ZWN1dGVkICgtMSAtIHdpbGwgZHJvcCBhbGwgZnJhbWVzIHVudGlsIGZyYW1lIG5vdCBtYXRjaGVkIHdpbGwgYmUgZm91bmQpXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3BpeFRvbGVyYW5jZSAtIDAgLSB2ZXJ5IHN0cmljdCAob25seSBibGFjayBwaXhlbCBjb2xvcikgOyAxIC0gYWxsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2ZyYW1lVG9sZXJhbmNlIC0gMCAtIHZlcnkgc3RyaWN0IChvbmx5IGJsYWNrIGZyYW1lIGNvbG9yKSA7IDEgLSBhbGxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gLSBhcnJheSBvZiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgLy8gcHVsbCMyOTMgYnkgQHZvbG9kYWxleGV5XHJcbiAgICBmdW5jdGlvbiBkcm9wQmxhY2tGcmFtZXMoX2ZyYW1lcywgX2ZyYW1lc1RvQ2hlY2ssIF9waXhUb2xlcmFuY2UsIF9mcmFtZVRvbGVyYW5jZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgbG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBsb2NhbENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBsb2NhbENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjb250ZXh0MmQgPSBsb2NhbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciByZXN1bHRGcmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrVW50aWxOb3RCbGFjayA9IF9mcmFtZXNUb0NoZWNrID09PSAtMTtcclxuICAgICAgICB2YXIgZW5kQ2hlY2tGcmFtZSA9IChfZnJhbWVzVG9DaGVjayAmJiBfZnJhbWVzVG9DaGVjayA+IDAgJiYgX2ZyYW1lc1RvQ2hlY2sgPD0gX2ZyYW1lcy5sZW5ndGgpID9cclxuICAgICAgICAgICAgX2ZyYW1lc1RvQ2hlY2sgOiBfZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB2YXIgc2FtcGxlQ29sb3IgPSB7XHJcbiAgICAgICAgICAgIHI6IDAsXHJcbiAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgIGI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBtYXhDb2xvckRpZmZlcmVuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KDI1NSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyNTUsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMjU1LCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHBpeFRvbGVyYW5jZSA9IF9waXhUb2xlcmFuY2UgJiYgX3BpeFRvbGVyYW5jZSA+PSAwICYmIF9waXhUb2xlcmFuY2UgPD0gMSA/IF9waXhUb2xlcmFuY2UgOiAwO1xyXG4gICAgICAgIHZhciBmcmFtZVRvbGVyYW5jZSA9IF9mcmFtZVRvbGVyYW5jZSAmJiBfZnJhbWVUb2xlcmFuY2UgPj0gMCAmJiBfZnJhbWVUb2xlcmFuY2UgPD0gMSA/IF9mcmFtZVRvbGVyYW5jZSA6IDA7XHJcbiAgICAgICAgdmFyIGRvTm90Q2hlY2tOZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGFzeW5jTG9vcCh7XHJcbiAgICAgICAgICAgIGxlbmd0aDogZW5kQ2hlY2tGcmFtZSxcclxuICAgICAgICAgICAgZnVuY3Rpb25Ub0xvb3A6IGZ1bmN0aW9uKGxvb3AsIGYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaFBpeENvdW50LCBlbmRQaXhDaGVjaywgbWF4UGl4Q291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaEltYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCAmJiBtYXhQaXhDb3VudCAtIG1hdGNoUGl4Q291bnQgPD0gbWF4UGl4Q291bnQgKiBmcmFtZVRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCBibGFjayBmcmFtZSA6ICcgKyBmICsgJyA7IGZyYW1lIGR1cmF0aW9uICcgKyBfZnJhbWVzW2ZdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnJhbWUgaXMgcGFzc2VkIDogJyArIGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tVbnRpbE5vdEJsYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb05vdENoZWNrTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RnJhbWVzLnB1c2goX2ZyYW1lc1tmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dDJkLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kUGl4Q2hlY2sgPSBpbWFnZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFBpeENvdW50ID0gaW1hZ2VEYXRhLmRhdGEubGVuZ3RoIC8gNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBpeCA9IDA7IHBpeCA8IGVuZFBpeENoZWNrOyBwaXggKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2xvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBpbWFnZURhdGEuZGF0YVtwaXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IGltYWdlRGF0YS5kYXRhW3BpeCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IGltYWdlRGF0YS5kYXRhW3BpeCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yRGlmZmVyZW5jZSA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuciAtIHNhbXBsZUNvbG9yLnIsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuZyAtIHNhbXBsZUNvbG9yLmcsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuYiAtIHNhbXBsZUNvbG9yLmIsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBjb2xvciBpdCBpcyBkaWZmZXJlbmNlIGluIGNvbG9yIHZlY3RvcnMgKHIxLGcxLGIxKSA8PT4gKHIyLGcyLGIyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yRGlmZmVyZW5jZSA8PSBtYXhDb2xvckRpZmZlcmVuY2UgKiBwaXhUb2xlcmFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9mcmFtZXNbZl0uaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcyA9IHJlc3VsdEZyYW1lcy5jb25jYXQoX2ZyYW1lcy5zbGljZShlbmRDaGVja0ZyYW1lKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdEZyYW1lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBsYXN0IGZyYW1lIHNob3VsZCBiZSBhdmFpbGFibGUgZm9yIG5leHQgbWFuaXB1bGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdG90YWwgZHVyYXRpb24gb2YgYWxsIGZyYW1lcyB3aWxsIGJlIDwgMTAwMCB0aGFuIGZmbXBlZyBkb2Vzbid0IHdvcmsgd2VsbC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcy5wdXNoKF9mcmFtZXNbX2ZyYW1lcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRGcmFtZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzU3RvcERyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyB2aWRlby5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaXNTdG9wRHJhd2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gYW5hbHlzZSBvZiBhbGwgZnJhbWVzIHRha2VzIHNvbWUgdGltZSFcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwLCAxLCAxKSAtIHdpbGwgY3V0IGFsbCAxMCBmcmFtZXNcclxuICAgICAgICAgICAgLy8gZS5nLiBkcm9wQmxhY2tGcmFtZXMoZnJhbWVzLCAxMCwgMC41LCAwLjUpIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwKSA9PT0gZHJvcEJsYWNrRnJhbWVzKGZyYW1lcywgMTAsIDAsIDApIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lcyB3aXRoIHN0cmljdCBibGFjayBjb2xvclxyXG4gICAgICAgICAgICBkcm9wQmxhY2tGcmFtZXMod2hhbW15LmZyYW1lcywgLTEsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IGZyYW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0byBkaXNwbGF5IGFkdmVydGlzZW1lbnQgaW1hZ2VzIVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hZHZlcnRpc2VtZW50ICYmIGNvbmZpZy5hZHZlcnRpc2VtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBjb25maWcuYWR2ZXJ0aXNlbWVudC5jb25jYXQod2hhbW15LmZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBmcmFtZXMgaW4gdmlkZW8vd2VibSBibG9iLlxyXG4gICAgICAgICAgICAgICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmNvbXBpbGUoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYmxvYi5mb3JFYWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF90aGlzLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChjbGVhclJlY29yZGVkRGF0YUNCKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdXaGFtbXlSZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICB2YXIgdmlkZW87XHJcbiAgICB2YXIgbGFzdFRpbWU7XHJcbiAgICB2YXIgd2hhbW15O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5XaGFtbXlSZWNvcmRlciA9IFdoYW1teVJlY29yZGVyO1xyXG59XG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS93aGFtbXkvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4vLyBfX19fX19fX19cclxuLy8gV2hhbW15LmpzXHJcblxyXG4vLyB0b2RvOiBGaXJlZm94IG5vdyBzdXBwb3J0cyB3ZWJwIGZvciB3ZWJtIGNvbnRhaW5lcnMhXHJcbi8vIHRoZWlyIE1lZGlhUmVjb3JkZXIgaW1wbGVtZW50YXRpb24gd29ya3Mgd2VsbCFcclxuLy8gc2hvdWxkIHdlIHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJlY29yZCB2aWEgV2hhbW15LmpzIG9yIE1lZGlhUmVjb3JkZXIgQVBJIGlzIGEgYmV0dGVyIHNvbHV0aW9uP1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teSBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyB2aWRlbyByZWNvcmRpbmcgaW4gQ2hyb21lLiBJdCBpcyB3cml0dGVuIGJ5IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1fGFudGltYXR0ZXIxNX1cclxuICogQHN1bW1hcnkgQSByZWFsIHRpbWUgamF2YXNjcmlwdCB3ZWJtIGVuY29kZXIgYmFzZWQgb24gYSBjYW52YXMgaGFjay5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDE1KTtcclxuICogcmVjb3JkZXIuYWRkKGNvbnRleHQgfHwgY2FudmFzIHx8IGRhdGFVUkwpO1xyXG4gKiB2YXIgb3V0cHV0ID0gcmVjb3JkZXIuY29tcGlsZSgpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxudmFyIFdoYW1teSA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIGEgbW9yZSBhYnN0cmFjdC1pc2ggQVBJXHJcblxyXG4gICAgZnVuY3Rpb24gV2hhbW15VmlkZW8oZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhc3MgQ2FudmFzIG9yIENvbnRleHQgb3IgaW1hZ2Uvd2VicChzdHJpbmcpIHRvIHtAbGluayBXaGFtbXl9IGVuY29kZXIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICogcmVjb3JkZXIuYWRkKGNhbnZhcyB8fCBjb250ZXh0IHx8ICdpbWFnZS93ZWJwJyk7XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnJhbWUgLSBDYW52YXMgfHwgQ29udGV4dCB8fCBpbWFnZS93ZWJwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gLSBTdGljayBhIGR1cmF0aW9uIChpbiBtaWxsaXNlY29uZHMpXHJcbiAgICAgKi9cclxuICAgIFdoYW1teVZpZGVvLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmcmFtZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoJ2NhbnZhcycgaW4gZnJhbWUpIHsgLy9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS5jYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ3RvRGF0YVVSTCcgaW4gZnJhbWUpIHtcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCB0aGlzLnF1YWxpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEoL15kYXRhOmltYWdlXFwvd2VicDtiYXNlNjQsL2lnKS50ZXN0KGZyYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnSW5wdXQgbXVzdCBiZSBmb3JtYXR0ZWQgcHJvcGVybHkgYXMgYSBiYXNlNjQgZW5jb2RlZCBEYXRhVVJJIG9mIHR5cGUgaW1hZ2Uvd2VicCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBpbWFnZTogZnJhbWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCB0aGlzLmR1cmF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAndGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGUuZGF0YSk7fSdcclxuICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXR1cm4gd29ya2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdoYW1teUluV2ViV29ya2VyKGZyYW1lcykge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFycmF5VG9XZWJNKGZyYW1lcykge1xyXG4gICAgICAgICAgICB2YXIgaW5mbyA9IGNoZWNrRnJhbWVzKGZyYW1lcyk7XHJcbiAgICAgICAgICAgIGlmICghaW5mbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY2x1c3Rlck1heER1cmF0aW9uID0gMzAwMDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgRUJNTCA9IFt7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAweDFhNDVkZmEzLCAvLyBFQk1MXHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4NiAvLyBFQk1MVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyZjcgLy8gRUJNTFJlYWRWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDJmMiAvLyBFQk1MTWF4SURMZW5ndGhcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0MmYzIC8vIEVCTUxNYXhTaXplTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnd2VibScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0MjgyIC8vIERvY1R5cGVcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0Mjg3IC8vIERvY1R5cGVWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4NSAvLyBEb2NUeXBlUmVhZFZlcnNpb25cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICdpZCc6IDB4MTg1MzgwNjcsIC8vIFNlZ21lbnRcclxuICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDE1NDlhOTY2LCAvLyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDFlNiwgLy9kbyB0aGluZ3MgaW4gbWlsbGlzZWNzIChudW0gb2YgbmFub3NlY3MgZm9yIGR1cmF0aW9uIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDJhZDdiMSAvLyBUaW1lY29kZVNjYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICd3aGFtbXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDRkODAgLy8gTXV4aW5nQXBwXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICd3aGFtbXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDU3NDEgLy8gV3JpdGluZ0FwcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBkb3VibGVUb1N0cmluZyhpbmZvLmR1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0NDg5IC8vIER1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDE2NTRhZTZiLCAvLyBUcmFja3NcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4YWUsIC8vIFRyYWNrRW50cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhkNyAvLyBUcmFja051bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDczYzUgLy8gVHJhY2tVSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg5YyAvLyBGbGFnTGFjaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDIyYjU5YyAvLyBMYW5ndWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICdWX1ZQOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDg2IC8vIENvZGVjSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnVlA4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4MjU4Njg4IC8vIENvZGVjTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDgzIC8vIFRyYWNrVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGUwLCAvLyBWaWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogaW5mby53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGIwIC8vIFBpeGVsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGluZm8uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4YmEgLy8gUGl4ZWxIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgLy9HZW5lcmF0ZSBjbHVzdGVycyAobWF4IGR1cmF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgZnJhbWVOdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY2x1c3RlclRpbWVjb2RlID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGZyYW1lTnVtYmVyIDwgZnJhbWVzLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbHVzdGVyRnJhbWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlckR1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyRnJhbWVzLnB1c2goZnJhbWVzW2ZyYW1lTnVtYmVyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlckR1cmF0aW9uICs9IGZyYW1lc1tmcmFtZU51bWJlcl0uZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVOdW1iZXIrKztcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGZyYW1lTnVtYmVyIDwgZnJhbWVzLmxlbmd0aCAmJiBjbHVzdGVyRHVyYXRpb24gPCBjbHVzdGVyTWF4RHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbHVzdGVyQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDFmNDNiNjc1LCAvLyBDbHVzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZXRDbHVzdGVyRGF0YShjbHVzdGVyVGltZWNvZGUsIGNsdXN0ZXJDb3VudGVyLCBjbHVzdGVyRnJhbWVzKVxyXG4gICAgICAgICAgICAgICAgfTsgLy9BZGQgY2x1c3RlciB0byBzZWdtZW50XHJcbiAgICAgICAgICAgICAgICBFQk1MWzFdLmRhdGEucHVzaChjbHVzdGVyKTtcclxuICAgICAgICAgICAgICAgIGNsdXN0ZXJUaW1lY29kZSArPSBjbHVzdGVyRHVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUVCTUwoRUJNTCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDbHVzdGVyRGF0YShjbHVzdGVyVGltZWNvZGUsIGNsdXN0ZXJDb3VudGVyLCBjbHVzdGVyRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBjbHVzdGVyVGltZWNvZGUsXHJcbiAgICAgICAgICAgICAgICAnaWQnOiAweGU3IC8vIFRpbWVjb2RlXHJcbiAgICAgICAgICAgIH1dLmNvbmNhdChjbHVzdGVyRnJhbWVzLm1hcChmdW5jdGlvbih3ZWJwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBtYWtlU2ltcGxlQmxvY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NhcmRhYmxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lOiB3ZWJwLmRhdGEuc2xpY2UoNCksXHJcbiAgICAgICAgICAgICAgICAgICAgaW52aXNpYmxlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleWZyYW1lOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhY2luZzogMCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFja051bTogMSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lY29kZTogTWF0aC5yb3VuZChjbHVzdGVyQ291bnRlcilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2x1c3RlckNvdW50ZXIgKz0gd2VicC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDB4YTNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN1bXMgdGhlIGxlbmd0aHMgb2YgYWxsIHRoZSBmcmFtZXMgYW5kIGdldHMgdGhlIGR1cmF0aW9uXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrRnJhbWVzKGZyYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoIWZyYW1lc1swXSkge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIE1heWJlIFdlYlAgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci4nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gZnJhbWVzWzBdLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gZnJhbWVzWzBdLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZnJhbWVzWzBdLmR1cmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uICs9IGZyYW1lc1tpXS5kdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG51bVRvQnVmZmVyKG51bSkge1xyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBbXTtcclxuICAgICAgICAgICAgd2hpbGUgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2gobnVtICYgMHhmZik7XHJcbiAgICAgICAgICAgICAgICBudW0gPSBudW0gPj4gODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocGFydHMucmV2ZXJzZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0clRvQnVmZmVyKHN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc3RyLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYml0c1RvQnVmZmVyKGJpdHMpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHBhZCA9IChiaXRzLmxlbmd0aCAlIDgpID8gKG5ldyBBcnJheSgxICsgOCAtIChiaXRzLmxlbmd0aCAlIDgpKSkuam9pbignMCcpIDogJyc7XHJcbiAgICAgICAgICAgIGJpdHMgPSBwYWQgKyBiaXRzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpdHMubGVuZ3RoOyBpICs9IDgpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChwYXJzZUludChiaXRzLnN1YnN0cihpLCA4KSwgMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlRUJNTChqc29uKSB7XHJcbiAgICAgICAgICAgIHZhciBlYm1sID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBqc29uW2ldLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBnZW5lcmF0ZUVCTUwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBiaXRzVG9CdWZmZXIoZGF0YS50b1N0cmluZygyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzdHJUb0J1ZmZlcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gZGF0YS5zaXplIHx8IGRhdGEuYnl0ZUxlbmd0aCB8fCBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciB6ZXJvZXMgPSBNYXRoLmNlaWwoTWF0aC5jZWlsKE1hdGgubG9nKGxlbikgLyBNYXRoLmxvZygyKSkgLyA4KTtcclxuICAgICAgICAgICAgICAgIHZhciBzaXplVG9TdHJpbmcgPSBsZW4udG9TdHJpbmcoMik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gKG5ldyBBcnJheSgoemVyb2VzICogNyArIDcgKyAxKSAtIHNpemVUb1N0cmluZy5sZW5ndGgpKS5qb2luKCcwJykgKyBzaXplVG9TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IChuZXcgQXJyYXkoemVyb2VzKSkuam9pbignMCcpICsgJzEnICsgcGFkZGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGVibWwucHVzaChudW1Ub0J1ZmZlcihqc29uW2ldLmlkKSk7XHJcbiAgICAgICAgICAgICAgICBlYm1sLnB1c2goYml0c1RvQnVmZmVyKHNpemUpKTtcclxuICAgICAgICAgICAgICAgIGVibWwucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKGVibWwsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQmluU3RyT2xkKGJpdHMpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSAnJztcclxuICAgICAgICAgICAgdmFyIHBhZCA9IChiaXRzLmxlbmd0aCAlIDgpID8gKG5ldyBBcnJheSgxICsgOCAtIChiaXRzLmxlbmd0aCAlIDgpKSkuam9pbignMCcpIDogJyc7XHJcbiAgICAgICAgICAgIGJpdHMgPSBwYWQgKyBiaXRzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpdHMubGVuZ3RoOyBpICs9IDgpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChiaXRzLnN1YnN0cihpLCA4KSwgMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWFrZVNpbXBsZUJsb2NrKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmtleWZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSAxMjg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmludmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gODtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEubGFjaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSAoZGF0YS5sYWNpbmcgPDwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRpc2NhcmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncyB8PSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFja051bSA+IDEyNykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ1RyYWNrTnVtYmVyID4gMTI3IG5vdCBzdXBwb3J0ZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3V0ID0gW2RhdGEudHJhY2tOdW0gfCAweDgwLCBkYXRhLnRpbWVjb2RlID4+IDgsIGRhdGEudGltZWNvZGUgJiAweGZmLCBmbGFnc10ubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcnKSArIGRhdGEuZnJhbWU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VXZWJQKHJpZmYpIHtcclxuICAgICAgICAgICAgdmFyIFZQOCA9IHJpZmYuUklGRlswXS5XRUJQWzBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lU3RhcnQgPSBWUDguaW5kZXhPZignXFx4OWRcXHgwMVxceDJhJyk7IC8vIEEgVlA4IGtleWZyYW1lIHN0YXJ0cyB3aXRoIHRoZSAweDlkMDEyYSBoZWFkZXJcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGMgPSBbXTsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY1tpXSA9IFZQOC5jaGFyQ29kZUF0KGZyYW1lU3RhcnQgKyAzICsgaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3aWR0aCwgaGVpZ2h0LCB0bXA7XHJcblxyXG4gICAgICAgICAgICAvL3RoZSBjb2RlIGJlbG93IGlzIGxpdGVyYWxseSBjb3BpZWQgdmVyYmF0aW0gZnJvbSB0aGUgYml0c3RyZWFtIHNwZWNcclxuICAgICAgICAgICAgdG1wID0gKGNbMV0gPDwgOCkgfCBjWzBdO1xyXG4gICAgICAgICAgICB3aWR0aCA9IHRtcCAmIDB4M0ZGRjtcclxuICAgICAgICAgICAgdG1wID0gKGNbM10gPDwgOCkgfCBjWzJdO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSB0bXAgJiAweDNGRkY7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFZQOCxcclxuICAgICAgICAgICAgICAgIHJpZmY6IHJpZmZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0ckxlbmd0aChzdHJpbmcsIG9mZnNldCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihvZmZzZXQgKyA0LCA0KS5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1bnBhZGRlZCA9IGkuY2hhckNvZGVBdCgwKS50b1N0cmluZygyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAobmV3IEFycmF5KDggLSB1bnBhZGRlZC5sZW5ndGggKyAxKSkuam9pbignMCcpICsgdW5wYWRkZWQ7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJycpLCAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUklGRihzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjaHVua3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPCBzdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBzdHJpbmcuc3Vic3RyKG9mZnNldCwgNCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gZ2V0U3RyTGVuZ3RoKHN0cmluZywgb2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gc3RyaW5nLnN1YnN0cihvZmZzZXQgKyA0ICsgNCwgbGVuKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0ICsgNCArIGxlbjtcclxuICAgICAgICAgICAgICAgIGNodW5rc1tpZF0gPSBjaHVua3NbaWRdIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gJ1JJRkYnIHx8IGlkID09PSAnTElTVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaHVua3NbaWRdLnB1c2gocGFyc2VSSUZGKGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtzW2lkXS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjaHVua3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb3VibGVUb1N0cmluZyhudW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICBuZXcgVWludDhBcnJheSgobmV3IEZsb2F0NjRBcnJheShbbnVtXSkpLmJ1ZmZlciksIDApLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKTtcclxuICAgICAgICAgICAgfSkucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHdlYm0gPSBuZXcgQXJyYXlUb1dlYk0oZnJhbWVzLm1hcChmdW5jdGlvbihmcmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgd2VicCA9IHBhcnNlV2ViUChwYXJzZVJJRkYoYXRvYihmcmFtZS5pbWFnZS5zbGljZSgyMykpKSk7XHJcbiAgICAgICAgICAgIHdlYnAuZHVyYXRpb24gPSBmcmFtZS5kdXJhdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHdlYnA7XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBwb3N0TWVzc2FnZSh3ZWJtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZXMgZnJhbWVzIGluIFdlYk0gY29udGFpbmVyLiBJdCB1c2VzIFdlYldvcmtpbnZva2UgdG8gaW52b2tlICdBcnJheVRvV2ViTScgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICogcmVjb3JkZXIuY29tcGlsZShmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAvLyBibG9iLnNpemUgLSBibG9iLnR5cGVcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICBXaGFtbXlWaWRlby5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcih3aGFtbXlJbldlYldvcmtlcik7XHJcblxyXG4gICAgICAgIHdlYldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihldmVudC5kYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhldmVudC5kYXRhKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIucG9zdE1lc3NhZ2UodGhpcy5mcmFtZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbW9yZSBhYnN0cmFjdC1pc2ggQVBJLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgV2hhbW15XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlciA9IG5ldyBXaGFtbXkoKS5WaWRlbygwLjgsIDEwMCk7XHJcbiAgICAgICAgICogQHBhcmFtIHs/bnVtYmVyfSBzcGVlZCAtIDAuOFxyXG4gICAgICAgICAqIEBwYXJhbSB7P251bWJlcn0gcXVhbGl0eSAtIDEwMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFZpZGVvOiBXaGFtbXlWaWRlb1xyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLldoYW1teSA9IFdoYW1teTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fIChpbmRleGVkLWRiKVxyXG4vLyBEaXNrU3RvcmFnZS5qc1xyXG5cclxuLyoqXHJcbiAqIERpc2tTdG9yYWdlIGlzIGEgc3RhbmRhbG9uZSBvYmplY3QgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBzdG9yZSByZWNvcmRlZCBibG9icyBpbiBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHN1bW1hcnkgV3JpdGluZyBibG9icyBpbnRvIEluZGV4ZWREQi5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEBleGFtcGxlXHJcbiAqIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICogICAgIGF1ZGlvQmxvYjogeW91ckF1ZGlvQmxvYixcclxuICogICAgIHZpZGVvQmxvYjogeW91clZpZGVvQmxvYixcclxuICogICAgIGdpZkJsb2IgIDogeW91ckdpZkJsb2JcclxuICogfSk7XHJcbiAqIERpc2tTdG9yYWdlLkZldGNoKGZ1bmN0aW9uKGRhdGFVUkwsIHR5cGUpIHtcclxuICogICAgIGlmKHR5cGUgPT09ICdhdWRpb0Jsb2InKSB7IH1cclxuICogICAgIGlmKHR5cGUgPT09ICd2aWRlb0Jsb2InKSB7IH1cclxuICogICAgIGlmKHR5cGUgPT09ICdnaWZCbG9iJykgICB7IH1cclxuICogfSk7XHJcbiAqIC8vIERpc2tTdG9yYWdlLmRhdGFTdG9yZU5hbWUgPSAncmVjb3JkUlRDJztcclxuICogLy8gRGlza1N0b3JhZ2Uub25FcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7IH07XHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGluaXQgLSBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBvbmNlIHRvIGluaXRpYWxpemUgSW5kZXhlZERCIE9iamVjdFN0b3JlLiBUaG91Z2gsIGl0IGlzIGF1dG8tdXNlZCBpbnRlcm5hbGx5LlxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBGZXRjaCAtIFRoaXMgbWV0aG9kIGZldGNoZXMgc3RvcmVkIGJsb2JzIGZyb20gSW5kZXhlZERCLlxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBTdG9yZSAtIFRoaXMgbWV0aG9kIHN0b3JlcyBibG9icyBpbiBJbmRleGVkREIuXHJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uRXJyb3IgLSBUaGlzIGZ1bmN0aW9uIGlzIGludm9rZWQgZm9yIGFueSBrbm93bi91bmtub3duIGVycm9yLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGF0YVN0b3JlTmFtZSAtIE5hbWUgb2YgdGhlIE9iamVjdFN0b3JlIGNyZWF0ZWQgaW4gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcblxyXG5cclxudmFyIERpc2tTdG9yYWdlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBvbmNlIHRvIGluaXRpYWxpemUgSW5kZXhlZERCIE9iamVjdFN0b3JlLiBUaG91Z2gsIGl0IGlzIGF1dG8tdXNlZCBpbnRlcm5hbGx5LlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5pbml0KCk7XHJcbiAgICAgKi9cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleGVkREIgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBpbmRleGVkREIub3BlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5kZXhlZERCIEFQSSBhcmUgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYlZlcnNpb24gPSAxO1xyXG4gICAgICAgIHZhciBkYk5hbWUgPSB0aGlzLmRiTmFtZSB8fCBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1xcL3w6fCN8JXxcXC58XFxbfFxcXS9nLCAnJyksXHJcbiAgICAgICAgICAgIGRiO1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCBkYlZlcnNpb24pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVPYmplY3RTdG9yZShkYXRhQmFzZSkge1xyXG4gICAgICAgICAgICBkYXRhQmFzZS5jcmVhdGVPYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHV0SW5EQigpIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW3NlbGYuZGF0YVN0b3JlTmFtZV0sICdyZWFkd3JpdGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnZpZGVvQmxvYikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKS5wdXQoc2VsZi52aWRlb0Jsb2IsICd2aWRlb0Jsb2InKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuZ2lmQmxvYikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKS5wdXQoc2VsZi5naWZCbG9iLCAnZ2lmQmxvYicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5hdWRpb0Jsb2IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkucHV0KHNlbGYuYXVkaW9CbG9iLCAnYXVkaW9CbG9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEZyb21TdG9yZShwb3J0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKS5nZXQocG9ydGlvbk5hbWUpLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsYmFjayhldmVudC50YXJnZXQucmVzdWx0LCBwb3J0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0RnJvbVN0b3JlKCdhdWRpb0Jsb2InKTtcclxuICAgICAgICAgICAgZ2V0RnJvbVN0b3JlKCd2aWRlb0Jsb2InKTtcclxuICAgICAgICAgICAgZ2V0RnJvbVN0b3JlKCdnaWZCbG9iJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBzZWxmLm9uRXJyb3I7XHJcblxyXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRiID0gcmVxdWVzdC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGRiLm9uZXJyb3IgPSBzZWxmLm9uRXJyb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGIuc2V0VmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRiLnZlcnNpb24gIT09IGRiVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXRWZXJzaW9uID0gZGIuc2V0VmVyc2lvbihkYlZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZlcnNpb24ub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU9iamVjdFN0b3JlKGRiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHV0SW5EQigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHB1dEluREIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHB1dEluREIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjcmVhdGVPYmplY3RTdG9yZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZmV0Y2hlcyBzdG9yZWQgYmxvYnMgZnJvbSBJbmRleGVkREIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLkZldGNoKGZ1bmN0aW9uKGRhdGFVUkwsIHR5cGUpIHtcclxuICAgICAqICAgICBpZih0eXBlID09PSAnYXVkaW9CbG9iJykgeyB9XHJcbiAgICAgKiAgICAgaWYodHlwZSA9PT0gJ3ZpZGVvQmxvYicpIHsgfVxyXG4gICAgICogICAgIGlmKHR5cGUgPT09ICdnaWZCbG9iJykgICB7IH1cclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICBGZXRjaDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcmVzIGJsb2JzIGluIEluZGV4ZWREQi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICogICAgIGF1ZGlvQmxvYjogeW91ckF1ZGlvQmxvYixcclxuICAgICAqICAgICB2aWRlb0Jsb2I6IHlvdXJWaWRlb0Jsb2IsXHJcbiAgICAgKiAgICAgZ2lmQmxvYiAgOiB5b3VyR2lmQmxvYlxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIFN0b3JlOiBmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgICB0aGlzLmF1ZGlvQmxvYiA9IGNvbmZpZy5hdWRpb0Jsb2I7XHJcbiAgICAgICAgdGhpcy52aWRlb0Jsb2IgPSBjb25maWcudmlkZW9CbG9iO1xyXG4gICAgICAgIHRoaXMuZ2lmQmxvYiA9IGNvbmZpZy5naWZCbG9iO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGludm9rZWQgZm9yIGFueSBrbm93bi91bmtub3duIGVycm9yLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5vbkVycm9yID0gZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICogICAgIGFsZXJvdCggSlNPTi5zdHJpbmdpZnkoZXJyb3IpICk7XHJcbiAgICAgKiB9O1xyXG4gICAgICovXHJcbiAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyb3IsIG51bGwsICdcXHQnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGRhdGFTdG9yZU5hbWUgLSBOYW1lIG9mIHRoZSBPYmplY3RTdG9yZSBjcmVhdGVkIGluIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5kYXRhU3RvcmVOYW1lID0gJ3JlY29yZFJUQyc7XHJcbiAgICAgKi9cclxuICAgIGRhdGFTdG9yZU5hbWU6ICdyZWNvcmRSVEMnLFxyXG4gICAgZGJOYW1lOiBudWxsXHJcbn07XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5EaXNrU3RvcmFnZSA9IERpc2tTdG9yYWdlO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19cclxuLy8gR2lmUmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBHaWZSZWNvcmRlciBpcyBzdGFuZGFsb25lIGNhbHNzIHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gcmVjb3JkIHZpZGVvIG9yIGNhbnZhcyBpbnRvIGFuaW1hdGVkIGdpZi5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIEdpZlJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgR2lmUmVjb3JkZXIobWVkaWFTdHJlYW0gfHwgY2FudmFzIHx8IGNvbnRleHQsIHsgb25HaWZQcmV2aWV3OiBmdW5jdGlvbiwgb25HaWZSZWNvcmRpbmdTdGFydGVkOiBmdW5jdGlvbiwgd2lkdGg6IDEyODAsIGhlaWdodDogNzIwLCBmcmFtZVJhdGU6IDIwMCwgcXVhbGl0eTogMTAgfSk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBvciBIVE1MQ2FudmFzRWxlbWVudCBvciBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgd2lkdGg6IDMyMCwgaGVpZ2h0OiAyNDAsIGZyYW1lUmF0ZTogMjAwLCBxdWFsaXR5OiAxMH1cclxuICovXHJcblxyXG5mdW5jdGlvbiBHaWZSZWNvcmRlcihtZWRpYVN0cmVhbSwgY29uZmlnKSB7XHJcbiAgICBpZiAodHlwZW9mIEdJRkVuY29kZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4ud2VicnRjLWV4cGVyaW1lbnQuY29tL2dpZi1yZWNvcmRlci5qcyc7XHJcbiAgICAgICAgKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICB2YXIgaXNIVE1MT2JqZWN0ID0gbWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfHwgbWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIEdJRkVuY29kZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5yZWNvcmQsIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzTG9hZGVkTWV0YURhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChzZWxmLnJlY29yZCwgMTAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNIVE1MT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcud2lkdGggPSB2aWRlby5vZmZzZXRXaWR0aCB8fCAzMjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmhlaWdodCA9IHZpZGVvLm9mZnNldEhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudmlkZW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmNhbnZhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY29uZmlnLmNhbnZhcy53aWR0aCB8fCAzMjA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjb25maWcuY2FudmFzLmhlaWdodCB8fCAyNDA7XHJcblxyXG4gICAgICAgICAgICB2aWRlby53aWR0aCA9IGNvbmZpZy52aWRlby53aWR0aCB8fCAzMjA7XHJcbiAgICAgICAgICAgIHZpZGVvLmhlaWdodCA9IGNvbmZpZy52aWRlby5oZWlnaHQgfHwgMjQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXh0ZXJuYWwgbGlicmFyeSB0byByZWNvcmQgYXMgR0lGIGltYWdlc1xyXG4gICAgICAgIGdpZkVuY29kZXIgPSBuZXcgR0lGRW5jb2RlcigpO1xyXG5cclxuICAgICAgICAvLyB2b2lkIHNldFJlcGVhdChpbnQgaXRlcikgXHJcbiAgICAgICAgLy8gU2V0cyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBzZXQgb2YgR0lGIGZyYW1lcyBzaG91bGQgYmUgcGxheWVkLiBcclxuICAgICAgICAvLyBEZWZhdWx0IGlzIDE7IDAgbWVhbnMgcGxheSBpbmRlZmluaXRlbHkuXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zZXRSZXBlYXQoMCk7XHJcblxyXG4gICAgICAgIC8vIHZvaWQgc2V0RnJhbWVSYXRlKE51bWJlciBmcHMpIFxyXG4gICAgICAgIC8vIFNldHMgZnJhbWUgcmF0ZSBpbiBmcmFtZXMgcGVyIHNlY29uZC4gXHJcbiAgICAgICAgLy8gRXF1aXZhbGVudCB0byBzZXREZWxheSgxMDAwL2ZwcykuXHJcbiAgICAgICAgLy8gVXNpbmcgXCJzZXREZWxheVwiIGluc3RlYWQgb2YgXCJzZXRGcmFtZVJhdGVcIlxyXG4gICAgICAgIGdpZkVuY29kZXIuc2V0RGVsYXkoY29uZmlnLmZyYW1lUmF0ZSB8fCAyMDApO1xyXG5cclxuICAgICAgICAvLyB2b2lkIHNldFF1YWxpdHkoaW50IHF1YWxpdHkpIFxyXG4gICAgICAgIC8vIFNldHMgcXVhbGl0eSBvZiBjb2xvciBxdWFudGl6YXRpb24gKGNvbnZlcnNpb24gb2YgaW1hZ2VzIHRvIHRoZSBcclxuICAgICAgICAvLyBtYXhpbXVtIDI1NiBjb2xvcnMgYWxsb3dlZCBieSB0aGUgR0lGIHNwZWNpZmljYXRpb24pLiBcclxuICAgICAgICAvLyBMb3dlciB2YWx1ZXMgKG1pbmltdW0gPSAxKSBwcm9kdWNlIGJldHRlciBjb2xvcnMsIFxyXG4gICAgICAgIC8vIGJ1dCBzbG93IHByb2Nlc3Npbmcgc2lnbmlmaWNhbnRseS4gMTAgaXMgdGhlIGRlZmF1bHQsIFxyXG4gICAgICAgIC8vIGFuZCBwcm9kdWNlcyBnb29kIGNvbG9yIG1hcHBpbmcgYXQgcmVhc29uYWJsZSBzcGVlZHMuIFxyXG4gICAgICAgIC8vIFZhbHVlcyBncmVhdGVyIHRoYW4gMjAgZG8gbm90IHlpZWxkIHNpZ25pZmljYW50IGltcHJvdmVtZW50cyBpbiBzcGVlZC5cclxuICAgICAgICBnaWZFbmNvZGVyLnNldFF1YWxpdHkoY29uZmlnLnF1YWxpdHkgfHwgMTApO1xyXG5cclxuICAgICAgICAvLyBCb29sZWFuIHN0YXJ0KCkgXHJcbiAgICAgICAgLy8gVGhpcyB3cml0ZXMgdGhlIEdJRiBIZWFkZXIgYW5kIHJldHVybnMgZmFsc2UgaWYgaXQgZmFpbHMuXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkdpZlJlY29yZGluZ1N0YXJ0ZWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uZmlnLm9uR2lmUmVjb3JkaW5nU3RhcnRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZHJhd1ZpZGVvRnJhbWUodGltZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jbGVhcmVkUmVjb3JkZWREYXRhID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc1BhdXNlZFJlY29yZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1ZpZGVvRnJhbWUodGltZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd1ZpZGVvRnJhbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYXN0RnJhbWVUaW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB+MTAgZnBzXHJcbiAgICAgICAgICAgIGlmICh0aW1lIC0gbGFzdEZyYW1lVGltZSA8IDkwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNIVE1MT2JqZWN0ICYmIHZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdmlhOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L3B1bGwvMzE2XHJcbiAgICAgICAgICAgICAgICAvLyBUd2VhayBmb3IgQW5kcm9pZCBDaHJvbWVcclxuICAgICAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLm9uR2lmUHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLm9uR2lmUHJldmlldyhjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdpZkVuY29kZXIuYWRkRnJhbWUoY29udGV4dCk7XHJcbiAgICAgICAgICAgIGxhc3RGcmFtZVRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdWaWRlb0ZyYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICogICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICBpZiAobGFzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGxhc3RBbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gVGhlIHJlY29yZGVkIGJsb2Igb2JqZWN0LlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5ibG9iID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KGdpZkVuY29kZXIuc3RyZWFtKCkuYmluKV0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL2dpZidcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2sodGhpcy5ibG9iKTtcclxuXHJcbiAgICAgICAgLy8gYnVnOiBmaW5kIGEgd2F5IHRvIGNsZWFyIG9sZCByZWNvcmRlZCBibG9ic1xyXG4gICAgICAgIGdpZkVuY29kZXIuc3RyZWFtKCkuYmluID0gW107XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBHaWZSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZWxmLmNsZWFyZWRSZWNvcmRlZERhdGEgPSB0cnVlO1xyXG4gICAgICAgIGNsZWFyUmVjb3JkZWREYXRhQ0IoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJSZWNvcmRlZERhdGFDQigpIHtcclxuICAgICAgICBpZiAoZ2lmRW5jb2Rlcikge1xyXG4gICAgICAgICAgICBnaWZFbmNvZGVyLnN0cmVhbSgpLmJpbiA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnR2lmUmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgaWYgKGlzSFRNTE9iamVjdCkge1xyXG4gICAgICAgIGlmIChtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgICAgICBjb250ZXh0ID0gbWVkaWFTdHJlYW07XHJcbiAgICAgICAgICAgIGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb250ZXh0ID0gbWVkaWFTdHJlYW0uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY2FudmFzID0gbWVkaWFTdHJlYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBpc0xvYWRlZE1ldGFEYXRhID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIWlzSFRNTE9iamVjdCkge1xyXG4gICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaXNMb2FkZWRNZXRhRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaXNMb2FkZWRNZXRhRGF0YSA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0U3JjT2JqZWN0KG1lZGlhU3RyZWFtLCB2aWRlbyk7XHJcblxyXG4gICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbGFzdEFuaW1hdGlvbkZyYW1lID0gbnVsbDtcclxuICAgIHZhciBzdGFydFRpbWUsIGVuZFRpbWUsIGxhc3RGcmFtZVRpbWU7XHJcblxyXG4gICAgdmFyIGdpZkVuY29kZXI7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5HaWZSZWNvcmRlciA9IEdpZlJlY29yZGVyO1xyXG59XG5cclxuLy8gTGFzdCB0aW1lIHVwZGF0ZWQ6IDIwMTgtMDMtMDIgMjo1NjoyOCBBTSBVVENcclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBNdWx0aVN0cmVhbXNNaXhlciB2MS4wLjVcclxuXHJcbi8vIE9wZW4tU291cmNlZDogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9NdWx0aVN0cmVhbXNNaXhlclxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTXVheiBLaGFuICAgICAtIHd3dy5NdWF6S2hhbi5jb21cclxuLy8gTUlUIExpY2Vuc2UgICAtIHd3dy5XZWJSVEMtRXhwZXJpbWVudC5jb20vbGljZW5jZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gTXVsdGlTdHJlYW1zTWl4ZXIoYXJyYXlPZk1lZGlhU3RyZWFtcykge1xyXG5cclxuICAgIC8vIHJlcXVpcmVzOiBjaHJvbWU6Ly9mbGFncy8jZW5hYmxlLWV4cGVyaW1lbnRhbC13ZWItcGxhdGZvcm0tZmVhdHVyZXNcclxuXHJcbiAgICB2YXIgdmlkZW9zID0gW107XHJcbiAgICB2YXIgaXNTdG9wRHJhd2luZ0ZyYW1lcyA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXMuc3R5bGUgPSAnb3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTE7dG9wOiAtMTAwMDAwMDAwO2xlZnQ6LTEwMDAwMDAwMDA7IG1hcmdpbi10b3A6LTEwMDAwMDAwMDA7bWFyZ2luLWxlZnQ6LTEwMDAwMDAwMDA7JztcclxuICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICB0aGlzLmRpc2FibGVMb2dzID0gZmFsc2U7XHJcbiAgICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gMzYwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAyNDA7XHJcblxyXG4gICAgLy8gdXNlIGdhaW4gbm9kZSB0byBwcmV2ZW50IGVjaG9cclxuICAgIHRoaXMudXNlR2Fpbk5vZGUgPSB0cnVlO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG4gICAgLy8gQ3Jvc3MtQnJvd3Nlci1EZWNsYXJhdGlvbnMuanNcclxuXHJcbiAgICAvLyBXZWJBdWRpbyBBUEkgcmVwcmVzZW50ZXJcclxuICAgIHZhciBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0O1xyXG5cclxuICAgIGlmICh0eXBlb2YgQXVkaW9Db250ZXh0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvKmdsb2JhbCBBdWRpb0NvbnRleHQ6dHJ1ZSAqL1xyXG4gICAgICAgICAgICBBdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1vekF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICAgICAgQXVkaW9Db250ZXh0ID0gbW96QXVkaW9Db250ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKmpzaGludCAtVzA3OSAqL1xyXG4gICAgdmFyIFVSTCA9IHdpbmRvdy5VUkw7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBVUkwgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgVVJMOnRydWUgKi9cclxuICAgICAgICBVUkwgPSB3ZWJraXRVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID09PSAndW5kZWZpbmVkJykgeyAvLyBtYXliZSB3aW5kb3cubmF2aWdhdG9yP1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgTWVkaWFTdHJlYW0gPSB3aW5kb3cuTWVkaWFTdHJlYW07XHJcblxyXG4gICAgaWYgKHR5cGVvZiBNZWRpYVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdlYmtpdE1lZGlhU3RyZWFtICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIE1lZGlhU3RyZWFtID0gd2Via2l0TWVkaWFTdHJlYW07XHJcbiAgICB9XHJcblxyXG4gICAgLypnbG9iYWwgTWVkaWFTdHJlYW06dHJ1ZSAqL1xyXG4gICAgaWYgKHR5cGVvZiBNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZiAoISgnZ2V0VmlkZW9UcmFja3MnIGluIE1lZGlhU3RyZWFtLnByb3RvdHlwZSkpIHtcclxuICAgICAgICAgICAgTWVkaWFTdHJlYW0ucHJvdG90eXBlLmdldFZpZGVvVHJhY2tzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VHJhY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0cmFja3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2sua2luZC50b1N0cmluZygpLmluZGV4T2YoJ3ZpZGVvJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFja3M7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBNZWRpYVN0cmVhbS5wcm90b3R5cGUuZ2V0QXVkaW9UcmFja3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRUcmFja3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRyYWNrcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFja3MuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0cmFjay5raW5kLnRvU3RyaW5nKCkuaW5kZXhPZignYXVkaW8nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2godHJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNrcztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG92ZXJyaWRlIFwic3RvcFwiIG1ldGhvZCBmb3IgYWxsIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVN0cmVhbS5wcm90b3R5cGUuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgTWVkaWFTdHJlYW0ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgU3RvcmFnZSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gQXVkaW9Db250ZXh0O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0QXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQsIGlnbm9yZUNyZWF0ZU9iamVjdFVSTCkge1xyXG4gICAgICAgIGlmICgnY3JlYXRlT2JqZWN0VVJMJyBpbiBVUkwgJiYgIWlnbm9yZUNyZWF0ZU9iamVjdFVSTCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHNldFNyY09iamVjdChzdHJlYW0sIGVsZW1lbnQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgnc3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21velNyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm1velNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnY3JlYXRlT2JqZWN0VVJML3NyY09iamVjdCBib3RoIGFyZSBub3Qgc3VwcG9ydGVkLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0RHJhd2luZ0ZyYW1lcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRyYXdWaWRlb3NUb0NhbnZhcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3VmlkZW9zVG9DYW52YXMoKSB7XHJcbiAgICAgICAgaWYgKGlzU3RvcERyYXdpbmdGcmFtZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZpZGVvc0xlbmd0aCA9IHZpZGVvcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHZhciBmdWxsY2FudmFzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IFtdO1xyXG4gICAgICAgIHZpZGVvcy5mb3JFYWNoKGZ1bmN0aW9uKHZpZGVvKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlkZW8uc3RyZWFtKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5zdHJlYW0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZpZGVvLnN0cmVhbS5mdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBmdWxsY2FudmFzID0gdmlkZW87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5pbmcucHVzaCh2aWRlbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZ1bGxjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gZnVsbGNhbnZhcy5zdHJlYW0ud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBmdWxsY2FudmFzLnN0cmVhbS5oZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZW1haW5pbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvc0xlbmd0aCA+IDEgPyByZW1haW5pbmdbMF0ud2lkdGggKiAyIDogcmVtYWluaW5nWzBdLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IDE7XHJcbiAgICAgICAgICAgIGlmICh2aWRlb3NMZW5ndGggPT09IDMgfHwgdmlkZW9zTGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWRlb3NMZW5ndGggPT09IDUgfHwgdmlkZW9zTGVuZ3RoID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWRlb3NMZW5ndGggPT09IDcgfHwgdmlkZW9zTGVuZ3RoID09PSA4KSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWRlb3NMZW5ndGggPT09IDkgfHwgdmlkZW9zTGVuZ3RoID09PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcmVtYWluaW5nWzBdLmhlaWdodCAqIGhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBzZWxmLndpZHRoIHx8IDM2MDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNlbGYuaGVpZ2h0IHx8IDI0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmdWxsY2FudmFzICYmIGZ1bGxjYW52YXMgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGRyYXdJbWFnZShmdWxsY2FudmFzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbWFpbmluZy5mb3JFYWNoKGZ1bmN0aW9uKHZpZGVvLCBpZHgpIHtcclxuICAgICAgICAgICAgZHJhd0ltYWdlKHZpZGVvLCBpZHgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGRyYXdWaWRlb3NUb0NhbnZhcywgc2VsZi5mcmFtZUludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3SW1hZ2UodmlkZW8sIGlkeCkge1xyXG4gICAgICAgIGlmIChpc1N0b3BEcmF3aW5nRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB4ID0gMDtcclxuICAgICAgICB2YXIgeSA9IDA7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHZpZGVvLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMSkge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSAzKSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby53aWR0aDtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDQpIHtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodCAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSA1KSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby53aWR0aDtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLmhlaWdodCAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSA2KSB7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNykge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlby5zdHJlYW0ubGVmdCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLnN0cmVhbS5sZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlby5zdHJlYW0udG9wICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uc3RyZWFtLnRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLndpZHRoICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB3aWR0aCA9IHZpZGVvLnN0cmVhbS53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gdmlkZW8uc3RyZWFtLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2aWRlby5zdHJlYW0ub25SZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmlkZW8uc3RyZWFtLm9uUmVuZGVyKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGlkeCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1peGVkU3RyZWFtKCkge1xyXG4gICAgICAgIGlzU3RvcERyYXdpbmdGcmFtZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWl4ZWRWaWRlb1N0cmVhbSA9IGdldE1peGVkVmlkZW9TdHJlYW0oKTtcclxuXHJcbiAgICAgICAgdmFyIG1peGVkQXVkaW9TdHJlYW0gPSBnZXRNaXhlZEF1ZGlvU3RyZWFtKCk7XHJcbiAgICAgICAgaWYgKG1peGVkQXVkaW9TdHJlYW0pIHtcclxuICAgICAgICAgICAgbWl4ZWRBdWRpb1N0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgIG1peGVkVmlkZW9TdHJlYW0uYWRkVHJhY2sodHJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmdWxsY2FudmFzO1xyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5mdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBmdWxsY2FudmFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWl4ZWRWaWRlb1N0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZFZpZGVvU3RyZWFtKCkge1xyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKCk7XHJcblxyXG4gICAgICAgIHZhciBjYXB0dXJlZFN0cmVhbTtcclxuXHJcbiAgICAgICAgaWYgKCdjYXB0dXJlU3RyZWFtJyBpbiBjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FwdHVyZWRTdHJlYW0gPSBjYW52YXMuY2FwdHVyZVN0cmVhbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21vekNhcHR1cmVTdHJlYW0nIGluIGNhbnZhcykge1xyXG4gICAgICAgICAgICBjYXB0dXJlZFN0cmVhbSA9IGNhbnZhcy5tb3pDYXB0dXJlU3RyZWFtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc2VsZi5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVcGdyYWRlIHRvIGxhdGVzdCBDaHJvbWUgb3Igb3RoZXJ3aXNlIGVuYWJsZSB0aGlzIGZsYWc6IGNocm9tZTovL2ZsYWdzLyNlbmFibGUtZXhwZXJpbWVudGFsLXdlYi1wbGF0Zm9ybS1mZWF0dXJlcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZpZGVvU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIGNhcHR1cmVkU3RyZWFtLmdldFZpZGVvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICB2aWRlb1N0cmVhbS5hZGRUcmFjayh0cmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbnZhcy5zdHJlYW0gPSB2aWRlb1N0cmVhbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvU3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1peGVkQXVkaW9TdHJlYW0oKSB7XHJcbiAgICAgICAgLy8gdmlhOiBAcGVocnNvbnNcclxuICAgICAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG5ldyBTdG9yYWdlLkF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBzZWxmLmF1ZGlvU291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi51c2VHYWluTm9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmNvbm5lY3Qoc2VsZi5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwOyAvLyBkb24ndCBoZWFyIHNlbGZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdWRpb1RyYWNrc0xlbmd0aCA9IDA7XHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdWRpb1RyYWNrc0xlbmd0aCsrO1xyXG5cclxuICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnVzZUdhaW5Ob2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHNlbGYuZ2Fpbk5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5wdXNoKGF1ZGlvU291cmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhdWRpb1RyYWNrc0xlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLmF1ZGlvRGVzdGluYXRpb24gPSBzZWxmLmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKCk7XHJcbiAgICAgICAgc2VsZi5hdWRpb1NvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihhdWRpb1NvdXJjZSkge1xyXG4gICAgICAgICAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHNlbGYuYXVkaW9EZXN0aW5hdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuYXVkaW9EZXN0aW5hdGlvbi5zdHJlYW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VmlkZW8oc3RyZWFtKSB7XHJcbiAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuXHJcbiAgICAgICAgc2V0U3JjT2JqZWN0KHN0cmVhbSwgdmlkZW8pO1xyXG5cclxuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgdmlkZW8udm9sdW1lID0gMDtcclxuXHJcbiAgICAgICAgdmlkZW8ud2lkdGggPSBzdHJlYW0ud2lkdGggfHwgc2VsZi53aWR0aCB8fCAzNjA7XHJcbiAgICAgICAgdmlkZW8uaGVpZ2h0ID0gc3RyZWFtLmhlaWdodCB8fCBzZWxmLmhlaWdodCB8fCAyNDA7XHJcblxyXG4gICAgICAgIHZpZGVvLnBsYXkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwZW5kU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoIXN0cmVhbXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ0ZpcnN0IHBhcmFtZXRlciBpcyByZXF1aXJlZC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEoc3RyZWFtcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBzdHJlYW1zID0gW3N0cmVhbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5jb25jYXQoc3RyZWFtcyk7XHJcblxyXG4gICAgICAgIHN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvID0gZ2V0VmlkZW8oc3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHZpZGVvcy5wdXNoKHZpZGVvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCAmJiBzZWxmLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3Qoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLnB1c2goYXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVsZWFzZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb3MgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nRnJhbWVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuZ2Fpbk5vZGUpIHtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuZ2Fpbk5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuYXVkaW9Tb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbi5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuYXVkaW9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhcy5zdHJlYW0pIHtcclxuICAgICAgICAgICAgY2FudmFzLnN0cmVhbS5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHJlYW0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZXNldFZpZGVvU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoc3RyZWFtcyAmJiAhKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFZpZGVvU3RyZWFtcyhzdHJlYW1zKSB7XHJcbiAgICAgICAgdmlkZW9zID0gW107XHJcbiAgICAgICAgc3RyZWFtcyA9IHN0cmVhbXMgfHwgYXJyYXlPZk1lZGlhU3RyZWFtcztcclxuXHJcbiAgICAgICAgLy8gdmlhOiBAYWRyaWFuLWJlclxyXG4gICAgICAgIHN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHZpZGVvID0gZ2V0VmlkZW8oc3RyZWFtKTtcclxuICAgICAgICAgICAgdmlkZW8uc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICB2aWRlb3MucHVzaCh2aWRlbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ011bHRpU3RyZWFtc01peGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldE1peGVkU3RyZWFtID0gZ2V0TWl4ZWRTdHJlYW07XHJcblxyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBNdWx0aVN0cmVhbVJlY29yZGVyLmpzXHJcblxyXG4vKlxyXG4gKiBWaWRlbyBjb25mZXJlbmNlIHJlY29yZGluZywgdXNpbmcgY2FwdHVyZVN0cmVhbSBBUEkgYWxvbmcgd2l0aCBXZWJBdWRpbyBhbmQgQ2FudmFzMkQgQVBJLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBNdWx0aVN0cmVhbVJlY29yZGVyIGNhbiByZWNvcmQgbXVsdGlwbGUgdmlkZW9zIGluIHNpbmdsZSBjb250YWluZXIuXHJcbiAqIEBzdW1tYXJ5IE11bHRpLXZpZGVvcyByZWNvcmRlci5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBvcHRpb25zID0ge1xyXG4gKiAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gKiB9XHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBNdWx0aVN0cmVhbVJlY29yZGVyKEFycmF5T2ZNZWRpYVN0cmVhbXMsIG9wdGlvbnMpO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKlxyXG4gKiAgICAgLy8gb3JcclxuICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbXN9IG1lZGlhU3RyZWFtcyAtIEFycmF5IG9mIE1lZGlhU3RyZWFtcy5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczp0cnVlLCBmcmFtZUludGVydmFsOiAxLCBtaW1lVHlwZTogXCJ2aWRlby93ZWJtXCJ9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gTXVsdGlTdHJlYW1SZWNvcmRlcihhcnJheU9mTWVkaWFTdHJlYW1zLCBvcHRpb25zKSB7XHJcbiAgICBhcnJheU9mTWVkaWFTdHJlYW1zID0gYXJyYXlPZk1lZGlhU3RyZWFtcyB8fCBbXTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB2YXIgbWl4ZXI7XHJcbiAgICB2YXIgbWVkaWFSZWNvcmRlcjtcclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7XHJcbiAgICAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJyxcclxuICAgICAgICB2aWRlbzoge1xyXG4gICAgICAgICAgICB3aWR0aDogMzYwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0MFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgICBvcHRpb25zLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wdGlvbnMudmlkZW8pIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnZpZGVvLndpZHRoKSB7XHJcbiAgICAgICAgb3B0aW9ucy52aWRlby53aWR0aCA9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wdGlvbnMudmlkZW8uaGVpZ2h0KSB7XHJcbiAgICAgICAgb3B0aW9ucy52aWRlby5oZWlnaHQgPSAyNDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNvcmRzIGFsbCBNZWRpYVN0cmVhbXMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGdpdGh1Yi9tdWF6LWtoYW4vTXVsdGlTdHJlYW1zTWl4ZXJcclxuICAgICAgICBtaXhlciA9IG5ldyBNdWx0aVN0cmVhbXNNaXhlcihhcnJheU9mTWVkaWFTdHJlYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKGdldFZpZGVvVHJhY2tzKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1peGVyLmZyYW1lSW50ZXJ2YWwgPSBvcHRpb25zLmZyYW1lSW50ZXJ2YWwgfHwgMTA7XHJcbiAgICAgICAgICAgIG1peGVyLndpZHRoID0gb3B0aW9ucy52aWRlby53aWR0aCB8fCAzNjA7XHJcbiAgICAgICAgICAgIG1peGVyLmhlaWdodCA9IG9wdGlvbnMudmlkZW8uaGVpZ2h0IHx8IDI0MDtcclxuICAgICAgICAgICAgbWl4ZXIuc3RhcnREcmF3aW5nRnJhbWVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5wcmV2aWV3U3RyZWFtICYmIHR5cGVvZiBvcHRpb25zLnByZXZpZXdTdHJlYW0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wcmV2aWV3U3RyZWFtKG1peGVyLmdldE1peGVkU3RyZWFtKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVjb3JkIHVzaW5nIE1lZGlhUmVjb3JkZXIgQVBJXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVN0cmVhbVJlY29yZGVyKG1peGVyLmdldE1peGVkU3RyZWFtKCksIG9wdGlvbnMpO1xyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZGVvVHJhY2tzKCkge1xyXG4gICAgICAgIHZhciB0cmFja3MgPSBbXTtcclxuICAgICAgICBhcnJheU9mTWVkaWFTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRyYWNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYmxvYiA9IGJsb2I7XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhibG9iKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaXhlcikge1xyXG4gICAgICAgICAgICBtaXhlci5yZWxlYXNlU3RyZWFtcygpO1xyXG4gICAgICAgICAgICBtaXhlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBleHRyYSBtZWRpYS1zdHJlYW1zIHRvIGV4aXN0aW5nIHJlY29yZGluZ3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbXN9IG1lZGlhU3RyZWFtcyAtIEFycmF5IG9mIE1lZGlhU3RyZWFtc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmFkZFN0cmVhbXMoW25ld0F1ZGlvU3RyZWFtLCBuZXdWaWRlb1N0cmVhbV0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmFkZFN0cmVhbXMgPSBmdW5jdGlvbihzdHJlYW1zKSB7XHJcbiAgICAgICAgaWYgKCFzdHJlYW1zKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdGaXJzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuY29uY2F0KHN0cmVhbXMpO1xyXG5cclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIgfHwgIW1peGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1peGVyLmFwcGVuZFN0cmVhbXMoc3RyZWFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdmlkZW9zIGR1cmluZyBsaXZlIHJlY29yZGluZy4gUmVwbGFjZSBvbGQgdmlkZW9zIGUuZy4gcmVwbGFjZSBjYW1lcmFzIHdpdGggZnVsbC1zY3JlZW4uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbXN9IG1lZGlhU3RyZWFtcyAtIEFycmF5IG9mIE1lZGlhU3RyZWFtc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc2V0VmlkZW9TdHJlYW1zKFtuZXdWaWRlbzEsIG5ld1ZpZGVvMl0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc2V0VmlkZW9TdHJlYW1zID0gZnVuY3Rpb24oc3RyZWFtcykge1xyXG4gICAgICAgIGlmICghbWl4ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0cmVhbXMgJiYgIShzdHJlYW1zIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhlci5yZXNldFZpZGVvU3RyZWFtcyhzdHJlYW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ011bHRpU3RyZWFtUmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5NdWx0aVN0cmVhbVJlY29yZGVyID0gTXVsdGlTdHJlYW1SZWNvcmRlcjtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBSZWNvcmRSVEMucHJvbWlzZXMuanNcclxuXHJcbi8qKlxyXG4gKiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIgYWRkcyBwcm9taXNlcyBzdXBwb3J0IGluIHtAbGluayBSZWNvcmRSVEN9LiBUcnkgYSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMvYmxvYi9tYXN0ZXIvc2ltcGxlLWRlbW9zL1JlY29yZFJUQ1Byb21pc2VzSGFuZGxlci5odG1sfGRlbW8gaGVyZX1cclxuICogQHN1bW1hcnkgUHJvbWlzZXMgZm9yIHtAbGluayBSZWNvcmRSVEN9XHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIobWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG4gKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpXHJcbiAqICAgICAgICAgLnRoZW4oc3VjY2Vzc0NCKVxyXG4gKiAgICAgICAgIC5jYXRjaChlcnJvckNCKTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIFNpbmdsZSBtZWRpYS1zdHJlYW0gb2JqZWN0LCBhcnJheSBvZiBtZWRpYS1zdHJlYW1zLCBodG1sLWNhbnZhcy1lbGVtZW50LCBldGMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7dHlwZTpcInZpZGVvXCIsIHJlY29yZGVyVHlwZTogTWVkaWFTdHJlYW1SZWNvcmRlciwgZGlzYWJsZUxvZ3M6IHRydWUsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgYnVmZmVyU2l6ZTogMCwgc2FtcGxlUmF0ZTogMCwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiBcIm5ld1wiIGtleXdvcmQgaXMgbm90IHVzZWQgdG8gaW5pdGlhdGUgXCJSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcIi4gQWxzbyB0aHJvd3MgZXJyb3IgaWYgZmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIG1pc3NpbmcuXHJcbiAqIEByZXF1aXJlcyB7QGxpbmsgUmVjb3JkUlRDfVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlcihtZWRpYVN0cmVhbSwgb3B0aW9ucykge1xyXG4gICAgaWYgKCF0aGlzKSB7XHJcbiAgICAgICAgdGhyb3cgJ1VzZSBcIm5ldyBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIoKVwiJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG1lZGlhU3RyZWFtID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93ICdGaXJzdCBhcmd1bWVudCBcIk1lZGlhU3RyZWFtXCIgaXMgcmVxdWlyZWQuJztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBBY2Nlc3MvcmVhY2ggdGhlIG5hdGl2ZSB7QGxpbmsgUmVjb3JkUlRDfSBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIGludGVybmFsID0gcmVjb3JkZXIucmVjb3JkUlRDLmdldEludGVybmFsUmVjb3JkZXIoKTtcclxuICAgICAqIGFsZXJ0KGludGVybmFsIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlcik7XHJcbiAgICAgKi9cclxuICAgIHNlbGYucmVjb3JkUlRDID0gbmV3IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNvcmRzIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKClcclxuICAgICAqICAgICAgICAgLnRoZW4oc3VjY2Vzc0NCKVxyXG4gICAgICogICAgICAgICAuY2F0Y2goZXJyb3JDQik7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnRSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuZ2V0QmxvYigpO1xyXG4gICAgICogfSkuY2F0Y2goZXJyb3JDQik7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcFJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkUlRDLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ibG9iID0gc2VsZi5yZWNvcmRSVEMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXJsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGRhdGEtdXJsIGZvciB0aGUgcmVjb3JkZWQgYmxvYi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICByZWNvcmRlci5nZXREYXRhVVJMKCkudGhlbihmdW5jdGlvbihkYXRhVVJMKSB7XHJcbiAgICAgKiAgICAgICAgIHdpbmRvdy5vcGVuKGRhdGFVUkwpO1xyXG4gICAgICogICAgIH0pLmNhdGNoKGVycm9yQ0IpOztcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldERhdGFVUkwgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkUlRDLmdldERhdGFVUkwoZnVuY3Rpb24oZGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YVVSTCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgcmVjb3JkZWQgYmxvYi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEJsb2IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5yZWNvcmRSVEMuZ2V0QmxvYigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIGRhdGEgYXMgXCJCbG9iXCIgb2JqZWN0LlxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuZ2V0QmxvYigpO1xyXG4gICAgICogfSkuY2F0Y2goZXJyb3JDQik7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLlJlY29yZFJUQ1Byb21pc2VzSGFuZGxlciA9IFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlcjtcclxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVjb3JkcnRjL1JlY29yZFJUQy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9