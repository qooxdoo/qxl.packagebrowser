(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.locale.MTranslation": {
        "require": true
      },
      "qx.ui.layout.Dock": {
        "construct": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "minesweeper.status.Bar": {
        "construct": true
      },
      "minesweeper.ToolBar": {},
      "minesweeper.Board": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  /**
   * This is an example of a contrib library, providing a very special button
   * @asset(minesweeper/*)
   */
  qx.Class.define("minesweeper.window.Main", {
    extend: qx.ui.window.Window,
    include: qx.locale.MTranslation,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.ui.window.Window.constructor.call(this, this.tr("Minesweeper"));
      this.set({
        allowMaximize: false,
        resizable: [false, false, false, false]
      });
      this.setLayout(new qx.ui.layout.Dock());
      var topContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      var toolbar = this.__P_21_0();
      topContainer.add(toolbar);
      var statusBar = new minesweeper.status.Bar();
      topContainer.add(statusBar);
      this.add(topContainer, {
        edge: "north"
      });
      this.__P_21_1();
    },
    properties: {
      appearance: {
        init: "main-window",
        refine: true
      }
    },
    members: {
      __P_21_0: function __P_21_0() {
        return new minesweeper.ToolBar();
      },
      __P_21_1: function __P_21_1() {
        var board = new minesweeper.Board();
        this.add(board, {
          edge: "center"
        });
        return board;
      }
    }
  });
  minesweeper.window.Main.$$dbClassInfo = $$dbClassInfo;
})();
