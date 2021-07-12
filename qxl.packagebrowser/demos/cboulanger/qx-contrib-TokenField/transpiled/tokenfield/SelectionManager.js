(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.selection.Widget": {
        "require": true
      },
      "qx.ui.core.selection.Abstract": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright:
       2010 Guilherme R. Aiolfi
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Guilherme R. Aiolfi (guilhermeaiolfi)
  
  ************************************************************************ */

  /**
   * A class to cache ...
   */
  qx.Class.define("tokenfield.SelectionManager", {
    extend: qx.ui.core.selection.Widget,
    members: {
      handleKeyPress: function handleKeyPress(event) {
        var key = event.getKeyIdentifier();

        if (key != "Left" && key != "Right" && key != "Up" && key != "Down") {
          qx.ui.core.selection.Abstract.prototype.handleKeyPress.apply(this, [event]); // this.base(arguments);
        }
      }
    }
  });
  tokenfield.SelectionManager.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=SelectionManager.js.map?dt=1626055887872