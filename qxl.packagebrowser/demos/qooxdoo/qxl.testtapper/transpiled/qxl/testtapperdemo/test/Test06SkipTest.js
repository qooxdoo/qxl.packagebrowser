(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestCase": {
        "require": true
      },
      "qx.dev.unit.MRequirements": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.testtapperdemo.test.Test06SkipTest", {
    extend: qx.dev.unit.TestCase,
    include: [qx.dev.unit.MRequirements],
    members: {
      hasNevertrue: function hasNevertrue() {
        return false;
      },
      "test01: Skip Test": function test01_Skip_Test() {
        this.require(["nevertrue"]);
      },
      "test02: Skip Test followed by Exception": function test02_Skip_Test_followed_by_Exception() {
        this.require(["nevertrue"]);
        this.unknownFunction();
      }
    }
  });
  qxl.testtapperdemo.test.Test06SkipTest.$$dbClassInfo = $$dbClassInfo;
})();
