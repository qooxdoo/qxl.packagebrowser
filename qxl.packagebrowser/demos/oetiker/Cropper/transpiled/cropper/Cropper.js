(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.MPlacement": {
        "require": true
      },
      "qx.ui.layout.Basic": {
        "construct": true
      },
      "qx.ui.core.Widget": {},
      "qx.ui.decoration.Decorator": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     Copyright:
       2009 OETIKER+PARTNER AG http://www.oetiker.ch
       
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tobias Oetiker (oetiker)
  
  ************************************************************************ */

  /**
   * Add cropping ability to any widget. When you click on the image
   * an overlay covers the image and you can select the area to crop.
   * When the crop area has been selected and cropSelected event is generated
   * reporting the size of the area.
   */
  qx.Class.define("cropper.Cropper", {
    extend: qx.ui.container.Composite,
    include: qx.ui.core.MPlacement,

    /**
     * @param target {Widget} The widget containing the croppable material
     */
    construct: function construct(target) {
      var layout = new qx.ui.layout.Basic();
      qx.ui.container.Composite.constructor.call(this, layout);
      this.__P_3_0 = target;
      var root = this.getApplicationRoot();
      this.set({
        zIndex: 1e7,
        visibility: 'hidden'
      });
      this.__P_3_1 = this.__P_3_2();
      root.add(this);
      target.addListener("mousedown", this.__P_3_3, this);
      this.addListener("mousemove", this.__P_3_4, this);
      this.addListener("losecapture", this.__P_3_5, this);
      root.addListener("keydown", this.__P_3_6, this);
      root.addListener("keyup", this.__P_3_7, this);
    },
    properties: {
      /** Should the cropping activate when the mounse is clicked on the image */
      cropActive: {
        check: 'Boolean',
        init: true
      },

      /** 
       * The widget supports three types of cropping.
       *
       * 'full' select an arbitrary area
       * 'x' select an area flexible in the x axis
       * 'y' select an area flexible in the y axis
       */
      cropType: {
        check: ['full', 'x', 'y'],
        init: 'full'
      },

      /** Left Padding of the corpping area */
      cropPaddingLeft: {
        check: 'Integer',
        init: 0
      },

      /** Right Padding of the corpping area */
      cropPaddingRight: {
        check: 'Integer',
        init: 0
      },

      /** Top Padding of the corpping area */
      cropPaddingTop: {
        check: 'Integer',
        init: 0
      },

      /** Bottom Padding of the corpping area */
      cropPaddingBottom: {
        check: 'Integer',
        init: 0
      },

      /** Left Margin of the corpping area */
      cropMarginLeft: {
        check: 'Integer',
        init: 0
      },

      /** Right Margin of the corpping area */
      cropMarginRight: {
        check: 'Integer',
        init: 0
      },

      /** Top Margin of the corpping area */
      cropMarginTop: {
        check: 'Integer',
        init: 0
      },

      /** Bottom Margin of the corpping area */
      cropMarginBottom: {
        check: 'Integer',
        init: 0
      }
    },
    events: {
      /**
       * Fired after the crop area has been selected. The passed data is a map containing the
       * left, top, width and height of the crop area relative to the padded area.
       */
      cropSelected: 'qx.event.type.Data'
    },
    members: {
      __P_3_8: null,
      __P_3_9: null,
      __P_3_0: null,
      __P_3_10: null,
      __P_3_11: null,
      __P_3_12: false,
      __P_3_13: null,
      __P_3_14: null,
      __P_3_15: null,
      __P_3_1: null,
      __P_3_16: null,
      __P_3_17: null,
      __P_3_18: null,
      __P_3_19: null,
      __P_3_20: null,
      __P_3_21: false,

      /**
       * Prepare the tiles for the croping widget and add them to the overlay
       *
       * @param overlay {container} container for the tiles
       * @return {tileMap} a map of tiles.
       */
      __P_3_2: function __P_3_2() {
        var t = {
          left: this.__P_3_22(),
          top: this.__P_3_22(),
          bottom: this.__P_3_22(),
          right: this.__P_3_22(),
          frame: this.__P_3_23()
        };

        for (var i in t) {
          this.add(t[i]);
        }

        return t;
      },

      /**
       * Update the position of the crop area
       * 
       * Corner coordinates
       *
       * @param x0 {Number} left
       * @param y0 {Number} top
       * @param x1 {Number} right
       * @param y1 {Number} bottom
       */
      __P_3_24: function __P_3_24(x0, y0, x1, y1) {
        var t = this.__P_3_1;

        function p(wg, l, t, w, h) {
          wg.setLayoutProperties({
            left: l,
            top: t
          });
          wg.set({
            width: w,
            height: h
          });
        }

        switch (this.__P_3_20) {
          case 'x':
            y0 = this.__P_3_18;
            y1 = this.__P_3_19;
            break;

          case 'y':
            x0 = this.__P_3_16;
            x1 = this.__P_3_17;
            break;
        }

        if (x0 > x1) {
          var x = x0;
          x0 = x1;
          x1 = x;
        }

        if (y0 > y1) {
          var y = y0;
          y0 = y1;
          y1 = y;
        }

        if (x1 > this.__P_3_17) {
          x1 = this.__P_3_17;
        }

        if (x0 < this.__P_3_16) {
          x0 = this.__P_3_16;
        }

        if (y1 > this.__P_3_19) {
          y1 = this.__P_3_19;
        }

        if (y0 < this.__P_3_18) {
          y0 = this.__P_3_18;
        }

        this.__P_3_11 = {
          top: y0,
          left: x0,
          width: x1 - x0,
          height: y1 - y0
        };
        p(t.left, 0, 0, x0, this.__P_3_9);
        p(t.right, x1, 0, this.__P_3_8 - x1, this.__P_3_9);
        p(t.top, x0, 0, x1 - x0, y0);
        p(t.bottom, x0, y1, x1 - x0, this.__P_3_9 - y1);
        p(t.frame, x0, y0, x1 - x0, y1 - y0);
      },

      /**
       * Create a tile
       *
       * @return {Widget} square and faire
       */
      __P_3_22: function __P_3_22() {
        var widget = new qx.ui.core.Widget().set({
          backgroundColor: '#000000',
          opacity: 0.2,
          allowGrowY: true,
          allowGrowX: true
        });
        return widget;
      },

      /**
       * Create the crop frame
       *
       * @return {Widget} a frame
       */
      __P_3_23: function __P_3_23() {
        var dotted = new qx.ui.decoration.Decorator().set({
          style: 'dotted',
          width: 1,
          color: 'rgba(0,0,0,0.5)'
        });
        var widget = new qx.ui.core.Widget().set({
          allowGrowY: true,
          allowGrowX: true,
          decorator: dotted
        });
        return widget;
      },
      __P_3_6: function __P_3_6(e) {
        if (!this.__P_3_12) {
          return;
        }

        ;

        if (e.getKeyIdentifier() == 'Space') {
          this.__P_3_21 = true;
        }

        ;
      },
      __P_3_7: function __P_3_7(e) {
        if (!this.__P_3_12) {
          return;
        }

        ;

        if (e.getKeyIdentifier() == 'Space') {
          this.__P_3_21 = false;
        }

        ;
      },

      /**
       * Show the croping overlay
       *
       * @param e {MouseEvent}
       */
      __P_3_3: function __P_3_3(e) {
        if (!this.getCropActive()) {
          return;
        }

        var location = this.getLayoutLocation(this.__P_3_0);
        this.__P_3_13 = location;
        location.left += this.getCropMarginLeft();
        location.top += this.getCropMarginTop();
        location.right -= this.getCropMarginRight();
        location.bottom -= this.getCropMarginBottom();
        this.__P_3_8 = location.right - location.left;
        this.__P_3_9 = location.bottom - location.top;
        this.__P_3_17 = this.__P_3_8 - this.getCropPaddingRight();
        this.__P_3_16 = this.getCropPaddingLeft();
        this.__P_3_18 = this.getCropPaddingTop();
        this.__P_3_19 = this.__P_3_9 - this.getCropPaddingBottom();
        this.__P_3_14 = e.getDocumentLeft() - location.left;
        this.__P_3_15 = e.getDocumentTop() - location.top;
        this.__P_3_20 = this.getCropType();

        if (this.__P_3_14 < this.__P_3_16 || this.__P_3_14 > this.__P_3_17 || this.__P_3_15 < this.__P_3_18 || this.__P_3_15 > this.__P_3_19) {
          return;
        }

        this.setLayoutProperties({
          top: location.top,
          left: location.left
        });

        this.__P_3_24(this.__P_3_14, this.__P_3_15, this.__P_3_14, this.__P_3_15);

        this.set({
          width: location.right - location.left,
          height: location.bottom - location.top,
          visibility: 'visible'
        });
        this.capture();
        this.__P_3_12 = true;
      },

      /**
       * Move the crop frame
       *
       * @param e {MouseEvent}
       */
      __P_3_4: function __P_3_4(e) {
        if (!this.__P_3_12) {
          return;
        }

        var location = this.__P_3_13;
        var x = e.getDocumentLeft() - location.left;
        var y = e.getDocumentTop() - location.top;

        if (this.__P_3_21) {
          this.__P_3_14 = x + (this.__P_3_14 < x ? -1 : 1) * this.__P_3_11.width;
          this.__P_3_15 = y + (this.__P_3_15 < y ? -1 : 1) * this.__P_3_11.height;
        }

        this.__P_3_24(this.__P_3_14, this.__P_3_15, x, y);
      },

      /**
       * End the croping and fire the cropSelected event.
       *
       * @param e {MouseEvent}
       */
      __P_3_5: function __P_3_5(e) {
        this.setVisibility('hidden');
        this.__P_3_12 = false;
        this.__P_3_21 = false;
        this.__P_3_11.left -= this.getCropPaddingLeft();
        this.__P_3_11.top -= this.getCropPaddingTop();
        this.__P_3_11.maxHeight = this.__P_3_19 - this.__P_3_18;
        this.__P_3_11.maxWidth = this.__P_3_17 - this.__P_3_16;
        this.fireDataEvent('cropSelected', this.__P_3_11);
      }
    }
  });
  cropper.Cropper.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Cropper.js.map?dt=1626056698515