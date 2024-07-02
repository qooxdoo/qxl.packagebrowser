function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
      "qx.log.Logger": {},
      "qx.data.marshal.Json": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {},
      "qx.ui.container.Scroll": {},
      "qx.ui.layout.Grow": {},
      "qx.ui.tree.VirtualTree": {},
      "qxl.testtapper.TreeItem": {},
      "qxl.logpane.LogPane": {},
      "qx.ui.splitpane.Pane": {},
      "qx.dev.unit.TestLoaderBasic": {},
      "qx.Promise": {},
      "qx.dev.unit.TestResult": {},
      "qx.util.format.NumberFormat": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2018 Oetiker+Partner AG
  
     License: MIT
  
     Authors: Tobias Oetiker
  
  ************************************************************************ */
  /**
   * Test Runner
   *
   * @asset(qxl/testtapper/run.js)
   * @asset(qx/icon/Oxygen/16/actions/dialog-ok.png)
   * @asset(qx/icon/Oxygen/16/actions/dialog-cancel.png)
   * @asset(qx/icon/Tango/16/places/folder.png)
   * @asset(qx/icon/Tango/16/places/folder-open.png)
   */
  qx.Class.define("qxl.testtapper.Application", {
    extend: qx.application.Standalone,
    members: {
      _cnt: null,
      _failed: null,
      __P_2_0: null,
      __P_2_1: null,
      log: function log(text) {
        console.log(text);
        qx.log.Logger.debug(text);
      },
      info: function info(text) {
        console.info(text);
        qx.log.Logger.info(text);
      },
      error: function error(text) {
        console.error(text);
        qx.log.Logger.error(text);
      },
      // add an item in the tree
      addTreeItem: function addTreeItem(status, testNumber, testClass, testName) {
        var message = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
        var classNode = this.__P_2_1.getChildren().toArray().find(function (item) {
          return item.getLabel() === testClass;
        });
        if (!classNode) {
          classNode = qx.data.marshal.Json.createModel({
            label: testClass,
            children: [],
            numberPassed: 0,
            numberFailed: 0
          });
          this.__P_2_1.getChildren().append(classNode);
        }
        var modelItem = qx.data.marshal.Json.createModel({
          label: testNumber + " " + testName,
          numberPassed: Number(status === "ok"),
          numberFailed: Number(status === "not ok"),
          message: message
        });
        classNode.getChildren().push(modelItem);
        // update parent nodes
        [classNode, this.__P_2_1].forEach(function (node) {
          node.setNumberPassed(node.getChildren().reduce(function (acc, curr) {
            return acc + curr.getNumberPassed();
          }, 0));
          node.setNumberFailed(node.getChildren().reduce(function (acc, curr) {
            return acc + curr.getNumberFailed();
          }, 0));
        });
      },
      getRootNodeData: function getRootNodeData() {
        return {
          label: "Running tests...",
          children: [],
          numberPassed: 0,
          numberFailed: 0
        };
      },
      main: function main() {
        var _this = this;
        qxl.testtapper.Application.superclass.prototype.main.call(this);
        this._cnt = 0;
        this._failed = {};
        // eslint-disable-next-line no-undef
        var cfg = {};
        if (typeof location !== "undefined" && location.search) {
          var params = decodeURI(location.search.substring(1));
          params += "&";
          params.split("&").forEach(function (item) {
            if (item.length) {
              var _item$split = item.split("="),
                _item$split2 = _slicedToArray(_item$split, 2),
                key = _item$split2[0],
                value = _item$split2[1];
              cfg[key] = value;
            }
          });
        }
        var main_container = new qx.ui.container.Composite();
        main_container.setLayout(new qx.ui.layout.VBox());
        main_container.add(new qx.ui.basic.Label("\n                <h1>TestTAPper - the Qooxdoo Testrunner is at work</h1>\n                <p>For details, please open your browser's javascript console</p>\n                ").set({
          rich: true
        }));
        this.getRoot().add(main_container, {
          edge: 5
        });

        // tree
        var scroller = new qx.ui.container.Scroll();
        var container = new qx.ui.container.Composite(new qx.ui.layout.Grow());
        //container.setAllowGrowX(false);
        //container.setAllowStretchX(false);
        scroller.add(container);
        var tree = this.__P_2_0 = new qx.ui.tree.VirtualTree(null, "label", "children");
        container.add(tree);
        var delegate = {
          bindItem: function bindItem(controller, item, id) {
            controller.bindDefaultProperties(item, id);
            ["numberPassed", "numberFailed", "message"].forEach(function (prop) {
              return controller.bindProperty(prop, prop, null, item, id);
            });
          },
          createItem: function createItem() {
            return new qxl.testtapper.TreeItem();
          }
        };
        tree.setDelegate(delegate);
        var model = this.__P_2_1 = qx.data.marshal.Json.createModel(this.getRootNodeData(), true);
        tree.setModel(model);

        // log pane
        var logger = new qxl.logpane.LogPane();
        logger.setShowToolBar(false);
        logger.fetch();

        // splitpane
        var pane = new qx.ui.splitpane.Pane("vertical");
        main_container.add(pane, {
          flex: 1
        });
        pane.add(scroller);
        pane.add(logger);

        // loader
        this.loader = new qx.dev.unit.TestLoaderBasic();
        var namespace = "qxl.testtapperdemo.test";
        this.loader.setTestNamespace(namespace);
        var clazzes = this.loader.getSuite().getTestClasses();
        if (cfg["class"]) {
          var matcher = new RegExp(cfg["class"]);
          this.log("# running only test classes that match " + matcher);
          clazzes = clazzes.filter(function (clazz) {
            return clazz.getName().match(matcher);
          });
        }
        var pChain = new qx.Promise(function (resolve) {
          return resolve(true);
        });
        clazzes.forEach(function (clazz) {
          pChain = pChain.then(function () {
            return _this.runAll(cfg, clazz).then(function () {
              _this.info("# done testing ".concat(clazz.getName(), "."));
            });
          });
        });
        return pChain.then(function () {
          _this.log("1..".concat(_this._cnt));
          _this.__P_2_1.setLabel("Tests have finished:");
        });
      },
      runAll: function runAll(cfg, clazz) {
        var _this2 = this;
        var that = this;
        this.info("# start testing ".concat(clazz.getName(), "."));
        var methods = clazz.getTestMethods();
        if (cfg.method) {
          var matcher = new RegExp(cfg.method);
          this.log("# running only test methods that match " + matcher);
          methods = methods.filter(function (method) {
            return method.getName().match(matcher);
          });
        }
        return new qx.Promise(function (resolve) {
          var testResult = new qx.dev.unit.TestResult();
          var methodNameIndex = -1;
          var next = function next() {
            methodNameIndex++;
            if (methodNameIndex < methods.length) {
              that.loader.runTests(testResult, clazz.getName(), methods[methodNameIndex].getName());
            } else {
              resolve();
            }
          };
          var startTime;
          var numberFormat = new qx.util.format.NumberFormat("en");
          numberFormat.set({
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            postfix: " ms"
          });
          var showExceptions = function showExceptions(arr) {
            arr.forEach(function (item) {
              if (item.test.getFullName) {
                var endTime = performance.now();
                var timeDiff = endTime - startTime;
                var test = item.test.getFullName();
                that._failed[test] = true;
                that._cnt++;
                if (item.exception) {
                  if (item.exception.message) {
                    var message = item.exception.message.toString();
                    _this2.info("not ok ".concat(that._cnt, " - ").concat(test, " - [").concat(numberFormat.format(timeDiff), "] - ").concat(message));
                    var _test$split = test.split(":"),
                      _test$split2 = _toArray(_test$split),
                      testClass = _test$split2[0],
                      testName = _test$split2.slice(1);
                    _this2.addTreeItem("not ok", that._cnt, testClass, testName.join(""), message);
                  } else {
                    _this2.error("# " + item.exception.toString());
                  }
                }
              } else {
                _this2.error("Unexpected Error - ", item);
              }
            });
            setTimeout(next, 0);
          };
          testResult.addListener("startTest", function (evt) {
            _this2.info("# start " + evt.getData().getFullName());
            startTime = performance.now();
          });
          testResult.addListener("wait", function (evt) {
            _this2.info("# wait " + evt.getData().getFullName());
          });
          testResult.addListener("endMeasurement", function (evt) {
            _this2.info("# endMeasurement " + evt.getData()[0].test.getFullName());
          });
          testResult.addListener("endTest", function (evt) {
            var endTime = performance.now();
            var timeDiff = endTime - startTime;
            var test = evt.getData().getFullName();
            if (!that._failed[test]) {
              that._cnt++;
              _this2.info("ok ".concat(that._cnt, " - ").concat(test, " - [").concat(numberFormat.format(timeDiff), "]"));
              var _test$split3 = test.split(":"),
                _test$split4 = _toArray(_test$split3),
                testClass = _test$split4[0],
                testName = _test$split4.slice(1);
              _this2.addTreeItem("ok", that._cnt, testClass, testName.join(""));
            }
            setTimeout(next, 0);
          });
          testResult.addListener("failure", function (evt) {
            return showExceptions(evt.getData());
          });
          testResult.addListener("error", function (evt) {
            return showExceptions(evt.getData());
          });
          testResult.addListener("skip", function (evt) {
            that._cnt++;
            var test = evt.getData()[0].test.getFullName();
            that._failed[test] = true;
            _this2.info("ok ".concat(that._cnt, " - # SKIP ").concat(test, " - ").concat(evt.getData()[0].exception.toString()));
          });
          next();
        });
      }
    }
  });
  qxl.testtapper.Application.$$dbClassInfo = $$dbClassInfo;
})();
