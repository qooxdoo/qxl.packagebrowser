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

  qx.Theme.define("minesweeper.theme.Color", {
    colors: {
      "mines-around-1": "blue",
      "mines-around-2": "green",
      "mines-around-3": "red",
      "mines-around-4": "navy",
      "mines-around-5": "brown",
      "mines-around-6": "yellow",
      "mines-around-7": "black",
      "mines-around-8": "white"
    }
  });
  minesweeper.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
