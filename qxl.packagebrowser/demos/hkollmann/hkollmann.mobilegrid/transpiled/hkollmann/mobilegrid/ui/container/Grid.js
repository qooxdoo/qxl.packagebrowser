(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "hkollmann.mobilegrid.event.type.GridEvent": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.bom.element.Class": {},
      "qx.bom.element.Style": {},
      "qx.dom.Element": {},
      "qx.bom.element.Attribute": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo mobile grid
     https://github.com/hkollmann/hkollmann.mobilegrid
     
     Copyright:
       2018 Henner Kollmann (Henner.Kollmann@gmx.de)
  
     License:
       MIT: https://opensource.org/licenses/MIT
  
       This software is provided under the same licensing terms as Qooxdoo,
       please see the LICENSE file in the Qooxdoo project's top-level directory
       for details.
  
     Authors:
      Henner Kollmann (Henner.Kollmann@gmx.de)
  
  ************************************************************************ */
  /*
   * @require(hkollmann.mobilegrid.event.type.GridEvent)
   * @asset(hkollmann/mobilegrid/*)
   */
  /**
   *
   * @type Grid
   * a widget to generate a grid for mobile framework. Cell content can be any
   * mobile wigdet. Each cell can be styled by css class or css style.
   */
  qx.Class.define("hkollmann.mobilegrid.ui.container.Grid", {
    extend: qx.ui.mobile.core.Widget,
    construct: function construct() {
      qx.ui.mobile.core.Widget.constructor.call(this);
      this.__P_21_0 = [];
    },
    events: {
      addCell: "hkollmann.mobilegrid.event.type.GridEvent",
      addRow: "hkollmann.mobilegrid.event.type.GridEvent"
    },
    properties: {
      /**
       * overridden
       */
      defaultCssClass: {
        refine: true,
        init: "grid"
      }
    },
    members: {
      /**
       * get the cell widget at row/col
       *
       * @param aRow {Array} row to fetch
       * @param aCol {Array} col to fetch
       * @return {var} widget at row/col
       */
      getCell: function getCell(aRow, aCol) {
        var res = null;
        if (this.__P_21_0) {
          if (this.__P_21_0[aRow]) {
            res = this.__P_21_0[aRow][aCol];
          }
        }
        return res;
      },
      /**
       * count of rows
       *
       * @return {var} count of rows
       */
      getRowCount: function getRowCount() {
        return this.__P_21_0.length;
      },
      /**
       * count of cols
       *
       * @return {var} count of cols
       */
      getColCount: function getColCount() {
        return this.__P_21_1;
      },
      /**
       * add an widget to the grid
       *
       * @param aItem {Widget} the widget to add
       * @param aLayoutProperties {Object} define properties of the widget:<br/>
       *         col    : col where widget should be inserted<br/>
       *         row    : row where widget should be inserted<br/>
       *         colspan: count of cols to span<br/>
       *         rowspan: count of rows to span<br/>
       *         class  : class for div element, default: cell<br/>
       *         style  : special style for div element
       * @return {var} the added item
       */
      add: function add(aItem, aLayoutProperties) {
        if (aLayoutProperties === null) {
          throw new Error("No properties given");
        }
        if (aLayoutProperties.row === null) {
          throw new Error("No row given");
        }
        if (aLayoutProperties.col === null) {
          throw new Error("No col given");
        }
        if (!this.__P_21_0[aLayoutProperties.row]) {
          this.__P_21_0[aLayoutProperties.row] = [];
        }
        this.__P_21_0[aLayoutProperties.row][aLayoutProperties.col] = aItem;
        aItem.$$layoutProperties = aLayoutProperties;
        qx.bom.element.Class.add(aItem.getContentElement(), aLayoutProperties["class"] || "cell");
        if (aLayoutProperties.style) {
          qx.bom.element.Style.setStyles(aItem.getContentElement(), aLayoutProperties.style);
        }
        this.__P_21_2();
        return this.__P_21_0[aLayoutProperties.row][aLayoutProperties.col];
      },
      /**
       * clears the whole grid
       * @return
       */
      clear: function clear() {
        for (var r = 0; r < this.__P_21_0.length; r++) {
          if (this.__P_21_0[r]) {
            for (var c = 0; c < this.__P_21_0[r].length; c++) {
              this._disposeObjects(this.__P_21_0[r][c]);
            }
          }
        }
        this.__P_21_2();
      },
      /**
       *  overridden
       */
      _getTagName: function _getTagName() {
        return "table";
      },
      /**
       * renders the grid
       *
       */
      __P_21_2: function __P_21_2() {
        this._setHtml("");
        var maxcols = 0;
        if (this.__P_21_0) {
          for (var i = 0; i < this.__P_21_0.length; i++) {
            if (this.__P_21_0[i]) {
              maxcols = this.__P_21_0[i].length > maxcols ? this.__P_21_0[i].length : maxcols;
            }
          }
          this.__P_21_1 = maxcols;
          for (var r = 0; r < this.__P_21_0.length; r++) {
            if (this.__P_21_0[r]) {
              var tr = qx.dom.Element.create("tr");
              var td;
              qx.bom.element.Class.add(tr, "grid-row");
              var c = -1;
              this.fireEvent("addRow", hkollmann.mobilegrid.event.type.GridEvent, [this, tr, r, c]);
              for (c = 0; c < this.__P_21_0[r].length; c++) {
                td = qx.dom.Element.create("td");
                qx.bom.element.Class.add(td, "grid-cell");
                this.fireEvent("addCell", hkollmann.mobilegrid.event.type.GridEvent, [this, td, r, c]);
                var item = this.__P_21_0[r][c];
                if (item) {
                  if (item.$$layoutProperties.colspan && item.$$layoutProperties.colspan > 1) {
                    qx.bom.element.Attribute.set(td, "colspan", item.$$layoutProperties.colspan);
                    c += item.$$layoutProperties.colspan - 1;
                  }
                  if (item.$$layoutProperties.rowspan && item.$$layoutProperties.rowspan > 1) {
                    qx.bom.element.Attribute.set(td, "rowspan", item.$$layoutProperties.rowspan);
                  }
                  var e = item.getContainerElement();
                  td.appendChild(e);
                }
                tr.appendChild(td);
              }
              for (; c < maxcols; c++) {
                td = qx.dom.Element.create("td");
                tr.appendChild(td);
              }
              this.getContainerElement().appendChild(tr);
            }
          }
        }
        this._domUpdated();
      },
      /**
       * destructor
       */
      destruct: function destruct() {
        this.clear();
      },
      __P_21_0: null,
      __P_21_1: null
    }
  });
  hkollmann.mobilegrid.ui.container.Grid.$$dbClassInfo = $$dbClassInfo;
})();
