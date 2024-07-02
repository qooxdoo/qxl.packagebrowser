(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.testrunner.runner.TestRunnerBasic": {
        "construct": true,
        "require": true
      },
      "qx.dev.unit.MMock": {
        "construct": true
      },
      "qx.dev.unit.MRequirements": {
        "construct": true
      },
      "qx.dev.unit.MMeasure": {
        "construct": true
      },
      "qx.log.appender.Element": {
        "construct": true
      },
      "qx.log.Logger": {
        "construct": true
      },
      "qx.event.Registration": {},
      "qx.bom.Iframe": {},
      "qx.io.request.Xhr": {},
      "qx.dev.unit.TestLoaderInline": {},
      "qx.dev.unit.TestCase": {},
      "qx.dev.unit.TestResult": {},
      "qx.event.Timer": {},
      "qx.bom.client.Engine": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (d_wagner)
  
  ************************************************************************ */

  /**
   * The TestRunner is responsible for loading the test classes and keeping track
   * of the test suite's state.
   */
  qx.Class.define("qxl.testrunner.runner.TestRunner", {
    extend: qxl.testrunner.runner.TestRunnerBasic,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      this.TEST_MIXINS = [qx.dev.unit.MMock, qx.dev.unit.MRequirements];
      {
        this.TEST_MIXINS.push(qx.dev.unit.MMeasure);
      }
      qxl.testrunner.runner.TestRunnerBasic.constructor.call(this);

      // Get log appender element from view
      if (this.view.getLogAppenderElement) {
        this.__P_159_0 = new qx.log.appender.Element();
        qx.log.Logger.unregister(this.__P_159_0);
        this.__P_159_0.setElement(this.view.getLogAppenderElement());
        if (this._origin != "iframe") {
          qx.log.Logger.register(this.__P_159_0);
        }
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      origin: null,
      __P_159_1: null,
      frameWindow: null,
      __P_159_2: null,
      __P_159_3: null,
      __P_159_0: null,
      _externalTestClasses: null,
      TEST_MIXINS: null,
      _loadTests: function _loadTests() {
        switch (this._origin) {
          case "iframe":
            // Load the tests from a standalone AUT
            this.__P_159_1 = this.view.getIframe();
            qx.event.Registration.addListener(this.__P_159_1, "load", this._onLoadIframe, this);
            var src = "tests/index.html";
            src += "?testclass=" + this._testNameSpace;
            this.setTestSuiteState("loading");
            this.view.setAutUri(src);
            break;
          case "inline":
            this._loadInlineTests();
            break;
          case "external":
            this._loadExternalTests();
            break;
          case "push":
            var pushType = "code";
            //var pushType = "uri";

            if (pushType == "uri") {
              this.__P_159_1 = this.view.getIframe();
              this.frameWindow = qx.bom.Iframe.getWindow(this.__P_159_1);
              var evtFunc = function evtFunc(event) {
                // Load the tests from a standalone AUT
                qx.event.Registration.addListener(this.__P_159_1, "load", this._onLoadIframe, this);
                var src = event.data + "?testclass=" + this._testNameSpace;
                this.setTestSuiteState("loading");
                this.view.setAutUri(src);
              };
              var boundEvtFunc = evtFunc.bind(this);
              window.setTimeout(function () {
                boundEvtFunc({
                  data: "html/tests-source.html"
                });
              }, 1000);
            } else if (pushType == "code") {
              var req = new qx.io.request.Xhr("../build/script/tests.js");
              req.addListener("success", function (e) {
                var test = req.getResponse();
                this.__P_159_1 = this.view.getIframe();
                var doc = qx.bom.Iframe.getDocument(this.__P_159_1);
                var el = doc.createElement("script");
                el.text = test;
                doc.getElementsByTagName("head")[0].appendChild(el);
                this.loader = qx.bom.Iframe.getWindow(this.__P_159_1).qxl.testrunner.TestLoader.getInstance();
                this.loader.setTestNamespace(this._testNameSpace);
                this._wrapAssertions(this.frameWindow);
                this._getTestModel();
              }, this);
              req.send();
            }
        }
      },
      /**
       * Loads test classes that are a part of the TestRunner application.
       *
       * @param nameSpace {String|Object} Test namespace to be loaded
       */
      _loadInlineTests: function _loadInlineTests(nameSpace) {
        nameSpace = nameSpace || this._testNameSpace;
        this.setTestSuiteState("loading");
        this.loader = new qx.dev.unit.TestLoaderInline();
        this.loader.setTestNamespace(nameSpace);
        this._wrapAssertions();
        this._getTestModel();
      },
      // overridden
      _defineTestClass: function _defineTestClass(testClassName, membersMap) {
        var qxClass = qx.Class;
        var classDef = {
          extend: qx.dev.unit.TestCase,
          members: membersMap
        };
        if (this.TEST_MIXINS) {
          classDef.include = this.TEST_MIXINS;
        }
        return qxClass.define(testClassName, classDef);
      },
      _runTests: function _runTests() {
        if (this.__P_159_0) {
          this.__P_159_0.clear();
        }
        qxl.testrunner.runner.TestRunner.superclass.prototype._runTests.call(this);
      },
      _getTestResult: function _getTestResult() {
        if (this._origin == "iframe" || this._origin == "push") {
          var frameWindow = qx.bom.Iframe.getWindow(this.__P_159_1);
          var testResult = new frameWindow.qx.dev.unit.TestResult();
        } else {
          var testResult = new qx.dev.unit.TestResult();
        }
        return testResult;
      },
      _onTestEnd: function _onTestEnd(ev) {
        if (this._origin == "iframe" || this._origin == "push") {
          if (this.__P_159_0) {
            this.__P_159_4();
          }
        }
        qxl.testrunner.runner.TestRunner.superclass.prototype._onTestEnd.call(this);
      },
      /**
       * Waits until the test application in the iframe has finished loading, then
       * retrieves its TestLoader.
       * @param ev {qx.event.type.Event} Iframe's "load" event
       *
       * @lint ignoreDeprecated(alert)
       */
      _onLoadIframe: function _onLoadIframe(ev) {
        if (ev && ev.getType() == "load") {
          this.setTestSuiteState("loading");
        }
        if (!this.__P_159_2) {
          this.__P_159_2 = 0;
        }
        this.__P_159_2++;
        this.frameWindow = qx.bom.Iframe.getWindow(this.__P_159_1);
        if (this.__P_159_3) {
          this.__P_159_3.stop();
          this.__P_159_3 = null;
        }
        if (this.__P_159_2 <= 300) {
          // Detect failure to access frame after some period of time
          if (!this.frameWindow.body) {
            if (this.__P_159_2 >= 20 && window.location.protocol == "file:") {
              alert("Failed to load application from the file system.\n\nThe security settings of your browser may prohibit to access frames loaded using the file protocol. Please try the http protocol instead.");

              // Quit
              this.setTestSuiteState("error");
              return;
            }
          }

          // Repeat until testrunner in iframe is loaded
          if (!this.frameWindow.qxl || !this.frameWindow.qxl.testrunner) {
            this.__P_159_3 = qx.event.Timer.once(this._onLoadIframe, this, 100);
            return;
          }
          this.loader = this.frameWindow.qxl.testrunner.TestLoader.getInstance();
          // Avoid errors in slow browsers

          if (!this.loader) {
            this.__P_159_3 = qx.event.Timer.once(this._onLoadIframe, this, 100);
            return;
          }
          if (!this.loader.getSuite()) {
            this.__P_159_3 = qx.event.Timer.once(this._onLoadIframe, this, 100);
            return;
          }
        } else {
          this.setTestSuiteState("error");
          this.__P_159_2 = 0;
          return;
        }
        this.__P_159_2 = 0;
        var frameParts = this.frameWindow.qx.core.Environment.get("qxl.testrunner.testParts");
        if (frameParts instanceof this.frameWindow.Boolean) {
          frameParts = frameParts.valueOf();
        }
        if (frameParts) {
          for (var i = 0; i < frameParts.length; i++) {
            this._testParts.push(frameParts[i]);
          }
        }
        if (this.__P_159_0) {
          this.__P_159_0.clear();
        }
        if (qx.core.Environment.get("engine.name") !== "opera") {
          this._wrapAssertions(this.frameWindow);
        }
        this._getTestModel();
      },
      /**
       * Retrieves the AUT's log messages and writes them to the current appender.
       */
      __P_159_4: function __P_159_4() {
        var w = qx.bom.Iframe.getWindow(this.__P_159_1);
        var logger;
        if (w.qx && w.qx.log && w.qx.log.Logger) {
          logger = w.qx.log.Logger;
          if (this.view.getLogLevel) {
            logger.setLevel(this.view.getLogLevel());
          }
          // Register to flush the log queue into the appender.
          logger.register(this.__P_159_0);
          logger.clear();
          logger.unregister(this.__P_159_0);
        }
      }
    },
    destruct: function destruct() {
      this._disposeObjects("__P_159_0", "__P_159_3");
      this.__P_159_1 = null;
      delete this.__P_159_1;
      this.frameWindow = null;
      delete this.frameWindow;
    }
  });
  qxl.testrunner.runner.TestRunner.$$dbClassInfo = $$dbClassInfo;
})();
