(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.iconfontviewer.theme.Color": {
        "require": true
      },
      "qxl.iconfontviewer.theme.Decoration": {
        "require": true
      },
      "qxl.iconfontviewer.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxl.iconfontviewer.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2020 Henner Kollmann
  
     License: MIT license
  
     Authors: 
  
  ************************************************************************ */

  qx.Theme.define("qxl.iconfontviewer.theme.Theme", {
    meta: {
      color: qxl.iconfontviewer.theme.Color,
      decoration: qxl.iconfontviewer.theme.Decoration,
      font: qxl.iconfontviewer.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxl.iconfontviewer.theme.Appearance
    }
  });
  qxl.iconfontviewer.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
