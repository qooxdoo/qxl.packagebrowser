(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.wireframe.Color": {
        "require": true
      },
      "ville.theme.wireframe.Decoration": {
        "require": true
      },
      "ville.theme.wireframe.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "ville.theme.wireframe.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright: sqville 2021
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (sqville) chris.eskew@sqville.com
  
  ************************************************************************ */
  qx.Theme.define("ville.theme.Wireframe", {
    meta: {
      color: ville.theme.wireframe.Color,
      decoration: ville.theme.wireframe.Decoration,
      font: ville.theme.wireframe.Font,
      icon: qx.theme.icon.Tango,
      appearance: ville.theme.wireframe.Appearance
    }
  });
  ville.theme.Wireframe.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Wireframe.js.map?dt=1626060463242