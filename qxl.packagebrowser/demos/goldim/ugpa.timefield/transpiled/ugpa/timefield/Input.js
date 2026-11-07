(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.TextField": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("ugpa.timefield.Input", {
    extend: qx.ui.form.TextField,
    construct: function construct(maxValue) {
      // noinspection JSAnnotator
      qx.ui.form.TextField.constructor.call(this, "00");
      this.set({
        width: 25,
        appearance: "widget",
        textAlign: "center",
        liveUpdate: true,
        readOnly: true,
        filter: /[0-9]/
      });
      this.initMaxValue(maxValue);
      this.addListener("changeValue", this._onChangeValue, this);
    },
    properties: {
      maxValue: {
        deferredInit: true,
        check: "Integer"
      },
      prevValue: {
        init: "00"
      }
    },
    statics: {
      /**
       * Pad left leading zeros and removes not needed
       * @param value {Number|String} value
       * @return padded value
       */
      toValidString: function toValidString(value) {
        value = String(Number(value));
        var twoZeros = value.length === 2;
        var lessTen = Number(value) < 10;
        return lessTen && !twoZeros ? "0".concat(value) : "".concat(value);
      }
    },
    members: {
      hasValidValue: function hasValidValue() {
        return this.isValidValue(this.getValue());
      },
      _onChangeValue: function _onChangeValue(e) {
        var value = e.getData();
        if (this.isValidValue(value)) {
          var padded = this.constructor.toValidString(value);
          this.setPrevValue(padded);
          this.setValue(padded);
        } else {
          var prevValue = this.getPrevValue();
          this.setValue(prevValue);
        }
      },
      isValidValue: function isValidValue(time) {
        time = Number(time);
        return time >= 0 && time <= this.getMaxValue();
      }
    }
  });
  ugpa.timefield.Input.$$dbClassInfo = $$dbClassInfo;
})();
