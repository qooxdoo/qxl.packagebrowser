(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.cellrenderer.Abstract": {
        "construct": true,
        "require": true
      },
      "qx.dom.Element": {},
      "qx.bom.element.Dimension": {},
      "qx.lang.Type": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2010 OETIKER+PARTNER AG, http://www.oetiker.ch
       
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tobias Oetiker (oetiker)
  
  ************************************************************************ */
  // Utf8Check: äöü

  /*
   * #asset(excanvas/*.js)
   */

  /**
   * The canvas cell renderer allows to put little little drawings into the
   * cell.  the tricky bit about this is, that the cellrenderer does not
   * actualy put stuff into the DOM, but just returns html fragments. The
   * trick here is that we wait for a signal from the table model as to when it
   * has stuck the html into the DOM. Then we go out, find the relevant DOM
   * elements and apply the drawing operations.
   */

  qx.Class.define("canvascell.Renderer", {
    extend: qx.ui.table.cellrenderer.Abstract,
    /**
     * the Canvas renderer requires a plot object
     * defining how to draw the content of the cell
     * @param plotterObj {Plotter} instance of a plotter object    
     */
    construct: function construct(plotterObj) {
      qx.ui.table.cellrenderer.Abstract.constructor.call(this);
      this.__P_7_0 = [];
      this.__P_7_1 = plotterObj;
      this.__P_7_2 = {};
    },
    statics: {
      __P_7_3: 0
    },
    members: {
      __P_7_0: null,
      __P_7_1: null,
      __P_7_2: null,
      __P_7_4: true,
      __P_7_5: null,
      /**
       * the heart of the cell renderer. here it creates a bit of html
       * to be stuck into the cell, rendering its content.
       *
       * @param cellInfo {Map} all about the cells content
       * @return {String} the html
       */
      _getContentHtml: function _getContentHtml(cellInfo) {
        if (this.__P_7_4) {
          this.__P_7_6(cellInfo.table);
          this.__P_7_4 = false;
        }
        canvascell.Renderer.__P_7_3++;
        var id = 'canvascell.Renderer.' + canvascell.Renderer.__P_7_3.toString(36);
        this.__P_7_0.push({
          id: id,
          cellInfo: {
            value: cellInfo.value,
            row: cellInfo.row,
            col: cellInfo.col,
            rowData: cellInfo.rowData
          }
        });
        return '<canvas id="' + id + '"></canvas>';
      },
      /**
       * attach to the table as soon as the first cell is renderd.
       *
       * @param table {var} table
       * @return {void} 
       */
      __P_7_6: function __P_7_6(table) {
        var pane = this.__P_7_5 = table.getPaneScroller(0).getTablePane();
        pane.addListener("paneUpdated", this.__P_7_7, this);
      },
      /**
       * Update the canvas elements
       *
       * @return {void} 
       */
      __P_7_7: function __P_7_7() {
        var entry;
        var w;
        var h;
        var ql = this.__P_7_0.length;
        var elCache = this.__P_7_2;
        for (var i = 0; i < ql; i++) {
          var entry = this.__P_7_0[i];
          var el = document.getElementById(entry.id);
          if (el) {
            if (elCache[entry.id]) {
              qx.dom.Element.replaceChild(elCache[entry.id].el, el);
              continue;
            }

            /* with IE and excanvas, we have to
               add the missing methods to the canvas element first
               since the initial loading of excanvas only catches
               elements from the original html */

            if (!el.getContext && window.G_vmlCanvasManager) {
              window.G_vmlCanvasManager.initElement(el);
            }

            /* do we have a canvas context now ? */

            if (el.getContext) {
              var ctx = el.getContext('2d');
              if (ctx) {
                if (w == undefined) {
                  var par = qx.dom.Element.getParentElement(el);
                  var size = qx.bom.element.Dimension.getContentSize(par);
                  w = size.width;
                  h = size.height;
                }
                el.width = w;
                el.height = h;
                if (this.__P_7_1.plot(ctx, entry.cellInfo, w, h)) {
                  this.__P_7_8();
                }
                elCache[entry.id] = {
                  el: el,
                  cellInfo: entry.cellInfo,
                  w: w,
                  h: h
                };
              }
            }
          }
        }
      },
      /**
       * redraw canvas cells
       *
       * @return {void} 
       */
      __P_7_8: function __P_7_8() {
        for (var id in this.__P_7_2) {
          var c = this.__P_7_2[id];
          if (qx.dom.Element.getParentElement(c.el)) {
            var ctx = c.el.getContext('2d');
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, c.w, c.h);
            ctx.restore();
            this.__P_7_1.plot(ctx, c.cellInfo, c.w, c.h);
          }
        }
      },
      /**
       * reset the plotter
       *
       * @return {void} 
       */
      reset: function reset() {
        this.__P_7_1.reset();
        this.__P_7_2 = {};
      }
    },
    destruct: function destruct() {
      // Remove event handlers
      if (qx.lang.Type.isObject(this.__P_7_5)) {
        this.__P_7_5.addListener("paneUpdated", this.__P_7_7, this);
      }
    }
  });
  canvascell.Renderer.$$dbClassInfo = $$dbClassInfo;
})();
