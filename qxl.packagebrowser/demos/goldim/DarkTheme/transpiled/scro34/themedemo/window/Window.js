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
  /* ************************************************************************
  
     Copyright:
       2024 Dmitrii Zolotov
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.window.Window", {
    extend: qx.ui.window.Window,
    construct: function construct() {
      qx.ui.window.Window.constructor.call(this);
      this.__P_28_0();
      this._createControls();
    },
    members: {
      __P_28_0: function __P_28_0() {
        var _this = this;
        this.addListener("appear", function () {
          _this.fadeIn(200);
        });
        this.addListener("keypress", function (e) {
          if (e.getKeyIdentifier() == "Escape") {
            _this.close();
          }
        });
      }
    }
  });
  scro34.themedemo.window.Window.$$dbClassInfo = $$dbClassInfo;
})();
