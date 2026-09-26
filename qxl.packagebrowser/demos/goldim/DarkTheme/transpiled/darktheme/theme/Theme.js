(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "darktheme.theme.Appearance": {
        "require": true
      },
      "darktheme.theme.Decoration": {
        "require": true
      },
      "darktheme.theme.Color": {
        "require": true
      },
      "darktheme.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
        2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("darktheme.theme.Theme", {
    meta: {
      appearance: darktheme.theme.Appearance,
      decoration: darktheme.theme.Decoration,
      color: darktheme.theme.Color,
      font: darktheme.theme.Font,
      icon: qx.theme.icon.Oxygen
    }
  });
  darktheme.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
