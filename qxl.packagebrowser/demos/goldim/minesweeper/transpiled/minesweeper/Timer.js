(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.Timer": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("minesweeper.Timer", {
    extend: qx.core.Object,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.core.Object.constructor.call(this);
      this.__P_23_0 = new qx.event.Timer(1000);
      this.__P_23_0.addListener("interval", this.__P_23_1, this);
    },
    destruct: function destruct() {
      this.__P_23_0.stop();
      this.__P_23_0.dispose();
    },
    properties: {
      time: {
        init: 0,
        check: "Integer",
        event: "changeTime"
      }
    },
    members: {
      __P_23_1: function __P_23_1() {
        this.setTime(this.getTime() + 1);
      },
      start: function start() {
        this.resetTime();
        this.__P_23_0.start();
      },
      stop: function stop() {
        this.__P_23_0.stop();
      }
    }
  });
  minesweeper.Timer.$$dbClassInfo = $$dbClassInfo;
})();
