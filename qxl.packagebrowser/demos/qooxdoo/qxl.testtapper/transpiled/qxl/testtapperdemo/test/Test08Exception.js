(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestCase": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.testtapperdemo.test.Test08Exception", {
    extend: qx.dev.unit.TestCase,
    members: {
      "test01: die baby die": function test01_die_baby_die() {
        this.callUnknownFunction();
      }
    }
  });
  qxl.testtapperdemo.test.Test08Exception.$$dbClassInfo = $$dbClassInfo;
})();
