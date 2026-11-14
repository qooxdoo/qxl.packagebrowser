(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Font": {
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

  qx.Theme.define("qxfileio.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxfileio.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
