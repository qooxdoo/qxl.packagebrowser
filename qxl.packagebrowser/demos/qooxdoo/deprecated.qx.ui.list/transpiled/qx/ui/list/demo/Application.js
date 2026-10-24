(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2026 
  
     License: MIT license
  
     Authors: 
  
  ************************************************************************ */

  /**
   * This is the main application class of "qx.ui.list"
   */
  qx.Class.define("qx.ui.list.demo.Application", {
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
        qx.ui.list.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        // Create a button
        var button1 = new qx.ui.list.Button("Very special button", "qx/ui/list/test.png");

        // Document is the application root
        var doc = this.getRoot();

        // Add button to document at fixed coordinates
        doc.add(button1, {
          left: 100,
          top: 50
        });

        // Add an event listener
        button1.addListener("execute", function (e) {
          alert("Hello World!");
        });
      }
    }
  });
  qx.ui.list.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
