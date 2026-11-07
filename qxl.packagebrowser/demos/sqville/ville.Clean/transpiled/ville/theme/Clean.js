(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.clean.Appearance": {
        "require": true
      },
      "ville.theme.clean.Color": {
        "require": true
      },
      "ville.theme.clean.Decoration": {
        "require": true
      },
      "ville.theme.clean.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
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

  qx.Theme.define("ville.theme.Clean", {
    meta: {
      appearance: ville.theme.clean.Appearance,
      color: ville.theme.clean.Color,
      decoration: ville.theme.clean.Decoration,
      font: ville.theme.clean.Font,
      icon: qx.theme.icon.Tango
    }
  });
  ville.theme.Clean.$$dbClassInfo = $$dbClassInfo;
})();
