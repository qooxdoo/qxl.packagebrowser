(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Color": {
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

  qx.Theme.define("qxl.iconfontviewer.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  qxl.iconfontviewer.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
