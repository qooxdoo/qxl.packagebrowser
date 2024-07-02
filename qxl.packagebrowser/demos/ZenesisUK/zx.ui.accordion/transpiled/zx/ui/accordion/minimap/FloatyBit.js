(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.core.Init": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * The floaty bit over the {@link zx.ui.accordion.minimap.Minicordion}.
   */
  qx.Class.define("zx.ui.accordion.minimap.FloatyBit", {
    extend: qx.ui.core.Widget,
    construct() {
      qx.ui.core.Widget.constructor.call(this);
      qx.core.Init.getApplication().getRoot().addListener("pointerdown", this._onPointerDown, this);
      qx.core.Init.getApplication().getRoot().addListener("pointerup", this._onPointerUp, this);
      qx.core.Init.getApplication().getRoot().addListener("pointermove", this._onPointerMove, this);
    },
    events: {
      /**
       * Fired when the user scrolls using the floaty bit.
       */
      scrollToFraction: "qx.event.type.Data"
    },
    members: {
      /**
       * Scrolls the floaty bit to the given fraction.
       *
       * The fraction is some integer between 0 and 1, inclusive, which represents
       * how far down the content is scrolled. 0 is the top, 1 is the bottom.
       * This is used as the minimap's height will change frequently in normal
       * use.
       *
       * @param {number} fraction The fraction to scroll to.
       */
      scrollToFraction(fraction) {
        this._scrollToPosition(fraction, true);
      },
      /**
       * Intended for use only on the {@link zx.ui.accordion.minimap.Minicordion}
       * this floaty bit belongs to.
       *
       * Moves the floaty bit vertically and fires the `scrollToFraction` event.
       */
      onWheelRoll(e) {
        if (e.getPointerType() !== "wheel") return;
        const delta = e.getDelta().y;
        let top = this.getBounds().top + (delta > 0 ? 25 : -25);
        this._scrollToPosition(top);
        e.stop();
      },
      /**
       * @type {number}
       */
      __P_67_0: null,
      /**
       * @type {number}
       */
      __P_67_1: null,
      /**
       * Starts tracking cursor motion.
       */
      _onPointerDown(e) {
        if (e.getTarget() !== this) return;
        this.__P_67_0 = e.getDocumentTop();
        this.__P_67_1 = this.getBounds().top;
      },
      /**
       * Stops tracking cursor motion.
       */
      _onPointerUp() {
        this.__P_67_0 = null;
        this.__P_67_1 = null;
      },
      /**
       * Tracks cursor motion at any time after {@link #_onPointerDown} and before
       * the subsequent {@link #_onPointerUp} and scrolls the floaty bit
       * accordingly.
       */
      _onPointerMove(e) {
        if (this.__P_67_0 === null || this.__P_67_1 === null) return;
        const coord = e.getDocumentTop();
        const delta = coord - this.__P_67_0;
        const top = this.__P_67_1 + delta;
        this._scrollToPosition(top);
      },
      /**
       * Scrolls the floaty bit to the given position.
       *
       * If fraction is `true`, the position is interpreted as a fraction of the
       * maximum scrollable height. Otherwise, it is interpreted as an exact
       * position. Positions are clamped between 0 and the maximum scrollable
       * height.
       *
       * @param {number} position The position to scroll to.
       * @param {boolean} [fraction] Whether the position is a fraction.
       */
      _scrollToPosition(position, fraction = false) {
        const maxTop = this.getLayoutParent().getChildControl("content").getBounds().height - this.getBounds().height;
        if (fraction) position *= maxTop;
        const top = ~~Math.max(0, Math.min(position, maxTop));
        this.setLayoutProperties({
          top
        });
        this.fireDataEvent("scrollToFraction", top / maxTop);
      }
    }
  });
  zx.ui.accordion.minimap.FloatyBit.$$dbClassInfo = $$dbClassInfo;
})();
