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
      "qx.util.Base64": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.testtapperdemo.test.Test02MultiAssert", {
    extend: qx.dev.unit.TestCase,
    members: {
      "test01: Encoding/Decoding": function test01EncodingDecoding() {
        var got = qx.util.Base64.decode(qx.util.Base64.encode("foo:bar")).split(":");
        this.assertIdentical("foo", got[0]);
        this.assertIdentical("bar", got[1]);
        got = qx.util.Base64.decode(qx.util.Base64.encode("foo:")).split(":");
        this.assertIdentical("foo", got[0]);
        this.assertIdentical("", got[1]);
        got = qx.util.Base64.decode(qx.util.Base64.encode("foo:" + null)).split(":");
        this.assertIdentical("foo", got[0]);
        this.assertIdentical("null", got[1]);
      }
    }
  });
  qxl.testtapperdemo.test.Test02MultiAssert.$$dbClassInfo = $$dbClassInfo;
})();
