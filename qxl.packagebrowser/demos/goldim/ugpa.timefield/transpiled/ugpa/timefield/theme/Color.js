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
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov goldim zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("ugpa.timefield.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  ugpa.timefield.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
