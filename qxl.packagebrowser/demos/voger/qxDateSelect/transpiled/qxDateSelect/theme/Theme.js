(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxDateSelect.theme.Color": {
        "require": true
      },
      "qxDateSelect.theme.Decoration": {
        "require": true
      },
      "qxDateSelect.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxDateSelect.theme.Appearance": {
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
  qx.Theme.define("qxDateSelect.theme.Theme", {
    meta: {
      color: qxDateSelect.theme.Color,
      decoration: qxDateSelect.theme.Decoration,
      font: qxDateSelect.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxDateSelect.theme.Appearance
    }
  });
  qxDateSelect.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map?dt=1626060539691