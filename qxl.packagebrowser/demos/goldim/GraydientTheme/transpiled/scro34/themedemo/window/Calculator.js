(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.window.Window": {
        "require": true
      },
      "scro34.themedemo.CalculatorLogic": {},
      "qx.ui.layout.VBox": {},
      "scro34.themedemo.IconFactory": {},
      "qx.ui.container.Composite": {},
      "qx.theme.manager.Decoration": {},
      "qx.ui.basic.Label": {},
      "qx.bom.Font": {},
      "qx.ui.layout.Grid": {},
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     https://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * ???
       * Dmitrii Zolotov
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.window.Calculator", {
    extend: scro34.themedemo.window.Window,
    members: {
      __P_182_0: null,
      __P_182_1: null,
      _createControls: function _createControls() {
        var _this = this;
        this.__P_182_1 = new scro34.themedemo.CalculatorLogic();
        var layout = new qx.ui.layout.VBox(16);
        this.set({
          layout: layout,
          width: 260,
          minWidth: 260,
          height: 260,
          caption: "Calculator",
          icon: scro34.themedemo.IconFactory.getInstance().getIcon("CALCULATOR_SMALL"),
          allowStretchX: false,
          allowStretchY: false
        });
        this.addListenerOnce("appear", function () {
          _this.add(_this._createCalculator(), {
            flex: 1
          });
        });
      },
      _createCalculator: function _createCalculator() {
        var _decorator;
        var box = new qx.ui.container.Composite().set({
          minWidth: 140,
          minHeight: 260,
          padding: 3,
          allowGrowX: true,
          allowGrowY: true
        });
        box.setLayout(this.__P_182_2());
        var decorator = qx.theme.manager.Decoration.getInstance().resolve("theme-demo-input");
        if (!decorator) {
          decorator = qx.theme.manager.Decoration.getInstance().resolve("input");
        }
        this.__P_182_0 = new qx.ui.basic.Label(this.__P_182_1.getCurrentValue().toString()).set({
          decorator: (_decorator = decorator) !== null && _decorator !== void 0 ? _decorator : null,
          allowGrowX: true,
          allowGrowY: true,
          minWidth: 140,
          height: 32,
          paddingRight: 8,
          textColor: "text-active",
          enabled: false,
          font: new qx.bom.Font().set({
            size: 20,
            family: ["Verdana", "sans-serif"],
            bold: true
          }),
          textAlign: "right"
        });
        this.__P_182_0.setEnabled(false);
        this.__P_182_3 = new qx.bom.Font().set({
          size: 12,
          family: ["Verdana", "sans-serif"],
          bold: true
        });
        this.__P_182_4(box);
        this.__P_182_5(box);
        this.__P_182_6(box);
        box.add(this.__P_182_0, {
          row: 0,
          column: 0,
          rowSpan: 0,
          colSpan: 4
        });
        return box;
      },
      __P_182_2: function __P_182_2() {
        var layout = new qx.ui.layout.Grid(5, 5);
        for (var i = 0; i <= 3; i++) {
          layout.setColumnFlex(i, 1);
        }
        for (var _i = 1; _i <= 6; _i++) {
          layout.setRowFlex(_i, 1);
        }
        return layout;
      },
      __P_182_6: function __P_182_6(box) {
        var _this2 = this;
        var actions = [{
          label: "C",
          handler: function handler() {
            _this2.__P_182_1.cleanDisplay();
            _this2.__P_182_0.setValue(_this2.__P_182_1.getCurrentValue().toString());
          },
          position: {
            row: 1,
            column: 2,
            rowSpan: 1,
            colSpan: 2
          }
        }, {
          label: "CE",
          handler: function handler() {
            _this2.__P_182_1.clearEntry();
            if (_this2.__P_182_1.getResult() != null) {
              _this2.__P_182_0.setValue(_this2.__P_182_1.getCurrentValue().toString());
            }
          },
          position: {
            row: 1,
            column: 1
          }
        }, {
          label: "Del",
          handler: function handler() {
            _this2.__P_182_1.deleteNumber();
            _this2.__P_182_0.setValue(_this2.__P_182_1.getCurrentValue().toString());
          },
          position: {
            row: 1,
            column: 0
          }
        }, {
          label: "+/-",
          handler: function handler() {
            _this2.__P_182_1.setSign();
            if (_this2.__P_182_1.getResult() != null) {
              _this2.__P_182_0.setValue(_this2.__P_182_1.getResult().toString());
            }
          },
          position: {
            row: 5,
            column: 1
          }
        }, {
          label: ".",
          handler: function handler() {
            _this2.__P_182_1.setComma();
          },
          position: {
            row: 5,
            column: 2
          }
        }];
        actions.forEach(function (action) {
          var button = _this2.__P_182_7(action.label, action.handler);
          box.add(button, action.position);
        });
      },
      __P_182_5: function __P_182_5(box) {
        var _this3 = this;
        var operations = [{
          label: "+",
          position: {
            row: 5,
            column: 3
          }
        }, {
          label: "-",
          position: {
            row: 2,
            column: 3
          }
        }, {
          label: "*",
          position: {
            row: 3,
            column: 3
          }
        }, {
          label: "/",
          position: {
            row: 4,
            column: 3
          }
        }, {
          label: "=",
          position: {
            row: 6,
            column: 0,
            rowSpan: 1,
            colSpan: 4
          }
        }];
        operations.forEach(function (operation) {
          var handler = function handler() {
            _this3.__P_182_1.calculate(operation.label);
            if (_this3.__P_182_1.getResult() != null) {
              _this3.__P_182_0.setValue(_this3.__P_182_1.getResult().toString());
            }
            _this3.__P_182_1.resetCurrentValue();
          };
          var button = _this3.__P_182_7(operation.label, handler);
          box.add(button, operation.position);
        });
      },
      __P_182_4: function __P_182_4(box) {
        var _this4 = this;
        var numbers = [{
          label: "1",
          position: {
            row: 4,
            column: 0
          }
        }, {
          label: "2",
          position: {
            row: 4,
            column: 1
          }
        }, {
          label: "3",
          position: {
            row: 4,
            column: 2
          }
        }, {
          label: "4",
          position: {
            row: 3,
            column: 0
          }
        }, {
          label: "5",
          position: {
            row: 3,
            column: 1
          }
        }, {
          label: "6",
          position: {
            row: 3,
            column: 2
          }
        }, {
          label: "7",
          position: {
            row: 2,
            column: 0
          }
        }, {
          label: "8",
          position: {
            row: 2,
            column: 1
          }
        }, {
          label: "9",
          position: {
            row: 2,
            column: 2
          }
        }];
        var button0 = this.__P_182_7("0", function () {
          _this4.__P_182_1.setCurrentValue(0);
          _this4.__P_182_0.setValue(_this4.__P_182_1.getCurrentValue().toFixed(_this4.__P_182_1.getZeroCounter()).toString());
        });
        box.add(button0, {
          row: 5,
          column: 0
        });
        numbers.forEach(function (number) {
          var button = _this4.__P_182_8(number.label, number.value);
          box.add(button, number.position);
        });
      },
      __P_182_8: function __P_182_8(label) {
        var _this5 = this;
        var value = Number(label);
        var handler = function handler() {
          _this5.__P_182_1.setCurrentValue(value);
          _this5.__P_182_0.setValue(_this5.__P_182_1.getCurrentValue().toString());
        };
        return this.__P_182_7(label, handler);
      },
      __P_182_7: function __P_182_7(label, handler) {
        var button = new qx.ui.form.Button(label).set({
          font: this.__P_182_3,
          minWidth: 30
        });
        button.addListener("execute", handler);
        return button;
      }
    },
    destruct: function destruct() {
      this._disposeObjects("__P_182_1", "__P_182_0");
    }
  });
  scro34.themedemo.window.Calculator.$$dbClassInfo = $$dbClassInfo;
})();
