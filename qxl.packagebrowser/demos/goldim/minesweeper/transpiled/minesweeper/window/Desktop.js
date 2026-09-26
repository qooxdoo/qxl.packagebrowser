(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Desktop": {
        "construct": true,
        "require": true
      },
      "qx.ui.window.Manager": {
        "construct": true
      },
      "minesweeper.window.Main": {},
      "minesweeper.window.About": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("minesweeper.window.Desktop", {
    extend: qx.ui.window.Desktop,
    type: "singleton",
    construct: function construct() {
      qx.ui.window.Desktop.constructor.call(this, new qx.ui.window.Manager());
      this.__P_4_0();
      this.__P_4_1 = this.__P_4_2();
    },
    members: {
      openAboutWindow: function openAboutWindow() {
        this.__P_4_1.open();
      },
      __P_4_0: function __P_4_0() {
        var mainWin = new minesweeper.window.Main();
        this.add(mainWin);
        mainWin.open();
      },
      __P_4_2: function __P_4_2() {
        var window = new minesweeper.window.About();
        this.add(window);
        return window;
      }
    }
  });
  minesweeper.window.Desktop.$$dbClassInfo = $$dbClassInfo;
})();
