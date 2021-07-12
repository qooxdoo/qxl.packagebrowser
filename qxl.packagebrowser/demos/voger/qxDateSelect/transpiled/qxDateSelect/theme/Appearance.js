(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
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
  qx.Theme.define("qxDateSelect.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {
      "qx-date-select": {
        // include: "widget",
        alias: "widget",
        style: function style(states) {
          var decorator = "qx-date-select";

          if (states.invalid && !states.disabled) {
            decorator += "-invalid";
          }

          return {
            decorator: decorator,
            padding: 2
          };
        }
      },
      "qx-date-select/day": "virtual-selectbox",
      "qx-date-select/month": "virtual-selectbox",
      "qx-date-select/year": "virtual-selectbox"
    }
  });
  qxDateSelect.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map?dt=1626060542517