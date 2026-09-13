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
  
     Copyright: 2024 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("scro34.themedemo.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  scro34.themedemo.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
