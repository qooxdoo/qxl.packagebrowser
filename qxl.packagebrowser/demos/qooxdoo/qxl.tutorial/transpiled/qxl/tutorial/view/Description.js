(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.embed.Html": {
        "construct": true
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
      "qx.util.ResourceManager": {},
      "qx.bom.request.Script": {},
      "qx.bom.Stylesheet": {},
      "qx.html.Element": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.layout.HBox": {}
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
   * @ignore(hljs.*)
   *
   * @asset(qx/icon/Tango/22/actions/media-skip-backward.png)
   * @asset(qx/icon/Tango/22/actions/media-playback-start.png)
   * @asset(qx/icon/Tango/22/actions/media-skip-forward.png)
   * @asset(qxl/tutorial/default.highlight.css)
   * @asset(qxl/tutorial/highlight.pack.js)
   */
  qx.Class.define("qxl.tutorial.view.Description", {
    extend: qx.ui.container.Composite,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      var layout = new qx.ui.layout.VBox();
      layout.setAlignX("center");
      this.setLayout(layout);
      this.setDecorator("main");
      this.setBackgroundColor("white");
      this.__P_595_0 = new qx.ui.embed.Html();
      this.__P_595_0.setMargin(10);
      this.__P_595_0.setOverflow("auto", "auto");
      if (qx.core.Environment.get("device.type") !== "desktop") {
        this.__P_595_0.getContentElement().setStyle("WebkitOverflowScrolling", "touch");
        this.__P_595_0.getContentElement().setStyle("touchAction", "auto");
      }
      this.add(this.__P_595_0, {
        flex: 1
      });
      this.add(this.__P_595_1());
      var engine = qx.core.Environment.get("engine.name");
      var browserVersion = qx.core.Environment.get("browser.documentmode");
      var isIE8OrLower = engine === "mshtml" && parseInt(browserVersion) <= 8;
      if (!isIE8OrLower) {
        this.loadHljs(function () {
          q("pre").forEach(function (el) {
            q(el).addClass("javascript");
            window.hljs.highlightBlock(el);
          });
        }, this);
      }
      this.updateView();
    },
    events: {
      run: "qx.event.type.Event",
      update: "qx.event.type.Data"
    },
    properties: {
      tutorial: {
        apply: "_applyTutorial",
        nullable: true
      },
      step: {
        check: "Number",
        apply: "_applyStep",
        event: "changeStep",
        init: 0
      }
    },
    members: {
      __P_595_0: null,
      __P_595_2: null,
      _applyTutorial: function _applyTutorial(value) {
        if (this.getStep() == 0) {
          this.updateView();
          this.__P_595_2.setEnabled(value && value.steps.length > 1);
        } else {
          this.setStep(0);
        }
      },
      _applyStep: function _applyStep(value) {
        this.updateView();
      },
      loadHljs: function loadHljs(clb, ctx) {
        // load the script
        var res = "qxl/tutorial/highlight.pack.js";
        var uri = qx.util.ResourceManager.getInstance().toUri(res);
        var loader = new qx.bom.request.Script();
        loader.onload = function () {
          clb.call(ctx);
        };
        loader.open("GET", uri);
        loader.send();

        // load the CSS
        res = "qxl/tutorial/default.highlight.css";
        uri = qx.util.ResourceManager.getInstance().toUri(res);
        qx.bom.Stylesheet.includeFile(uri);
      },
      updateView: function updateView() {
        if (!this.getTutorial()) {
          return;
        }
        var headline = "<p style='font-size: 2em; font-weight: bold;'>" + this.getTutorial().name.replace(/_/g, " ") + "</p>";
        var step = "<p style='margin-top: -10px; font-size: 11px; color: #CCC;'>Step " + (this.getStep() + 1) + "/" + this.getTutorial().steps.length + "</p>";
        var html = headline + step + this.getTutorial().steps[this.getStep()];
        this.__P_595_0.setHtml(html);
        qx.html.Element.flush();
        q(this.__P_595_0.getContentElement().getDomElement()).getChildren("pre").setStyles({
          color: "#262626",
          backgroundColor: "#EEE",
          borderRadius: "4px",
          padding: "7px"
        }).filter("pre").forEach(function (el) {
          q(el).addClass("javascript");
          window.hljs && window.hljs.highlightBlock(el);
        });
      },
      __P_595_1: function __P_595_1() {
        var pref = new qx.ui.toolbar.Button(null, "icon/22/actions/media-skip-backward.png");
        var update = new qx.ui.toolbar.Button("Help me out");
        var run = new qx.ui.toolbar.Button("Run", "icon/22/actions/media-playback-start.png");
        var next = new qx.ui.toolbar.Button(null, "icon/22/actions/media-skip-forward.png");
        this.__P_595_2 = next;

        // tooltips
        pref.setToolTipText("Previous step");
        update.setToolTipText("Replace the source code with a working copy");
        run.setToolTipText("Run the application");
        next.setToolTipText("Next step");

        // states
        pref.addState("left");
        update.addState("middle");
        run.addState("middle");
        next.addState("right");
        next.setIconPosition("right");

        // constant width for all buttons
        pref.setWidth(90);
        update.setWidth(90);
        run.setWidth(90);
        next.setWidth(90);

        // align text middle
        pref.setCenter(true);
        update.setCenter(true);
        run.setCenter(true);
        next.setCenter(true);

        // enabled for next / pref
        var self = this;
        this.bind("step", pref, "enabled", {
          converter: function converter(data) {
            return data > 0;
          }
        });
        this.bind("step", next, "enabled", {
          converter: function converter(data) {
            return Boolean(self.getTutorial()) && data < self.getTutorial().steps.length - 1;
          }
        });

        // next, pref control
        pref.addListener("execute", function () {
          this.setStep(this.getStep() - 1);
        }, this);
        next.addListener("execute", function () {
          this.setStep(this.getStep() + 1);
        }, this);

        // run / update events
        run.addListener("execute", function () {
          this.fireEvent("run");
        }, this);
        update.addListener("execute", function () {
          this.fireDataEvent("update", this.getTutorial().code[this.getStep()]);
        }, this);

        // container
        var container = new qx.ui.container.Composite();
        var layout = new qx.ui.layout.HBox();
        layout.setAlignX("center");
        container.setLayout(layout);
        container.setPadding([0, 10, 10, 10]);
        container.add(pref);
        container.add(update);
        container.add(run);
        container.add(next);
        return container;
      }
    }
  });
  qxl.tutorial.view.Description.$$dbClassInfo = $$dbClassInfo;
})();
