(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "com.zenesis.qx.upload.demo.theme.Color": {
        "require": true
      },
      "com.zenesis.qx.upload.demo.theme.Decoration": {
        "require": true
      },
      "com.zenesis.qx.upload.demo.theme.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "com.zenesis.qx.upload.demo.theme.Appearance": {
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

  qx.Theme.define("com.zenesis.qx.upload.demo.theme.Theme", {
    meta: {
      color: com.zenesis.qx.upload.demo.theme.Color,
      decoration: com.zenesis.qx.upload.demo.theme.Decoration,
      font: com.zenesis.qx.upload.demo.theme.Font,
      icon: qx.theme.icon.Tango,
      appearance: com.zenesis.qx.upload.demo.theme.Appearance
    }
  });
  com.zenesis.qx.upload.demo.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();
