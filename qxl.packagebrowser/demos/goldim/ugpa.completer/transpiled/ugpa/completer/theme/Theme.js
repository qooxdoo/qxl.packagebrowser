(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ugpa.completer.theme.Color": {
        "require": true
      },
      "ugpa.completer.theme.Decoration": {
        "require": true
      },
      "ugpa.completer.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "ugpa.completer.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("ugpa.completer.theme.Theme", {
    meta: {
      color: ugpa.completer.theme.Color,
      decoration: ugpa.completer.theme.Decoration,
      font: ugpa.completer.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: ugpa.completer.theme.Appearance
    }
  });
  ugpa.completer.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
