(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.theme.Color": {
        "require": true
      },
      "scro34.themedemo.theme.Decoration": {
        "require": true
      },
      "scro34.themedemo.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      },
      "scro34.themedemo.theme.Appearance": {
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

  qx.Theme.define("scro34.themedemo.theme.Theme", {
    meta: {
      color: scro34.themedemo.theme.Color,
      decoration: scro34.themedemo.theme.Decoration,
      font: scro34.themedemo.theme.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: scro34.themedemo.theme.Appearance
    }
  });
  scro34.themedemo.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
