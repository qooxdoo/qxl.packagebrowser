(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "zx.ui.accordion.theme.MAppearance": {
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

  qx.Theme.define("zx.ui.accordion.theme.tangible.MAppearance", {
    extend: zx.ui.accordion.theme.MAppearance,
    appearances: {
      /*
      ---------------------------------------------------------------------------
        ACCORDION
      ---------------------------------------------------------------------------
      */
      "accordion-panel/header/icon": {
        style(states) {
          return {
            padding: [5, 0, 0, 0],
            source: states.open ? "@MaterialIcons/expand_less/32" : "@MaterialIcons/expand_more/32"
          };
        }
      }
    }
  });
  zx.ui.accordion.theme.tangible.MAppearance.$$dbClassInfo = $$dbClassInfo;
})();
