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
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qxDateSelect.QxDateSelect": {},
      "qx.ui.basic.Label": {},
      "qx.bom.Font": {},
      "qx.ui.form.Button": {},
      "qx.ui.form.SelectBox": {},
      "qx.data.controller.List": {},
      "qx.data.Array": {},
      "qx.util.format.DateFormat": {},
      "qx.ui.form.ToggleButton": {},
      "qx.ui.layout.Grid": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright: 2020 voger
  
     License: MIT license
  
     Authors: voger
  
   ************************************************************************ */

  /**
   * This is the main application class of "qxDateSelect"
   */
  qx.Class.define("qxDateSelect.demo.Application", {
    extend: qx.application.Standalone,

    /*
       *****************************************************************************
       MEMBERS
       *****************************************************************************
       */
    members: {
      __P_2_0: null,

      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       *
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        qxDateSelect.demo.Application.prototype.main.base.call(this);
        var self = this; // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */
        // Document is the application root
        // create a container to hold the widget and the label
        var widgetContainer = new qx.ui.container.Composite();
        widgetContainer.setLayout(new qx.ui.layout.VBox());
        var dateSelect = new qxDateSelect.QxDateSelect();
        var label = new qx.ui.basic.Label();
        label.setFont(new qx.bom.Font(28, ["Verdana", "sans-serif"]));
        dateSelect.bind("changeValue", label, "value", {
          converter: function converter(value) {
            if (!value) {
              return "Please set a valid date";
            }

            return self.__P_2_0.format(value);
          }
        });
        widgetContainer.add(label);
        widgetContainer.add(dateSelect); // set date today button

        var button1 = new qx.ui.form.Button("Set date TODAY").set({
          allowGrowX: true,
          allowStretchX: true
        });
        button1.addListener("execute", function () {
          dateSelect.setValue(new Date());
        }, this); // set various formats

        var select1 = new qx.ui.form.SelectBox().set({
          width: 160
        });
        var model = ["DMY", "YDM", "MDY", "YMD", "DYM"];
        var select1Controller = new qx.data.controller.List(new qx.data.Array(model), select1);
        select1Controller.setDelegate({
          bindItem: function bindItem(controller, item, id) {
            controller.bindProperty("", "model", null, item, id);
            controller.bindProperty("", "label", {
              converter: function converter(value) {
                return "Set format to " + value;
              }
            }, item, id);
          }
        });
        select1Controller.bind("selection[0]", dateSelect, "format", {
          onUpdate: function onUpdate(_, target, data) {
            // not sure why is called twice.
            // do nothing when data is undefined
            if (!data) {
              return;
            }

            if (self.__P_2_0) {
              self.__P_2_0.dispose();
            }

            var formatArr = data.split("").map(function (item) {
              var returnVal;

              switch (item) {
                case "Y":
                  returnVal = "yyyy";
                  break;

                case "M":
                  returnVal = "MM";
                  break;

                case "D":
                  returnVal = "dd";
                  break;

                default:
                  throw new Error("Ooops!");
              }

              return returnVal;
            });
            self.__P_2_0 = new qx.util.format.DateFormat(formatArr.join("/"));
            target.fireDataEvent("changeValue", target.getValue());
          }
        }); // Toggle allow null

        var button2 = new qx.ui.form.ToggleButton("Allow null value");
        button2.bind("changeValue", dateSelect, "allowNull"); // reset values

        var button3 = new qx.ui.form.Button("Reset");
        button3.addListener("execute", function () {
          dateSelect.resetValue();
        }, this);
        var button4 = new qx.ui.form.ToggleButton("Descending years");
        button4.bind("value", dateSelect, "descendingYears");
        var button5 = new qx.ui.form.ToggleButton("Invalid");
        button5.bind("value", dateSelect, "valid", {
          converter: function converter(val) {
            return !val;
          }
        });
        var button6 = new qx.ui.form.ToggleButton("Disbled");
        button6.bind("value", dateSelect, "enabled", {
          converter: function converter(val) {
            return !val;
          }
        });
        var buttonContainer = new qx.ui.container.Composite(new qx.ui.layout.Grid(6, 6));
        buttonContainer.add(button1, {
          row: 0,
          column: 0
        });
        buttonContainer.add(select1, {
          row: 1,
          column: 0
        });
        buttonContainer.add(button2, {
          row: 2,
          column: 0
        });
        buttonContainer.add(button3, {
          row: 3,
          column: 0
        });
        buttonContainer.add(button4, {
          row: 4,
          column: 0
        });
        buttonContainer.add(button5, {
          row: 5,
          column: 0
        });
        buttonContainer.add(button6, {
          row: 6,
          column: 0
        });
        var doc = this.getRoot(); // doc.add(container, {edge: 0});

        doc.add(widgetContainer, {
          top: 50,
          left: 50
        });
        doc.add(buttonContainer, {
          top: 50,
          left: 500
        });
      }
    }
  });
  qxDateSelect.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626060539544