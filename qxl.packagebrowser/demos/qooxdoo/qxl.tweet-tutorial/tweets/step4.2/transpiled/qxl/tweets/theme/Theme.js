(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.tweets.theme.Color": {
        "require": true
      },
      "qxl.tweets.theme.Decoration": {
        "require": true
      },
      "qxl.tweets.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxl.tweets.theme.Appearance": {
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

  qx.Theme.define("qxl.tweets.theme.Theme", {
    meta: {
      color: qxl.tweets.theme.Color,
      decoration: qxl.tweets.theme.Decoration,
      font: qxl.tweets.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxl.tweets.theme.Appearance
    }
  });
  qxl.tweets.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
