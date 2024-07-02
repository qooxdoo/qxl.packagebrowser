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
      "qx.dev.unit.MMeasure": {
        "require": true
      },
      "qx.dom.Element": {},
      "qx.bom.element.Style": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qx.test.performance.decorator.AbstractDecorator", {
    extend: qx.dev.unit.TestCase,
    include: qx.dev.unit.MMeasure,
    type: "abstract",
    members: {
      CREATE_ITTERATIONS: 5000,
      RENDER_ITTERATIONS: 5000,
      RESIZE_ITTERATIONS: 10000,
      __P_265_0: null,
      setUp: function setUp() {
        this.__P_265_0 = qx.dom.Element.create("div", {
          id: "testRoot"
        });
        document.body.appendChild(this.__P_265_0);
      },
      tearDown: function tearDown() {
        document.body.removeChild(this.__P_265_0);
        this.__P_265_0 = null;
      },
      createDivs: function createDivs(count) {
        var divs = [];
        var container = document.createElement("div");
        for (var i = 0; i < count; i++) {
          var div = document.createElement("div");
          div.style.position = "absolute";
          div.style.width = "100px";
          div.style.height = "50px";
          container.appendChild(div);
          divs.push(div);
        }
        this.__P_265_0.appendChild(container);
        return divs;
      },
      createDecorator: function createDecorator() {
        // abstract method call
      },
      testCreate: function testCreate() {
        var self = this;
        this.measureRepeated("create and initial getStyles", function () {
          var decorator = self.createDecorator();
          decorator.getStyles();
        }, function () {}, this.CREATE_ITTERATIONS);
      },
      testRender: function testRender() {
        // warmup the decorator
        var decorator = this.createDecorator();
        var divs = this.createDivs(this.RENDER_ITTERATIONS);
        this.measureRepeated("apply styles", function (i) {
          qx.bom.element.Style.setStyles(divs[i], decorator.getStyles());
        }, function () {}, this.RENDER_ITTERATIONS);
      },
      testResize: function testResize() {
        var divs = this.createDivs(this.RESIZE_ITTERATIONS);
        var decorator = this.createDecorator();
        for (var i = 0; i < divs.length; i++) {
          qx.bom.element.Style.setStyles(divs[i], decorator.getStyles());
        }
        var size = [100, 200];
        this.measureRepeated("resize decorator", function (i) {
          var currentSize = size[i % 2];
          qx.bom.element.Style.set(divs[i], "width", currentSize);
        }, function () {}, this.RESIZE_ITTERATIONS);
      }
    }
  });
  qx.test.performance.decorator.AbstractDecorator.$$dbClassInfo = $$dbClassInfo;
})();