(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "bernstein.theme.Appearance": {
        "require": true
      },
      "bernstein.theme.Decoration": {
        "require": true
      },
      "bernstein.theme.Color": {
        "require": true
      },
      "bernstein.theme.Font": {
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
       2015-2021 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("bernstein.theme.Theme", {
    meta: {
      appearance: bernstein.theme.Appearance,
      decoration: bernstein.theme.Decoration,
      color: bernstein.theme.Color,
      font: bernstein.theme.Font,
      icon: qx.theme.icon.Oxygen
    }
  });
  bernstein.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
