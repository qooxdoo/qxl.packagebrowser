(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "graydienttheme.theme.Appearance": {
        "require": true
      },
      "graydienttheme.theme.Decoration": {
        "require": true
      },
      "graydienttheme.theme.Color": {
        "require": true
      },
      "graydienttheme.theme.Font": {
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
       2010-2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("graydienttheme.theme.Theme", {
    meta: {
      appearance: graydienttheme.theme.Appearance,
      decoration: graydienttheme.theme.Decoration,
      color: graydienttheme.theme.Color,
      font: graydienttheme.theme.Font,
      icon: qx.theme.icon.Oxygen
    }
  });
  graydienttheme.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
