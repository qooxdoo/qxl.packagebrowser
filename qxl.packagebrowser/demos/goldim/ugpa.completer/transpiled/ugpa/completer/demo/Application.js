function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
      "qx.ui.form.TextField": {},
      "qx.data.Array": {},
      "qx.data.controller.List": {},
      "ugpa.completer.ListCompleter": {},
      "qx.ui.groupbox.GroupBox": {},
      "qx.ui.layout.Basic": {},
      "qx.ui.form.Button": {},
      "qx.ui.form.RadioGroup": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.Form": {},
      "qx.ui.form.renderer.Single": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.form.List": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  /**
   * This is the main application class of "ugpa.completer"
   */
  qx.Class.define("ugpa.completer.demo.Application", {
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
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        ugpa.completer.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        // qx.theme.iconfont.LoadMaterialIcons;
        var main = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        main.add(this.__P_2_0());
        main.add(this.__P_2_1());
        main.add(this.__P_2_2());
        this.getRoot().add(main, {
          top: 100,
          left: 100
        });
      },
      __P_2_0: function __P_2_0() {
        var field = new qx.ui.form.TextField();
        field.setPlaceholder("Start type some text...");
        field.setWidth(500);
        this.__P_2_3 = ["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh"];
        var source = this.__P_2_4 = new qx.data.Array(this.__P_2_3);
        this.__P_2_5 = new qx.data.controller.List(this.__P_2_4);
        this.__P_2_6 = new ugpa.completer.ListCompleter(source, field);
        var block = new qx.ui.groupbox.GroupBox("Autocomplete");
        block.setLayout(new qx.ui.layout.Basic());
        block.add(field);
        return block;
      },
      __P_2_1: function __P_2_1() {
        var settingsBlock = new qx.ui.groupbox.GroupBox("Settings");
        settingsBlock.setLayout(new qx.ui.layout.VBox());
        settingsBlock.add(this.__P_2_7());
        settingsBlock.add(this.__P_2_8());
        settingsBlock.add(this.__P_2_9());
        var resetButton = new qx.ui.form.Button("Reset");
        resetButton.addListener("execute", function () {
          this.resetSettings();
        }, this);
        settingsBlock.add(resetButton);
        return settingsBlock;
      },
      __P_2_10: function __P_2_10(legend, choices, handler) {
        var radioGrp = new qx.ui.form.RadioGroup();
        var box = new qx.ui.groupbox.GroupBox(legend);
        box.setLayout(new qx.ui.layout.VBox());
        choices.forEach(function (choice) {
          var button = new qx.ui.form.RadioButton(choice);
          box.add(button);
          radioGrp.add(button);
        });
        radioGrp.addListener("changeValue", function (e) {
          var label = e.getData().getLabel();
          handler(label);
        }, this);
        return [radioGrp, box];
      },
      __P_2_9: function __P_2_9() {
        var _this = this;
        var form = new qx.ui.form.Form();
        var options = {
          converter: function converter(value) {
            return String(value);
          }
        };
        this.__P_2_11 = this.__P_2_12("Max visible items", form, function (value) {
          return _this.__P_2_6.setMaxVisibleItems(value);
        });
        this.__P_2_6.bind("maxVisibleItems", this.__P_2_11, "value", options);
        this.__P_2_13 = this.__P_2_12("Min length", form, function (value) {
          return _this.__P_2_6.setMinLength(value);
        });
        this.__P_2_6.bind("minLength", this.__P_2_13, "value", options);
        this.__P_2_14 = this.__P_2_12("Delay (ms)", form, function (value) {
          return _this.__P_2_6.setDelay(value);
        });
        this.__P_2_6.bind("delay", this.__P_2_14, "value", options);
        this.__P_2_15 = this.__P_2_16("Autofocus", form, function (value) {
          return _this.__P_2_6.setAutoFocus(value);
        });
        this.__P_2_6.bind("autoFocus", this.__P_2_15, "value");
        this.__P_2_17 = this.__P_2_16("Enabled", form, function (value) {
          return _this.__P_2_6.setEnabled(value);
        });
        this.__P_2_6.bind("enabled", this.__P_2_17, "value");
        return new qx.ui.form.renderer.Single(form);
      },
      resetSettings: function resetSettings() {
        this.__P_2_18.resetValue();
        this.__P_2_19.resetValue();
        this.__P_2_6.resetFilterMode();
        this.__P_2_6.resetCaseSensitivity();
        this.__P_2_6.resetMaxVisibleItems();
        this.__P_2_6.resetMinLength();
        this.__P_2_6.resetDelay();
        this.__P_2_6.resetAutoFocus();
        this.__P_2_6.resetEnabled();
      },
      __P_2_16: function __P_2_16(legend, form, handler) {
        var checkbox = new qx.ui.form.CheckBox();
        checkbox.addListener("changeValue", function (e) {
          var value = e.getData();
          handler(value);
        }, this);
        form.add(checkbox, legend);
        return checkbox;
      },
      __P_2_12: function __P_2_12(legend, form, handler) {
        var field = new qx.ui.form.TextField();
        field.addListener("changeValue", function (e) {
          var value = e.getData();
          value = parseInt(value);
          handler(value);
        }, this);
        form.add(field, legend);
        return field;
      },
      __P_2_8: function __P_2_8() {
        var _this2 = this;
        var choices = ["startsWith", "contains", "endsWith"];
        var _this$__P_2_ = this.__P_2_10("Filter Mode", choices, function (value) {
            return _this2.__P_2_6.setFilterMode(value);
          }),
          _this$__P_2_2 = _slicedToArray(_this$__P_2_, 2),
          group = _this$__P_2_2[0],
          box = _this$__P_2_2[1];
        this.__P_2_18 = group;
        return box;
      },
      __P_2_7: function __P_2_7() {
        var _this3 = this;
        var choices = ["insensitive", "sensitive"];
        var _this$__P_2_3 = this.__P_2_10("Case Sensitivity", choices, function (value) {
            return _this3.__P_2_6.setCaseSensitivity(value);
          }),
          _this$__P_2_4 = _slicedToArray(_this$__P_2_3, 2),
          group = _this$__P_2_4[0],
          box = _this$__P_2_4[1];
        this.__P_2_19 = group;
        return box;
      },
      __P_2_2: function __P_2_2() {
        var box = new qx.ui.groupbox.GroupBox("Source List");
        box.setLayout(new qx.ui.layout.VBox());
        var block = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        var list = new qx.ui.form.List();
        this.__P_2_5.setTarget(list);
        block.add(list);
        var controlBlock = new qx.ui.groupbox.GroupBox("Control Panel");
        controlBlock.setLayout(new qx.ui.layout.VBox());
        var itemControlBlock = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        var field = new qx.ui.form.TextField();
        itemControlBlock.add(field);
        var buttonBlock = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        var addButton = new qx.ui.form.Button("Add");
        buttonBlock.add(addButton);
        addButton.addListener("execute", function (e) {
          var word = field.getValue();
          field.resetValue();
          this.__P_2_4.append(word);
          this.__P_2_4.sort();
        }, this);
        var removeButton = new qx.ui.form.Button("Remove");
        removeButton.addListener("execute", function (e) {
          var index = this.__P_2_4.indexOf(field.getValue());
          if (index !== -1) {
            this.__P_2_4.removeAt(index);
          }
        }, this);
        buttonBlock.add(removeButton);
        itemControlBlock.add(buttonBlock);
        controlBlock.add(itemControlBlock);
        var clearButton = new qx.ui.form.Button("Clear");
        clearButton.addListener("execute", function () {
          this.__P_2_4.removeAll();
        }, this);
        controlBlock.add(clearButton);
        block.add(controlBlock);
        box.add(block);
        var resetButton = new qx.ui.form.Button("Reset");
        resetButton.addListener("execute", function () {
          this.__P_2_4.removeAll();
          this.__P_2_4.append(this.__P_2_3);
        }, this);
        box.add(resetButton);
        return box;
      }
    }
  });
  ugpa.completer.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
