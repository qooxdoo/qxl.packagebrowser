(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Scott Knick (sknick)
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * The indigo dark qooxdoo decoration theme.
   */
  qx.Theme.define("qx.theme.indigo.DecorationDark", {
    extend: qx.theme.indigo.Decoration,
    decorations: {
      "menubar-button-hovered": {
        style: {
          backgroundColor: "background"
        }
      }
    }
  });
  qx.theme.indigo.DecorationDark.$$dbClassInfo = $$dbClassInfo;
})();
