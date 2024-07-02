function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
      "qx.ui.layout.HBox": {},
      "qx.ui.basic.Image": {},
      "qx.ui.basic.Label": {},
      "qx.bom.Font": {},
      "qx.ui.decoration.Decorator": {},
      "qx.ui.layout.Canvas": {},
      "com.zenesis.qx.upload.UploadButton": {},
      "qx.ui.form.List": {},
      "com.zenesis.qx.upload.UploadMgr": {},
      "qx.ui.form.ListItem": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.form.Button": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Part": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.menu.Menu": {},
      "com.zenesis.qx.upload.UploadMenuButton": {},
      "com.zenesis.qx.upload.UploadToolbarButton": {},
      "qx.ui.basic.Atom": {},
      "com.zenesis.qx.upload.ZipHandler": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ***********************************************************************
  
     UploadMgr - provides an API for uploading one or multiple files
     with progress feedback (on modern browsers), does not block the user 
     interface during uploads, supports cancelling uploads.
  
     http://qooxdoo.org
  
     Copyright:
       2011 Zenesis Limited, http://www.zenesis.com
  
     License:
       MIT: https://opensource.org/licenses/MIT
       
       This software is provided under the same licensing terms as Qooxdoo,
       please see the LICENSE file in the Qooxdoo project's top-level directory 
       for details.
  
     Authors:
   * John Spackman (john.spackman@zenesis.com)
  
   ************************************************************************/

  /**
   * This is the main application class of your custom application
   * "com.zenesis.qx.upload"
   *
   * @asset(com/zenesis/qx/upload/*)
   * @asset(qx/icon/Oxygen/22/actions/*)
   *
   * @ignore(saveAs)
   *
   */
  qx.Class.define("com.zenesis.qx.upload.demo.Application", {
    extend: qx.application.Standalone,
    /*
     * ****************************************************************************
     * MEMBERS
     * ****************************************************************************
     */

    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       *
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        com.zenesis.qx.upload.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
         * -------------------------------------------------------------------------
         * Below is your actual application code...
         * -------------------------------------------------------------------------
         */
        // Document is the application root
        var doc = this.getRoot();
        var root = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        doc.add(root, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });

        // Header
        var header = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        root.add(header);
        header.add(new qx.ui.basic.Image("com/zenesis/qx/upload/banner.png").set({
          padding: [0, 30]
        }));
        header.add(new qx.ui.basic.Label("UploadMgr<br>Contrib Demo").set({
          font: new qx.bom.Font(20, ["Arial"]),
          padding: [22, 20],
          textColor: "white",
          allowGrowX: true,
          rich: true,
          textAlign: "center"
        }), {
          flex: 1
        });
        header.add(new qx.ui.basic.Image("com/zenesis/qx/upload/logo.gif"));
        header.setDecorator(new qx.ui.decoration.Decorator().set({
          backgroundImage: "com/zenesis/qx/upload/banner-bg.png",
          backgroundPositionX: 0
        }));
        root.add(new qx.ui.basic.Label("Written by John Spackman <a href='mailto:john.spackman@zenesis.com'>john.spackman@zenesis.com</a>, (c) Zenesis Ltd <a href='http://www.zenesis.com' target='_blank'>http://www.zenesis.com</a>").set({
          rich: true,
          font: new qx.bom.Font(13, ["Arial", "Lucida Grande"]),
          textAlign: "center",
          allowGrowX: true,
          padding: [10, 0]
        }));
        var body = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        root.add(body);
        var btn = new com.zenesis.qx.upload.UploadButton("btn 1 Add File(s)", "com/zenesis/qx/upload/test.png");
        var lst = new qx.ui.form.List();
        var uploadCount = 0;

        // Uploader controls the upload process; btn is the widget that will have the input[type=file]
        // attached, and "/demoupload" is the path files will be uploaded to (i.e. it's the value used
        // for the form's action attribute)
        //
        var uploadUrl = "http://www.zenesis.com/UploadMgr/demoupload";
        //var uploadUrl = "http://localhost:9090/demoupload";
        var match = document.location.href.match(/uploadUrl=([^&]+)$/);
        if (match) uploadUrl = match[1];
        var uploader = new com.zenesis.qx.upload.UploadMgr(btn, uploadUrl);

        // Parameter tp be added to all uploads (can be overridden by
        // individual files)
        uploader.setParam("myGlobalParam", "global123");

        // Optionally restrict the max number of simultaneous uploads
        // (default is 5)
        // uploader.getUploadHandler().setMaxConnections(1);

        uploader.addListener("addFile", function (evt) {
          var file = evt.getData(),
            item = new qx.ui.form.ListItem(file.getFilename() + " (queued for upload)", null, file);
          lst.add(item);

          // Set a parameter - each uploaded file has their own set, which
          // can override those set
          // globally against the upload manager
          ++uploadCount;
          file.setParam("myParam_" + uploadCount, "test");
          if (uploadCount % 2 == 0) file.setParam("myGlobalParam", "overridden-global-value");

          // On modern browsers (ie not IE) we will get progress updates
          var progressListenerId = file.addListener("changeProgress", function (evt) {
            this.debug("Upload " + file.getFilename() + ": " + evt.getData() + " / " + file.getSize() + " - " + Math.round(evt.getData() / file.getSize() * 100) + "%");
            item.setLabel(file.getFilename() + ": " + evt.getData() + " / " + file.getSize() + " - " + Math.round(evt.getData() / file.getSize() * 100) + "%");
          }, this);

          // All browsers can at least get changes in state (ie
          // "uploading", "cancelled", and "uploaded")
          var stateListenerId = file.addListener("changeState", function (evt) {
            var state = evt.getData();
            this.debug(file.getFilename() + ": state=" + state + ", file size=" + file.getSize() + ", progress=" + file.getProgress());
            if (state == "uploading") item.setLabel(file.getFilename() + " (Uploading...)");else if (state == "uploaded") item.setLabel(file.getFilename() + " (Complete)");else if (state == "cancelled") item.setLabel(file.getFilename() + " (Cancelled)");
            if (state == "uploaded" || state == "cancelled") {
              file.removeListenerById(stateListenerId);
            }
          }, this);
          this.debug("Added file " + file.getFilename());
        }, this);
        body.add(btn, {
          left: 50,
          top: 0
        });
        var cbx = new qx.ui.form.CheckBox("Multiple");
        cbx.bind("value", btn, "multiple");
        body.add(cbx, {
          left: 50,
          top: 50
        });
        cbx = new qx.ui.form.CheckBox("Directory");
        cbx.bind("value", btn, "directory");
        body.add(cbx, {
          left: 50,
          top: 70
        });

        // Create a button to cancel the upload selected in the list
        var btnCancel = new qx.ui.form.Button("Cancel upload", "qx/icon/Oxygen/22/actions/process-stop.png");
        btnCancel.set({
          enabled: false
        });
        lst.addListener("changeSelection", function (evt) {
          var sel = evt.getData(),
            item = sel.length ? sel[0] : null,
            file = item ? item.getModel() : null;
          btnCancel.setEnabled(file != null && (file.getState() == "uploading" || file.getState() == "not-started"));
        }, this);
        btnCancel.addListener("execute", function (evt) {
          var sel = lst.getSelection(),
            item = sel[0],
            file = item.getModel();
          if (file.getState() == "uploading" || file.getState() == "not-started") uploader.cancel(file);
        }, this);

        // Auto upload? (default=true)
        cbx = new qx.ui.form.CheckBox("Automatically Upload");
        cbx.setValue(true);
        cbx.bind("value", uploader, "autoUpload");
        body.add(cbx, {
          left: 200,
          top: 0
        });
        lst.set({
          width: 500
        });
        body.add(lst, {
          left: 200,
          top: 20
        });
        body.add(btnCancel, {
          left: 720,
          top: 0
        });

        // Descriptions
        var descs = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        body.add(descs, {
          left: 100,
          top: 210
        });
        descs.add(new qx.ui.basic.Label("This is a demo for the Qooxdoo UploadMgr contrib which can be found at <a href='https://github.com/johnspackman/UploadMgr'>https://github.com/johnspackman/UploadMgr</a>; UploadMgr supports background uploads with progress feedback for modern browsers with fallback for older browsers (eg IE6-IE8).").set({
          rich: true,
          width: 700,
          margin: [8, 0]
        }));
        descs.add(new qx.ui.basic.Label("<b>Upload Destination: </b> This application will upload to " + uploadUrl + " - you can change that by " + 'editing the Application.js or adding "?uploadUrl=" to the URL.').set({
          rich: true,
          width: 700,
          margin: [8, 0]
        }));
        descs.add(new qx.ui.basic.Label("Update:: You can now have multiple upload buttons per UploadMgr instance - below are a few extra upload buttons for testing.").set({
          rich: true,
          width: 700,
          margin: [8, 0]
        }));
        btn = new com.zenesis.qx.upload.UploadButton("btn 2 Add File(s)", "com/zenesis/qx/upload/test.png");
        uploader.addWidget(btn);
        body.add(btn, {
          left: 100,
          top: 345
        });
        btn = new com.zenesis.qx.upload.UploadButton("Add Image or *.mp4 File(s)", "com/zenesis/qx/upload/test.png");
        btn.set({
          acceptUpload: ".png,.mp4"
        });
        uploader.addWidget(btn);
        body.add(btn, {
          left: 250,
          top: 345
        });
        var btnDisabled = new com.zenesis.qx.upload.UploadButton("Add File(s)", "com/zenesis/qx/upload/test.png").set({
          enabled: false
        });
        uploader.addWidget(btnDisabled);
        body.add(btnDisabled, {
          left: 500,
          top: 345
        });
        var cbxDisabled = new qx.ui.form.CheckBox("Enable/Disable");
        cbxDisabled.addListener("changeValue", function (evt) {
          btnDisabled.setEnabled(evt.getData());
        });
        body.add(cbxDisabled, {
          left: 500,
          top: 325
        });
        var tb = new qx.ui.toolbar.ToolBar();
        body.add(tb, {
          left: 100,
          top: 395
        });
        var part = new qx.ui.toolbar.Part();
        tb.add(part);
        btn = new qx.ui.toolbar.Button("Do Nothing 1");
        btn.addListener("execute", function (evt) {
          alert("Do Nothing 1 pressed");
        });
        part.add(btn);

        // Menu button
        var menuTop = new qx.ui.toolbar.MenuButton("Menu");
        var menu = new qx.ui.menu.Menu();
        var mni = new com.zenesis.qx.upload.UploadMenuButton("Add File(s)", "com/zenesis/qx/upload/test.png");
        menu.add(mni);
        menuTop.setMenu(menu);
        part.add(menuTop);
        uploader.addWidget(mni);
        btn = new com.zenesis.qx.upload.UploadToolbarButton("Add File(s)", "com/zenesis/qx/upload/test.png");
        uploader.addWidget(btn);
        part.add(btn);
        btn = new qx.ui.toolbar.Button("Do Nothing 2");
        btn.addListener("execute", function (evt) {
          alert("Do Nothing 2 pressed");
        });
        part.add(btn);

        // Create an atom
        var atom = new qx.ui.basic.Atom("<span style='cursor: pointer'>qx.ui.basic.Atom upload button</span>").set({
          rich: true
        });
        body.add(atom, {
          left: 100,
          top: 460
        });
        uploader.addWidget(atom);
        var myBlob = new Blob(["This is my blob content"], {
          type: "text/plain"
        });
        uploader.addBlob("test blob", myBlob);
        btn = new com.zenesis.qx.upload.UploadButton("btn Add File(s) to zip", "com/zenesis/qx/upload/test.png");
        body.add(btn, {
          left: 50,
          top: 500
        });
        var cbx = new qx.ui.form.CheckBox("Multiple");
        cbx.bind("value", btn, "multiple");
        body.add(cbx, {
          left: 50,
          top: 550
        });
        cbx = new qx.ui.form.CheckBox("Directory");
        cbx.bind("value", btn, "directory");
        body.add(cbx, {
          left: 50,
          top: 570
        });
        var btnZip = new qx.ui.form.Button("download zip");
        btnZip.addListener("execute", /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(evt) {
            var blob;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return zipHandler.generateAsync({
                    type: "blob"
                  });
                case 2:
                  blob = _context.sent;
                  saveAs(blob, "test.zip");
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(), this);
        body.add(btnZip, {
          left: 50,
          top: 590
        });
        var zipUploader = new com.zenesis.qx.upload.UploadMgr(btn);
        var zipHandler = new com.zenesis.qx.upload.ZipHandler(zipUploader);
        zipUploader.setUploadHandler(zipHandler);
        var myBlob = new Blob(["This is my blob content"], {
          type: "text/plain"
        });
        var zipLst = new qx.ui.form.List();
        zipUploader.addListener("addFile", function (evt) {
          var file = evt.getData(),
            item = new qx.ui.form.ListItem(file.getFilename() + " (queued for upload)", null, file);
          zipLst.add(item);
          var stateListenerId = file.addListener("changeState", function (evt) {
            var state = evt.getData();
            this.debug(file.getFilename() + ": state=" + state + ", file size=" + file.getSize() + ", progress=" + file.getProgress());
            if (state == "uploading") item.setLabel(file.getFilename() + " (Uploading...)");else if (state == "uploaded") item.setLabel(file.getFilename() + " (Complete)");else if (state == "cancelled") item.setLabel(file.getFilename() + " (Cancelled)");
            if (state == "uploaded" || state == "cancelled") {
              file.removeListenerById(stateListenerId);
            }
          }, this);
        }, this);
        // add them to the UI
        zipLst.set({
          width: 500
        });
        body.add(zipLst, {
          left: 200,
          top: 500
        });
        zipUploader.setAutoUpload(true);
        zipUploader.addBlob("test blob", myBlob);
      }
    }
  });
  com.zenesis.qx.upload.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
