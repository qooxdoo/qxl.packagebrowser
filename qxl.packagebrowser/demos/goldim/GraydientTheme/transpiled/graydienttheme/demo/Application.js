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
   * @asset(graydienttheme/about.html)
   */
  qx.Class.define("graydienttheme.demo.Application", {
    extend: scro34.themedemo.Application,
    members: {
      main: function main() {
        graydienttheme.demo.Application.superclass.prototype.main.call(this, {
          title: "Graydient",
          about_url: "graydienttheme/about.html"
        });
      }
    }
  });
  graydienttheme.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
