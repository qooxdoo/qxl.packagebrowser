(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.theme.silverblue.Color": {
        "require": true
      },
      "scro34.theme.silverblue.Decoration": {
        "require": true
      },
      "scro34.theme.silverblue.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      },
      "scro34.theme.silverblue.Appearance": {
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
  qx.Theme.define("scro34.theme.SilverBlue", {
    meta: {
      color: scro34.theme.silverblue.Color,
      decoration: scro34.theme.silverblue.Decoration,
      font: scro34.theme.silverblue.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: scro34.theme.silverblue.Appearance
    }
  });
  scro34.theme.SilverBlue.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=SilverBlue.js.map?dt=1626056181699