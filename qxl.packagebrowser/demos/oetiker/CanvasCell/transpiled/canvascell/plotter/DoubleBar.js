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
   * This Plugin draws two bars. It expects to find a array with two values in the cell.
   */

  qx.Class.define("canvascell.plotter.DoubleBar", {
    extend: qx.core.Object,
    /**
     * Instanciate the plotter
     *
     * @param cfg {Map} configuration map
     * 
     * <pre class='javascript'>
     * cfg = {
     *    upFill:   '#color',
     *    upBorder: '#color' 
     *    downFill:   '#color',
     *    downBorder: '#color' 
     * };
     * </pre>
     */
    construct: function construct(cfg) {
      qx.core.Object.constructor.call(this);
      this.__P_12_0 = cfg;
      this.reset();
    },
    members: {
      __P_12_0: null,
      __P_12_1: null,
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
        var d = cellInfo.value;
        var redraw = false;
        for (var i = 0; i < 2; i++) {
          if (d[i] > this.__P_12_1) {
            this.__P_12_1 = d[i];
            redraw = true;
          }
          if (this.__P_12_1 == 0) {
            return false;
          }
        }
        var cfg = this.__P_12_0;
        var hr = Math.round(h / 2 - 2);
        c.strokeWidth = 0.5;
        var upWidth = Math.round(d[0] * (w - 4) / this.__P_12_1);
        c.fillStyle = cfg.upFill;
        c.strokeStyle = cfg.upBorder;
        c.fillRect(0.5, 2.5, upWidth, hr - 2);
        c.strokeRect(0.5, 2.5, upWidth, hr - 2);
        var downWidth = Math.round(d[1] * (w - 4) / this.__P_12_1);
        c.fillStyle = cfg.downFill;
        c.strokeStyle = cfg.downBorder;
        c.fillRect(0.5, hr + 2.5, downWidth, hr - 2);
        c.strokeRect(0.5, hr + 2.5, downWidth, hr - 2);
        return redraw;
      },
      /**
       * reset any context data stored inside the plotter
       */
      reset: function reset() {
        this.__P_12_1 = 0;
      }
    }
  });
  canvascell.plotter.DoubleBar.$$dbClassInfo = $$dbClassInfo;
})();
