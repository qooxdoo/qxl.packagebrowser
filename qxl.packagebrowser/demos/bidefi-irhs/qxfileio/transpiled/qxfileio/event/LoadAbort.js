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
   * Event fired when loading file aborts.
   *
   * Map the HTML FileReader onabort event.
   */
  qx.Class.define("qxfileio.event.LoadAbort", {
    extend: qx.event.type.Event
  });
  qxfileio.event.LoadAbort.$$dbClassInfo = $$dbClassInfo;
})();
