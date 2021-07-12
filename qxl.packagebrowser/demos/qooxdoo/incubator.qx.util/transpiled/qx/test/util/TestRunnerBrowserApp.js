(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.form.TextArea": {},
      "qx.dev.TestRunner": {},
      "qx.test.jsx.TestJsx": {},
      "qx.test.jsx.TestJsxBrowser": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qx.test.util.TestRunnerBrowserApp", {
    extend: qx.application.Standalone,
    members: {
      main() {
        qx.test.util.TestRunnerBrowserApp.prototype.main.base.call(this);
        let doc = this.getRoot();
        let root = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        doc.add(root, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
        this._tb = new qx.ui.toolbar.ToolBar();
        root.add(this._tb);
        this._txt = new qx.ui.form.TextArea();
        root.add(this._txt);
        qx.dev.TestRunner.runAll(qx.test.jsx.TestJsx);
        qx.dev.TestRunner.runAll(qx.test.jsx.TestJsxBrowser);
      }

    }
  });
  qx.test.util.TestRunnerBrowserApp.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TestRunnerBrowserApp.js.map?dt=1626057333387