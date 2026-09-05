(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.tangible.Font": {
        "require": true
      },
      "zx.ui.accordion.theme.MFont": {
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

  qx.Theme.define("zx.demo.theme.tangible.Font", {
    extend: qx.theme.tangible.Font,
    include: [zx.ui.accordion.theme.MFont]
  });
  zx.demo.theme.tangible.Font.$$dbClassInfo = $$dbClassInfo;
})();
