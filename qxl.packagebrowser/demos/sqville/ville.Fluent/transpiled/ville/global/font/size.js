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
  qx.Class.define("ville.global.font.size", {
    type: "static",
    statics: {
      Base100: 10,
      Base200: 12,
      Base300: 14,
      Base400: 16,
      Base500: 20,
      Base600: 24,
      Hero700: 28,
      Hero800: 32,
      Hero900: 40,
      Hero1000: 68
    }
  });
  ville.global.font.size.$$dbClassInfo = $$dbClassInfo;
})();
