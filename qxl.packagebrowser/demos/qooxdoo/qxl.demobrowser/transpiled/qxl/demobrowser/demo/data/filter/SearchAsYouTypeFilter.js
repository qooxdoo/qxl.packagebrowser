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
      "qx.lang.Function": {
        "construct": true
      },
      "qx.util.TimerManager": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.data.filter.SearchAsYouTypeFilter", {
    extend: qx.core.Object,
    construct: function construct(controller) {
      qx.core.Object.constructor.call(this);
      // store the controller
      this.__P_10_0 = controller;

      // apply the filter funtion on creation time because the 'this' context
      // needs to be bound to the function
      this.filter = qx.lang.Function.bind(function (data) {
        return data.search(this.getSearchString()) != -1;
      }, this);

      // storage for the timer id
      this.__P_10_1 = null;
    },
    properties: {
      searchString: {
        check: "String",
        apply: "_applySearchString",
        init: ""
      }
    },
    members: {
      __P_10_1: null,
      __P_10_0: null,
      _applySearchString: function _applySearchString(value, old) {
        // get the timer instance
        var timer = qx.util.TimerManager.getInstance();
        // check for the old listener
        if (this.__P_10_1 != null) {
          // stop the old one
          timer.stop(this.__P_10_1);
          this.__P_10_1 = null;
        }
        // start a new listener to update the controller
        this.__P_10_1 = timer.start(function () {
          this.__P_10_0.update();
          this.__P_10_1 = null;
        }, 0, this, null, 200);
      },
      filter: null
    },
    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this.__P_10_0 = null;
    }
  });
  qxl.demobrowser.demo.data.filter.SearchAsYouTypeFilter.$$dbClassInfo = $$dbClassInfo;
})();
