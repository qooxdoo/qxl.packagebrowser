(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.fluent.Brand1Dark": {
        "require": true
      },
      "ville.theme.fluent.Decoration": {
        "require": true
      },
      "ville.theme.fluent.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "ville.theme.fluent.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     SQville 
  
     Copyright:
       None
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (sqville@gmail.com)
  
  ************************************************************************ */

  qx.Theme.define("ville.theme.FluentDark", {
    meta: {
      color: ville.theme.fluent.Brand1Dark,
      decoration: ville.theme.fluent.Decoration,
      font: ville.theme.fluent.Font,
      icon: qx.theme.icon.Tango,
      appearance: ville.theme.fluent.Appearance
    }
  });
  ville.theme.FluentDark.$$dbClassInfo = $$dbClassInfo;
})();
