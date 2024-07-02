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
      },
      "scro34.audioplayer.IconFactory": {
        "construct": true
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

  qx.Class.define("scro34.audioplayer.toolbar.CheckBox", {
    extend: qx.ui.toolbar.CheckBox,
    construct: function construct(name, namePressed) {
      var _this = this;
      var icons = scro34.audioplayer.IconFactory.getInstance();
      var iconDefault = icons.getIcon(name);
      qx.ui.toolbar.CheckBox.constructor.call(this, null, iconDefault);
      var hoverName = name + "_HOVER";
      var iconHovered = iconDefault;
      if (icons.hasCustomIcon(hoverName)) {
        iconHovered = icons.getIcon(hoverName);
      }
      this._iconDefault = iconDefault;
      this._iconHovered = iconHovered;
      var iconPressedDefault = iconDefault;
      iconPressedDefault = icons.getIcon(namePressed);
      var hoverPressedName = namePressed + "_HOVER";
      var iconPressedHovered = iconPressedDefault;
      if (icons.hasCustomIcon(hoverPressedName)) {
        iconPressedHovered = icons.getIcon(hoverPressedName);
      }
      this._iconPressedDefault = iconPressedDefault;
      this._iconPressedHovered = iconPressedHovered;
      this.addListener("pointerover", function () {
        _this.setIcon(_this.getValue() ? _this._iconPressedHovered : _this._iconHovered);
      });
      this.addListener("pointerout", function () {
        _this.setIcon(_this.getValue() ? _this._iconPressedDefault : _this._iconDefault);
      });
    },
    members: {
      play: function play() {
        this.setIcon(this._iconPressedDefault);
      },
      pause: function pause() {
        this.setIcon(this._iconDefault);
      }
    }
  });
  scro34.audioplayer.toolbar.CheckBox.$$dbClassInfo = $$dbClassInfo;
})();
