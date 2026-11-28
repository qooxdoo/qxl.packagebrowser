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
  
     Copyright: 2024 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("scro34.themedemo.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {}
  });
  scro34.themedemo.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
