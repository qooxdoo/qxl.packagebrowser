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
  qx.Class.define("ville.global.font.weight", {
    type: "static",
    statics: {
      Regular: "400",
      Medium: "500",
      Semibold: "600",
      Bold: "700"
    }
  });
  ville.global.font.weight.$$dbClassInfo = $$dbClassInfo;
})();
