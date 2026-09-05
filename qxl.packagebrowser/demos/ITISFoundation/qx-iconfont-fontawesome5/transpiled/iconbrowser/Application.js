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
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.layout.Flow": {},
      "qx.ui.basic.Label": {},
      "qx.bom.Font": {},
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * shows all the icons aviable in the current qooxdoo appliaction
   */

  /* global document,iconfont */

  qx.Class.define("iconbrowser.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        iconbrowser.Application.superclass.prototype.main.call(this);
        // dummy call to the inconfont class which will trigger the compiler to copy the
        // font files to the output class.
        // you could also explicitly include the class in the compile.json file

        // iconfont.fontawesome5.Load;

        var copy = document.createElement("input");
        document.body.appendChild(copy);
        // Document is the application root
        var iconDb = {};
        for (var key in qx.$$resources) {
          var re = key.match(/^@([^/]+)\/([^/]+)/);
          if (!re) {
            continue;
          }
          if (!iconDb[re[1]]) {
            iconDb[re[1]] = [];
          }
          iconDb[re[1]].push({
            handle: key,
            name: re[2]
          });
        }
        var doc = this.getRoot();
        var scroll = new qx.ui.container.Scroll().set({
          padding: [20, 20, 20, 20]
        });
        doc.add(scroll, {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        });
        var vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(30));
        scroll.add(vbox);
        var _loop = function _loop() {
          var list = new qx.ui.container.Composite(new qx.ui.layout.Flow());
          vbox.add(list);
          var label = new qx.ui.basic.Label(font).set({
            font: new qx.bom.Font(30)
          });
          label.setWidth(80 * Math.ceil((label.getSizeHint().width + 10.0) / 80.0));
          list.add(label);
          iconDb[font].forEach(function (item) {
            var img = new qx.ui.form.Button(null, item.handle + "/40").set({
              toolTipText: item.name + " - click to copy",
              minWidth: 80,
              minHeight: 80
            });
            img.addListener("click", function () {
              copy.value = item.handle;
              copy.select();
              document.execCommand("copy");
            }, this);
            list.add(img);
          });
        };
        for (var font in iconDb) {
          _loop();
        }
      }
    }
  });
  iconbrowser.Application.$$dbClassInfo = $$dbClassInfo;
})();
