(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.theme.graydient.Color": {
        "require": true
      },
      "scro34.theme.graydient.Decoration": {
        "require": true
      },
      "scro34.theme.graydient.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      },
      "scro34.theme.graydient.Appearance": {
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
  qx.Theme.define("scro34.theme.Graydient", {
    meta: {
      color: scro34.theme.graydient.Color,
      decoration: scro34.theme.graydient.Decoration,
      font: scro34.theme.graydient.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: scro34.theme.graydient.Appearance
    }
  });
  scro34.theme.Graydient.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Graydient.js.map?dt=1626056181513