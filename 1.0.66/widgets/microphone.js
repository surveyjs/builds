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

// Last time updated: 2019-01-20 9:21:50 AM UTC

// ________________
// RecordRTC v5.5.3

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
                var url;

                try {
                    url = URL.createObjectURL(blob);
                } catch (e) {}

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
            try {
                var blob = URL.createObjectURL(new Blob([_function.toString(),
                    'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
                ], {
                    type: 'application/javascript'
                }));

                var worker = new Worker(blob);
                URL.revokeObjectURL(blob);
                return worker;
            } catch (e) {}
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
        version: '5.5.3'
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

RecordRTC.version = '5.5.3';

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
        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || (typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder)) {
            config.type = 'video';
        } else if (config.recorderType === GifRecorder) {
            config.type = 'gif';
        } else if (config.recorderType === StereoAudioRecorder) {
            config.type = 'audio';
        } else if (config.recorderType === MediaStreamRecorder) {
            if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
                config.type = 'video';
            } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
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

        if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
            recorder = WebAssemblyRecorder;
        }
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
        if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
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

    if (!recorder && isSafari) {
        recorder = MediaStreamRecorder;
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
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
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
     *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
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

        if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
            mediaType.audio = false;
        }

        if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
            mediaType.video = false;
        }

        if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
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
                var videoTrack = getTracks(mediaStream, 'video')[0];

                if (isFirefox) {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);

                    if (recorderType && recorderType === WhammyRecorder) {
                        // Firefox does NOT supports webp-encoding yet
                        // But Firefox do supports WebAssemblyRecorder
                        recorderType = MediaStreamRecorder;
                    }
                } else {
                    newStream = new MediaStream();
                    newStream.addTrack(videoTrack);
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
                onTimeStamp: this.onTimeStamp,
                workerPath: this.workerPath,
                webAssemblyPath: this.webAssemblyPath,
                frameRate: this.frameRate, // used by WebAssemblyRecorder; values: usually 30; accepts any.
                bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+
            });

            if (!mediaType.audio) {
                this.videoRecorder.startRecording();
            }
        }

        if (!!mediaType.audio && !!mediaType.video) {
            var self = this;

            var isSingleRecorder = isMediaRecorderCompatible() === true;

            if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
                isSingleRecorder = false;
            } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
                isSingleRecorder = false;
            }

            if (isSingleRecorder === true) {
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
                'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
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
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && ('netscape' in window) && / rv:/.test(navigator.userAgent);
var isChrome = (!isOpera && !isEdge && !!navigator.webkitGetUserMedia) || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
    isSafari = false;
    isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
}

