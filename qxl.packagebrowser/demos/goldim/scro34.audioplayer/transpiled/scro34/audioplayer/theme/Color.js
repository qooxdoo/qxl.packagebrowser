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
  
     Copyright: 2024 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("scro34.audioplayer.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {
      "text-selected": "black"
    }
  });
  scro34.audioplayer.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
