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
      "qxl.tweets.MainWindow": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */
  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * This is the main application class of your custom application "tweets"
   *
   * @asset(qxl/tweets/*)
   */
  qx.Class.define("qxl.tweets.Application", {
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
        qxl.tweets.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        var main = new qxl.tweets.MainWindow();
        main.moveTo(50, 30);
        main.open();
      }
    }
  });
  qxl.tweets.Application.$$dbClassInfo = $$dbClassInfo;
})();
