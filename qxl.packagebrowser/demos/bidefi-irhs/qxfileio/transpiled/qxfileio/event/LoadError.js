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
   * Event fired when loading file encounter an error.
   *
   * Map the HTML FileReader onerror event.
   */
  qx.Class.define("qxfileio.event.LoadError", {
    extend: qx.event.type.Event,
    members: {
      __P_29_0: '',
      __P_29_1: '',
      /**
       * Initializes a LoadError event.
       *
       * @param name {String} The name of the error
       * @param message {String} The messafe of the error
       */
      init: function init(name, message) {
        qxfileio.event.LoadError.superclass.prototype.init.call(this, false, false);
        this.__P_29_0 = name;
        this.__P_29_1 = message;
      },
      /**
       * Get the name of the error
       *
       * @return {String} The name of the error
       */
      getName: function getName() {
        return this.__P_29_0;
      },
      /**
       * Get the message of the error
       *
       * @return {String} The message of the error
       */
      getMessage: function getMessage() {
        return this.__P_29_1;
      }
    }
  });
  qxfileio.event.LoadError.$$dbClassInfo = $$dbClassInfo;
})();
