function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      "qx.ui.tabview.TabView": {},
      "qx.ui.tabview.Page": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Flow": {},
      "qx.event.Timer": {},
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /**
   * shows all the icons aviable in the current qooxdoo appliaction
   */

  /* global document */
  qx.Class.define("qxl.iconfontviewer.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        var _this = this;

        qxl.iconfontviewer.Application.prototype.main.base.call(this);
        var copy = document.createElement("input");
        document.body.appendChild(copy); // Document is the application root

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
        var tabView = new qx.ui.tabview.TabView();
        doc.add(tabView, {
          edge: 0
        });

        var _loop = function _loop(font) {
          var page = new qx.ui.tabview.Page(font);
          page.setLayout(new qx.ui.layout.Canvas());
          tabView.add(page);
          var scroll = new qx.ui.container.Scroll().set({
            padding: [20, 20, 20, 20]
          });
          page.add(scroll, {
            edge: 0
          });
          var list = new qx.ui.container.Composite(new qx.ui.layout.Flow());
          scroll.add(list);
          qx.event.Timer.once(function () {
            var _this2 = this;

            var _iterator = _createForOfIteratorHelper(iconDb[font]),
                _step;

            try {
              var _loop2 = function _loop2() {
                var item = _step.value;
                var img = new qx.ui.form.Button(null, item.handle + "/40").set({
                  toolTipText: item.name + " - click to copy",
                  minWidth: 80,
                  minHeight: 80
                });
                img.addListener("click", function () {
                  copy.value = item.handle;
                  copy.select();
                  document.execCommand("copy");
                }, _this2);
                list.add(img);
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }, _this, 100);
        };

        for (var font in iconDb) {
          _loop(font);
        }
      }
    }
  });
  qxl.iconfontviewer.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626057806279