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
      "qx.test.jsx.TestWidget": {},
      "qx.core.Assert": {},
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
  qx.Class.define("qx.test.jsx.TestJsxBrowser", {
    extend: qx.dev.unit.TestCase,
    members: {
      testUseNode() {
        const doTest = async () => {
          let elem = new qx.test.jsx.TestWidget();
          let buffer = "";
          elem.serialize((...args) => buffer += args.join(""));
          console.log(buffer);
          this.assertTrue(!elem.getDomElement());
          let dom = document.createElement("div");
          dom.innerHTML = buffer;
          dom = dom.children[0];
          qx.core.Assert.assertTrue(!elem.getDomElement());
          elem.useNode(dom);
          this.assertTrue(dom === elem.getDomElement());
          this.assertTrue(dom.children.length == 2);
          this.assertTrue(dom.children[0].className === "header-class");
          this.assertTrue(dom.children[0] === elem.getQxObject("header").getDomElement());
          this.assertTrue(dom.children[1].className === "body-class");
          this.assertTrue(dom.children[1] === elem.getQxObject("body").getDomElement());
          let domBody = dom.children[1];
          let body = elem.getQxObject("body");
          this.assertTrue(domBody.children.length == 2);
          this.assertTrue(domBody.children[0].innerText === "Label One");
          this.assertTrue(domBody.children[0] === elem.getQxObject("labelOne").getDomElement());
          this.assertTrue(domBody.children[1].innerText === "Label Two");
          this.assertTrue(domBody.children[1] === elem.getQxObject("labelTwo").getDomElement());
        };

        doTest().then(() => this.resume());
        this.wait();
      },

      testUseNodeWithExtra() {
        let src = qx.html.Jsx.createElement("div", {
          "data-qx-object-id": "root"
        }, qx.html.Jsx.createElement("div", {
          className: "header-class",
          "data-qx-object-id": "root/header"
        }, qx.html.Jsx.createElement("p", null, "This is extra")), qx.html.Jsx.createElement("div", {
          id: "outer-wrapper"
        }, qx.html.Jsx.createElement("div", {
          id: "inner-wrapper"
        }, qx.html.Jsx.createElement("div", {
          className: "body-class",
          "data-qx-object-id": "root/body"
        }, qx.html.Jsx.createElement("div", {
          className: "label-wrapper"
        }, qx.html.Jsx.createElement("div", {
          "data-qx-object-id": "root/labelOne"
        }, "Label One")), qx.html.Jsx.createElement("div", {
          className: "label-wrapper"
        }, qx.html.Jsx.createElement("div", {
          "data-qx-object-id": "root/labelTwo"
        }, "Label Two")))), ";"));
        let buffer = "";
        src.serialize((...args) => buffer += args.join(""));
        console.log(buffer);
        let elem = new qx.test.jsx.TestWidget();
        this.assertTrue(!elem.getDomElement());
        let dom = document.createElement("div");
        dom.innerHTML = buffer;
        dom = dom.children[0];
        qx.core.Assert.assertTrue(!elem.getDomElement());
        elem.useNode(dom);
        this.assertTrue(dom === elem.getDomElement());
        this.assertTrue(dom.children.length == 2);
        this.assertTrue(dom.children[0].className === "header-class");
        this.assertTrue(dom.children[0] === elem.getQxObject("header").getDomElement());
        this.assertTrue(dom.children[1].getAttribute("id") === "outer-wrapper");
        this.assertTrue(dom.children[1].children[0].getAttribute("id") === "inner-wrapper");
        this.assertTrue(dom.children[1].children[0].children[0].className === "body-class");
        this.assertTrue(dom.children[1].children[0].children[0].children[0].className === "label-wrapper");
        this.assertTrue(dom.children[1].children[0].children[0].children[1].className === "label-wrapper");
        this.assertTrue(dom.children[1].children[0].children[0] === elem.getQxObject("body").getDomElement());
        let domBody = dom.children[1].children[0].children[0];
        let body = elem.getQxObject("body");
        this.assertTrue(domBody.children.length == 2);
        this.assertTrue(domBody.children[0].children[0].innerText === "Label One");
        this.assertTrue(domBody.children[0].children[0] === elem.getQxObject("labelOne").getDomElement());
        this.assertTrue(domBody.children[1].children[0].innerText === "Label Two");
        this.assertTrue(domBody.children[1].children[0] === elem.getQxObject("labelTwo").getDomElement());
      }

    }
  });
  qx.test.jsx.TestJsxBrowser.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TestJsxBrowser.js.map?dt=1626057336064