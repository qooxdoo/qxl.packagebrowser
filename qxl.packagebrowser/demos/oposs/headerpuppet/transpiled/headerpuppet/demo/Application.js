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
      "qx.ui.window.Window": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "headerpuppet.HeaderPuppet": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
  Copyright: 2019 OETIKER+PARTNER AG
  
  License: MIT license
  
  Authors: Tobias Oetiker (oetiker) tobi@oetiker.ch
  
  ************************************************************************ */

  /**
  * This is the main application class of "HeaderPuppet"
  */
  qx.Class.define("headerpuppet.demo.Application", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
    MEMBERS
    *****************************************************************************
    */
    members: {
      /**
      * This method contains the initial application code and gets called
      * during startup of the application
      *
      */
      main: function main() {
        // Call super class
        headerpuppet.demo.Application.prototype.main.base.call(this); // Enable logging in debug variant

        // window
        var win = new qx.ui.window.Window("Table").set({
          layout: new qx.ui.layout.VBox(),
          contentPadding: 0,
          centerOnAppear: true
        });
        this.getRoot().add(win);
        var tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "Hidden", "A number", "A date", "Boolean"]);
        tableModel.setData(this.createRandomRows(1000)); // table

        var table = new qx.ui.table.Table(tableModel).set({
          allowGrowY: true,
          headerCellsVisible: false
        });
        table.getTableColumnModel().setColumnVisible(1, false);
        var headers = [{
          text: "A Long Long Title with multiple lines",
          rich: true,
          column: 0,
          row: 0,
          rowSpan: 2,
          alignY: 'middle',
          textAlign: 'center'
        }, {
          text: "Hello World Hello World",
          column: 1,
          row: 0,
          colSpan: 2,
          alignX: 'center',
          alignY: 'middle',
          font: 'default'
        }, {
          text: "Another Test shifted by one column",
          column: 2,
          row: 1,
          colSpan: 2,
          alignX: 'right',
          textAlign: 'right',
          rich: true
        }];
        win.add(new headerpuppet.HeaderPuppet(table, headers).set({
          cellBackgroundColor: '#ddd',
          lineColor: '#f00',
          lineWidth: 3,
          cellFont: 'default',
          cellPadding: 5
        }));
        win.add(table, {
          flex: 1
        });
        win.open();
      },
      createRandomRows: function createRandomRows(rowCount) {
        var rowData = [];
        var now = new Date().getTime();
        var dateRange = 34560000000; // 400 days

        var nextId = 0;

        for (var row = 0; row < rowCount; row++) {
          var date = new Date(now + Math.random() * dateRange - dateRange / 2);
          rowData.push([nextId++, "XXX", Math.random() * 10000, date, Math.random() > 0.5]);
        }

        return rowData;
      }
    }
  });
  headerpuppet.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626056963738