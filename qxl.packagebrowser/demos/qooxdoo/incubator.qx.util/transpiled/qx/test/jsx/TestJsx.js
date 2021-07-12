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
      "qx.html.Element": {},
      "qx.html.Jsx": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2019 Zenesis Ltd http://www.zenesis.com
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * John Spackman (https://github.com/johnspackman)
  
  ************************************************************************ */
  qx.Class.define("qx.test.jsx.TestJsx", {
    extend: qx.dev.unit.TestCase,
    members: {
      testBasics() {
        const doTest = async () => {
          let html = qx.html.Jsx.createElement("div", {
            id: "el1"
          }, "Hello", qx.html.Jsx.createElement("div", {
            id: "el2",
            className: "hello",
            style: "border: 1px solid"
          }), " World");
          this.assertEquals(true, html instanceof qx.html.Element);
          this.assertEquals(3, html.getChildren().length);
          let el2 = html.getChildren()[1];
          this.assertEquals(true, html.getChildren()[0] instanceof qx.html.Text);
          this.assertEquals(true, el2 instanceof qx.html.Element);
          this.assertEquals(true, html.getChildren()[2] instanceof qx.html.Text);
          this.assertEquals("el1", html.getAttribute("id"));
          this.assertEquals("el2", el2.getAttribute("id"));
          this.assertEquals("1px solid", el2.getStyle("border"));
        };

        doTest().then(() => this.resume());
        this.wait();
      },

      testRefs() {
        let myRef = new qx.html.JsxRef();
        let html = qx.html.Jsx.createElement("div", null, qx.html.Jsx.createElement("div", {
          ref: myRef
        }));
        this.assertTrue(html.getChildren()[0] === myRef.getValue());
      }

    }
  });
  qx.test.jsx.TestJsx.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TestJsx.js.map?dt=1626057335877