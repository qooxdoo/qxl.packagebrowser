(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.tweets.MainWindow", {
    extend: qx.ui.window.Window,
    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, "tweets");

      // hide the window buttons
      this.setShowClose(false);
      this.setShowMaximize(false);
      this.setShowMinimize(false);

      // adjust size
      this.setWidth(250);
      this.setHeight(300);
    }
  });
  qxl.tweets.MainWindow.$$dbClassInfo = $$dbClassInfo;
})();
