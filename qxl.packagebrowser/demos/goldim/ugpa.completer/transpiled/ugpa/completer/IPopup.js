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

  qx.Interface.define("ugpa.completer.IPopup", {
    members: {
      show: function show() {},
      hide: function hide() {},
      isVisible: function isVisible() {},
      setWidth: function setWidth(width) {
        qx.core.Assert.assertNumber(width);
      },
      placeToWidget: function placeToWidget() {}
    }
  });
  ugpa.completer.IPopup.$$dbClassInfo = $$dbClassInfo;
})();
