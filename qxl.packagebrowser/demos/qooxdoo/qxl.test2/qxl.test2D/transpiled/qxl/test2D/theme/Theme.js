(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.test2D.theme.Color": {
        "require": true
      },
      "qxl.test2D.theme.Decoration": {
        "require": true
      },
      "qxl.test2D.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxl.test2D.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("qxl.test2D.theme.Theme", {
    meta: {
      color: qxl.test2D.theme.Color,
      decoration: qxl.test2D.theme.Decoration,
      font: qxl.test2D.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxl.test2D.theme.Appearance
    }
  });
  qxl.test2D.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
