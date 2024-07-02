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
  qx.Class.define("qxl.testtapperdemo.test.Test05BadTest", {
    extend: qx.dev.unit.TestCase,
    members: {
      "test01: Unknown Function": function test01UnknownFunction() {
        this.CallUnknownFunctionInMethod();
      }
    }
  });
  qxl.testtapperdemo.test.Test05BadTest.$$dbClassInfo = $$dbClassInfo;
})();
