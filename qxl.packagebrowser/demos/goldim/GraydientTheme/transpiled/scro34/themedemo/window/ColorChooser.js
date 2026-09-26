(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.window.Window": {
        "require": true
      },
      "qx.ui.layout.VBox": {},
      "scro34.themedemo.IconFactory": {},
      "qx.ui.container.Composite": {},
      "qx.ui.control.ColorSelector": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     https://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * ???
       * Dmitrii Zolotov
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.window.ColorChooser", {
    extend: scro34.themedemo.window.Window,
    members: {
      _createControls: function _createControls() {
        this.set({
          layout: new qx.ui.layout.VBox(16),
          icon: scro34.themedemo.IconFactory.getInstance().getIcon("COLOR_SELECTOR_SMALL"),
          caption: "Color Selector",
          allowStretchX: false,
          allowStretchY: false
        });
        var box = new qx.ui.container.Composite().set({
          layout: new qx.ui.layout.VBox(),
          padding: 3,
          allowGrowX: true,
          allowGrowY: true
        });
        var colorSelector = new qx.ui.control.ColorSelector();
        colorSelector.getChildControl("hex-field").setWidth(65);
        colorSelector.getChildControl("preset-field-set").setAlignX("center");
        ["hsb-spinner-brightness", "hsb-spinner-hue", "hsb-spinner-saturation", "rgb-spinner-blue", "rgb-spinner-green", "rgb-spinner-red"].forEach(function (child) {
          return colorSelector.getChildControl(child).setWidth(55);
        });
        box.add(colorSelector);
        this.add(box, {
          flex: 1
        });
      }
    }
  });
  scro34.themedemo.window.ColorChooser.$$dbClassInfo = $$dbClassInfo;
})();
