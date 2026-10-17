(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Event": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Event fired when loading file is in progress.
   *
   * Map the HTML FileReader onprogress event.
   */
  qx.Class.define("qxfileio.event.LoadProgress", {
    extend: qx.event.type.Event,
    members: {
      __P_27_0: false,
      __P_27_1: 0,
      __P_27_2: 0,
      /**
       * Initializes a LoadProgress event.
       *
       * @param lengthComputable {Boolean} Tell if the length of the file is computable.
       * @param loaded {Integer} The currently loaded amount of data from the file.
       * @param total {Integer} The total size of the file.
       */
      init: function init(lengthComputable, loaded, total) {
        qxfileio.event.LoadProgress.superclass.prototype.init.call(this, false, false);
        this.__P_27_0 = !!lengthComputable;
        this.__P_27_1 = loaded;
        this.__P_27_2 = total;
      },
      /**
       * @return {Boolean} True if the total size of the file is computable.
       */
      getLengthComputable: function getLengthComputable() {
        return this.__P_27_0;
      },
      /**
       * @return {Integer} The currently loaded amount of data from the file.
       */
      getLoaded: function getLoaded() {
        return this.__P_27_1;
      },
      /**
       * @return {Integer} The total size of the file.
       */
      getTotal: function getTotal() {
        return this.__P_27_2;
      }
    }
  });
  qxfileio.event.LoadProgress.$$dbClassInfo = $$dbClassInfo;
})();
