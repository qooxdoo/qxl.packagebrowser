(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "wax.demo.theme.Color": {
        "require": true
      },
      "wax.demo.theme.Decoration": {
        "require": true
      },
      "wax.demo.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "wax.demo.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  qx.Theme.define("wax.demo.theme.Theme", {
    meta: {
      color: wax.demo.theme.Color,
      decoration: wax.demo.theme.Decoration,
      font: wax.demo.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: wax.demo.theme.Appearance
    }
  });
  wax.demo.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
