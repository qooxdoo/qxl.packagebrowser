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
      "qxl.packagebrowser.PackageBrowser": {}
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
       * Thomas Herchenroeder (thron7)
       * Fabian Jakobs (fjakobs)
       * Jonathan Weiß (jonathan_rass)
       * Christian Boulanger (cboulanger)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * The main application class.
   *
   * @asset(qxl/packagebrowser/*)
   * @ignore(qx.$$appRoot)
   */
  qx.Class.define("qxl.packagebrowser.Application", {
    extend: qx.application.Standalone,
    members: {
      // overridden
      main: function main() {
        qxl.packagebrowser.Application.prototype.main.base.call(this); // Enable logging in source (or debug build)

        // Initialize the viewer
        this.viewer = new qxl.packagebrowser.PackageBrowser();
        this.getRoot().add(this.viewer, {
          edge: 0
        });
      },
      // overridden
      finalize: function finalize() {
        qxl.packagebrowser.Application.prototype.finalize.base.call(this);
        this.viewer.dataLoader(qx.$$appRoot + "package-data.json");
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("viewer");
    }
  });
  qxl.packagebrowser.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626055229417