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
      "qxgraphql.demo.views.TabView": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright: 2019 
  
     License: MIT license
  
     Authors: voger
  
  ************************************************************************ */

  /**
   * This is the main application class of "qxgraphql"
   */
  qx.Class.define("qxgraphql.demo.Application", {
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
        qxgraphql.demo.Application.prototype.main.base.call(this); // Enable logging in debug variant

        // Document is the application root
        var doc = this.getRoot();
        doc.add(new qxgraphql.demo.views.TabView(), {
          edge: 0
        });
      }
    }
  });
  qxgraphql.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626060594148