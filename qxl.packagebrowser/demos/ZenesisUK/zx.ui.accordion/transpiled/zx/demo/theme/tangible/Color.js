(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.tangible.ColorLight": {
        "require": true
      },
      "zx.ui.accordion.theme.tangible.MColor": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  qx.Theme.define("zx.demo.theme.tangible.Color", {
    extend: qx.theme.tangible.ColorLight,
    include: [zx.ui.accordion.theme.tangible.MColor]
  });
  zx.demo.theme.tangible.Color.$$dbClassInfo = $$dbClassInfo;
})();
