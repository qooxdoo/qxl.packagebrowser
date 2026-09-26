(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.modern.Color": {
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

  qx.Theme.define("com.zenesis.qx.upload.demo.theme.Color", {
    extend: qx.theme.modern.Color,
    colors: {}
  });
  com.zenesis.qx.upload.demo.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
