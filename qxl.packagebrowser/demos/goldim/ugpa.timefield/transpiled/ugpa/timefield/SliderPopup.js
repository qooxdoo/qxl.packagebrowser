(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.popup.Popup": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "ugpa.timefield.Slider": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("ugpa.timefield.SliderPopup", {
    extend: qx.ui.popup.Popup,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.ui.popup.Popup.constructor.call(this, new qx.ui.layout.HBox());
      this._createChildControl("slider");
    },
    events: {
      "stopScrolling": "qx.event.type.Event"
    },
    members: {
      setCurrentInput: function setCurrentInput(input) {
        var slider = this.getChildControl("slider");
        slider.setUserData("input", input);
        slider.setMaximum(input.getMaxValue());
        slider.setValue(Number(input.getValue()));
        this.placeToWidget(input);
      },
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;
        switch (id) {
          case "slider":
            control = new ugpa.timefield.Slider();
            control.addListener("scrollStop", function () {
              this.fireEvent("stopScrolling");
            }, this);
            this._add(control);
            break;
        }
        return control || ugpa.timefield.SliderPopup.superclass.prototype._createChildControlImpl.call(this, id);
      }
    }
  });
  ugpa.timefield.SliderPopup.$$dbClassInfo = $$dbClassInfo;
})();
