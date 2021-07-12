(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Color": {
        "require": true
      },
      "qx.theme.indigo.Decoration": {
        "require": true
      },
      "qx.theme.indigo.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "qxl.packagebrowser.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Theme.define("qxl.packagebrowser.Theme", {
    title: "Demo browser",
    meta: {
      color: qx.theme.indigo.Color,
      decoration: qx.theme.indigo.Decoration,
      font: qx.theme.indigo.Font,
      icon: qx.theme.icon.Tango,
      appearance: qxl.packagebrowser.Appearance
    }
  });
  qxl.packagebrowser.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map?dt=1626055229595