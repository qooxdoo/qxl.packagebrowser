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
      }
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

  /**
   * Plotter Plugin for the Canvas cellrenderer.
   * This Plugin draws a bar based on the value of the cell.
   */

  qx.Class.define("canvascell.plotter.Bar", {
    extend: qx.core.Object,
    /**
     * Instanciate the plotter
     *
     * @param cfg {Map} configuration map
     * 
     * <pre class='javascript'>
     * cfg = {
     *    fill:   '#color',
     *    border: '#color',
    *    fillText: {
    *      font: '#font',
    *      fill: '#color'
    *    }
     *    max: number 
     * };
     * </pre>
     */
    construct: function construct(cfg) {
      qx.core.Object.constructor.call(this);
      this.__P_8_0 = cfg;
      this.reset();
    },
    members: {
      __P_8_0: null,
      __P_8_1: null,
      /**
       * Plot the Bar
       *
       * @param c {var} canvas drawing context
       * @param cellInfo {var} cellInfo from cellrender
       * @param w {var} canvas width
       * @param h {Map} canvas height
       * @return {boolean} should the other cells be redrawn because the scaling has changed?
       */
      plot: function plot(c, cellInfo, w, h) {
        var d = cellInfo.value || 0.00;
        var redraw = false;
        if (isNaN(d)) {
          return false;
        }
        var cfg = this.__P_8_0;
        if (d > this.__P_8_1) {
          this.__P_8_1 = d;
          redraw = true;
        }
        if (this.__P_8_1 == 0) {
          return false;
        }
        var bar = Math.round(d * (w - 4) / this.__P_8_1);
        c.strokeWidth = 0.5;
        c.fillStyle = cfg.fill;
        c.strokeStyle = cfg.border;
        c.fillRect(0.5, 2.5, bar, h - 6);
        c.strokeRect(0.5, 2.5, cfg.max ? w - 4 : bar, h - 6);
        if (cfg.fillText) {
          c.font = cfg.fillText.font;
          c.fillStyle = cfg.fillText.fill;
          c.fillText(d + "%", w / 3, h - 6);
        }
        return redraw;
      },
      /**
       * reset any context data stored inside the plotter
       */
      reset: function reset() {
        if (this.__P_8_0.max) {
          this.__P_8_1 = this.__P_8_0.max;
        } else {
          this.__P_8_1 = 0;
        }
      }
    }
  });
  canvascell.plotter.Bar.$$dbClassInfo = $$dbClassInfo;
})();
