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
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("qxl.test2D.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  qxl.test2D.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
