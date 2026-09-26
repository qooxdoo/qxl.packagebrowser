(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.audioplayer.theme.Color": {
        "require": true
      },
      "scro34.audioplayer.theme.Decoration": {
        "require": true
      },
      "scro34.audioplayer.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Oxygen": {
        "require": true
      },
      "scro34.audioplayer.theme.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2024 undefined
  
     License: MIT license
  
     Authors: undefined
  
  ************************************************************************ */

  qx.Theme.define("scro34.audioplayer.theme.Theme", {
    meta: {
      color: scro34.audioplayer.theme.Color,
      decoration: scro34.audioplayer.theme.Decoration,
      font: scro34.audioplayer.theme.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: scro34.audioplayer.theme.Appearance
    }
  });
  scro34.audioplayer.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
