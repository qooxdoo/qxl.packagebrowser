(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.layout.VBox": {},
      "qxgraphql.demo.views.widgets.HeadersList": {},
      "qx.ui.form.Button": {},
      "qx.ui.container.Composite": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.demo.views.modals.Headers", {
    extend: qx.ui.window.Window,
    construct: function construct(service) {
      qx.ui.window.Window.constructor.call(this, "Headers");
      this.setService(service);
      this.set({
        layout: new qx.ui.layout.HBox(10),
        modal: true,
        height: 270,
        width: 450,
        allowMaximize: false,
        allowMinimize: false,
        allowClose: true,
        allowStretchX: false,
        allowStretchY: false,
        allowGrowX: false,
        allowGrowY: false,
        showMaximize: false,
        showMinimize: false
      });

      this._init();

      this.addListener("appear", function () {
        this.center();
        var headers = this.getService().getRequestHeaders();

        this.__P_111_0.setModel(headers);
      });
    },
    members: {
      __P_111_1: null,
      __P_111_0: null,
      _init: function _init() {
        this.setLayout(new qx.ui.layout.VBox(10)); // create the UI elements

        var headersList = new qxgraphql.demo.views.widgets.HeadersList(null);
        this.__P_111_0 = headersList;
        var buttonOk = new qx.ui.form.Button("Ok");
        buttonOk.setWidth(80);
        buttonOk.addListener("execute", this._onOk, this);
        var buttonCancel = new qx.ui.form.Button("Cancel");
        buttonCancel.addListener("execute", this._onCancel, this);
        buttonCancel.setWidth(80);
        var buttonsLayout = new qx.ui.layout.HBox(10).set({
          alignX: "center",
          alignY: "middle"
        });
        var buttonContainer = new qx.ui.container.Composite(buttonsLayout);
        buttonContainer.add(buttonOk);
        buttonContainer.add(buttonCancel);
        this.add(headersList, {
          flex: 1
        });
        this.add(buttonContainer);
      },
      _onOk: function _onOk(e) {
        var model = this.__P_111_0.getModel();

        var service = this.__P_111_1; // first reset all the request headers

        service.clearRequestHeaders(); // then set the new headers one by one

        model.forEach(function (header) {
          var key = header.getKey(); // if key is not null or empty string set it as header

          if (key) {
            service.setRequestHeader(key, header.getValue());
          }

          return service;
        }, this);
        this.destroy();
      },
      _onCancel: function _onCancel(e) {
        this.destroy();
      },
      setService: function setService(service) {
        this.__P_111_1 = service;
      },
      getService: function getService() {
        return this.__P_111_1;
      }
    },
    destruct: function destruct() {
      this.__P_111_0.destroy();
    }
  });
  qxgraphql.demo.views.modals.Headers.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Headers.js.map?dt=1626060609323