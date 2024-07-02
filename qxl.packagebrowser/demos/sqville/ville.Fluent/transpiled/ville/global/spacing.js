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
  qx.Class.define("ville.global.spacing", {
    type: "static",
    statics: {
      None: 0,
      XXS: 2,
      XS: 4,
      SNudge: 6,
      S: 8,
      MNudge: 10,
      M: 12,
      L: 16,
      XL: 20,
      XXL: 24,
      XXXL: 32
    }
  });
  ville.global.spacing.$$dbClassInfo = $$dbClassInfo;
})();
