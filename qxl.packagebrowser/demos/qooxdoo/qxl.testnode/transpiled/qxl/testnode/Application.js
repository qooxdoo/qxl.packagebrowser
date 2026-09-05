(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Basic": {
        "require": true
      },
      "qx.dev.unit.TestLoaderBasic": {},
      "qx.Promise": {},
      "qx.dev.unit.TestResult": {},
      "qx.util.format.NumberFormat": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: Henner Kollmann 2020
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
     * Henner Kollmann (hkollmann) Henner.Kollmann@gmx.de
  
  ************************************************************************ */
  const minimist = require("minimist");
  const {
    performance
  } = require('perf_hooks');
  /**
   * This is the main application class of your custom application "qxl.testnode".
   *
   * If you have added resources to your app, remove the first '@' in the
   * following line to make use of them.
   * @asset(qxl/testnode/*)
   *
   */
  qx.Class.define("qxl.testnode.Application", {
    extend: qx.application.Basic,
    members: {
      main: async function () {
        let argv = minimist(process.argv.slice(2));
        await this.runTest(argv);
        process.exit(this._fail);
      },
      runTest: async function (argv) {
        this._cnt = 0;
        this._fail = 0;
        this._failed = {};
        let namespace = "qxl.testnode.test";
        this.loader = new qx.dev.unit.TestLoaderBasic();
        this.loader.setTestNamespace(namespace);
        let clazzes = this.loader.getSuite().getTestClasses();
        if (argv.class) {
          let matcher = new RegExp(argv.class);
          console.log("# running only test classes that match " + matcher);
          clazzes = clazzes.filter(clazz => clazz.getName().match(matcher));
        }
        let pChain = new qx.Promise(resolve => resolve(true));
        clazzes.forEach(clazz => {
          pChain = pChain.then(() => this.runAll(argv, clazz).then(() => {
            console.log(`# done testing ${clazz.getName()}.`);
          }));
        });
        return pChain.then(() => {
          console.log(`1..${this._cnt}`);
        });
      },
      runAll: function (argv, clazz) {
        let that = this;
        console.log(`# start testing ${clazz.getName()}.`);
        let methods = clazz.getTestMethods();
        if (argv.method) {
          let matcher = new RegExp(argv.method);
          console.log("# running only test methods that match " + matcher);
          methods = methods.filter(method => method.getName().match(matcher));
        }
        return new qx.Promise(resolve => {
          let testResult = new qx.dev.unit.TestResult();
          let methodNameIndex = -1;
          let next = () => {
            methodNameIndex++;
            if (methodNameIndex < methods.length) {
              that.loader.runTests(testResult, clazz.getName(), methods[methodNameIndex].getName());
            } else {
              resolve();
            }
          };
          let startTime;
          let numberFormat = new qx.util.format.NumberFormat();
          numberFormat.set({
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            postfix: " ms"
          });
          let showExceptions = arr => {
            arr.forEach(item => {
              if (item.test.getFullName) {
                let endTime = performance.now();
                let timeDiff = endTime - startTime;
                let test = item.test.getFullName();
                that._failed[test] = true;
                that._cnt++;
                that._fail++;
                if (item.exception) {
                  if (item.exception.message) {
                    let message = item.exception.toString();
                    console.log(`not ok ${that._cnt} - ${test} - [${numberFormat.format(timeDiff)}] - ${message}`);
                  } else {
                    this.error("# " + item.exception);
                  }
                }
              } else {
                this.error("Unexpected Error - ", item);
              }
            });
            setTimeout(next, 0);
          };
          testResult.addListener("startTest", evt => {
            console.log("# start " + evt.getData().getFullName());
            startTime = performance.now();
          });
          testResult.addListener("wait", evt => {
            console.log("# wait " + evt.getData().getFullName());
          });
          testResult.addListener("endMeasurement", evt => {
            console.log("# endMeasurement " + evt.getData()[0].test.getFullName());
          });
          testResult.addListener("endTest", evt => {
            let endTime = performance.now();
            let timeDiff = endTime - startTime;
            let test = evt.getData().getFullName();
            if (!that._failed[test]) {
              that._cnt++;
              console.log(`ok ${that._cnt} - ${test} - [${numberFormat.format(timeDiff)}]`);
            }
            setTimeout(next, 0);
          });
          testResult.addListener("failure", evt => showExceptions(evt.getData()));
          testResult.addListener("error", evt => showExceptions(evt.getData()));
          testResult.addListener("skip", evt => {
            that._cnt++;
            let test = evt.getData()[0].test.getFullName();
            that._failed[test] = true;
            console.log(`ok ${that._cnt} - # SKIP ${test} - ${evt.getData()[0].exception.toString()}`);
          });
          next();
        });
      },
      _cnt: null,
      _fail: null,
      _failed: null
    }
  });
  qxl.testnode.Application.$$dbClassInfo = $$dbClassInfo;
})();
