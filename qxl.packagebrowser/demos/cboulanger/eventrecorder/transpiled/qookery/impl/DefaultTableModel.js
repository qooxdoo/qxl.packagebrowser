(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.ui.table.ITableModel": {
        "require": true
      },
      "qx.lang.Array": {},
      "qx.data.Array": {},
      "qx.lang.Type": {},
      "qx.data.SingleValueBinding": {},
      "qx.lang.String": {},
      "qookery.Qookery": {}
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
  qx.Class.define("qookery.impl.DefaultTableModel", {
    extend: qx.core.Object,
    implement: qx.ui.table.ITableModel,
    statics: {
      nullAccessor: {
        getLength: function getLength(data) {
          return 0;
        },
        getRowData: function getRowData(data, index) {
          return null;
        },
        appendRow: function appendRow(data, rowData) {
          return false;
        },
        replaceRow: function replaceRow(data, index, rowData) {
          return false;
        },
        insertRow: function insertRow(data, index, rowData) {
          return false;
        },
        removeRow: function removeRow(data, index) {
          return false;
        }
      },
      jsArrayAccessor: {
        getLength: function getLength(data) {
          return data.length;
        },
        getRowData: function getRowData(data, index) {
          var rowData = data[index];
          if (rowData === undefined) return null;
          return rowData;
        },
        appendRow: function appendRow(data, rowData) {
          data.push(rowData);
          return true;
        },
        replaceRow: function replaceRow(data, index, rowData) {
          data[index] = rowData;
          return true;
        },
        insertRow: function insertRow(data, index, rowData) {
          qx.lang.Array.insertAt(data, rowData, index);
          return false;
        },
        removeRow: function removeRow(data, index) {
          return qx.lang.Array.removeAt(data, index);
        }
      },
      qxDataArrayAccessor: {
        getLength: function getLength(data) {
          return data.getLength();
        },
        getRowData: function getRowData(data, index) {
          var rowData = data.getItem(index);
          if (rowData === undefined) return null;
          return rowData;
        },
        appendRow: function appendRow(data, rowData) {
          data.push(rowData);
          return true;
        },
        replaceRow: function replaceRow(data, index, rowData) {
          data.setItem(index, rowData);
          return true;
        },
        insertRow: function insertRow(data, index, rowData) {
          data.insertAt(index, rowData);
          return false;
        },
        removeRow: function removeRow(data, index) {
          return data.removeAt(index);
        }
      }
    },
    construct: function construct(component, xmlElement) {
      qx.core.Object.constructor.call(this);
      this.__P_6_0 = component;
      this.__P_6_1 = qookery.impl.DefaultTableModel.nullAccessor;
      this.__P_6_2 = -1;
    },
    events: {
      "dataChanged": "qx.event.type.Data",
      "metaDataChanged": "qx.event.type.Event",
      "sorted": "qx.event.type.Data"
    },
    members: {
      // Fields
      __P_6_0: null,
      __P_6_3: null,
      __P_6_1: null,
      __P_6_2: null,
      __P_6_4: null,
      // ITableModel implementation
      // .	Component
      getData: function getData() {
        return this.__P_6_3;
      },
      setData: function setData(data) {
        if (data instanceof qx.data.Array) this.__P_6_1 = qookery.impl.DefaultTableModel.qxDataArrayAccessor;else if (qx.lang.Type.isArray(data)) this.__P_6_1 = qookery.impl.DefaultTableModel.jsArrayAccessor;else this.__P_6_1 = qookery.impl.DefaultTableModel.nullAccessor;
        this.__P_6_3 = data;
        var sortColumn = this.getColumn(this.__P_6_2);
        if (sortColumn) this.__P_6_5(sortColumn, this.__P_6_4);
        this.reloadData();
      },
      reloadData: function reloadData() {
        if (!this.hasListener("dataChanged")) return;
        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: 0,
          lastRow: this.getRowCount() - 1
        });
      },
      // .	Columns
      getColumn: function getColumn(columnIndex) {
        return this.__P_6_0.getColumns()[columnIndex];
      },
      getColumns: function getColumns() {
        return this.__P_6_0.getColumns();
      },
      getColumnCount: function getColumnCount() {
        return this.getColumns().length;
      },
      getColumnId: function getColumnId(columnIndex) {
        return columnIndex.toString();
      },
      getColumnIndexById: function getColumnIndexById(columnId) {
        return parseInt(columnId, 10);
      },
      getColumnName: function getColumnName(columnIndex) {
        return this.getColumn(columnIndex)["label"] || "";
      },
      isColumnEditable: function isColumnEditable(columnIndex) {
        if (columnIndex == null) return false;
        if (this.__P_6_0.getReadOnly()) return false;
        var editable = this.getColumn(columnIndex)["editable"];
        return editable !== undefined ? editable : false;
      },
      isColumnSortable: function isColumnSortable(columnIndex) {
        if (columnIndex == null) return false;
        var sortable = this.getColumn(columnIndex)["sortable"];
        return sortable !== undefined ? sortable : true;
      },
      // .	Rows
      getRowCount: function getRowCount() {
        return this.__P_6_1.getLength(this.__P_6_3);
      },
      getRowData: function getRowData(rowIndex) {
        return this.__P_6_1.getRowData(this.__P_6_3, rowIndex);
      },
      // .	Row editing
      appendRow: function appendRow(rowData) {
        if (!this.__P_6_1.appendRow(this.__P_6_3, rowData)) return;
        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: this.getRowCount() - 2,
          lastRow: this.getRowCount() - 1
        });
      },
      replaceRow: function replaceRow(rowIndex, rowData) {
        if (!this.__P_6_1.replaceRow(this.__P_6_3, rowIndex, rowData)) return;
        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: rowIndex,
          lastRow: rowIndex + 1
        });
      },
      removeRow: function removeRow(rowIndex) {
        var row = this.__P_6_1.removeRow(this.__P_6_3, rowIndex);

        if (row == null) return;
        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: rowIndex,
          lastRow: this.getRowCount() - 1
        });
        return row;
      },
      moveRowUp: function moveRowUp(rowIndex) {
        if (rowIndex <= 0) return false;

        var rowData = this.__P_6_1.removeRow(this.__P_6_3, rowIndex);

        if (!rowData) return false;
        var insertPosition = rowIndex - 1;

        this.__P_6_1.insertRow(this.__P_6_3, insertPosition, rowData);

        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: insertPosition,
          lastRow: insertPosition + 1
        });
        return true;
      },
      moveRowDown: function moveRowDown(rowIndex) {
        var length = this.__P_6_1.getLength(this.__P_6_3);

        if (rowIndex >= length - 1) return false;

        var rowData = this.__P_6_1.removeRow(this.__P_6_3, rowIndex);

        if (!rowData) return false;
        var insertPosition = rowIndex + 1;

        this.__P_6_1.insertRow(this.__P_6_3, insertPosition, rowData);

        this.fireDataEvent("dataChanged", {
          firstColumn: 0,
          lastColumn: this.getColumnCount() - 1,
          firstRow: insertPosition - 1,
          lastRow: insertPosition
        });
        return true;
      },
      // .	Cells
      getValue: function getValue(columnIndex, rowIndex) {
        var row = this.getRowData(rowIndex);
        if (row == null) return null;
        var column = this.getColumn(columnIndex);
        if (column == null) return null;
        return this.__P_6_6(column, row);
      },
      setValue: function setValue(columnIndex, rowIndex, value) {
        var row = this.getRowData(rowIndex);
        if (row == null) return;
        var column = this.getColumn(columnIndex);
        if (column == null) return;

        var modified = this.__P_6_7(column, row, value);

        if (!modified) return;
        this.fireDataEvent("dataChanged", {
          firstColumn: columnIndex,
          lastColumn: columnIndex,
          firstRow: rowIndex,
          lastRow: rowIndex
        });
      },
      getValueById: function getValueById(columnId, rowIndex) {
        return this.getValue(this.getColumnIndexById(columnId), rowIndex);
      },
      setValueById: function setValueById(columnId, rowIndex, value) {
        this.setValue(this.getColumnIndexById(columnId), rowIndex, value);
      },
      // .	Sorting
      sortByColumn: function sortByColumn(columnIndex, ascending) {
        var column = this.getColumn(columnIndex);
        if (!column) throw new Error("Column to sort does not exist");
        this.__P_6_2 = columnIndex;
        this.__P_6_4 = ascending;

        this.__P_6_5(column, ascending);

        this.fireDataEvent("sorted", {
          columnIndex: columnIndex,
          ascending: ascending
        });
        this.fireEvent("metaDataChanged");
      },
      getSortColumnIndex: function getSortColumnIndex() {
        return this.__P_6_2;
      },
      isSortAscending: function isSortAscending() {
        return this.__P_6_4;
      },
      // .	Misc
      prefetchRows: function prefetchRows(firstRowIndex, lastRowIndex) {// Nothing to prefetch
      },
      // Internals
      __P_6_5: function __P_6_5(column, ascending) {
        if (!this.__P_6_3) return;

        var modelProvider = this.__P_6_0.getForm().getModelProvider();

        this.__P_6_3.sort(function (row1, row2) {
          var value1 = this.__P_6_6(column, row1);

          var value2 = this.__P_6_6(column, row2);

          var comparison = modelProvider.compare(value1, value2);
          var signum = ascending ? 1 : -1;
          return signum * comparison;
        }.bind(this));
      },
      __P_6_8: function __P_6_8(row, propertyName) {
        if (!row || !row.classname) return false;
        var clazz = qx.Class.getByName(row.classname);
        if (!clazz) return false;
        return !!qx.Class.getByProperty(clazz, propertyName);
      },

      /**
       * Read a cell's value, attempting a number of methods in sequence
       *
       * <ol>
       * <li>In case a dot appears in the connection specification, resolve as a QX property chain</li>
       * <li>In case the row is a qx.lang.Object with a properly named property, get its value</li>
       * <li>In case a getter method is available, invoke it</li>
       * <li>Fallback to direct reading of the JavaScript object key</li>
       * </ol>
       *
       * @return {any} the cell's value or <code>null</code> if not available
       */
      __P_6_6: function __P_6_6(column, row) {
        // The read function, once computed, could be cached in the column definition to improve performance
        var specification = column["connect"];
        if (specification == null) return null;
        var value;

        if (specification.indexOf(".") !== -1) {
          value = qx.data.SingleValueBinding.resolvePropertyChain(row, specification);
        } else if (this.__P_6_8(row, specification)) {
          value = row.get(specification);
        } else if (qx.lang.Type.isFunction(row["get" + qx.lang.String.firstUp(specification)])) {
          value = row["get" + qx.lang.String.firstUp(specification)]();
        } else {
          value = row[specification];
        }

        if (value == null) return null;
        var mapName = column["map"];

        if (mapName) {
          var map = qookery.Qookery.getRegistry().getMap(mapName);
          if (map) return map[value];
        }

        return value;
      },

      /**
       * Write a cell's value, attempting a number of methods in sequence
       *
       * <ol>
       * <li>In case the row is a qx.lang.Object with a properly named property, set its value</li>
       * <li>In case a setter method is available, invoke it</li>
       * <li>Fallback to direct writing of the JavaScript object key</li>
       * </ol>
       *
       * @return {Boolean} <code>true</code> if cell's value was modified
       */
      __P_6_7: function __P_6_7(column, row, value) {
        var specification = column["connect"];

        if (specification == null) {
          return false;
        }

        if (specification.indexOf(".") !== -1) {
          this.warn("Writing value of columns with property paths is not supported yet");
          return false;
        }

        if (this.__P_6_8(row, specification)) {
          row.set(specification, value);
        } else if (qx.lang.Type.isFunction(row["set" + qx.lang.String.firstUp(specification)])) {
          row["set" + qx.lang.String.firstUp(specification)](value);
        } else {
          row[specification] = value;
        }

        return true;
      }
    }
  });
  qookery.impl.DefaultTableModel.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=DefaultTableModel.js.map?dt=1626055588999