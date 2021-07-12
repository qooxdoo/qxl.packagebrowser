(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.html.Element": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qx.test.jsx.TestWidget", {
    extend: qx.html.Element,

    construct() {
      qx.html.Element.constructor.call(this);
      this.add(this.getQxObject("header"));
      this.add(this.getQxObject("body"));
    },

    members: {
      _createQxObjectImpl(id) {
        switch (id) {
          case "header":
            var elem = new qx.html.Element();
            elem.addClass("header-class");
            return elem;

          case "body":
            var elem = new qx.html.Element();
            elem.addClass("body-class");
            elem.add(this.getQxObject("labelOne"));
            elem.add(this.getQxObject("labelTwo"));
            return elem;

          case "labelOne":
            var elem = new qx.html.Element();
            elem.add(new qx.html.Text("Label One"));
            return elem;

          case "labelTwo":
            var elem = new qx.html.Element();
            elem.add(new qx.html.Text("Label Two"));
            return elem;
        }
      }

    }
  });
  qx.test.jsx.TestWidget.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TestWidget.js.map?dt=1626057345040