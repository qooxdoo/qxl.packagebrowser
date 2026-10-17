(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Font": {
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

  qx.Theme.define("qxl.tweets.theme.Font", {
    extend: qx.theme.indigo.Font,
    fonts: {}
  });
  qxl.tweets.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();
