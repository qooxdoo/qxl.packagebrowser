(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.testrunner.view.Abstract": {
        "require": true
      },
      "qxl.testrunner.view.MAutoRun": {
        "require": true
      },
      "qx.core.Init": {
        "construct": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.splitpane.Pane": {
        "construct": true
      },
      "qx.ui.decoration.Decorator": {
        "construct": true
      },
      "qx.ui.core.queue.Manager": {
        "construct": true
      },
      "qx.ui.layout.HBox": {},
      "qx.ui.basic.Label": {},
      "qxl.versionlabel.VersionLabel": {},
      "qx.ui.core.Spacer": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Part": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.form.TextField": {},
      "qx.ui.toolbar.CheckBox": {},
      "qx.bom.Cookie": {},
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.Button": {},
      "qx.ui.menu.CheckBox": {},
      "qx.ui.menu.Separator": {},
      "qx.event.Registration": {},
      "qx.lang.Function": {},
      "qx.ui.container.Stack": {},
      "qx.ui.tree.VirtualTree": {},
      "qx.data.Array": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.basic.Image": {},
      "qx.ui.layout.Dock": {},
      "qx.util.ResourceManager": {},
      "qx.bom.Stylesheet": {},
      "qxl.testrunner.view.widget.TestResultView": {},
      "qx.ui.embed.Iframe": {},
      "qxl.logpane.LogPane": {},
      "qx.ui.indicator.ProgressBar": {},
      "qxl.testrunner.runner.ModelUtil": {},
      "qx.data.marshal.Json": {},
      "qxl.testrunner.view.MPerformance": {},
      "qx.bom.Iframe": {},
      "qx.ui.command.Command": {}
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
  
  ************************************************************************ */

  /**
   * Widget-based Testrunner view
   *
   * @asset(qx/icon/Tango/22/actions/media-playback-start.png)
   * @asset(qx/icon/Tango/22/actions/media-playback-stop.png)
   * @asset(qx/icon/Tango/22/actions/view-refresh.png)
   * @asset(qx/icon/Tango/16/categories/system.png)
   * @asset(qx/icon/Tango/22/categories/system.png)
   * @asset(qx/icon/Tango/22/actions/system-run.png)
   * @asset(qx/icon/Tango/22/status/dialog-information.png)
   * @asset(qx/icon/Tango/22/status/dialog-warning.png)
   * @asset(qx/icon/Tango/22/status/dialog-error.png)
   * @asset(qx/icon/Tango/16/actions/document-properties.png)
   * @asset(qx/icon/Tango/22/actions/media-seek-forward.png)
   * @asset(qx/icon/Tango/22/actions/document-open-recent.png)
   * @asset(qxl/testrunner/view/widget/css/qxl.testrunner.css)
   * @asset(qxl/testrunner/view/widget/image/*)
   */
  qx.Class.define("qxl.testrunner.view.widget.Widget", {
    extend: qxl.testrunner.view.Abstract,
    include: [qxl.testrunner.view.MAutoRun],
    construct: function construct() {
      this.__P_2_0 = {};
      this.__P_2_1 = qx.core.Init.getApplication();
      var mainContainer = new qx.ui.container.Composite();
      mainContainer.setBackgroundColor("light-background");
      var layout = new qx.ui.layout.VBox();
      mainContainer.setLayout(layout);
      this.__P_2_1.getRoot().add(mainContainer, {
        edge: 0
      });

      // Header
      mainContainer.add(this.__P_2_2());

      // Toolbar
      mainContainer.add(this.__P_2_3());

      // Main Pane
      // split
      var mainsplit = new qx.ui.splitpane.Pane("horizontal");
      mainsplit.setAppearance("app-splitpane");
      mainContainer.add(mainsplit, {
        flex: 1
      });
      this.__P_2_4 = new qx.ui.decoration.Decorator().set({
        backgroundColor: "white"
      });
      var leftPane = this.__P_2_5();
      mainsplit.add(leftPane, 0);
      var outerPane = new qx.ui.splitpane.Pane("horizontal");
      outerPane.setDecorator(null);
      mainsplit.add(outerPane, 1);
      var centerPane = this.__P_2_6();
      outerPane.add(centerPane, 1);
      var rightPane = this.__P_2_7();
      outerPane.add(rightPane, 1);
      qx.ui.core.queue.Manager.flush();
      var statuspane = this.__P_2_8();
      mainContainer.add(statuspane);
      this._makeCommands();
      this._applyPaneWidths(centerPane, rightPane);
      leftPane.addListener("resize", this.__P_2_9);
      centerPane.addListener("resize", this.__P_2_9);
      rightPane.addListener("resize", this.__P_2_9);
    },
    statics: {
      /** Grey icons for items without a result */
      TREEICONS: {
        "package": "qxl/testrunner/view/widget/image/package18_grey.gif",
        "class": "qxl/testrunner/view/widget/image/class18_grey.gif",
        test: "qxl/testrunner/view/widget/image/method_public18_grey.gif"
      },
      /** Green icons for items without failures */
      TREEICONSOK: {
        "package": "qxl/testrunner/view/widget/image/package18.gif",
        "class": "qxl/testrunner/view/widget/image/class18.gif",
        test: "qxl/testrunner/view/widget/image/method_public18.gif"
      },
      /** Red icons for items with failures */
      TREEICONSERROR: {
        "package": "qxl/testrunner/view/widget/image/package_warning18.gif",
        "class": "qxl/testrunner/view/widget/image/class_warning18.gif",
        test: "qxl/testrunner/view/widget/image/method_public_error18.gif"
      }
    },
    properties: {
      /** Controls the display of stack trace information for exceptions */
      showStackTrace: {
        check: "Boolean",
        event: "changeShowStackTrace",
        init: true
      },
      /** Delete any existing results from the list before running tests? */
      clearResultsOnRun: {
        check: "Boolean",
        event: "changeClearResultsOnRun",
        init: true
      },
      /** Running count of failed tests */
      failedTestCount: {
        check: "Integer",
        init: 0,
        event: "changeFailedTestCount"
      },
      /** Running count of passed tests */
      successfulTestCount: {
        check: "Integer",
        init: 0,
        event: "changeSuccessfulTestCount"
      },
      /** Running count of skipped tests */
      skippedTestCount: {
        check: "Integer",
        init: 0,
        event: "changeSkippedTestCount"
      },
      /** Reload the test suite before running the selected tests */
      autoReload: {
        check: "Boolean",
        init: false
      },
      /** Log level for the AUT log appender */
      logLevel: {
        check: ["debug", "info", "warn", "error"],
        init: "debug",
        event: "changeLogLevel"
      }
    },
    members: {
      /**
       * Creates the application header.
       */

      __P_2_1: null,
      __P_2_10: null,
      __P_2_11: null,
      __P_2_0: null,
      __P_2_4: null,
      __P_2_12: null,
      __P_2_13: null,
      __P_2_14: null,
      __P_2_15: null,
      __P_2_16: null,
      __P_2_17: null,
      __P_2_18: null,
      __P_2_19: null,
      __P_2_20: false,
      __P_2_21: null,
      __P_2_22: null,
      __P_2_23: null,
      __P_2_24: null,
      __P_2_25: null,
      /**
       * Returns the iframe element the AUT should be loaded in.
       * @return {Element} Iframe element
       */
      getIframe: function getIframe() {
        return this.__P_2_10.getContentElement().getDomElement();
      },
      /**
       * Returns a DIV element that will be used by a
       * {@link qx.log.appender.Element} to display the AUT's log output.
       *
       * @return {Element} DIV element
       */
      getLogAppenderElement: function getLogAppenderElement() {
        return this.__P_2_23.getAppenderElement();
      },
      /**
       * Returns the application header
       *
       * @return {qx.ui.container.Composite} The application header
       */
      __P_2_2: function __P_2_2() {
        var layout = new qx.ui.layout.HBox();
        var header = new qx.ui.container.Composite(layout);
        header.setAppearance("app-header");
        var title = new qx.ui.basic.Label("Test Runner");
        var version = new qxl.versionlabel.VersionLabel();
        version.setFont("default");
        header.add(title);
        header.add(new qx.ui.core.Spacer(), {
          flex: 1
        });
        header.add(version);
        return header;
      },
      /**
       * Returns the tool bar with the main test suite controls
       *
       * @lint ignoreDeprecated(eval)
       * @return {qx.ui.toolbar.ToolBar} The tool bar
       */
      __P_2_3: function __P_2_3() {
        var toolbar = new qx.ui.toolbar.ToolBar();
        var part1 = new qx.ui.toolbar.Part();
        toolbar.add(part1);
        this.bind("testSuiteState", part1, "enabled", {
          converter: function converter(data) {
            switch (data) {
              case "init":
              case "loading":
                return false;
                break;
              default:
                return true;
                break;
            }
          }
        });

        // Run button
        var runButton = this.__P_2_13 = new qx.ui.toolbar.Button(this.__P_2_1.tr("<b>Run&nbsp;Tests!</b>"), "icon/22/actions/media-playback-start.png");
        runButton.set({
          textColor: "#36a618",
          rich: true,
          visibility: "excluded",
          toolTipText: this.__P_2_1.tr("Run selected tests (Ctrl+R)")
        });
        runButton.setUserData("value", "run");
        runButton.addListener("execute", this.__P_2_26, this);
        part1.add(runButton);

        // Stop button
        var stopButton = this.__P_2_14 = new qx.ui.toolbar.Button(this.__P_2_1.tr("<b>Stop&nbsp;Tests</b>"), "icon/22/actions/media-playback-stop.png");
        stopButton.set({
          textColor: "#ff0000",
          rich: true,
          toolTipText: this.__P_2_1.tr("Stop the test suite (Ctrl+S)")
        });
        stopButton.setUserData("value", "stop");
        stopButton.addListener("execute", this.__P_2_27, this);
        part1.add(stopButton);

        // Reload button
        var reloadButton = new qx.ui.toolbar.Button(this.__P_2_1.tr("Reload"), "icon/22/actions/view-refresh.png");
        part1.add(reloadButton);
        reloadButton.setToolTipText(this.__P_2_1.tr("Reload the test suite (Ctrl+Shift+R)"));
        reloadButton.addListener("execute", this.__P_2_28, this);
        this.bind("testSuiteState", reloadButton, "enabled", {
          converter: function converter(data) {
            switch (data) {
              case "init":
              case "loading":
              case "running":
                return false;
                break;
              default:
                return true;
            }
          }
        });
        var autUriField = new qx.ui.form.TextField();
        this.__P_2_15 = autUriField;
        this.bind("autUri", autUriField, "value");
        autUriField.addListener("keydown", function (ev) {
          if (ev.getKeyIdentifier() == "Enter") {
            this.__P_2_28();
          }
        }, this);
        autUriField.setToolTipText(this.__P_2_1.tr("Application under test URL"));
        autUriField.set({
          width: 300,
          alignY: "middle",
          marginLeft: 3
        });
        toolbar.add(autUriField, {
          flex: 1
        });
        var part3 = new qx.ui.toolbar.Part();
        toolbar.add(part3);
        var autoReloadToggle = new qx.ui.toolbar.CheckBox(this.__P_2_1.tr("Auto Reload"), "icon/22/actions/system-run.png");
        var autoReloadValue = qx.bom.Cookie.get("qxl.testrunner.autoReload");
        if (autoReloadValue !== null) {
          autoReloadToggle.setValue(eval(autoReloadValue));
        }
        autoReloadToggle.bind("value", this, "autoReload", {
          converter: function converter(data) {
            qx.bom.Cookie.set("qxl.testrunner.autoReload", data.toString(), 365);
            return data;
          }
        });
        part3.add(autoReloadToggle);
        var nativeProfilingToggle = this.__P_2_25 = new qx.ui.toolbar.CheckBox(this.__P_2_1.tr("Native Profiling"), "icon/22/actions/document-open-recent.png");
        nativeProfilingToggle.setToolTipText("Additionally use the browser's native profiling feature (console.profile) for performance tests");
        var nativeProfilingValue = qx.bom.Cookie.get("qxl.testrunner.nativeProfiling");
        if (nativeProfilingValue !== null) {
          nativeProfilingToggle.setValue(eval(nativeProfilingValue));
        }
        nativeProfilingToggle.bind("value", this, "nativeProfiling", {
          converter: function converter(data) {
            qx.bom.Cookie.set("qxl.testrunner.nativeProfiling", data.toString(), 365);
            return data;
          }
        });
        part3.add(nativeProfilingToggle);
        nativeProfilingToggle.exclude();

        // enable overflow handling
        toolbar.setOverflowHandling(true);

        // add a button for overflow handling
        var chevron = new qx.ui.toolbar.MenuButton(null, "icon/22/actions/media-seek-forward.png");
        chevron.setAppearance("toolbar-button"); // hide the down arrow icon
        toolbar.add(chevron);
        toolbar.setOverflowIndicator(chevron);

        // set priorities for overflow handling
        toolbar.setRemovePriority(part1, 2);
        toolbar.setRemovePriority(part3, 3);
        toolbar.setRemovePriority(autUriField, 1);

        // add the overflow menu
        this.__P_2_11 = new qx.ui.menu.Menu();
        chevron.setMenu(this.__P_2_11);

        // add the listener
        toolbar.addListener("hideItem", this._onHideItem, this);
        toolbar.addListener("showItem", this._onShowItem, this);
        return toolbar;
      },
      /**
       * Handler for the overflow handling which will be called on hide.
       * @param e {qx.event.type.Data} The event.
       */
      _onHideItem: function _onHideItem(e) {
        var partItem = e.getData();
        var menuItems = this._getMenuItems(partItem);
        for (var i = 0, l = menuItems.length; i < l; i++) {
          menuItems[i].setVisibility("visible");
        }
      },
      /**
       * Handler for the overflow handling which will be called on show.
       * @param e {qx.event.type.Data} The event.
       */
      _onShowItem: function _onShowItem(e) {
        var partItem = e.getData();
        var menuItems = this._getMenuItems(partItem);
        for (var i = 0, l = menuItems.length; i < l; i++) {
          menuItems[i].setVisibility("excluded");
        }
      },
      /**
       * Helper for the overflow handling. It is responsible for returning a
       * corresponding menu item for the given toolbar item.
       *
       * @param partItem {qx.ui.core.Widget} The toolbar item to look for.
       * @return {qx.ui.core.Widget} The coresponding menu items.
       */
      _getMenuItems: function _getMenuItems(partItem) {
        var cachedItems = [];
        if (partItem instanceof qx.ui.toolbar.Part) {
          var partButtons = partItem.getChildren();
          for (var i = 0, l = partButtons.length; i < l; i++) {
            if (partButtons[i].getVisibility() == "excluded") {
              continue;
            }
            var cachedItem = this.__P_2_0[partButtons[i].toHashCode()];
            if (!cachedItem) {
              if (partButtons[i] instanceof qx.ui.toolbar.Button) {
                cachedItem = new qx.ui.menu.Button(partButtons[i].getLabel().translate(), partButtons[i].getIcon());
                cachedItem.getChildControl("label", false).setRich(true);
                cachedItem.setTextColor(partButtons[i].getTextColor());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                partButtons[i].bind("enabled", cachedItem, "enabled");
                cachedItem.setEnabled(partButtons[i].getEnabled());
              } else if (partButtons[i] instanceof qx.ui.toolbar.CheckBox) {
                cachedItem = new qx.ui.menu.CheckBox(partButtons[i].getLabel().translate());
                cachedItem.setIcon(partButtons[i].getIcon());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                partButtons[i].bind("value", cachedItem, "value");
                partButtons[i].bind("enabled", cachedItem, "enabled");
                cachedItem.setEnabled(partButtons[i].getEnabled());
                cachedItem.setValue(partButtons[i].getValue());
              } else {
                cachedItem = new qx.ui.menu.Separator();
              }
              var listeners = qx.event.Registration.getManager(partButtons[i]).getListeners(partButtons[i], "execute");
              if (listeners && listeners.length > 0) {
                for (var j = 0, k = listeners.length; j < k; j++) {
                  cachedItem.addListener("execute", qx.lang.Function.bind(listeners[j].handler, listeners[j].context));
                }
              }
              listeners = qx.event.Registration.getManager(partButtons[i]).getListeners(partButtons[i], "changeValue");
              if (listeners && listeners.length > 0) {
                for (var j = 0, k = listeners.length; j < k; j++) {
                  cachedItem.addListener("changeValue", qx.lang.Function.bind(listeners[j].handler, listeners[j].context));
                }
              }
              listeners = qx.event.Registration.getManager(partButtons[i]).getListeners(partButtons[i], "tap");
              if (listeners && listeners.length > 0) {
                for (var j = 0, k = listeners.length; j < k; j++) {
                  cachedItem.addListener("tap", qx.lang.Function.bind(listeners[j].handler, listeners[j].context));
                }
              }
              this.__P_2_11.addAt(cachedItem, 0);
              this.__P_2_0[partButtons[i].toHashCode()] = cachedItem;
              cachedItems.push(cachedItem);
            }
          }
        }
        return cachedItems;
      },
      /**
       * Returns a container with the list of available tests
       *
       * @return {qx.ui.container.Composite}
       */
      __P_2_5: function __P_2_5() {
        var layout = new qx.ui.layout.VBox();
        //layout.setSeparator("separator-vertical");

        var container = new qx.ui.container.Composite(layout).set({
          decorator: "main"
        });
        var leftPaneWidth = qx.bom.Cookie.get("qxl.testrunner.leftPaneWidth");
        if (leftPaneWidth !== null) {
          container.setWidth(parseInt(leftPaneWidth));
        } else {
          container.setWidth(250);
        }
        container.setUserData("pane", "left");
        var caption = new qx.ui.basic.Label(this.__P_2_1.tr("Tests")).set({
          font: "bold",
          decorator: this.__P_2_4,
          padding: [8, 3, 7, 10],
          allowGrowX: true,
          allowGrowY: true
        });
        container.add(caption);
        var stack = this.__P_2_22 = new qx.ui.container.Stack();
        this.__P_2_12 = new qx.ui.tree.VirtualTree();
        this.__P_2_12.set({
          labelPath: "name",
          childProperty: "children",
          delegate: {
            bindItem: this.__P_2_29
          },
          decorator: "separator-vertical",
          padding: 0
        });
        var selection = new qx.data.Array();
        selection.addListener("change", this._onChangeTestSelection, this);
        this.__P_2_12.setSelection(selection);
        this.setSelectedTests(this.__P_2_12.getSelection());
        stack.add(this.__P_2_12);
        var loadingContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        loadingContainer.setDecorator("separator-vertical");
        loadingContainer.setBackgroundColor("white");
        this.__P_2_21 = loadingContainer;
        stack.add(loadingContainer);
        var loadingImg = new qx.ui.basic.Image("qxl/testrunner/view/widget/image/loading66.gif");
        loadingContainer.add(loadingImg, {
          left: "40%",
          top: "40%"
        });
        container.add(stack, {
          flex: 1
        });
        return container;
      },
      /**
       * Open a selected node
       *
       * @param ev {qx.event.type.Data} Data event containing the selection
       */
      _onChangeTestSelection: function _onChangeTestSelection(ev) {
        var selected = this.getSelectedTests();
        if (selected.length > 0) {
          var node = selected.getItem(0);
          if (!this.__P_2_12.isNodeOpen(node)) {
            this.__P_2_12.openNodeAndParents(node);
          }
          qx.bom.Cookie.set("qxl.testrunner.selectedTest", node.getFullName());
        }
      },
      /**
       * Sets the tree icons according to the model item's state and type.
       *
       * @param controller {MWidgetController} The currently used controller.
       * @param node {qx.ui.core.Widget} The created and used node.
       * @param id {Integer} The id for the binding.
       */
      __P_2_29: function __P_2_29(controller, node, id) {
        controller.bindProperty("", "model", null, node, id);
        controller.bindProperty("name", "label", null, node, id);
        controller.bindProperty("state", "icon", {
          converter: function converter(data, model) {
            var state = data;
            var type = model.getType();
            var iconMap;
            switch (state) {
              case "success":
                iconMap = "TREEICONSOK";
                break;
              case "error":
              case "failure":
                iconMap = "TREEICONSERROR";
                break;
              default:
                iconMap = "TREEICONS";
                break;
            }
            return qxl.testrunner.view.widget.Widget[iconMap][type];
          }
        }, node, id);
      },
      /**
       * Store pane width in cookie
       *
       * @param e {Event} Event data: The pane
       * @return {void}
       */
      __P_2_9: function __P_2_9(e) {
        var pane = this.getUserData("pane");
        var width = e.getData().width;
        qx.bom.Cookie.set("qxl.testrunner." + pane + "PaneWidth", width, 365);
      },
      /**
       * Returns a container with the progress bar and test results view
       *
       * @return {qx.ui.container.Composite} The center pane's content
       */
      __P_2_6: function __P_2_6() {
        var layout = new qx.ui.layout.VBox();
        layout.setSeparator("separator-vertical");
        var p1 = new qx.ui.container.Composite(layout).set({
          decorator: "main"
        });
        p1.setUserData("pane", "center");
        var inner = new qx.ui.container.Composite(new qx.ui.layout.Dock());
        inner.setBackgroundColor("white");
        p1.add(inner);
        var caption1 = new qx.ui.basic.Label(this.__P_2_1.tr("Test Results")).set({
          font: "bold",
          decorator: this.__P_2_4,
          padding: [8, 3, 7, 10],
          allowGrowX: true,
          allowGrowY: true
        });
        inner.add(caption1, {
          edge: "west"
        });
        var toolbar = new qx.ui.toolbar.ToolBar();
        toolbar.setBackgroundColor("white");
        toolbar.setPadding([0, 0]);
        inner.add(toolbar, {
          edge: "east"
        });
        toolbar.add(this._getResultsMenuButton());
        p1.add(this.__P_2_30());
        var uri = qx.util.ResourceManager.getInstance().toUri("qxl/testrunner/view/widget/css/qxl.testrunner.css");
        qx.bom.Stylesheet.includeFile(uri);
        this.__P_2_17 = new qxl.testrunner.view.widget.TestResultView();
        p1.add(this.__P_2_17, {
          flex: 1
        });
        this.bind("showStackTrace", this.__P_2_17, "showStackTrace");
        return p1;
      },
      _getResultsMenuButton: function _getResultsMenuButton() {
        var resultsMenuButton = new qx.ui.toolbar.MenuButton("Options", "icon/16/actions/document-properties.png");
        resultsMenuButton.set({
          margin: [3, 5]
        });
        var resultsMenu = new qx.ui.menu.Menu();

        // Stack trace toggle
        var stacktoggle = new qx.ui.menu.CheckBox(this.__P_2_1.tr("Show Stack Trace"));
        stacktoggle.setValue(true);
        stacktoggle.bind("value", this, "showStackTrace");
        resultsMenu.add(stacktoggle);
        var cleartoggle = new qx.ui.menu.CheckBox(this.__P_2_1.tr("Clear results on run"));
        cleartoggle.setValue(true);
        cleartoggle.bind("value", this, "clearResultsOnRun");
        resultsMenu.add(cleartoggle);
        resultsMenuButton.setMenu(resultsMenu);
        return resultsMenuButton;
      },
      /**
       * Returns the rightmost pane containing the AUT iframe and log
       *
       * @return {qx.ui.splitpane.Pane} The configured pane
       */
      __P_2_7: function __P_2_7() {
        // Second Page
        var pane2 = new qx.ui.splitpane.Pane("vertical");
        pane2.setDecorator(null);
        pane2.add(this.__P_2_31(), 1);
        pane2.add(this.__P_2_32(), 1);
        pane2.setUserData("pane", "right");
        return pane2;
      },
      /**
       * Returns a container with the AUT iframe widget
       *
       * @return {qx.ui.container.Composite} Iframe container
       */
      __P_2_31: function __P_2_31() {
        var layout2 = new qx.ui.layout.VBox();
        var pp3 = new qx.ui.container.Composite(layout2).set({
          decorator: "main"
        });
        var caption3 = new qx.ui.basic.Label(this.__P_2_1.tr("Application under test")).set({
          font: "bold",
          decorator: this.__P_2_4,
          padding: [8, 3, 7, 10],
          allowGrowX: true,
          allowGrowY: true
        });
        pp3.add(caption3);
        var iframe = new qx.ui.embed.Iframe();
        iframe.resetSource();
        this.__P_2_10 = iframe;
        pp3.add(iframe, {
          flex: 1
        });
        iframe.set({
          width: 50,
          height: 50,
          zIndex: 5,
          decorator: "separator-vertical"
        });
        return pp3;
      },
      /**
       * Returns a container with the AUT log element
       *
       * @return {log.LogView} The log container
       */
      __P_2_32: function __P_2_32() {
        this.__P_2_23 = new qxl.logpane.LogPane();
        //this.__logView.setShowLogLevel(true);
        this.__P_2_23.bind("logLevel", this, "logLevel");
        return this.__P_2_23;
      },
      /**
       * Returns a container with the progress bar
       *
       * @return {qx.ui.container.Composite} The progressbar container
       */
      __P_2_30: function __P_2_30() {
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox());
        var bar = this.__P_2_16 = new qx.ui.indicator.ProgressBar(0, 10);
        bar.setMargin(5);
        container.add(bar);
        var labelBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(3));
        labelBox.setPadding(2);
        labelBox.setMarginTop(2);
        labelBox.setMarginLeft(5);
        container.add(labelBox);
        labelBox.add(new qx.ui.basic.Label(this.__P_2_1.tr("Queued: ")));
        var queuecnt = new qx.ui.basic.Label("0").set({
          width: 40,
          font: "bold"
        });
        labelBox.add(queuecnt);
        this.bind("testCount", queuecnt, "value", {
          converter: function converter(data) {
            if (data) {
              return data.toString();
            }
            return "0";
          }
        });
        labelBox.add(new qx.ui.basic.Label(this.__P_2_1.tr("Failed: ")));
        var failcnt = new qx.ui.basic.Label("0").set({
          width: 40,
          font: "bold",
          textColor: "#9D1111"
        });
        labelBox.add(failcnt);
        this.bind("failedTestCount", failcnt, "value", {
          converter: function converter(data) {
            return data.toString();
          }
        });
        labelBox.add(new qx.ui.basic.Label(this.__P_2_1.tr("Succeeded: ")));
        var succcnt = new qx.ui.basic.Label("0").set({
          width: 40,
          font: "bold",
          textColor: "#51A634"
        });
        labelBox.add(succcnt);
        this.bind("successfulTestCount", succcnt, "value", {
          converter: function converter(data) {
            return data.toString();
          }
        });
        labelBox.add(new qx.ui.basic.Label(this.__P_2_1.tr("Skipped: ")));
        var skipcnt = new qx.ui.basic.Label("0").set({
          width: 40,
          font: "bold",
          marginRight: 5,
          textColor: "#888"
        });
        labelBox.add(skipcnt);
        this.bind("skippedTestCount", skipcnt, "value", {
          converter: function converter(data) {
            return data.toString();
          }
        });
        return container;
      },
      /**
       * Returns a container with the status bar
       *
       * @return {qx.ui.container.Composite} Status bar container
       */
      __P_2_8: function __P_2_8() {
        var layout = new qx.ui.layout.HBox(3);
        var statuspane = new qx.ui.container.Composite(layout);
        statuspane.set({
          margin: [0, 10, 10, 10]
        });
        var l2 = new qx.ui.basic.Label("0").set({
          font: "bold",
          textAlign: "right"
        });
        this.__P_2_18 = l2;
        statuspane.add(l2);
        statuspane.add(new qx.ui.basic.Label(this.__P_2_1.tr("tests selected")).set({
          alignY: "middle"
        }));
        this.getSelectedTests().addListener("change", function (ev) {
          var selectedName = "";
          var count = 0;
          var selectedTests = this.getSelectedTests();
          if (selectedTests !== null && selectedTests.length > 0) {
            count = qxl.testrunner.runner.ModelUtil.getItemsByProperty(selectedTests.getItem(0), "type", "test").length;
            selectedName = this.getSelectedTests().getItem(0).getFullName();
          }
          this.__P_2_18.setValue(count.toString());
        }, this);
        statuspane.add(new qx.ui.core.Spacer(), {
          flex: 1
        });

        // System Info
        statuspane.add(new qx.ui.basic.Label(this.__P_2_1.tr("System Status: ")).set({
          textAlign: "right"
        }));
        var l3 = new qx.ui.basic.Label("").set({
          textAlign: "right"
        });
        statuspane.add(l3);
        this.__P_2_19 = l3;
        return statuspane;
      },
      /**
       *
       * @param value {String} New suite state value
       * @param old {String} Old suite state value
       * @lint ignoreDeprecated(alert)
       */
      _applyTestSuiteState: function _applyTestSuiteState(value, old) {
        switch (value) {
          case "init":
            this.setStatus("Waiting for tests");
            break;
          case "loading":
            this.__P_2_22.setSelection([this.__P_2_21]);
            this.setStatus("Loading tests...");
            this.__P_2_12.setEnabled(false);
            this.__P_2_12.resetModel();
            break;
          case "ready":
            this.__P_2_22.setSelection([this.__P_2_12]);
            this.setStatus("Test suite ready");
            this.reset();
            this.__P_2_16.setValue(0);
            this._setActiveButton(this.__P_2_13);
            this._applyTestCount(this.getTestCount());
            this.__P_2_12.setEnabled(true);
            // Don't apply the cookie selection if the previous state was
            // "aborted" (user taped stop, then run)
            if (old === "loading") {
              this.__P_2_33();
            }
            // no selection from cookie, select root node
            if (this.getSelectedTests().length === 0) {
              this.__P_2_12.getSelection().push(this.getTestModel());
            }
            if (this.getAutoReload() && this.__P_2_20 || this.getAutoRun()) {
              this.fireEvent("runTests");
            }
            break;
          case "running":
            this.__P_2_16.setValue(0);
            var totalTests = qxl.testrunner.runner.ModelUtil.getItemsByProperty(this.getSelectedTests().getItem(0), "type", "test");
            this.__P_2_16.setMaximum(totalTests.length);
            this.setStatus("Running tests...");
            this._setActiveButton(this.__P_2_14);
            this.__P_2_12.setEnabled(false);
            break;
          case "finished":
            this.setStatus("Test suite finished.");
            this._setActiveButton(this.__P_2_13);
            this.__P_2_12.setEnabled(true);
            if (this.getAutoReload() && this.__P_2_20) {
              this.__P_2_20 = false;
            }
            break;
          case "aborted":
            this.setStatus("Test run stopped");
            this._setActiveButton(this.__P_2_13);
            this.__P_2_12.setEnabled(true);
            break;
          case "error":
            this.setStatus("Error loading test suite!");
            this.__P_2_22.setSelection([this.__P_2_12]);
            alert(this._getAutLoadErrorMessage());
        }
      },
      _applyAutUri: function _applyAutUri(value, old) {
        if (value == null) {
          this.__P_2_10.resetSource();
        } else {
          this.__P_2_10.setSource(value);
        }
      },
      _applyTestModel: function _applyTestModel(value, old) {
        if (!value || value === old) {
          return;
        }
        var model = qx.data.marshal.Json.createModel(value);
        this.__P_2_12.setModel(model);
        this.__P_2_12.openNode(model.getChildren().getItem(0));
        this.__P_2_17.clear();
        if (qx.Class.hasMixin(this.constructor, qxl.testrunner.view.MPerformance) && window.console && window.console.profile) {
          var autWindow = window;
          {
            autWindow = qx.bom.Iframe.getWindow(this.getIframe());
          }
          var mixin = autWindow.qx.dev.unit.MMeasure;
          if (qxl.testrunner.runner.ModelUtil.hasTestClassWithMixin(model, mixin, autWindow)) {
            this.__P_2_25.show();
          } else {
            this.__P_2_25.exclude();
          }
        }
      },
      _applyTestCount: function _applyTestCount(value, old) {},
      _applyStatus: function _applyStatus(value, old) {
        if (value) {
          this.__P_2_19.setValue(value);
        }
      },
      _onTestChangeState: function _onTestChangeState(testResultData) {
        var state = testResultData.getState();
        var testName = testResultData.getFullName();
        switch (state) {
          case "skip":
            if (!this.__P_2_24[testName]) {
              this.__P_2_24[testName] = state;
              this.__P_2_16.setValue(this.__P_2_16.getValue() + 1);
              this.setSkippedTestCount(this.getSkippedTestCount() + 1);
            }
            break;
          case "error":
          case "failure":
            if (!this.__P_2_24[testName]) {
              this.__P_2_24[testName] = state;
              this.__P_2_16.setValue(this.__P_2_16.getValue() + 1);
              this.setFailedTestCount(this.getFailedTestCount() + 1);
            }
            break;
          case "success":
            if (!this.__P_2_24[testName]) {
              this.__P_2_24[testName] = state;
              this.__P_2_16.setValue(this.__P_2_16.getValue() + 1);
              this.setSuccessfulTestCount(this.getSuccessfulTestCount() + 1);
            }
        }
      },
      /**
       * Toggle the visibility of the run/stop buttons
       *
       * @param button {qx.ui.core.Widget} The button that should be visible
       */
      _setActiveButton: function _setActiveButton(button) {
        button.setVisibility("visible");
        if (button == this.__P_2_13) {
          this.__P_2_14.setVisibility("excluded");
        } else if (button == this.__P_2_14) {
          this.__P_2_13.setVisibility("excluded");
        }
      },
      /**
       * Returns the error message to be displayed if the AUT couldn't be loaded
       * @return {String} error message
       */
      _getAutLoadErrorMessage: function _getAutLoadErrorMessage() {
        var autDebug;
        try {
          autDebug = this.__P_2_10.getWindow().qx.core.Environment.get("qx.debug");
        } catch (ex) {
          autDebug = false;
        }
        var autSrc = autDebug ? "/html/tests-source.html" : "/html/tests.html";
        return "The test suite couldn't be loaded. Make sure the AUT URI is correct, e.g. \"" + autSrc + '".' + '\n\nAlso check the testclass parameter: This should be "' + qx.core.Init.getApplication().runner._testNameSpace + '" according to the current configuration.';
      },
      /**
       * Run the selected tests
       */
      __P_2_26: function __P_2_26() {
        if (this.getAutoReload()) {
          this.__P_2_20 = true;
          this.__P_2_28();
          return;
        }

        /*
         * Reverse the selection to trigger a "change" event on the selection
         * which causes the runner to rebuild its queue, allowing the user to
         * run the same selection multiple times.
         * Reversing the selection has no visible effect since it only contains
         * one item.
         */
        this.getSelectedTests().reverse();
        this.reset();
        this.fireEvent("runTests");
      },
      /**
       * Stop a running test suite
       */
      __P_2_27: function __P_2_27() {
        this.fireEvent("stopTests");
      },
      /**
       * Reload the test suite
       */
      __P_2_28: function __P_2_28() {
        this.__P_2_22.setSelection([this.__P_2_21]);
        this.getSelectedTests().removeAll();
        var src = this.__P_2_15.getValue();
        this.resetAutUri();
        this.setAutUri(src);
      },
      __P_2_33: function __P_2_33() {
        var cookieSelection = qx.bom.Cookie.get("qxl.testrunner.selectedTest");
        if (cookieSelection) {
          var found = qxl.testrunner.runner.ModelUtil.getItemByFullName(this.getTestModel(), cookieSelection);
          if (found) {
            this.getSelectedTests().removeAll();
            this.getSelectedTests().push(found);
          }
        }
      },
      // overridden
      addTestResult: function addTestResult(testResultData) {
        qxl.testrunner.view.widget.Widget.superclass.prototype.addTestResult.call(this, testResultData);
        this.__P_2_17.addTestResult(testResultData);
      },
      /**
       * Resets the result counters so that the suite can be run again.
       */
      reset: function reset() {
        this.__P_2_24 = {};
        this.resetFailedTestCount();
        this.resetSuccessfulTestCount();
        this.resetSkippedTestCount();
        if (this.getClearResultsOnRun()) {
          this.__P_2_17.clear();
        }
      },
      /**
       * Create keyboard shortcuts for the main controls.
       */
      _makeCommands: function _makeCommands() {
        var runTests = new qx.ui.command.Command("Ctrl+R");
        runTests.addListener("execute", this.__P_2_26, this);
        var stopTests = new qx.ui.command.Command("Ctrl+S");
        stopTests.addListener("execute", this.__P_2_27, this);
        var reloadAut = new qx.ui.command.Command("Ctrl+Shift+R");
        reloadAut.addListener("execute", this.__P_2_28, this);
      },
      /**
       * Applies the cookie width values to the center and right panes
       *
       * @param centerPane {qx.ui.core.Widget} center pane
       * @param rightPane {qx.ui.core.Widget} right pane
       */
      _applyPaneWidths: function _applyPaneWidths(centerPane, rightPane) {
        var centerPaneWidth = qx.bom.Cookie.get("qxl.testrunner.centerPaneWidth");
        var rightPaneWidth = qx.bom.Cookie.get("qxl.testrunner.rightPaneWidth");
        if (centerPaneWidth !== null && rightPaneWidth !== null) {
          var centerWidth = parseInt(centerPaneWidth);
          var rightWidth = parseInt(rightPaneWidth);
          centerPane.setLayoutProperties({
            flex: centerWidth
          });
          rightPane.setLayoutProperties({
            flex: rightWidth
          });
        }
      }
    },
    destruct: function destruct() {
      this._disposeObjects("__P_2_10", "__P_2_11", "__P_2_4", "__P_2_12", "__P_2_13", "__P_2_14", "__P_2_16", "__P_2_17", "__P_2_18", "__P_2_19", "__P_2_15", "__P_2_21", "__P_2_22", "__P_2_1");
      this._disposeMap("__P_2_0");
    }
  });
  qxl.testrunner.view.widget.Widget.$$dbClassInfo = $$dbClassInfo;
})();
