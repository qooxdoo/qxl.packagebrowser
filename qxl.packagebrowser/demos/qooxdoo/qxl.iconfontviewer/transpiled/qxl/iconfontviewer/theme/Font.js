(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Font": {
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

  qx.Theme.define("qxl.iconfontviewer.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxl.iconfontviewer.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
