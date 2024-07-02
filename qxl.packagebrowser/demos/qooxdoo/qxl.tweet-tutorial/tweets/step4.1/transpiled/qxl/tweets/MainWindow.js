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
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.toolbar.ToolBar": {
        "construct": true
      },
      "qx.ui.toolbar.Button": {
        "construct": true
      },
      "qx.ui.form.List": {
        "construct": true
      },
      "qx.ui.form.TextArea": {
        "construct": true
      },
      "qx.ui.form.Button": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.tweets.MainWindow", {
    extend: qx.ui.window.Window,
    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, "tweets", "qxl/tweets/logo.png");

      // hide the window buttons
      this.setShowClose(false);
      this.setShowMaximize(false);
      this.setShowMinimize(false);

      // adjust size
      this.setWidth(250);
      this.setHeight(300);

      // add the layout
      var layout = new qx.ui.layout.Grid(0, 0);
      layout.setRowFlex(1, 1);
      layout.setColumnFlex(0, 1);
      this.setLayout(layout);
      this.setContentPadding(0);

      // toolbar
      var toolbar = new qx.ui.toolbar.ToolBar();
      this.add(toolbar, {
        row: 0,
        column: 0,
        colSpan: 2
      });

      // reload button
      var reloadButton = new qx.ui.toolbar.Button("Reload");
      toolbar.add(reloadButton);
      reloadButton.setToolTipText("Reload the tweets.");
      reloadButton.addListener("execute", function () {
        this.fireEvent("reload");
      }, this);

      // list
      this.__P_594_0 = new qx.ui.form.List();
      this.add(this.__P_594_0, {
        row: 1,
        column: 0,
        colSpan: 2
      });

      // textarea
      this.__P_594_1 = new qx.ui.form.TextArea();
      this.add(this.__P_594_1, {
        row: 2,
        column: 0
      });
      this.__P_594_1.setPlaceholder("Enter your message here...");
      this.__P_594_1.addListener("input", function (e) {
        var value = e.getData();
        postButton.setEnabled(value.length < 140 && value.length > 0);
      }, this);

      // post button
      var postButton = new qx.ui.form.Button("Post");
      this.add(postButton, {
        row: 2,
        column: 1
      });
      postButton.setToolTipText("Post this message on identi.ca");
      postButton.addListener("execute", function () {
        this.fireDataEvent("post", this.__P_594_1.getValue());
      }, this);
      postButton.setWidth(60);
      postButton.setEnabled(false);
    },
    events: {
      reload: "qx.event.type.Event",
      post: "qx.event.type.Data"
    },
    members: {
      __P_594_0: null,
      __P_594_1: null,
      getList: function getList() {
        return this.__P_594_0;
      },
      clearPostMessage: function clearPostMessage() {
        this.__P_594_1.setValue(null);
      }
    }
  });
  qxl.tweets.MainWindow.$$dbClassInfo = $$dbClassInfo;
})();
