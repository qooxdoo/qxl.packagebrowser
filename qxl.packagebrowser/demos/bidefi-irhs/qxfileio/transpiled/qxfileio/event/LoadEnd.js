(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Data": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Event fired when loading file ends.
   *
   * Map the HTML FileReader onloadend event.
   */
  qx.Class.define("qxfileio.event.LoadEnd", {
    extend: qx.event.type.Data,
    members: {
      __P_28_0: null,
      __P_28_1: null,
      /**
       * Initializes a LoadEnd event.
       *
       * @param result {Data?null} The content of the loaded file
       * @param error {DOMerror?null} The DOMerror if an error occured
       */
      init: function init(result, error) {
        qxfileio.event.LoadEnd.superclass.prototype.init.call(this, false, false);
        this.__P_28_0 = result;
        this.__P_28_1 = error;
      },
      /**
       * Get the result
       *
       * @return {Data?null} the result
       */
      getResult: function getResult() {
        return this.__P_28_0;
      },
      /**
       * Get the error
       *
       * @return {DOMerror?null} The error
       */
      getError: function getError() {
        return this.__P_28_1;
      }
    }
  });
  qxfileio.event.LoadEnd.$$dbClassInfo = $$dbClassInfo;
})();
