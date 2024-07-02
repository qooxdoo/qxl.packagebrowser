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
  qx.Class.define("qxl.testtapperdemo.test.Test03BadSetup", {
    extend: qx.dev.unit.TestCase,
    members: {
      setUp: function setUp() {
        this.callUnknownFunctionInSetup();
      },
      "test01: assert 1==1": function test01Assert11() {
        this.assert(true, "One equals one");
      }
    }
  });
  qxl.testtapperdemo.test.Test03BadSetup.$$dbClassInfo = $$dbClassInfo;
})();