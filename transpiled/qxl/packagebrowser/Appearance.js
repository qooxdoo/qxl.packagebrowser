(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Theme.define("qxl.packagebrowser.Appearance", {
    extend: qx.theme.indigo.Appearance,
    title: "Demo browser",
    appearances: {
      "demo-tree": {
        alias: "tree",
        include: "tree",
        style: function style() {
          return {
            width: 270,
            padding: 0,
            decorator: "main"
          };
        }
      }
    }
  });
  qxl.packagebrowser.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map?dt=1626055231443