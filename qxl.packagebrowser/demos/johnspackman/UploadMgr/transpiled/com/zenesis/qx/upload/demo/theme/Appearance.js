(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.modern.Appearance": {
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

  qx.Theme.define("com.zenesis.qx.upload.demo.theme.Appearance", {
    extend: qx.theme.modern.Appearance,
    appearances: {}
  });
  com.zenesis.qx.upload.demo.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
