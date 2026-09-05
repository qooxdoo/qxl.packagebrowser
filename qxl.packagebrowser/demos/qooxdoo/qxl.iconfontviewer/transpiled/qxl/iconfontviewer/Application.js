function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
        qxl.iconfontviewer.Application.superclass.prototype.main.call(this);
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
