(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ugpa.timefield.theme.Color": {
        "require": true
      },
      "ugpa.timefield.theme.Decoration": {
        "require": true
      },
      "ugpa.timefield.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "ugpa.timefield.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov goldim zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("ugpa.timefield.theme.Theme", {
    meta: {
      color: ugpa.timefield.theme.Color,
      decoration: ugpa.timefield.theme.Decoration,
      font: ugpa.timefield.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: ugpa.timefield.theme.Appearance
    }
  });
  ugpa.timefield.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
