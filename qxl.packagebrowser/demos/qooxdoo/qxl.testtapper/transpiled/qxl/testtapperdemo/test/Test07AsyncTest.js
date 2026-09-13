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
  qx.Class.define("qxl.testtapperdemo.test.Test07AsyncTest", {
    extend: qx.dev.unit.TestCase,
    members: {
      "test01: in-time": function test01_inTime() {
        var _this = this;
        window.setTimeout(function () {
          _this.resume();
        }, 500);
        this.wait(2000);
      },
      "test02: timeout": function test02_timeout() {
        this.wait(500);
      }
    }
  });
  qxl.testtapperdemo.test.Test07AsyncTest.$$dbClassInfo = $$dbClassInfo;
})();
