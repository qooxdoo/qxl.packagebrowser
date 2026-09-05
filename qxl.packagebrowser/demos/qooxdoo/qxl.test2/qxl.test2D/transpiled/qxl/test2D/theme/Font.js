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
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("qxl.test2D.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxl.test2D.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
