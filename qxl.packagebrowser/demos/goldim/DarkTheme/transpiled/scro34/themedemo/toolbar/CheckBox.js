(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.toolbar.CheckBox": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015 Norbert Schröder, http://scro34.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.toolbar.CheckBox", {
    extend: qx.ui.toolbar.CheckBox,
    construct: function construct(label, iconDefault, iconHovered, iconPressedDefault, iconPressedHovered) {
      var _this = this;
      qx.ui.toolbar.CheckBox.constructor.call(this, label, iconDefault);
      this._iconDefault = iconDefault;
      this._iconHovered = iconHovered ? iconHovered : iconDefault;
      this._iconPressedDefault = iconPressedDefault ? iconPressedDefault : iconDefault;
      this._iconPressedHovered = iconPressedHovered ? iconPressedHovered : iconHovered;
      this.addListener("pointerover", function () {
        _this.setIcon(_this.getValue() ? _this._iconPressedHovered : _this._iconHovered);
      });
      this.addListener("pointerout", function () {
        _this.setIcon(_this.getValue() ? _this._iconPressedDefault : _this._iconDefault);
      });
    }
  });
  scro34.themedemo.toolbar.CheckBox.$$dbClassInfo = $$dbClassInfo;
})();
