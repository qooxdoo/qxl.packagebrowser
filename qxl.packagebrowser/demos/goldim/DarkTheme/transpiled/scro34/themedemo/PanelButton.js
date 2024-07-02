(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.ToggleButton": {
        "construct": true,
        "require": true
      },
      "qx.ui.tooltip.ToolTip": {
        "construct": true
      },
      "scro34.themedemo.window.Factory": {},
      "scro34.themedemo.Desktop": {}
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

  qx.Class.define("scro34.themedemo.PanelButton", {
    extend: qx.ui.form.ToggleButton,
    construct: function construct(options) {
      qx.ui.form.ToggleButton.constructor.call(this, null, options.icon);
      this.set({
        padding: 10,
        toolTip: new qx.ui.tooltip.ToolTip(options.toolTip)
      });
      this.addState("circle");
      this.__P_101_0 = options.name;
      this.__P_101_1 = options.position;
      this.__P_101_2 = options.center;
      this.addListener("changeValue", this._onPress, this);
    },
    events: {
      "windowClose": "qx.event.type.Event"
    },
    members: {
      __P_101_0: null,
      _onPress: function _onPress() {
        var _this = this;
        this.__P_101_3(function () {
          if (!_this.window) {
            _this.__P_101_4();
          }
          _this.window.open();
        });
      },
      getName: function getName() {
        return this.__P_101_0;
      },
      __P_101_4: function __P_101_4() {
        var _this2 = this;
        this.window = scro34.themedemo.window.Factory.getWindow(this.__P_101_0);
        this.window.addListener("close", function () {
          _this2.setValue(false);
          _this2.fireEvent("windowClose");
        });
        scro34.themedemo.Desktop.getInstance().add(this.window, this.__P_101_1);
        if (this.__P_101_2) {
          this.window.center();
        }
      },
      __P_101_3: function __P_101_3(openFunc) {
        if (this.getValue()) {
          openFunc();
        } else {
          if (this.window.getVisibility() == "visible" && !this.window.getActive()) {
            this.setValue(true);
          } else {
            this.window.close();
          }
        }
      }
    }
  });
  scro34.themedemo.PanelButton.$$dbClassInfo = $$dbClassInfo;
})();
