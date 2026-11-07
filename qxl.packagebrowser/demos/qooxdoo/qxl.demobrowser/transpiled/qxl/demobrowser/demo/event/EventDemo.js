(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Input": {},
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.Element": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * Native pointer events
   *
   * @tag noPlayground
   *
   * @use(qx.event.handler.Input)
   */
  qx.Class.define("qxl.demobrowser.demo.event.EventDemo", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.EventDemo.superclass.prototype.main.call(this);
        var btnClear = document.getElementById("btnClear");
        if (btnClear) {
          qx.bom.Element.addListener(btnClear, "tap", this._clearLog, this);
        }
      },
      _initLogger: function _initLogger(columns, el, maxLogSize) {
        this.__P_11_0 = "<table><tr><th>" + columns.join("</th><th>") + "</th></tr>";
        this.__P_11_1 = maxLogSize || 50;
        this.__P_11_2 = el;
        this._clearLog();
      },
      _clearLog: function _clearLog() {
        this.__P_11_2.innerHTML = this.__P_11_0 + "</table>";
        this.__P_11_3 = [];
      },
      _log: function _log(values) {
        this.__P_11_3.unshift(values);
        this.__P_11_3 = this.__P_11_3.slice(0, this.__P_11_1);
        var str = [this.__P_11_0];
        for (var i = 0; i < this.__P_11_3.length; i++) {
          str.push("<tr><td>", this.__P_11_3[i].join("</td><td>"), "</td></tr>");
        }
        str.push("</table>");
        this.__P_11_2.innerHTML = str.join("");
        this.__P_11_2.scrollTop = 0;
      },
      __P_11_0: null,
      __P_11_1: null,
      __P_11_2: null,
      __P_11_3: null
    },
    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this.__P_11_2 = this.__P_11_3 = null;
    }
  });
  qxl.demobrowser.demo.event.EventDemo.$$dbClassInfo = $$dbClassInfo;
})();
