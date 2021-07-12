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
  
     Copyright: 2020 voger
  
     License: MIT license
  
     Authors: voger
  
  ************************************************************************ */
  qx.Theme.define("qxDateSelect.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxDateSelect.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Font.js.map?dt=1626060542454