(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.simple.Color": {
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

  qx.Theme.define("qxl.tweets.theme.Color", {
    extend: qx.theme.simple.Color,
    colors: {
      "tweet-time": "#E0E0E0"
    }
  });
  qxl.tweets.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
