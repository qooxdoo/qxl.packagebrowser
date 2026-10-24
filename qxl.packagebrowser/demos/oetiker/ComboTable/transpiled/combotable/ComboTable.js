(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.ComboBox": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.MModelProperty": {
        "require": true
      },
      "qx.util.TimerManager": {
        "construct": true
      },
      "qx.ui.core.queue.Visibility": {},
      "qx.html.Element": {},
      "qx.ui.table.columnmodel.Resize": {},
      "combotable.NoHeader": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.basic.Label": {},
      "qx.ui.table.Table": {},
      "combotable.CellHighlighter": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       Tobias Oetiker, OETIKER+PARTNER AG, www.oetiker.ch
       Mustafa Sak, SAK systems, www.saksys.de
  
     License:
       MIT
  
     Authors:
       * Tobias Oetiker (oetiker)
       * Mustafa Sak
       * Fritz Zaucker (fritz.zaucker@oetiker.ch)
  
  ************************************************************************ */

  /**
   * If a traditional SelectBox contains lots of items, it becomes pretty unpractical
   * to navigate. This widget lets the user enter part of the item of interest and
   * filters the drop down box accordingly.
   * It uses single column {@link qx.ui.table.Table} to present the dropdown box.
   * The table model must provide a {setSearchString} method. If you have static data, you
   * may want to try the included {@link combotable.SearchableModel}.
   * Combined with {@link qx.ui.table.model.Remote} it is possible to
   * provide access to huge datasets.
   * The model passed into the constructor must already have two columns set.
   * The first column containing the id/key of the row and the second column the searchable data.
   *
   * @throws {Error} An error if the table model does not provide a {setSearchString} method or has not two columns.
   */
  qx.Class.define("combotable.ComboTable", {
    extend: qx.ui.form.ComboBox,
    include: [qx.ui.form.MModelProperty],
    /**
     * @param tableModel {qx.ui.table.ITableModel ? null}
     *   A table model with {setSearchString} method and two columns as described above.
     */
    construct: function construct(tableModel) {
      qx.ui.form.ComboBox.constructor.call(this);
      if (!tableModel.setSearchString) {
        throw new Error("tableModel must have a setSearchString method. Create your own model or use combotable.SearchableModel!");
      }
      if (tableModel.getColumnCount() != 2) {
        throw new Error("tableModel must have exactly two columns!");
      }
      this.__P_5_0 = tableModel;
      var tf = this.getChildControl("textfield");
      tf.setLiveUpdate(true);
      tf.addListener("input", this._onTextFieldInput, this);
      this.__P_5_1 = qx.util.TimerManager.getInstance();
    },
    properties: {
      /**
       * Is the content of the table presently being reloaded ?
       */
      comboLoading: {
        init: false,
        check: "Boolean",
        apply: "_applyComboLoading"
      }
    },
    members: {
      __P_5_1: null,
      __P_5_0: null,
      __P_5_2: null,
      __P_5_3: null,
      __P_5_4: null,
      /**
       * As the popup data is recalculated adjust the selection and if the popup is already closed set
       * the field content.
       *
       * @return {void}
       */
      _onTableDataChanged: function _onTableDataChanged() {
        this.setComboLoading(false);
        var tm = this.__P_5_0;
        var table = this.__P_5_3;
        var rc = tm.getRowCount();
        var sm = table.getSelectionModel();
        sm.resetSelection();
        if (rc > 0) {
          if (this.getValue()) {
            sm.setSelectionInterval(0, 0);
            table.setFocusedCell(1, 0, true);
            this.setValid(true);
          }
        } else {
          if (this.getRequired()) {
            this.setValid(false);
          }
        }
        if (!this.getChildControl("popup").isVisible()) {
          var row = this.getSelectedRowData();
          if (row) {
            this.setModel(row.key);
            this.setValue(row.value);
          } else {
            this.setModel(null);
          }
        }
      },
      /**
       * Show loading notice as the table reloads.
       *
       * @param value {var} new value
       * @param old {var} old value
       * @return {void}
       */
      _applyComboLoading: function _applyComboLoading(value, old) {
        this.__P_5_3.setVisibility(value ? 'hidden' : 'visible');
        qx.ui.core.queue.Visibility.flush();
        qx.html.Element.flush();
      },
      /**
       * Create the child chontrols.
       *
       * @param id {var} widget id
       * @param hash {Map} hash
       * @return {var} control
       */
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;
        switch (id) {
          case "list":
            control = this.__P_5_5();
            break;
        }
        return control || combotable.ComboTable.superclass.prototype._createChildControlImpl.call(this, id);
      },
      /**
       * Creat the table widget
       *
       * @return {Widget} table widget
       */
      __P_5_5: function __P_5_5() {
        // Instantiate an instance of our local remote data model
        var tm = this.__P_5_0;
        var custom = {
          tableColumnModel: function tableColumnModel(obj) {
            return new qx.ui.table.columnmodel.Resize(obj);
          },
          tablePaneHeader: function tablePaneHeader(obj) {
            return new combotable.NoHeader(obj);
          },
          initiallyHiddenColumns: [0]
        };

        // Instantiate a table
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({
          height: this.getMaxListHeight(),
          allowGrowX: true,
          allowGrowY: true
        });
        container.add(new qx.ui.basic.Label(this.tr('Filtering ...')).set({
          padding: [3, 3, 3, 3],
          allowGrowX: true,
          allowGrowY: true,
          enabled: false
        }));
        var table = this.__P_5_3 = new qx.ui.table.Table(tm, custom).set({
          focusable: false,
          keepFocus: true,
          height: null,
          width: null,
          allowGrowX: true,
          allowGrowY: true,
          decorator: null,
          alwaysUpdateCells: true
        });

        // once the user starts modifying the text of the combo box
        // start watching for table changes
        var textfield = this.getChildControl('textfield');
        textfield.addListenerOnce('input', function (e) {
          tm.addListener('dataChanged', this._onTableDataChanged, this);
        }, this);
        var armClick = function armClick() {
          textfield.addListenerOnce('click', function (e) {
            if (!textfield.hasState("selected")) {
              textfield.selectAllText();
            }
          });
        };
        armClick();
        textfield.addListener('focusout', armClick, this);
        table.getDataRowRenderer().setHighlightFocusRow(true);
        table.set({
          showCellFocusIndicator: false,
          headerCellsVisible: false,
          columnVisibilityButtonVisible: false,
          focusCellOnPointerMove: true
        });
        var tcm = table.getTableColumnModel();
        this.__P_5_4 = new combotable.CellHighlighter();
        tcm.setDataCellRenderer(1, this.__P_5_4);
        container.add(table, {
          edge: 0
        });
        return container;
      },
      /**
       * reset the value of combobox
       */
      resetValue: function resetValue() {
        this.setValue(null);
        this.setModel(null);
        var tm = this.__P_5_0;
        this.__P_5_4.setSearchString(null);
        tm.setSearchString(null);
      },
      // overridden
      _onClick: function _onClick(e) {
        var target = e.getTarget();
        if (target == this.getChildControl("button")) {
          this.open();
        }
      },
      // overridden
      _onKeyPress: function _onKeyPress(e) {
        var popup = this.getChildControl("popup");
        var iden = e.getKeyIdentifier();
        switch (iden) {
          case "Down":
          case "Up":
            if (this.getComboLoading()) {
              e.stop();
              e.stopPropagation();
              return;
            }
            if (!popup.isVisible()) {
              this.open();
            }
            this['row' + iden]();
            e.stop();
            e.stopPropagation();
            break;
          case "Enter":
          case "Escape":
          case "Tab":
            if (this.getComboLoading()) {
              e.stop();
              e.stopPropagation();
              return;
            }
            if (popup.isVisible()) {
              e.stop();
              e.stopPropagation();
              this.close();
            }
            break;
        }
      },
      /**
       * Scroll down one row
       *
       * @return {void}
       */
      rowDown: function rowDown() {
        var row = this.getSelectedRowData();
        var table = this.__P_5_3;
        if (!row) {
          table.setFocusedCell(1, 0, true);
          table.getSelectionModel().setSelectionInterval(0, 0);
        } else {
          if (row.rowId + 1 < this.__P_5_0.getRowCount()) {
            table.setFocusedCell(1, row.rowId + 1, true);
            table.getSelectionModel().setSelectionInterval(row.rowId + 1, row.rowId + 1);
          }
        }
      },
      /**
       * Scroll up one row
       *
       * @return {void}
       */
      rowUp: function rowUp() {
        var row = this.getSelectedRowData();
        var table = this.__P_5_3;
        if (!row) {
          table.setFocusedCell(1, 0, true);
          table.getSelectionModel().setSelectionInterval(0, 0);
        } else {
          if (row.rowId - 1 >= 0) {
            table.setFocusedCell(1, row.rowId - 1, true);
            table.getSelectionModel().setSelectionInterval(row.rowId - 1, row.rowId - 1);
          }
        }
      },
      // overridden
      _onListChangeSelection: function _onListChangeSelection(e) {},
      // overridden
      _onPopupChangeVisibility: function _onPopupChangeVisibility(e) {
        var visibility = e.getData();
        if (visibility == 'hidden') {
          this.getChildControl("button").removeState("selected");
          var row = this.getSelectedRowData();
          if (row) {
            this.setModel(row.key);
            this.setValue(row.value);
          } else {
            if (this.getValue()) {
              this.setModel(null);
              this.setValid(false);
            } else {
              if (this.getRequired()) {
                this.setValid(false);
              }
            }
          }
        } else {
          this.getChildControl("button").addState("selected");
        }
      },
      // overridden
      _onTextFieldInput: function _onTextFieldInput(e) {
        var value = e.getData();
        var table = this.__P_5_3;
        this.open();
        var sm = table.getSelectionModel();
        sm.resetSelection();
        table.setFocusedCell(null, null, false);
        if (this.__P_5_2) {
          this.__P_5_1.stop(this.__P_5_2);
        }
        this.__P_5_2 = this.__P_5_1.start(function (userData, timerId) {
          this.__P_5_2 = null;
          if (this.__P_5_0.getSearchString() != value) {
            this.setComboLoading(true);
            this.__P_5_4.setSearchString(value);
            this.__P_5_0.setSearchString(value);
          }
        }, null, this, null, 150);
        this.fireDataEvent("input", value, e.getOldData());
      },
      // overridden
      _onTextFieldChangeValue: function _onTextFieldChangeValue(e) {
        this.fireDataEvent("changeValue", e.getData(), e.getOldData());
      },
      /**
       * get id and data curently selected
       *
       * @return {var} map with id and data and rowId keys
       */
      getSelectedRowData: function getSelectedRowData() {
        var table = this.__P_5_3;
        var sel = table.getSelectionModel().getSelectedRanges();
        var tm = this.__P_5_0;
        for (var i = 0; i < sel.length; i++) {
          var interval = sel[i];
          for (var s = interval.minIndex; s <= interval.maxIndex; s++) {
            var key = tm.getValue(0, s);
            var value = tm.getValue(1, s);
            return {
              rowId: s,
              key: key,
              value: value
            };
          }
        }
        return null;
      }
    }
  });
  combotable.ComboTable.$$dbClassInfo = $$dbClassInfo;
})();
