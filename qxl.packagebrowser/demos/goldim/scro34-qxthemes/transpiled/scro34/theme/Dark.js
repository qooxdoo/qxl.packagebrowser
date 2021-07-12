(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.theme.dark.Color": {
        "require": true
      },
      "scro34.theme.dark.Decoration": {
        "require": true
      },
      "scro34.theme.dark.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      },
      "scro34.theme.dark.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright: 2010-2021 Norbert Schröder
  
     License: MIT license
  
     Authors: Norbert Schröder (scro34) schroeder@scro34.de
  
  ************************************************************************ */
  qx.Theme.define("scro34.theme.Dark", {
    meta: {
      color: scro34.theme.dark.Color,
      decoration: scro34.theme.dark.Decoration,
      font: scro34.theme.dark.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: scro34.theme.dark.Appearance
    }
  });
  scro34.theme.Dark.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Dark.js.map?dt=1626056181331