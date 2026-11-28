(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.simple.Appearance": {
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

  qx.Theme.define("qxl.tweets.theme.Appearance", {
    extend: qx.theme.simple.Appearance,
    appearances: {
      "tweet-view": {},
      "tweet-view/time": {
        style: function style() {
          return {
            textColor: "tweet-time"
          };
        }
      },
      toolbar: {
        style: function style() {
          return {
            backgroundColor: "window-border-inner"
          };
        }
      }
    }
  });
  qxl.tweets.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
