(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Manipulating": {
        "require": true
      },
      "qx.module.Css": {
        "require": true
      },
      "qx.module.Attribute": {
        "require": true
      },
      "qx.module.Traversing": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.MNativeOverflow": {
        "require": true
      },
      "qx.bom.client.Device": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Engine": {
        "construct": true,
        "require": true
      },
      "qx.bom.client.Browser": {
        "construct": true,
        "require": true
      },
      "q": {},
      "qx.html.Element": {},
      "qx.bom.String": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "device.type": {
          "construct": true,
          "className": "qx.bom.client.Device"
        },
        "engine.name": {
          "construct": true,
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "construct": true,
          "className": "qx.bom.client.Browser"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (danielwagner)
  
  ************************************************************************ */

  /* ************************************************************************
   ************************************************************************ */

  /**
   * Widget which displays the test results as a formatted list.
   *
   * @require(qx.module.Manipulating)
   * @require(qx.module.Css)
   * @require(qx.module.Attribute)
   * @require(qx.module.Traversing)
   */
  qx.Class.define("qxl.testrunner.view.widget.TestResultView", {
    extend: qx.ui.core.Widget,
    include: [qx.ui.core.MNativeOverflow],
    construct: function construct() {
      qx.ui.core.Widget.constructor.call(this);
      this.set({
        overflowX: "auto",
        overflowY: "auto",
        selectable: true
      });
      if (qx.core.Environment.get("device.type") !== "desktop") {
        this.getContentElement().setStyle("WebkitOverflowScrolling", "touch");
        this.getContentElement().setStyle("touchAction", "auto");
      }
      // Workaround for http://bugzilla.qooxdoo.org/show_bug.cgi?id=7679
      if (qx.core.Environment.get("engine.name") == "mshtml" && qx.core.Environment.get("browser.documentmode") == 9) {
        this.getContentElement().setStyle("position", "relative");
      }
    },
    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** Controls the display of stack trace information for exceptions */
      showStackTrace: {
        check: "Boolean",
        init: true,
        apply: "__P_177_0"
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __P_177_1: null,
      /**
       * Adds a new entry to the test results HTML
       *
       * @param testResult {Object} A test model object
       */
      addTestResult: function addTestResult(testResult) {
        //this.__results.push(testResult);
        testResult.addListener("changeState", function () {
          this.__P_177_2(testResult);
        }, this);
      },
      /**
       * Removes all entries from the list.
       *
       * @return {void}
       */
      clear: function clear() {
        this.getContentElement().getDomElement().innerHTML = "";
        this.__P_177_1 = {};
      },
      /**
       * Reacts to test state changes by creating a new list entry and/or
       * updating an existing one.
       *
       * @param testResult {qxl.testrunner.runner.TestItem} Test data object
       */
      __P_177_2: function __P_177_2(testResult) {
        if (testResult.getState() === testResult.getPreviousState()) {
          return;
        }
        if (!this.__P_177_1) {
          this.__P_177_1 = {};
        }
        var testName = testResult.getFullName();
        if (!this.__P_177_1[testName]) {
          var resultElement = this._getResultElement(testName);
          this.__P_177_1[testName] = resultElement;
          var contEl = this.getContentElement().getDomElement();
          contEl.appendChild(resultElement[0]);
        }
        this._updateResultElement(testResult);
      },
      /**
       * Creates a list item element for a single test result
       * @param fullName {String} The test's fully qualified name
       * @return {q} Collection containing the list item
       */
      _getResultElement: function _getResultElement(fullName) {
        var coll = q.create("<li></li>").addClass("testResult").append(q.create("<h3>" + fullName + "</h3>"));
        return coll;
      },
      /**
       * Updates an existing list entry corresponding to a given test result
       * @param testResult {qxl.testrunner.runner.TestItem} Test data object
       */
      _updateResultElement: function _updateResultElement(testResult) {
        var fullName = testResult.getFullName();
        var state = testResult.getState();
        var coll = this.__P_177_1[fullName];
        coll.removeAttribute("class").addClasses(["testResult", state]);

        //remove old error info
        coll.getChildren(".errorDetail").remove();
        var errorDetail = this._getErrorDetailElement(testResult);
        if (errorDetail) {
          coll.append(errorDetail);
        }
      },
      // overridden
      _createContentElement: function _createContentElement() {
        return new qx.html.Element("ul", {}, {
          "class": "resultPane"
        });
      },
      /**
       * Returns a DOM tree containing details about the exception(s) that
       * occurred during a test function's runtime
       * @param testResult {qxl.testrunner.runner.TestItem} Test data object
       * @return {q} Collection containing the error detail element
       */
      _getErrorDetailElement: function _getErrorDetailElement(testResult) {
        var exceptArr = testResult.getExceptions();
        if (exceptArr.length == 0) {
          return null;
        }
        var coll = q.create("<div class='errorDetail'></div>");
        for (var i = 0, l = exceptArr.length; i < l; i++) {
          var error = exceptArr[i].exception;
          var errorStr = error.toString ? error.toString() : error.message ? error.message : "Unknown Error";
          var prefix = error.classname && error.classname == "qx.dev.unit.MeasurementResult" ? "" : "Error message is: <br />";
          coll.append(q.create("<strong>" + prefix + qx.bom.String.escape(errorStr).replace(/\n/g, "<br/>") + "</strong>"));
          var trace = testResult.getStackTrace(exceptArr[i].exception);
          if (trace && trace.length > 0) {
            var traceEl = q.create('<div class="trace">Stack trace: <br/>' + trace + "</div>");
            if (!this.getShowStackTrace()) {
              traceEl.hide();
            }
            coll.append(traceEl);
          }
        }
        return coll;
      },
      /**
       * Display or hide stack trace info for all test results.
       *
       * @param value {Boolean} Display (true) or hide (false) stack trace info.
       * @return {void}
       */
      __P_177_0: function __P_177_0(value) {
        var coll = q(".resultPane .trace");
        value ? coll.show() : coll.hide();
      }
    },
    destruct: function destruct() {
      this.__P_177_1 = null;
    }
  });
  qxl.testrunner.view.widget.TestResultView.$$dbClassInfo = $$dbClassInfo;
})();
