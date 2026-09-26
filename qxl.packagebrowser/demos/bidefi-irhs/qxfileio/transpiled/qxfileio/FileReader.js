(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qxfileio.event.LoadStart": {},
      "qxfileio.event.LoadProgress": {},
      "qxfileio.event.LoadAbort": {},
      "qxfileio.event.Loaded": {},
      "qxfileio.event.LoadEnd": {},
      "qxfileio.event.LoadError": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Read the content of a file as text.
   *
   * This is a qooxdoo mapper to the HTML FileReader object.
   *
   * @see https://developer.mozilla.org/docs/Web/API/FileReader
   */
  qx.Class.define("qxfileio.FileReader", {
    extend: qx.core.Object,
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.init();
    },
    events: {
      /**
       * Fired on loading start.
       */
      loadstart: 'qxfileio.event.LoadStart',
      /**
       * Fired on reading progress.
       */
      loadprogress: 'qxfileio.event.LoadProgress',
      /**
       * Fired on reading error.
       */
      loaderror: 'qxfileio.event.LoadError',
      /**
       * Fired on load complete.
       */
      load: 'qxfileio.event.Loaded',
      /**
       * Fired on load abort.
       */
      loadabort: 'qxfileio.event.LoadAbort',
      /**
       * Fired on end of file reading.
       */
      loadend: 'qxfileio.event.LoadEnd'
    },
    members: {
      __P_5_0: null,
      /**
       * Abort the reading operation.
       */
      abort: function abort() {
        if (this.__P_5_0.readyState == 1) {
          this.__P_5_0.abort();
        }
      },
      /**
       * Get the state of the FileReader.
       *
       * @return {Integer} The state of the FileReader
       * 0: EMPTY: No data loaded
       * 1: LOADING: Loading data
       * 2: DONE: Loading done
       */
      getState: function getState() {
        return this.__P_5_0.readyState;
      },
      /**
       * Load the content of a file as ArrayBuffer data.
       *
       * @param file {Blob} The File or Blob to be loaded.
       */
      loadAsArrayBuffer: function loadAsArrayBuffer(file) {
        if (this.__P_5_0.readyState != 0) {
          this.init();
        }
        this.__P_5_0.readAsArrayBuffer(file);
      },
      /**
       * Load the content of a file as binary string.
       *
       * @param file {Blob} The File or Blob to be loaded.
       */
      loadAsBinaryString: function loadAsBinaryString(file) {
        if (this.__P_5_0.readyState != 0) {
          this.init();
        }
        this.__P_5_0.readAsBinaryString(file);
      },
      /**
       * Load the content of a file as DataURL.
       *
       * @param file {Blob} The File or Blob to be loaded.
       */
      loadAsDataURL: function loadAsDataURL(file) {
        if (this.__P_5_0.readyState != 0) {
          this.init();
        }
        this.__P_5_0.readAsDataURL(file);
      },
      /**
       * Load the content of a file as text data.
       *
       * @param file {Blob} The File or Blob to be loaded.
       */
      loadAsText: function loadAsText(file) {
        if (this.__P_5_0.readyState != 0) {
          this.init();
        }
        this.__P_5_0.readAsText(file);
      },
      /**
       * Initialise a qxfileio.FileReader object.
       */
      init: function init() {
        this.__P_5_0 = null;
        this.__P_5_0 = new FileReader();
        this.__P_5_0.onloadstart = function (me) {
          return function (e) {
            // e is a ProgressEvent (http://www.w3.org/TR/progress-events/)
            me.fireEvent('loadstart', qxfileio.event.LoadStart);
          };
        }(this);
        this.__P_5_0.onprogress = function (me) {
          return function (e) {
            // e is a ProgressEvent (http://www.w3.org/TR/progress-events/)
            me.fireEvent('loadprogress', qxfileio.event.LoadProgress, [e.lengthComputable, e.loaded, e.total]);
          };
        }(this);
        this.__P_5_0.onloadabort = function (me) {
          return function (e) {
            me.fireEvent('loadabort', qxfileio.event.LoadAbort);
          };
        }(this);
        this.__P_5_0.onload = function (me) {
          return function (e) {
            me.fireEvent('load', qxfileio.event.Loaded, [e.target.result]);
          };
        }(this);
        this.__P_5_0.onloadend = function (me) {
          return function (e) {
            // e is a ProgressEvent (http://www.w3.org/TR/progress-events/)
            me.fireEvent('loadend', qxfileio.event.LoadEnd, [e.target.result, e.target.error]);
          };
        }(this);
        this.__P_5_0.onerror = function (me) {
          return function (e) {
            // e is a ProgressEvent (http://www.w3.org/TR/progress-events/)
            me.fireEvent('loaderror', qxfileio.event.LoadError, [e.target.error.name, e.target.error.message]);
          };
        }(this);
      }
    }
  });
  qxfileio.FileReader.$$dbClassInfo = $$dbClassInfo;
})();
