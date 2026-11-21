(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.tangible.Appearance": {
        "require": true
      },
      "zx.ui.accordion.theme.tangible.MAppearance": {
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

  qx.Theme.define("zx.demo.theme.tangible.Appearance", {
    extend: qx.theme.tangible.Appearance,
    include: [zx.ui.accordion.theme.tangible.MAppearance]
  });
  zx.demo.theme.tangible.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
