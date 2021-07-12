function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      "qx.bom.History": {},
      "qx.log.appender.Native": {},
      "qx.ui.basic.Label": {},
      "qx.Promise": {},
      "qx.dev.unit.TestLoaderBasic": {},
      "qx.dev.unit.TestResult": {}
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
   */
  qx.Class.define("qxl.testtapper.Application", {
    extend: qx.application.Standalone,
    members: {
      _cnt: null,
      _failed: null,
      main: function main() {
        var _this = this;

        qxl.testtapper.Application.prototype.main.base.call(this);
        this._cnt = 0;
        this._failed = {}; // eslint-disable-next-line no-undef

        var cfg = {};
        qx.bom.History.getInstance().getState().split(';').forEach(function (item) {
          var _item$split = item.split('='),
              _item$split2 = _slicedToArray(_item$split, 2),
              key = _item$split2[0],
              value = _item$split2[1];

          cfg[key] = value;
        });
        qx.log.appender.Native;
        var matcher = new RegExp("\\.test\\." + (cfg.module || ''));
        this.getRoot().add(new qx.ui.basic.Label("\n                <h1>TestTAPper - the Qooxdoo Testrunner is at work</h1>\n                <p>See the debug console of your browser for details.</p>\n                ").set({
          rich: true
        }), {
          left: 100,
          top: 100
        });

        if (cfg.module) {
          console.log("# running only tests that match " + cfg.module);
        }

        var clazzes = Object.keys(qx.Class.$$registry).filter(function (clazz) {
          return clazz.match(matcher);
        }).sort();
        var pChain = new qx.Promise(function (resolve, reject) {
          return resolve(true);
        });
        clazzes.forEach(function (clazz) {
          pChain = pChain.then(function () {
            return _this.runAll(qx.Class.$$registry[clazz]).then(function () {
              console.info("# done testing ".concat(clazz, "."));
            });
          });
        });
        return pChain.then(function () {
          console.log("1..".concat(_this._cnt));

          _this.getRoot().add(new qx.ui.basic.Label("\n                    <h1>TestTAPper - is Done</h1>\n                    ").set({
            rich: true
          }), {
            left: 100,
            bottom: 100
          });
        });
      },
      runAll: function runAll(clazz) {
        var that = this;
        console.info("# start testing ".concat(clazz, "."));
        var methodNames = Object.keys(clazz.prototype).filter(function (name) {
          return name.match(/^test/);
        }).sort();
        return new qx.Promise(function (resolve) {
          var pos = clazz.classname.lastIndexOf(".");
          var pkgname = clazz.classname.substring(0, pos);
          var loader = new qx.dev.unit.TestLoaderBasic(pkgname);
          var testResult = new qx.dev.unit.TestResult();
          var methodNameIndex = -1;

          var next = function next() {
            methodNameIndex++;

            if (methodNameIndex < methodNames.length) {
              loader.runTests(testResult, clazz.classname, methodNames[methodNameIndex]);
            } else {
              resolve();
            }
          };

          var showExceptions = function showExceptions(arr) {
            arr.forEach(function (item) {
              if (item.test.getFullName) {
                var test = item.test.getFullName();
                that._failed[test] = true;
                that._cnt++;
                var message = String(item.exception);

                if (item.exception) {
                  if (item.exception.message) {
                    message = item.exception.message;
                    console.info("not ok ".concat(that._cnt, " - ").concat(test, " - ").concat(message));
                  } else {
                    console.error('# ' + item.exception);
                  }
                }
              } else {
                console.error('Unexpected Error - ', item);
              }
            });
            setTimeout(next, 0);
          };

          loader.getSuite().add(clazz);
          testResult.addListener("startTest", function (evt) {
            console.info('# start ' + evt.getData().getFullName());
          });
          testResult.addListener("wait", function (evt) {
            console.info('# wait ' + evt.getData().getFullName());
          });
          testResult.addListener("endMeasurement", function (evt) {
            console.info('# endMeasurement ' + evt.getData().getFullName());
          });
          testResult.addListener("endTest", function (evt) {
            var test = evt.getData().getFullName();

            if (!that._failed[test]) {
              that._cnt++;
              console.info("ok ".concat(that._cnt, " - ") + test);
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
            console.info("ok ".concat(that._cnt, " - # SKIP ").concat(test));
          });
          next();
        });
      }
    }
  });
  qxl.testtapper.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1626056964437