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
  
     Copyright: 2024 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("scro34.themedemo.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {
      "text-selected": "black",
      "text-active": "black",
      "border-input": "#101010",
      "input-start": "white",
      "input-end": "white",
      "text-label": "#A2A2A2"
    }
  });
  scro34.themedemo.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
