(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
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

  qx.Theme.define("qxfileio.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {}
  });
  qxfileio.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
