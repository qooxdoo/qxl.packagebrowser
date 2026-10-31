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
      "minesweeper.Timer": {
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

  qx.Class.define("minesweeper.Game", {
    extend: qx.core.Object,
    type: "singleton",
    construct: function construct() {
      // noinspection JSAnnotator
      qx.core.Object.constructor.call(this);
      this.__P_5_0 = new minesweeper.Timer();
    },
    properties: {
      minesLeft: {
        init: 0,
        check: "Integer",
        event: "changeMinesLeft"
      },
      difficulty: {
        init: "low",
        check: function check(value) {
          return minesweeper.Game.getDifficulties().includes(value);
        },
        event: "changeDifficulty",
        apply: "_applyDifficulty"
      },
      state: {
        init: "start",
        check: ["start", "over", "success"],
        event: "changeState",
        apply: "_applyState"
      }
    },
    statics: {
      DIFFICULTY_OPTIONS: {
        low: {
          mineCount: 10,
          colSize: 9,
          rowSize: 9
        },
        medium: {
          mineCount: 40,
          colSize: 16,
          rowSize: 16
        },
        hard: {
          mineCount: 99,
          colSize: 30,
          rowSize: 16
        }
      },
      getDifficulties: function getDifficulties() {
        return Object.keys(minesweeper.Game.DIFFICULTY_OPTIONS);
      }
    },
    members: {
      _applyState: function _applyState(state) {
        switch (state) {
          case "start":
            this.__P_5_0.start();
            break;
          case "over":
          case "success":
            this.setMinesLeft(0);
            this.__P_5_0.stop();
            break;
        }
      },
      _applyDifficulty: function _applyDifficulty() {
        this.setState("start");
        this.__P_5_0.start();
        this.__P_5_1();
      },
      __P_5_1: function __P_5_1() {
        this.setMinesLeft(this.getMineCount());
      },
      startNew: function startNew() {
        this.setState("over");
        this.setState("start");
        this.__P_5_1();
      },
      getMineCount: function getMineCount() {
        return this.__P_5_2("mineCount");
      },
      getColumnSize: function getColumnSize() {
        return this.__P_5_2("colSize");
      },
      getRowSize: function getRowSize() {
        return this.__P_5_2("rowSize");
      },
      __P_5_2: function __P_5_2(difficulty) {
        return this.constructor.DIFFICULTY_OPTIONS[this.getDifficulty()][difficulty];
      },
      decreaseSpottedMinesByOne: function decreaseSpottedMinesByOne() {
        this.setMinesLeft(this.getMinesLeft() + 1);
      },
      increaseSpottedMinesByOne: function increaseSpottedMinesByOne() {
        this.setMinesLeft(this.getMinesLeft() - 1);
      },
      getTimer: function getTimer() {
        return this.__P_5_0;
      }
    }
  });
  minesweeper.Game.$$dbClassInfo = $$dbClassInfo;
})();
