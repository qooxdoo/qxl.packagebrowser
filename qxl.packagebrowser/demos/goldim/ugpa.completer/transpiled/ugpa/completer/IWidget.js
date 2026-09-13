(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Interface": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Assert": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Interface.define("ugpa.completer.IWidget", {
    members: {
      getWidth: function getWidth() {},
      getValue: function getValue() {},
      setValue: function setValue(value) {
        qx.core.Assert.assertString(value);
      }
    }
  });
  ugpa.completer.IWidget.$$dbClassInfo = $$dbClassInfo;
})();
