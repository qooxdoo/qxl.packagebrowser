(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.pane.Header": {
        "construct": true,
        "require": true
      },
      "qx.bom.element.Location": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       Tobias Oetiker, OETIKER+PARTNER AG, www.oetiker.ch
       
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:   
       * Tobias Oetiker (oetiker)
  
  ************************************************************************ */

  /**
   * A Non-Header-Header
   */
  qx.Class.define("combotable.NoHeader", {
    extend: qx.ui.table.pane.Header,
    construct: function construct(paneScroller) {
      qx.ui.table.pane.Header.constructor.call(this, paneScroller);
      this.__P_21_0 = paneScroller;
    },
    members: {
      __P_21_0: null,
      /**
       * Overridden from {@link qx.ui.core.Widget.getContainerLocation} so that it
       * works with the header disabled.
       */
      getContainerLocation: function getContainerLocation(mode) {
        var domEl = this.getContainerElement().getDomElement();
        if (domEl) {
          return qx.bom.element.Location.get(domEl, mode);
        } else {
          domEl = this.__P_21_0.getContainerElement().getDomElement();
          if (domEl) {
            var loc = qx.bom.element.Location.get(domEl, mode);
            loc.bottom = loc.top;
            return loc;
          } else {
            return {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            };
          }
        }
      }
    }
  });
  combotable.NoHeader.$$dbClassInfo = $$dbClassInfo;
})();
