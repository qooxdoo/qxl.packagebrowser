(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.basic.Atom": {
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

  qx.Class.define("minesweeper.OpenedSquare", {
    extend: qx.ui.basic.Atom,
    properties: {
      appearance: {
        init: "square-opened",
        refine: true
      }
    }
  });
  minesweeper.OpenedSquare.$$dbClassInfo = $$dbClassInfo;
})();
