(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qookery.internal.components.EditableComponent": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.DateField": {},
      "qookery.Qookery": {},
      "qx.lang.Type": {},
      "qx.lang.String": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /*
  	Qookery - Declarative UI Building for Qooxdoo
  
  	Copyright (c) Ergobyte Informatics S.A., www.ergobyte.gr
  
  	Licensed under the Apache License, Version 2.0 (the "License");
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at
  
  		http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software
  	distributed under the License is distributed on an "AS IS" BASIS,
  	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  	See the License for the specific language governing permissions and
  	limitations under the License.
  */
  qx.Class.define("qookery.internal.components.DateFieldComponent", {
    extend: qookery.internal.components.EditableComponent,
    construct: function construct(parentComponent) {
      qookery.internal.components.EditableComponent.constructor.call(this, parentComponent);
      this.__P_15_0 = /(\d{1,2})[\.\-\/\\\:](\d{1,2})([\.\-\/\\\:](\d?\d?\d\d))?/;
      this.__P_15_1 = {
        year: 4,
        month: 2,
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      this.__P_15_2 = false;
    },
    members: {
      __P_15_0: null,
      __P_15_1: null,
      __P_15_2: null,
      // Metadata
      getAttributeType: function getAttributeType(attributeName) {
        switch (attributeName) {
          case "placeholder":
            return "ReplaceableString";
        }

        return qookery.internal.components.DateFieldComponent.prototype.getAttributeType.base.call(this, attributeName);
      },
      // Construction
      create: function create(attributes) {
        qookery.internal.components.DateFieldComponent.prototype.create.base.call(this, attributes);

        this._applyAttribute("input-specification", this, function (specification) {
          this.__P_15_0 = this.__P_15_3(specification);
        });
      },
      _createMainWidget: function _createMainWidget() {
        var widget = new qx.ui.form.DateField();

        this._applyAttribute("native-context-menu", widget, "nativeContextMenu", qookery.Qookery.getOption(qookery.Qookery.OPTION_DEFAULT_NATIVE_CONTEXT_MENU));

        widget.getChildControl("textfield").addListener("focusout", function (event) {
          if (this.__P_15_2) {
            this.__P_15_2 = false;

            this.__P_15_4();
          }
        }, this);
        widget.addListener("keypress", function (event) {
          this.__P_15_2 = true;
          if (event.getKeyIdentifier() != "Enter" && event.getKeyIdentifier() != "Tab") return;

          this.__P_15_4();
        }, this);
        widget.addListener("changeValue", function (event) {
          if (!event.getData()) this.getMainWidget().resetValue();
          if (this._disableValueEvents) return;
          this.setValue(event.getData());
        }, this);

        this._applyWidgetAttributes(widget);

        this._applyAttribute("placeholder", widget, "placeholder");

        return widget;
      },
      _updateUI: function _updateUI(value) {
        this.__P_15_2 = false;
        var dateField = this.getMainWidget();

        if (!value) {
          dateField.resetValue();
          return;
        }

        if (!qx.lang.Type.isDate(value)) {
          if (qx.lang.Type.isString(value)) value = new Date(Date.parse(value));else throw new Error("Unsupported value type");
        }

        dateField.setValue(value);
      },
      _applyFormat: function _applyFormat(format) {
        this.getMainWidget().setDateFormat(format);
      },
      __P_15_4: function __P_15_4() {
        var textField = this.getMainWidget().getChildControl("textfield");
        var text = textField.getValue();
        text = this.__P_15_5(text);
        if (!text || text === "") return;

        var res = this.__P_15_0.exec(text);

        if (!res) return;
        var year = parseInt(res[this.__P_15_1.year], 10);
        var month = parseInt(res[this.__P_15_1.month], 10) - 1;
        if (month < 0 || month > 11) return;
        var date = parseInt(res[this.__P_15_1.date], 10);
        if (date < 1 || date > 31) return;
        var hours = parseInt(this.__P_15_1.hours, 10) !== 0 ? parseInt(res[this.__P_15_1.hours], 10) : 0;
        if (hours < 0 || hours > 23) return;
        var minutes = parseInt(this.__P_15_1.minutes, 10) !== 0 ? parseInt(res[this.__P_15_1.minutes], 10) : 0;
        if (minutes < 0 || minutes > 59) return;
        var seconds = parseInt(this.__P_15_1.seconds, 10) !== 0 ? parseInt(res[this.__P_15_1.seconds], 10) : 0;
        if (seconds < 0 || seconds > 59) return;
        var inputDate = new Date(year, month, date, hours, minutes, seconds);
        this.setValue(inputDate);
      },
      __P_15_5: function __P_15_5(string) {
        if (string == null) return "";
        var dateParts = string.split(/ +/);
        var datePart = "";
        var timePart = "00:00"; //user give only time

        if (dateParts[0].indexOf(":") != -1) {
          datePart = qx.lang.String.format("%1/%2/%3", [new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()]);
          timePart = dateParts[0];
        } else {
          datePart = dateParts.length >= 1 ? this.__P_15_6(dateParts[0]) : "";

          if (dateParts.length === 2 && parseInt(this.__P_15_1.minutes, 10) !== 0 && parseInt(this.__P_15_1.hours, 10) !== 0) {
            if (dateParts[1].indexOf(":") != -1) {
              timePart = dateParts[1];
            } else if (dateParts[1].indexOf(":") == -1 && dateParts[1] > 0) {
              timePart = qx.lang.String.format("%1:%2", [dateParts[1], "00"]);
            }
          }
        }

        return qx.lang.String.format("%1 %2", [datePart, timePart]);
      },
      __P_15_6: function __P_15_6(string) {
        var date = string.split("/");
        if (date.length == 1) date = string.split("-");

        switch (date.length) {
          case 1:
            string = qx.lang.String.format("01/%1/%2", [string, new Date().getFullYear()]);
            break;

          case 2:
            if (date[1].length == 4) string = qx.lang.String.format("01/%1/%2", [date[0], date[1]]);else string = qx.lang.String.format("%1/%2/%3", [date[0], date[1], new Date().getFullYear()]);
            break;

          case 3:
            if (date[2].length == 2) {
              date[2] = parseInt(date[2], 10) < this.constructor.THRESHOLD ? (date[2].length == 1 ? "200" : "20") + date[2] : (date[2].length == 1 ? "190" : "19") + date[2];
            }

            string = qx.lang.String.format("%1/%2/%3", [date[0], date[1], date[2]]);
            break;

          default:
            string = qx.lang.String.format("%1/%2/%3", [new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()]);
            break;
        }

        return string;
      },
      __P_15_3: function __P_15_3(specification) {
        var result = specification.split(" ", 7);
        if (!result || result.length != 7) return null;
        this.__P_15_1 = {
          year: result[0],
          month: result[1],
          date: result[2],
          hours: result[3],
          minutes: result[4],
          seconds: result[5]
        };
        return new RegExp(result[6], "i");
      }
    }
  });
  qookery.internal.components.DateFieldComponent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=DateFieldComponent.js.map?dt=1626055589904