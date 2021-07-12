(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.SlideBar": {
        "construct": true,
        "require": true
      },
      "qx.data.SingleValueBinding": {
        "construct": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qxgraphql.demo.views.modals.Headers": {},
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.demo.views.ButtonsContainer", {
    extend: qx.ui.container.SlideBar,

    /**
     * @param page {qxgraphql.demo.views.pages.FreeQueries} The page where
     * the container will be included
     *
     */
    construct: function construct(page) {
      qx.ui.container.SlideBar.constructor.call(this);
      this.setPage(page);
      qx.data.SingleValueBinding.bind(page, "service", this, "service");
      this.setLayout(new qx.ui.layout.HBox(5));
      this.add(this.__P_60_0());
    },
    events: {
      "changeService": "qx.event.type.Data"
    },
    properties: {
      service: {
        init: null,
        event: "changeService"
      }
    },
    members: {
      __P_60_1: null,
      __P_60_0: function __P_60_0() {
        var button = this.__P_60_2("Headers");

        button.addListener("execute", function () {
          var win = new qxgraphql.demo.views.modals.Headers(this.getService());
          win.open();
        }, this);
        return button;
      },
      __P_60_2: function __P_60_2(title, icon) {
        return new qx.ui.form.Button(title, icon).set({
          allowStretchX: false,
          allowStretchY: false,
          alignX: "center",
          alignY: "middle"
        });
      },
      setPage: function setPage(page) {
        this.__P_60_1 = page;
      },
      getPage: function getPage() {
        return this.__P_60_1;
      }
    }
  });
  qxgraphql.demo.views.ButtonsContainer.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ButtonsContainer.js.map?dt=1626060604044