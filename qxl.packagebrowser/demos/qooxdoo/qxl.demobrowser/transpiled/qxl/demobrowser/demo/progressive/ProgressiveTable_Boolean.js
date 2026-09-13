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
      "qx.ui.progressive.renderer.table.Widths": {},
      "qx.ui.progressive.headfoot.TableHeading": {},
      "qx.ui.progressive.headfoot.Progress": {},
      "qx.ui.progressive.structure.Default": {},
      "qx.ui.progressive.Progressive": {},
      "qx.ui.progressive.model.Default": {},
      "qx.ui.progressive.renderer.table.Row": {},
      "qx.ui.progressive.renderer.table.cell.Boolean": {},
      "qx.bom.element.Scroll": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /*
   * Example of using the Boolean cell renderer with Progressive's Table.
   */
  qx.Class.define("qxl.demobrowser.demo.progressive.ProgressiveTable_Boolean", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.progressive.ProgressiveTable_Boolean.superclass.prototype.main.call(this);
        var nextId = 0;
        var createRandomRows = function createRandomRows(rowCount) {
          var rowData = [];
          for (var row = 0; row < rowCount; row++) {
            rowData.push({
              renderer: "row",
              location: "end",
              data: [nextId++, Math.floor(Math.random() * 2) != 0]
            });
          }
          return rowData;
        };
        var columnWidths = new qx.ui.progressive.renderer.table.Widths(2);
        columnWidths.setWidth(0, 100);
        columnWidths.setWidth(1, 100);
        var columnNames = ["Id", "Boolean"];

        // Instantiate a Progressive with a default structure with header
        var header = new qx.ui.progressive.headfoot.TableHeading(columnWidths, columnNames);
        var footer = new qx.ui.progressive.headfoot.Progress(columnWidths, columnNames);
        var structure = new qx.ui.progressive.structure.Default(header, footer);
        var progressive = new qx.ui.progressive.Progressive(structure);

        // Instantiate a data model and populate it.
        var dataModel = new qx.ui.progressive.model.Default();
        var rowData = createRandomRows(20);
        dataModel.addElements(rowData);

        // Tell Progressive about its data model
        progressive.setDataModel(dataModel);

        // Instantiate a table row renderer
        var rowRenderer = new qx.ui.progressive.renderer.table.Row(columnWidths);

        // Give Progressive the renderer, and assign a name
        progressive.addRenderer("row", rowRenderer);

        // Tell the row renderer to use a boolean renderer for column 1
        var boolRenderer = new qx.ui.progressive.renderer.table.cell.Boolean();
        boolRenderer.setAllowToggle(true);
        rowRenderer.addRenderer(1, boolRenderer);
        progressive.set({
          width: 200 + qx.bom.element.Scroll.getScrollbarWidth(),
          maxWidth: 200 + qx.bom.element.Scroll.getScrollbarWidth()
        });
        this.getRoot().add(progressive, {
          left: 50,
          top: 50,
          bottom: 50
        });
        progressive.render();
      }
    }
  });
  qxl.demobrowser.demo.progressive.ProgressiveTable_Boolean.$$dbClassInfo = $$dbClassInfo;
})();
