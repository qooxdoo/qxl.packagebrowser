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
      "qx.ui.layout.Grid": {},
      "qx.ui.container.Composite": {},
      "qx.ui.basic.Label": {},
      "qx.ui.virtual.cell.Cell": {},
      "qx.ui.virtual.core.Scroller": {},
      "qx.ui.virtual.layer.HtmlCellSpan": {},
      "qx.ui.virtual.layer.WidgetCellSpan": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
     * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag test
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.CellSpan", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __P_28_0: null,
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.virtual.CellSpan.superclass.prototype.main.call(this);
        var layout = new qx.ui.layout.Grid(5, 0);
        layout.setRowFlex(1, 1);
        layout.setColumnFlex(0, 1);
        layout.setColumnFlex(1, 1);
        var container = new qx.ui.container.Composite(layout);
        this.getRoot().add(container, {
          edge: 0
        });
        container.add(new qx.ui.basic.Label("HTML Cells").set({
          font: "bold",
          decorator: "table-scroller-header",
          padding: 3,
          allowGrowX: true
        }), {
          row: 0,
          column: 0
        });
        var scroller = this.getHtmlCellSpanScroller();
        container.add(scroller, {
          row: 1,
          column: 0
        });
        container.add(new qx.ui.basic.Label("Widget Cells").set({
          font: "bold",
          decorator: "table-scroller-header",
          padding: 3,
          allowGrowX: true
        }), {
          row: 0,
          column: 1
        });
        var scroller = this.getWidgetCellSpanScroller();
        container.add(scroller, {
          row: 1,
          column: 1
        });
        this.__P_28_0 = new qx.ui.virtual.cell.Cell();
      },
      getHtmlCellSpanScroller: function getHtmlCellSpanScroller() {
        var scroller = new qx.ui.virtual.core.Scroller(1000, 100, 50, 120);
        var pane = scroller.getPane();
        var spanLayer = new qx.ui.virtual.layer.HtmlCellSpan(this, pane.getRowConfig(), pane.getColumnConfig());
        spanLayer.setCellSpan(1, 1, 2, 2);
        spanLayer.setCellSpan(1, 5, 3, 3);
        spanLayer.setCellSpan(7, 4, 2, 4);
        spanLayer.setCellSpan(6, 0, 10, 2);
        spanLayer.setCellSpan(10, 9, 10, 5);
        spanLayer.setCellSpan(11, 3, 6, 3);
        scroller.getPane().addLayer(spanLayer);
        return scroller;
      },
      getCellProperties: function getCellProperties(row, column) {
        var color = (row + column) % 2 == 0 ? "yellow" : "green";
        this.__P_28_0.setBackgroundColor(color);
        return this.__P_28_0.getCellProperties(row + " / " + column);
      },
      getWidgetCellSpanScroller: function getWidgetCellSpanScroller() {
        var scroller = new qx.ui.virtual.core.Scroller(1000, 100, 50, 120);
        var pane = scroller.getPane();
        var spanLayer = new qx.ui.virtual.layer.WidgetCellSpan(this, pane.getRowConfig(), pane.getColumnConfig());
        spanLayer.setCellSpan(1, 1, 2, 2);
        spanLayer.setCellSpan(1, 5, 3, 3);
        spanLayer.setCellSpan(7, 4, 2, 4);
        spanLayer.setCellSpan(6, 0, 10, 2);
        spanLayer.setCellSpan(10, 9, 10, 5);
        spanLayer.setCellSpan(11, 3, 6, 3);
        scroller.getPane().addLayer(spanLayer);
        this._pool = [];
        return scroller;
      },
      getCellWidget: function getCellWidget(row, column) {
        var widget = this._pool.pop() || new qx.ui.basic.Label().set({
          allowGrowX: true
        });
        widget.set({
          backgroundColor: (row + column) % 2 == 0 ? "yellow" : "green",
          value: row + "x" + column,
          padding: 3
        });
        return widget;
      },
      poolCellWidget: function poolCellWidget(widget) {
        this._pool.push(widget);
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("__P_28_0");
      this._pool = null;
    }
  });
  qxl.demobrowser.demo.virtual.CellSpan.$$dbClassInfo = $$dbClassInfo;
})();
