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
  
     Copyright: 2020 voger
  
     License: MIT license
  
     Authors: voger
  
  ************************************************************************ */
  qx.Theme.define("qxDateSelect.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  qxDateSelect.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Color.js.map?dt=1626060542394