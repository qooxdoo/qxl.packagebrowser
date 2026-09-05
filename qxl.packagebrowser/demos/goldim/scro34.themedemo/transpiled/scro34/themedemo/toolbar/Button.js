(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.toolbar.Button": {
        "construct": true,
        "require": true
      },
      "scro34.themedemo.IconFactory": {
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

  qx.Class.define("scro34.themedemo.toolbar.Button", {
    extend: qx.ui.toolbar.Button,
    construct: function construct(name) {
      var _this = this;
      var icons = scro34.themedemo.IconFactory.getInstance();
      var iconDefault = icons.getIcon(name);
      qx.ui.toolbar.Button.constructor.call(this, null, iconDefault);
      var hoverName = name + "_HOVER";
      var iconHovered = iconDefault;
      if (icons.hasCustomIcon(hoverName)) {
        iconHovered = icons.getIcon(hoverName);
      }
      this._iconDefault = iconDefault;
      this._iconHovered = iconHovered;
      this.addListener("pointerover", function () {
        return _this.setIcon(_this._iconHovered);
      });
      this.addListener("pointerout", function () {
        return _this.setIcon(_this._iconDefault);
      });
    }
  });
  scro34.themedemo.toolbar.Button.$$dbClassInfo = $$dbClassInfo;
})();
