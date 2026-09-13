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
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov goldim zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("ugpa.timefield.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  ugpa.timefield.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