/*global MediaStream:true */
if (typeof MediaStream !== 'undefined') {
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
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
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

function getTracks(stream, kind) {
    if (!stream || !stream.getTracks) {
        return [];
    }

    return stream.getTracks().filter(function(t) {
        return t.kind === (kind || 'audio');
    });
}

function setSrcObject(stream, element) {
    if ('srcObject' in element) {
        element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
        element.mozSrcObject = stream;
    } else {
        element.srcObject = stream;
    }
}

/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */
function getSeekableBlob(inputBlob, callback) {
    // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
    if (typeof EBML === 'undefined') {
        throw new Error('Please link: https://cdn.webrtc-experiment.com/EBML.js');
    }

    var reader = new EBML.Reader();
    var decoder = new EBML.Decoder();
    var tools = EBML.tools;

    var fileReader = new FileReader();
    fileReader.onload = function(e) {
        var ebmlElms = decoder.decode(this.result);
        ebmlElms.forEach(function(element) {
            reader.read(element);
        });
        reader.stop();
        var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
        var body = this.result.slice(reader.metadataSize);
        var newBlob = new Blob([refinedMetadataBuf, body], {
            type: 'video/webm'
        });

        callback(newBlob);
    };
    fileReader.readAsArrayBuffer(inputBlob);
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
    if (isFirefox || isSafari || isEdge) {
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
        if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
            var stream;
            if (!!navigator.mozGetUserMedia) {
                stream = new MediaStream();
                stream.addTrack(getTracks(mediaStream, 'audio')[0]);
            } else {
                // webkitMediaStream
                stream = new MediaStream(getTracks(mediaStream, 'audio'));
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
            if (!error) {
                return;
            }

            if (!error.name) {
                error.name = 'UnknownError';
            }

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
    if (!getTracks(mediaStream, 'audio').length) {
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
        console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
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
            // changed "44" to "36" via #401
            view.setUint32(4, 36 + interleavedLength * 2, true);

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

        if (config.noWorker) {
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

            // kill webworker (or Chrome will kill your page after ~25 calls)
            webWorker.terminate();
        };

        webWorker.postMessage(config);
    }

    function processInWebWorker(_function) {
        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
            ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
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
            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
            noWorker: config.noWorker
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

    if (typeof Storage === 'undefined') {
        var Storage = {
            AudioContextConstructor: null,
            AudioContext: window.AudioContext || window.webkitAudioContext
        };
    }

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
            console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
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
            console.log('sample-rate must be under range 22050 and 96000.');
        }
    }

    if (!config.disableLogs) {
        if (config.desiredSampRate) {
            console.log('Desired sample-rate: ' + config.desiredSampRate);
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
    if (context.createMediaStreamDestination) {
        jsAudioNode.connect(context.createMediaStreamDestination());
    } else {
        jsAudioNode.connect(context.destination);
    }

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
                mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
                canvasMediaStream = mdStream;
            } catch (e) {}

            if (!canvasMediaStream) {
                throw 'captureStream API are NOT available.';
            }

            // Note: Jan 18, 2016 status is that, 
            // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.
            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
                mimeType: config.mimeType || 'video/webm'
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
            'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'
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

// Last time updated: 2018-12-22 9:13:29 AM UTC

// ________________________
// MultiStreamsMixer v1.0.7

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

    function setSrcObject(stream, element) {
        if ('srcObject' in element) {
            element.srcObject = stream;
        } else if ('mozSrcObject' in element) {
            element.mozSrcObject = stream;
        } else {
            element.srcObject = stream;
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
            mixedAudioStream.getTracks().filter(function(t) {
                return t.kind === 'audio';
            }).forEach(function(track) {
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

        capturedStream.getTracks().filter(function(t) {
            return t.kind === 'video';
        }).forEach(function(track) {
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
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length) {
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
            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
                var video = getVideo(stream);
                video.stream = stream;
                videos.push(video);
            }

            if (stream.getTracks().filter(function(t) {
                    return t.kind === 'audio';
                }).length && self.audioContext) {
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
            if (!stream.getTracks().filter(function(t) {
                    return t.kind === 'video';
                }).length) {
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

        if (getAllVideoTracks().length) {
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

    function getAllVideoTracks() {
        var tracks = [];
        arrayOfMediaStreams.forEach(function(stream) {
            getTracks(stream, 'video').forEach(function(track) {
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

                    if (!self.blob || !self.blob.size) {
                        reject('Empty blob.', self.blob);
                        return;
                    }

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
     *     recorder.getBlob().then(function(blob) {})
     * }).catch(errorCB);
     */
    this.getBlob = function() {
        return new Promise(function(resolve, reject) {
            try {
                resolve(self.recordRTC.getBlob());
            } catch (e) {
                reject(e);
            }
        });
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

// ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
 * @author {@link http://www.MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024}
 */
function WebAssemblyRecorder(stream, config) {
    // based on: github.com/GoogleChromeLabs/webm-wasm

    if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
        // because it fixes readable/writable streams issues
        console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
    }

    config = config || {};

    config.width = config.width || 640;
    config.height = config.height || 480;
    config.frameRate = config.frameRate || 30;
    config.bitrate = config.bitrate || 1200;

    function createBufferURL(buffer, type) {
        return URL.createObjectURL(new Blob([buffer], {
            type: type || ''
        }));
    }

    function cameraStream() {
        return new ReadableStream({
            start: function(controller) {
                var cvs = document.createElement('canvas');
                var video = document.createElement('video');
                video.srcObject = stream;
                video.onplaying = function() {
                    cvs.width = config.width;
                    cvs.height = config.height;
                    var ctx = cvs.getContext('2d');
                    var frameTimeout = 1000 / config.frameRate;
                    setTimeout(function f() {
                        ctx.drawImage(video, 0, 0);
                        controller.enqueue(
                            ctx.getImageData(0, 0, config.width, config.height)
                        );
                        setTimeout(f, frameTimeout);
                    }, frameTimeout);
                };
                video.play();
            }
        });
    }

    var worker;

    function startRecording(stream, buffer) {
        if (!config.workerPath && !buffer) {
            // is it safe to use @latest ?
            fetch(
                'https://unpkg.com/webm-wasm@latest/dist/webm-worker.js'
            ).then(function(r) {
                r.arrayBuffer().then(function(buffer) {
                    startRecording(stream, buffer);
                });
            });
            return;
        }

        if (!config.workerPath && buffer instanceof ArrayBuffer) {
            var blob = new Blob([buffer], {
                type: 'text/javascript'
            });
            config.workerPath = URL.createObjectURL(blob);
        }

        if (!config.workerPath) {
            console.error('workerPath parameter is missing.');
        }

        worker = new Worker(config.workerPath);

        worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
        worker.addEventListener('message', function(event) {
            if (event.data === 'READY') {
                worker.postMessage({
                    width: config.width,
                    height: config.height,
                    bitrate: config.bitrate || 1200,
                    timebaseDen: config.frameRate || 30,
                    realtime: true
                });

                cameraStream().pipeTo(new WritableStream({
                    write: function(image) {
                        if (!worker) {
                            return;
                        }

                        worker.postMessage(image.data.buffer, [image.data.buffer]);
                    }
                }));
            } else if (!!event.data) {
                if (!isPaused) {
                    arrayOfBuffers.push(event.data);
                }
            }
        });
    }

    /**
     * This method records video.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.record();
     */
    this.record = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;
        startRecording(stream);

        if (typeof config.initCallback === 'function') {
            config.initCallback();
        }
    };

    var isPaused;

    /**
     * This method pauses the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.pause();
     */
    this.pause = function() {
        isPaused = true;
    };

    /**
     * This method resumes the recording process.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.resume();
     */
    this.resume = function() {
        isPaused = false;
    };

    function terminate() {
        if (!worker) {
            return;
        }

        worker.postMessage(null);
        worker.terminate();
        worker = null;
    }

    var arrayOfBuffers = [];

    /**
     * This method stops recording video.
     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(blob) {
     *     video.src = URL.createObjectURL(blob);
     * });
     */
    this.stop = function(callback) {
        terminate();

        this.blob = new Blob(arrayOfBuffers, {
            type: 'video/webm'
        });

        callback(this.blob);
    };

    // for debugging
    this.name = 'WebAssemblyRecorder';
    this.toString = function() {
        return this.name;
    };

    /**
     * This method resets currently recorded data.
     * @method
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.clearRecordedData();
     */
    this.clearRecordedData = function() {
        arrayOfBuffers = [];
        isPaused = false;
        this.blob = null;

        // todo: if recording-ON then STOP it first
    };

    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof WebAssemblyRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */
    this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
    RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYWMxYTQ5NjJmMjdiNTZhMmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvbWljcm9waG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb3JkcnRjL1JlY29yZFJUQy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osYUFBYTtBQUNiLGVBQWU7QUFDZiw0Q0FBNEM7QUFDNUMs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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7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QUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQixXQUFXLGdCQUFnQixpQkFBaUIsd0JBQXdCLHdCQUF3QjtBQUM1STs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixTQUFTO0FBQ1QsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTyxXQUFXO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLEtBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDL3RMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJ3aWRnZXRzL21pY3JvcGhvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndpZGdldHMvbWljcm9waG9uZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aWRnZXRzL21pY3JvcGhvbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2lkZ2V0cy9taWNyb3Bob25lXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFjMWE0OTYyZjI3YjU2YTJlMTEiLCJpbXBvcnQgUmVjb3JkUlRDIGZyb20gXCJyZWNvcmRydGNcIjtcblxuZnVuY3Rpb24gaW5pdChTdXJ2ZXkpIHtcbiAgdmFyIHdpZGdldCA9IHtcblx0XG4gICAgbmFtZTogXCJtaWNyb3Bob25lXCIsXG4gICAgdGl0bGU6IFwiTWljcm9waG9uZVwiLFxuICAgIGljb25OYW1lOiBcImljb24tbWljcm9waG9uZVwiLFxuICAgIHdpZGdldElzTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgUmVjb3JkUlRDICE9IFwidW5kZWZpbmVkXCI7XG4gICAgfSxcbiAgICBpc0ZpdDogZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgIHJldHVybiBxdWVzdGlvbi5nZXRUeXBlKCkgPT09IFwibWljcm9waG9uZVwiO1xuICAgIH0sXG4gICAgaHRtbFRlbXBsYXRlOlxuXHRcdFwiPGRpdj5cIitcblx0XHRcIjxidXR0b24gdHlwZT0nYnV0dG9uJyAgdGl0bGU9J1JlY29yZCc+PGkgY2xhc3M9J2ZhIGZhLW1pY3JvcGhvbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+PC9idXR0b24+XCIrIFxuXHRcdFwiJm5ic3A7PGJ1dHRvbiB0eXBlPSdidXR0b24nIHRpdGxlPSdTYXZlJz48aSBjbGFzcz0nZmEgZmEtY2xvdWQnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+PC9idXR0b24+XCIrXG5cdFx0XCImbmJzcDs8YXVkaW8gc3R5bGU9J1wiK1xuXHRcdFwicG9zaXRpb246cmVsYXRpdmU7IFwiK1xuXHRcdFwidG9wOjE2cHg7IFwiK1xuXHRcdFwibGVmdDoxMHB4OyBcIitcblx0XHRcImhlaWdodDozNXB4O1wiK1xuXHRcdFwiLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDRweCAwcHggIzAwNjc3MztcIitcblx0XHRcIi13ZWJraXQtYm94LXNoYWRvdzogIDJweCAycHggNHB4IDBweCAjMDA2NzczO1wiK1xuXHRcdFwiYm94LXNoYWRvdzogMnB4IDJweCA0cHggMHB4ICMwMDY3NzM7XCIrXG5cdFx0XCInIFwiK1xuXHRcdFwiY29udHJvbHM9J3RydWUnID5cIitcblx0XHRcIjwvYXVkaW8+XCIrXG5cdFx0XCI8L2Rpdj5cIixcbiAgICBhY3RpdmF0ZWRCeUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2YXRlZEJ5KSB7XG4gICAgICBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1pY3JvcGhvbmVcIiwgW10sIG51bGwsIFwiZW1wdHlcIik7XG4gICAgfSxcblx0XG4gICAgYWZ0ZXJSZW5kZXI6IGZ1bmN0aW9uKHF1ZXN0aW9uLCBlbCkge1xuICAgICAgdmFyIHJvb3RXaWRnZXQgPSB0aGlzO1xuXHQgIHZhciBidXR0b25TdGFydEVsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIilbMF07XG5cdCAgdmFyIGJ1dHRvblN0b3BFbCA9IGVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpWzFdO1xuXHQgIHZhciBhdWRpb0VsID0gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhdWRpb1wiKVswXTtcblx0IFxuLy8vLy8vLy8vLyAgUmVjb3JkUlRDIGxvZ2ljXHRcblx0ICBcblx0ICB2YXIgc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0dmFyIG9wdGlvbnM9e1xuXHRcdFx0dHlwZTogJ2F1ZGlvJyxcblx0XHRcdG1pbWVUeXBlOiAnYXVkaW8vd2VibScsXG5cdFx0XHRhdWRpb0JpdHNQZXJTZWNvbmQ6IDQ0MTAwLFxuXHRcdFx0c2FtcGxlUmF0ZTogNDQxMDAsIFxuXHRcdFx0YnVmZmVyU2l6ZTogMTYzODQsIFxuXHRcdFx0bnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxXG5cdFx0fTsgIFxuXHRcdGNvbnNvbGUubG9nKFwic3VjY2Vzc0NhbGxiYWNrXCIpO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSA9IHN0cmVhbTtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDID0gUmVjb3JkUlRDKHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbSwgb3B0aW9ucyk7XG5cdFx0aWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRjb25zb2xlLmxvZyhcInN0YXJ0UmVjb3JkaW5nXCIpO1xuXHRcdFx0cXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQy5zdGFydFJlY29yZGluZygpO1xuXHRcdH1cblx0ICB9O1xuXG5cdCAgdmFyIGVycm9yQ2FsbGJhY2s9ZnVuY3Rpb24oKSB7XG5cdFx0YWxlcnQoJ05vIG1pY3JvcGhvbmUnKTtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDPXVuZGVmaW5lZDtcblx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW09dW5kZWZpbmVkO1xuXHQgIH07XG5cblx0ICB2YXIgcHJvY2Vzc0F1ZGlvPSBmdW5jdGlvbihhdWRpb1ZpZGVvV2ViTVVSTCkge1xuXHRcdGNvbnNvbGUubG9nKFwicHJvY2Vzc0F1ZGlvXCIpO1xuXHRcdHZhciByZWNvcmRlZEJsb2IgPSBxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLmdldEJsb2IoKTtcblx0XHRcblx0XHR2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpe1xuXHRcdCAgdmFyIGRhdGFVcmkgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXHRcdCAgY29uc29sZS5sb2coXCJkYXRhVXJpOiBcIiArZGF0YVVyaSk7XG5cdFx0ICBxdWVzdGlvbi52YWx1ZSA9IGRhdGFVcmk7XG5cdFx0ICBhdWRpb0VsLnNyYz1kYXRhVXJpO1xuXHRcdCAgXG5cdFx0ICBjb25zb2xlLmxvZyhcImNsZWFuaW5nXCIpO1xuXHRcdCAgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQz11bmRlZmluZWQ7XG5cdFx0ICBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW09dW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwocmVjb3JkZWRCbG9iKTtcblx0ICB9O1xuXG4gICAgICB2YXIgc3RhcnRSZWNvcmRpbmc9ZnVuY3Rpb24oKSB7XG5cdFx0ICBcblx0XHQgLy8gZXJhc2UgcHJldmlvdXMgZGF0YSBcblx0XHQgcXVlc3Rpb24udmFsdWU9dW5kZWZpbmVkO1xuXHRcdFxuICAgICAgIFx0Ly8gaWYgcmVjb3JkZXIgb3BlbiBvbiBhbm90aGVyIHF1ZXN0aW9uXHQtIHRyeSB0byBzdG9wIHJlY29yZGluZ1x0XHRcblx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuc3RvcFJlY29yZGluZyhkb05vdGhpbmdIYW5kbGVyKTtcblx0XHRcdGlmKHR5cGVvZiBxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0gIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcblx0XHRcdFx0dHJhY2suc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFx0IFxuXHRcdHZhciBtZWRpYUNvbnN0cmFpbnRzID0ge1xuXHRcdCAgdmlkZW86IGZhbHNlLFxuXHRcdCAgYXVkaW86IHRydWVcblx0XHR9O1xuXHRcdFxuXHRcdG5hdmlnYXRvci5tZWRpYURldmljZXNcblx0XHRcdC5nZXRVc2VyTWVkaWEobWVkaWFDb25zdHJhaW50cylcblx0XHRcdC50aGVuKHN1Y2Nlc3NDYWxsYmFjay5iaW5kKHRoaXMpLCBlcnJvckNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICB9O1xuXG5cdCAgdmFyIHN0b3BSZWNvcmRpbmc9ZnVuY3Rpb24oKSB7XG5cdFx0ICBjb25zb2xlLmxvZyhcInN0b3BSZWNvcmRpbmdcIik7XG5cdFx0ICBpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5LnJlY29yZFJUQyAhPSBcInVuZGVmaW5lZFwiKXtcblx0XHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMuc3RvcFJlY29yZGluZyhwcm9jZXNzQXVkaW8uYmluZCh0aGlzKSk7XG5cdFx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRcdHRyYWNrLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdCAgfVxuXHQgIH07XG5cdFxuLy8vLy8vLy8vLy8vLy8gIGVuZCBSVEMgbG9naWMgLy8vLy8vLy8vLy8vLy8vLy8vXG5cdCAgXG5cdCAgaWYgKCFxdWVzdGlvbi5pc1JlYWRPbmx5KSB7XG4gICAgICAgIGJ1dHRvblN0YXJ0RWwub25jbGljayA9IHN0YXJ0UmVjb3JkaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uU3RhcnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvblN0YXJ0RWwpO1xuICAgICAgfVxuXHQgIFxuXHQgIGlmICghcXVlc3Rpb24uaXNSZWFkT25seSkge1xuICAgICAgICBidXR0b25TdG9wRWwub25jbGljayA9IHN0b3BSZWNvcmRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25TdG9wRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b25TdG9wRWwpO1xuICAgICAgfVxuXHQgIFxuXHQgIFxuICAgICAgYXVkaW9FbC5zcmM9cXVlc3Rpb24udmFsdWVcbiAgICAgIFxuICAgICAgdmFyIHVwZGF0ZVZhbHVlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgIH07XG5cdCAgXG5cdCAgdmFyIGRvTm90aGluZ0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICB9O1xuXHQgIFxuICAgICAgcXVlc3Rpb24udmFsdWVDaGFuZ2VkQ2FsbGJhY2sgPSB1cGRhdGVWYWx1ZUhhbmRsZXI7XG4gICAgICB1cGRhdGVWYWx1ZUhhbmRsZXIoKTtcblx0ICBcbiAgICAgXG4gICAgfSxcbiAgICB3aWxsVW5tb3VudDogZnVuY3Rpb24ocXVlc3Rpb24sIGVsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVubW91bnQgbWljcm9waG9uZSBubyByZWNvcmQgXCIpO1xuICAgICAgaWYodHlwZW9mIHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEMgIT0gXCJ1bmRlZmluZWRcIil7XG5cdFx0XHRxdWVzdGlvbi5zdXJ2ZXkucmVjb3JkUlRDLnN0b3BSZWNvcmRpbmcoZG9Ob3RoaW5nSGFuZGxlcik7XG5cdFx0XHRpZih0eXBlb2YgcXVlc3Rpb24uc3VydmV5Lm15c3RyZWFtICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHRxdWVzdGlvbi5zdXJ2ZXkubXlzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG5cdFx0XHRcdHRyYWNrLnN0b3AoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0cXVlc3Rpb24udmFsdWU9dW5kZWZpbmVkO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5yZWNvcmRSVEM9dW5kZWZpbmVkO1xuXHRcdHF1ZXN0aW9uLnN1cnZleS5teXN0cmVhbT11bmRlZmluZWQ7XG5cdCAgIH1cbiAgICB9XG4gIH07XG5cbiAgU3VydmV5LkN1c3RvbVdpZGdldENvbGxlY3Rpb24uSW5zdGFuY2UuYWRkQ3VzdG9tV2lkZ2V0KHdpZGdldCwgXCJjdXN0b210eXBlXCIpO1xufVxuXG5pZiAodHlwZW9mIFN1cnZleSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBpbml0KFN1cnZleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9taWNyb3Bob25lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIExhc3QgdGltZSB1cGRhdGVkOiAyMDE5LTAxLTIwIDk6MjE6NTAgQU0gVVRDXHJcblxyXG4vLyBfX19fX19fX19fX19fX19fXHJcbi8vIFJlY29yZFJUQyB2NS41LjNcclxuXHJcbi8vIE9wZW4tU291cmNlZDogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVENcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE11YXogS2hhbiAgICAgLSB3d3cuTXVhektoYW4uY29tXHJcbi8vIE1JVCBMaWNlbnNlICAgLSB3d3cuV2ViUlRDLUV4cGVyaW1lbnQuY29tL2xpY2VuY2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIF9fX19fX19fX19fX1xyXG4vLyBSZWNvcmRSVEMuanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDfSBpcyBhIFdlYlJUQyBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGF1ZGlvL3ZpZGVvIGFzIHdlbGwgYXMgc2NyZWVuIGFjdGl2aXR5IHJlY29yZGluZy4gSXQgc3VwcG9ydHMgQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgQW5kcm9pZCwgYW5kIE1pY3Jvc29mdCBFZGdlLiBQbGF0Zm9ybXM6IExpbnV4LCBNYWMgYW5kIFdpbmRvd3MuIFxyXG4gKiBAc3VtbWFyeSBSZWNvcmQgYXVkaW8sIHZpZGVvIG9yIHNjcmVlbiBpbnNpZGUgdGhlIGJyb3dzZXIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBSZWNvcmRSVENcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IFJlY29yZFJUQyhtZWRpYVN0cmVhbSBvciBbYXJyYXlPZk1lZGlhU3RyZWFtXSwge1xyXG4gKiAgICAgdHlwZTogJ3ZpZGVvJywgLy8gYXVkaW8gb3IgdmlkZW8gb3IgZ2lmIG9yIGNhbnZhc1xyXG4gKiAgICAgcmVjb3JkZXJUeXBlOiBNZWRpYVN0cmVhbVJlY29yZGVyIHx8IENhbnZhc1JlY29yZGVyIHx8IFN0ZXJlb0F1ZGlvUmVjb3JkZXIgfHwgRXRjXHJcbiAqIH0pO1xyXG4gKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gKiBAc2VlIEZvciBmdXJ0aGVyIGluZm9ybWF0aW9uOlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gU2luZ2xlIG1lZGlhLXN0cmVhbSBvYmplY3QsIGFycmF5IG9mIG1lZGlhLXN0cmVhbXMsIGh0bWwtY2FudmFzLWVsZW1lbnQsIGV0Yy5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHt0eXBlOlwidmlkZW9cIiwgcmVjb3JkZXJUeXBlOiBNZWRpYVN0cmVhbVJlY29yZGVyLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCBkZXNpcmVkU2FtcFJhdGU6IDE2MDAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKCFtZWRpYVN0cmVhbSkge1xyXG4gICAgICAgIHRocm93ICdGaXJzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge1xyXG4gICAgICAgIHR5cGU6ICd2aWRlbydcclxuICAgIH07XHJcblxyXG4gICAgY29uZmlnID0gbmV3IFJlY29yZFJUQ0NvbmZpZ3VyYXRpb24obWVkaWFTdHJlYW0sIGNvbmZpZyk7XHJcblxyXG4gICAgLy8gYSByZWZlcmVuY2UgdG8gdXNlcidzIHJlY29yZFJUQyBvYmplY3RcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhjb25maWcyKSB7XHJcbiAgICAgICAgaWYgKCEhY29uZmlnMikge1xyXG4gICAgICAgICAgICAvLyBhbGxvdyB1c2VycyB0byBzZXQgb3B0aW9ucyB1c2luZyBzdGFydFJlY29yZGluZyBtZXRob2RcclxuICAgICAgICAgICAgLy8gY29uZmlnMiBpcyBzaW1pbGFyIHRvIG1haW4gXCJjb25maWdcIiBvYmplY3QgKHNlY29uZCBwYXJhbWV0ZXIgb3ZlciBSZWNvcmRSVEMgY29uc3RydWN0b3IpXHJcbiAgICAgICAgICAgIGNvbmZpZyA9IG5ldyBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBjb25maWcyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGVkIHJlY29yZGluZyAnICsgY29uZmlnLnR5cGUgKyAnIHN0cmVhbS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5yZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVSZWNvcmRpbmdEdXJhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFJlY29yZGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVjb3JkaW5nRHVyYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UmVjb3JkZXIoaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25maWcuaW5pdENhbGxiYWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIGluaXRDYWxsYmFjayA9IGNvbmZpZy5pbml0Q2FsbGJhY2sgPSBudWxsOyAvLyByZWNvcmRlci5pbml0UmVjb3JkZXIgc2hvdWxkIGJlIGNhbGwtYmFja2VkIG9uY2UuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgUmVjb3JkZXIgPSBuZXcgR2V0UmVjb3JkZXJUeXBlKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyID0gbmV3IFJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucmVjb3JkKCk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYWxpemVkIHJlY29yZGVyVHlwZTonLCBtZWRpYVJlY29yZGVyLmNvbnN0cnVjdG9yLm5hbWUsICdmb3Igb3V0cHV0LXR5cGU6JywgY29uZmlnLnR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wUmVjb3JkaW5nKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXN1bWVSZWNvcmRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9wUmVjb3JkaW5nKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncmVjb3JkaW5nJyAmJiAhY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUmVjb3JkaW5nIHN0YXRlIHNob3VsZCBiZTogXCJyZWNvcmRpbmdcIiwgaG93ZXZlciBjdXJyZW50IHN0YXRlIGlzOiAnLCBzZWxmLnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9wcGVkIHJlY29yZGluZyAnICsgY29uZmlnLnR5cGUgKyAnIHN0cmVhbS4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcudHlwZSAhPT0gJ2dpZicpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKF9jYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIF9jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U3RhdGUoJ3N0b3BwZWQnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrKF9fYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2suY2FsbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoc2VsZiwgJycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lZGlhUmVjb3JkZXIpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhUmVjb3JkZXJba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmW2tleV0gPSBtZWRpYVJlY29yZGVyW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBtZWRpYVJlY29yZGVyLmJsb2I7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfX2Jsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmJsb2IgPSBibG9iID0gX19ibG9iO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnUmVjb3JkaW5nIGZhaWxlZC4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmxvYiAmJiAhY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9iLnR5cGUsICctPicsIGJ5dGVzVG9TaXplKGJsb2Iuc2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYsIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmF1dG9Xcml0ZVRvRGlzaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXIgPSB7fTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcltjb25maWcudHlwZSArICdCbG9iJ10gPSBkYXRhVVJMO1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUocGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhdXNlUmVjb3JkaW5nKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB3YXJuaW5nTG9nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxmLnN0YXRlICE9PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gcGF1c2UgdGhlIHJlY29yZGluZy4gUmVjb3JkaW5nIHN0YXRlOiAnLCBzZWxmLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTdGF0ZSgncGF1c2VkJyk7XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhdXNlZCByZWNvcmRpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3VtZVJlY29yZGluZygpIHtcclxuICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSAhPT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIHJlc3VtZSB0aGUgcmVjb3JkaW5nLiBSZWNvcmRpbmcgc3RhdGU6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFN0YXRlKCdyZWNvcmRpbmcnKTtcclxuXHJcbiAgICAgICAgLy8gbm90IGFsbCBsaWJzIGhhdmUgdGhpcyBtZXRob2QgeWV0XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5yZXN1bWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VtZWQgcmVjb3JkaW5nLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWFkRmlsZShfYmxvYikge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlKG5ldyBGaWxlUmVhZGVyU3luYygpLnJlYWRBc0RhdGFVUkwoX2Jsb2IpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgJ1Bhc3MgYSBjYWxsYmFjayBmdW5jdGlvbiBvdmVyIGdldERhdGFVUkwuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBibG9iID0gX21lZGlhUmVjb3JkZXIgPyBfbWVkaWFSZWNvcmRlci5ibG9iIDogKG1lZGlhUmVjb3JkZXIgfHwge30pLmJsb2I7XHJcblxyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdCbG9iIGVuY29kZXIgZGlkIG5vdCBmaW5pc2ggaXRzIGpvYiB5ZXQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhVVJMKGNhbGxiYWNrLCBfbWVkaWFSZWNvcmRlcik7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFdvcmtlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihyZWFkRmlsZSk7XHJcblxyXG4gICAgICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKGJsb2IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBibG9iID0gVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbX2Z1bmN0aW9uLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpIHtcclxuICAgICAgICBjb3VudGVyID0gY291bnRlciB8fCAwO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5zdGF0ZSA9PT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuc3RhdGUgPT09ICdzdG9wcGVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRlciA+PSBzZWxmLnJlY29yZGluZ0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0b3BSZWNvcmRpbmcoc2VsZi5vblJlY29yZGluZ1N0b3BwZWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3VudGVyICs9IDEwMDA7IC8vIDEtc2Vjb25kXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlY29yZGluZ0R1cmF0aW9uKGNvdW50ZXIpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKCFzZWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuc3RhdGUgPSBzdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm9uU3RhdGVDaGFuZ2VkLmNhbGwgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgc2VsZi5vblN0YXRlQ2hhbmdlZC5jYWxsKHNlbGYsIHN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLm9uU3RhdGVDaGFuZ2VkKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFdBUk5JTkcgPSAnSXQgc2VlbXMgdGhhdCByZWNvcmRlciBpcyBkZXN0cm95ZWQgb3IgXCJzdGFydFJlY29yZGluZ1wiIGlzIG5vdCBpbnZva2VkIGZvciAnICsgY29uZmlnLnR5cGUgKyAnIHJlY29yZGVyLic7XHJcblxyXG4gICAgZnVuY3Rpb24gd2FybmluZ0xvZygpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmRpc2FibGVMb2dzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2FybihXQVJOSU5HKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWVkaWFSZWNvcmRlcjtcclxuXHJcbiAgICB2YXIgcmV0dXJuT2JqZWN0ID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0cyB0aGUgcmVjb3JkaW5nLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgcmVjb3JkZXIgPSBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIHtcclxuICAgICAgICAgKiAgICAgdHlwZTogJ3ZpZGVvJ1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhcnRSZWNvcmRpbmc6IHN0YXJ0UmVjb3JkaW5nLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyB0aGUgcmVjb3JkaW5nLiBJdCBpcyBzdHJvbmdseSByZWNvbW1lbmRlZCB0byBnZXQgXCJibG9iXCIgb3IgXCJVUklcIiBpbnNpZGUgdGhlIGNhbGxiYWNrIHRvIG1ha2Ugc3VyZSBhbGwgcmVjb3JkZXJzIGZpbmlzaGVkIHRoZWlyIGpvYi5cclxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIHRvIGdldCB0aGUgcmVjb3JkZWQgYmxvYi5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgLy8gdXNlIGVpdGhlciBcInRoaXNcIiBvciBcInJlY29yZGVyXCIgb2JqZWN0OyBib3RoIGFyZSBpZGVudGljYWxcclxuICAgICAgICAgKiAgICAgdmlkZW8uc3JjID0gdGhpcy50b1VSTCgpO1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0b3BSZWNvcmRpbmc6IHN0b3BSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nLiBZb3UgY2FuIHJlc3VtZSByZWNvcmRpbmcgdXNpbmcgXCJyZXN1bWVSZWNvcmRpbmdcIiBtZXRob2QuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBGaXJlZm94IGlzIHVuYWJsZSB0byBwYXVzZSB0aGUgcmVjb3JkaW5nLiBGaXggaXQuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5wYXVzZVJlY29yZGluZygpOyAgLy8gcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyByZXN1bWUgYWdhaW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwYXVzZVJlY29yZGluZzogcGF1c2VSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTsgIC8vIGZpcnN0IG9mIGFsbCwgcGF1c2UgdGhlIHJlY29yZGluZ1xyXG4gICAgICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpOyAvLyBub3cgcmVzdW1lIGl0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzdW1lUmVjb3JkaW5nOiByZXN1bWVSZWNvcmRpbmcsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIHRoZSByZWNvcmRpbmcuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmluaXRSZWNvcmRlcigpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluaXRSZWNvcmRlcjogaW5pdFJlY29yZGVyLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBc2sgUmVjb3JkUlRDIHRvIGF1dG8tc3RvcCB0aGUgcmVjb3JkaW5nIGFmdGVyIDUgbWludXRlcy5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogdmFyIGZpdmVNaW51dGVzID0gNSAqIDEwMDAgKiA2MDtcclxuICAgICAgICAgKiByZWNvcmRlci5zZXRSZWNvcmRpbmdEdXJhdGlvbihmaXZlTWludXRlcywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgdmFyIGJsb2IgPSB0aGlzLmdldEJsb2IoKTtcclxuICAgICAgICAgKiAgICB2aWRlby5zcmMgPSB0aGlzLnRvVVJMKCk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogLy8gb3Igb3RoZXJ3aXNlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0UmVjb3JkaW5nRHVyYXRpb24oZml2ZU1pbnV0ZXMpLm9uUmVjb3JkaW5nU3RvcHBlZChmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRSZWNvcmRpbmdEdXJhdGlvbjogZnVuY3Rpb24ocmVjb3JkaW5nRHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVjb3JkaW5nRHVyYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAncmVjb3JkaW5nRHVyYXRpb24gaXMgcmVxdWlyZWQuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZWNvcmRpbmdEdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdyZWNvcmRpbmdEdXJhdGlvbiBtdXN0IGJlIGEgbnVtYmVyLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nRHVyYXRpb24gPSByZWNvcmRpbmdEdXJhdGlvbjtcclxuICAgICAgICAgICAgc2VsZi5vblJlY29yZGluZ1N0b3BwZWQgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9uUmVjb3JkaW5nU3RvcHBlZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uUmVjb3JkaW5nU3RvcHBlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGNsZWFyL3Jlc2V0IGFsbCB0aGUgcmVjb3JkZWQgZGF0YS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEB0b2RvIEZpZ3VyZSBvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBcInJlc2V0XCIgYW5kIFwiY2xlYXJSZWNvcmRlZERhdGFcIiBtZXRob2RzLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsZWFyZWQgb2xkIHJlY29yZGVkIGRhdGEuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgdGhlIHJlY29yZGVkIGJsb2IuIFVzZSB0aGlzIG1ldGhvZCBpbnNpZGUgdGhlIFwic3RvcFJlY29yZGluZ1wiIGNhbGxiYWNrLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIHZhciBmaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCAnZmlsZW5hbWUud2VibScsIHtcclxuICAgICAgICAgKiAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAqICAgICB9KTtcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgKiAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7IC8vIHVwbG9hZCBcIkZpbGVcIiBvYmplY3QgcmF0aGVyIHRoYW4gYSBcIkJsb2JcIlxyXG4gICAgICAgICAqICAgICB1cGxvYWRUb1NlcnZlcihmb3JtRGF0YSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogQHJldHVybnMge0Jsb2J9IFJldHVybnMgcmVjb3JkZWQgZGF0YSBhcyBcIkJsb2JcIiBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QmxvYjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbWVkaWFSZWNvcmRlci5ibG9iO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBkYXRhLVVSSSBpbnN0ZWFkIG9mIEJsb2IuXHJcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBnZXQgdGhlIERhdGEtVVJJLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAqICAgICByZWNvcmRlci5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkkpIHtcclxuICAgICAgICAgKiAgICAgICAgIHZpZGVvLnNyYyA9IGRhdGFVUkk7XHJcbiAgICAgICAgICogICAgIH0pO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldERhdGFVUkw6IGdldERhdGFVUkwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB2aXJ0dWFsL3RlbXBvcmFyeSBVUkwuIFVzYWdlIG9mIHRoaXMgVVJMIGlzIGxpbWl0ZWQgdG8gY3VycmVudCB0YWIuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IHRoaXMudG9VUkwoKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIGEgdmlydHVhbC90ZW1wb3JhcnkgVVJMIGZvciB0aGUgcmVjb3JkZWQgXCJCbG9iXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG9VUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwobWVkaWFSZWNvcmRlci5ibG9iKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgaW50ZXJuYWwgcmVjb3JkaW5nIG9iamVjdCAoaS5lLiBpbnRlcm5hbCBtb2R1bGUpIGUuZy4gTXV0bGlTdHJlYW1SZWNvcmRlciwgTWVkaWFTdHJlYW1SZWNvcmRlciwgU3RlcmVvQXVkaW9SZWNvcmRlciBvciBXaGFtbXlSZWNvcmRlciBldGMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLmdldEludGVybmFsUmVjb3JkZXIoKTtcclxuICAgICAgICAgKiBpZihpbnRlcm5hbCBpbnN0YW5jZW9mIE11bHRpU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwuYWRkU3RyZWFtcyhbbmV3QXVkaW9TdHJlYW1dKTtcclxuICAgICAgICAgKiAgICAgaW50ZXJuYWwucmVzZXRWaWRlb1N0cmVhbXMoW3NjcmVlblN0cmVhbV0pO1xyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0SW50ZXJuYWxSZWNvcmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEludm9rZSBzYXZlLWFzIGRpYWxvZyB0byBzYXZlIHRoZSByZWNvcmRlZCBibG9iIGludG8geW91ciBkaXNrLlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIFNldCB5b3VyIG93biBmaWxlIG5hbWUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHRoaXMuc2F2ZSgnZmlsZS1uYW1lJyk7XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgLy8gb3IgbWFudWFsbHk6XHJcbiAgICAgICAgICogICAgIGludm9rZVNhdmVBc0RpYWxvZyh0aGlzLmdldEJsb2IoKSwgJ2ZpbGVuYW1lLndlYm0nKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlOiBmdW5jdGlvbihmaWxlTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdMb2coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW52b2tlU2F2ZUFzRGlhbG9nKG1lZGlhUmVjb3JkZXIuYmxvYiwgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGdldHMgYSBibG9iIGZyb20gaW5kZXhlZC1EQiBzdG9yYWdlLlxyXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdG8gZ2V0IHRoZSByZWNvcmRlZCBibG9iLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5nZXRGcm9tRGlzayhmdW5jdGlvbihkYXRhVVJMKSB7XHJcbiAgICAgICAgICogICAgIHZpZGVvLnNyYyA9IGRhdGFVUkw7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0RnJvbURpc2s6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgd2FybmluZ0xvZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZWNvcmRSVEMuZ2V0RnJvbURpc2soY29uZmlnLnR5cGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBhcHBlbmRzIGFuIGFycmF5IG9mIHdlYnAgaW1hZ2VzIHRvIHRoZSByZWNvcmRlZCB2aWRlby1ibG9iLiBJdCB0YWtlcyBhbiBcImFycmF5XCIgb2JqZWN0LlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheS48QXJyYXk+fVxyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5T2ZXZWJQSW1hZ2VzIC0gQXJyYXkgb2Ygd2VicCBpbWFnZXMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAdG9kbyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgZGVwcmVjYXRlZC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHZhciBhcnJheU9mV2ViUEltYWdlcyA9IFtdO1xyXG4gICAgICAgICAqIGFycmF5T2ZXZWJQSW1hZ2VzLnB1c2goe1xyXG4gICAgICAgICAqICAgICBkdXJhdGlvbjogaW5kZXgsXHJcbiAgICAgICAgICogICAgIGltYWdlOiAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCwuLi4nXHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICogcmVjb3JkZXIuc2V0QWR2ZXJ0aXNlbWVudEFycmF5KGFycmF5T2ZXZWJQSW1hZ2VzKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXRBZHZlcnRpc2VtZW50QXJyYXk6IGZ1bmN0aW9uKGFycmF5T2ZXZWJQSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5hZHZlcnRpc2VtZW50ID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJyYXlPZldlYlBJbWFnZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuYWR2ZXJ0aXNlbWVudC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogYXJyYXlPZldlYlBJbWFnZXNbaV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXQgaXMgZXF1aXZhbGVudCB0byA8Y29kZSBjbGFzcz1cInN0clwiPlwicmVjb3JkZXIuZ2V0QmxvYigpXCI8L2NvZGU+IG1ldGhvZC4gVXNhZ2Ugb2YgXCJnZXRCbG9iXCIgaXMgcmVjb21tZW5kZWQsIHRob3VnaC5cclxuICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBCbG9iIGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGlzIHByb3BlcnR5LlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAcmVhZG9ubHlcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICogICAgIHZhciBibG9iID0gdGhpcy5ibG9iO1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgIC8vIGJlbG93IG9uZSBpcyByZWNvbW1lbmRlZFxyXG4gICAgICAgICAqICAgICB2YXIgYmxvYiA9IHRoaXMuZ2V0QmxvYigpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2I6IG51bGwsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgd29ya3Mgb25seSB3aXRoIHtyZWNvcmRlclR5cGU6U3RlcmVvQXVkaW9SZWNvcmRlcn0uIFVzZSB0aGlzIHByb3BlcnR5IG9uIFwic3RvcFJlY29yZGluZ1wiIHRvIHZlcmlmeSB0aGUgZW5jb2RlcidzIHNhbXBsZS1yYXRlcy5cclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhpcyBidWZmZXItc2l6ZTogJyArIHRoaXMuYnVmZmVyU2l6ZSk7XHJcbiAgICAgICAgICogfSk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnVmZmVyU2l6ZTogMCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyB3b3JrcyBvbmx5IHdpdGgge3JlY29yZGVyVHlwZTpTdGVyZW9BdWRpb1JlY29yZGVyfS4gVXNlIHRoaXMgcHJvcGVydHkgb24gXCJzdG9wUmVjb3JkaW5nXCIgdG8gdmVyaWZ5IHRoZSBlbmNvZGVyJ3Mgc2FtcGxlLXJhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYW1wbGVSYXRlIC0gU2FtcGxlLXJhdGVzIHVzZWQgdG8gZW5jb2RlIHRoZSBXQVYgY29udGFpbmVyXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgYWxlcnQoJ1JlY29yZGVyIHVzZWQgdGhlc2Ugc2FtcGxlLXJhdGVzOiAnICsgdGhpcy5zYW1wbGVSYXRlKTtcclxuICAgICAgICAgKiB9KTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBzYW1wbGVSYXRlOiAwLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB7cmVjb3JkZXJUeXBlOlN0ZXJlb0F1ZGlvUmVjb3JkZXJ9IHJldHVybnMgQXJyYXlCdWZmZXIgb2JqZWN0LlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciAtIEF1ZGlvIEFycmF5QnVmZmVyLCBzdXBwb3J0ZWQgb25seSBpbiBDaHJvbWUuXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1xyXG4gICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAqIEByZWFkb25seVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgKiAgICAgdmFyIGFycmF5QnVmZmVyID0gdGhpcy5idWZmZXI7XHJcbiAgICAgICAgICogICAgIGFsZXJ0KGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJ1ZmZlcjogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgcmVzZXRzIHRoZSByZWNvcmRlci4gU28gdGhhdCB5b3UgY2FuIHJldXNlIHNpbmdsZSByZWNvcmRlciBpbnN0YW5jZSBtYW55IHRpbWVzLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiByZWNvcmRlci5yZXNldCgpO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiB0eXBlb2YgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSgnaW5hY3RpdmUnKTtcclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbmV2ZXIgcmVjb3JkZXIncyBzdGF0ZSBjaGFuZ2VzLiBVc2UgdGhpcyBhcyBhbiBcImV2ZW50XCIuXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHN0YXRlIC0gQSByZWNvcmRlcidzIHN0YXRlIGNhbiBiZTogcmVjb3JkaW5nLCBwYXVzZWQsIHN0b3BwZWQgb3IgaW5hY3RpdmUuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uU3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgKiAgICAgY29uc29sZS5sb2coJ1JlY29yZGVyIHN0YXRlOiAnLCBzdGF0ZSk7XHJcbiAgICAgICAgICogfTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNvcmRlciBzdGF0ZSBjaGFuZ2VkOicsIHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgcmVjb3JkZXIgY2FuIGhhdmUgaW5hY3RpdmUsIHJlY29yZGluZywgcGF1c2VkIG9yIHN0b3BwZWQgc3RhdGVzLlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGF0ZSAtIEEgcmVjb3JkZXIncyBzdGF0ZSBjYW4gYmU6IHJlY29yZGluZywgcGF1c2VkLCBzdG9wcGVkIG9yIGluYWN0aXZlLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAvLyB0aGlzIGxvb3BlciBmdW5jdGlvbiB3aWxsIGtlZXAgeW91IHVwZGF0ZWQgYWJvdXQgdGhlIHJlY29yZGVyJ3Mgc3RhdGVzLlxyXG4gICAgICAgICAqIChmdW5jdGlvbiBsb29wZXIoKSB7XHJcbiAgICAgICAgICogICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MID0gJ1JlY29yZGVyJ3Mgc3RhdGUgaXM6ICcgKyByZWNvcmRlci5zdGF0ZTtcclxuICAgICAgICAgKiAgICAgaWYocmVjb3JkZXIuc3RhdGUgPT09ICdzdG9wcGVkJykgcmV0dXJuOyAvLyBpZ25vcmUrc3RvcFxyXG4gICAgICAgICAqICAgICBzZXRUaW1lb3V0KGxvb3BlciwgMTAwMCk7IC8vIHVwZGF0ZSBhZnRlciBldmVyeSAzLXNlY29uZHNcclxuICAgICAgICAgKiB9KSgpO1xyXG4gICAgICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGU6ICdpbmFjdGl2ZScsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCByZWNvcmRlcidzIHJlYWRvbmx5IHN0YXRlLlxyXG4gICAgICAgICAqIEBtZXRob2RcclxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgcmVjb3JkaW5nIHN0YXRlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc3RhdGU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzdHJveSBSZWNvcmRSVEMgaW5zdGFuY2UuIENsZWFyIGFsbCByZWNvcmRlcnMgYW5kIG9iamVjdHMuXHJcbiAgICAgICAgICogQG1ldGhvZFxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGRpc2FibGVMb2dzQ2FjaGUgPSBjb25maWcuZGlzYWJsZUxvZ3M7XHJcblxyXG4gICAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlTG9nczogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZWxmLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKCdkZXN0cm95ZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuT2JqZWN0ID0gc2VsZiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3Rvci5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5kaXNhYmxlTG9ncyA9IGRpc2FibGVMb2dzQ2FjaGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZWNvcmRSVEMgaXMgZGVzdHJveWVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVjb3JkUlRDIHZlcnNpb24gbnVtYmVyXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHZlcnNpb24gLSBSZWxlYXNlIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENcclxuICAgICAgICAgKiBAc3RhdGljXHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiBhbGVydChyZWNvcmRlci52ZXJzaW9uKTtcclxuICAgICAgICAgKi9cclxuICAgICAgICB2ZXJzaW9uOiAnNS41LjMnXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcykge1xyXG4gICAgICAgIHNlbGYgPSByZXR1cm5PYmplY3Q7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBzb21lb25lIHdhbnRzIHRvIHVzZSBSZWNvcmRSVEMgd2l0aCB0aGUgXCJuZXdcIiBrZXl3b3JkLlxyXG4gICAgZm9yICh2YXIgcHJvcCBpbiByZXR1cm5PYmplY3QpIHtcclxuICAgICAgICB0aGlzW3Byb3BdID0gcmV0dXJuT2JqZWN0W3Byb3BdO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiByZXR1cm5PYmplY3Q7XHJcbn1cclxuXHJcblJlY29yZFJUQy52ZXJzaW9uID0gJzUuNS4zJztcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAvKiAmJiAhIW1vZHVsZS5leHBvcnRzKi8gKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFJlY29yZFJUQztcclxufVxyXG5cclxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKCdSZWNvcmRSVEMnLCBbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlY29yZFJUQztcclxuICAgIH0pO1xyXG59XG5cclxuUmVjb3JkUlRDLmdldEZyb21EaXNrID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICB0aHJvdyAnY2FsbGJhY2sgaXMgbWFuZGF0b3J5Lic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgcmVjb3JkZWQgJyArICh0eXBlID09PSAnYWxsJyA/ICdibG9icycgOiB0eXBlICsgJyBibG9iICcpICsgJyBmcm9tIGRpc2shJyk7XHJcbiAgICBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCBfdHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlICE9PSAnYWxsJyAmJiBfdHlwZSA9PT0gdHlwZSArICdCbG9iJyAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJyAmJiBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMLCBfdHlwZS5yZXBsYWNlKCdCbG9iJywgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBzdG9yZSByZWNvcmRlZCBibG9icyBpbnRvIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIHthdWRpbzogQmxvYiwgdmlkZW86IEJsb2IsIGdpZjogQmxvYn1cclxuICogQG1ldGhvZFxyXG4gKiBAbWVtYmVyb2YgUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIFJlY29yZFJUQy53cml0ZVRvRGlzayh7XHJcbiAqICAgICBhdWRpbzogYXVkaW9CbG9iLFxyXG4gKiAgICAgdmlkZW86IHZpZGVvQmxvYixcclxuICogICAgIGdpZiAgOiBnaWZCbG9iXHJcbiAqIH0pO1xyXG4gKi9cclxuUmVjb3JkUlRDLndyaXRlVG9EaXNrID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgY29uc29sZS5sb2coJ1dyaXRpbmcgcmVjb3JkZWQgYmxvYihzKSB0byBkaXNrIScpO1xyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBpZiAob3B0aW9ucy5hdWRpbyAmJiBvcHRpb25zLnZpZGVvICYmIG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmdpZi5nZXREYXRhVVJMKGZ1bmN0aW9uKGdpZkRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYjogYXVkaW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0Jsb2I6IHZpZGVvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lmQmxvYjogZ2lmRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMudmlkZW8pIHtcclxuICAgICAgICBvcHRpb25zLmF1ZGlvLmdldERhdGFVUkwoZnVuY3Rpb24oYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudmlkZW8uZ2V0RGF0YVVSTChmdW5jdGlvbih2aWRlb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb0Jsb2I6IHZpZGVvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmF1ZGlvICYmIG9wdGlvbnMuZ2lmKSB7XHJcbiAgICAgICAgb3B0aW9ucy5hdWRpby5nZXREYXRhVVJMKGZ1bmN0aW9uKGF1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBvcHRpb25zLmdpZi5nZXREYXRhVVJMKGZ1bmN0aW9uKGdpZkRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb0Jsb2I6IGF1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudmlkZW8gJiYgb3B0aW9ucy5naWYpIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgIGdpZkJsb2I6IGdpZkRhdGFVUkxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hdWRpbykge1xyXG4gICAgICAgIG9wdGlvbnMuYXVkaW8uZ2V0RGF0YVVSTChmdW5jdGlvbihhdWRpb0RhdGFVUkwpIHtcclxuICAgICAgICAgICAgRGlza1N0b3JhZ2UuU3RvcmUoe1xyXG4gICAgICAgICAgICAgICAgYXVkaW9CbG9iOiBhdWRpb0RhdGFVUkxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudmlkZW8pIHtcclxuICAgICAgICBvcHRpb25zLnZpZGVvLmdldERhdGFVUkwoZnVuY3Rpb24odmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAgICAgICAgICAgIHZpZGVvQmxvYjogdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmdpZikge1xyXG4gICAgICAgIG9wdGlvbnMuZ2lmLmdldERhdGFVUkwoZnVuY3Rpb24oZ2lmRGF0YVVSTCkge1xyXG4gICAgICAgICAgICBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAgICAgICAgICAgICAgICBnaWZCbG9iOiBnaWZEYXRhVVJMXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFJlY29yZFJUQy1Db25maWd1cmF0aW9uLmpzXHJcblxyXG4vKipcclxuICoge0BsaW5rIFJlY29yZFJUQ0NvbmZpZ3VyYXRpb259IGlzIGFuIGlubmVyL3ByaXZhdGUgaGVscGVyIGZvciB7QGxpbmsgUmVjb3JkUlRDfS5cclxuICogQHN1bW1hcnkgSXQgY29uZmlndXJlcyB0aGUgMm5kIHBhcmFtZXRlciBwYXNzZWQgb3ZlciB7QGxpbmsgUmVjb3JkUlRDfSBhbmQgcmV0dXJucyBhIHZhbGlkIFwiY29uZmlnXCIgb2JqZWN0LlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDQ29uZmlndXJhdGlvblxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIG9wdGlvbnMgPSBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHt0eXBlOlwidmlkZW9cIiwgZGlzYWJsZUxvZ3M6IHRydWUsIG51bWJlck9mQXVkaW9DaGFubmVsczogMSwgYnVmZmVyU2l6ZTogMCwgc2FtcGxlUmF0ZTogMCwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGdldE5hdGl2ZUJsb2I6dHJ1ZSwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVENDb25maWd1cmF0aW9uKG1lZGlhU3RyZWFtLCBjb25maWcpIHtcclxuICAgIGlmICghY29uZmlnLnJlY29yZGVyVHlwZSAmJiAhY29uZmlnLnR5cGUpIHtcclxuICAgICAgICBpZiAoISFjb25maWcuYXVkaW8gJiYgISFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgY29uZmlnLnR5cGUgPSAndmlkZW8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISFjb25maWcuYXVkaW8gJiYgIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlICYmICFjb25maWcudHlwZSkge1xyXG4gICAgICAgIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBXaGFtbXlSZWNvcmRlciB8fCBjb25maWcucmVjb3JkZXJUeXBlID09PSBDYW52YXNSZWNvcmRlciB8fCAodHlwZW9mIFdlYkFzc2VtYmx5UmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmIGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IFdlYkFzc2VtYmx5UmVjb3JkZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ3ZpZGVvJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IEdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2dpZic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucmVjb3JkZXJUeXBlID09PSBTdGVyZW9BdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5yZWNvcmRlclR5cGUgPT09IE1lZGlhU3RyZWFtUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoICYmIGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoICYmIGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGggJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcudHlwZSA9ICdhdWRpbyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25maWcudHlwZSA9ICdVbktub3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZWRpYVJlY29yZGVyICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdERhdGEnIGluIE1lZGlhUmVjb3JkZXIucHJvdG90eXBlKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcubWltZVR5cGUpIHtcclxuICAgICAgICAgICAgY29uZmlnLm1pbWVUeXBlID0gJ3ZpZGVvL3dlYm0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcudHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9IGNvbmZpZy5taW1lVHlwZS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuYml0c1BlclNlY29uZCkge1xyXG4gICAgICAgICAgICAvLyBjb25maWcuYml0c1BlclNlY29uZCA9IDEyODAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc2lkZXIgZGVmYXVsdCB0eXBlPWF1ZGlvXHJcbiAgICBpZiAoIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5taW1lVHlwZSkge1xyXG4gICAgICAgICAgICBjb25maWcudHlwZSA9IGNvbmZpZy5taW1lVHlwZS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50eXBlID0gJ2F1ZGlvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX1xyXG4vLyBHZXRSZWNvcmRlclR5cGUuanNcclxuXHJcbi8qKlxyXG4gKiB7QGxpbmsgR2V0UmVjb3JkZXJUeXBlfSBpcyBhbiBpbm5lci9wcml2YXRlIGhlbHBlciBmb3Ige0BsaW5rIFJlY29yZFJUQ30uXHJcbiAqIEBzdW1tYXJ5IEl0IHJldHVybnMgYmVzdCByZWNvcmRlci10eXBlIGF2YWlsYWJsZSBmb3IgeW91ciBicm93c2VyLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgR2V0UmVjb3JkZXJUeXBlXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgUmVjb3JkZXJUeXBlID0gR2V0UmVjb3JkZXJUeXBlKG9wdGlvbnMpO1xyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgUmVjb3JkZXJUeXBlKG9wdGlvbnMpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCBkaXNhYmxlTG9nczogdHJ1ZSwgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiAxLCBidWZmZXJTaXplOiAwLCBzYW1wbGVSYXRlOiAwLCB2aWRlbzogSFRNTFZpZGVvRWxlbWVudCwgZXRjLn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBHZXRSZWNvcmRlclR5cGUobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgdmFyIHJlY29yZGVyO1xyXG5cclxuICAgIC8vIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgY2FuIHdvcmsgd2l0aCBhbGwgdGhyZWU6IEVkZ2UsIEZpcmVmb3ggYW5kIENocm9tZVxyXG4gICAgLy8gdG9kbzogZGV0ZWN0IGlmIGl0IGlzIEVkZ2UsIHRoZW4gYXV0byB1c2U6IFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgIGlmIChpc0Nocm9tZSB8fCBpc0VkZ2UgfHwgaXNPcGVyYSkge1xyXG4gICAgICAgIC8vIE1lZGlhIFN0cmVhbSBSZWNvcmRpbmcgQVBJIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBpbiBjaHJvbWUgeWV0O1xyXG4gICAgICAgIC8vIFRoYXQncyB3aHkgdXNpbmcgV2ViQXVkaW8gQVBJIHRvIHJlY29yZCBzdGVyZW8gYXVkaW8gaW4gV0FWIGZvcm1hdFxyXG4gICAgICAgIHJlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhUmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmICdyZXF1ZXN0RGF0YScgaW4gTWVkaWFSZWNvcmRlci5wcm90b3R5cGUgJiYgIWlzQ2hyb21lKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpZGVvIHJlY29yZGVyIChpbiBXZWJNIGZvcm1hdClcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ3ZpZGVvJyAmJiAoaXNDaHJvbWUgfHwgaXNPcGVyYSkpIHtcclxuICAgICAgICByZWNvcmRlciA9IFdoYW1teVJlY29yZGVyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFdlYkFzc2VtYmx5UmVjb3JkZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmVjb3JkZXIgPSBXZWJBc3NlbWJseVJlY29yZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWRlbyByZWNvcmRlciAoaW4gR2lmIGZvcm1hdClcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2dpZicpIHtcclxuICAgICAgICByZWNvcmRlciA9IEdpZlJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwyY2FudmFzIHJlY29yZGluZyFcclxuICAgIGlmIChjb25maWcudHlwZSA9PT0gJ2NhbnZhcycpIHtcclxuICAgICAgICByZWNvcmRlciA9IENhbnZhc1JlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgcmVjb3JkZXIgIT09IENhbnZhc1JlY29yZGVyICYmIHJlY29yZGVyICE9PSBHaWZSZWNvcmRlciAmJiB0eXBlb2YgTWVkaWFSZWNvcmRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3REYXRhJyBpbiBNZWRpYVJlY29yZGVyLnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmIChnZXRUcmFja3MobWVkaWFTdHJlYW0sICd2aWRlbycpLmxlbmd0aCB8fCBnZXRUcmFja3MobWVkaWFTdHJlYW0sICdhdWRpbycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBhdWRpby1vbmx5IHJlY29yZGluZ1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdhdWRpbycpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQoJ2F1ZGlvL3dlYm0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGVyID0gTWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2UgcmVjb3JkZXIgPSBTdGVyZW9BdWRpb1JlY29yZGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdmlkZW8gb3Igc2NyZWVuIHRyYWNrc1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCgndmlkZW8vd2VibScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZWRpYVN0cmVhbSBpbnN0YW5jZW9mIEFycmF5ICYmIG1lZGlhU3RyZWFtLmxlbmd0aCkge1xyXG4gICAgICAgIHJlY29yZGVyID0gTXVsdGlTdHJlYW1SZWNvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLnJlY29yZGVyVHlwZSkge1xyXG4gICAgICAgIHJlY29yZGVyID0gY29uZmlnLnJlY29yZGVyVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncyAmJiAhIXJlY29yZGVyICYmICEhcmVjb3JkZXIubmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyByZWNvcmRlclR5cGU6JywgcmVjb3JkZXIubmFtZSB8fCByZWNvcmRlci5jb25zdHJ1Y3Rvci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlY29yZGVyICYmIGlzU2FmYXJpKSB7XHJcbiAgICAgICAgcmVjb3JkZXIgPSBNZWRpYVN0cmVhbVJlY29yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRlcjtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19cclxuLy8gTVJlY29yZFJUQy5qc1xyXG5cclxuLyoqXHJcbiAqIE1SZWNvcmRSVEMgcnVucyBvbiB0b3Agb2Yge0BsaW5rIFJlY29yZFJUQ30gdG8gYnJpbmcgbXVsdGlwbGUgcmVjb3JkaW5ncyBpbiBhIHNpbmdsZSBwbGFjZSwgYnkgcHJvdmlkaW5nIHNpbXBsZSBBUEkuXHJcbiAqIEBzdW1tYXJ5IE1SZWNvcmRSVEMgc3RhbmRzIGZvciBcIk11bHRpcGxlLVJlY29yZFJUQ1wiLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgTVJlY29yZFJUQ1xyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IE1SZWNvcmRSVEMoKTtcclxuICogcmVjb3JkZXIuYWRkU3RyZWFtKE1lZGlhU3RyZWFtKTtcclxuICogcmVjb3JkZXIubWVkaWFUeXBlID0ge1xyXG4gKiAgICAgYXVkaW86IHRydWUsIC8vIG9yIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gKiAgICAgdmlkZW86IHRydWUsIC8vIG9yIFdoYW1teVJlY29yZGVyIG9yIE1lZGlhU3RyZWFtUmVjb3JkZXIgb3IgV2ViQXNzZW1ibHlSZWNvcmRlciBvciBDYW52YXNSZWNvcmRlclxyXG4gKiAgICAgZ2lmOiB0cnVlICAgIC8vIG9yIEdpZlJlY29yZGVyXHJcbiAqIH07XHJcbiAqIC8vIG1pbWVUeXBlIGlzIG9wdGlvbmFsIGFuZCBzaG91bGQgYmUgc2V0IG9ubHkgaW4gYWR2YW5jZSBjYXNlcy5cclxuICogcmVjb3JkZXIubWltZVR5cGUgPSB7XHJcbiAqICAgICBhdWRpbzogJ2F1ZGlvL3dhdicsXHJcbiAqICAgICB2aWRlbzogJ3ZpZGVvL3dlYm0nLFxyXG4gKiAgICAgZ2lmOiAgICdpbWFnZS9naWYnXHJcbiAqIH07XHJcbiAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAqIEBzZWUgRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb246XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDL3RyZWUvbWFzdGVyL01SZWNvcmRSVEN8TVJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEByZXF1aXJlcyB7QGxpbmsgUmVjb3JkUlRDfVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE1SZWNvcmRSVEMobWVkaWFTdHJlYW0pIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGF0dGFjaGVzIE1lZGlhU3RyZWFtIG9iamVjdCB0byB7QGxpbmsgTVJlY29yZFJUQ30uXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIEEgTWVkaWFTdHJlYW0gb2JqZWN0LCBlaXRoZXIgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJLCBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5hZGRTdHJlYW0oTWVkaWFTdHJlYW0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKF9tZWRpYVN0cmVhbSkge1xyXG4gICAgICAgIGlmIChfbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgbWVkaWFTdHJlYW0gPSBfbWVkaWFTdHJlYW07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgcHJvcGVydHkgY2FuIGJlIHVzZWQgdG8gc2V0IHRoZSByZWNvcmRpbmcgdHlwZSBlLmcuIGF1ZGlvLCBvciB2aWRlbywgb3IgZ2lmLCBvciBjYW52YXMuXHJcbiAgICAgKiBAcHJvcGVydHkge29iamVjdH0gbWVkaWFUeXBlIC0ge2F1ZGlvOiB0cnVlLCB2aWRlbzogdHJ1ZSwgZ2lmOiB0cnVlfVxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiB2YXIgcmVjb3JkZXIgPSBuZXcgTVJlY29yZFJUQygpO1xyXG4gICAgICogcmVjb3JkZXIubWVkaWFUeXBlID0ge1xyXG4gICAgICogICAgIGF1ZGlvOiB0cnVlLCAvLyBUUlVFIG9yIFN0ZXJlb0F1ZGlvUmVjb3JkZXIgb3IgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogICAgIHZpZGVvOiB0cnVlLCAvLyBUUlVFIG9yIFdoYW1teVJlY29yZGVyIG9yIE1lZGlhU3RyZWFtUmVjb3JkZXIgb3IgV2ViQXNzZW1ibHlSZWNvcmRlciBvciBDYW52YXNSZWNvcmRlclxyXG4gICAgICogICAgIGdpZiAgOiB0cnVlICAvLyBUUlVFIG9yIEdpZlJlY29yZGVyXHJcbiAgICAgKiB9O1xyXG4gICAgICovXHJcbiAgICB0aGlzLm1lZGlhVHlwZSA9IHtcclxuICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0YXJ0cyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RhcnRSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWVkaWFUeXBlID0gdGhpcy5tZWRpYVR5cGU7XHJcbiAgICAgICAgdmFyIHJlY29yZGVyVHlwZTtcclxuICAgICAgICB2YXIgbWltZVR5cGUgPSB0aGlzLm1pbWVUeXBlIHx8IHtcclxuICAgICAgICAgICAgYXVkaW86IG51bGwsXHJcbiAgICAgICAgICAgIHZpZGVvOiBudWxsLFxyXG4gICAgICAgICAgICBnaWY6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS5hdWRpbyAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS5hdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUudmlkZW8gIT09ICdmdW5jdGlvbicgJiYgaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpICYmICFnZXRUcmFja3MobWVkaWFTdHJlYW0sICd2aWRlbycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtZWRpYVR5cGUudmlkZW8gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmdpZiAhPT0gJ2Z1bmN0aW9uJyAmJiBpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkgJiYgIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ3ZpZGVvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lZGlhVHlwZS5naWYgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWVkaWFUeXBlLmF1ZGlvICYmICFtZWRpYVR5cGUudmlkZW8gJiYgIW1lZGlhVHlwZS5naWYpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ01lZGlhU3RyZWFtIG11c3QgaGF2ZSBlaXRoZXIgYXVkaW8gb3IgdmlkZW8gdHJhY2tzLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFtZWRpYVR5cGUuYXVkaW8pIHtcclxuICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZWRpYVR5cGUuYXVkaW8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG1lZGlhVHlwZS5hdWRpbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyID0gbmV3IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2F1ZGlvJyxcclxuICAgICAgICAgICAgICAgIGJ1ZmZlclNpemU6IHRoaXMuYnVmZmVyU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHRoaXMuc2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVsczogdGhpcy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgfHwgMixcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0aGlzLmRpc2FibGVMb2dzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlOiByZWNvcmRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUuYXVkaW8sXHJcbiAgICAgICAgICAgICAgICB0aW1lU2xpY2U6IHRoaXMudGltZVNsaWNlLFxyXG4gICAgICAgICAgICAgICAgb25UaW1lU3RhbXA6IHRoaXMub25UaW1lU3RhbXBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICByZWNvcmRlclR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lZGlhVHlwZS52aWRlbyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLnZpZGVvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV3U3RyZWFtID0gbWVkaWFTdHJlYW07XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNNZWRpYVJlY29yZGVyQ29tcGF0aWJsZSgpICYmICEhbWVkaWFUeXBlLmF1ZGlvICYmIHR5cGVvZiBtZWRpYVR5cGUuYXVkaW8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2aWRlb1RyYWNrID0gZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RyZWFtLmFkZFRyYWNrKHZpZGVvVHJhY2spO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkZXJUeXBlICYmIHJlY29yZGVyVHlwZSA9PT0gV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBkb2VzIE5PVCBzdXBwb3J0cyB3ZWJwLWVuY29kaW5nIHlldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgRmlyZWZveCBkbyBzdXBwb3J0cyBXZWJBc3NlbWJseVJlY29yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTdHJlYW0uYWRkVHJhY2sodmlkZW9UcmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9SZWNvcmRlciA9IG5ldyBSZWNvcmRSVEMobmV3U3RyZWFtLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgdmlkZW86IHRoaXMudmlkZW8sXHJcbiAgICAgICAgICAgICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVJbnRlcnZhbDogdGhpcy5mcmFtZUludGVydmFsIHx8IDEwLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUxvZ3M6IHRoaXMuZGlzYWJsZUxvZ3MsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRlclR5cGU6IHJlY29yZGVyVHlwZSxcclxuICAgICAgICAgICAgICAgIG1pbWVUeXBlOiBtaW1lVHlwZS52aWRlbyxcclxuICAgICAgICAgICAgICAgIHRpbWVTbGljZTogdGhpcy50aW1lU2xpY2UsXHJcbiAgICAgICAgICAgICAgICBvblRpbWVTdGFtcDogdGhpcy5vblRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIHdvcmtlclBhdGg6IHRoaXMud29ya2VyUGF0aCxcclxuICAgICAgICAgICAgICAgIHdlYkFzc2VtYmx5UGF0aDogdGhpcy53ZWJBc3NlbWJseVBhdGgsXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IHRoaXMuZnJhbWVSYXRlLCAvLyB1c2VkIGJ5IFdlYkFzc2VtYmx5UmVjb3JkZXI7IHZhbHVlczogdXN1YWxseSAzMDsgYWNjZXB0cyBhbnkuXHJcbiAgICAgICAgICAgICAgICBiaXRyYXRlOiB0aGlzLmJpdHJhdGUgLy8gdXNlZCBieSBXZWJBc3NlbWJseVJlY29yZGVyOyB2YWx1ZXM6IDAgdG8gMTAwMCtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1lZGlhVHlwZS5hdWRpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIW1lZGlhVHlwZS5hdWRpbyAmJiAhIW1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXNTaW5nbGVSZWNvcmRlciA9IGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSA9PT0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVR5cGUuYXVkaW8gaW5zdGFuY2VvZiBTdGVyZW9BdWRpb1JlY29yZGVyICYmICEhbWVkaWFUeXBlLnZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NpbmdsZVJlY29yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWFUeXBlLmF1ZGlvICE9PSB0cnVlICYmIG1lZGlhVHlwZS52aWRlbyAhPT0gdHJ1ZSAmJiBtZWRpYVR5cGUuYXVkaW8gIT09IG1lZGlhVHlwZS52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgaXNTaW5nbGVSZWNvcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTaW5nbGVSZWNvcmRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpb1JlY29yZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi52aWRlb1JlY29yZGVyLmluaXRSZWNvcmRlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUmVjb3JkZXIuaW5pdFJlY29yZGVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIHJlY29yZGVycyBhcmUgcmVhZHkgdG8gcmVjb3JkIHRoaW5ncyBhY2N1cmF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9SZWNvcmRlci5zdGFydFJlY29yZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFtZWRpYVR5cGUuZ2lmKSB7XHJcbiAgICAgICAgICAgIHJlY29yZGVyVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlLmdpZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlID0gbWVkaWFUeXBlLmdpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyID0gbmV3IFJlY29yZFJUQyhtZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2dpZicsXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IHRoaXMuZnJhbWVSYXRlIHx8IDIwMCxcclxuICAgICAgICAgICAgICAgIHF1YWxpdHk6IHRoaXMucXVhbGl0eSB8fCAxMCxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVMb2dzOiB0aGlzLmRpc2FibGVMb2dzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJUeXBlOiByZWNvcmRlclR5cGUsXHJcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogbWltZVR5cGUuZ2lmXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnN0YXJ0UmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGFsbCBlbmNvZGVycyBmaW5pc2hlZCB0aGVpciBqb2JzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKHJlY29yZGluZyl7XHJcbiAgICAgKiAgICAgdmFyIGF1ZGlvQmxvYiA9IHJlY29yZGluZy5hdWRpbztcclxuICAgICAqICAgICB2YXIgdmlkZW9CbG9iID0gcmVjb3JkaW5nLnZpZGVvO1xyXG4gICAgICogICAgIHZhciBnaWZCbG9iICAgPSByZWNvcmRpbmcuZ2lmO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcFJlY29yZGluZyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JVUkwsICdhdWRpbycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1JlY29yZGVyLnN0b3BSZWNvcmRpbmcoZnVuY3Rpb24oYmxvYlVSTCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmxvYlVSTCwgJ3ZpZGVvJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKGJsb2JVUkwpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJsb2JVUkwsICdnaWYnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlUmVjb3JkaW5nKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2VSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5wYXVzZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIucGF1c2VSZWNvcmRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyByZWNvcmRpbmcuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZVJlY29yZGluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIucmVzdW1lUmVjb3JkaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5naWZSZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmdpZlJlY29yZGVyLnJlc3VtZVJlY29yZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBtYW51YWxseSBnZXQgYWxsIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBbGwgcmVjb3JkZWQgYmxvYnMgYXJlIHBhc3NlZCBiYWNrIHRvIHRoZSBcImNhbGxiYWNrXCIgZnVuY3Rpb24uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmdldEJsb2IoZnVuY3Rpb24ocmVjb3JkaW5nKXtcclxuICAgICAqICAgICB2YXIgYXVkaW9CbG9iID0gcmVjb3JkaW5nLmF1ZGlvO1xyXG4gICAgICogICAgIHZhciB2aWRlb0Jsb2IgPSByZWNvcmRpbmcudmlkZW87XHJcbiAgICAgKiAgICAgdmFyIGdpZkJsb2IgICA9IHJlY29yZGluZy5naWY7XHJcbiAgICAgKiB9KTtcclxuICAgICAqIC8vIG9yXHJcbiAgICAgKiB2YXIgYXVkaW9CbG9iID0gcmVjb3JkZXIuZ2V0QmxvYigpLmF1ZGlvO1xyXG4gICAgICogdmFyIHZpZGVvQmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKS52aWRlbztcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0ge307XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgb3V0cHV0LmF1ZGlvID0gdGhpcy5hdWRpb1JlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZGVvUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnZpZGVvID0gdGhpcy52aWRlb1JlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG91dHB1dC5naWYgPSB0aGlzLmdpZlJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IGFsbCByZWNvcmRlciBpbnN0YW5jZXMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmRlc3Ryb3koKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2lmUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5naWZSZWNvcmRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBtYW51YWxseSBnZXQgYWxsIHJlY29yZGVkIGJsb2JzJyBEYXRhVVJMcy5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQWxsIHJlY29yZGVkIGJsb2JzJyBEYXRhVVJMcyBhcmUgcGFzc2VkIGJhY2sgdG8gdGhlIFwiY2FsbGJhY2tcIiBmdW5jdGlvbi5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuZ2V0RGF0YVVSTChmdW5jdGlvbihyZWNvcmRpbmcpe1xyXG4gICAgICogICAgIHZhciBhdWRpb0RhdGFVUkwgPSByZWNvcmRpbmcuYXVkaW87XHJcbiAgICAgKiAgICAgdmFyIHZpZGVvRGF0YVVSTCA9IHJlY29yZGluZy52aWRlbztcclxuICAgICAqICAgICB2YXIgZ2lmRGF0YVVSTCAgID0gcmVjb3JkaW5nLmdpZjtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldERhdGFVUkwgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvYihmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgICAgICAgIGlmIChibG9iLmF1ZGlvICYmIGJsb2IudmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi5hdWRpbywgZnVuY3Rpb24oX2F1ZGlvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldERhdGFVUkwoYmxvYi52aWRlbywgZnVuY3Rpb24oX3ZpZGVvRGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogX2F1ZGlvRGF0YVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvOiBfdmlkZW9EYXRhVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi5hdWRpbykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLmF1ZGlvLCBmdW5jdGlvbihfYXVkaW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogX2F1ZGlvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YVVSTChibG9iLnZpZGVvLCBmdW5jdGlvbihfdmlkZW9EYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogX3ZpZGVvRGF0YVVSTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YVVSTChibG9iLCBjYWxsYmFjazAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdlYldvcmtlciA9IHByb2Nlc3NJbldlYldvcmtlcihmdW5jdGlvbiByZWFkRmlsZShfYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKG5ldyBGaWxlUmVhZGVyU3luYygpLnJlYWRBc0RhdGFVUkwoX2Jsb2IpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlYldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMDAoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHdlYldvcmtlci5wb3N0TWVzc2FnZShibG9iKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazAwKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luV2ViV29ya2VyKF9mdW5jdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgJ3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoYmxvYik7XHJcbiAgICAgICAgICAgIHZhciB1cmw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgVVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gVVJMO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB3ZWJraXRVUkw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnTmVpdGhlciBVUkwgbm9yIHdlYmtpdFVSTCBkZXRlY3RlZC4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGFzayB7QGxpbmsgTVJlY29yZFJUQ30gdG8gd3JpdGUgYWxsIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLndyaXRlVG9EaXNrKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMud3JpdGVUb0Rpc2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBSZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gICAgICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1JlY29yZGVyLFxyXG4gICAgICAgICAgICB2aWRlbzogdGhpcy52aWRlb1JlY29yZGVyLFxyXG4gICAgICAgICAgICBnaWY6IHRoaXMuZ2lmUmVjb3JkZXJcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBpbnZva2UgYSBzYXZlLWFzIGRpYWxvZyBmb3IgYWxsIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSB7YXVkaW86ICdhdWRpby1uYW1lJywgdmlkZW86ICd2aWRlby1uYW1lJywgZ2lmOiAnZ2lmLW5hbWUnfVxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1SZWNvcmRSVENcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zYXZlKHtcclxuICAgICAqICAgICBhdWRpbzogJ2F1ZGlvLWZpbGUtbmFtZScsXHJcbiAgICAgKiAgICAgdmlkZW86ICd2aWRlby1maWxlLW5hbWUnLFxyXG4gICAgICogICAgIGdpZiAgOiAnZ2lmLWZpbGUtbmFtZSdcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgYXJncyA9IGFyZ3MgfHwge1xyXG4gICAgICAgICAgICBhdWRpbzogdHJ1ZSxcclxuICAgICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgICAgIGdpZjogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghIWFyZ3MuYXVkaW8gJiYgdGhpcy5hdWRpb1JlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zYXZlKHR5cGVvZiBhcmdzLmF1ZGlvID09PSAnc3RyaW5nJyA/IGFyZ3MuYXVkaW8gOiAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFhcmdzLnZpZGVvICYmIHRoaXMudmlkZW9SZWNvcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy52aWRlbyA9PT0gJ3N0cmluZycgPyBhcmdzLnZpZGVvIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFhcmdzLmdpZiAmJiB0aGlzLmdpZlJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lmUmVjb3JkZXIuc2F2ZSh0eXBlb2YgYXJncy5naWYgPT09ICdzdHJpbmcnID8gYXJncy5naWYgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGdldCBhbGwgcmVjb3JkZWQgYmxvYnMgZnJvbSBJbmRleGVkREIgc3RvcmFnZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnYWxsJyBvciAnYXVkaW8nIG9yICd2aWRlbycgb3IgJ2dpZidcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBnZXQgYWxsIHN0b3JlZCBibG9icy5cclxuICogQG1ldGhvZFxyXG4gKiBAbWVtYmVyb2YgTVJlY29yZFJUQ1xyXG4gKiBAZXhhbXBsZVxyXG4gKiBNUmVjb3JkUlRDLmdldEZyb21EaXNrKCdhbGwnLCBmdW5jdGlvbihkYXRhVVJMLCB0eXBlKXtcclxuICogICAgIGlmKHR5cGUgPT09ICdhdWRpbycpIHsgfVxyXG4gKiAgICAgaWYodHlwZSA9PT0gJ3ZpZGVvJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAnZ2lmJykgICB7IH1cclxuICogfSk7XHJcbiAqL1xyXG5NUmVjb3JkUlRDLmdldEZyb21EaXNrID0gUmVjb3JkUlRDLmdldEZyb21EaXNrO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHJlY29yZGVkIGJsb2JzIGludG8gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0ge2F1ZGlvOiBCbG9iLCB2aWRlbzogQmxvYiwgZ2lmOiBCbG9ifVxyXG4gKiBAbWV0aG9kXHJcbiAqIEBtZW1iZXJvZiBNUmVjb3JkUlRDXHJcbiAqIEBleGFtcGxlXHJcbiAqIE1SZWNvcmRSVEMud3JpdGVUb0Rpc2soe1xyXG4gKiAgICAgYXVkaW86IGF1ZGlvQmxvYixcclxuICogICAgIHZpZGVvOiB2aWRlb0Jsb2IsXHJcbiAqICAgICBnaWYgIDogZ2lmQmxvYlxyXG4gKiB9KTtcclxuICovXHJcbk1SZWNvcmRSVEMud3JpdGVUb0Rpc2sgPSBSZWNvcmRSVEMud3JpdGVUb0Rpc2s7XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5NUmVjb3JkUlRDID0gTVJlY29yZFJUQztcclxufVxyXG5cclxudmFyIGJyb3dzZXJGYWtlVXNlckFnZW50ID0gJ0Zha2UvNS4wIChGYWtlT1MpIEFwcGxlV2ViS2l0LzEyMyAoS0hUTUwsIGxpa2UgR2Vja28pIEZha2UvMTIuMy40NTY3Ljg5IEZha2UvMTIzLjQ1JztcclxuXHJcbihmdW5jdGlvbih0aGF0KSB7XHJcbiAgICBpZiAoIXRoYXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnbG9iYWwubmF2aWdhdG9yID0ge1xyXG4gICAgICAgIHVzZXJBZ2VudDogYnJvd3NlckZha2VVc2VyQWdlbnQsXHJcbiAgICAgICAgZ2V0VXNlck1lZGlhOiBmdW5jdGlvbigpIHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghZ2xvYmFsLmNvbnNvbGUpIHtcclxuICAgICAgICBnbG9iYWwuY29uc29sZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsLmNvbnNvbGUubG9nID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZ2xvYmFsLmNvbnNvbGUuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZ2xvYmFsLmNvbnNvbGUuZXJyb3IgPSBnbG9iYWwuY29uc29sZS5sb2cgPSBnbG9iYWwuY29uc29sZS5sb2cgfHwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGRvY3VtZW50OnRydWUgKi9cclxuICAgICAgICB0aGF0LmRvY3VtZW50ID0ge307XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jYXB0dXJlU3RyZWFtID0gZG9jdW1lbnQubW96Q2FwdHVyZVN0cmVhbSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbGF5OiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgICAgICAgICB0b0RhdGFVUkw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGF0LkhUTUxWaWRlb0VsZW1lbnQgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgbG9jYXRpb246dHJ1ZSAqL1xyXG4gICAgICAgIHRoYXQubG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHByb3RvY29sOiAnZmlsZTonLFxyXG4gICAgICAgICAgICBocmVmOiAnJyxcclxuICAgICAgICAgICAgaGFzaDogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygc2NyZWVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHNjcmVlbjp0cnVlICovXHJcbiAgICAgICAgdGhhdC5zY3JlZW4gPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHNjcmVlbjp0cnVlICovXHJcbiAgICAgICAgdGhhdC5VUkwgPSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9iamVjdFVSTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldm9rZU9iamVjdFVSTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2xvYmFsIHdpbmRvdzp0cnVlICovXHJcbiAgICB0aGF0LndpbmRvdyA9IGdsb2JhbDtcclxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiBudWxsKTtcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBDcm9zcy1Ccm93c2VyLURlY2xhcmF0aW9ucy5qc1xyXG5cclxuLy8gYW5pbWF0aW9uLWZyYW1lIHVzZWQgaW4gV2ViTSByZWNvcmRpbmdcclxuXHJcbi8qanNoaW50IC1XMDc5ICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5pZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmICh0eXBlb2Ygd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBtc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyB2aWE6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXHJcbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgLypnbG9iYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaywgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xyXG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKmpzaGludCAtVzA3OSAqL1xyXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbmlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAodHlwZW9mIHdlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgY2FuY2VsQW5pbWF0aW9uRnJhbWU6dHJ1ZSAqL1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gbW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtc0NhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIGNhbmNlbEFuaW1hdGlvbkZyYW1lOnRydWUgKi9cclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IG1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvKmdsb2JhbCBjYW5jZWxBbmltYXRpb25GcmFtZTp0cnVlICovXHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFdlYkF1ZGlvIEFQSSByZXByZXNlbnRlclxyXG52YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dDtcclxuXHJcbmlmICh0eXBlb2YgQXVkaW9Db250ZXh0ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICBBdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtb3pBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICBBdWRpb0NvbnRleHQgPSBtb3pBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qanNoaW50IC1XMDc5ICovXHJcbnZhciBVUkwgPSB3aW5kb3cuVVJMO1xyXG5cclxuaWYgKHR5cGVvZiBVUkwgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRVUkwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvKmdsb2JhbCBVUkw6dHJ1ZSAqL1xyXG4gICAgVVJMID0gd2Via2l0VVJMO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPT09ICd1bmRlZmluZWQnKSB7IC8vIG1heWJlIHdpbmRvdy5uYXZpZ2F0b3I/XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgaXNFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlJykgIT09IC0xICYmICghIW5hdmlnYXRvci5tc1NhdmVCbG9iIHx8ICEhbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpO1xyXG52YXIgaXNPcGVyYSA9ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT1BSLycpICE9PSAtMTtcclxudmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSAmJiAoJ25ldHNjYXBlJyBpbiB3aW5kb3cpICYmIC8gcnY6Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG52YXIgaXNDaHJvbWUgPSAoIWlzT3BlcmEgJiYgIWlzRWRnZSAmJiAhIW5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEpIHx8IGlzRWxlY3Ryb24oKSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lLycpICE9PSAtMTtcclxuXHJcbnZhciBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5pZiAoaXNTYWZhcmkgJiYgIWlzQ2hyb21lICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSAhPT0gLTEpIHtcclxuICAgIGlzU2FmYXJpID0gZmFsc2U7XHJcbiAgICBpc0Nocm9tZSA9IHRydWU7XHJcbn1cclxuXHJcbnZhciBNZWRpYVN0cmVhbSA9IHdpbmRvdy5NZWRpYVN0cmVhbTtcclxuXHJcbmlmICh0eXBlb2YgTWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIE1lZGlhU3RyZWFtID0gd2Via2l0TWVkaWFTdHJlYW07XHJcbn1cclxuXHJcbi8qZ2xvYmFsIE1lZGlhU3RyZWFtOnRydWUgKi9cclxuaWYgKHR5cGVvZiBNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIG92ZXJyaWRlIFwic3RvcFwiIG1ldGhvZCBmb3IgYWxsIGJyb3dzZXJzXHJcbiAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBiZWxvdyBmdW5jdGlvbiB2aWE6IGh0dHA6Ly9nb28uZ2wvQjNhZThjXHJcbi8qKlxyXG4gKiBSZXR1cm4gaHVtYW4tcmVhZGFibGUgZmlsZSBzaXplLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnl0ZXMgLSBQYXNzIGJ5dGVzIGFuZCBnZXQgZm9ybWF0dGVkIHN0cmluZy5cclxuICogQHJldHVybnMge3N0cmluZ30gLSBmb3JtYXR0ZWQgc3RyaW5nXHJcbiAqIEBleGFtcGxlXHJcbiAqIGJ5dGVzVG9TaXplKDEwMjQqMTAyNCo1KSA9PT0gJzUgR0InXHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICovXHJcbmZ1bmN0aW9uIGJ5dGVzVG9TaXplKGJ5dGVzKSB7XHJcbiAgICB2YXIgayA9IDEwMDA7XHJcbiAgICB2YXIgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJ107XHJcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gJzAgQnl0ZXMnO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKSwgMTApO1xyXG4gICAgcmV0dXJuIChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b1ByZWNpc2lvbigzKSArICcgJyArIHNpemVzW2ldO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtCbG9ifSBmaWxlIC0gRmlsZSBvciBCbG9iIG9iamVjdC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSAtIE9wdGlvbmFsIGZpbGUgbmFtZSBlLmcuIFwiUmVjb3JkZWQtVmlkZW8ud2VibVwiXHJcbiAqIEBleGFtcGxlXHJcbiAqIGludm9rZVNhdmVBc0RpYWxvZyhibG9iIG9yIGZpbGUsIFtvcHRpb25hbF0gZmlsZU5hbWUpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZva2VTYXZlQXNEaWFsb2coZmlsZSwgZmlsZU5hbWUpIHtcclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgIHRocm93ICdCbG9iIG9iamVjdCBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmlsZS50eXBlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmlsZS50eXBlID0gJ3ZpZGVvL3dlYm0nO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVFeHRlbnNpb24gPSAoZmlsZS50eXBlIHx8ICd2aWRlby93ZWJtJykuc3BsaXQoJy8nKVsxXTtcclxuXHJcbiAgICBpZiAoZmlsZU5hbWUgJiYgZmlsZU5hbWUuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgIHZhciBzcGxpdHRlZCA9IGZpbGVOYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgZmlsZU5hbWUgPSBzcGxpdHRlZFswXTtcclxuICAgICAgICBmaWxlRXh0ZW5zaW9uID0gc3BsaXR0ZWRbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZpbGVGdWxsTmFtZSA9IChmaWxlTmFtZSB8fCAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5OSkgKyA4ODg4ODg4ODgpKSArICcuJyArIGZpbGVFeHRlbnNpb247XHJcblxyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoZmlsZSwgZmlsZUZ1bGxOYW1lKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hdmlnYXRvci5tc1NhdmVCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihmaWxlLCBmaWxlRnVsbE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBoeXBlcmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBoeXBlcmxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICBoeXBlcmxpbmsuZG93bmxvYWQgPSBmaWxlRnVsbE5hbWU7XHJcblxyXG4gICAgaHlwZXJsaW5rLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjA7Y29sb3I6dHJhbnNwYXJlbnQ7JztcclxuICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaHlwZXJsaW5rKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGh5cGVybGluay5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGh5cGVybGluay5jbGljaygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoeXBlcmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgaHlwZXJsaW5rLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xyXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChoeXBlcmxpbmsuaHJlZik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vY2hldG9uL2lzLWVsZWN0cm9uL2Jsb2IvbWFzdGVyL2luZGV4LmpzXHJcbiAqKi9cclxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcclxuICAgIC8vIFJlbmRlcmVyIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgPT09ICdvYmplY3QnICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIHByb2Nlc3NcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MudmVyc2lvbnMgPT09ICdvYmplY3QnICYmICEhcHJvY2Vzcy52ZXJzaW9ucy5lbGVjdHJvbikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldGVjdCB0aGUgdXNlciBhZ2VudCB3aGVuIHRoZSBgbm9kZUludGVncmF0aW9uYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudCA9PT0gJ3N0cmluZycgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFbGVjdHJvbicpID49IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYWNrcyhzdHJlYW0sIGtpbmQpIHtcclxuICAgIGlmICghc3RyZWFtIHx8ICFzdHJlYW0uZ2V0VHJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gdC5raW5kID09PSAoa2luZCB8fCAnYXVkaW8nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTcmNPYmplY3Qoc3RyZWFtLCBlbGVtZW50KSB7XHJcbiAgICBpZiAoJ3NyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfSBlbHNlIGlmICgnbW96U3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5tb3pTcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtCbG9ifSBmaWxlIC0gRmlsZSBvciBCbG9iIG9iamVjdC5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbi5cclxuICogQGV4YW1wbGVcclxuICogZ2V0U2Vla2FibGVCbG9iKGJsb2Igb3IgZmlsZSwgY2FsbGJhY2spO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTZWVrYWJsZUJsb2IoaW5wdXRCbG9iLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRUJNTC5qcyBjb3B5cmlnaHRzIGdvZXMgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS9sZWdva2ljaGkvdHMtZWJtbFxyXG4gICAgaWYgKHR5cGVvZiBFQk1MID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGxpbms6IGh0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9FQk1MLmpzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlYWRlciA9IG5ldyBFQk1MLlJlYWRlcigpO1xyXG4gICAgdmFyIGRlY29kZXIgPSBuZXcgRUJNTC5EZWNvZGVyKCk7XHJcbiAgICB2YXIgdG9vbHMgPSBFQk1MLnRvb2xzO1xyXG5cclxuICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBlYm1sRWxtcyA9IGRlY29kZXIuZGVjb2RlKHRoaXMucmVzdWx0KTtcclxuICAgICAgICBlYm1sRWxtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWQoZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVhZGVyLnN0b3AoKTtcclxuICAgICAgICB2YXIgcmVmaW5lZE1ldGFkYXRhQnVmID0gdG9vbHMubWFrZU1ldGFkYXRhU2Vla2FibGUocmVhZGVyLm1ldGFkYXRhcywgcmVhZGVyLmR1cmF0aW9uLCByZWFkZXIuY3Vlcyk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSB0aGlzLnJlc3VsdC5zbGljZShyZWFkZXIubWV0YWRhdGFTaXplKTtcclxuICAgICAgICB2YXIgbmV3QmxvYiA9IG5ldyBCbG9iKFtyZWZpbmVkTWV0YWRhdGFCdWYsIGJvZHldLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhuZXdCbG9iKTtcclxuICAgIH07XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGlucHV0QmxvYik7XHJcbn1cblxyXG4vLyBfX19fX19fX19fICh1c2VkIHRvIGhhbmRsZSBzdHVmZiBsaWtlIGh0dHA6Ly9nb28uZ2wveG1FNWVnKSBpc3N1ZSAjMTI5XHJcbi8vIFN0b3JhZ2UuanNcclxuXHJcbi8qKlxyXG4gKiBTdG9yYWdlIGlzIGEgc3RhbmRhbG9uZSBvYmplY3QgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBzdG9yZSByZXVzYWJsZSBvYmplY3RzIGUuZy4gXCJuZXcgQXVkaW9Db250ZXh0XCIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBTdG9yYWdlLkF1ZGlvQ29udGV4dCA9PT0gd2Via2l0QXVkaW9Db250ZXh0XHJcbiAqIEBwcm9wZXJ0eSB7d2Via2l0QXVkaW9Db250ZXh0fSBBdWRpb0NvbnRleHQgLSBLZWVwcyBhIHJlZmVyZW5jZSB0byBBdWRpb0NvbnRleHQgb2JqZWN0LlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxudmFyIFN0b3JhZ2UgPSB7fTtcclxuXHJcbmlmICh0eXBlb2YgQXVkaW9Db250ZXh0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQ7XHJcbn0gZWxzZSBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFN0b3JhZ2UuQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5TdG9yYWdlID0gU3RvcmFnZTtcclxufVxuXHJcbmZ1bmN0aW9uIGlzTWVkaWFSZWNvcmRlckNvbXBhdGlibGUoKSB7XHJcbiAgICBpZiAoaXNGaXJlZm94IHx8IGlzU2FmYXJpIHx8IGlzRWRnZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgdmFyIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB2YXIgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuXHJcbiAgICBpZiAoaXNDaHJvbWUgfHwgaXNPcGVyYSkge1xyXG4gICAgICAgIHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ2hyb21lJyk7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0cmltIHRoZSBmdWxsVmVyc2lvbiBzdHJpbmcgYXQgc2VtaWNvbG9uL3NwYWNlIGlmIHByZXNlbnRcclxuICAgIGlmICgoaXggPSBmdWxsVmVyc2lvbi5pbmRleE9mKCc7JykpICE9PSAtMSkge1xyXG4gICAgICAgIGZ1bGxWZXJzaW9uID0gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGl4ID0gZnVsbFZlcnNpb24uaW5kZXhPZignICcpKSAhPT0gLTEpIHtcclxuICAgICAgICBmdWxsVmVyc2lvbiA9IGZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyBmdWxsVmVyc2lvbiwgMTApO1xyXG5cclxuICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgZnVsbFZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1ham9yVmVyc2lvbiA+PSA0OTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTWVkaWFTdHJlYW1SZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIE1lZGlhU3RyZWFtUmVjb3JkZXIgaXMgYW4gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIHtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLXJlY29yZC9NZWRpYVJlY29yZGVyLmh0bWx8TWVkaWFSZWNvcmRlciBBUEl9LiBJdCBpcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHJlY29yZCBNZWRpYVN0cmVhbShzKSBpbiBib3RoIENocm9tZSBhbmQgRmlyZWZveC5cclxuICogQHN1bW1hcnkgUnVucyB0b3Agb3ZlciB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1yZWNvcmQvTWVkaWFSZWNvcmRlci5odG1sfE1lZGlhUmVjb3JkZXIgQVBJfS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFufE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIGNvbmZpZyA9IHtcclxuICogICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibScsIC8vIHZwOCwgdnA5LCBoMjY0LCBta3YsIG9wdXMvdm9yYmlzXHJcbiAqICAgICBhdWRpb0JpdHNQZXJTZWNvbmQgOiAyNTYgKiA4ICogMTAyNCxcclxuICogICAgIHZpZGVvQml0c1BlclNlY29uZCA6IDI1NiAqIDggKiAxMDI0LFxyXG4gKiAgICAgYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsICAvLyBpZiB0aGlzIGlzIHByb3ZpZGVkLCBza2lwIGFib3ZlIHR3b1xyXG4gKiAgICAgY2hlY2tGb3JJbmFjdGl2ZVRyYWNrczogdHJ1ZSxcclxuICogICAgIHRpbWVTbGljZTogMTAwMCwgLy8gY29uY2F0ZW5hdGUgaW50ZXJ2YWxzIGJhc2VkIGJsb2JzXHJcbiAqICAgICBvbmRhdGFhdmFpbGFibGU6IGZ1bmN0aW9uKCkge30gLy8gZ2V0IGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gKiB9XHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBNZWRpYVN0cmVhbVJlY29yZGVyKG1lZGlhU3RyZWFtLCBjb25maWcpO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKlxyXG4gKiAgICAgLy8gb3JcclxuICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgbWltZVR5cGU6IFwidmlkZW8vd2VibVwiLCB0aW1lU2xpY2U6IDEwMDB9XHJcbiAqIEB0aHJvd3MgV2lsbCB0aHJvdyBhbiBlcnJvciBpZiBmaXJzdCBhcmd1bWVudCBcIk1lZGlhU3RyZWFtXCIgaXMgbWlzc2luZy4gQWxzbyB0aHJvd3MgZXJyb3IgaWYgXCJNZWRpYVJlY29yZGVyIEFQSVwiIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE1lZGlhU3RyZWFtUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgJ0ZpcnN0IGFyZ3VtZW50IFwiTWVkaWFTdHJlYW1cIiBpcyByZXF1aXJlZC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFSZWNvcmRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnRzIE1lZGlhIFJlY29yZGVyIEFQSS4gUGxlYXNlIHRyeSBvdGhlciBtb2R1bGVzIGUuZy4gV2hhbW15UmVjb3JkZXIgb3IgU3RlcmVvQXVkaW9SZWNvcmRlci4nO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7XHJcbiAgICAgICAgLy8gYml0c1BlclNlY29uZDogMjU2ICogOCAqIDEwMjQsXHJcbiAgICAgICAgbWltZVR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdhdWRpbycpIHtcclxuICAgICAgICBpZiAoZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAndmlkZW8nKS5sZW5ndGggJiYgZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKCEhbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xyXG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2soZ2V0VHJhY2tzKG1lZGlhU3RyZWFtLCAnYXVkaW8nKVswXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZWJraXRNZWRpYVN0cmVhbVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKGdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcubWltZVR5cGUgfHwgY29uZmlnLm1pbWVUeXBlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdhdWRpbycpID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSBpc0Nocm9tZSA/ICdhdWRpby93ZWJtJyA6ICdhdWRpby9vZ2cnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5taW1lVHlwZSAmJiBjb25maWcubWltZVR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9PSAnYXVkaW8vb2dnJyAmJiAhIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICAgICAgLy8gZm9yY2luZyBiZXR0ZXIgY29kZWNzIG9uIEZpcmVmb3ggKHZpYSAjMTY2KVxyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSAnYXVkaW8vb2dnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFycmF5T2ZCbG9icyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhcnJheSBvZiBibG9icy4gVXNlIG9ubHkgd2l0aCBcInRpbWVTbGljZVwiLiBJdHMgdXNlZnVsIHRvIHByZXZpZXcgcmVjb3JkaW5nIGFueXRpbWUsIHdpdGhvdXQgdXNpbmcgdGhlIFwic3RvcFwiIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIGFycmF5T2ZCbG9icyA9IHJlY29yZGVyLmdldEFycmF5T2ZCbG9icygpO1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFycmF5IG9mIHJlY29yZGVkIGJsb2JzLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFycmF5T2ZCbG9icyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcnJheU9mQmxvYnM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gc2V0IGRlZmF1bHRzXHJcbiAgICAgICAgc2VsZi5ibG9iID0gbnVsbDtcclxuICAgICAgICBzZWxmLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzID0gW107XHJcbiAgICAgICAgYWxsU3RhdGVzID0gW107XHJcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XHJcblxyXG4gICAgICAgIHZhciByZWNvcmRlckhpbnRzID0gY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFzc2luZyBmb2xsb3dpbmcgY29uZmlnIG92ZXIgTWVkaWFSZWNvcmRlciBBUEkuJywgcmVjb3JkZXJIaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAvLyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIEZpcmVmb3ggZG9lc24ndCBmYWlscyB0byByZWNvcmQgc3RyZWFtcyAzLTQgdGltZXMgd2l0aG91dCByZWxvYWRpbmcgdGhlIHBhZ2UuXHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ2hyb21lICYmICFpc01lZGlhUmVjb3JkZXJDb21wYXRpYmxlKCkpIHtcclxuICAgICAgICAgICAgLy8gdG8gc3VwcG9ydCB2aWRlby1vbmx5IHJlY29yZGluZyBvbiBzdGFibGVcclxuICAgICAgICAgICAgcmVjb3JkZXJIaW50cyA9ICd2aWRlby92cDgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiByZWNvcmRlckhpbnRzLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmICghTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQocmVjb3JkZXJIaW50cy5taW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZWRpYVJlY29yZGVyIEFQSSBzZWVtcyB1bmFibGUgdG8gcmVjb3JkIG1pbWVUeXBlOicsIHJlY29yZGVySGludHMubWltZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZGVySGludHMubWltZVR5cGUgPSBjb25maWcudHlwZSA9PT0gJ2F1ZGlvJyA/ICdhdWRpby93ZWJtJyA6ICd2aWRlby93ZWJtJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXNpbmcgTWVkaWFSZWNvcmRlciBBUEkgaGVyZVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSwgcmVjb3JkZXJIaW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXNldFxyXG4gICAgICAgICAgICBjb25maWcubWltZVR5cGUgPSByZWNvcmRlckhpbnRzLm1pbWVUeXBlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gY2hyb21lLWJhc2VkIGZhbGxiYWNrXHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYVN0cmVhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvbGQgaGFjaz9cclxuICAgICAgICBpZiAocmVjb3JkZXJIaW50cy5taW1lVHlwZSAmJiAhTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQgJiYgJ2NhblJlY29yZE1pbWVUeXBlJyBpbiBtZWRpYVJlY29yZGVyICYmIG1lZGlhUmVjb3JkZXIuY2FuUmVjb3JkTWltZVR5cGUocmVjb3JkZXJIaW50cy5taW1lVHlwZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lZGlhUmVjb3JkZXIgQVBJIHNlZW1zIHVuYWJsZSB0byByZWNvcmQgbWltZVR5cGU6JywgcmVjb3JkZXJIaW50cy5taW1lVHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BhdGNoaW5nIE9uRGF0YUF2YWlsYWJsZSBIYW5kbGVyXHJcbiAgICAgICAgbWVkaWFSZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdvbmRhdGFhdmFpbGFibGU6ICcgKyBieXRlc1RvU2l6ZShlLmRhdGEuc2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5zaXplICYmIGUuZGF0YS5zaXplID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkJsb2JzLnB1c2goZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lU3RhbXAoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25kYXRhYXZhaWxhYmxlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvYiA9IGNvbmZpZy5nZXROYXRpdmVCbG9iID8gZS5kYXRhIDogbmV3IEJsb2IoW2UuZGF0YV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKHJlY29yZGVySGludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25kYXRhYXZhaWxhYmxlKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmRhdGEgfHwgIWUuZGF0YS5zaXplIHx8IGUuZGF0YS5zaXplIDwgMTAwIHx8IHNlbGYuYmxvYikge1xyXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgc3RvcFJlY29yZGluZyBhbHdheXMgZ2V0dGluZyBmaXJlZFxyXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGVyZSBpcyBpbnZhbGlkIGRhdGFcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnJlY29yZGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBnZXRNaW1lVHlwZShyZWNvcmRlckhpbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29yZGluZ0NhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5ibG9iID0gY29uZmlnLmdldE5hdGl2ZUJsb2IgPyBlLmRhdGEgOiBuZXcgQmxvYihbZS5kYXRhXSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZ2V0TWltZVR5cGUocmVjb3JkZXJIaW50cylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi5yZWNvcmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayhzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRpbmdDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3N0YXJ0ZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9ucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3BhdXNlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxsU3RhdGVzLnB1c2goJ3Jlc3VtZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLm9uc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBhbGxTdGF0ZXMucHVzaCgnc3RvcHBlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIub25lcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFlcnJvci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5uYW1lID0gJ1Vua25vd25FcnJvcic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFsbFN0YXRlcy5wdXNoKCdlcnJvcjogJyArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB2aWE6IGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtcmVjb3JkL01lZGlhUmVjb3JkZXIuaHRtbCNleGNlcHRpb24tc3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ludmFsaWRzdGF0ZScpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBNZWRpYVJlY29yZGVyIGlzIG5vdCBpbiBhIHN0YXRlIGluIHdoaWNoIHRoZSBwcm9wb3NlZCBvcGVyYXRpb24gaXMgYWxsb3dlZCB0byBiZSBleGVjdXRlZC4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ25vdHN1cHBvcnRlZCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01JTUUgdHlwZSAoJywgcmVjb3JkZXJIaW50cy5taW1lVHlwZSwgJykgaXMgbm90IHN1cHBvcnRlZC4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlY3VyaXR5JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVkaWFSZWNvcmRlciBzZWN1cml0eSBlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBvbGRlciBjb2RlIGJlbG93XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvci5uYW1lID09PSAnT3V0T2ZNZW1vcnknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVBIGhhcyBleGhhdXNlZCB0aGUgYXZhaWxhYmxlIG1lbW9yeS4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdJbGxlZ2FsU3RyZWFtTW9kaWZpY2F0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgbW9kaWZpY2F0aW9uIHRvIHRoZSBzdHJlYW0gaGFzIG9jY3VycmVkIHRoYXQgbWFrZXMgaXQgaW1wb3NzaWJsZSB0byBjb250aW51ZSByZWNvcmRpbmcuIEFuIGV4YW1wbGUgd291bGQgYmUgdGhlIGFkZGl0aW9uIG9mIGEgVHJhY2sgd2hpbGUgcmVjb3JkaW5nIGlzIG9jY3VycmluZy4gVXNlciBhZ2VudHMgU0hPVUxEIHByb3ZpZGUgYXMgbXVjaCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlIGluIHRoZSBtZXNzYWdlIGF0dHJpYnV0ZS4nLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdPdGhlclJlY29yZGluZ0Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZWQgZm9yIGFuIGZhdGFsIGVycm9yIG90aGVyIHRoYW4gdGhvc2UgbGlzdGVkIGFib3ZlLiBVc2VyIGFnZW50cyBTSE9VTEQgcHJvdmlkZSBhcyBtdWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYXMgcG9zc2libGUgaW4gdGhlIG1lc3NhZ2UgYXR0cmlidXRlLicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gJ0dlbmVyaWNFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVUEgY2Fubm90IHByb3ZpZGUgdGhlIGNvZGVjIG9yIHJlY29yZGluZyBvcHRpb24gdGhhdCBoYXMgYmVlbiByZXF1ZXN0ZWQuJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZWRpYVJlY29yZGVyIEVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoZnVuY3Rpb24obG9vcGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYubWFudWFsbHlTdG9wcGVkICYmIG1lZGlhUmVjb3JkZXIgJiYgbWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ2luYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcudGltZXNsaWNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMCBtaW51dGVzLCBlbm91Z2g/XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgxMCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTtcclxuICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlICE9PSAnaW5hY3RpdmUnICYmIG1lZGlhUmVjb3JkZXIuc3RhdGUgIT09ICdzdG9wcGVkJykge1xyXG4gICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVTdGFtcCgpO1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0YXJ0KGNvbmZpZy50aW1lU2xpY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgaXMgNjAgbWludXRlczsgZW5vdWdoP1xyXG4gICAgICAgICAgICAvLyB1c2UgY29uZmlnID0+IHt0aW1lU2xpY2U6IDEwMDB9IG90aGVyd2lzZVxyXG5cclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgzLjZlKzYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpOyAvLyBvbGQgY29kZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0FycmF5fSB0aW1lc3RhbXBzIC0gQXJyYXkgb2YgdGltZSBzdGFtcHNcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogY29uc29sZS5sb2cocmVjb3JkZXIudGltZXN0YW1wcyk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMudGltZXN0YW1wcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVTdGFtcCgpIHtcclxuICAgICAgICBzZWxmLnRpbWVzdGFtcHMucHVzaChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVGltZVN0YW1wID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vblRpbWVTdGFtcChzZWxmLnRpbWVzdGFtcHNbc2VsZi50aW1lc3RhbXBzLmxlbmd0aCAtIDFdLCBzZWxmLnRpbWVzdGFtcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaW1lVHlwZShzZWNvbmRPYmplY3QpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLm1pbWVUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLm1pbWVUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlY29uZE9iamVjdC5taW1lVHlwZSB8fCAndmlkZW8vd2VibSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgc2VsZi5tYW51YWxseVN0b3BwZWQgPSB0cnVlOyAvLyB1c2VkIGluc2lkZSB0aGUgbWVkaWFSZWNvcmRlci5vbmVycm9yXHJcblxyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlY29yZGluZ0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnRpbWVTbGljZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmxvYiA9IG5ldyBCbG9iKGFycmF5T2ZCbG9icywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGdldE1pbWVUeXBlKGNvbmZpZylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYucmVjb3JkaW5nQ2FsbGJhY2soc2VsZi5ibG9iKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlci5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNZWRpYVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICBtZWRpYVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobWVkaWFSZWNvcmRlciAmJiBtZWRpYVJlY29yZGVyLnN0YXRlID09PSAncmVjb3JkaW5nJykge1xyXG4gICAgICAgICAgICBzZWxmLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgYXJyYXlPZkJsb2JzID0gW107XHJcbiAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgc2VsZi50aW1lc3RhbXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHRvIFwiTWVkaWFSZWNvcmRlclwiIG9iamVjdFxyXG4gICAgdmFyIG1lZGlhUmVjb3JkZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2Nlc3MgdG8gbmF0aXZlIE1lZGlhUmVjb3JkZXIgQVBJXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIGludGVybmFsID0gcmVjb3JkZXIuZ2V0SW50ZXJuYWxSZWNvcmRlcigpO1xyXG4gICAgICogaW50ZXJuYWwub25kYXRhYXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7fTsgLy8gb3ZlcnJpZGVcclxuICAgICAqIGludGVybmFsLnN0cmVhbSwgaW50ZXJuYWwub25wYXVzZSwgaW50ZXJuYWwub25zdG9wLCBldGMuXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGludGVybmFsIHJlY29yZGluZyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0SW50ZXJuYWxSZWNvcmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc01lZGlhU3RyZWFtQWN0aXZlKCkge1xyXG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBtZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIW1lZGlhU3RyZWFtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgnZW5kZWQnIGluIG1lZGlhU3RyZWFtKSB7IC8vIG9sZCBoYWNrXHJcbiAgICAgICAgICAgIGlmIChtZWRpYVN0cmVhbS5lbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gUmVjb3JkZWQgZGF0YSBhcyBcIkJsb2JcIiBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IE1lZGlhUmVjb3JkZXIgcmVhZG9ubHkgc3RhdGUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVkaWFTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBzdGF0ZSA9IHJlY29yZGVyLmdldFN0YXRlKCk7XHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHJlY29yZGluZyBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2luYWN0aXZlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZWRpYVJlY29yZGVyLnN0YXRlIHx8ICdpbmFjdGl2ZSc7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGxpc3Qgb2YgYWxsIHJlY29yZGluZyBzdGF0ZXNcclxuICAgIHZhciBhbGxTdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBNZWRpYVJlY29yZGVyIGFsbCByZWNvcmRpbmcgc3RhdGVzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE1lZGlhU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiB2YXIgc3RhdGUgPSByZWNvcmRlci5nZXRBbGxTdGF0ZXMoKTtcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbGwgcmVjb3JkaW5nIHN0YXRlc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdldEFsbFN0YXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBhbGxTdGF0ZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcclxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgb25seSByZWNvcmQgYmxhY2sgZnJhbWVzIFxyXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xyXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxyXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IGZhbHNlOyAvLyBkaXNhYmxlIHRvIG1pbmltaXplIENQVSB1c2FnZVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyB0aGlzIG1ldGhvZCBjaGVja3MgaWYgbWVkaWEgc3RyZWFtIGlzIHN0b3BwZWRcclxuICAgIC8vIG9yIGlmIGFueSB0cmFjayBpcyBlbmRlZC5cclxuICAgIChmdW5jdGlvbiBsb29wZXIoKSB7XHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyIHx8IGNvbmZpZy5jaGVja0ZvckluYWN0aXZlVHJhY2tzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNNZWRpYVN0cmVhbUFjdGl2ZSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01lZGlhU3RyZWFtIHNlZW1zIHN0b3BwZWQuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCAxMDAwKTsgLy8gY2hlY2sgZXZlcnkgc2Vjb25kXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNZWRpYVN0cmVhbVJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuTWVkaWFTdHJlYW1SZWNvcmRlciA9IE1lZGlhU3RyZWFtUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBzb3VyY2UgY29kZSBmcm9tOiBodHRwOi8vdHlwZWRhcnJheS5vcmcvd3AtY29udGVudC9wcm9qZWN0cy9XZWJBdWRpb1JlY29yZGVyL3NjcmlwdC5qc1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRpYW1vbmQvUmVjb3JkZXJqcyNsaWNlbnNlLW1pdFxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFN0ZXJlb0F1ZGlvUmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBTdGVyZW9BdWRpb1JlY29yZGVyIGlzIGEgc3RhbmRhbG9uZSBjbGFzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIFwic3RlcmVvXCIgYXVkaW8tcmVjb3JkaW5nIGluIGNocm9tZS5cclxuICogQHN1bW1hcnkgSmF2YVNjcmlwdCBzdGFuZGFsb25lIG9iamVjdCBmb3Igc3RlcmVvIGF1ZGlvIHJlY29yZGluZy5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBTdGVyZW9BdWRpb1JlY29yZGVyKE1lZGlhU3RyZWFtLCB7XHJcbiAqICAgICBzYW1wbGVSYXRlOiA0NDEwMCxcclxuICogICAgIGJ1ZmZlclNpemU6IDQwOTZcclxuICogfSk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IG1lZGlhU3RyZWFtIC0gTWVkaWFTdHJlYW0gb2JqZWN0IGZldGNoZWQgdXNpbmcgZ2V0VXNlck1lZGlhIEFQSSBvciBnZW5lcmF0ZWQgdXNpbmcgY2FwdHVyZVN0cmVhbVVudGlsRW5kZWQgb3IgV2ViQXVkaW8gQVBJLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3NhbXBsZVJhdGU6IDQ0MTAwLCBidWZmZXJTaXplOiA0MDk2LCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gU3RlcmVvQXVkaW9SZWNvcmRlcihtZWRpYVN0cmVhbSwgY29uZmlnKSB7XHJcbiAgICBpZiAoIWdldFRyYWNrcyhtZWRpYVN0cmVhbSwgJ2F1ZGlvJykubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgJ1lvdXIgc3RyZWFtIGhhcyBubyBhdWRpbyB0cmFja3MuJztcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlc1xyXG4gICAgdmFyIGxlZnRjaGFubmVsID0gW107XHJcbiAgICB2YXIgcmlnaHRjaGFubmVsID0gW107XHJcbiAgICB2YXIgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICB2YXIgcmVjb3JkaW5nTGVuZ3RoID0gMDtcclxuICAgIHZhciBqc0F1ZGlvTm9kZTtcclxuXHJcbiAgICB2YXIgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzID0gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBzYW1wbGUgcmF0ZXMgc3VjaCBhcyA4SyBvciAxNksuIFJlZmVyZW5jZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjg5NzcxMzYvNTUyMTgyXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGVzaXJlZFNhbXBSYXRlIC0gRGVzaXJlZCBCaXRzIHBlciBzYW1wbGUgKiAxMDAwXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogdmFyIHJlY29yZGVyID0gU3RlcmVvQXVkaW9SZWNvcmRlcihtZWRpYVN0cmVhbSwge1xyXG4gICAgICogICBkZXNpcmVkU2FtcFJhdGU6IDE2ICogMTAwMCAvLyBiaXRzLXBlci1zYW1wbGUgKiAxMDAwXHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdmFyIGRlc2lyZWRTYW1wUmF0ZSA9IGNvbmZpZy5kZXNpcmVkU2FtcFJhdGU7XHJcblxyXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKGNvbmZpZy5sZWZ0Q2hhbm5lbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG51bWJlck9mQXVkaW9DaGFubmVscyA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEpIHtcclxuICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbnVtYmVyT2ZBdWRpb0NoYW5uZWxzIHx8IG51bWJlck9mQXVkaW9DaGFubmVscyA8IDEpIHtcclxuICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0ZXJlb0F1ZGlvUmVjb3JkZXIgaXMgc2V0IHRvIHJlY29yZCBudW1iZXIgb2YgY2hhbm5lbHM6ICcgKyBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGFueSBUcmFjayB3aXRoaW4gdGhlIE1lZGlhU3RyZWFtIGlzIG11dGVkIG9yIG5vdCBlbmFibGVkIGF0IGFueSB0aW1lLCBcclxuICAgIC8vIHRoZSBicm93c2VyIHdpbGwgb25seSByZWNvcmQgYmxhY2sgZnJhbWVzIFxyXG4gICAgLy8gb3Igc2lsZW5jZSBzaW5jZSB0aGF0IGlzIHRoZSBjb250ZW50IHByb2R1Y2VkIGJ5IHRoZSBUcmFja1xyXG4gICAgLy8gc28gd2UgbmVlZCB0byBzdG9wUmVjb3JkaW5nIGFzIHNvb24gYXMgYW55IHNpbmdsZSB0cmFjayBlbmRzLlxyXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tGb3JJbmFjdGl2ZVRyYWNrcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNNZWRpYVN0cmVhbUFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIGFsd2F5cyByZXR1cm4gXCJ0cnVlXCJcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbWVkaWFTdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFtZWRpYVN0cmVhbS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoJ2VuZGVkJyBpbiBtZWRpYVN0cmVhbSkgeyAvLyBvbGQgaGFja1xyXG4gICAgICAgICAgICBpZiAobWVkaWFTdHJlYW0uZW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlY29yZHMgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXRWYXJpYWJsZXMoKTtcclxuXHJcbiAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gaXNQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGxvb3BlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VMZWZ0UmlnaHRCdWZmZXJzKGNvbmZpZywgY2FsbGJhY2spIHtcclxuICAgICAgICBmdW5jdGlvbiBtZXJnZUF1ZGlvQnVmZmVycyhjb25maWcsIGNiKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBjb25maWcubnVtYmVyT2ZBdWRpb0NoYW5uZWxzO1xyXG5cclxuICAgICAgICAgICAgLy8gdG9kbzogXCJzbGljZSgwKVwiIC0tLSBpcyBpdCBjYXVzZXMgbG9vcD8gU2hvdWxkIGJlIHJlbW92ZWQ/XHJcbiAgICAgICAgICAgIHZhciBsZWZ0QnVmZmVycyA9IGNvbmZpZy5sZWZ0QnVmZmVycy5zbGljZSgwKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0QnVmZmVycyA9IGNvbmZpZy5yaWdodEJ1ZmZlcnMuc2xpY2UoMCk7XHJcbiAgICAgICAgICAgIHZhciBzYW1wbGVSYXRlID0gY29uZmlnLnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcm5hbEludGVybGVhdmVkTGVuZ3RoID0gY29uZmlnLmludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBkZXNpcmVkU2FtcFJhdGUgPSBjb25maWcuZGVzaXJlZFNhbXBSYXRlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHRCdWZmZXJzID0gbWVyZ2VCdWZmZXJzKHJpZ2h0QnVmZmVycywgaW50ZXJuYWxJbnRlcmxlYXZlZExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2lyZWRTYW1wUmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdWZmZXJzID0gaW50ZXJwb2xhdGVBcnJheShsZWZ0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnMgPSBpbnRlcnBvbGF0ZUFycmF5KHJpZ2h0QnVmZmVycywgZGVzaXJlZFNhbXBSYXRlLCBzYW1wbGVSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdEJ1ZmZlcnMgPSBtZXJnZUJ1ZmZlcnMobGVmdEJ1ZmZlcnMsIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0QnVmZmVycyA9IGludGVycG9sYXRlQXJyYXkobGVmdEJ1ZmZlcnMsIGRlc2lyZWRTYW1wUmF0ZSwgc2FtcGxlUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzYW1wbGUgcmF0ZSBhcyBkZXNpcmVkIHNhbXBsZSByYXRlXHJcbiAgICAgICAgICAgIGlmIChkZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZvciBjaGFuZ2luZyB0aGUgc2FtcGxpbmcgcmF0ZSwgcmVmZXJlbmNlOlxyXG4gICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODk3NzEzNi81NTIxODJcclxuICAgICAgICAgICAgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcnJheShkYXRhLCBuZXdTYW1wbGVSYXRlLCBvbGRTYW1wbGVSYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZml0Q291bnQgPSBNYXRoLnJvdW5kKGRhdGEubGVuZ3RoICogKG5ld1NhbXBsZVJhdGUgLyBvbGRTYW1wbGVSYXRlKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmluZ0ZhY3RvciA9IE51bWJlcigoZGF0YS5sZW5ndGggLSAxKSAvIChmaXRDb3VudCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFbMF0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBmaXRDb3VudCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBpICogc3ByaW5nRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBOdW1iZXIoTWF0aC5mbG9vcih0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gTnVtYmVyKE1hdGguY2VpbCh0bXApKS50b0ZpeGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0UG9pbnQgPSB0bXAgLSBiZWZvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YVtpXSA9IGxpbmVhckludGVycG9sYXRlKGRhdGFbYmVmb3JlXSwgZGF0YVthZnRlcl0sIGF0UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVtmaXRDb3VudCAtIDFdID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRlKGJlZm9yZSwgYWZ0ZXIsIGF0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiZWZvcmUgKyAoYWZ0ZXIgLSBiZWZvcmUpICogYXRQb2ludDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWVyZ2VCdWZmZXJzKGNoYW5uZWxCdWZmZXIsIHJMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQ2NEFycmF5KHJMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG5nID0gY2hhbm5lbEJ1ZmZlci5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBjaGFubmVsQnVmZmVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zZXQoYnVmZmVyLCBvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGludGVybGVhdmUobGVmdENoYW5uZWwsIHJpZ2h0Q2hhbm5lbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGxlZnRDaGFubmVsLmxlbmd0aCArIHJpZ2h0Q2hhbm5lbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDY0QXJyYXkobGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSBsZWZ0Q2hhbm5lbFtpbnB1dEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXgrK10gPSByaWdodENoYW5uZWxbaW5wdXRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gd3JpdGVVVEZCeXRlcyh2aWV3LCBvZmZzZXQsIHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IHN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxuZzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldy5zZXRVaW50OChvZmZzZXQgKyBpLCBzdHJpbmcuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGludGVybGVhdmUgYm90aCBjaGFubmVscyB0b2dldGhlclxyXG4gICAgICAgICAgICB2YXIgaW50ZXJsZWF2ZWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdWRpb0NoYW5uZWxzID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmxlYXZlZCA9IGludGVybGVhdmUobGVmdEJ1ZmZlcnMsIHJpZ2h0QnVmZmVycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGludGVybGVhdmVkID0gbGVmdEJ1ZmZlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcmxlYXZlZExlbmd0aCA9IGludGVybGVhdmVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB3YXYgZmlsZVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0aW5nQnVmZmVyTGVuZ3RoID0gNDQgKyBpbnRlcmxlYXZlZExlbmd0aCAqIDI7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHJlc3VsdGluZ0J1ZmZlckxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUklGRiBjaHVuayBkZXNjcmlwdG9yL2lkZW50aWZpZXIgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMCwgJ1JJRkYnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJJRkYgY2h1bmsgbGVuZ3RoXHJcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgXCI0NFwiIHRvIFwiMzZcIiB2aWEgIzQwMVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMig0LCAzNiArIGludGVybGVhdmVkTGVuZ3RoICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSSUZGIHR5cGUgXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgOCwgJ1dBVkUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvcm1hdCBjaHVuayBpZGVudGlmaWVyIFxyXG4gICAgICAgICAgICAvLyBGTVQgc3ViLWNodW5rXHJcbiAgICAgICAgICAgIHdyaXRlVVRGQnl0ZXModmlldywgMTIsICdmbXQgJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb3JtYXQgY2h1bmsgbGVuZ3RoIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMigxNiwgMTYsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2FtcGxlIGZvcm1hdCAocmF3KVxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQxNigyMCwgMSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGVyZW8gKDIgY2hhbm5lbHMpXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDIyLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2FtcGxlIHJhdGUgXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDMyKDI0LCBzYW1wbGVSYXRlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJ5dGUgcmF0ZSAoc2FtcGxlIHJhdGUgKiBibG9jayBhbGlnbilcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MzIoMjgsIHNhbXBsZVJhdGUgKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJsb2NrIGFsaWduIChjaGFubmVsIGNvdW50ICogYnl0ZXMgcGVyIHNhbXBsZSkgXHJcbiAgICAgICAgICAgIHZpZXcuc2V0VWludDE2KDMyLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMgKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJpdHMgcGVyIHNhbXBsZSBcclxuICAgICAgICAgICAgdmlldy5zZXRVaW50MTYoMzQsIDE2LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRhdGEgc3ViLWNodW5rXHJcbiAgICAgICAgICAgIC8vIGRhdGEgY2h1bmsgaWRlbnRpZmllciBcclxuICAgICAgICAgICAgd3JpdGVVVEZCeXRlcyh2aWV3LCAzNiwgJ2RhdGEnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRhdGEgY2h1bmsgbGVuZ3RoIFxyXG4gICAgICAgICAgICB2aWV3LnNldFVpbnQzMig0MCwgaW50ZXJsZWF2ZWRMZW5ndGggKiAyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdyaXRlIHRoZSBQQ00gc2FtcGxlc1xyXG4gICAgICAgICAgICB2YXIgbG5nID0gaW50ZXJsZWF2ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDQ0O1xyXG4gICAgICAgICAgICB2YXIgdm9sdW1lID0gMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbmc7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmlldy5zZXRJbnQxNihpbmRleCwgaW50ZXJsZWF2ZWRbaV0gKiAoMHg3RkZGICogdm9sdW1lKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCArPSAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYih7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogdmlld1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgdmlldzogdmlld1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcubm9Xb3JrZXIpIHtcclxuICAgICAgICAgICAgbWVyZ2VBdWRpb0J1ZmZlcnMoY29uZmlnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhLmJ1ZmZlciwgZGF0YS52aWV3KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgd2ViV29ya2VyID0gcHJvY2Vzc0luV2ViV29ya2VyKG1lcmdlQXVkaW9CdWZmZXJzKTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LmRhdGEuYnVmZmVyLCBldmVudC5kYXRhLnZpZXcpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVsZWFzZSBtZW1vcnlcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh3ZWJXb3JrZXIud29ya2VyVVJMKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGtpbGwgd2Vid29ya2VyIChvciBDaHJvbWUgd2lsbCBraWxsIHlvdXIgcGFnZSBhZnRlciB+MjUgY2FsbHMpXHJcbiAgICAgICAgICAgIHdlYldvcmtlci50ZXJtaW5hdGUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzSW5XZWJXb3JrZXIoX2Z1bmN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHdvcmtlclVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAnO3RoaXMub25tZXNzYWdlID0gIGZ1bmN0aW9uIChlZWUpIHsnICsgX2Z1bmN0aW9uLm5hbWUgKyAnKGVlZS5kYXRhKTt9J1xyXG4gICAgICAgIF0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJVUkwpO1xyXG4gICAgICAgIHdvcmtlci53b3JrZXJVUkwgPSB3b3JrZXJVUkw7XHJcbiAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xyXG5cclxuICAgICAgICAvLyBzdG9wIHJlY29yZGluZ1xyXG4gICAgICAgIHJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtZXJnZUxlZnRSaWdodEJ1ZmZlcnMoe1xyXG4gICAgICAgICAgICBkZXNpcmVkU2FtcFJhdGU6IGRlc2lyZWRTYW1wUmF0ZSxcclxuICAgICAgICAgICAgc2FtcGxlUmF0ZTogc2FtcGxlUmF0ZSxcclxuICAgICAgICAgICAgbnVtYmVyT2ZBdWRpb0NoYW5uZWxzOiBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsXHJcbiAgICAgICAgICAgIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg6IHJlY29yZGluZ0xlbmd0aCxcclxuICAgICAgICAgICAgbGVmdEJ1ZmZlcnM6IGxlZnRjaGFubmVsLFxyXG4gICAgICAgICAgICByaWdodEJ1ZmZlcnM6IG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSA/IFtdIDogcmlnaHRjaGFubmVsLFxyXG4gICAgICAgICAgICBub1dvcmtlcjogY29uZmlnLm5vV29ya2VyXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oYnVmZmVyLCB2aWV3KSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBUaGUgcmVjb3JkZWQgYmxvYiBvYmplY3QuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBTdGVyZW9BdWRpb1JlY29yZGVyXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICogICAgIHZhciBibG9iID0gcmVjb3JkZXIuYmxvYjtcclxuICAgICAgICAgICAgICogfSk7XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBuZXcgQmxvYihbdmlld10sIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhdWRpby93YXYnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciAtIFRoZSByZWNvcmRlZCBidWZmZXIgb2JqZWN0LlxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAqICAgICB2YXIgYnVmZmVyID0gcmVjb3JkZXIuYnVmZmVyO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlbGYuYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHZpZXcuYnVmZmVyLmJ5dGVMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgLSBUaGUgcmVjb3JkZWQgZGF0YS12aWV3IG9iamVjdC5cclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIHZpZXcgPSByZWNvcmRlci52aWV3O1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNhbXBsZVJhdGUgPSBkZXNpcmVkU2FtcFJhdGUgfHwgc2FtcGxlUmF0ZTtcclxuICAgICAgICAgICAgc2VsZi5idWZmZXJTaXplID0gYnVmZmVyU2l6ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlY29yZGVkIGF1ZGlvIGxlbmd0aFxyXG4gICAgICAgICAgICBzZWxmLmxlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGlzQXVkaW9Qcm9jZXNzU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB2YXIgU3RvcmFnZSA9IHtcclxuICAgICAgICAgICAgQXVkaW9Db250ZXh0Q29uc3RydWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dDogd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yID0gbmV3IFN0b3JhZ2UuQXVkaW9Db250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgIC8vIGNyZWF0ZXMgYW4gYXVkaW8gbm9kZSBmcm9tIHRoZSBtaWNyb3Bob25lIGluY29taW5nIHN0cmVhbVxyXG4gICAgdmFyIGF1ZGlvSW5wdXQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhU3RyZWFtKTtcclxuXHJcbiAgICB2YXIgbGVnYWxCdWZmZXJWYWx1ZXMgPSBbMCwgMjU2LCA1MTIsIDEwMjQsIDIwNDgsIDQwOTYsIDgxOTIsIDE2Mzg0XTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZyb20gdGhlIHNwZWM6IFRoaXMgdmFsdWUgY29udHJvbHMgaG93IGZyZXF1ZW50bHkgdGhlIGF1ZGlvcHJvY2VzcyBldmVudCBpc1xyXG4gICAgICogZGlzcGF0Y2hlZCBhbmQgaG93IG1hbnkgc2FtcGxlLWZyYW1lcyBuZWVkIHRvIGJlIHByb2Nlc3NlZCBlYWNoIGNhbGwuXHJcbiAgICAgKiBMb3dlciB2YWx1ZXMgZm9yIGJ1ZmZlciBzaXplIHdpbGwgcmVzdWx0IGluIGEgbG93ZXIgKGJldHRlcikgbGF0ZW5jeS5cclxuICAgICAqIEhpZ2hlciB2YWx1ZXMgd2lsbCBiZSBuZWNlc3NhcnkgdG8gYXZvaWQgYXVkaW8gYnJlYWt1cCBhbmQgZ2xpdGNoZXNcclxuICAgICAqIFRoZSBzaXplIG9mIHRoZSBidWZmZXIgKGluIHNhbXBsZS1mcmFtZXMpIHdoaWNoIG5lZWRzIHRvXHJcbiAgICAgKiBiZSBwcm9jZXNzZWQgZWFjaCB0aW1lIG9ucHJvY2Vzc2F1ZGlvIGlzIGNhbGxlZC5cclxuICAgICAqIExlZ2FsIHZhbHVlcyBhcmUgKDI1NiwgNTEyLCAxMDI0LCAyMDQ4LCA0MDk2LCA4MTkyLCAxNjM4NCkuXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYnVmZmVyU2l6ZSAtIEJ1ZmZlci1zaXplIGZvciBob3cgZnJlcXVlbnRseSB0aGUgYXVkaW9wcm9jZXNzIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgICBidWZmZXJTaXplOiA0MDk2XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG5cclxuICAgIC8vIFwiMFwiIG1lYW5zLCBsZXQgY2hyb21lIGRlY2lkZSB0aGUgbW9zdCBhY2N1cmF0ZSBidWZmZXItc2l6ZSBmb3IgY3VycmVudCBwbGF0Zm9ybS5cclxuICAgIHZhciBidWZmZXJTaXplID0gdHlwZW9mIGNvbmZpZy5idWZmZXJTaXplID09PSAndW5kZWZpbmVkJyA/IDQwOTYgOiBjb25maWcuYnVmZmVyU2l6ZTtcclxuXHJcbiAgICBpZiAobGVnYWxCdWZmZXJWYWx1ZXMuaW5kZXhPZihidWZmZXJTaXplKSA9PT0gLTEpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTGVnYWwgdmFsdWVzIGZvciBidWZmZXItc2l6ZSBhcmUgJyArIEpTT04uc3RyaW5naWZ5KGxlZ2FsQnVmZmVyVmFsdWVzLCBudWxsLCAnXFx0JykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udGV4dC5jcmVhdGVKYXZhU2NyaXB0Tm9kZSkge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlID0gY29udGV4dC5jcmVhdGVKYXZhU2NyaXB0Tm9kZShidWZmZXJTaXplLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIG51bWJlck9mQXVkaW9DaGFubmVscyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKSB7XHJcbiAgICAgICAganNBdWRpb05vZGUgPSBjb250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3NvcihidWZmZXJTaXplLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHMsIG51bWJlck9mQXVkaW9DaGFubmVscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93ICdXZWJBdWRpbyBBUEkgaGFzIG5vIHN1cHBvcnQgb24gdGhpcyBicm93c2VyLic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29ubmVjdCB0aGUgc3RyZWFtIHRvIHRoZSBzY3JpcHQgcHJvY2Vzc29yXHJcbiAgICBhdWRpb0lucHV0LmNvbm5lY3QoanNBdWRpb05vZGUpO1xyXG5cclxuICAgIGlmICghY29uZmlnLmJ1ZmZlclNpemUpIHtcclxuICAgICAgICBidWZmZXJTaXplID0ganNBdWRpb05vZGUuYnVmZmVyU2l6ZTsgLy8gZGV2aWNlIGJ1ZmZlci1zaXplXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgc2FtcGxlIHJhdGUgKGluIHNhbXBsZS1mcmFtZXMgcGVyIHNlY29uZCkgYXQgd2hpY2ggdGhlXHJcbiAgICAgKiBBdWRpb0NvbnRleHQgaGFuZGxlcyBhdWRpby4gSXQgaXMgYXNzdW1lZCB0aGF0IGFsbCBBdWRpb05vZGVzXHJcbiAgICAgKiBpbiB0aGUgY29udGV4dCBydW4gYXQgdGhpcyByYXRlLiBJbiBtYWtpbmcgdGhpcyBhc3N1bXB0aW9uLFxyXG4gICAgICogc2FtcGxlLXJhdGUgY29udmVydGVycyBvciBcInZhcmlzcGVlZFwiIHByb2Nlc3NvcnMgYXJlIG5vdCBzdXBwb3J0ZWRcclxuICAgICAqIGluIHJlYWwtdGltZSBwcm9jZXNzaW5nLlxyXG4gICAgICogVGhlIHNhbXBsZVJhdGUgcGFyYW1ldGVyIGRlc2NyaWJlcyB0aGUgc2FtcGxlLXJhdGUgb2YgdGhlXHJcbiAgICAgKiBsaW5lYXIgUENNIGF1ZGlvIGRhdGEgaW4gdGhlIGJ1ZmZlciBpbiBzYW1wbGUtZnJhbWVzIHBlciBzZWNvbmQuXHJcbiAgICAgKiBBbiBpbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgc2FtcGxlLXJhdGVzIGluIGF0IGxlYXN0XHJcbiAgICAgKiB0aGUgcmFuZ2UgMjIwNTAgdG8gOTYwMDAuXHJcbiAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2FtcGxlUmF0ZSAtIEJ1ZmZlci1zaXplIGZvciBob3cgZnJlcXVlbnRseSB0aGUgYXVkaW9wcm9jZXNzIGV2ZW50IGlzIGRpc3BhdGNoZWQuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFN0ZXJlb0F1ZGlvUmVjb3JkZXIobWVkaWFTdHJlYW0sIHtcclxuICAgICAqICAgICBzYW1wbGVSYXRlOiA0NDEwMFxyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHZhciBzYW1wbGVSYXRlID0gdHlwZW9mIGNvbmZpZy5zYW1wbGVSYXRlICE9PSAndW5kZWZpbmVkJyA/IGNvbmZpZy5zYW1wbGVSYXRlIDogY29udGV4dC5zYW1wbGVSYXRlIHx8IDQ0MTAwO1xyXG5cclxuICAgIGlmIChzYW1wbGVSYXRlIDwgMjIwNTAgfHwgc2FtcGxlUmF0ZSA+IDk2MDAwKSB7XHJcbiAgICAgICAgLy8gUmVmOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjMwMzkxOC81NTIxODJcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2FtcGxlLXJhdGUgbXVzdCBiZSB1bmRlciByYW5nZSAyMjA1MCBhbmQgOTYwMDAuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5kZXNpcmVkU2FtcFJhdGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rlc2lyZWQgc2FtcGxlLXJhdGU6ICcgKyBjb25maWcuZGVzaXJlZFNhbXBSYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgU3RlcmVvQXVkaW9SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChpc01lZGlhU3RyZWFtQWN0aXZlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgbWFrZSBzdXJlIE1lZGlhU3RyZWFtIGlzIGFjdGl2ZS4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWVtcyByZWNvcmRpbmcgaGFzIGJlZW4gcmVzdGFydGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrRm9ySW5hY3RpdmVUcmFja3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoY2xlYXJSZWNvcmRlZERhdGFDQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VmFyaWFibGVzKCkge1xyXG4gICAgICAgIGxlZnRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmlnaHRjaGFubmVsID0gW107XHJcbiAgICAgICAgcmVjb3JkaW5nTGVuZ3RoID0gMDtcclxuICAgICAgICBpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICByZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xyXG5cclxuICAgICAgICBzZWxmLmxlZnRjaGFubmVsID0gbGVmdGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5yaWdodGNoYW5uZWwgPSByaWdodGNoYW5uZWw7XHJcbiAgICAgICAgc2VsZi5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcbiAgICAgICAgc2VsZi5kZXNpcmVkU2FtcFJhdGUgPSBkZXNpcmVkU2FtcFJhdGU7XHJcbiAgICAgICAgc2VsZi5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTtcclxuICAgICAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzID0ge1xyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdLFxyXG4gICAgICAgICAgICByZWNvcmRpbmdMZW5ndGg6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgaWYgKGpzQXVkaW9Ob2RlKSB7XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLm9uYXVkaW9wcm9jZXNzID0gbnVsbDtcclxuICAgICAgICAgICAganNBdWRpb05vZGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBqc0F1ZGlvTm9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICBhdWRpb0lucHV0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgYXVkaW9JbnB1dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFZhcmlhYmxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdTdGVyZW9BdWRpb1JlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gb25BdWRpb1Byb2Nlc3NEYXRhQXZhaWxhYmxlKGUpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTWVkaWFTdHJlYW1BY3RpdmUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYVN0cmVhbSBzZWVtcyBzdG9wcGVkLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpzQXVkaW9Ob2RlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgcmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlY29yZGluZykge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9JbnB1dC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBhdWRpb0lucHV0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gXCJvbmF1ZGlvcHJvY2Vzc1wiIGV2ZW50J3MgZmlyc3QgaW52b2NhdGlvbi5cclxuICAgICAgICAgKiBAbWV0aG9kIHtmdW5jdGlvbn0gb25BdWRpb1Byb2Nlc3NTdGFydGVkXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFN0ZXJlb0F1ZGlvUmVjb3JkZXJcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLm9uQXVkaW9Qcm9jZXNzU3RhcnRlZDogZnVuY3Rpb24oKSB7IH07XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCFpc0F1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgaXNBdWRpb1Byb2Nlc3NTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkF1ZGlvUHJvY2Vzc1N0YXJ0ZWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5pbml0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xyXG5cclxuICAgICAgICAvLyB3ZSBjbG9uZSB0aGUgc2FtcGxlc1xyXG4gICAgICAgIHZhciBjaExlZnQgPSBuZXcgRmxvYXQzMkFycmF5KGxlZnQpO1xyXG4gICAgICAgIGxlZnRjaGFubmVsLnB1c2goY2hMZWZ0KTtcclxuXHJcbiAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDEpO1xyXG4gICAgICAgICAgICB2YXIgY2hSaWdodCA9IG5ldyBGbG9hdDMyQXJyYXkocmlnaHQpO1xyXG4gICAgICAgICAgICByaWdodGNoYW5uZWwucHVzaChjaFJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY29yZGluZ0xlbmd0aCArPSBidWZmZXJTaXplO1xyXG5cclxuICAgICAgICAvLyBleHBvcnQgcmF3IFBDTVxyXG4gICAgICAgIHNlbGYucmVjb3JkaW5nTGVuZ3RoID0gcmVjb3JkaW5nTGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZy50aW1lU2xpY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsc0Jhc2VkQnVmZmVycy5yZWNvcmRpbmdMZW5ndGggKz0gYnVmZmVyU2l6ZTtcclxuICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQucHVzaChjaExlZnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLnJpZ2h0LnB1c2goY2hSaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganNBdWRpb05vZGUub25hdWRpb3Byb2Nlc3MgPSBvbkF1ZGlvUHJvY2Vzc0RhdGFBdmFpbGFibGU7XHJcblxyXG4gICAgLy8gdG8gcHJldmVudCBzZWxmIGF1ZGlvIHRvIGJlIGNvbm5lY3RlZCB3aXRoIHNwZWFrZXJzXHJcbiAgICBpZiAoY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAganNBdWRpb05vZGUuY29ubmVjdChjb250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpzQXVkaW9Ob2RlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXhwb3J0IHJhdyBQQ01cclxuICAgIHRoaXMubGVmdGNoYW5uZWwgPSBsZWZ0Y2hhbm5lbDtcclxuICAgIHRoaXMucmlnaHRjaGFubmVsID0gcmlnaHRjaGFubmVsO1xyXG4gICAgdGhpcy5udW1iZXJPZkF1ZGlvQ2hhbm5lbHMgPSBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM7XHJcbiAgICB0aGlzLmRlc2lyZWRTYW1wUmF0ZSA9IGRlc2lyZWRTYW1wUmF0ZTtcclxuICAgIHRoaXMuc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGU7XHJcbiAgICBzZWxmLnJlY29yZGluZ0xlbmd0aCA9IHJlY29yZGluZ0xlbmd0aDtcclxuXHJcbiAgICAvLyBoZWxwZXIgZm9yIGludGVydmFscyBiYXNlZCBibG9ic1xyXG4gICAgdmFyIGludGVydmFsc0Jhc2VkQnVmZmVycyA9IHtcclxuICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICByaWdodDogW10sXHJcbiAgICAgICAgcmVjb3JkaW5nTGVuZ3RoOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHRoaXMgbG9vcGVyIGlzIHVzZWQgdG8gc3VwcG9ydCBpbnRlcnZhbHMgYmFzZWQgYmxvYnMgKHZpYSB0aW1lU2xpY2Urb25kYXRhYXZhaWxhYmxlKVxyXG4gICAgZnVuY3Rpb24gbG9vcGVyKCkge1xyXG4gICAgICAgIGlmICghcmVjb3JkaW5nIHx8IHR5cGVvZiBjb25maWcub25kYXRhYXZhaWxhYmxlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBjb25maWcudGltZVNsaWNlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1lcmdlTGVmdFJpZ2h0QnVmZmVycyh7XHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkU2FtcFJhdGU6IGRlc2lyZWRTYW1wUmF0ZSxcclxuICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IHNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IG51bWJlck9mQXVkaW9DaGFubmVscyxcclxuICAgICAgICAgICAgICAgIGludGVybmFsSW50ZXJsZWF2ZWRMZW5ndGg6IGludGVydmFsc0Jhc2VkQnVmZmVycy5yZWNvcmRpbmdMZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBsZWZ0QnVmZmVyczogaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLmxlZnQsXHJcbiAgICAgICAgICAgICAgICByaWdodEJ1ZmZlcnM6IG51bWJlck9mQXVkaW9DaGFubmVscyA9PT0gMSA/IFtdIDogaW50ZXJ2YWxzQmFzZWRCdWZmZXJzLnJpZ2h0XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGJ1ZmZlciwgdmlldykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdmlld10sIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXVkaW8vd2F2J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25kYXRhYXZhaWxhYmxlKGJsb2IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCBjb25maWcudGltZVNsaWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnRlcnZhbHNCYXNlZEJ1ZmZlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBbXSxcclxuICAgICAgICAgICAgICAgIHJlY29yZGluZ0xlbmd0aDogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcGVyLCBjb25maWcudGltZVNsaWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLlN0ZXJlb0F1ZGlvUmVjb3JkZXIgPSBTdGVyZW9BdWRpb1JlY29yZGVyO1xyXG59XG5cclxuLy8gX19fX19fX19fX19fX19fX19cclxuLy8gQ2FudmFzUmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBDYW52YXNSZWNvcmRlciBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyBIVE1MNS1DYW52YXMgcmVjb3JkaW5nIGludG8gdmlkZW8gV2ViTS4gSXQgdXNlcyBIVE1MMkNhbnZhcyBsaWJyYXJ5IGFuZCBydW5zIHRvcCBvdmVyIHtAbGluayBXaGFtbXl9LlxyXG4gKiBAc3VtbWFyeSBIVE1MMkNhbnZhcyByZWNvcmRpbmcgaW50byB2aWRlbyBXZWJNLlxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgQ2FudmFzUmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBDYW52YXNSZWNvcmRlcihodG1sRWxlbWVudCwgeyBkaXNhYmxlTG9nczogdHJ1ZSwgdXNlV2hhbW15UmVjb3JkZXI6IHRydWUgfSk7XHJcbiAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICogICAgIHZpZGVvLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGh0bWxFbGVtZW50IC0gcXVlcnlTZWxlY3Rvci9nZXRFbGVtZW50QnlJZC9nZXRFbGVtZW50c0J5VGFnTmFtZVswXS9ldGMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbn1cclxuICovXHJcblxyXG5mdW5jdGlvbiBDYW52YXNSZWNvcmRlcihodG1sRWxlbWVudCwgY29uZmlnKSB7XHJcbiAgICBpZiAodHlwZW9mIGh0bWwyY2FudmFzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93ICdQbGVhc2UgbGluazogaHR0cHM6Ly9jZG4ud2VicnRjLWV4cGVyaW1lbnQuY29tL3NjcmVlbnNob3QuanMnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGlmICghY29uZmlnLmZyYW1lSW50ZXJ2YWwpIHtcclxuICAgICAgICBjb25maWcuZnJhbWVJbnRlcnZhbCA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpYSBEZXRlY3RSVEMuanNcclxuICAgIHZhciBpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nID0gZmFsc2U7XHJcbiAgICBbJ2NhcHR1cmVTdHJlYW0nLCAnbW96Q2FwdHVyZVN0cmVhbScsICd3ZWJraXRDYXB0dXJlU3RyZWFtJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0gaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykpIHtcclxuICAgICAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIF9pc0Nocm9tZSA9ICghIXdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbiB8fCAhIXdpbmRvdy53ZWJraXRHZXRVc2VyTWVkaWEpICYmICEhd2luZG93LmNocm9tZTtcclxuXHJcbiAgICB2YXIgY2hyb21lVmVyc2lvbiA9IDUwO1xyXG4gICAgdmFyIG1hdGNoQXJyYXkgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xyXG4gICAgaWYgKF9pc0Nocm9tZSAmJiBtYXRjaEFycmF5ICYmIG1hdGNoQXJyYXlbMl0pIHtcclxuICAgICAgICBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQobWF0Y2hBcnJheVsyXSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfaXNDaHJvbWUgJiYgY2hyb21lVmVyc2lvbiA8IDUyKSB7XHJcbiAgICAgICAgaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcudXNlV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICBpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbENhbnZhcywgbWVkaWFTdHJlYW1SZWNvcmRlcjtcclxuXHJcbiAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZykge1xyXG4gICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgc3VwcG9ydHMgYm90aCBNZWRpUmVjb3JkZXIgQVBJIGFuZCBjYW52YXMuY2FwdHVyZVN0cmVhbSEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChodG1sRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGdsb2JhbENhbnZhcyA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaHRtbEVsZW1lbnQgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICAgICAgZ2xvYmFsQ2FudmFzID0gaHRtbEVsZW1lbnQuY2FudmFzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93ICdQbGVhc2UgcGFzcyBlaXRoZXIgSFRNTENhbnZhc0VsZW1lbnQgb3IgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELic7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghIW5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW52YXMgcmVjb3JkaW5nIGlzIE5PVCBzdXBwb3J0ZWQgaW4gRmlyZWZveC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzUmVjb3JkaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBDYW52YXMuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1JlY29yZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChpc0NhbnZhc1N1cHBvcnRzU3RyZWFtQ2FwdHVyaW5nICYmICFjb25maWcudXNlV2hhbW15UmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgLy8gQ2FudmFzQ2FwdHVyZU1lZGlhU3RyZWFtXHJcbiAgICAgICAgICAgIHZhciBjYW52YXNNZWRpYVN0cmVhbTtcclxuICAgICAgICAgICAgaWYgKCdjYXB0dXJlU3RyZWFtJyBpbiBnbG9iYWxDYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc01lZGlhU3RyZWFtID0gZ2xvYmFsQ2FudmFzLmNhcHR1cmVTdHJlYW0oMjUpOyAvLyAyNSBGUFNcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnbW96Q2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy5tb3pDYXB0dXJlU3RyZWFtKDI1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnd2Via2l0Q2FwdHVyZVN0cmVhbScgaW4gZ2xvYmFsQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IGdsb2JhbENhbnZhcy53ZWJraXRDYXB0dXJlU3RyZWFtKDI1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBtZFN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xyXG4gICAgICAgICAgICAgICAgbWRTdHJlYW0uYWRkVHJhY2soZ2V0VHJhY2tzKGNhbnZhc01lZGlhU3RyZWFtLCAndmlkZW8nKVswXSk7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNNZWRpYVN0cmVhbSA9IG1kU3RyZWFtO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjYW52YXNNZWRpYVN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgJ2NhcHR1cmVTdHJlYW0gQVBJIGFyZSBOT1QgYXZhaWxhYmxlLic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE5vdGU6IEphbiAxOCwgMjAxNiBzdGF0dXMgaXMgdGhhdCwgXHJcbiAgICAgICAgICAgIC8vIEZpcmVmb3ggTWVkaWFSZWNvcmRlciBBUEkgY2FuJ3QgcmVjb3JkIENhbnZhc0NhcHR1cmVNZWRpYVN0cmVhbSBvYmplY3QuXHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIgPSBuZXcgTWVkaWFTdHJlYW1SZWNvcmRlcihjYW52YXNNZWRpYVN0cmVhbSwge1xyXG4gICAgICAgICAgICAgICAgbWltZVR5cGU6IGNvbmZpZy5taW1lVHlwZSB8fCAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBkcmF3Q2FudmFzRnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0V2ViUEltYWdlcyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmcmFtZXNMZW5ndGggPSB3aGFtbXkuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLmZvckVhY2goZnVuY3Rpb24oZnJhbWUsIGlkeCkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVzUmVtYWluaW5nID0gZnJhbWVzTGVuZ3RoIC0gaWR4O1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJhbWVzUmVtYWluaW5nICsgJy8nICsgZnJhbWVzTGVuZ3RoICsgJyBmcmFtZXMgcmVtYWluaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub25FbmNvZGluZ0NhbGxiYWNrKGZyYW1lc1JlbWFpbmluZywgZnJhbWVzTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdlYnAgPSBmcmFtZS5pbWFnZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCAxKTtcclxuICAgICAgICAgICAgd2hhbW15LmZyYW1lc1tpZHhdLmltYWdlID0gd2VicDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dlbmVyYXRpbmcgV2ViTScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgQ2FudmFzLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgQ2FudmFzUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICogfSk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaXNSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoaXNDYW52YXNTdXBwb3J0c1N0cmVhbUNhcHR1cmluZyAmJiBtZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIuc3RvcChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0V2ViUEltYWdlcyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFJlY29yZGVkIGZyYW1lcyBpbiB2aWRlby93ZWJtIGJsb2IuXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdoYW1teS5jb21waWxlKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmRpc2FibGVMb2dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY29yZGluZyBmaW5pc2hlZCEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LmJsb2IuZm9yRWFjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYmxvYiA9IG5ldyBCbG9iKFtdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlby93ZWJtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoYXQuYmxvYik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBwYXVzZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIENhbnZhc1JlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG1lZGlhU3RyZWFtUmVjb3JkZXIgaW5zdGFuY2VvZiBNZWRpYVN0cmVhbVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhU3RyZWFtUmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXN1bWVzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkUmVjb3JkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChtZWRpYVN0cmVhbVJlY29yZGVyIGluc3RhbmNlb2YgTWVkaWFTdHJlYW1SZWNvcmRlcikge1xyXG4gICAgICAgICAgICBtZWRpYVN0cmVhbVJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBDYW52YXNSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2xlYXJSZWNvcmRlZERhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKGNsZWFyUmVjb3JkZWREYXRhQ0IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgd2hhbW15LmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIGlzUmVjb3JkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgZGVidWdnaW5nXHJcbiAgICB0aGlzLm5hbWUgPSAnQ2FudmFzUmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb25lQ2FudmFzKCkge1xyXG4gICAgICAgIC8vY3JlYXRlIGEgbmV3IGNhbnZhc1xyXG4gICAgICAgIHZhciBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAvL3NldCBkaW1lbnNpb25zXHJcbiAgICAgICAgbmV3Q2FudmFzLndpZHRoID0gaHRtbEVsZW1lbnQud2lkdGg7XHJcbiAgICAgICAgbmV3Q2FudmFzLmhlaWdodCA9IGh0bWxFbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9hcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGh0bWxFbGVtZW50LCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gdGhlIG5ldyBjYW52YXNcclxuICAgICAgICByZXR1cm4gbmV3Q2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdDYW52YXNGcmFtZSgpIHtcclxuICAgICAgICBpZiAoaXNQYXVzZWRSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCA1MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGh0bWxFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjYW52YXMnKSB7XHJcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgIC8vIHZpYSAjMjA2LCBieSBKYWNrIGkuZS4gQFNleW1vdXJyXHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGNsb25lQ2FudmFzKCksXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbDJjYW52YXMoaHRtbEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgZ3JhYk1vdXNlOiB0eXBlb2YgY29uZmlnLnNob3dNb3VzZVBvaW50ZXIgPT09ICd1bmRlZmluZWQnIHx8IGNvbmZpZy5zaG93TW91c2VQb2ludGVyLFxyXG4gICAgICAgICAgICBvbnJlbmRlcmVkOiBmdW5jdGlvbihjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZHJhd0NhbnZhc0ZyYW1lLCBjb25maWcuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmlhICMyMDYsIGJ5IEphY2sgaS5lLiBAU2V5bW91cnJcclxuICAgICAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2Uvd2VicCcsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChkcmF3Q2FudmFzRnJhbWUsIGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB3aGFtbXkgPSBuZXcgV2hhbW15LlZpZGVvKDEwMCk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgUmVjb3JkUlRDICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVjb3JkUlRDLkNhbnZhc1JlY29yZGVyID0gQ2FudmFzUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX1xyXG4vLyBXaGFtbXlSZWNvcmRlci5qc1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teVJlY29yZGVyIGlzIGEgc3RhbmRhbG9uZSBjbGFzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIGJyaW5nIHZpZGVvIHJlY29yZGluZyBpbiBDaHJvbWUuIEl0IHJ1bnMgdG9wIG92ZXIge0BsaW5rIFdoYW1teX0uXHJcbiAqIEBzdW1tYXJ5IFZpZGVvIHJlY29yZGluZyBmZWF0dXJlIGluIENocm9tZS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gKiB9KTtcclxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEN8UmVjb3JkUlRDIFNvdXJjZSBDb2RlfVxyXG4gKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBtZWRpYVN0cmVhbSAtIE1lZGlhU3RyZWFtIG9iamVjdCBmZXRjaGVkIHVzaW5nIGdldFVzZXJNZWRpYSBBUEkgb3IgZ2VuZXJhdGVkIHVzaW5nIGNhcHR1cmVTdHJlYW1VbnRpbEVuZGVkIG9yIFdlYkF1ZGlvIEFQSS5cclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIHtkaXNhYmxlTG9nczogdHJ1ZSwgaW5pdENhbGxiYWNrOiBmdW5jdGlvbiwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQsIGV0Yy59XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gV2hhbW15UmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICBpZiAoIWNvbmZpZy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgY29uZmlnLmZyYW1lSW50ZXJ2YWwgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZpZy5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBmcmFtZXMtaW50ZXJ2YWw6JywgY29uZmlnLmZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyB2aWRlby5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlY29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy53aWR0aCA9IDMyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgICBjb25maWcuaGVpZ2h0ID0gMjQwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcudmlkZW8pIHtcclxuICAgICAgICAgICAgY29uZmlnLnZpZGVvID0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW52YXMgPSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSBjb25maWcuY2FudmFzLndpZHRoIHx8IDMyMDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmNhbnZhcy5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8vIHNldHRpbmcgZGVmYXVsdHNcclxuICAgICAgICBpZiAoY29uZmlnLnZpZGVvICYmIGNvbmZpZy52aWRlbyBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBjb25maWcudmlkZW8uY2xvbmVOb2RlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmluaXRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3JjT2JqZWN0KG1lZGlhU3RyZWFtLCB2aWRlbyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7IC8vIFwib25sb2FkZWRtZXRhZGF0YVwiIG1heSBOT1Qgd29yayBpbiBGRj9cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmluaXRDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSBjb25maWcudmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHZpZGVvLmhlaWdodCA9IGNvbmZpZy52aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG5cclxuICAgICAgICBsYXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHdoYW1teSA9IG5ldyBXaGFtbXkuVmlkZW8oKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZGlzYWJsZUxvZ3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbnZhcyByZXNvbHV0aW9ucycsIGNhbnZhcy53aWR0aCwgJyonLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIHdpZHRoL2hlaWdodCcsIHZpZGVvLndpZHRoIHx8IGNhbnZhcy53aWR0aCwgJyonLCB2aWRlby5oZWlnaHQgfHwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkcmF3RnJhbWVzKGNvbmZpZy5mcmFtZUludGVydmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3IGFuZCBwdXNoIGZyYW1lcyB0byBXaGFtbXlcclxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gZnJhbWVJbnRlcnZhbCAtIHNldCBtaW5pbXVtIGludGVydmFsIChpbiBtaWxsaXNlY29uZHMpIGJldHdlZW4gZWFjaCB0aW1lIHdlIHB1c2ggYSBmcmFtZSB0byBXaGFtbXlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZHJhd0ZyYW1lcyhmcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgZnJhbWVJbnRlcnZhbCA9IHR5cGVvZiBmcmFtZUludGVydmFsICE9PSAndW5kZWZpbmVkJyA/IGZyYW1lSW50ZXJ2YWwgOiAxMDtcclxuXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsYXN0VGltZTtcclxuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIGZyYW1lSW50ZXJ2YWwsIGZyYW1lSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGF1c2VkUmVjb3JkaW5nKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGRyYXdGcmFtZXMsIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB2aWEgIzIwNiwgYnkgSmFjayBpLmUuIEBTZXltb3VyclxyXG4gICAgICAgIGxhc3RUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmICh2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgLy8gdmlhOiBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1dlYlJUQy1FeHBlcmltZW50L3B1bGwvMzE2XHJcbiAgICAgICAgICAgIC8vIFR3ZWFrIGZvciBBbmRyb2lkIENocm9tZVxyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB3aGFtbXkuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGltYWdlOiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS93ZWJwJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZHJhd0ZyYW1lcywgZnJhbWVJbnRlcnZhbCwgZnJhbWVJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFzeW5jTG9vcChvKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSxcclxuICAgICAgICAgICAgbGVuZ3RoID0gby5sZW5ndGg7XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiBsb29wKCkge1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIG8uY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gXCJzZXRUaW1lb3V0XCIgYWRkZWQgYnkgSmltIE1jTGVvZFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgby5mdW5jdGlvblRvTG9vcChsb29wLCBpKTtcclxuICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgYmxhY2sgZnJhbWVzIGZyb20gdGhlIGJlZ2lubmluZyB0byB0aGUgc3BlY2lmaWVkIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBfZnJhbWVzIC0gYXJyYXkgb2YgZnJhbWVzIHRvIGJlIGNoZWNrZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBfZnJhbWVzVG9DaGVjayAtIG51bWJlciBvZiBmcmFtZSB1bnRpbCBjaGVjayB3aWxsIGJlIGV4ZWN1dGVkICgtMSAtIHdpbGwgZHJvcCBhbGwgZnJhbWVzIHVudGlsIGZyYW1lIG5vdCBtYXRjaGVkIHdpbGwgYmUgZm91bmQpXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX3BpeFRvbGVyYW5jZSAtIDAgLSB2ZXJ5IHN0cmljdCAob25seSBibGFjayBwaXhlbCBjb2xvcikgOyAxIC0gYWxsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gX2ZyYW1lVG9sZXJhbmNlIC0gMCAtIHZlcnkgc3RyaWN0IChvbmx5IGJsYWNrIGZyYW1lIGNvbG9yKSA7IDEgLSBhbGxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gLSBhcnJheSBvZiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgLy8gcHVsbCMyOTMgYnkgQHZvbG9kYWxleGV5XHJcbiAgICBmdW5jdGlvbiBkcm9wQmxhY2tGcmFtZXMoX2ZyYW1lcywgX2ZyYW1lc1RvQ2hlY2ssIF9waXhUb2xlcmFuY2UsIF9mcmFtZVRvbGVyYW5jZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgbG9jYWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBsb2NhbENhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBsb2NhbENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjb250ZXh0MmQgPSBsb2NhbENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciByZXN1bHRGcmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGNoZWNrVW50aWxOb3RCbGFjayA9IF9mcmFtZXNUb0NoZWNrID09PSAtMTtcclxuICAgICAgICB2YXIgZW5kQ2hlY2tGcmFtZSA9IChfZnJhbWVzVG9DaGVjayAmJiBfZnJhbWVzVG9DaGVjayA+IDAgJiYgX2ZyYW1lc1RvQ2hlY2sgPD0gX2ZyYW1lcy5sZW5ndGgpID9cclxuICAgICAgICAgICAgX2ZyYW1lc1RvQ2hlY2sgOiBfZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB2YXIgc2FtcGxlQ29sb3IgPSB7XHJcbiAgICAgICAgICAgIHI6IDAsXHJcbiAgICAgICAgICAgIGc6IDAsXHJcbiAgICAgICAgICAgIGI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBtYXhDb2xvckRpZmZlcmVuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KDI1NSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygyNTUsIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMjU1LCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIHBpeFRvbGVyYW5jZSA9IF9waXhUb2xlcmFuY2UgJiYgX3BpeFRvbGVyYW5jZSA+PSAwICYmIF9waXhUb2xlcmFuY2UgPD0gMSA/IF9waXhUb2xlcmFuY2UgOiAwO1xyXG4gICAgICAgIHZhciBmcmFtZVRvbGVyYW5jZSA9IF9mcmFtZVRvbGVyYW5jZSAmJiBfZnJhbWVUb2xlcmFuY2UgPj0gMCAmJiBfZnJhbWVUb2xlcmFuY2UgPD0gMSA/IF9mcmFtZVRvbGVyYW5jZSA6IDA7XHJcbiAgICAgICAgdmFyIGRvTm90Q2hlY2tOZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGFzeW5jTG9vcCh7XHJcbiAgICAgICAgICAgIGxlbmd0aDogZW5kQ2hlY2tGcmFtZSxcclxuICAgICAgICAgICAgZnVuY3Rpb25Ub0xvb3A6IGZ1bmN0aW9uKGxvb3AsIGYpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaFBpeENvdW50LCBlbmRQaXhDaGVjaywgbWF4UGl4Q291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaEltYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCAmJiBtYXhQaXhDb3VudCAtIG1hdGNoUGl4Q291bnQgPD0gbWF4UGl4Q291bnQgKiBmcmFtZVRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCBibGFjayBmcmFtZSA6ICcgKyBmICsgJyA7IGZyYW1lIGR1cmF0aW9uICcgKyBfZnJhbWVzW2ZdLmR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnJhbWUgaXMgcGFzc2VkIDogJyArIGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tVbnRpbE5vdEJsYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb05vdENoZWNrTmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RnJhbWVzLnB1c2goX2ZyYW1lc1tmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkb05vdENoZWNrTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0MmQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dDJkLmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kUGl4Q2hlY2sgPSBpbWFnZURhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFBpeENvdW50ID0gaW1hZ2VEYXRhLmRhdGEubGVuZ3RoIC8gNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBpeCA9IDA7IHBpeCA8IGVuZFBpeENoZWNrOyBwaXggKz0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2xvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiBpbWFnZURhdGEuZGF0YVtwaXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IGltYWdlRGF0YS5kYXRhW3BpeCArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IGltYWdlRGF0YS5kYXRhW3BpeCArIDJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbG9yRGlmZmVyZW5jZSA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuciAtIHNhbXBsZUNvbG9yLnIsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuZyAtIHNhbXBsZUNvbG9yLmcsIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyhjdXJyZW50Q29sb3IuYiAtIHNhbXBsZUNvbG9yLmIsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSBpbiBjb2xvciBpdCBpcyBkaWZmZXJlbmNlIGluIGNvbG9yIHZlY3RvcnMgKHIxLGcxLGIxKSA8PT4gKHIyLGcyLGIyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yRGlmZmVyZW5jZSA8PSBtYXhDb2xvckRpZmZlcmVuY2UgKiBwaXhUb2xlcmFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFBpeENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IF9mcmFtZXNbZl0uaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcyA9IHJlc3VsdEZyYW1lcy5jb25jYXQoX2ZyYW1lcy5zbGljZShlbmRDaGVja0ZyYW1lKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdEZyYW1lcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0IGxlYXN0IG9uZSBsYXN0IGZyYW1lIHNob3VsZCBiZSBhdmFpbGFibGUgZm9yIG5leHQgbWFuaXB1bGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdG90YWwgZHVyYXRpb24gb2YgYWxsIGZyYW1lcyB3aWxsIGJlIDwgMTAwMCB0aGFuIGZmbXBlZyBkb2Vzbid0IHdvcmsgd2VsbC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEZyYW1lcy5wdXNoKF9mcmFtZXNbX2ZyYW1lcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHRGcmFtZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGlzU3RvcERyYXdpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3BzIHJlY29yZGluZyB2aWRlby5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaXNTdG9wRHJhd2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gYW5hbHlzZSBvZiBhbGwgZnJhbWVzIHRha2VzIHNvbWUgdGltZSFcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwLCAxLCAxKSAtIHdpbGwgY3V0IGFsbCAxMCBmcmFtZXNcclxuICAgICAgICAgICAgLy8gZS5nLiBkcm9wQmxhY2tGcmFtZXMoZnJhbWVzLCAxMCwgMC41LCAwLjUpIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBlLmcuIGRyb3BCbGFja0ZyYW1lcyhmcmFtZXMsIDEwKSA9PT0gZHJvcEJsYWNrRnJhbWVzKGZyYW1lcywgMTAsIDAsIDApIC0gd2lsbCBhbmFseXNlIDEwIGZyYW1lcyB3aXRoIHN0cmljdCBibGFjayBjb2xvclxyXG4gICAgICAgICAgICBkcm9wQmxhY2tGcmFtZXMod2hhbW15LmZyYW1lcywgLTEsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmZyYW1lcyA9IGZyYW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0byBkaXNwbGF5IGFkdmVydGlzZW1lbnQgaW1hZ2VzIVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hZHZlcnRpc2VtZW50ICYmIGNvbmZpZy5hZHZlcnRpc2VtZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoYW1teS5mcmFtZXMgPSBjb25maWcuYWR2ZXJ0aXNlbWVudC5jb25jYXQod2hhbW15LmZyYW1lcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBmcmFtZXMgaW4gdmlkZW8vd2VibSBibG9iLlxyXG4gICAgICAgICAgICAgICAgICogQG1lbWJlcm9mIFdoYW1teVJlY29yZGVyXHJcbiAgICAgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgICAgICAgICAgICAgKiB9KTtcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgd2hhbW15LmNvbXBpbGUoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYmxvYi5mb3JFYWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJsb2IgPSBuZXcgQmxvYihbXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZpZGVvL3dlYm0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKF90aGlzLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXaGFtbXlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXN1bWUoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpc1N0b3BEcmF3aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcChjbGVhclJlY29yZGVkRGF0YUNCKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJSZWNvcmRlZERhdGFDQigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlY29yZGVkRGF0YUNCKCkge1xyXG4gICAgICAgIHdoYW1teS5mcmFtZXMgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICBpc1BhdXNlZFJlY29yZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdXaGFtbXlSZWNvcmRlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICB2YXIgdmlkZW87XHJcbiAgICB2YXIgbGFzdFRpbWU7XHJcbiAgICB2YXIgd2hhbW15O1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5XaGFtbXlSZWNvcmRlciA9IFdoYW1teVJlY29yZGVyO1xyXG59XG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGltYXR0ZXIxNS93aGFtbXkvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4vLyBfX19fX19fX19cclxuLy8gV2hhbW15LmpzXHJcblxyXG4vLyB0b2RvOiBGaXJlZm94IG5vdyBzdXBwb3J0cyB3ZWJwIGZvciB3ZWJtIGNvbnRhaW5lcnMhXHJcbi8vIHRoZWlyIE1lZGlhUmVjb3JkZXIgaW1wbGVtZW50YXRpb24gd29ya3Mgd2VsbCFcclxuLy8gc2hvdWxkIHdlIHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJlY29yZCB2aWEgV2hhbW15LmpzIG9yIE1lZGlhUmVjb3JkZXIgQVBJIGlzIGEgYmV0dGVyIHNvbHV0aW9uP1xyXG5cclxuLyoqXHJcbiAqIFdoYW1teSBpcyBhIHN0YW5kYWxvbmUgY2xhc3MgdXNlZCBieSB7QGxpbmsgUmVjb3JkUlRDfSB0byBicmluZyB2aWRlbyByZWNvcmRpbmcgaW4gQ2hyb21lLiBJdCBpcyB3cml0dGVuIGJ5IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1fGFudGltYXR0ZXIxNX1cclxuICogQHN1bW1hcnkgQSByZWFsIHRpbWUgamF2YXNjcmlwdCB3ZWJtIGVuY29kZXIgYmFzZWQgb24gYSBjYW52YXMgaGFjay5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdoYW1teVxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDE1KTtcclxuICogcmVjb3JkZXIuYWRkKGNvbnRleHQgfHwgY2FudmFzIHx8IGRhdGFVUkwpO1xyXG4gKiB2YXIgb3V0cHV0ID0gcmVjb3JkZXIuY29tcGlsZSgpO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxudmFyIFdoYW1teSA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIGEgbW9yZSBhYnN0cmFjdC1pc2ggQVBJXHJcblxyXG4gICAgZnVuY3Rpb24gV2hhbW15VmlkZW8oZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAxO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eSA9IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhc3MgQ2FudmFzIG9yIENvbnRleHQgb3IgaW1hZ2Uvd2VicChzdHJpbmcpIHRvIHtAbGluayBXaGFtbXl9IGVuY29kZXIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2hhbW15XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICogcmVjb3JkZXIuYWRkKGNhbnZhcyB8fCBjb250ZXh0IHx8ICdpbWFnZS93ZWJwJyk7XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZnJhbWUgLSBDYW52YXMgfHwgQ29udGV4dCB8fCBpbWFnZS93ZWJwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb24gLSBTdGljayBhIGR1cmF0aW9uIChpbiBtaWxsaXNlY29uZHMpXHJcbiAgICAgKi9cclxuICAgIFdoYW1teVZpZGVvLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmcmFtZSwgZHVyYXRpb24pIHtcclxuICAgICAgICBpZiAoJ2NhbnZhcycgaW4gZnJhbWUpIHsgLy9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS5jYW52YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJ3RvRGF0YVVSTCcgaW4gZnJhbWUpIHtcclxuICAgICAgICAgICAgZnJhbWUgPSBmcmFtZS50b0RhdGFVUkwoJ2ltYWdlL3dlYnAnLCB0aGlzLnF1YWxpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEoL15kYXRhOmltYWdlXFwvd2VicDtiYXNlNjQsL2lnKS50ZXN0KGZyYW1lKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnSW5wdXQgbXVzdCBiZSBmb3JtYXR0ZWQgcHJvcGVybHkgYXMgYSBiYXNlNjQgZW5jb2RlZCBEYXRhVVJJIG9mIHR5cGUgaW1hZ2Uvd2VicCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJhbWVzLnB1c2goe1xyXG4gICAgICAgICAgICBpbWFnZTogZnJhbWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCB0aGlzLmR1cmF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbldlYldvcmtlcihfZnVuY3Rpb24pIHtcclxuICAgICAgICB2YXIgYmxvYiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW19mdW5jdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAndGhpcy5vbm1lc3NhZ2UgPSAgZnVuY3Rpb24gKGVlZSkgeycgKyBfZnVuY3Rpb24ubmFtZSArICcoZWVlLmRhdGEpO30nXHJcbiAgICAgICAgXSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCdcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKGJsb2IpO1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmV0dXJuIHdvcmtlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3aGFtbXlJbldlYldvcmtlcihmcmFtZXMpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcnJheVRvV2ViTShmcmFtZXMpIHtcclxuICAgICAgICAgICAgdmFyIGluZm8gPSBjaGVja0ZyYW1lcyhmcmFtZXMpO1xyXG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNsdXN0ZXJNYXhEdXJhdGlvbiA9IDMwMDAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIEVCTUwgPSBbe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogMHgxYTQ1ZGZhMywgLy8gRUJNTFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODYgLy8gRUJNTFZlcnNpb25cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0MmY3IC8vIEVCTUxSZWFkVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogNCxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyZjIgLy8gRUJNTE1heElETGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDJmMyAvLyBFQk1MTWF4U2l6ZUxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ3dlYm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4MiAvLyBEb2NUeXBlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDI4NyAvLyBEb2NUeXBlVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogMixcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDQyODUgLy8gRG9jVHlwZVJlYWRWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAweDE4NTM4MDY3LCAvLyBTZWdtZW50XHJcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxNTQ5YTk2NiwgLy8gSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxZTYsIC8vZG8gdGhpbmdzIGluIG1pbGxpc2VjcyAobnVtIG9mIG5hbm9zZWNzIGZvciBkdXJhdGlvbiBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgyYWQ3YjEgLy8gVGltZWNvZGVTY2FsZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnd2hhbW15JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg0ZDgwIC8vIE11eGluZ0FwcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnd2hhbW15JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg1NzQxIC8vIFdyaXRpbmdBcHBcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogZG91YmxlVG9TdHJpbmcoaW5mby5kdXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4NDQ4OSAvLyBEdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxNjU0YWU2YiwgLy8gVHJhY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGFlLCAvLyBUcmFja0VudHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4ZDcgLy8gVHJhY2tOdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg3M2M1IC8vIFRyYWNrVUlEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6IDB4OWMgLy8gRmxhZ0xhY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6ICd1bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgyMmI1OWMgLy8gTGFuZ3VhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAnVl9WUDgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg4NiAvLyBDb2RlY0lEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogJ1ZQOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweDI1ODY4OCAvLyBDb2RlY05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHg4MyAvLyBUcmFja1R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhlMCwgLy8gVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGluZm8ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHhiMCAvLyBQaXhlbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBpbmZvLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAweGJhIC8vIFBpeGVsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIC8vR2VuZXJhdGUgY2x1c3RlcnMgKG1heCBkdXJhdGlvbilcclxuICAgICAgICAgICAgdmFyIGZyYW1lTnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdmFyIGNsdXN0ZXJUaW1lY29kZSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChmcmFtZU51bWJlciA8IGZyYW1lcy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlckZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXJEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlckZyYW1lcy5wdXNoKGZyYW1lc1tmcmFtZU51bWJlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJEdXJhdGlvbiArPSBmcmFtZXNbZnJhbWVOdW1iZXJdLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lTnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChmcmFtZU51bWJlciA8IGZyYW1lcy5sZW5ndGggJiYgY2x1c3RlckR1cmF0aW9uIDwgY2x1c3Rlck1heER1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2x1c3RlckNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsdXN0ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogMHgxZjQzYjY3NSwgLy8gQ2x1c3RlclxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogZ2V0Q2x1c3RlckRhdGEoY2x1c3RlclRpbWVjb2RlLCBjbHVzdGVyQ291bnRlciwgY2x1c3RlckZyYW1lcylcclxuICAgICAgICAgICAgICAgIH07IC8vQWRkIGNsdXN0ZXIgdG8gc2VnbWVudFxyXG4gICAgICAgICAgICAgICAgRUJNTFsxXS5kYXRhLnB1c2goY2x1c3Rlcik7XHJcbiAgICAgICAgICAgICAgICBjbHVzdGVyVGltZWNvZGUgKz0gY2x1c3RlckR1cmF0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVFQk1MKEVCTUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q2x1c3RlckRhdGEoY2x1c3RlclRpbWVjb2RlLCBjbHVzdGVyQ291bnRlciwgY2x1c3RlckZyYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgICdkYXRhJzogY2x1c3RlclRpbWVjb2RlLFxyXG4gICAgICAgICAgICAgICAgJ2lkJzogMHhlNyAvLyBUaW1lY29kZVxyXG4gICAgICAgICAgICB9XS5jb25jYXQoY2x1c3RlckZyYW1lcy5tYXAoZnVuY3Rpb24od2VicCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gbWFrZVNpbXBsZUJsb2NrKHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNjYXJkYWJsZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZTogd2VicC5kYXRhLnNsaWNlKDQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGludmlzaWJsZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBrZXlmcmFtZTogMSxcclxuICAgICAgICAgICAgICAgICAgICBsYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tOdW06IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWNvZGU6IE1hdGgucm91bmQoY2x1c3RlckNvdW50ZXIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNsdXN0ZXJDb3VudGVyICs9IHdlYnAuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAweGEzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdW1zIHRoZSBsZW5ndGhzIG9mIGFsbCB0aGUgZnJhbWVzIGFuZCBnZXRzIHRoZSBkdXJhdGlvblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGVja0ZyYW1lcyhmcmFtZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFmcmFtZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBNYXliZSBXZWJQIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGZyYW1lc1swXS53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IGZyYW1lc1swXS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGZyYW1lc1swXS5kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZnJhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiArPSBmcmFtZXNbaV0uZHVyYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBudW1Ub0J1ZmZlcihudW0pIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKG51bSAmIDB4ZmYpO1xyXG4gICAgICAgICAgICAgICAgbnVtID0gbnVtID4+IDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHBhcnRzLnJldmVyc2UoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdHJUb0J1ZmZlcihzdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHN0ci5zcGxpdCgnJykubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpdHNUb0J1ZmZlcihiaXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XHJcbiAgICAgICAgICAgIHZhciBwYWQgPSAoYml0cy5sZW5ndGggJSA4KSA/IChuZXcgQXJyYXkoMSArIDggLSAoYml0cy5sZW5ndGggJSA4KSkpLmpvaW4oJzAnKSA6ICcnO1xyXG4gICAgICAgICAgICBiaXRzID0gcGFkICsgYml0cztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSArPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gocGFyc2VJbnQoYml0cy5zdWJzdHIoaSwgOCksIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUVCTUwoanNvbikge1xyXG4gICAgICAgICAgICB2YXIgZWJtbCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ganNvbltpXS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZ2VuZXJhdGVFQk1MKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gYml0c1RvQnVmZmVyKGRhdGEudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gc3RyVG9CdWZmZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGRhdGEuc2l6ZSB8fCBkYXRhLmJ5dGVMZW5ndGggfHwgZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgemVyb2VzID0gTWF0aC5jZWlsKE1hdGguY2VpbChNYXRoLmxvZyhsZW4pIC8gTWF0aC5sb2coMikpIC8gOCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZVRvU3RyaW5nID0gbGVuLnRvU3RyaW5nKDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhZGRlZCA9IChuZXcgQXJyYXkoKHplcm9lcyAqIDcgKyA3ICsgMSkgLSBzaXplVG9TdHJpbmcubGVuZ3RoKSkuam9pbignMCcpICsgc2l6ZVRvU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNpemUgPSAobmV3IEFycmF5KHplcm9lcykpLmpvaW4oJzAnKSArICcxJyArIHBhZGRlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBlYm1sLnB1c2gobnVtVG9CdWZmZXIoanNvbltpXS5pZCkpO1xyXG4gICAgICAgICAgICAgICAgZWJtbC5wdXNoKGJpdHNUb0J1ZmZlcihzaXplKSk7XHJcbiAgICAgICAgICAgICAgICBlYm1sLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYihlYm1sLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0JpblN0ck9sZChiaXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBwYWQgPSAoYml0cy5sZW5ndGggJSA4KSA/IChuZXcgQXJyYXkoMSArIDggLSAoYml0cy5sZW5ndGggJSA4KSkpLmpvaW4oJzAnKSA6ICcnO1xyXG4gICAgICAgICAgICBiaXRzID0gcGFkICsgYml0cztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aDsgaSArPSA4KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYml0cy5zdWJzdHIoaSwgOCksIDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VTaW1wbGVCbG9jayhkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBmbGFncyA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5rZXlmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gMTI4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGZsYWdzIHw9IDg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxhY2luZykge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gKGRhdGEubGFjaW5nIDw8IDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kaXNjYXJkYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MgfD0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhY2tOdW0gPiAxMjcpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdUcmFja051bWJlciA+IDEyNyBub3Qgc3VwcG9ydGVkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG91dCA9IFtkYXRhLnRyYWNrTnVtIHwgMHg4MCwgZGF0YS50aW1lY29kZSA+PiA4LCBkYXRhLnRpbWVjb2RlICYgMHhmZiwgZmxhZ3NdLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKTtcclxuICAgICAgICAgICAgfSkuam9pbignJykgKyBkYXRhLmZyYW1lO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlV2ViUChyaWZmKSB7XHJcbiAgICAgICAgICAgIHZhciBWUDggPSByaWZmLlJJRkZbMF0uV0VCUFswXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZVN0YXJ0ID0gVlA4LmluZGV4T2YoJ1xceDlkXFx4MDFcXHgyYScpOyAvLyBBIFZQOCBrZXlmcmFtZSBzdGFydHMgd2l0aCB0aGUgMHg5ZDAxMmEgaGVhZGVyXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjID0gW107IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNbaV0gPSBWUDguY2hhckNvZGVBdChmcmFtZVN0YXJ0ICsgMyArIGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgd2lkdGgsIGhlaWdodCwgdG1wO1xyXG5cclxuICAgICAgICAgICAgLy90aGUgY29kZSBiZWxvdyBpcyBsaXRlcmFsbHkgY29waWVkIHZlcmJhdGltIGZyb20gdGhlIGJpdHN0cmVhbSBzcGVjXHJcbiAgICAgICAgICAgIHRtcCA9IChjWzFdIDw8IDgpIHwgY1swXTtcclxuICAgICAgICAgICAgd2lkdGggPSB0bXAgJiAweDNGRkY7XHJcbiAgICAgICAgICAgIHRtcCA9IChjWzNdIDw8IDgpIHwgY1syXTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gdG1wICYgMHgzRkZGO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBWUDgsXHJcbiAgICAgICAgICAgICAgICByaWZmOiByaWZmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRTdHJMZW5ndGgoc3RyaW5nLCBvZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZy5zdWJzdHIob2Zmc2V0ICsgNCwgNCkuc3BsaXQoJycpLm1hcChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5wYWRkZWQgPSBpLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBBcnJheSg4IC0gdW5wYWRkZWQubGVuZ3RoICsgMSkpLmpvaW4oJzAnKSArIHVucGFkZGVkO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcnKSwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXJzZVJJRkYoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY2h1bmtzID0ge307XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gc3RyaW5nLnN1YnN0cihvZmZzZXQsIDQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGdldFN0ckxlbmd0aChzdHJpbmcsIG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHN0cmluZy5zdWJzdHIob2Zmc2V0ICsgNCArIDQsIGxlbik7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNCArIDQgKyBsZW47XHJcbiAgICAgICAgICAgICAgICBjaHVua3NbaWRdID0gY2h1bmtzW2lkXSB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09ICdSSUZGJyB8fCBpZCA9PT0gJ0xJU1QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtzW2lkXS5wdXNoKHBhcnNlUklGRihkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rc1tpZF0ucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2h1bmtzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG91YmxlVG9TdHJpbmcobnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKFxyXG4gICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW251bV0pKS5idWZmZXIpLCAwKS5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSk7XHJcbiAgICAgICAgICAgIH0pLnJldmVyc2UoKS5qb2luKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB3ZWJtID0gbmV3IEFycmF5VG9XZWJNKGZyYW1lcy5tYXAoZnVuY3Rpb24oZnJhbWUpIHtcclxuICAgICAgICAgICAgdmFyIHdlYnAgPSBwYXJzZVdlYlAocGFyc2VSSUZGKGF0b2IoZnJhbWUuaW1hZ2Uuc2xpY2UoMjMpKSkpO1xyXG4gICAgICAgICAgICB3ZWJwLmR1cmF0aW9uID0gZnJhbWUuZHVyYXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiB3ZWJwO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcG9zdE1lc3NhZ2Uod2VibSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGVzIGZyYW1lcyBpbiBXZWJNIGNvbnRhaW5lci4gSXQgdXNlcyBXZWJXb3JraW52b2tlIHRvIGludm9rZSAnQXJyYXlUb1dlYk0nIG1ldGhvZC5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24sIHRoYXQgaXMgdXNlZCB0byBwYXNzIHJlY29yZGVkIGJsb2IgYmFjayB0byB0aGUgY2FsbGVlLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdoYW1teVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyID0gbmV3IFdoYW1teSgpLlZpZGVvKDAuOCwgMTAwKTtcclxuICAgICAqIHJlY29yZGVyLmNvbXBpbGUoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICogICAgLy8gYmxvYi5zaXplIC0gYmxvYi50eXBlXHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgV2hhbW15VmlkZW8ucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciB3ZWJXb3JrZXIgPSBwcm9jZXNzSW5XZWJXb3JrZXIod2hhbW15SW5XZWJXb3JrZXIpO1xyXG5cclxuICAgICAgICB3ZWJXb3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXZlbnQuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2ViV29ya2VyLnBvc3RNZXNzYWdlKHRoaXMuZnJhbWVzKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIG1vcmUgYWJzdHJhY3QtaXNoIEFQSS5cclxuICAgICAgICAgKiBAbWV0aG9kXHJcbiAgICAgICAgICogQG1lbWJlcm9mIFdoYW1teVxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogcmVjb3JkZXIgPSBuZXcgV2hhbW15KCkuVmlkZW8oMC44LCAxMDApO1xyXG4gICAgICAgICAqIEBwYXJhbSB7P251bWJlcn0gc3BlZWQgLSAwLjhcclxuICAgICAgICAgKiBAcGFyYW0gez9udW1iZXJ9IHF1YWxpdHkgLSAxMDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBWaWRlbzogV2hhbW15VmlkZW9cclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5XaGFtbXkgPSBXaGFtbXk7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fXyAoaW5kZXhlZC1kYilcclxuLy8gRGlza1N0b3JhZ2UuanNcclxuXHJcbi8qKlxyXG4gKiBEaXNrU3RvcmFnZSBpcyBhIHN0YW5kYWxvbmUgb2JqZWN0IHVzZWQgYnkge0BsaW5rIFJlY29yZFJUQ30gdG8gc3RvcmUgcmVjb3JkZWQgYmxvYnMgaW4gSW5kZXhlZERCIHN0b3JhZ2UuXHJcbiAqIEBzdW1tYXJ5IFdyaXRpbmcgYmxvYnMgaW50byBJbmRleGVkREIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBEaXNrU3RvcmFnZS5TdG9yZSh7XHJcbiAqICAgICBhdWRpb0Jsb2I6IHlvdXJBdWRpb0Jsb2IsXHJcbiAqICAgICB2aWRlb0Jsb2I6IHlvdXJWaWRlb0Jsb2IsXHJcbiAqICAgICBnaWZCbG9iICA6IHlvdXJHaWZCbG9iXHJcbiAqIH0pO1xyXG4gKiBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCB0eXBlKSB7XHJcbiAqICAgICBpZih0eXBlID09PSAnYXVkaW9CbG9iJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAndmlkZW9CbG9iJykgeyB9XHJcbiAqICAgICBpZih0eXBlID09PSAnZ2lmQmxvYicpICAgeyB9XHJcbiAqIH0pO1xyXG4gKiAvLyBEaXNrU3RvcmFnZS5kYXRhU3RvcmVOYW1lID0gJ3JlY29yZFJUQyc7XHJcbiAqIC8vIERpc2tTdG9yYWdlLm9uRXJyb3IgPSBmdW5jdGlvbihlcnJvcikgeyB9O1xyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBpbml0IC0gVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgb25jZSB0byBpbml0aWFsaXplIEluZGV4ZWREQiBPYmplY3RTdG9yZS4gVGhvdWdoLCBpdCBpcyBhdXRvLXVzZWQgaW50ZXJuYWxseS5cclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gRmV0Y2ggLSBUaGlzIG1ldGhvZCBmZXRjaGVzIHN0b3JlZCBibG9icyBmcm9tIEluZGV4ZWREQi5cclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gU3RvcmUgLSBUaGlzIG1ldGhvZCBzdG9yZXMgYmxvYnMgaW4gSW5kZXhlZERCLlxyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvbkVycm9yIC0gVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIGZvciBhbnkga25vd24vdW5rbm93biBlcnJvci5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRhdGFTdG9yZU5hbWUgLSBOYW1lIG9mIHRoZSBPYmplY3RTdG9yZSBjcmVhdGVkIGluIEluZGV4ZWREQiBzdG9yYWdlLlxyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqL1xyXG5cclxuXHJcbnZhciBEaXNrU3RvcmFnZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgb25jZSB0byBpbml0aWFsaXplIEluZGV4ZWREQiBPYmplY3RTdG9yZS4gVGhvdWdoLCBpdCBpcyBhdXRvLXVzZWQgaW50ZXJuYWxseS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuaW5pdCgpO1xyXG4gICAgICovXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZERCID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgaW5kZXhlZERCLm9wZW4gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZGV4ZWREQiBBUEkgYXJlIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGJWZXJzaW9uID0gMTtcclxuICAgICAgICB2YXIgZGJOYW1lID0gdGhpcy5kYk5hbWUgfHwgbG9jYXRpb24uaHJlZi5yZXBsYWNlKC9cXC98OnwjfCV8XFwufFxcW3xcXF0vZywgJycpLFxyXG4gICAgICAgICAgICBkYjtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgZGJWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0U3RvcmUoZGF0YUJhc2UpIHtcclxuICAgICAgICAgICAgZGF0YUJhc2UuY3JlYXRlT2JqZWN0U3RvcmUoc2VsZi5kYXRhU3RvcmVOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHB1dEluREIoKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFtzZWxmLmRhdGFTdG9yZU5hbWVdLCAncmVhZHdyaXRlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi52aWRlb0Jsb2IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkucHV0KHNlbGYudmlkZW9CbG9iLCAndmlkZW9CbG9iJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxmLmdpZkJsb2IpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkucHV0KHNlbGYuZ2lmQmxvYiwgJ2dpZkJsb2InKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGYuYXVkaW9CbG9iKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLmRhdGFTdG9yZU5hbWUpLnB1dChzZWxmLmF1ZGlvQmxvYiwgJ2F1ZGlvQmxvYicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRGcm9tU3RvcmUocG9ydGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuZGF0YVN0b3JlTmFtZSkuZ2V0KHBvcnRpb25OYW1lKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbGJhY2soZXZlbnQudGFyZ2V0LnJlc3VsdCwgcG9ydGlvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgnYXVkaW9CbG9iJyk7XHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgndmlkZW9CbG9iJyk7XHJcbiAgICAgICAgICAgIGdldEZyb21TdG9yZSgnZ2lmQmxvYicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gc2VsZi5vbkVycm9yO1xyXG5cclxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkYiA9IHJlcXVlc3QucmVzdWx0O1xyXG4gICAgICAgICAgICBkYi5vbmVycm9yID0gc2VsZi5vbkVycm9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRiLnNldFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYi52ZXJzaW9uICE9PSBkYlZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0VmVyc2lvbiA9IGRiLnNldFZlcnNpb24oZGJWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWZXJzaW9uLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVPYmplY3RTdG9yZShkYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1dEluREIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwdXRJbkRCKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwdXRJbkRCKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgY3JlYXRlT2JqZWN0U3RvcmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGZldGNoZXMgc3RvcmVkIGJsb2JzIGZyb20gSW5kZXhlZERCLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIERpc2tTdG9yYWdlXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBEaXNrU3RvcmFnZS5GZXRjaChmdW5jdGlvbihkYXRhVVJMLCB0eXBlKSB7XHJcbiAgICAgKiAgICAgaWYodHlwZSA9PT0gJ2F1ZGlvQmxvYicpIHsgfVxyXG4gICAgICogICAgIGlmKHR5cGUgPT09ICd2aWRlb0Jsb2InKSB7IH1cclxuICAgICAqICAgICBpZih0eXBlID09PSAnZ2lmQmxvYicpICAgeyB9XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgRmV0Y2g6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHN0b3JlcyBibG9icyBpbiBJbmRleGVkREIuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgRGlza1N0b3JhZ2VcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIERpc2tTdG9yYWdlLlN0b3JlKHtcclxuICAgICAqICAgICBhdWRpb0Jsb2I6IHlvdXJBdWRpb0Jsb2IsXHJcbiAgICAgKiAgICAgdmlkZW9CbG9iOiB5b3VyVmlkZW9CbG9iLFxyXG4gICAgICogICAgIGdpZkJsb2IgIDogeW91ckdpZkJsb2JcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICBTdG9yZTogZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0Jsb2IgPSBjb25maWcuYXVkaW9CbG9iO1xyXG4gICAgICAgIHRoaXMudmlkZW9CbG9iID0gY29uZmlnLnZpZGVvQmxvYjtcclxuICAgICAgICB0aGlzLmdpZkJsb2IgPSBjb25maWcuZ2lmQmxvYjtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkIGZvciBhbnkga25vd24vdW5rbm93biBlcnJvci5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2Uub25FcnJvciA9IGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAqICAgICBhbGVyb3QoIEpTT04uc3RyaW5naWZ5KGVycm9yKSApO1xyXG4gICAgICogfTtcclxuICAgICAqL1xyXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9yLCBudWxsLCAnXFx0JykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhU3RvcmVOYW1lIC0gTmFtZSBvZiB0aGUgT2JqZWN0U3RvcmUgY3JlYXRlZCBpbiBJbmRleGVkREIgc3RvcmFnZS5cclxuICAgICAqIEBtZW1iZXJvZiBEaXNrU3RvcmFnZVxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogRGlza1N0b3JhZ2UuZGF0YVN0b3JlTmFtZSA9ICdyZWNvcmRSVEMnO1xyXG4gICAgICovXHJcbiAgICBkYXRhU3RvcmVOYW1lOiAncmVjb3JkUlRDJyxcclxuICAgIGRiTmFtZTogbnVsbFxyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuRGlza1N0b3JhZ2UgPSBEaXNrU3RvcmFnZTtcclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fXHJcbi8vIEdpZlJlY29yZGVyLmpzXHJcblxyXG4vKipcclxuICogR2lmUmVjb3JkZXIgaXMgc3RhbmRhbG9uZSBjYWxzcyB1c2VkIGJ5IHtAbGluayBSZWNvcmRSVEN9IHRvIHJlY29yZCB2aWRlbyBvciBjYW52YXMgaW50byBhbmltYXRlZCBnaWYuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBHaWZSZWNvcmRlclxyXG4gKiBAY2xhc3NcclxuICogQGV4YW1wbGVcclxuICogdmFyIHJlY29yZGVyID0gbmV3IEdpZlJlY29yZGVyKG1lZGlhU3RyZWFtIHx8IGNhbnZhcyB8fCBjb250ZXh0LCB7IG9uR2lmUHJldmlldzogZnVuY3Rpb24sIG9uR2lmUmVjb3JkaW5nU3RhcnRlZDogZnVuY3Rpb24sIHdpZHRoOiAxMjgwLCBoZWlnaHQ6IDcyMCwgZnJhbWVSYXRlOiAyMDAsIHF1YWxpdHk6IDEwIH0pO1xyXG4gKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAqICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3Qgb3IgSFRNTENhbnZhc0VsZW1lbnQgb3IgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge2Rpc2FibGVMb2dzOnRydWUsIGluaXRDYWxsYmFjazogZnVuY3Rpb24sIHdpZHRoOiAzMjAsIGhlaWdodDogMjQwLCBmcmFtZVJhdGU6IDIwMCwgcXVhbGl0eTogMTB9XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gR2lmUmVjb3JkZXIobWVkaWFTdHJlYW0sIGNvbmZpZykge1xyXG4gICAgaWYgKHR5cGVvZiBHSUZFbmNvZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLndlYnJ0Yy1leHBlcmltZW50LmNvbS9naWYtcmVjb3JkZXIuanMnO1xyXG4gICAgICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcblxyXG4gICAgdmFyIGlzSFRNTE9iamVjdCA9IG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHx8IG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNvcmRzIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBHSUZFbmNvZGVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYucmVjb3JkLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0xvYWRlZE1ldGFEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5yZWNvcmQsIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzSFRNTE9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLndpZHRoID0gdmlkZW8ub2Zmc2V0V2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5oZWlnaHQgPSB2aWRlby5vZmZzZXRIZWlnaHQgfHwgMjQwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy52aWRlbykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnZpZGVvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5jYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5jYW52YXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGNvbmZpZy5jYW52YXMud2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY29uZmlnLmNhbnZhcy5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ud2lkdGggPSBjb25maWcudmlkZW8ud2lkdGggfHwgMzIwO1xyXG4gICAgICAgICAgICB2aWRlby5oZWlnaHQgPSBjb25maWcudmlkZW8uaGVpZ2h0IHx8IDI0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV4dGVybmFsIGxpYnJhcnkgdG8gcmVjb3JkIGFzIEdJRiBpbWFnZXNcclxuICAgICAgICBnaWZFbmNvZGVyID0gbmV3IEdJRkVuY29kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gdm9pZCBzZXRSZXBlYXQoaW50IGl0ZXIpIFxyXG4gICAgICAgIC8vIFNldHMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgc2V0IG9mIEdJRiBmcmFtZXMgc2hvdWxkIGJlIHBsYXllZC4gXHJcbiAgICAgICAgLy8gRGVmYXVsdCBpcyAxOyAwIG1lYW5zIHBsYXkgaW5kZWZpbml0ZWx5LlxyXG4gICAgICAgIGdpZkVuY29kZXIuc2V0UmVwZWF0KDApO1xyXG5cclxuICAgICAgICAvLyB2b2lkIHNldEZyYW1lUmF0ZShOdW1iZXIgZnBzKSBcclxuICAgICAgICAvLyBTZXRzIGZyYW1lIHJhdGUgaW4gZnJhbWVzIHBlciBzZWNvbmQuIFxyXG4gICAgICAgIC8vIEVxdWl2YWxlbnQgdG8gc2V0RGVsYXkoMTAwMC9mcHMpLlxyXG4gICAgICAgIC8vIFVzaW5nIFwic2V0RGVsYXlcIiBpbnN0ZWFkIG9mIFwic2V0RnJhbWVSYXRlXCJcclxuICAgICAgICBnaWZFbmNvZGVyLnNldERlbGF5KGNvbmZpZy5mcmFtZVJhdGUgfHwgMjAwKTtcclxuXHJcbiAgICAgICAgLy8gdm9pZCBzZXRRdWFsaXR5KGludCBxdWFsaXR5KSBcclxuICAgICAgICAvLyBTZXRzIHF1YWxpdHkgb2YgY29sb3IgcXVhbnRpemF0aW9uIChjb252ZXJzaW9uIG9mIGltYWdlcyB0byB0aGUgXHJcbiAgICAgICAgLy8gbWF4aW11bSAyNTYgY29sb3JzIGFsbG93ZWQgYnkgdGhlIEdJRiBzcGVjaWZpY2F0aW9uKS4gXHJcbiAgICAgICAgLy8gTG93ZXIgdmFsdWVzIChtaW5pbXVtID0gMSkgcHJvZHVjZSBiZXR0ZXIgY29sb3JzLCBcclxuICAgICAgICAvLyBidXQgc2xvdyBwcm9jZXNzaW5nIHNpZ25pZmljYW50bHkuIDEwIGlzIHRoZSBkZWZhdWx0LCBcclxuICAgICAgICAvLyBhbmQgcHJvZHVjZXMgZ29vZCBjb2xvciBtYXBwaW5nIGF0IHJlYXNvbmFibGUgc3BlZWRzLiBcclxuICAgICAgICAvLyBWYWx1ZXMgZ3JlYXRlciB0aGFuIDIwIGRvIG5vdCB5aWVsZCBzaWduaWZpY2FudCBpbXByb3ZlbWVudHMgaW4gc3BlZWQuXHJcbiAgICAgICAgZ2lmRW5jb2Rlci5zZXRRdWFsaXR5KGNvbmZpZy5xdWFsaXR5IHx8IDEwKTtcclxuXHJcbiAgICAgICAgLy8gQm9vbGVhbiBzdGFydCgpIFxyXG4gICAgICAgIC8vIFRoaXMgd3JpdGVzIHRoZSBHSUYgSGVhZGVyIGFuZCByZXR1cm5zIGZhbHNlIGlmIGl0IGZhaWxzLlxyXG4gICAgICAgIGdpZkVuY29kZXIuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25HaWZSZWNvcmRpbmdTdGFydGVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5vbkdpZlJlY29yZGluZ1N0YXJ0ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdWaWRlb0ZyYW1lKHRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY2xlYXJlZFJlY29yZGVkRGF0YSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNQYXVzZWRSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdWaWRlb0ZyYW1lKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdWaWRlb0ZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGFzdEZyYW1lVGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gfjEwIGZwc1xyXG4gICAgICAgICAgICBpZiAodGltZSAtIGxhc3RGcmFtZVRpbWUgPCA5MCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzSFRNTE9iamVjdCAmJiB2aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHZpYTogaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9XZWJSVEMtRXhwZXJpbWVudC9wdWxsLzMxNlxyXG4gICAgICAgICAgICAgICAgLy8gVHdlYWsgZm9yIEFuZHJvaWQgQ2hyb21lXHJcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNIVE1MT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkdpZlByZXZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5vbkdpZlByZXZpZXcoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnaWZFbmNvZGVyLmFkZEZyYW1lKGNvbnRleHQpO1xyXG4gICAgICAgICAgICBsYXN0RnJhbWVUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3VmlkZW9GcmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuaW5pdENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgcmVjb3JkaW5nIE1lZGlhU3RyZWFtLlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiwgdGhhdCBpcyB1c2VkIHRvIHBhc3MgcmVjb3JkZWQgYmxvYiBiYWNrIHRvIHRoZSBjYWxsZWUuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAqICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShsYXN0QW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZW5kVGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7QmxvYn0gYmxvYiAtIFRoZSByZWNvcmRlZCBibG9iIG9iamVjdC5cclxuICAgICAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAgICAgKiAgICAgdmFyIGJsb2IgPSByZWNvcmRlci5ibG9iO1xyXG4gICAgICAgICAqIH0pO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShnaWZFbmNvZGVyLnN0cmVhbSgpLmJpbildLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9naWYnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuYmxvYik7XHJcblxyXG4gICAgICAgIC8vIGJ1ZzogZmluZCBhIHdheSB0byBjbGVhciBvbGQgcmVjb3JkZWQgYmxvYnNcclxuICAgICAgICBnaWZFbmNvZGVyLnN0cmVhbSgpLmJpbiA9IFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5wYXVzZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc3VtZXMgdGhlIHJlY29yZGluZyBwcm9jZXNzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIEdpZlJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNQYXVzZWRSZWNvcmRpbmcgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZXNldHMgY3VycmVudGx5IHJlY29yZGVkIGRhdGEuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgR2lmUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2VsZi5jbGVhcmVkUmVjb3JkZWREYXRhID0gdHJ1ZTtcclxuICAgICAgICBjbGVhclJlY29yZGVkRGF0YUNCKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUmVjb3JkZWREYXRhQ0IoKSB7XHJcbiAgICAgICAgaWYgKGdpZkVuY29kZXIpIHtcclxuICAgICAgICAgICAgZ2lmRW5jb2Rlci5zdHJlYW0oKS5iaW4gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ0dpZlJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGlmIChpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICBpZiAobWVkaWFTdHJlYW0gaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICAgICAgY29udGV4dCA9IG1lZGlhU3RyZWFtO1xyXG4gICAgICAgICAgICBjYW52YXMgPSBjb250ZXh0LmNhbnZhcztcclxuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhU3RyZWFtIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29udGV4dCA9IG1lZGlhU3RyZWFtLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcyA9IG1lZGlhU3RyZWFtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgaXNMb2FkZWRNZXRhRGF0YSA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFpc0hUTUxPYmplY3QpIHtcclxuICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcclxuICAgICAgICB2aWRlby5hdXRvcGxheSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlzTG9hZGVkTWV0YURhdGEgPSBmYWxzZTtcclxuICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlzTG9hZGVkTWV0YURhdGEgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldFNyY09iamVjdChtZWRpYVN0cmVhbSwgdmlkZW8pO1xyXG5cclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxhc3RBbmltYXRpb25GcmFtZSA9IG51bGw7XHJcbiAgICB2YXIgc3RhcnRUaW1lLCBlbmRUaW1lLCBsYXN0RnJhbWVUaW1lO1xyXG5cclxuICAgIHZhciBnaWZFbmNvZGVyO1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuR2lmUmVjb3JkZXIgPSBHaWZSZWNvcmRlcjtcclxufVxuXHJcbi8vIExhc3QgdGltZSB1cGRhdGVkOiAyMDE4LTEyLTIyIDk6MTM6MjkgQU0gVVRDXHJcblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTXVsdGlTdHJlYW1zTWl4ZXIgdjEuMC43XHJcblxyXG4vLyBPcGVuLVNvdXJjZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vTXVsdGlTdHJlYW1zTWl4ZXJcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIE11YXogS2hhbiAgICAgLSB3d3cuTXVhektoYW4uY29tXHJcbi8vIE1JVCBMaWNlbnNlICAgLSB3d3cuV2ViUlRDLUV4cGVyaW1lbnQuY29tL2xpY2VuY2VcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIE11bHRpU3RyZWFtc01peGVyKGFycmF5T2ZNZWRpYVN0cmVhbXMpIHtcclxuXHJcbiAgICAvLyByZXF1aXJlczogY2hyb21lOi8vZmxhZ3MvI2VuYWJsZS1leHBlcmltZW50YWwtd2ViLXBsYXRmb3JtLWZlYXR1cmVzXHJcblxyXG4gICAgdmFyIHZpZGVvcyA9IFtdO1xyXG4gICAgdmFyIGlzU3RvcERyYXdpbmdGcmFtZXMgPSBmYWxzZTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzLnN0eWxlID0gJ29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Oi0xO3RvcDogLTEwMDAwMDAwMDtsZWZ0Oi0xMDAwMDAwMDAwOyBtYXJnaW4tdG9wOi0xMDAwMDAwMDAwO21hcmdpbi1sZWZ0Oi0xMDAwMDAwMDAwOyc7XHJcbiAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgdGhpcy5kaXNhYmxlTG9ncyA9IGZhbHNlO1xyXG4gICAgdGhpcy5mcmFtZUludGVydmFsID0gMTA7XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IDM2MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMjQwO1xyXG5cclxuICAgIC8vIHVzZSBnYWluIG5vZGUgdG8gcHJldmVudCBlY2hvXHJcbiAgICB0aGlzLnVzZUdhaW5Ob2RlID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuICAgIC8vIENyb3NzLUJyb3dzZXItRGVjbGFyYXRpb25zLmpzXHJcblxyXG4gICAgLy8gV2ViQXVkaW8gQVBJIHJlcHJlc2VudGVyXHJcbiAgICB2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dDtcclxuXHJcbiAgICBpZiAodHlwZW9mIEF1ZGlvQ29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEF1ZGlvQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLypnbG9iYWwgQXVkaW9Db250ZXh0OnRydWUgKi9cclxuICAgICAgICAgICAgQXVkaW9Db250ZXh0ID0gd2Via2l0QXVkaW9Db250ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb3pBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8qZ2xvYmFsIEF1ZGlvQ29udGV4dDp0cnVlICovXHJcbiAgICAgICAgICAgIEF1ZGlvQ29udGV4dCA9IG1vekF1ZGlvQ29udGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypqc2hpbnQgLVcwNzkgKi9cclxuICAgIHZhciBVUkwgPSB3aW5kb3cuVVJMO1xyXG5cclxuICAgIGlmICh0eXBlb2YgVVJMID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2Via2l0VVJMICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8qZ2xvYmFsIFVSTDp0cnVlICovXHJcbiAgICAgICAgVVJMID0gd2Via2l0VVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9PT0gJ3VuZGVmaW5lZCcpIHsgLy8gbWF5YmUgd2luZG93Lm5hdmlnYXRvcj9cclxuICAgICAgICBpZiAodHlwZW9mIG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIE1lZGlhU3RyZWFtID0gd2luZG93Lk1lZGlhU3RyZWFtO1xyXG5cclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW0gPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3ZWJraXRNZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBNZWRpYVN0cmVhbSA9IHdlYmtpdE1lZGlhU3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2xvYmFsIE1lZGlhU3RyZWFtOnRydWUgKi9cclxuICAgIGlmICh0eXBlb2YgTWVkaWFTdHJlYW0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgXCJzdG9wXCIgbWV0aG9kIGZvciBhbGwgYnJvd3NlcnNcclxuICAgICAgICBpZiAodHlwZW9mIE1lZGlhU3RyZWFtLnByb3RvdHlwZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBNZWRpYVN0cmVhbS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBTdG9yYWdlID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQ7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHQgPSB3ZWJraXRBdWRpb0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3JjT2JqZWN0KHN0cmVhbSwgZWxlbWVudCkge1xyXG4gICAgICAgIGlmICgnc3JjT2JqZWN0JyBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21velNyY09iamVjdCcgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Lm1velNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydERyYXdpbmdGcmFtZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkcmF3VmlkZW9zVG9DYW52YXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1ZpZGVvc1RvQ2FudmFzKCkge1xyXG4gICAgICAgIGlmIChpc1N0b3BEcmF3aW5nRnJhbWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB2aWRlb3NMZW5ndGggPSB2aWRlb3MubGVuZ3RoO1xyXG5cclxuICAgICAgICB2YXIgZnVsbGNhbnZhcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciByZW1haW5pbmcgPSBbXTtcclxuICAgICAgICB2aWRlb3MuZm9yRWFjaChmdW5jdGlvbih2aWRlbykge1xyXG4gICAgICAgICAgICBpZiAoIXZpZGVvLnN0cmVhbSkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc3RyZWFtID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2aWRlby5zdHJlYW0uZnVsbGNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgZnVsbGNhbnZhcyA9IHZpZGVvO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nLnB1c2godmlkZW8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGZ1bGxjYW52YXMuc3RyZWFtLndpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZnVsbGNhbnZhcy5zdHJlYW0uaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVtYWluaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB2aWRlb3NMZW5ndGggPiAxID8gcmVtYWluaW5nWzBdLndpZHRoICogMiA6IHJlbWFpbmluZ1swXS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSAzIHx8IHZpZGVvc0xlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA1IHx8IHZpZGVvc0xlbmd0aCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA3IHx8IHZpZGVvc0xlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmlkZW9zTGVuZ3RoID09PSA5IHx8IHZpZGVvc0xlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHJlbWFpbmluZ1swXS5oZWlnaHQgKiBoZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2VsZi53aWR0aCB8fCAzNjA7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzZWxmLmhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZnVsbGNhbnZhcyAmJiBmdWxsY2FudmFzIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgICAgICBkcmF3SW1hZ2UoZnVsbGNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1haW5pbmcuZm9yRWFjaChmdW5jdGlvbih2aWRlbywgaWR4KSB7XHJcbiAgICAgICAgICAgIGRyYXdJbWFnZSh2aWRlbywgaWR4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkcmF3VmlkZW9zVG9DYW52YXMsIHNlbGYuZnJhbWVJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd0ltYWdlKHZpZGVvLCBpZHgpIHtcclxuICAgICAgICBpZiAoaXNTdG9wRHJhd2luZ0ZyYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgeCA9IDA7XHJcbiAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB2aWRlby5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDEpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMikge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMykge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWR4ID09PSA0KSB7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNSkge1xyXG4gICAgICAgICAgICB4ID0gdmlkZW8ud2lkdGg7XHJcbiAgICAgICAgICAgIHkgPSB2aWRlby5oZWlnaHQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gNikge1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZHggPT09IDcpIHtcclxuICAgICAgICAgICAgeCA9IHZpZGVvLndpZHRoO1xyXG4gICAgICAgICAgICB5ID0gdmlkZW8uaGVpZ2h0ICogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLmxlZnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHggPSB2aWRlby5zdHJlYW0ubGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLnRvcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgeSA9IHZpZGVvLnN0cmVhbS50b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgd2lkdGggPSB2aWRlby5zdHJlYW0ud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZpZGVvLnN0cmVhbS5oZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHZpZGVvLnN0cmVhbS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWRlbywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmlkZW8uc3RyZWFtLm9uUmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0cmVhbS5vblJlbmRlcihjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBpZHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZFN0cmVhbSgpIHtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nRnJhbWVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1peGVkVmlkZW9TdHJlYW0gPSBnZXRNaXhlZFZpZGVvU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIHZhciBtaXhlZEF1ZGlvU3RyZWFtID0gZ2V0TWl4ZWRBdWRpb1N0cmVhbSgpO1xyXG4gICAgICAgIGlmIChtaXhlZEF1ZGlvU3RyZWFtKSB7XHJcbiAgICAgICAgICAgIG1peGVkQXVkaW9TdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcclxuICAgICAgICAgICAgICAgIG1peGVkVmlkZW9TdHJlYW0uYWRkVHJhY2sodHJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmdWxsY2FudmFzO1xyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKHN0cmVhbS5mdWxsY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICBmdWxsY2FudmFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWl4ZWRWaWRlb1N0cmVhbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNaXhlZFZpZGVvU3RyZWFtKCkge1xyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKCk7XHJcblxyXG4gICAgICAgIHZhciBjYXB0dXJlZFN0cmVhbTtcclxuXHJcbiAgICAgICAgaWYgKCdjYXB0dXJlU3RyZWFtJyBpbiBjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FwdHVyZWRTdHJlYW0gPSBjYW52YXMuY2FwdHVyZVN0cmVhbSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJ21vekNhcHR1cmVTdHJlYW0nIGluIGNhbnZhcykge1xyXG4gICAgICAgICAgICBjYXB0dXJlZFN0cmVhbSA9IGNhbnZhcy5tb3pDYXB0dXJlU3RyZWFtKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc2VsZi5kaXNhYmxlTG9ncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVcGdyYWRlIHRvIGxhdGVzdCBDaHJvbWUgb3Igb3RoZXJ3aXNlIGVuYWJsZSB0aGlzIGZsYWc6IGNocm9tZTovL2ZsYWdzLyNlbmFibGUtZXhwZXJpbWVudGFsLXdlYi1wbGF0Zm9ybS1mZWF0dXJlcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZpZGVvU3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKCk7XHJcblxyXG4gICAgICAgIGNhcHR1cmVkU3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICd2aWRlbyc7XHJcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xyXG4gICAgICAgICAgICB2aWRlb1N0cmVhbS5hZGRUcmFjayh0cmFjayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbnZhcy5zdHJlYW0gPSB2aWRlb1N0cmVhbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvU3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE1peGVkQXVkaW9TdHJlYW0oKSB7XHJcbiAgICAgICAgLy8gdmlhOiBAcGVocnNvbnNcclxuICAgICAgICBpZiAoIVN0b3JhZ2UuQXVkaW9Db250ZXh0Q29uc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgU3RvcmFnZS5BdWRpb0NvbnRleHRDb25zdHJ1Y3RvciA9IG5ldyBTdG9yYWdlLkF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQgPSBTdG9yYWdlLkF1ZGlvQ29udGV4dENvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBzZWxmLmF1ZGlvU291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi51c2VHYWluTm9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmNvbm5lY3Qoc2VsZi5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICBzZWxmLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwOyAvLyBkb24ndCBoZWFyIHNlbGZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdWRpb1RyYWNrc0xlbmd0aCA9IDA7XHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN0cmVhbS5nZXRUcmFja3MoKS5maWx0ZXIoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmtpbmQgPT09ICdhdWRpbyc7XHJcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXVkaW9UcmFja3NMZW5ndGgrKztcclxuXHJcbiAgICAgICAgICAgIHZhciBhdWRpb1NvdXJjZSA9IHNlbGYuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZi51c2VHYWluTm9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY29ubmVjdChzZWxmLmdhaW5Ob2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5hdWRpb1NvdXJjZXMucHVzaChhdWRpb1NvdXJjZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghYXVkaW9UcmFja3NMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5hdWRpb0Rlc3RpbmF0aW9uID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1EZXN0aW5hdGlvbigpO1xyXG4gICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oYXVkaW9Tb3VyY2UpIHtcclxuICAgICAgICAgICAgYXVkaW9Tb3VyY2UuY29ubmVjdChzZWxmLmF1ZGlvRGVzdGluYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZWxmLmF1ZGlvRGVzdGluYXRpb24uc3RyZWFtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZGVvKHN0cmVhbSkge1xyXG4gICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcblxyXG4gICAgICAgIHNldFNyY09iamVjdChzdHJlYW0sIHZpZGVvKTtcclxuXHJcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHZpZGVvLnZvbHVtZSA9IDA7XHJcblxyXG4gICAgICAgIHZpZGVvLndpZHRoID0gc3RyZWFtLndpZHRoIHx8IHNlbGYud2lkdGggfHwgMzYwO1xyXG4gICAgICAgIHZpZGVvLmhlaWdodCA9IHN0cmVhbS5oZWlnaHQgfHwgc2VsZi5oZWlnaHQgfHwgMjQwO1xyXG5cclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2aWRlbztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcGVuZFN0cmVhbXMgPSBmdW5jdGlvbihzdHJlYW1zKSB7XHJcbiAgICAgICAgaWYgKCFzdHJlYW1zKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdGaXJzdCBwYXJhbWV0ZXIgaXMgcmVxdWlyZWQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFycmF5T2ZNZWRpYVN0cmVhbXMuY29uY2F0KHN0cmVhbXMpO1xyXG5cclxuICAgICAgICBzdHJlYW1zLmZvckVhY2goZnVuY3Rpb24oc3RyZWFtKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xyXG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW8gPSBnZXRWaWRlbyhzdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyZWFtLmdldFRyYWNrcygpLmZpbHRlcihmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQua2luZCA9PT0gJ2F1ZGlvJztcclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCAmJiBzZWxmLmF1ZGlvQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF1ZGlvU291cmNlID0gc2VsZi5hdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvU291cmNlLmNvbm5lY3Qoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzLnB1c2goYXVkaW9Tb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVsZWFzZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb3MgPSBbXTtcclxuICAgICAgICBpc1N0b3BEcmF3aW5nRnJhbWVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYuZ2Fpbk5vZGUpIHtcclxuICAgICAgICAgICAgc2VsZi5nYWluTm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuZ2Fpbk5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGYuYXVkaW9Tb3VyY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLmF1ZGlvU291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9Tb3VyY2VzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0Rlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbi5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHNlbGYuYXVkaW9EZXN0aW5hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZi5hdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgc2VsZi5hdWRpb0NvbnRleHQuY2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuYXVkaW9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhcy5zdHJlYW0pIHtcclxuICAgICAgICAgICAgY2FudmFzLnN0cmVhbS5zdG9wKCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5zdHJlYW0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZXNldFZpZGVvU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoc3RyZWFtcyAmJiAhKHN0cmVhbXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0VmlkZW9TdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFZpZGVvU3RyZWFtcyhzdHJlYW1zKSB7XHJcbiAgICAgICAgdmlkZW9zID0gW107XHJcbiAgICAgICAgc3RyZWFtcyA9IHN0cmVhbXMgfHwgYXJyYXlPZk1lZGlhU3RyZWFtcztcclxuXHJcbiAgICAgICAgLy8gdmlhOiBAYWRyaWFuLWJlclxyXG4gICAgICAgIHN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJlYW0uZ2V0VHJhY2tzKCkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5raW5kID09PSAndmlkZW8nO1xyXG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB2aWRlbyA9IGdldFZpZGVvKHN0cmVhbSk7XHJcbiAgICAgICAgICAgIHZpZGVvLnN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgdmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNdWx0aVN0cmVhbXNNaXhlcic7XHJcbiAgICB0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRNaXhlZFN0cmVhbSA9IGdldE1peGVkU3RyZWFtO1xyXG5cclxufVxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19cclxuLy8gTXVsdGlTdHJlYW1SZWNvcmRlci5qc1xyXG5cclxuLypcclxuICogVmlkZW8gY29uZmVyZW5jZSByZWNvcmRpbmcsIHVzaW5nIGNhcHR1cmVTdHJlYW0gQVBJIGFsb25nIHdpdGggV2ViQXVkaW8gYW5kIENhbnZhczJEIEFQSS5cclxuICovXHJcblxyXG4vKipcclxuICogTXVsdGlTdHJlYW1SZWNvcmRlciBjYW4gcmVjb3JkIG11bHRpcGxlIHZpZGVvcyBpbiBzaW5nbGUgY29udGFpbmVyLlxyXG4gKiBAc3VtbWFyeSBNdWx0aS12aWRlb3MgcmVjb3JkZXIuXHJcbiAqIEBsaWNlbnNlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQyNsaWNlbnNlfE1JVH1cclxuICogQGF1dGhvciB7QGxpbmsgaHR0cDovL3d3dy5NdWF6S2hhbi5jb218TXVheiBLaGFufVxyXG4gKiBAdHlwZWRlZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgb3B0aW9ucyA9IHtcclxuICogICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibSdcclxuICogfVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgTXVsdGlTdHJlYW1SZWNvcmRlcihBcnJheU9mTWVkaWFTdHJlYW1zLCBvcHRpb25zKTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICpcclxuICogICAgIC8vIG9yXHJcbiAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAqIH0pO1xyXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVhei1raGFuL1JlY29yZFJUQ3xSZWNvcmRSVEMgU291cmNlIENvZGV9XHJcbiAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXMuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7ZGlzYWJsZUxvZ3M6dHJ1ZSwgZnJhbWVJbnRlcnZhbDogMSwgbWltZVR5cGU6IFwidmlkZW8vd2VibVwifVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIE11bHRpU3RyZWFtUmVjb3JkZXIoYXJyYXlPZk1lZGlhU3RyZWFtcywgb3B0aW9ucykge1xyXG4gICAgYXJyYXlPZk1lZGlhU3RyZWFtcyA9IGFycmF5T2ZNZWRpYVN0cmVhbXMgfHwgW107XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIG1peGVyO1xyXG4gICAgdmFyIG1lZGlhUmVjb3JkZXI7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xyXG4gICAgICAgIG1pbWVUeXBlOiAndmlkZW8vd2VibScsXHJcbiAgICAgICAgdmlkZW86IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM2MCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghb3B0aW9ucy5mcmFtZUludGVydmFsKSB7XHJcbiAgICAgICAgb3B0aW9ucy5mcmFtZUludGVydmFsID0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnZpZGVvKSB7XHJcbiAgICAgICAgb3B0aW9ucy52aWRlbyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3B0aW9ucy52aWRlby53aWR0aCkge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8ud2lkdGggPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcHRpb25zLnZpZGVvLmhlaWdodCkge1xyXG4gICAgICAgIG9wdGlvbnMudmlkZW8uaGVpZ2h0ID0gMjQwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBhbGwgTWVkaWFTdHJlYW1zLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZWNvcmQoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWNvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBnaXRodWIvbXVhei1raGFuL011bHRpU3RyZWFtc01peGVyXHJcbiAgICAgICAgbWl4ZXIgPSBuZXcgTXVsdGlTdHJlYW1zTWl4ZXIoYXJyYXlPZk1lZGlhU3RyZWFtcyk7XHJcblxyXG4gICAgICAgIGlmIChnZXRBbGxWaWRlb1RyYWNrcygpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtaXhlci5mcmFtZUludGVydmFsID0gb3B0aW9ucy5mcmFtZUludGVydmFsIHx8IDEwO1xyXG4gICAgICAgICAgICBtaXhlci53aWR0aCA9IG9wdGlvbnMudmlkZW8ud2lkdGggfHwgMzYwO1xyXG4gICAgICAgICAgICBtaXhlci5oZWlnaHQgPSBvcHRpb25zLnZpZGVvLmhlaWdodCB8fCAyNDA7XHJcbiAgICAgICAgICAgIG1peGVyLnN0YXJ0RHJhd2luZ0ZyYW1lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmlld1N0cmVhbSAmJiB0eXBlb2Ygb3B0aW9ucy5wcmV2aWV3U3RyZWFtID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHJldmlld1N0cmVhbShtaXhlci5nZXRNaXhlZFN0cmVhbSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlY29yZCB1c2luZyBNZWRpYVJlY29yZGVyIEFQSVxyXG4gICAgICAgIG1lZGlhUmVjb3JkZXIgPSBuZXcgTWVkaWFTdHJlYW1SZWNvcmRlcihtaXhlci5nZXRNaXhlZFN0cmVhbSgpLCBvcHRpb25zKTtcclxuICAgICAgICBtZWRpYVJlY29yZGVyLnJlY29yZCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWaWRlb1RyYWNrcygpIHtcclxuICAgICAgICB2YXIgdHJhY2tzID0gW107XHJcbiAgICAgICAgYXJyYXlPZk1lZGlhU3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBnZXRUcmFja3Moc3RyZWFtLCAndmlkZW8nKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0cmFja3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgTWVkaWFTdHJlYW0uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghbWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZWRpYVJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gICAgICAgICAgICBzZWxmLmJsb2IgPSBibG9iO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2soYmxvYik7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmNsZWFyUmVjb3JkZWREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcGF1c2VzIHRoZSByZWNvcmRpbmcgcHJvY2Vzcy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgTXVsdGlTdHJlYW1SZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJlc2V0cyBjdXJyZW50bHkgcmVjb3JkZWQgZGF0YS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBNdWx0aVN0cmVhbVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5jbGVhclJlY29yZGVkRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChtZWRpYVJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIG1lZGlhUmVjb3JkZXIuY2xlYXJSZWNvcmRlZERhdGEoKTtcclxuICAgICAgICAgICAgbWVkaWFSZWNvcmRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWl4ZXIpIHtcclxuICAgICAgICAgICAgbWl4ZXIucmVsZWFzZVN0cmVhbXMoKTtcclxuICAgICAgICAgICAgbWl4ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZXh0cmEgbWVkaWEtc3RyZWFtcyB0byBleGlzdGluZyByZWNvcmRpbmdzLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5hZGRTdHJlYW1zKFtuZXdBdWRpb1N0cmVhbSwgbmV3VmlkZW9TdHJlYW1dKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRTdHJlYW1zID0gZnVuY3Rpb24oc3RyZWFtcykge1xyXG4gICAgICAgIGlmICghc3RyZWFtcykge1xyXG4gICAgICAgICAgICB0aHJvdyAnRmlyc3QgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShzdHJlYW1zIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHN0cmVhbXMgPSBbc3RyZWFtc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcnJheU9mTWVkaWFTdHJlYW1zLmNvbmNhdChzdHJlYW1zKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZWRpYVJlY29yZGVyIHx8ICFtaXhlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtaXhlci5hcHBlbmRTdHJlYW1zKHN0cmVhbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHZpZGVvcyBkdXJpbmcgbGl2ZSByZWNvcmRpbmcuIFJlcGxhY2Ugb2xkIHZpZGVvcyBlLmcuIHJlcGxhY2UgY2FtZXJhcyB3aXRoIGZ1bGwtc2NyZWVuLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIE11bHRpU3RyZWFtUmVjb3JkZXJcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1zfSBtZWRpYVN0cmVhbXMgLSBBcnJheSBvZiBNZWRpYVN0cmVhbXNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5yZXNldFZpZGVvU3RyZWFtcyhbbmV3VmlkZW8xLCBuZXdWaWRlbzJdKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZXNldFZpZGVvU3RyZWFtcyA9IGZ1bmN0aW9uKHN0cmVhbXMpIHtcclxuICAgICAgICBpZiAoIW1peGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdHJlYW1zICYmICEoc3RyZWFtcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBzdHJlYW1zID0gW3N0cmVhbXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWl4ZXIucmVzZXRWaWRlb1N0cmVhbXMoc3RyZWFtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGZvciBkZWJ1Z2dpbmdcclxuICAgIHRoaXMubmFtZSA9ICdNdWx0aVN0cmVhbVJlY29yZGVyJztcclxuICAgIHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuTXVsdGlTdHJlYW1SZWNvcmRlciA9IE11bHRpU3RyZWFtUmVjb3JkZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19cclxuLy8gUmVjb3JkUlRDLnByb21pc2VzLmpzXHJcblxyXG4vKipcclxuICogUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyIGFkZHMgcHJvbWlzZXMgc3VwcG9ydCBpbiB7QGxpbmsgUmVjb3JkUlRDfS4gVHJ5IGEge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDL2Jsb2IvbWFzdGVyL3NpbXBsZS1kZW1vcy9SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIuaHRtbHxkZW1vIGhlcmV9XHJcbiAqIEBzdW1tYXJ5IFByb21pc2VzIGZvciB7QGxpbmsgUmVjb3JkUlRDfVxyXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL211YXota2hhbi9SZWNvcmRSVEMjbGljZW5zZXxNSVR9XHJcbiAqIEBhdXRob3Ige0BsaW5rIGh0dHA6Ly93d3cuTXVhektoYW4uY29tfE11YXogS2hhbn1cclxuICogQHR5cGVkZWYgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAqIEBjbGFzc1xyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgcmVjb3JkZXIgPSBuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKG1lZGlhU3RyZWFtLCBvcHRpb25zKTtcclxuICogcmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoKVxyXG4gKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICogICAgICAgICAuY2F0Y2goZXJyb3JDQik7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBTaW5nbGUgbWVkaWEtc3RyZWFtIG9iamVjdCwgYXJyYXkgb2YgbWVkaWEtc3RyZWFtcywgaHRtbC1jYW52YXMtZWxlbWVudCwgZXRjLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0ge3R5cGU6XCJ2aWRlb1wiLCByZWNvcmRlclR5cGU6IE1lZGlhU3RyZWFtUmVjb3JkZXIsIGRpc2FibGVMb2dzOiB0cnVlLCBudW1iZXJPZkF1ZGlvQ2hhbm5lbHM6IDEsIGJ1ZmZlclNpemU6IDAsIHNhbXBsZVJhdGU6IDAsIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50LCBldGMufVxyXG4gKiBAdGhyb3dzIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgXCJuZXdcIiBrZXl3b3JkIGlzIG5vdCB1c2VkIHRvIGluaXRpYXRlIFwiUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXCIuIEFsc28gdGhyb3dzIGVycm9yIGlmIGZpcnN0IGFyZ3VtZW50IFwiTWVkaWFTdHJlYW1cIiBpcyBtaXNzaW5nLlxyXG4gKiBAcmVxdWlyZXMge0BsaW5rIFJlY29yZFJUQ31cclxuICovXHJcblxyXG5mdW5jdGlvbiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXIobWVkaWFTdHJlYW0sIG9wdGlvbnMpIHtcclxuICAgIGlmICghdGhpcykge1xyXG4gICAgICAgIHRocm93ICdVc2UgXCJuZXcgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyKClcIic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtZWRpYVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyAnRmlyc3QgYXJndW1lbnQgXCJNZWRpYVN0cmVhbVwiIGlzIHJlcXVpcmVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtCbG9ifSBibG9iIC0gQWNjZXNzL3JlYWNoIHRoZSBuYXRpdmUge0BsaW5rIFJlY29yZFJUQ30gb2JqZWN0LlxyXG4gICAgICogQG1lbWJlcm9mIFJlY29yZFJUQ1Byb21pc2VzSGFuZGxlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBpbnRlcm5hbCA9IHJlY29yZGVyLnJlY29yZFJUQy5nZXRJbnRlcm5hbFJlY29yZGVyKCk7XHJcbiAgICAgKiBhbGVydChpbnRlcm5hbCBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtUmVjb3JkZXIpO1xyXG4gICAgICovXHJcbiAgICBzZWxmLnJlY29yZFJUQyA9IG5ldyBSZWNvcmRSVEMobWVkaWFTdHJlYW0sIG9wdGlvbnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyBNZWRpYVN0cmVhbS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdGFydFJlY29yZGluZygpXHJcbiAgICAgKiAgICAgICAgIC50aGVuKHN1Y2Nlc3NDQilcclxuICAgICAqICAgICAgICAgLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0YXJ0UmVjb3JkaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvcmRSVEMuc3RhcnRSZWNvcmRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2Qgc3RvcHMgdGhlIHJlY29yZGluZy5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3BSZWNvcmRpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5zdG9wUmVjb3JkaW5nKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYmxvYiA9IHNlbGYucmVjb3JkUlRDLmdldEJsb2IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmJsb2IgfHwgIXNlbGYuYmxvYi5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRW1wdHkgYmxvYi4nLCBzZWxmLmJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJucyBkYXRhLXVybCBmb3IgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgcmVjb3JkZXIuZ2V0RGF0YVVSTCgpLnRoZW4oZnVuY3Rpb24oZGF0YVVSTCkge1xyXG4gICAgICogICAgICAgICB3aW5kb3cub3BlbihkYXRhVVJMKTtcclxuICAgICAqICAgICB9KS5jYXRjaChlcnJvckNCKTs7XHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXREYXRhVVJMID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlY29yZFJUQy5nZXREYXRhVVJMKGZ1bmN0aW9uKGRhdGFVUkwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGFVUkwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHJlY29yZGVkIGJsb2IuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVjb3JkUlRDUHJvbWlzZXNIYW5kbGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcFJlY29yZGluZygpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgKiAgICAgcmVjb3JkZXIuZ2V0QmxvYigpLnRoZW4oZnVuY3Rpb24oYmxvYikge30pXHJcbiAgICAgKiB9KS5jYXRjaChlcnJvckNCKTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRCbG9iID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZWxmLnJlY29yZFJUQy5nZXRCbG9iKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBSZWNvcmRlZCBkYXRhIGFzIFwiQmxvYlwiIG9iamVjdC5cclxuICAgICAqIEBtZW1iZXJvZiBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5zdG9wUmVjb3JkaW5nKCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmdldEJsb2IoKTtcclxuICAgICAqIH0pLmNhdGNoKGVycm9yQ0IpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmJsb2IgPSBudWxsO1xyXG59XHJcblxyXG5pZiAodHlwZW9mIFJlY29yZFJUQyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlY29yZFJUQy5SZWNvcmRSVENQcm9taXNlc0hhbmRsZXIgPSBSZWNvcmRSVENQcm9taXNlc0hhbmRsZXI7XHJcbn1cblxyXG4vLyBfX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIFdlYkFzc2VtYmx5UmVjb3JkZXIuanNcclxuXHJcbi8qKlxyXG4gKiBXZWJBc3NlbWJseVJlY29yZGVyIGxldHMgeW91IGNyZWF0ZSB3ZWJtIHZpZGVvcyBpbiBKYXZhU2NyaXB0IHZpYSBXZWJBc3NlbWJseS4gVGhlIGxpYnJhcnkgY29uc3VtZXMgcmF3IFJHQkEzMiBidWZmZXJzICg0IGJ5dGVzIHBlciBwaXhlbCkgYW5kIHR1cm5zIHRoZW0gaW50byBhIHdlYm0gdmlkZW8gd2l0aCB0aGUgZ2l2ZW4gZnJhbWVyYXRlIGFuZCBxdWFsaXR5LiBUaGlzIG1ha2VzIGl0IGNvbXBhdGlibGUgb3V0LW9mLXRoZS1ib3ggd2l0aCBJbWFnZURhdGEgZnJvbSBhIENBTlZBUy4gV2l0aCByZWFsdGltZSBtb2RlIHlvdSBjYW4gYWxzbyB1c2Ugd2VibS13YXNtIGZvciBzdHJlYW1pbmcgd2VibSB2aWRlb3MuXHJcbiAqIEBzdW1tYXJ5IFZpZGVvIHJlY29yZGluZyBmZWF0dXJlIGluIENocm9tZSwgRmlyZWZveCBhbmQgbWF5YmUgRWRnZS5cclxuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDI2xpY2Vuc2V8TUlUfVxyXG4gKiBAYXV0aG9yIHtAbGluayBodHRwOi8vd3d3Lk11YXpLaGFuLmNvbXxNdWF6IEtoYW59XHJcbiAqIEB0eXBlZGVmIFdlYkFzc2VtYmx5UmVjb3JkZXJcclxuICogQGNsYXNzXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciByZWNvcmRlciA9IG5ldyBXZWJBc3NlbWJseVJlY29yZGVyKG1lZGlhU3RyZWFtKTtcclxuICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oYmxvYikge1xyXG4gKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICogfSk7XHJcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWF6LWtoYW4vUmVjb3JkUlRDfFJlY29yZFJUQyBTb3VyY2UgQ29kZX1cclxuICogQHBhcmFtIHtNZWRpYVN0cmVhbX0gbWVkaWFTdHJlYW0gLSBNZWRpYVN0cmVhbSBvYmplY3QgZmV0Y2hlZCB1c2luZyBnZXRVc2VyTWVkaWEgQVBJIG9yIGdlbmVyYXRlZCB1c2luZyBjYXB0dXJlU3RyZWFtVW50aWxFbmRlZCBvciBXZWJBdWRpbyBBUEkuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgLSB7d2ViQXNzZW1ibHlQYXRoOid3ZWJtLXdhc20ud2FzbScsd29ya2VyUGF0aDogJ3dlYm0td29ya2VyLmpzJywgZnJhbWVSYXRlOiAzMCwgd2lkdGg6IDE5MjAsIGhlaWdodDogMTA4MCwgYml0cmF0ZTogMTAyNH1cclxuICovXHJcbmZ1bmN0aW9uIFdlYkFzc2VtYmx5UmVjb3JkZXIoc3RyZWFtLCBjb25maWcpIHtcclxuICAgIC8vIGJhc2VkIG9uOiBnaXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvd2VibS13YXNtXHJcblxyXG4gICAgaWYgKHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdyaXRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgZml4ZXMgcmVhZGFibGUvd3JpdGFibGUgc3RyZWFtcyBpc3N1ZXNcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGb2xsb3dpbmcgcG9seWZpbGwgaXMgc3Ryb25nbHkgcmVjb21tZW5kZWQ6IGh0dHBzOi8vdW5wa2cuY29tL0BtYXR0aWFzYnVlbGVucy93ZWItc3RyZWFtcy1wb2x5ZmlsbC9kaXN0L3BvbHlmaWxsLm1pbi5qcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICBjb25maWcud2lkdGggPSBjb25maWcud2lkdGggfHwgNjQwO1xyXG4gICAgY29uZmlnLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgfHwgNDgwO1xyXG4gICAgY29uZmlnLmZyYW1lUmF0ZSA9IGNvbmZpZy5mcmFtZVJhdGUgfHwgMzA7XHJcbiAgICBjb25maWcuYml0cmF0ZSA9IGNvbmZpZy5iaXRyYXRlIHx8IDEyMDA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQnVmZmVyVVJMKGJ1ZmZlciwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtidWZmZXJdLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUgfHwgJydcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FtZXJhU3RyZWFtKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xyXG4gICAgICAgICAgICBzdGFydDogZnVuY3Rpb24oY29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN2cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHZpZGVvLm9ucGxheWluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN2cy53aWR0aCA9IGNvbmZpZy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjdnMuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lVGltZW91dCA9IDEwMDAgLyBjb25maWcuZnJhbWVSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gZigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbywgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGYsIGZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnJhbWVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd29ya2VyO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKHN0cmVhbSwgYnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcud29ya2VyUGF0aCAmJiAhYnVmZmVyKSB7XHJcbiAgICAgICAgICAgIC8vIGlzIGl0IHNhZmUgdG8gdXNlIEBsYXRlc3QgP1xyXG4gICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICdodHRwczovL3VucGtnLmNvbS93ZWJtLXdhc21AbGF0ZXN0L2Rpc3Qvd2VibS13b3JrZXIuanMnXHJcbiAgICAgICAgICAgICkudGhlbihmdW5jdGlvbihyKSB7XHJcbiAgICAgICAgICAgICAgICByLmFycmF5QnVmZmVyKCkudGhlbihmdW5jdGlvbihidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFJlY29yZGluZyhzdHJlYW0sIGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLndvcmtlclBhdGggJiYgYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQvamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy53b3JrZXJQYXRoID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLndvcmtlclBhdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignd29ya2VyUGF0aCBwYXJhbWV0ZXIgaXMgbWlzc2luZy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdvcmtlciA9IG5ldyBXb3JrZXIoY29uZmlnLndvcmtlclBhdGgpO1xyXG5cclxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnLndlYkFzc2VtYmx5UGF0aCB8fCAnaHR0cHM6Ly91bnBrZy5jb20vd2VibS13YXNtQGxhdGVzdC9kaXN0L3dlYm0td2FzbS53YXNtJyk7XHJcbiAgICAgICAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1JFQURZJykge1xyXG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBiaXRyYXRlOiBjb25maWcuYml0cmF0ZSB8fCAxMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWViYXNlRGVuOiBjb25maWcuZnJhbWVSYXRlIHx8IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWx0aW1lOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW1lcmFTdHJlYW0oKS5waXBlVG8obmV3IFdyaXRhYmxlU3RyZWFtKHtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24oaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3b3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKGltYWdlLmRhdGEuYnVmZmVyLCBbaW1hZ2UuZGF0YS5idWZmZXJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISFldmVudC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkJ1ZmZlcnMucHVzaChldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVjb3JkcyB2aWRlby5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXZWJBc3NlbWJseVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIucmVjb3JkKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVjb3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyYXlPZkJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcoc3RyZWFtKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcuaW5pdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pbml0Q2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpc1BhdXNlZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIHBhdXNlcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgKi9cclxuICAgIHRoaXMucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzdW1lcyB0aGUgcmVjb3JkaW5nIHByb2Nlc3MuXHJcbiAgICAgKiBAbWV0aG9kXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnJlc3VtZSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXdvcmtlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UobnVsbCk7XHJcbiAgICAgICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xyXG4gICAgICAgIHdvcmtlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFycmF5T2ZCdWZmZXJzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzdG9wcyByZWNvcmRpbmcgdmlkZW8uXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uLCB0aGF0IGlzIHVzZWQgdG8gcGFzcyByZWNvcmRlZCBibG9iIGJhY2sgdG8gdGhlIGNhbGxlZS5cclxuICAgICAqIEBtZXRob2RcclxuICAgICAqIEBtZW1iZXJvZiBXZWJBc3NlbWJseVJlY29yZGVyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogcmVjb3JkZXIuc3RvcChmdW5jdGlvbihibG9iKSB7XHJcbiAgICAgKiAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAqIH0pO1xyXG4gICAgICovXHJcbiAgICB0aGlzLnN0b3AgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRlcm1pbmF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJsb2IgPSBuZXcgQmxvYihhcnJheU9mQnVmZmVycywge1xyXG4gICAgICAgICAgICB0eXBlOiAndmlkZW8vd2VibSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2sodGhpcy5ibG9iKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xyXG4gICAgdGhpcy5uYW1lID0gJ1dlYkFzc2VtYmx5UmVjb3JkZXInO1xyXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgcmVzZXRzIGN1cnJlbnRseSByZWNvcmRlZCBkYXRhLlxyXG4gICAgICogQG1ldGhvZFxyXG4gICAgICogQG1lbWJlcm9mIFdlYkFzc2VtYmx5UmVjb3JkZXJcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiByZWNvcmRlci5jbGVhclJlY29yZGVkRGF0YSgpO1xyXG4gICAgICovXHJcbiAgICB0aGlzLmNsZWFyUmVjb3JkZWREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXJyYXlPZkJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICBpc1BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvYiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRvZG86IGlmIHJlY29yZGluZy1PTiB0aGVuIFNUT1AgaXQgZmlyc3RcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHJvcGVydHkge0Jsb2J9IGJsb2IgLSBUaGUgcmVjb3JkZWQgYmxvYiBvYmplY3QuXHJcbiAgICAgKiBAbWVtYmVyb2YgV2ViQXNzZW1ibHlSZWNvcmRlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHJlY29yZGVyLnN0b3AoZnVuY3Rpb24oKXtcclxuICAgICAqICAgICB2YXIgYmxvYiA9IHJlY29yZGVyLmJsb2I7XHJcbiAgICAgKiB9KTtcclxuICAgICAqL1xyXG4gICAgdGhpcy5ibG9iID0gbnVsbDtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBSZWNvcmRSVEMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWNvcmRSVEMuV2ViQXNzZW1ibHlSZWNvcmRlciA9IFdlYkFzc2VtYmx5UmVjb3JkZXI7XHJcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29yZHJ0Yy9SZWNvcmRSVEMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==