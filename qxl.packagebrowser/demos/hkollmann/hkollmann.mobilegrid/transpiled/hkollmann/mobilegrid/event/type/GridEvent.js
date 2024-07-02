(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.type.Event": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo mobile grid
     https://github.com/hkollmann/hkollmann.mobilegrid
     
     Copyright:
       2018 Henner Kollmann (Henner.Kollmann@gmx.de)
  
     License:
       MIT: https://opensource.org/licenses/MIT
  
       This software is provided under the same licensing terms as Qooxdoo,
       please see the LICENSE file in the Qooxdoo project's top-level directory
       for details.
  
     Authors:
      Henner Kollmann (Henner.Kollmann@gmx.de)
  
  ************************************************************************ */
  /**
   *
   * @type GridEvent
   * special event type fired during grid creating.
   */
  qx.Class.define("hkollmann.mobilegrid.event.type.GridEvent", {
    extend: qx.event.type.Event,
    members: {
      init: function init(grid, DOMElement, row, col, canBubble) {
        hkollmann.mobilegrid.event.type.GridEvent.superclass.prototype.init.call(this, canBubble, false);
        this.__P_89_0 = row;
        this.__P_89_1 = col;
        this.__P_89_2 = grid;
        this.__P_89_3 = DOMElement;
        return this;
      },
      // override
      clone: function clone(embryo) {
        var clone = hkollmann.mobilegrid.event.type.GridEvent.superclass.prototype.clone.call(this, embryo);
        clone.__P_89_2 = this.__P_89_2;
        clone.__P_89_0 = this.__P_89_0;
        clone.__P_89_1 = this.__P_89_1;
        clone.__P_89_3 = this.__P_89_3;
        return clone;
      },
      getGrid: function getGrid() {
        return this.__P_89_2;
      },
      getDOMElement: function getDOMElement() {
        return this.__P_89_3;
      },
      getRow: function getRow() {
        return this.__P_89_0;
      },
      getCol: function getCol() {
        return this.__P_89_1;
      },
      __P_89_2: null,
      __P_89_0: null,
      __P_89_1: null,
      __P_89_3: null
    }
  });
  hkollmann.mobilegrid.event.type.GridEvent.$$dbClassInfo = $$dbClassInfo;
})();
