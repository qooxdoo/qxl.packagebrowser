(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
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

  qx.Theme.define("qxl.iconfontviewer.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {}
  });
  qxl.iconfontviewer.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
