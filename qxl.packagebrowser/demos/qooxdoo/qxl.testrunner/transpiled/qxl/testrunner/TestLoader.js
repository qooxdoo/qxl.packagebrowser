(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestLoader": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  qx.Class.define("qxl.testrunner.TestLoader", {
    extend: qx.dev.unit.TestLoader,
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Returns the TestLoader instance
       *
       * @return {qxl.testrunner.TestLoader} TestLoader instance
       */
      getInstance: function getInstance() {
        return this.instance;
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      main: function main() {
        qxl.testrunner.TestLoader.instance = this;
        qxl.testrunner.TestLoader.superclass.prototype.main.call(this);
      }
    }
  });
  qxl.testrunner.TestLoader.$$dbClassInfo = $$dbClassInfo;
})();
