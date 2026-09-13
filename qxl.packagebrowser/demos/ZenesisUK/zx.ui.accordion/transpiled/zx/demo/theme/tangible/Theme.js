(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "zx.demo.theme.tangible.Color": {
        "require": true
      },
      "zx.demo.theme.tangible.Decoration": {
        "require": true
      },
      "zx.demo.theme.tangible.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "zx.demo.theme.tangible.Appearance": {
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

  qx.Theme.define("zx.demo.theme.tangible.Theme", {
    meta: {
      color: zx.demo.theme.tangible.Color,
      decoration: zx.demo.theme.tangible.Decoration,
      font: zx.demo.theme.tangible.Font,
      icon: qx.theme.icon.Tango,
      appearance: zx.demo.theme.tangible.Appearance
    }
  });
  zx.demo.theme.tangible.Theme.$$dbClassInfo = $$dbClassInfo;
})();
