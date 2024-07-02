(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Manipulating": {
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
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.bom.client.Engine": {
        "require": true
      },
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qxl.tutorial.view.Header": {},
      "qx.ui.splitpane.Pane": {},
      "qxl.tutorial.view.Description": {},
      "qxl.playground.view.Editor": {},
      "qxl.playground.view.PlayArea": {},
      "qx.bom.History": {},
      "qxl.tutorial.view.SelectionWindow": {},
      "qxl.tutorial.view.Confirm": {},
      "qx.util.ResourceManager": {},
      "qx.io.request.Xhr": {},
      "q": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "engine.name": {
          "className": "qx.bom.client.Engine"
        },
        "browser.documentmode": {
          "className": "qx.bom.client.Browser"
        },
        "engine.version": {
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
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /* ************************************************************************
   ************************************************************************ */

  /**
   * This is the main application class of your custom application "tutorial"
   *
   * @asset(qxl/tutorial/*)
   * @require(qx.module.Manipulating)
   * @require(qx.module.Attribute)
   * @require(qx.module.Traversing)
   */
  qx.Class.define("qxl.tutorial.Application", {
    extend: qx.application.Standalone,
    statics: {
      mobileSupported: function mobileSupported() {
        var engine = qx.core.Environment.get("engine.name");

        // all webkits are ok
        if (engine == "webkit") {
          return true;
        }
        // ie > 10 is ok
        if (engine == "mshtml" && parseInt(qx.core.Environment.get("browser.documentmode")) >= 10) {
          return true;
        }
        // ff > 10 is ok
        if (engine == "gecko" && parseInt(qx.core.Environment.get("engine.version")) >= 10) {
          return true;
        }
        return false;
      },
      allowFade: function allowFade() {
        return !(qx.core.Environment.get("engine.name") == "mshtml" && parseInt(qx.core.Environment.get("browser.documentmode")) < 9);
      }
    },
    members: {
      __P_587_0: null,
      __P_587_1: null,
      __P_587_2: null,
      __P_587_3: null,
      __P_587_4: null,
      __P_587_5: null,
      __P_587_6: null,
      __P_587_7: null,
      __P_587_8: null,
      main: function main() {
        // Call super class
        qxl.tutorial.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        // Tutorials List
        this.__P_587_6 = {
          Hello_World: "Basic usage of a button",
          Form: "Simple login form with validation",
          Single_Value_Binding: "Binding of simple values"
        };
        this.__P_587_7 = {
          Hello_World: "One page showing a button",
          Pages: "App featuring two pages"
        };

        // Create main layout
        var mainComposite = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        this.getRoot().add(mainComposite, {
          edge: 0
        });

        // Create header
        this.__P_587_0 = new qxl.tutorial.view.Header();
        this.__P_587_0.addListener("selectTutorial", this.openSelectionWindow, this);
        mainComposite.add(this.__P_587_0);

        // create the content
        var content = new qx.ui.splitpane.Pane();
        content.setAppearance("app-splitpane");
        content.setPaddingTop(10);
        mainComposite.add(content, {
          flex: 1
        });
        this.__P_587_3 = new qxl.tutorial.view.Description();
        this.__P_587_3.addListener("run", this.run, this);
        this.__P_587_3.addListener("update", this.updateEditor, this);
        content.add(this.__P_587_3, 1);
        var actionArea = new qx.ui.splitpane.Pane();
        this.__P_587_5 = actionArea;
        this.__P_587_2 = new qxl.playground.view.Editor();
        actionArea.add(this.__P_587_2);
        qxl.playground.view.Editor.loadAce(function () {
          this.__P_587_2.init();
        }, this);
        this.__P_587_1 = new qxl.playground.view.PlayArea();
        this.__P_587_1.setBackgroundColor("white");
        actionArea.add(this.__P_587_1);
        this.__P_587_1.updateCaption("");
        this.__P_587_1.addListener("toggleMaximize", function (e) {
          if (!this.__P_587_2.isExcluded()) {
            this.__P_587_2.exclude();
            this.__P_587_3.exclude();
          } else {
            this.__P_587_2.show();
            this.__P_587_3.show();
          }
        }, this);
        content.add(actionArea, 3);

        // set the blocker color
        this.getRoot().setBlockerColor("rgba(0, 0, 0, 0.35)");
      },
      // overridden
      finalize: function finalize() {
        var state = qx.bom.History.getInstance().getState();
        if (state == "") {
          // use the hello world desktop as default
          this.loadTutorial("Hello_World", "desktop");
        } else {
          state = state.split("~");
          if (state[0] == "desktop") {
            this.loadTutorial(state[1], state[0]);
          } else if (qxl.tutorial.Application.mobileSupported()) {
            this.loadTutorial(state[1], state[0]);
          } else {
            // use the hello world desktop as default
            this.loadTutorial("Hello_World", "desktop");
          }
        }
      },
      openSelectionWindow: function openSelectionWindow() {
        if (!this.__P_587_4) {
          this.__P_587_4 = new qxl.tutorial.view.SelectionWindow(this.__P_587_6, this.__P_587_7);
          this.__P_587_4.addListener("changeTutorial", this.__P_587_9, this);
        }
        this.__P_587_4.open();
        this.render(); // make sure the DOM object is available for the fade
        if (qxl.tutorial.Application.allowFade()) {
          this.__P_587_4.fadeIn(300);
        } else {
          this.__P_587_4.show();
        }
      },
      __P_587_9: function __P_587_9(e) {
        var type = e.getData().type;
        var name = e.getData().name;
        this.loadTutorial(name, type);
        this.__P_587_2.setCode("");
        this.__P_587_2.setError();
        this.__P_587_1.reset();
        qx.bom.History.getInstance().setState(type + "~" + name);
      },
      updateEditor: function updateEditor(e) {
        var code = e.getData().toString();
        this.confirm("This will replace the current code in the editor.", function (ok) {
          if (ok.getData()) {
            this.__P_587_2.setCode(code);
            this.run();
          }
        }, this);
      },
      confirm: function confirm(text, callback, ctx) {
        if (!this.__P_587_8) {
          this.__P_587_8 = new qxl.tutorial.view.Confirm();
        }
        if (this.__P_587_8.getIgnore()) {
          callback.call(ctx, {
            getData: function getData() {
              return true;
            }
          });
          return;
        }
        this.__P_587_8.setMessage(text);
        this.__P_587_8.open();
        this.render();
        if (qxl.tutorial.Application.allowFade()) {
          this.__P_587_8.fadeIn(300);
        } else {
          this.__P_587_8.show();
        }
        this.__P_587_8.addListenerOnce("confirm", callback, ctx);
      },
      run: function run() {
        var code = this.__P_587_2.getCode();

        // don't run if we have no code
        if (code == "") {
          return;
        }

        // reset the play area
        this.__P_587_1.reset({}, {});
        var exc;
        // try to create a function
        try {
          this.fun = new Function(code);
        } catch (ex) {
          exc = ex;
        }
        // run the code
        try {
          // run the application
          this.fun.call(this.__P_587_1.getApp());
        } catch (ex) {
          exc = ex;
        }
        if (exc) {
          this.__P_587_2.setBackgroundColor("#FFF0F0");
          this.__P_587_2.setError(exc);
          this.error(exc);
        } else {
          this.__P_587_2.setError();
          this.__P_587_2.setBackgroundColor("white");
        }
      },
      /**
       * @param name
       * @param type
       * @lint ignoreDeprecated(alert)
       */
      loadTutorial: function loadTutorial(name, type) {
        var htmlFileName = qx.util.ResourceManager.getInstance().toUri("qxl/tutorial/" + type + "/" + name + ".html");
        var req = new qx.io.request.Xhr(htmlFileName);
        req.addListener("success", function (e) {
          var req = e.getTarget();
          this.__P_587_3.setTutorial(this.parseTutorial(name, type, req.getResponse()));
          this.__P_587_1.updateCaption(name.replace(/_/g, " ") + " (" + type + ")");
          this.__P_587_1.setMode(type !== "desktop" ? "mobile" : "ria");
          this.__P_587_5.setOrientation(type == "desktop" ? "vertical" : "horizontal");
        }, this);
        req.send();
        req.addListener("fail", function (evt) {
          this.error("Couldn't load file: " + htmlFileName);
          if (window.location.protocol == "file:") {
            // eslint-disable-next-line no-alert
            alert("Failed to load the tutorials from the file system.\n\nThe security settings of your browser may prohibit AJAX when using the file protocol. Please try the http protocol instead.");
          }
        }, this);
      },
      parseTutorial: function parseTutorial(name, type, html) {
        var tut = {
          name: name,
          type: type,
          steps: [],
          code: []
        };
        var div = q.create("<div>").setHtml(html);
        div.getChildren().forEach(function (item) {
          var script = q(item).getChildren("script");
          tut.code.push(script.getHtml());
          script.remove();
          tut.steps.push(q(item).getHtml());
        });
        return tut;
      }
    }
  });
  qxl.tutorial.Application.$$dbClassInfo = $$dbClassInfo;
})();
