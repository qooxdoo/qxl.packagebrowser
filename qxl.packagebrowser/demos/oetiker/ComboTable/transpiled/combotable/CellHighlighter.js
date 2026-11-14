(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.cellrenderer.Default": {
        "require": true
      },
      "qx.bom.String": {}
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
   * Highlight part of the cell content.
   */
  qx.Class.define("combotable.CellHighlighter", {
    extend: qx.ui.table.cellrenderer.Default,
    properties: {
      /**
       * Set the highlite string.
       */
      searchString: {
        init: null,
        check: "String",
        apply: "_applySearchString",
        nullable: true
      }
    },
    members: {
      __P_24_0: null,
      __P_24_1: null,
      /**
       * populate private variables to accellerate highliting operation.
       *
       * @param value {var} new value
       * @param old {var} old value
       * @return {void} 
       */
      _applySearchString: function _applySearchString(value, old) {
        if (value == null) {
          this.__P_24_0 = null;
          this.__P_24_1 = null;
        } else {
          this.__P_24_0 = new RegExp(this._preg_quote(value), 'ig');
          this.__P_24_1 = qx.bom.String.escape(value);
        }
      },
      /**
       * Just a simple qooxdoo table celll 
       *
       * @param cellInfo {var} disregarded ...
       * @return {string} the class of the cell
       */
      _getCellClass: function _getCellClass(cellInfo) {
        return "qooxdoo-table-cell";
      },
      /**
       * Quote a string.
       *
       * With inspiration from {@link http://stackoverflow.com/questions/280793/case-insensitive-string-replacement-in-javascript}
       *
       * @param str {String} input
       * @return {String} regexp quoted 
       */
      _preg_quote: function _preg_quote(str) {
        return String(str).replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
      },
      /**
       * Do the actual highlighting
       *
       * @param cellInfo {var} the cell content
       * @return {String} the html of the cell
       */
      _getContentHtml: function _getContentHtml(cellInfo) {
        var str = this._formatValue(cellInfo);
        if (this.__P_24_0) {
          return str.replace(this.__P_24_0, '<strong>' + this.__P_24_1 + '</strong>');
        } else {
          return str;
        }
      }
    }
  });
  combotable.CellHighlighter.$$dbClassInfo = $$dbClassInfo;
})();
