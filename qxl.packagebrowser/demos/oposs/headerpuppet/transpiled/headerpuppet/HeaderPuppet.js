(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright: 2019 OETIKER+PARTNER AG
  
     License: MIT license
  
     Authors: Tobias Oetiker (oetiker) tobi@oetiker.ch
  
  ************************************************************************ */

  /**
   * Qooxdoo tables have a single header row. For complex content this may
   * be a little limited. The HeaderPuppet creates a grid structure synced
   * to the header of the table. The cool thing about the grid is that
   * it support colSpan and rowSpan allowing to produce pretty nifty setups.
   * into a VBox layout. When attaching the HeaderPuppet to a table, then the
   * the table will loose the ability to modify which columns are hidden and also
   * the ability to alter the order of columns.
   *
   * <pre class="javascript">
   * let win = new qx.ui.window.Window("Table").set({
   *    layout : new qx.ui.layout.VBox(),
   *    contentPadding: 0,
   *    centerOnAppear: true
   * });
   * let tableModel = new qx.ui.table.model.Simple();
   * tableModel.setColumns([ "ID", "A number", "A date", "Boolean" ]);
   *
   * var table = new qx.ui.table.Table(tableModel).set({
   *    allowGrowY: true
   * });
   *
   * var headers = [
   *  { text: "A Long Long Title with multiple lines", rich: true,
   *    column: 0, row:0, rowSpan:2, alignY: 'middle', textAlign: 'center' },
   *  { text: "Hello World Hello World", column: 1, row:0, colSpan: 2,
   *    alignX: 'center', alignY: 'middle' },
   *  { text: "Another Test shifted by one column", column: 2, row:1, colSpan: 2,
   *    alignX: 'right', textAlign: 'right', rich:true}
   *  ];
   * win.add(new headerpuppet.HeaderPuppet(table,headers));
   * win.add(table,{flex: 1});
   * win.open();
   * </pre>
   *
   * @asset(headerpuppet/*)
   */
  qx.Class.define("headerpuppet.HeaderPuppet", {
    extend: qx.ui.core.Widget,

    /**
     *
     * @param tableWidget {qx.ui.table.Table}
     *      The table we want to add extra headers to
     * @param configuration {Array}
     *  An array of Maps defining the content of the extra header area.
     *  Each entry can use the following mandatory parameters:
     * <pre>
     *  **text** the text to be shown in the field
     *
     *  **column** the column for this entry (starting with 0)
     *
     *  **row** the row for this entry (starting with 0)
     * </pre>
     *
     * Optional parameters
     *
     * <pre>
     *  **rowSpan** number of rows this label should cover
     *
     *  **colSpan** number of columns this label should cover
     *
     *  **rich** expect html input, automated line breaks
     *
     *  **backgroundColor** by default labels have a white background color
     *
     *  **alignX** takes one of `left`, `right`, `center` to indicate how to position the label widget if there is more space than required. Default is `left`.
     *
     *  **alignY** takes one of `top`,`bottom`, `middle` to indicate the the vertical position of the label.
     *
     *  **textAlign** takes one of `left`, `right`, `center` to indicate the text alignment inside the label.
     *
     *  **font** use a specific font in this cell
     * </pre>
     *
     */
    construct: function construct(tableWidget, configuration) {
      var _this = this;

      qx.ui.core.Widget.constructor.call(this);
      this.set({
        paddingBottom: 1
      }); // this.setAppearance('headerpuppet');

      var layout = this._layout = new qx.ui.layout.Grid(this.getLineWidth(), this.getLineWidth());
      this.setBackgroundColor(this.getLineColor());

      this._setLayout(layout);

      this._labels = [];
      this._cells = [];
      configuration.forEach(function (cell) {
        _this._addCell(cell);
      });
      var tcm = tableWidget.getTableColumnModel();
      /* install the column with syncing */

      tcm.addListener('widthChanged', function (e) {
        var data = e.getData();
        var realCol = tcm.getVisibleX(data.col);
        layout.setColumnWidth(realCol, tcm.getColumnWidth(data.col) - _this.getLineWidth());
      });
      /* set initial column widths */

      for (var i = 0; i < tcm.getVisibleColumnCount(); i++) {
        layout.setColumnWidth(i, tcm.getColumnWidth(i) - 1);
      }
      /* add empty labels */


      for (var c = 0; c <= tcm.getVisibleColumnCount(); c++) {
        for (var r = 0; r < layout.getRowCount(); r++) {
          if (!layout.getCellWidget(r, c)) {
            var bg = new qx.ui.core.Widget().set({
              // appearance: "headerpuppet/cell",
              backgroundColor: this.getCellBackgroundColor(),
              height: 5,
              allowGrowX: true,
              allowGrowY: true,
              allowShrinkY: true
            });

            this._cells.push(bg);

            this._add(bg, {
              column: c,
              row: r
            });
          }
        }
      }

      layout.setColumnFlex(tcm.getVisibleColumnCount(), 1);
      /* disable header cell mover by overwriting it */

      var ps = tableWidget.getPaneScroller(0);

      ps._startMoveHeader = function () {};
      /* disable column visibility button */


      tableWidget.setColumnVisibilityButtonVisible(false);
    },
    properties: {
      /**
       * width of the grid line in the header
       */
      lineWidth: {
        init: 1,
        apply: "_applyPropChange"
      },

      /**
       * color of the grid lines
       */
      lineColor: {
        init: '#eee',
        apply: "_applyPropChange"
      },

      /**
       * cell padding
       */
      cellPadding: {
        init: 3,
        apply: "_applyPropChange"
      },

      /**
       * cellBackgroundColor
       */
      cellBackgroundColor: {
        init: '#fff',
        apply: "_applyPropChange"
      },

      /**
       * cellFont
       */
      cellFont: {
        init: 'bold',
        apply: "_applyPropChange"
      }
    },
    members: {
      _layout: null,
      _cells: null,
      _labels: null,

      /**
       * Apply changes to the Properties
       *
       * @param {Number} value
       * @param {Number} old
       * @param {String} name
       */
      _applyPropChange: function _applyPropChange(value, old, name) {
        switch (name) {
          case "lineWidth":
            this._layout.set({
              spacingX: value,
              spacingY: value
            });

            break;

          case "lineColor":
            this.set({
              backgroundColor: value
            });
            break;

          case "cellPadding":
            this._labels.forEach(function (cell) {
              cell.setPadding(value);
            });

            break;

          case "cellBackgroundColor":
            this._cells.forEach(function (cell) {
              cell.setBackgroundColor(value);
            });

            break;

          case "cellFont":
            this._labels.forEach(function (cell) {
              cell.setFont(value);
            });

            break;
        }
      },

      /**
       * Place the entries from the source map with matching
       * keys in the keys array into the dstMap.
       *
       * @param srcMap {Map} burstin with key value pairs
       * @param dstMap {Map} a potentially pre-seeded map to receive data from srcMap for the keys listed in the keys array.
       * @param keys {Array} a list of valid keys for destination map
       */
      _filterMap: function _filterMap(srcMap, dstMap, keys) {
        keys.forEach(function (key) {
          if (srcMap[key] !== undefined) {
            dstMap[key] = srcMap[key];
          }
        });
        return dstMap;
      },

      /**
       *
       * @param cell {Map} a single line from the configuration array.
       */
      _addCell: function _addCell(cell) {
        var container = new qx.ui.core.Widget().set({
          backgroundColor: cell.backgroundColor || this.getCellBackgroundColor(),
          // appearance: "headerpuppet/cell",
          allowGrowX: true,
          allowGrowY: true,
          padding: this.getCellPadding()
        });

        this._cells.push(container);

        var containerLayout = new qx.ui.layout.Grid(0, 0);
        containerLayout.setColumnFlex(0, 1);
        containerLayout.setRowFlex(0, 1);

        container._setLayout(containerLayout);

        var label = new qx.ui.basic.Label(cell.text).set(this._filterMap(cell, {
          font: this.getCellFont()
        }, ['rich', 'alignX', 'textAlign', 'alignY', 'font']));

        this._labels.push(label);

        container._add(label, {
          column: 0,
          row: 0
        });

        this._add(container, this._filterMap(cell, {}, ['column', 'row', 'colSpan', 'rowSpan']));
      }
    }
  });
  headerpuppet.HeaderPuppet.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=HeaderPuppet.js.map?dt=1626056966042