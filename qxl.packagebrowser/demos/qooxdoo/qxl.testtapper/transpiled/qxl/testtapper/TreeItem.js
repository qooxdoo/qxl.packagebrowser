(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.tree.VirtualTreeItem": {
        "require": true
      },
      "qx.ui.core.Spacer": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.basic.Image": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.testtapper.TreeItem", {
    extend: qx.ui.tree.VirtualTreeItem,
    properties: {
      numberFailed: {
        check: "Number",
        event: "changeNumberFailed",
        init: "0"
      },
      numberPassed: {
        check: "Number",
        event: "changeNumberPassed",
        init: 0
      },
      testClass: {
        check: "String",
        event: "changeTestClass",
        init: ""
      },
      testName: {
        check: "String",
        event: "changeTestName",
        init: ""
      },
      message: {
        check: "String",
        event: "changeMessage",
        init: ""
      }
    },
    members: {
      _addWidgets: function _addWidgets() {
        qxl.testtapper.TreeItem.superclass.prototype._addWidgets.call(this);
        this.addWidget(new qx.ui.core.Spacer(), {
          flex: 1
        });

        // number of passed tests
        var passedContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
          width: 60
        });
        var passedIcon = new qx.ui.basic.Image("qx/icon/Oxygen/16/actions/dialog-ok.png").set({
          width: 20
        });
        var passedLabel = new qx.ui.basic.Label();
        this.bind("numberPassed", passedLabel, "value");
        passedContainer.add(passedIcon);
        passedContainer.add(passedLabel);
        this.bind("numberPassed", passedContainer, "visibility", {
          converter: function converter(v) {
            return v > 0 ? "visible" : "hidden";
          }
        });
        this.addWidget(passedContainer);

        // number of failed tests
        var failedContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
          width: 60
        });
        var failedIcon = new qx.ui.basic.Image("qx/icon/Oxygen/16/actions/dialog-cancel.png").set({
          width: 20
        });
        var failedLabel = new qx.ui.basic.Label();
        this.bind("numberFailed", failedLabel, "value");
        failedContainer.add(failedIcon);
        failedContainer.add(failedLabel);
        this.bind("numberFailed", failedContainer, "visibility", {
          converter: function converter(v) {
            return v > 0 ? "visible" : "hidden";
          }
        });
        this.addWidget(failedContainer);

        // message
        var text = new qx.ui.basic.Label();
        this.bind("message", text, "value");
        text.setWidth(300);
        this.addWidget(text);
      }
    }
  });
  qxl.testtapper.TreeItem.$$dbClassInfo = $$dbClassInfo;
})();
