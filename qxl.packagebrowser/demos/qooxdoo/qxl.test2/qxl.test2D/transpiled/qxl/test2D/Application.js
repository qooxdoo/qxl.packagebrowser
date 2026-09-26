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
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2019 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  /**
   * This is the main application class of "qxl.test2D"
   *
   * @asset(qxl/test2D/*)
   */
  qx.Class.define("qxl.test2D.Application", {
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
        qxl.test2D.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        // Create a button
        var button1 = new qx.ui.form.Button("Click me", "qxl/test2D/test.png");

        // Document is the application root
        var doc = this.getRoot();

        // Add button to document at fixed coordinates
        doc.add(button1, {
          left: 100,
          top: 50
        });

        // Add an event listener
        button1.addListener("execute", function () {
          /* eslint no-alert: "off" */
          alert("Hello World!");
        });
      }
    }
  });
  qxl.test2D.Application.$$dbClassInfo = $$dbClassInfo;
})();
