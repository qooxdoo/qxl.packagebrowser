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
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("qxl.test2D.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {}
  });
  qxl.test2D.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();
