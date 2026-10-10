(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
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

  qx.Theme.define("qxl.iconfontviewer.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {}
  });
  qxl.iconfontviewer.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();
