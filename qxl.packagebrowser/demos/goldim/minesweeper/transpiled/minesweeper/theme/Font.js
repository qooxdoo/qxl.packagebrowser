(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Theme.define("minesweeper.theme.Font", {
    fonts: {
      "square-danger": {
        family: ["DejaVu Sans Mono", "Courier New", "monospace"],
        size: 20
      }
    }
  });
  minesweeper.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
