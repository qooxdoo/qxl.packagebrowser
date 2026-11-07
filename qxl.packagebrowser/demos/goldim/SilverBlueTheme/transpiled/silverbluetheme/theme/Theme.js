(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "silverbluetheme.theme.Appearance": {
        "require": true
      },
      "silverbluetheme.theme.Decoration": {
        "require": true
      },
      "silverbluetheme.theme.Color": {
        "require": true
      },
      "silverbluetheme.theme.Font": {
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

  qx.Theme.define("silverbluetheme.theme.Theme", {
    meta: {
      appearance: silverbluetheme.theme.Appearance,
      decoration: silverbluetheme.theme.Decoration,
      color: silverbluetheme.theme.Color,
      font: silverbluetheme.theme.Font,
      icon: qx.theme.icon.Oxygen
    }
  });
  silverbluetheme.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
