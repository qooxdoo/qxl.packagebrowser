(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Data": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Event fired when loading file is about to start.
   *
   * Map the HTML FileReader onloadstart event.
   */
  qx.Class.define("qxfileio.event.LoadStart", {
    extend: qx.event.type.Data,
    construct: function construct() {
      qx.event.type.Data.constructor.call(this);
    }
  });
  qxfileio.event.LoadStart.$$dbClassInfo = $$dbClassInfo;
})();
