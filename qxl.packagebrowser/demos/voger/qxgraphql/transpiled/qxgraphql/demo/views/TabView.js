(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.tabview.TabView": {
        "construct": true,
        "require": true
      },
      "qxgraphql.demo.views.pages.FreeQueries": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.demo.views.TabView", {
    extend: qx.ui.tabview.TabView,
    construct: function construct() {
      qx.ui.tabview.TabView.constructor.call(this);
      this.init();
    },
    members: {
      init: function init() {
        this.add(new qxgraphql.demo.views.pages.FreeQueries("Free Queries"));
      }
    }
  });
  qxgraphql.demo.views.TabView.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TabView.js.map?dt=1626060595237