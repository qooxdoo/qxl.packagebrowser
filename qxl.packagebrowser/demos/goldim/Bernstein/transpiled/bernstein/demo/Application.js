(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.Application": {
        "require": true
      },
      "bernstein.demo.Icons": {}
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
   * @asset(bernstein/about.html)
   */
  qx.Class.define("bernstein.demo.Application", {
    extend: scro34.themedemo.Application,
    members: {
      main: function main() {
        bernstein.demo.Application.superclass.prototype.main.call(this, {
          about_url: "bernstein/about.html"
        });
      },
      _getCustomIcons: function _getCustomIcons() {
        return new bernstein.demo.Icons();
      }
    }
  });
  bernstein.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
