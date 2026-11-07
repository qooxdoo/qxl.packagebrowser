(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "ugpa.completer.Completer": {
        "construct": true,
        "require": true
      },
      "qx.data.Array": {},
      "qx.ui.list.List": {},
      "ugpa.completer.ListPopup": {},
      "qx.ui.form.ListItem": {},
      "qx.lang.Type": {},
      "qx.event.Timer": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("ugpa.completer.ListCompleter", {
    extend: ugpa.completer.Completer,
    construct: function construct(source, widget) {
      // noinspection JSAnnotator
      ugpa.completer.Completer.constructor.call(this, source, widget);
      widget.addListener("keyup", this._onKeyPress, this);
      this.__P_7_0 = this.__P_7_1();
      this.setPopup(this.__P_7_2(this.__P_7_0));
    },
    destruct: function destruct() {
      this.__P_7_0.dispose();
      this.__P_7_0 = null;
    },
    members: {
      __P_7_3: function __P_7_3() {
        return this.__P_7_0.getModel();
      },
      _applyPopup: function _applyPopup(popup) {
        ugpa.completer.ListCompleter.superclass.prototype._applyPopup.call(this, popup);
        popup.add(this.__P_7_0);
      },
      __P_7_1: function __P_7_1() {
        var model = new qx.data.Array();
        var list = new qx.ui.list.List(model);
        list.getPane().addListener("update", this._onUpdatePane, this);
        list.addListener("changeValue", this._onItemPressed, this);
        list.addListener("pointerover", this._onPointerDown, this);
        return list;
      },
      __P_7_2: function __P_7_2(list) {
        var popup = new ugpa.completer.ListPopup();
        popup.add(list);
        return popup;
      },
      _onUpdatePane: function _onUpdatePane() {
        var height = this.__P_7_0.getPane().getRowConfig().getTotalSize() + 6;
        this.__P_7_0.setHeight(height);
      },
      _onPointerDown: function _onPointerDown(e) {
        var target = e.getTarget();
        if (target instanceof qx.ui.form.ListItem) {
          if (this.__P_7_4) {
            this.__P_7_4.removeState("selected");
          }
          target.addState("selected");
          this.__P_7_4 = target;
        }
      },
      setDelegate: function setDelegate(delegate) {
        this.__P_7_0.setDelegate(delegate);
      },
      _onKeyPress: function _onKeyPress(e) {
        if (!this.getEnabled()) {
          return;
        }
        var model = this.__P_7_3();
        if (model.getLength() === 0) {
          return;
        }
        var key = e.getKeyIdentifier();
        if (key === "Backspace") {
          return;
        }
        if (key === "Down" || key === "Up") {
          e.preventDefault();
        }
        var index;
        var list = this.__P_7_0;
        var selection = list.getSelection();
        if (!this.getPopup().isVisible()) {
          this.getPopup().show();
        }
        if (selection.getLength()) {
          var selected = selection.getItem(0);
          if (key === "Enter") {
            this.__P_7_5(selected);
            this.getPopup().hide();
          }
          index = model.indexOf(selected);
          if (key === "Down") {
            if (index === model.getLength() - 1) {
              index = 0;
            } else {
              index++;
            }
          }
          if (key === "Up") {
            if (index === 0) {
              index = model.getLength() - 1;
            } else {
              index--;
            }
          }
        } else {
          if (key === "Down") {
            index = 0;
          }
          if (key === "Up") {
            index = model.getLength() - 1;
          }
        }
        if (qx.lang.Type.isNumber(index)) {
          var value = model.getItem(index);
          list.setSelection([value]);
          this.__P_7_5(value);
        }
      },
      _setupAutoFocus: function _setupAutoFocus() {
        var firstItem = this.__P_7_3().getItem(0);
        if (firstItem) {
          this.__P_7_0.setSelection([firstItem]);
        }
      },
      _addItemOnPopup: function _addItemOnPopup(value) {
        this.__P_7_3().push(value);
      },
      __P_7_5: function __P_7_5(value) {
        if (this.getCompletionColumn()) {
          value = value.get(this.getCompletionColumn());
        }
        this.getWidget().setValue(value);
      },
      _onItemPressed: function _onItemPressed(e) {
        var index = e.getData()[0];
        var value = this.__P_7_3().getItem(index);
        this.__P_7_5(value);
        qx.event.Timer.once(function () {
          this.getPopup().hide();
        }, this, 100);
      },
      _clearPopup: function _clearPopup() {
        var model = this.__P_7_3();
        model.removeAll();
      }
    }
  });
  ugpa.completer.ListCompleter.$$dbClassInfo = $$dbClassInfo;
})();
