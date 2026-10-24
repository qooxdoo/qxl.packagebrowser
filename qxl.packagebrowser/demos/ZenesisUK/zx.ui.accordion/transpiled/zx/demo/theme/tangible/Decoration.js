(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.tangible.Decoration": {
        "require": true
      },
      "zx.ui.accordion.theme.tangible.MDecoration": {
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

  qx.Theme.define("zx.demo.theme.tangible.Decoration", {
    extend: qx.theme.tangible.Decoration,
    include: [zx.ui.accordion.theme.tangible.MDecoration]
  });
  zx.demo.theme.tangible.Decoration.$$dbClassInfo = $$dbClassInfo;
})();
