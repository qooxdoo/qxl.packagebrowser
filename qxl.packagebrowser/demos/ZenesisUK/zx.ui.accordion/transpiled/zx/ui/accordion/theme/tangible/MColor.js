(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
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

  qx.Theme.define("zx.ui.accordion.theme.tangible.MColor", {
    colors: {
      "accordion-panel-background": "surface",
      "accordion-minimap-content-background": "transparent",
      "accordion-minimap-floatybit-background": "primary",
      "accordion-minimap-tooltip-background": "surface",
      "accordion-minimap-skeleton-background": "primary"
    }
  });
  zx.ui.accordion.theme.tangible.MColor.$$dbClassInfo = $$dbClassInfo;
})();
