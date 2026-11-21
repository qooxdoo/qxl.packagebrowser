(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Decoration": {
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

  qx.Theme.define("qxl.tweets.theme.Decoration", {
    extend: qx.theme.indigo.Decoration,
    decorations: {}
  });
  qxl.tweets.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();
