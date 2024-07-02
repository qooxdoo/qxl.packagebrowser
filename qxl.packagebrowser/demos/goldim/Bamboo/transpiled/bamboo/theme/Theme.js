(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "bamboo.theme.Appearance": {
        "require": true
      },
      "bamboo.theme.Decoration": {
        "require": true
      },
      "bamboo.theme.Color": {
        "require": true
      },
      "bamboo.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  qx.Theme.define("bamboo.theme.Theme", {
    meta: {
      appearance: bamboo.theme.Appearance,
      decoration: bamboo.theme.Decoration,
      color: bamboo.theme.Color,
      font: bamboo.theme.Font,
      icon: qx.theme.icon.Oxygen
    }
  });
  bamboo.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
