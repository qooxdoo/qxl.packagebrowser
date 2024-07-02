(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.theme.manager.Meta": {},
      "minesweeper.ThemeChanger": {},
      "minesweeper.window.Desktop": {},
      "minesweeper.Game": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  /**
   * This is the main application class of "minesweeper"
   */
  qx.Class.define("minesweeper.demo.Application", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       *
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        minesweeper.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        var currentTheme = qx.theme.manager.Meta.getInstance().getTheme();
        minesweeper.ThemeChanger.setTheme(currentTheme);
        var desktop = minesweeper.window.Desktop.getInstance();
        this.getRoot().add(desktop, {
          width: "100%",
          height: "100%"
        });
        minesweeper.Game.getInstance().startNew();
      }
    }
  });
  minesweeper.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
