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
      "ugpa.timefield.Field": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov goldim zolotovdy@yandex.ru
  
  ************************************************************************ */

  /**
   * This is the main application class of "ugpa.timefield"
   */
  qx.Class.define("ugpa.timefield.demo.Application", {
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
        ugpa.timefield.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        // Create a field
        var field = new ugpa.timefield.Field();

        // Document is the application root
        var doc = this.getRoot();

        // Add button to document at fixed coordinates
        doc.add(field, {
          left: 100,
          top: 50
        });
      }
    }
  });
  ugpa.timefield.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
