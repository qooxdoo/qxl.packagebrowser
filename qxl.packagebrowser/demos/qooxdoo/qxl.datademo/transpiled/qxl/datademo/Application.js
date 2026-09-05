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
      "qxl.datademo.Demo": {}
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

  qx.Class.define("qxl.datademo.Application", {
    extend: qx.application.Standalone,
    members: {
      __P_2_0: null,
      main: function main() {
        qxl.datademo.Application.superclass.prototype.main.call(this);
        this.getRoot().add(new qxl.datademo.Demo());
      }
    }
  });
  qxl.datademo.Application.$$dbClassInfo = $$dbClassInfo;
})();
