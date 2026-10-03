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
      "qxl.testrunner.runner.TestRunner": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (d_wagner)
  
  ************************************************************************ */

  /**
   * TestRunner main application class.
   */
  qx.Class.define("qxl.testrunner.GuiApplication", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      main: function main() {
        // Call super class
        qxl.testrunner.GuiApplication.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        this.runner = new qxl.testrunner.runner.TestRunner();
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("runner");
    }
  });
  qxl.testrunner.GuiApplication.$$dbClassInfo = $$dbClassInfo;
})();
