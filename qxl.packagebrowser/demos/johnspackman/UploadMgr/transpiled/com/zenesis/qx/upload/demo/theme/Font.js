(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.modern.Font": {
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

  qx.Theme.define("com.zenesis.qx.upload.demo.theme.Font", {
    extend: qx.theme.modern.Font,
    fonts: {}
  });
  com.zenesis.qx.upload.demo.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
