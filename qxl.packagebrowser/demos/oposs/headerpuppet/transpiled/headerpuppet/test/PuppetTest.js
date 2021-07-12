(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestCase": {
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
  * This class runs some simple end2end tests on HeaderPuppet.
  */
  qx.Class.define("headerpuppet.test.PuppetTest", {
    extend: qx.dev.unit.TestCase,
    members: {
      _win: null,
      "test e2e": function testE2e() {
        var _this = this;

        // window
        var win = new qx.ui.window.Window("Table").set({
          layout: new qx.ui.layout.VBox(),
          contentPadding: 0,
          centerOnAppear: true
        });
        var tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "A number", "A date", "Boolean"]);
        tableModel.setData(this.createRandomRows(1000)); // table

        var table = new qx.ui.table.Table(tableModel).set({
          allowGrowY: true
        });
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
          alignY: 'middle'
        }, {
          text: "Another Test shifted by one column",
          column: 2,
          row: 1,
          colSpan: 2,
          alignX: 'right',
          textAlign: 'right',
          rich: true
        }];
        win.addListenerOnce('appear', function (e) {
          _this.resume(function () {
            _this.assertEquals("A Long Long Title with multiple lines", q('[qxclass="headerpuppet.HeaderPuppet"] > :contains("Long Long")')[0].innerText, "Puppet Header Present");

            win.close();
          });
        });
        win.add(new headerpuppet.HeaderPuppet(table, headers));
        win.add(table, {
          flex: 1
        });
        win.open();
        this.wait();
      },
      createRandomRows: function createRandomRows(rowCount) {
        var rowData = [];
        var now = new Date().getTime();
        var dateRange = 34560000000; // 400 days

        var nextId = 0;

        for (var row = 0; row < rowCount; row++) {
          var date = new Date(now + Math.random() * dateRange - dateRange / 2);
          rowData.push([nextId++, Math.random() * 10000, date, Math.random() > 0.5]);
        }

        return rowData;
      }
    }
  });
  headerpuppet.test.PuppetTest.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=PuppetTest.js.map?dt=1626056964108