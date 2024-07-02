(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.MForm": {
        "require": true
      },
      "ugpa.timefield.SliderPopup": {},
      "qx.ui.layout.HBox": {},
      "ugpa.timefield.Input": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("ugpa.timefield.Field", {
    extend: qx.ui.container.Composite,
    include: qx.ui.form.MForm,
    construct: function construct(date) {
      // noinspection JSAnnotator
      qx.ui.container.Composite.constructor.call(this);
      this.__P_3_0();
      this._createChildControl("popup");
      this._createChildControl("hours");
      this.__P_3_1();
      this._createChildControl("minutes");
      this.__P_3_1();
      this._createChildControl("seconds");
      if (date) {
        this.setValue(date);
      }
    },
    events: {
      "stopScrolling": "qx.event.type.Event"
    },
    properties: {
      appearance: {
        refine: true,
        init: "textfield"
      }
    },
    members: {
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;
        switch (id) {
          case "popup":
            control = new ugpa.timefield.SliderPopup();
            control.addListener("stopScrolling", function () {
              this.fireEvent("stopScrolling");
            }, this);
            break;
          case "hours":
            control = this.__P_3_2(23);
            this._add(control);
            break;
          case "minutes":
          case "seconds":
            control = this.__P_3_2(59);
            this._add(control);
            break;
        }
        return control || ugpa.timefield.Field.superclass.prototype._createChildControlImpl.call(this, id);
      },
      __P_3_0: function __P_3_0() {
        var layout = new qx.ui.layout.HBox();
        layout.set({
          alignY: "middle"
        });
        this.setLayout(layout);
      },
      setValue: function setValue(value) {
        var hours = Math.floor(value / 3600);
        this.__P_3_3("hours", hours);
        var minutes = Math.floor(value / 60) % 60;
        this.__P_3_3("minutes", minutes);
        var seconds = Math.floor(value % 60);
        this.__P_3_3("seconds", seconds);
      },
      __P_3_3: function __P_3_3(subfield, seconds) {
        this.getChildControl(subfield).setValue(ugpa.timefield.Input.toValidString(seconds));
      },
      getValue: function getValue() {
        return this.__P_3_4();
      },
      __P_3_4: function __P_3_4() {
        var hours = this.getChildControl("hours").getValue();
        var minutes = this.getChildControl("minutes").getValue();
        var seconds = this.getChildControl("seconds").getValue();
        return this.__P_3_5(hours, minutes, seconds);
      },
      __P_3_5: function __P_3_5(hours, minutes, seconds) {
        return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
      },
      __P_3_2: function __P_3_2(maxValue) {
        var input = new ugpa.timefield.Input(maxValue);
        input.addListener("input", function () {
          this.getChildControl("popup").hide();
        }, this);
        input.addListener("mouseup", this._onMouseUp, this);
        return input;
      },
      __P_3_1: function __P_3_1() {
        this._add(new qx.ui.basic.Label(":"));
      },
      _onMouseUp: function _onMouseUp(e) {
        var popup = this.getChildControl("popup");
        var input = e.getTarget();
        popup.setCurrentInput(input);
        popup.show();
      }
    }
  });
  ugpa.timefield.Field.$$dbClassInfo = $$dbClassInfo;
})();
