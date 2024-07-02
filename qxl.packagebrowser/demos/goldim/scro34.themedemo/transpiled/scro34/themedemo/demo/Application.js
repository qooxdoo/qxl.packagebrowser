(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.Application": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2024 
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  /**
   * This is the main application class of "scro34.themedemo"
   */
  qx.Class.define("scro34.themedemo.demo.Application", {
    extend: scro34.themedemo.Application
  });
  scro34.themedemo.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
