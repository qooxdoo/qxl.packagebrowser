function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qxl.apiviewer.MWidgetRegistry": {
        "construct": true
      },
      "qxl.apiviewer.ClassLoader": {
        "construct": true
      },
      "qxl.apiviewer.TabViewController": {
        "construct": true
      },
      "qx.bom.History": {
        "construct": true
      },
      "qx.core.Init": {
        "construct": true
      },
      "qxl.apiviewer.dao.Class": {},
      "qxl.apiviewer.dao.Package": {},
      "qxl.apiviewer.UiModel": {},
      "qxl.apiviewer.LoadingIndicator": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
       2018 Zenesis Limited, http://www.zenesis.com
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * John Spackman (johnspackman)
       * Til Schneider (til132)
       * Sebastian Werner (wpbasti)
       * Andreas Ecker (ecker)
       * Fabian Jakobs (fjakobs)
       * Jonathan Weiß (jonathan_rass)
       * Henner Kollmann (hkollmann)
  
  ************************************************************************ */

  /**
   * Implements the dynamic behavior of the API viewer. The GUI is defined in
   * {@link Viewer}.
   *
   */
  qx.Class.define("qxl.apiviewer.Controller", {
    extend: qx.core.Object,
    /*
     * ****************************************************************************
     * CONSTRUCTOR
     * ****************************************************************************
     */
    /**
     * @param widgetRegistry
     *          {Viewer} the GUI
     *
     * @ignore (qx.$$appRoot)
     *
     */
    construct: function construct(widgetRegistry) {
      qx.core.Object.constructor.call(this);
      this._widgetRegistry = qxl.apiviewer.MWidgetRegistry;
      this._titlePrefix = "API Documentation";
      document.title = this._titlePrefix;
      qxl.apiviewer.ClassLoader.setBaseUri("".concat(qx.$$appRoot, "../resource/").concat(qxl.apiviewer.ClassLoader.RESOURCEPATH, "/"));
      this._detailLoader = this._widgetRegistry.getWidgetById("detail_loader");
      this._tabViewController = new qxl.apiviewer.TabViewController(this._widgetRegistry);
      this.__P_7_0();
      this._tree = this._widgetRegistry.getWidgetById("tree");
      this.__P_7_1();
      this.__P_7_2();
      var btn_inherited = this._widgetRegistry.getWidgetById("btn_inherited");
      var btn_included = this._widgetRegistry.getWidgetById("btn_included");
      btn_inherited.addListener("changeValue", this.__P_7_3, this);
      btn_included.addListener("changeValue", this.__P_7_3, this);
      this._history = qx.bom.History.getInstance();
      this.__P_7_4();
      qx.core.Init.getApplication().getRoot().addListener("pointerdown", function (e) {
        this.__P_7_5 = e.isShiftPressed() || e.isCtrlOrCommandPressed();
      }, this, true);
    },
    members: {
      __P_7_5: false,
      // overridden
      $$logCategory: "application",
      /**
       * Loads the API doc tree from the enviroment
       * doc tree.
       *
       * @param classes [] all classes to show
       */
      load: function load(classes) {
        var _this = this;
        setTimeout(function () {
          var start = new Date();
          var _iterator = _createForOfIteratorHelper(classes),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var classname = _step.value;
              qxl.apiviewer.dao.Class.getClassByName(classname, true);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var rootPackage = qxl.apiviewer.dao.Package.getPackage(null);
          var end = new Date();
          start = new Date();
          _this._tree.setTreeData(rootPackage);
          end = new Date();
          setTimeout(function () {
            // Handle bookmarks
            var state = _this._history.getState();
            if (state) {
              _this.__P_7_6(_this.__P_7_7(state));
            } else {
              _this.__P_7_6("");
            }
          });
        });
      },
      /**
       * binds the events of the TabView controller
       */
      __P_7_0: function __P_7_0() {
        this._tabViewController.addListener("classLinkTapped", function (evt) {
          this._updateHistory(evt.getData());
        }, this);
        this._tabViewController.addListener("changeSelection", function (evt) {
          var page = evt.getData()[0];
          if (this._ignoreTabViewSelection == true) {
            return;
          }
          if (page && page.getUserData("nodeName")) {
            var nodeName = page.getUserData("nodeName");
            var itemName = page.getUserData("itemName");
            if (itemName === null) {
              this._updateHistory(nodeName);
            } else {
              this._updateHistory(nodeName + "#" + itemName);
            }
          } else {
            this._tree.resetSelection();
          }
        }, this);
      },
      /**
       * binds the selection event of the package tree.
       */
      __P_7_1: function __P_7_1() {
        this._tree.addListener("changeSelection", function (evt) {
          var treeNode = evt.getData()[0];
          if (treeNode && treeNode.getUserData("nodeName") && !this._ignoreTreeSelection) {
            var nodeName = treeNode.getUserData("nodeName");

            // the history update will cause _selectClass to be called.
            this._updateHistory(nodeName);
          }
        }, this);
      },
      /**
       * binds the actions of the toolbar buttons.
       */
      __P_7_2: function __P_7_2() {
        var uiModel = qxl.apiviewer.UiModel.getInstance();
        var btn_inherited = this._widgetRegistry.getWidgetById("btn_inherited");
        btn_inherited.bind("value", uiModel, "showInherited");
        uiModel.bind("showInherited", btn_inherited, "value");
        var btn_included = this._widgetRegistry.getWidgetById("btn_included");
        btn_included.bind("value", uiModel, "showIncluded");
        uiModel.bind("showIncluded", btn_included, "value");
        var btn_expand = this._widgetRegistry.getWidgetById("btn_expand");
        btn_expand.bind("value", uiModel, "expandProperties");
        uiModel.bind("expandProperties", btn_expand, "value");
        var btn_protected = this._widgetRegistry.getWidgetById("btn_protected");
        btn_protected.bind("value", uiModel, "showProtected");
        uiModel.bind("showProtected", btn_protected, "value");
        var btn_private = this._widgetRegistry.getWidgetById("btn_private");
        btn_private.bind("value", uiModel, "showPrivate");
        uiModel.bind("showPrivate", btn_private, "value");
        var btn_internal = this._widgetRegistry.getWidgetById("btn_internal");
        btn_internal.bind("value", uiModel, "showInternal");
        uiModel.bind("showInternal", btn_internal, "value");
      },
      /**
       * Keeps the icon of the menubutton in sync with the menu checkboxes of
       * inherited and mixin includes.
       *
       */
      __P_7_3: function __P_7_3() {
        var menuButton = this._widgetRegistry.getWidgetById("menubtn_includes");
        var btn_inherited = this._widgetRegistry.getWidgetById("btn_inherited");
        var btn_included = this._widgetRegistry.getWidgetById("btn_included");
        var showInherited = btn_inherited.getValue();
        var showMixins = btn_included.getValue();
        if (showMixins && showInherited) {
          menuButton.setIcon("qxl/apiviewer/image/inherited_and_mixins_included.gif");
        }
        if (showInherited && !showMixins) {
          menuButton.setIcon("qxl/apiviewer/image/method_public_inherited18.gif");
        }
        if (!showInherited && showMixins) {
          menuButton.setIcon("qxl/apiviewer/image/overlay_mixin18.gif");
        }
        if (!showInherited && !showMixins) {
          menuButton.setIcon("qxl/apiviewer/image/includes.gif");
        }
      },
      /**
       * bind history events
       */
      __P_7_4: function __P_7_4() {
        this._history.addListener("changeState", function (evt) {
          var item = this.__P_7_7(evt.getData());
          if (item) {
            this.__P_7_6(item);
          }
        }, this);
      },
      /**
       * Push the class to the browser history
       *
       * @param className
       *          {String} name of the class
       */
      _updateHistory: function _updateHistory(className) {
        var newTitle = className + " - " + this._titlePrefix;
        qx.bom.History.getInstance().addToHistory(this.__P_7_8(className), newTitle);
      },
      /**
       * Display information about a class
       * @param classNode
       * {qxl.apiviewer.dao.Class} class node to display
       * @param callback
       * @param self
       */
      _selectClass: function _selectClass(classNode, callback, self) {
        var _this2 = this;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this2._detailLoader.exclude();
                _this2._tabViewController.showTabView();
                _context.next = 4;
                return classNode.loadDependedClasses();
              case 4:
                if (!(classNode instanceof qxl.apiviewer.dao.Class)) {
                  _context.next = 9;
                  break;
                }
                _context.next = 7;
                return _this2._tabViewController.openClass(classNode, _this2.__P_7_5);
              case 7:
                _context.next = 11;
                break;
              case 9:
                _context.next = 11;
                return _this2._tabViewController.openPackage(classNode, _this2.__P_7_5);
              case 11:
                callback && callback.call(self);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      /**
       * Selects an item (class, property, method or constant).
       *
       * @param fullItemName
       *          {String} the full name of the item to select. (e.g.
       *          "qx.mypackage.MyClass" or "qx.mypackage.MyClass#myProperty")
       *
       */
      __P_7_6: function __P_7_6(fullItemName) {
        var _this3 = this;
        qxl.apiviewer.LoadingIndicator.getInstance().show();
        var className = fullItemName;
        var itemName = null;
        var hashPos = fullItemName.indexOf("#");
        if (hashPos != -1) {
          className = fullItemName.substring(0, hashPos);
          itemName = fullItemName.substring(hashPos + 1);
          var parenPos = itemName.indexOf("(");
          if (parenPos != -1) {
            itemName = itemName.substring(0, parenPos).trim();
          }
        }

        // ignore changeSelection events
        this._ignoreTreeSelection = true;
        this._tree.selectTreeNodeByClassName(className).then(function (couldSelectTreeNode) {
          _this3._ignoreTreeSelection = false;
          if (!couldSelectTreeNode) {
            _this3.error("Unknown class: " + className);
            qxl.apiviewer.LoadingIndicator.getInstance().hide();
            return;
          }
          var sel = _this3._tree.getSelection();
          var nodeName = sel[0].getUserData("nodeName") || className;
          _this3._ignoreTabViewSelection = true;
          _this3._selectClass(qxl.apiviewer.ClassLoader.getClassOrPackage(nodeName), function () {
            if (itemName) {
              _this3._tabViewController.isLoaded(function () {
                if (!_this3._tabViewController.showItem(itemName)) {
                  _this3.error("Unknown item of class '" + className + "': " + itemName);
                  qxl.apiviewer.LoadingIndicator.getInstance().hide();
                  _this3._updateHistory(className);
                  _this3._ignoreTabViewSelection = false;
                  return;
                }
                _this3._updateHistory(fullItemName);
                qxl.apiviewer.LoadingIndicator.getInstance().hide();
                _this3._ignoreTabViewSelection = false;
              });
            } else {
              qxl.apiviewer.LoadingIndicator.getInstance().hide();
              _this3._ignoreTabViewSelection = false;
            }
          });
        });
      },
      __P_7_8: function __P_7_8(state) {
        return state.replace(/(.*)#(.*)/g, "$1~$2");
      },
      __P_7_7: function __P_7_7(encodedState) {
        return encodedState.replace(/(.*)~(.*)/g, "$1#$2");
      }
    },
    /*
     * ****************************************************************************
     * DESTRUCTOR
     * ****************************************************************************
     */
    destruct: function destruct() {
      this._widgetRegistry = null;
      this._disposeObjects("_detailLoader", "_tree", "_history", "_tabViewController");
    }
  });
  qxl.apiviewer.Controller.$$dbClassInfo = $$dbClassInfo;
})();