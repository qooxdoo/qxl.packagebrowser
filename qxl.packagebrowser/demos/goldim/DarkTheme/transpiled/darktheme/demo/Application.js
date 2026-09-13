(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.Application": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2021 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * This is the main application class of "darktheme"
   */
  qx.Class.define("darktheme.demo.Application", {
    extend: scro34.themedemo.Application,
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
        darktheme.demo.Application.superclass.prototype.main.call(this, {
          about_url: "darktheme/about.html"
        });
      }
    }
  });
  darktheme.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
