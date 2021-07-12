(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxgraphql.theme.Color": {
        "require": true
      },
      "qxgraphql.theme.Decoration": {
        "require": true
      },
      "qxgraphql.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxgraphql.theme.Appearance": {
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
  qx.Theme.define("qxgraphql.theme.Theme", {
    meta: {
      color: qxgraphql.theme.Color,
      decoration: qxgraphql.theme.Decoration,
      font: qxgraphql.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxgraphql.theme.Appearance
    }
  });
  qxgraphql.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map?dt=1626060594306