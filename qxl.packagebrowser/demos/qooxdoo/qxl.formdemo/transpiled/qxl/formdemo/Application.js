(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qxl.formdemo.FormItems": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  qx.Class.define("qxl.formdemo.Application", {
    extend: qx.application.Standalone,
    members: {
      __P_2_0: null,
      main: function main() {
        qxl.formdemo.Application.superclass.prototype.main.call(this);
        this.__P_2_0 = new qxl.formdemo.FormItems();
        this.getRoot().add(this.__P_2_0);
      }
    },
    destruct: function destruct() {
      this.__P_2_0.destroy();
    }
  });
  qxl.formdemo.Application.$$dbClassInfo = $$dbClassInfo;
})();
