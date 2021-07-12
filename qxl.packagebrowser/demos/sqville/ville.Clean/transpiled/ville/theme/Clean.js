(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.clean.Color": {
        "require": true
      },
      "ville.theme.clean.Decoration": {
        "require": true
      },
      "ville.theme.clean.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "ville.theme.clean.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     SQville Software
  
     http://sqville.com
  
     Copyright:
       None
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (chris.eskew@sqville.com)
  
  ************************************************************************ */
  qx.Theme.define("ville.theme.Clean", {
    meta: {
      color: ville.theme.clean.Color,
      decoration: ville.theme.clean.Decoration,
      font: ville.theme.clean.Font,
      icon: qx.theme.icon.Tango,
      appearance: ville.theme.clean.Appearance
    }
  });
  ville.theme.Clean.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Clean.js.map?dt=1626060264637