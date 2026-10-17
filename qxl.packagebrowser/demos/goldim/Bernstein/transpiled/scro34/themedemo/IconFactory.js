(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "scro34.themedemo.Icons": {
        "construct": true
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

  qx.Class.define("scro34.themedemo.IconFactory", {
    extend: qx.core.Object,
    type: "singleton",
    construct: function construct() {
      this.__P_10_0 = new scro34.themedemo.Icons();
    },
    members: {
      __P_10_1: null,
      getIcon: function getIcon(name) {
        if (this.__P_10_1) {
          var icon = this.__P_10_1.getIcon(name);
          if (icon) {
            return icon;
          }
        }
        return this.__P_10_0.getIcon(name);
      },
      hasCustomIcon: function hasCustomIcon(name) {
        return this.__P_10_1 && this.__P_10_1.getIcon(name);
      },
      setCustomIcons: function setCustomIcons(icons) {
        this.__P_10_1 = icons;
      }
    }
  });
  scro34.themedemo.IconFactory.$$dbClassInfo = $$dbClassInfo;
})();
