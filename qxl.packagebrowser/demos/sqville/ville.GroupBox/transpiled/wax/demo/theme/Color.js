(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Color": {
        "require": true
      },
      "qx.bom.client.Css": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "css.rgba": {
          "load": true,
          "className": "qx.bom.client.Css"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  qx.Theme.define("wax.demo.theme.Color", {
    extend: qx.theme.indigo.Color,
    colors: {
      // overriden
      "table-row-background-selected": "#A9A9A9",
      "table-row-background-focused-selected": "#A9A9A9",
      //SQ New
      "progressbar-base": qx.core.Environment.get("css.rgba") ? "rgba(229, 229, 229, 1)" : "#E5E5E5",
      "progressbar-gray": qx.core.Environment.get("css.rgba") ? "rgba(136, 136, 136, 1)" : "#888888",
      "progressbar-complete": qx.core.Environment.get("css.rgba") ? "rgba(33, 186, 69, 1)" : "#21BA45",
      "progressbar-warning": qx.core.Environment.get("css.rgba") ? "rgba(242, 192, 55, 1)" : "#F2C037",
      "progressbar-error": qx.core.Environment.get("css.rgba") ? "rgba(219, 40, 40, 1)" : "#DB2828"
    }
  });
  wax.demo.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
