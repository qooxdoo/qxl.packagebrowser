(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     SQville
  
     Copyright:
       None
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (sqville@gmail.com)
  
  ************************************************************************ */
  /* ************************************************************************
  
  
  ************************************************************************* */
  /**
   * 
   */
  qx.Class.define("ville.global.border.radius", {
    type: "static",
    statics: {
      None: 0,
      Small: 2,
      Medium: 4,
      Large: 6,
      XLarge: 8,
      Circular: 10000
    }
  });
  ville.global.border.radius.$$dbClassInfo = $$dbClassInfo;
})();
