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
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("qxl.test2D.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {}
  });
  qxl.test2D.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
