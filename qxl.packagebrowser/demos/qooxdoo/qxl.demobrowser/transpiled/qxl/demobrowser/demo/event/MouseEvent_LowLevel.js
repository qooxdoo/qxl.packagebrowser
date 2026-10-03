(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.event.EventDemo": {
        "require": true
      },
      "qx.lang.Function": {},
      "qx.bom.Event": {}
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
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * Native mouse events
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.event.MouseEvent_LowLevel", {
    extend: qxl.demobrowser.demo.event.EventDemo,
    members: {
      __P_13_0: null,
      main: function main() {
        qxl.demobrowser.demo.event.MouseEvent_LowLevel.superclass.prototype.main.call(this);
        this.__P_13_0 = qx.lang.Function.bind(this.logMouseEvent, this);
        this._initLogger(["Target", "Event", "button", "clientX", "clientY", "screenX", "screenY", "relatedTarget"], document.getElementById("logger"), 50);
        var mouseDiv = document.getElementById("mouse");
        var events = ["mousedown", "mouseup", "click", "dblclick", "contextmenu", "mousemove", "mouseover", "mouseout"];
        for (var i = 0; i < events.length; i++) {
          var elem = document.getElementById("check_" + events[i]);
          if (elem.checked) {
            qx.bom.Event.addNativeListener(mouseDiv, events[i], this.__P_13_0);
          }
          qx.bom.Event.addNativeListener(elem, "change", qx.lang.Function.bind(this.__P_13_1, this));
        }
      },
      __P_13_1: function __P_13_1(e) {
        var target = qx.bom.Event.getTarget(e);
        var type = target.id.split("_")[1];
        var checked = target.checked;
        var mouseDiv = document.getElementById("mouse");
        if (checked) {
          qx.bom.Event.addNativeListener(mouseDiv, type, this.__P_13_0);
        } else {
          qx.bom.Event.removeNativeListener(mouseDiv, type, this.__P_13_0);
        }
      },
      logMouseEvent: function logMouseEvent(mouseEvent) {
        qx.bom.Event.preventDefault(mouseEvent);
        this._log([qx.bom.Event.getTarget(mouseEvent).id, mouseEvent.type, mouseEvent.button, mouseEvent.clientX, mouseEvent.clientY, mouseEvent.screenX, mouseEvent.screenY, qx.bom.Event.getRelatedTarget(mouseEvent) ? qx.bom.Event.getRelatedTarget(mouseEvent).id : ""]);
      }
    }
  });
  qxl.demobrowser.demo.event.MouseEvent_LowLevel.$$dbClassInfo = $$dbClassInfo;
})();
