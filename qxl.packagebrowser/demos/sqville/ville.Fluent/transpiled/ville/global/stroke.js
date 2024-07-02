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
  qx.Class.define("ville.global.stroke", {
    type: "static",
    statics: {
      widths: {
        Thin: 1,
        Thick: 2,
        Thicker: 3,
        Thickest: 4
      }
    }
  });
  ville.global.stroke.$$dbClassInfo = $$dbClassInfo;
})();
