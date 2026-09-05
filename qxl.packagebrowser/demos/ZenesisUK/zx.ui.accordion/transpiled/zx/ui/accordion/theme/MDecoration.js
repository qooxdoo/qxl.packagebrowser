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

  qx.Theme.define("zx.ui.accordion.theme.MDecoration", {
    decorations: {
      /*
        ---------------------------------------------------------------------------
          ACCORDION
        ---------------------------------------------------------------------------
      */

      "accordion-panel-header": {
        include: "button-box",
        style: {
          width: 1
        }
      },
      "accordion-minimap-panel-header": {
        include: "accordion-panel-header",
        style: {
          radius: [0, 0, 0, 0]
        }
      },
      "accordion-minimap": {
        style: {
          radius: 0,
          shadowVerticalLength: [2, 4, 1],
          shadowBlurRadius: [4, 5, 10],
          shadowSpreadRadius: [-1, 0, 0],
          shadowHorizontalLength: 0,
          shadowColor: ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.14)", "rgba(0, 0, 0, 0.12)"]
        }
      },
      "accordion-minimap-tooltip": {
        style: {
          radius: 10,
          shadowVerticalLength: [2, 4, 1],
          shadowBlurRadius: [4, 5, 10],
          shadowSpreadRadius: [-1, 0, 0],
          shadowHorizontalLength: 0,
          shadowColor: ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.14)", "rgba(0, 0, 0, 0.12)"]
        }
      }
    }
  });
  zx.ui.accordion.theme.MDecoration.$$dbClassInfo = $$dbClassInfo;
})();
