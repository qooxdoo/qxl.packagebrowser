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
  
     Copyright: 2019 
  
     License: MIT license
  
     Authors: 
  
  ************************************************************************ */
  qx.Theme.define("qxgraphql.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxgraphql.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Font.js.map?dt=1626060595414