(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
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

  qx.Theme.define("ugpa.timefield.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {}
  });
  ugpa.timefield.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();
