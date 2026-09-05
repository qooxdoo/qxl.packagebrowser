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
  qx.Class.define("qxl.testtapperdemo.test.Test01Simple", {
    extend: qx.dev.unit.TestCase,
    members: {
      setUp: function setUp() {
        console.debug("# Setup for TestCase");
      },
      tearDown: function tearDown() {
        console.debug("# Teardown for TestCase");
      },
      "test01: got array ?": function test01_got_array_() {
        this.assertArray([], "This is an array");
      },
      "test02: assert 1==1": function test02_assert_11() {
        this.assert(true, "One equals one");
      }
    }
  });
  qxl.testtapperdemo.test.Test01Simple.$$dbClassInfo = $$dbClassInfo;
})();
