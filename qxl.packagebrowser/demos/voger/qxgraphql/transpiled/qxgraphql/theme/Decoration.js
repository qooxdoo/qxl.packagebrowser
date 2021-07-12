(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
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
  qx.Theme.define("qxgraphql.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {}
  });
  qxgraphql.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Decoration.js.map?dt=1626060595385