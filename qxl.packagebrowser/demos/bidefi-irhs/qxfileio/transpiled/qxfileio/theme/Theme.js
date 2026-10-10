(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxfileio.theme.Color": {
        "require": true
      },
      "qxfileio.theme.Decoration": {
        "require": true
      },
      "qxfileio.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxfileio.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2019 INRA
  
     License: CeCILL
  
     Authors: Sylvain Gaillard (sgaillard) sylvain.gaillard@inra.fr
  
  ************************************************************************ */

  qx.Theme.define("qxfileio.theme.Theme", {
    meta: {
      color: qxfileio.theme.Color,
      decoration: qxfileio.theme.Decoration,
      font: qxfileio.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxfileio.theme.Appearance
    }
  });
  qxfileio.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
