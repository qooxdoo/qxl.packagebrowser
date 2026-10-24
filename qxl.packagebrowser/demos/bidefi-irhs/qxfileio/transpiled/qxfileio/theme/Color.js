(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Color": {
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

  qx.Theme.define("qxfileio.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  qxfileio.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
