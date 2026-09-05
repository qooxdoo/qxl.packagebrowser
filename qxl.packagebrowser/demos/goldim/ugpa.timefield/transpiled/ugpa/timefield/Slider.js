(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.Slider": {
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

  qx.Class.define("ugpa.timefield.Slider", {
    extend: qx.ui.form.Slider,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.ui.form.Slider.constructor.call(this, "horizontal");
      this.getChildControl("knob").addListener("touchend", function () {
        this.fireEvent("scrollStop");
      }, this);
      this.addListener("changeValue", this._onChangeSliderValue, this);
      this.setWidth(240);
      this.setMinimum(0);
    },
    events: {
      "scrollStop": "qx.event.type.Event"
    },
    members: {
      _onChangeSliderValue: function _onChangeSliderValue(e) {
        var input = e.getTarget().getUserData("input");
        input.setValue(String(e.getData()));
      }
    }
  });
  ugpa.timefield.Slider.$$dbClassInfo = $$dbClassInfo;
})();
