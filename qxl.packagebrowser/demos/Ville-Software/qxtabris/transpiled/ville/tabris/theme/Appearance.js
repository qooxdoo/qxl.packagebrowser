(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Appearance
   *
   */
  qx.Class.define("ville.tabris.theme.Appearance", {
    type: "static",
    statics: {
      widget: {},
      textview: {
        centerX: true,
        top: 'prev() 50',
        font: '24px'
      },
      "button-base": {
        style: "default",
        textColor: "white"
      },
      button: {
        include: "button-base",
        style: function style() {
          return {
            centerX: true,
            top: 100,
            text: 'Button',
            background: 'purple',
            width: 200,
            cornerRadius: 20
          };
        }
      }
    }
  });
  ville.tabris.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
