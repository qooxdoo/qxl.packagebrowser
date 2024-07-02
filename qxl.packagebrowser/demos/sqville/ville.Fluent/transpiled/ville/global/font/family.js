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
  qx.Class.define("ville.global.font.family", {
    type: "static",
    statics: {
      "Base": ["Segoe UI", "Segoe UI Web (West European)", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "sans-serif"],
      "Monospace": ["Consolas", "Courier New", "Courier", "monospace"],
      "Numeric": ["Bahnschrift", "Segoe UI", "Segoe UI Web (West European)", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "sans-serif"]
    }
  });
  ville.global.font.family.$$dbClassInfo = $$dbClassInfo;
})();
