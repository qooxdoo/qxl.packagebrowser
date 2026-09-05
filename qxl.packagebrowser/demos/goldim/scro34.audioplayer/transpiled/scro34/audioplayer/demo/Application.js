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
      "scro34.audioplayer.Player": {},
      "qx.ui.window.Desktop": {},
      "qx.ui.window.Manager": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2024 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  /**
   * This is the main application class of "scro34.audioplayer"
   * 
   * @asset(scro34/audioplayer/playlist.json)
   */
  qx.Class.define("scro34.audioplayer.demo.Application", {
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
        scro34.audioplayer.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        var player = new scro34.audioplayer.Player();
        var desktop = new qx.ui.window.Desktop(new qx.ui.window.Manager());
        this.getRoot().add(desktop, {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        });
        desktop.add(player);
        player.setDesktop(desktop);
        player.setPlaylist("scro34/audioplayer/playlist.json");
        player.setCenterOnAppear(true);
        player.open();
      }
    }
  });
  scro34.audioplayer.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
