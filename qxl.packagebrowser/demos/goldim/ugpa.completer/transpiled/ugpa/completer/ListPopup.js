(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.popup.Popup": {
        "construct": true,
        "require": true
      },
      "ugpa.completer.IPopup": {
        "require": true
      },
      "qx.ui.layout.Grow": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("ugpa.completer.ListPopup", {
    extend: qx.ui.popup.Popup,
    implement: ugpa.completer.IPopup,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.ui.popup.Popup.constructor.call(this);
      this.setLayout(new qx.ui.layout.Grow());
    }
  });
  ugpa.completer.ListPopup.$$dbClassInfo = $$dbClassInfo;
})();
