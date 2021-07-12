(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.cellrenderer.Abstract": {
        "construct": true,
        "require": true
      },
      "qookery.Qookery": {
        "construct": true
      },
      "qx.lang.String": {
        "construct": true
      },
      "qx.bom.String": {},
      "qx.lang.Object": {}
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
  qx.Class.define("qookery.internal.components.table.CellRenderer", {
    extend: qx.ui.table.cellrenderer.Abstract,
    statics: {
      CSS_KEYS: ["text-align", "color", "font-family", "font-size", "font-style", "font-weight", "line-height", "white-space"]
    },
    construct: function construct(component, column) {
      qx.ui.table.cellrenderer.Abstract.constructor.call(this);
      this.__P_25_0 = column;
      this.__P_25_1 = component;
      this.__P_25_2 = column["format"] != null ? qookery.Qookery.getRegistry().createFormat(column["format"]) : null;
      this.__P_25_3 = column["map"] != null ? qookery.Qookery.getRegistry().getMap(column["map"]) : null;
      var styleActionName = column["cell-renderer-callback"] || null;
      if (styleActionName != null && !component.isActionSupported(styleActionName)) throw new Error(qx.lang.String.format("Cell render callback '%1' is not supported by component '%2'", [styleActionName, component.toString()]));else this.__P_25_4 = styleActionName;
    },
    members: {
      __P_25_0: null,
      __P_25_2: null,
      __P_25_3: null,
      __P_25_4: null,
      __P_25_1: null,
      _getContentHtml: function _getContentHtml(cellInfo) {
        var text = this._formatValue(cellInfo);

        return qx.bom.String.escape(text);
      },
      _formatValue: function _formatValue(cellInfo) {
        var value = cellInfo.value;
        if (value == null) return "";
        if (this.__P_25_2) try {
          value = this.__P_25_2.format(value);
        } catch (e) {
          this.warn("Error formatting cell value", e);
        }

        if (this.__P_25_3 != null) {
          var mappedValue = this.__P_25_3[value];
          if (mappedValue != null) value = mappedValue;
        }

        var modelProvider = this.__P_25_1.getForm().getModelProvider();

        var label = modelProvider.getLabel(value, "short");
        return label != null ? label : "";
      },
      _getCellStyle: function _getCellStyle(cellInfo) {
        var column = this.__P_25_0;
        var style = qookery.internal.components.table.CellRenderer.CSS_KEYS.reduce(function (cellStyle, key) {
          var value = column[key];
          if (value != null) cellStyle[key] = value;
          return cellStyle;
        }, {});

        if (this.__P_25_4 != null) {
          var result = this.__P_25_1.executeAction(this.__P_25_4, cellInfo);

          if (result != null) qx.lang.Object.mergeWith(style, result, true);
        }

        return qookery.internal.components.table.CellRenderer.CSS_KEYS.reduce(function (cellStyle, key) {
          var value = style[key];
          if (value != null) cellStyle += key + ":" + value + ";";
          return cellStyle;
        }, "");
      },
      getColumn: function getColumn() {
        return this.__P_25_0;
      }
    },
    destruct: function destruct() {
      this._disposeObjects("__P_25_2");
    }
  });
  qookery.internal.components.table.CellRenderer.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=CellRenderer.js.map?dt=1626055591242