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
  
     Copyright: 2019 
  
     License: MIT license
  
     Authors: 
  
  ************************************************************************ */
  qx.Theme.define("qxgraphql.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {}
  });
  qxgraphql.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Color.js.map?dt=1626060595354