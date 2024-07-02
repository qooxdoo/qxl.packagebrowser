(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
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
      "qx.ui.splitpane.Pane": {
        "construct": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.basic.Image": {
        "construct": true
      },
      "qx.ui.form.TextField": {
        "construct": true
      },
      "qx.event.Timer": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qxl.logpane.LogPane": {
        "construct": true
      },
      "qx.ui.container.Stack": {
        "construct": true
      },
      "qx.bom.History": {
        "construct": true
      },
      "qxl.demobrowser.InfoWindow": {
        "construct": true
      },
      "qx.ui.command.Command": {},
      "qx.ui.form.TextArea": {},
      "qx.bom.Viewport": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.toolbar.Part": {},
      "qx.data.SingleValueBinding": {},
      "qx.bom.client.Browser": {
        "require": true
      },
      "qx.ui.menu.Menu": {},
      "qx.ui.form.RadioGroup": {},
      "qx.Theme": {},
      "qx.theme.manager.Meta": {},
      "qx.ui.menu.RadioButton": {},
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.toolbar.RadioButton": {},
      "qx.ui.menu.Separator": {},
      "qx.ui.menu.Button": {},
      "qx.event.Registration": {},
      "qx.lang.Function": {},
      "qx.ui.toolbar.CheckBox": {},
      "qx.ui.menu.CheckBox": {},
      "qx.ui.embed.Iframe": {},
      "qx.ui.embed.Html": {},
      "qx.bom.client.Device": {
        "require": true
      },
      "qx.ui.tree.Tree": {},
      "qx.ui.tree.TreeFolder": {},
      "qx.ui.window.Window": {},
      "qx.ui.tree.TreeFile": {},
      "qx.io.request.Xhr": {},
      "qxl.demobrowser.TreeDataHandler": {},
      "qx.util.StringBuilder": {},
      "qx.dev.Tokenizer": {},
      "qx.bom.String": {},
      "qxl.versionlabel.VersionLabel": {},
      "qx.ui.core.Spacer": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.serve.appspath": {
          "load": true
        },
        "qx.serve.docspath": {},
        "browser.name": {
          "className": "qx.bom.client.Browser"
        },
        "device.type": {
          "className": "qx.bom.client.Device"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Thomas Herchenroeder (thron7)
       * Fabian Jakobs (fjakobs)
       * Fabian Jakobs (fjakobs)
       * Martin Wittemann (martinwittemann)
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * The GUI definition of the qooxdoo unit test runner.
   *
   * @asset(qx/icon/Tango/22/actions/media-playback-start.png)
   * @asset(qx/icon/Tango/16/actions/edit-find.png)
   * @asset(qx/icon/Tango/22/actions/go-previous.png)
   * @asset(qx/icon/Tango/22/actions/go-next.png)
   * @asset(qx/icon/Tango/22/actions/edit-redo.png)
   * @asset(qx/icon/Tango/22/actions/edit-clear.png)
   * @asset(qx/icon/Tango/22/actions/application-exit.png)
   * @asset(qx/icon/Tango/22/apps/utilities-color-chooser.png)
   * @asset(qx/icon/Tango/22/apps/office-spreadsheet.png)
   * @asset(qx/icon/Tango/22/apps/utilities-log-viewer.png)
   * @asset(qx/icon/Tango/22/apps/internet-web-browser.png)
   * @asset(qx/icon/Tango/22/mimetypes/executable.png)
   * @asset(qx/icon/Tango/22/actions/help-contents.png)
   * @asset(qx/icon/Tango/22/actions/help-about.png)
   * @asset(qx/icon/Tango/22/actions/media-seek-forward.png)
   * @asset(qx/icon/Tango/22/mimetypes/text-html.png)
   * @asset(qx/icon/Tango/22/actions/dialog-ok.png)
   * @asset(qx/icon/Tango/22/places/folder-open.png)
   * @asset(qx/icon/Tango/22/actions/help-about.png)
   * @asset(qx/icon/Tango/22/actions/view-refresh.png)
   * @asset(qx/icon/Tango/22/actions/process-stop.png)
   * @asset(qx/icon/Tango/22/apps/internet-feed-reader.png)
   * @asset(qx/icon/Tango/22/actions/dialog-cancel.png)
   * @asset(qx/icon/Tango/22/places/folder.png)
  
   *
   * @ignore(location.*)
   * @ignore(qx.$$appRoot)
   */
  qx.Class.define("qxl.demobrowser.DemoBrowser", {
    extend: qx.ui.container.Composite,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.__P_2_0 = {};

      // Configure layout
      var layout = new qx.ui.layout.VBox();
      this.setLayout(layout);

      // Header
      this.add(this._createHeader());

      // Data
      this.widgets = {};
      this.tests = {};
      this.__P_2_1 = "qx.theme.Indigo";

      // Commands & Menu Bar
      this.__P_2_2();
      this.__P_2_3 = this.__P_2_4();
      this.add(this.__P_2_3);

      // Main Split Pane
      var mainsplit = new qx.ui.splitpane.Pane("horizontal");
      mainsplit.setAppearance("app-splitpane");
      this.mainsplit = mainsplit;
      var infosplit = new qx.ui.splitpane.Pane("horizontal");
      infosplit.setDecorator(null);
      this._infosplit = infosplit;
      this.add(mainsplit, {
        flex: 1
      });

      // tree side
      var leftComposite = this._leftComposite = new qx.ui.container.Composite();
      leftComposite.setLayout(new qx.ui.layout.VBox(3));
      mainsplit.add(leftComposite, 0);

      // search
      var searchComposlite = new qx.ui.container.Composite();
      searchComposlite.setLayout(new qx.ui.layout.HBox(3));
      searchComposlite.setAppearance("textfield");
      leftComposite.add(searchComposlite);
      var searchIcon = new qx.ui.basic.Image("icon/16/actions/edit-find.png");
      searchComposlite.add(searchIcon);
      this._searchTextField = new qx.ui.form.TextField();
      this._searchTextField.setLiveUpdate(true);
      this._searchTextField.setAppearance("widget");
      this._searchTextField.setPlaceholder("Filter...");
      var filterTimer = new qx.event.Timer(500);
      filterTimer.addListener("interval", function (ev) {
        this.filter(this._searchTextField.getValue());
        filterTimer.stop();
      }, this);
      this._searchTextField.addListener("changeValue", function (ev) {
        filterTimer.restart();
      }, this);
      searchComposlite.add(this._searchTextField, {
        flex: 1
      });

      // create the status of the tree
      this._status = new qx.ui.basic.Label("");
      this._status.setAppearance("widget");
      this._status.setWidth(80);
      this._status.setTextAlign("right");
      searchComposlite.add(this._status);
      mainsplit.add(infosplit, 1);
      this._tree = this.__P_2_5();
      leftComposite.add(this._tree, {
        flex: 1
      });
      this.__P_2_6();
      this._demoView = this.__P_2_7();
      {
        infosplit.add(this._demoView, 2);
      }
      var htmlView = this.__P_2_8 = this.__P_2_9();
      var jsView = this.__P_2_10 = this.__P_2_11();
      var logView = this.__P_2_12 = new qxl.logpane.LogPane();
      logView.setDecorator(null);
      var stack = this.__P_2_13 = new qx.ui.container.Stack();
      stack.setDecorator("main");
      stack.add(htmlView);
      stack.add(jsView);
      stack.add(logView);
      infosplit.add(stack, 1);
      stack.resetSelection();
      stack.exclude();

      // Back button and bookmark support
      this._history = qx.bom.History.getInstance();
      this._history.addListener("changeState", function (e) {
        var newSample = e.getData().replace("~", "/");
        if (this._currentSample != newSample) {
          this.setCurrentSample(newSample);
        }
      }, this);
      this.__P_2_14 = [this.__P_2_15, this.__P_2_16];
      {
        this.__P_2_14.push(this.__P_2_17);
        this.__P_2_14.push(this.__P_2_18);
      }
      this.__P_2_19 = new qx.event.Timer(250);
      this.__P_2_19.addListener("interval", this.__P_2_20, this);
      this.__P_2_19.start();
      this.__P_2_21 = new qxl.demobrowser.InfoWindow(this.tr("Info"));
      this.__P_2_21.setAutoCenter(true);
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // ------------------------------------------------------------------------1
      //   CONSTRUCTOR HELPERS
      // ------------------------------------------------------------------------

      _iframe: null,
      __P_2_1: null,
      __P_2_19: null,
      __P_2_22: null,
      _tree: null,
      _status: null,
      _searchTextField: null,
      __P_2_17: null,
      __P_2_23: null,
      __P_2_14: null,
      _versionFilter: null,
      _navPart: null,
      __P_2_15: null,
      __P_2_16: null,
      __P_2_18: null,
      __P_2_24: null,
      __P_2_3: null,
      _leftComposite: null,
      _infosplit: null,
      _demoView: null,
      __P_2_25: null,
      __P_2_0: null,
      __P_2_26: null,
      _urlWindow: null,
      __P_2_21: null,
      __P_2_13: null,
      __P_2_8: null,
      __P_2_10: null,
      __P_2_12: null,
      __P_2_27: null,
      defaultUrl: "demo/welcome.html",
      playgroundUrl: (qx.core.Environment.get("qx.serve.appspath") || "https://www.qooxdoo.org/qxl.") + "playground/",
      __P_2_2: function __P_2_2() {
        this._cmdObjectSummary = new qx.ui.command.Command("Ctrl+O");
        this._cmdObjectSummary.addListener("execute", this.__P_2_28, this);
        this._cmdRunSample = new qx.ui.command.Command("F5");
        this._cmdRunSample.addListener("execute", this.runSample, this);
        this._cmdPrevSample = new qx.ui.command.Command("Ctrl+Left");
        this._cmdPrevSample.addListener("execute", this.playPrev, this);
        this._cmdNextSample = new qx.ui.command.Command("Ctrl+Right");
        this._cmdNextSample.addListener("execute", this.playNext, this);
        this._cmdSampleInOwnWindow = new qx.ui.command.Command("Ctrl+N");
        this._cmdSampleInOwnWindow.addListener("execute", this.__P_2_29, this);
      },
      /**
       * TODOC
       * @param e
       */
      __P_2_30: function __P_2_30(e) {
        var theOtherGroup = e.getTarget() === this.__P_2_27 ? this.__P_2_26 : this.__P_2_27;
        var selected = e.getData()[0];
        if (theOtherGroup && selected) {
          theOtherGroup.setModelSelection([selected.getModel()]);
        }
        var show = selected != null ? selected.getUserData("value") : "";
        switch (show) {
          case "html":
            this.__P_2_13.setSelection([this.__P_2_8]);
            this.__P_2_13.show();
            break;
          case "js":
            this.__P_2_13.setSelection([this.__P_2_10]);
            this.__P_2_13.show();
            break;
          case "log":
            this.__P_2_13.setSelection([this.__P_2_12]);
            this.__P_2_13.show();
            break;
          default:
            this.__P_2_13.resetSelection();
            this.__P_2_13.exclude();
        }
      },
      /**
       * TODOC
       *
       */
      __P_2_28: function __P_2_28() {
        var cw = this._iframe.getWindow();
        var msg;
        if (cw && cw.qx) {
          msg = cw.qx.dev.ObjectSummary.getInfo();
        } else {
          msg = "Unable to access namespace. Maybe no demo loaded.";
        }
        var area = new qx.ui.form.TextArea(msg);
        area.setDecorator(null);
        area.setAutoSize(true);
        area.setMaxHeight(qx.bom.Viewport.getHeight() - 100);
        this.__P_2_21.setContent(area);
        this.__P_2_21.setWidth(400);
        this.__P_2_21.show();
      },
      __P_2_29: function __P_2_29() {
        var sampUrl = this._iframe.getSource();
        // remove th query params
        sampUrl = sampUrl.substr(0, sampUrl.indexOf("?"));
        // add the current theme as env setting
        {
          sampUrl += "?qxenv:qx.theme:" + this.__P_2_1;
        }
        window.open(sampUrl, "_blank");
      },
      __P_2_31: function __P_2_31(code) {
        var playable = !!code;
        var currentTags = this._tree.getSelection()[0].getUserData("tags");
        if (currentTags) {
          playable = playable && !currentTags.includes("noPlayground");
        }
        this.__P_2_17.setEnabled(playable);
        this.__P_2_23 = code;
      },
      __P_2_32: function __P_2_32() {
        if (this.__P_2_23) {
          var code = this.__P_2_23;
          var codeJson = "{\"code\": \"" + encodeURIComponent(code) + '"}';
          var url = this.playgroundUrl + "#" + encodeURIComponent(codeJson);
          window.open(url, "_blank");
        } else {
          var label = new qx.ui.basic.Label(this.tr("Could not open the Playground."));
          this.__P_2_21.setContent(label);
          this.__P_2_21.setWidth(200);
          this.__P_2_21.show();
        }
      },
      /**
       * Handler for opening the api viewer.
       */
      __P_2_33: function __P_2_33() {
        window.open((qx.core.Environment.get("qx.serve.appspath") || "https://www.qooxdoo.org/qxl.") + "apiviewer/");
      },
      /**
       * Handler for opening the manual.
       */
      __P_2_34: function __P_2_34() {
        window.open((qx.core.Environment.get("qx.serve.docspath") || "https://www.qooxdoo.org/") + "docs");
      },
      __P_2_4: function __P_2_4() {
        var bar = new qx.ui.toolbar.ToolBar();

        // NAVIGATION BUTTONS
        // -----------------------------------------------------

        // -- run button
        this._runbutton = new qx.ui.toolbar.Button(this.tr("Run"), "icon/22/actions/media-playback-start.png");
        this._runbutton.addListener("execute", this.runSample, this);
        this._runbutton.setToolTipText("Run the selected demo");
        bar.add(this._runbutton);
        var prevNextPart = new qx.ui.toolbar.Part();
        bar.add(prevNextPart);
        // -- previous navigation
        var prevbutt = new qx.ui.toolbar.Button(this.tr("Previous"), "icon/22/actions/go-previous.png");
        prevbutt.addListener("execute", this.playPrev, this);
        prevbutt.setToolTipText("Run previous demo");
        prevNextPart.add(prevbutt);
        this._prevButton = prevbutt;

        // -- next navigation
        var nextbutt = new qx.ui.toolbar.Button(this.tr("Next"), "icon/22/actions/go-next.png");
        nextbutt.addListener("execute", this.playNext, this);
        nextbutt.setToolTipText("Run next demo");
        prevNextPart.add(nextbutt);
        this._nextButton = nextbutt;
        var navButtonOptions = {
          converter: function converter(data) {
            return data == "visible";
          }
        };
        qx.data.SingleValueBinding.bind(this._runbutton, "visibility", prevbutt, "enabled", navButtonOptions);
        qx.data.SingleValueBinding.bind(this._runbutton, "visibility", nextbutt, "enabled", navButtonOptions);
        var externLinksPart1 = this._navPart = new qx.ui.toolbar.Part();
        bar.add(externLinksPart1);
        // -- spin-out sample
        var sobutt = new qx.ui.toolbar.Button(this.tr("Own Window"), "icon/22/actions/edit-redo.png");
        sobutt.addListener("execute", this.__P_2_29, this);
        sobutt.setToolTipText("Open demo in new window");
        this.__P_2_15 = sobutt;
        externLinksPart1.add(sobutt);

        // -- to playground
        {
          var playgroundButton = new qx.ui.toolbar.Button(this.tr("To Playground"), "icon/22/actions/application-exit.png");
          playgroundButton.addListener("execute", this.__P_2_32, this);
          playgroundButton.setToolTipText("Open demo in the playground");
          playgroundButton.setEnabled(false);

          // Loading demos into IE fails most of the time because IE truncates
          // long URLs
          var browserName = qx.core.Environment.get("browser.name");
          if (browserName == "ie" || browserName == "edge") {
            playgroundButton.exclude();
          }
          this.__P_2_17 = playgroundButton;
          externLinksPart1.add(playgroundButton);
          var externLinksPart2 = new qx.ui.toolbar.Part();
          bar.add(externLinksPart2);
          // api button
          var apiButton = new qx.ui.toolbar.Button(this.tr("API Viewer"), "icon/22/actions/help-contents.png");
          externLinksPart2.add(apiButton);
          apiButton.setToolTipText(this.tr("Open the qooxdoo API Viewer"));
          apiButton.addListener("execute", this.__P_2_33, this);

          // help button
          var helpButton = new qx.ui.toolbar.Button(this.tr("Manual"), "icon/22/actions/help-about.png");
          externLinksPart2.add(helpButton);
          helpButton.setToolTipText(this.tr("Open the qooxdoo Manual"));
          helpButton.addListener("execute", this.__P_2_34, this);
        }
        // THEME MENU
        // -----------------------------------------------------

        var menuPart = new qx.ui.toolbar.Part();
        bar.add(menuPart);
        {
          var themeMenu = this.__P_2_24 = new qx.ui.menu.Menu();
          var group = new qx.ui.form.RadioGroup();
          var themes = qx.Theme.getAll();
          var currentThemeItem;
          var currentTheme = qx.theme.manager.Meta.getInstance().getTheme();
          for (var key in themes) {
            var theme = themes[key];
            if (theme.type === "meta") {
              var item = new qx.ui.menu.RadioButton(theme.title);
              item.setUserData("value", theme.name);
              themeMenu.add(item);
              group.add(item);
            }
          }
          group.addListener("changeSelection", this.__P_2_35, this);
          var themeButton = new qx.ui.toolbar.MenuButton(this.tr("Theme"), "icon/22/apps/utilities-color-chooser.png", themeMenu);
          this.__P_2_18 = menuPart;
          themeButton.setToolTipText("Choose theme");
          menuPart.add(themeButton);
        }

        // VIEWS
        // -----------------------------------------------------

        var viewPart = new qx.ui.toolbar.Part();
        this.__P_2_16 = viewPart;
        bar.addSpacer();
        bar.add(viewPart);
        {
          var htmlView = new qx.ui.toolbar.RadioButton("HTML Code", "icon/22/apps/internet-web-browser.png");
          htmlView.setToolTipText("Display HTML source");
          htmlView.setModel("html");
          var jsView = new qx.ui.toolbar.RadioButton("JS Code", "icon/22/mimetypes/executable.png");
          jsView.setToolTipText("Display JavaScript source");
          jsView.setModel("js");
          htmlView.setUserData("value", "html");
          jsView.setUserData("value", "js");
          viewPart.add(htmlView);
          viewPart.add(jsView);
        }
        var logView = new qx.ui.toolbar.RadioButton("Log File", "icon/22/apps/utilities-log-viewer.png");
        logView.setToolTipText("Display log file");
        logView.setUserData("value", "log");
        logView.setModel("log");
        viewPart.add(logView);
        var viewGroup = this.__P_2_27 = new qx.ui.form.RadioGroup();
        viewGroup.setAllowEmptySelection(true);
        viewGroup.add(logView);
        viewGroup.addListener("changeSelection", this.__P_2_30, this);
        {
          viewGroup.add(htmlView, jsView);
        }

        // enable overflow handling
        bar.setOverflowHandling(true);

        // add a button for overflow handling
        var chevron = new qx.ui.toolbar.MenuButton(null, "icon/22/actions/media-seek-forward.png");
        chevron.setAppearance("toolbar-button"); // hide the down arrow icon
        bar.add(chevron);
        bar.setOverflowIndicator(chevron);

        // set priorities for overflow handling
        bar.setRemovePriority(viewPart, 6);
        bar.setRemovePriority(menuPart, 5);
        {
          bar.setRemovePriority(externLinksPart2, 4);
        }
        bar.setRemovePriority(externLinksPart1, 3);
        bar.setRemovePriority(prevNextPart, 2);
        bar.setRemovePriority(this._navPart, 1);

        // add the overflow menu
        this.__P_2_25 = new qx.ui.menu.Menu();
        chevron.setMenu(this.__P_2_25);

        // add the listener
        bar.addListener("hideItem", this._onHideItem, this);
        bar.addListener("showItem", this._onShowItem, this);

        // DONE
        // -----------------------------------------------------

        return bar;
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
          if (partItem === this.__P_2_18 && !(menuItems[i] instanceof qx.ui.menu.Separator)) {
            menuItems[i].getMenu().setPosition("right-top");
          }
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
        if (partItem === this.__P_2_18) {
          var menuButtons = partItem.getMenuButtons();
          for (var i = 0, l = menuButtons.length; i < l; i++) {
            menuButtons[i].getMenu().setPosition("bottom-left");
          }
        }
      },
      /**
       * Helper for the overflow handling. It is responsible for returning a
       * corresponding menu item for the given toolbar item.
       * @param toolbarItem {qx.ui.core.Widget} The toolbar item to look for.
       * @param partItem
       * @return {qx.ui.core.Widget} The coresponding menu items.
       */
      _getMenuItems: function _getMenuItems(partItem) {
        var cachedItems = [];
        if (partItem instanceof qx.ui.toolbar.Part) {
          var partButtons = partItem.getChildren();
          var separator = null;
          var firstGroup = false;
          var menuItems = this.__P_2_25.getChildren();
          if (partItem != this.__P_2_16) {
            separator = this.__P_2_0[partItem.toHashCode()];
            if (!separator) {
              separator = new qx.ui.menu.Separator();
              this.__P_2_25.addBefore(separator, menuItems[0]);
              this.__P_2_0[partItem.toHashCode()] = separator;
            }
            cachedItems.push(separator);
          } else {
            firstGroup = true;
          }
          for (var i = 0, l = partButtons.length; i < l; i++) {
            if (partButtons[i].getVisibility() == "excluded") {
              continue;
            }
            var cachedItem = this.__P_2_0[partButtons[i].toHashCode()];
            if (!cachedItem) {
              if (partButtons[i] instanceof qx.ui.toolbar.RadioButton) {
                cachedItem = new qx.ui.menu.RadioButton(partButtons[i].getLabel());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                cachedItem.setEnabled(partButtons[i].getEnabled());
                cachedItem.setUserData("value", partButtons[i].getUserData("value"));
                cachedItem.setModel(partButtons[i].getModel());
                partButtons[i].bind("enabled", cachedItem, "enabled");

                // sync the value's
                partButtons[i].bind("value", cachedItem, "value");
                cachedItem.bind("value", partButtons[i], "value");
                if (!this.__P_2_26) {
                  this.__P_2_26 = new qx.ui.form.RadioGroup();
                  this.__P_2_26.setAllowEmptySelection(true);
                  this.__P_2_26.addListener("changeSelection", this.__P_2_30, this);
                }
                this.__P_2_26.add(cachedItem);
              } else if (partButtons[i] instanceof qx.ui.toolbar.MenuButton) {
                cachedItem = new qx.ui.menu.Button(partButtons[i].getLabel().translate(), partButtons[i].getIcon(), partButtons[i].getCommand(), partButtons[i].getMenu());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                cachedItem.setEnabled(partButtons[i].getEnabled());
                partButtons[i].bind("enabled", cachedItem, "enabled");
              } else if (partButtons[i] instanceof qx.ui.toolbar.Button) {
                cachedItem = new qx.ui.menu.Button(partButtons[i].getLabel().translate(), partButtons[i].getIcon());
                cachedItem.getChildControl("label", false).setRich(true);
                cachedItem.setTextColor(partButtons[i].getTextColor());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                cachedItem.setEnabled(partButtons[i].getEnabled());
                partButtons[i].bind("enabled", cachedItem, "enabled");
                var listeners = qx.event.Registration.getManager(partButtons[i]).getListeners(partButtons[i], "execute");
                if (listeners && listeners.length > 0) {
                  for (var j = 0, k = listeners.length; j < k; j++) {
                    cachedItem.addListener("execute", qx.lang.Function.bind(listeners[j].handler, listeners[j].context));
                  }
                }
              } else if (partButtons[i] instanceof qx.ui.toolbar.CheckBox) {
                cachedItem = new qx.ui.menu.CheckBox(partButtons[i].getLabel());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                cachedItem.setEnabled(partButtons[i].getEnabled());
                partButtons[i].bind("enabled", cachedItem, "enabled");
              } else {
                cachedItem = new qx.ui.menu.Separator();
              }
              if (firstGroup) {
                this.__P_2_25.add(cachedItem);
              } else {
                this.__P_2_25.addBefore(cachedItem, separator);
              }
              this.__P_2_0[partButtons[i].toHashCode()] = cachedItem;
            }
            cachedItems.push(cachedItem);
          }
        }
        return cachedItems;
      },
      __P_2_7: function __P_2_7() {
        var iframe = new qx.ui.embed.Iframe().set({
          nativeContextMenu: true
        });
        iframe.addListener("load", this.__P_2_36, this);
        this._iframe = iframe;
        return iframe;
      },
      __P_2_9: function __P_2_9() {
        var f3 = new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
        f3.setOverflow("auto", "auto");
        f3.setFont("monospace");
        f3.setBackgroundColor("white");
        this.widgets["outputviews.sourcepage.html.page"] = f3;
        f3.getContentElement().setAttribute("id", "qx_srcview");
        if (qx.core.Environment.get("device.type") !== "desktop") {
          f3.getContentElement().setStyle("WebkitOverflowScrolling", "touch");
          f3.getContentElement().setStyle("touchAction", "auto");
        }
        return f3;
      },
      __P_2_11: function __P_2_11() {
        var f4 = new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
        f4.setOverflow("auto", "auto");
        f4.setFont("monospace");
        f4.setBackgroundColor("white");
        this.widgets["outputviews.sourcepage.js.page"] = f4;
        f4.getContentElement().setAttribute("id", "qx_srcview");
        if (qx.core.Environment.get("device.type") !== "desktop") {
          f4.getContentElement().setStyle("WebkitOverflowScrolling", "touch");
          f4.getContentElement().setStyle("touchAction", "auto");
        }
        return f4;
      },
      /**
       * Tree View in Left Pane
       * - only make root node; rest will befilled when iframe has loaded (with
       *   leftReloadTree)
       *
       * @return {var} TODOC
       */
      __P_2_5: function __P_2_5() {
        var tree1 = new qx.ui.tree.Tree();
        var root = new qx.ui.tree.TreeFolder("Demos");
        tree1.setAppearance("demo-tree");
        tree1.setRoot(root);
        //tree1.setSelection([root]);

        this.tree = this.widgets["treeview.flat"] = tree1;
        tree1.addListener("changeSelection", this.treeGetSelection, this);
        tree1.addListener("dbltap", function (e) {
          qx.event.Timer.once(this.runSample, this, 50);
        }, this);
        return tree1;
      },
      __P_2_6: function __P_2_6() {
        var urlWindow = new qx.ui.window.Window(this.tr("Demo Link"), "icon/22/mimetypes/text-html.png");
        urlWindow.setLayout(new qx.ui.layout.VBox(10));
        urlWindow.setAllowMaximize(false);
        urlWindow.setAllowMinimize(false);
        var urlLabel = new qx.ui.basic.Label("");
        urlLabel.setSelectable(true);
        urlLabel.setNativeContextMenu(true);
        urlWindow.add(urlLabel);
        this._urlWindow = urlWindow;
        var left = Math.ceil(qx.bom.Viewport.getWidth() / 2 - 250);
        if (left < 0) {
          left = 0;
        }
        var top = Math.ceil(qx.bom.Viewport.getHeight() / 2 - 25);
        if (top < 0) {
          top = 0;
        }
        urlWindow.moveTo(left, top);
        this.getApplicationRoot().add(urlWindow);
        var menu = new qx.ui.menu.Menu();
        var copyButton = new qx.ui.menu.Button(this.tr("Get Demo Link"), "icon/22/mimetypes/text-html.png");
        copyButton.addListener("execute", function (e) {
          var treeNode = this.tree.getSelection()[0];
          var modelNode = treeNode.getUserData("modelLink");
          var demoName = this.tests.handler.getFullName(modelNode);
          {
            demoName = demoName.replace(".", "~");
          }
          var fullUrl = location.protocol + "//" + location.host + location.pathname + "#" + encodeURIComponent(demoName);
          this._urlWindow.getChildren()[0].setValue(fullUrl);
          this._urlWindow.open();
        }, this);
        menu.add(copyButton);
        this._tree.setContextMenu(menu);
      },
      // ------------------------------------------------------------------------
      //   EVENT HANDLER
      // ------------------------------------------------------------------------
      treeGetSelection: function treeGetSelection(e) {
        var treeNode = this.tree.getSelection()[0];
        this._runbutton.setEnabled(!treeNode.hasChildren());
        var modelNode = treeNode.getUserData("modelLink");
        this.tests.selected = this.tests.handler.getFullName(modelNode);
      },
      /**
       * TODOC
       *
       * @param e {Event} TODOC
       * @return {void}
       */
      leftReloadTree: function leftReloadTree(e) {
        this._sampleToTreeNodeMap = {};
        var _sampleToTreeNodeMap = this._sampleToTreeNodeMap;
        var _initialSection = null;
        var _initialNode = null;

        // set a section to open initially
        var state = this._history.getState();
        var section = state.match(/([^~]+)~/);
        if (section) {
          // demo preselected, e.g. #bom~Clip.html
          _initialSection = section[1];
        } else {
          var category = state.match(/([^~][\w]*)/);
          if (category) {
            // category preselected, e.g. #widget
            _initialSection = category[1];
          }
        }

        // use tree struct
        /**
         * create widget tree from model
         *
         * @param widgetR {qx.ui.tree.Tree}    [In/Out]
         *        widget root under which the widget tree will be built
         * @param modelR  {qxl.demobrowser.Tree} [In]
         *        model root for the tree from which the widgets representation
         *        will be built
         */
        function buildSubTree(widgetR, modelR) {
          var children = modelR.getChildren();
          var t;
          for (var i = 0; i < children.length; i++) {
            var currNode = children[i];
            if (currNode.hasChildren()) {
              t = new qx.ui.tree.TreeFolder(that.polish(currNode.label));
              t.setUserData("filled", false);
              t.setUserData("node", currNode);
              buildSubTree(t, t.getUserData("node"));
              if (currNode.label == _initialSection) {
                _initialNode = t;
                t.setOpen(true);
              }
            } else {
              // When the node has no type, it is a folder without childeren
              if (!currNode.type) {
                continue;
              }
              t = new qx.ui.tree.TreeFile(that.polish(currNode.label));
              var fullName = currNode.pwd().slice(1).join("/") + "/" + currNode.label;
              if (currNode.tags) {
                t.setUserData("tags", currNode.tags);
              }
              _sampleToTreeNodeMap[fullName] = t;
            }

            // make connections
            widgetR.add(t);
            t.setUserData("modelLink", currNode);
            currNode.widgetLinkFull = t;
          }
        }

        // -- Main --------------------------------
        var ttree = this.tests.handler.ttree;
        var that = this;

        // Handle current Tree Selection and Content
        this.tree.setUserData("modelLink", ttree); // link top level widgets and model

        this.tree.getRoot().setOpen(true);
        buildSubTree(this.tree.getRoot(), ttree);
        if (_initialNode != null) {
          this.tree.setSelection([_initialNode]);
        } else {
          this.tree.setSelection([this.tree.getRoot()]);
        }
      },
      /**
       * event handler for the Run Test button - performs the tests
       *
       * @param e {Event} TODOC
       * @return {void}
       */
      runSample: function runSample(e) {
        if (this.tests.selected && this.tests.selected != "") {
          var file = this.tests.selected.replace(".", "/");
          this.setCurrentSample(file);
        } else {
          this.playNext();
        }
      },
      /**
       * TODOC
       *
       * @param value {var} TODOC
       * @return {void}
       */
      setCurrentSample: function setCurrentSample(value) {
        if (!value) {
          return;
        }
        if (!this._sampleToTreeNodeMap) {
          return;
        }
        var url;
        var treeNode = this._sampleToTreeNodeMap[value];
        if (treeNode) {
          treeNode.getTree().setSelection([treeNode]);
          url = "demo/" + value;
          {
            url += "?qxenv:qx.theme:" + this.__P_2_1;
          }
          var currentTags = treeNode.getUserData("tags");
          if (currentTags) {
            this.__P_2_17.setEnabled(!currentTags.includes("noPlayground"));
          }
        } else {
          url = this.defaultUrl;
        }
        url = qx.$$appRoot + url;
        this.__P_2_22 = false;
        this.__P_2_18.getChildren()[0].setEnabled(false);
        this._iframe.setSource(url);
        this._iframe.addListener("load", function () {
          window.setTimeout(function () {
            var cw = this._iframe.getWindow();
            if (cw && cw.qx && cw.qx.theme && cw.qx.theme.manager && cw.qx.theme.manager.Meta) {
              this.__P_2_18.getChildren()[0].setEnabled(true);
            }
          }.bind(this), 333);
        }, this);

        // Toggle menu buttons
        if (url == this.defaultUrl) {
          this.disableMenuButtons();
        } else {
          this.enableMenuButtons();
        }
        this._currentSample = value;
        this._currentSampleUrl = url;
      },
      __P_2_36: function __P_2_36() {
        var fwindow = this._iframe.getWindow();
        var furl = this._iframe.getSource();
        if (furl != null && furl != this.defaultUrl) {
          var url;
          try {
            url = fwindow.location.href;
          } catch (ex) {
            url = window.location.href;
            var splitIndex = url.lastIndexOf("/");
            if (splitIndex != -1) {
              url = url.substring(0, splitIndex + 1);
            }
            url += furl;
          }
          var posHtml = url.indexOf("/demo/") + 6;
          var posSearch = url.indexOf("?");
          posSearch = posSearch == -1 ? url.length : posSearch;
          var split = url.substring(posHtml, posSearch).split("/");
          var div = String.fromCharCode(187);
          if (split.length == 2) {
            var category = split[0];
            category = category.charAt(0).toUpperCase() + category.substring(1);
            var pagename = split[1].replace(".html", "").replace(/_/g, " ");
            pagename = pagename.charAt(0).toUpperCase() + pagename.substring(1);
            var title = "qooxdoo " + div + " Demo Browser " + div + " " + category + " " + div + " " + pagename;
          } else {
            var title = "qooxdoo " + div + " Demo Browser " + div + " Start";
          }
          document.title = title;
        }
      },
      __P_2_20: function __P_2_20(e) {
        var fwindow = this._iframe.getWindow();
        try {
          // Do this in a try-catch block. For instance if a demobrowser runs from
          // the local file system over the file:// protocol, there might be
          // security restrictions when trying to access some fwindow properties
          if (fwindow && fwindow.qx && fwindow.qx.log && fwindow.qx.log.appender) {
            if (!this.__P_2_22) {
              this.__P_2_22 = true;
              this.debug("Demo loaded: " + this._currentSample);
              this.__P_2_12.clear();
              try {
                this.__P_2_12.fetch(fwindow.qx.log.Logger);
              } catch (ex) {
                // if the logger is not available, ignore it
                return;
              }

              // update state on example change
              this._history.addToHistory(this._currentSample.replace("/", "~"), document.title);

              // load sample source code
              if (this._currentSampleUrl != this.defaultUrl) {
                this.__P_2_37(this._currentSampleUrl);
              }
            }
          } else {
            this.__P_2_22 = false;
          }
        } catch (ex) {
          this.__P_2_22 = false;
        }
      },
      // ------------------------------------------------------------------------
      //   MISC HELPERS
      // ------------------------------------------------------------------------
      /**
       * This method filters the folders in the tree.
       * @param term {String} The search term.
       */
      filter: function filter(term) {
        var searchRegExp = new RegExp("^.*" + term + ".*", "ig");
        var items = this._tree.getRoot().getItems(true, true);
        var showing = 0;
        var count = 0;
        for (var i = 0; i < items.length; i++) {
          var folder = items[i];
          var parent = folder.getParent();

          // check for the tags
          var tags = folder.getUserData("tags");
          var inTags = false;
          if (tags != null) {
            for (var j = 0; j < tags.length; j++) {
              inTags = !!tags[j].match(searchRegExp);
              if (inTags) {
                break;
              }
            }
          }
          if (folder.getChildren().length == 0) {
            count++;
          }
          if (inTags || folder.getLabel().search(searchRegExp) != -1 || parent.getLabel().search(searchRegExp) != -1) {
            if (folder.getChildren().length == 0) {
              showing++;
            }
            folder.show();
            folder.getParent().setOpen(true);
            folder.getParent().show();
          } else {
            folder.exclude();
          }
        }

        // special case for the empty sting
        if (term == "") {
          var folders = this._tree.getRoot().getItems(false, true);
          var selection = this._tree.getSelection();

          // close all folders
          for (var i = 0; i < folders.length; i++) {
            // don't close the current selected
            if (folders[i] == selection[0] || folders[i] == selection[0].getParent()) {
              continue;
            }
            folders[i].setOpen(false);
          }
        }

        // update the status
        this._status.setValue(showing + "/" + count);
      },
      /**
       * This method re-gets (through XHR) the HTML page of the current demo.  The page is
       * then scanned (in the request callback) for the second "<script>" tag, which
       * supposedly loads the demo application .js.  The 'src' uri of this script tag is
       * then used to construct the uri of the corresponding Javascript source file, which
       * is then loaded into the source tab (through another XHR).
       *
       * @param url {var} TODOC
       * @return {String} TODOC
       */
      __P_2_37: function __P_2_37(url) {
        if (typeof url != "string") {
          return;
        }

        // create a and config request to the given url
        var req = new qx.io.request.Xhr(url);
        req.setTimeout(180000);
        req.addListener("success", function (evt) {
          // get the content of the request
          var content = evt.getTarget().getResponse();
          // if there is a content
          if (content) {
            {
              // construct url to demo script source
              var parts = url.split("/");
              var cat = parts[parts.length - 2];
              var base = parts[parts.length - 1];
              base = base.substr(0, base.indexOf(".html"));
              var u = "script/" + cat + "/" + base + "/qxl.demobrowser.demo";
              u += "." + cat + "." + base + ".js";
              var jsSourceFileName = qx.$$appRoot + u;

              // get the javascript code
              var reqJSFile = new qx.io.request.Xhr(jsSourceFileName);
              reqJSFile.setTimeout(18000);
              reqJSFile.addListener("success", function () {
                var jsCode = reqJSFile.getResponse();

                // store the current visible code
                this.__P_2_31(jsCode);
                if (jsCode) {
                  // set the javascript code to the javascript page
                  this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__P_2_38(jsCode, "javascript"));
                }
              }, this);
              reqJSFile.addListener("fail", function () {
                this.error("Couldn't load file: " + url);
              }, this);

              // send the request for the javascript code
              reqJSFile.send();

              // write the html code to the html page
              this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__P_2_38(content));
            }
          }
        }, this);
        // add a listener which handles the failure of the request
        req.addListener("fail", function (evt) {
          this.error("Couldn't load file: " + url);
        }, this);
        // send the request for the html file

        req.send();
      },
      /**
       * TODOC
       *
       * @param url {var} TODOC
       * @return {void}
       */
      dataLoader: function dataLoader(url) {
        var req = new qx.io.request.Xhr(url);
        req.setTimeout(180000);

        /**
         * TODOC
         *
         * @param evt {var} TODOC
         * @lint ignoreDeprecated(alert, eval)
         */
        req.addListener("success", function (evt) {
          var content = evt.getTarget().getResponse();

          // For reasons unknown, requests made here that fail because of security
          // restrictions fire a "completed" event. In other applications such as
          // the API viewer, "failed" is fired instead.
          if (!content) {
            if (window.location.protocol == "file:") {
              alert("Failed to load demo data from the file system.\n\nThe security settings of your browser may prohibit AJAX when using the file protocol. Please try the http protocol instead.");
            }
            return;
          }
          var treeData = eval(content);

          // give the browser a chance to update its UI before doing more
          qx.event.Timer.once(function () {
            this.tests.handler = new qxl.demobrowser.TreeDataHandler(treeData);
            this.leftReloadTree();

            // read initial state
            var state = this._history.getState();
            if (state) {
              this.setCurrentSample(state.replace("~", "/"));
            } else {
              this.setCurrentSample(this.defaultUrl);
            }
          }, this, 0);
        }, this);
        req.addListener("fail", function (evt) {
          this.error("Couldn't load file: " + url);
        }, this);
        req.send();
      },
      /**
       * Plays the sample preceding the currently selected tree node
       *
       * @param e {Event} TODOC
       * @return {void}
       */
      playPrev: function playPrev(e) {
        var currSamp = this.tree.getSelection()[0]; // widget

        if (currSamp) {
          var otherSamp = this.tree.getPreviousNodeOf(currSamp, false);
          if (!otherSamp || otherSamp == this.tree.getRoot()) {
            return;
          }
          while (otherSamp.isVisible && !otherSamp.isVisible()) {
            otherSamp = this.tree.getPreviousNodeOf(otherSamp, false);
          }
          if (otherSamp.getParent() == this.tree.getRoot()) {
            // otherSamp is the parent
            var candidate = this.tree.getPreviousNodeOf(otherSamp, false);
            while (candidate.isVisible && !candidate.isVisible()) {
              candidate = this.tree.getPreviousNodeOf(candidate, false);
            }
            if (candidate.getParent() == this.tree.getRoot()) {
              candidate.setOpen(true);
              var candidate2 = this.tree.getPreviousNodeOf(otherSamp, false);
              while (candidate2.isVisible && !candidate2.isVisible()) {
                candidate2 = this.tree.getPreviousNodeOf(candidate2, false);
              }
              if (candidate !== candidate2) {
                otherSamp = candidate2;
              }
            } else {
              otherSamp = candidate;
            }
          }
          if (!otherSamp || otherSamp === currSamp) {
            return;
          }
          this.tree.setSelection([otherSamp]);
          this.runSample();
        }
      },
      /**
       * Plays the sample following the currently selected tree node
       *
       * @param e {Event} TODOC
       * @return {void}
       *
       * @ignore(getChildren)
       */
      playNext: function playNext(e) {
        this._nextButton.setEnabled(true);
        this._prevButton.setEnabled(true);
        var currSamp = this.tree.getSelection()[0]; // widget

        if (currSamp) {
          var otherSamp = this.tree.getNextNodeOf(currSamp);
          if (!otherSamp) {
            return;
          }
          if (otherSamp.getParent() == this.tree.getRoot()) {
            otherSamp.setOpen(true);
            otherSamp = this.tree.getNextNodeOf(otherSamp);
          }
          if (!otherSamp) {
            return;
          }
          while (!otherSamp.isVisible()) {
            var candidate = this.tree.getNextNodeOf(otherSamp);
            if (!candidate) {
              // reached the last item
              return;
            }
            if (candidate.getParent() == this.tree.getRoot()) {
              // found a folder
              otherSamp.setOpen(true);
              var candidate = this.tree.getNextNodeOf(candidate);
            }
            otherSamp = candidate;
          }
          if (otherSamp) {
            this.tree.setSelection([otherSamp]);
            this.runSample();
          }
        }
      },
      __P_2_38: function __P_2_38(src, type) {
        var bsrc = new qx.util.StringBuilder("<pre class='script'>");
        var lines = [];
        var currBlock = new qx.util.StringBuilder();
        var PScriptStart = /^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
        var PScriptEnd = /^\s*<\/script>\s*$/i;
        src = src.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var lines = src.split("\n");

        // if the source is a javascript file
        if (type == "javascript") {
          return "<pre ><div class='script'>" + qx.dev.Tokenizer.javaScriptToHtml(src) + "</div></pre>";
        }
        for (var i = 0; i < lines.length; i++) {
          if (PScriptStart.exec(lines[i])) {
            // start of inline script
            // add this line to 'normal' code
            bsrc.add(this.__P_2_39(qx.bom.String.escape(currBlock.get() + lines[i])));
            currBlock.clear(); // start new block
          } else if (PScriptEnd.exec(lines[i])) {
            // end of inline script
            // pass script block to tokenizer
            var s1 = qx.dev.Tokenizer.javaScriptToHtml(currBlock.get());
            bsrc.add('<div class="script">', s1, "</div>");
            currBlock.clear(); // start new block
            currBlock.add(lines[i], "\n");
          } // no border line
          else {
            currBlock.add(lines[i], "\n");
          }
        }

        // collect rest of page
        bsrc.add(this.__P_2_39(qx.bom.String.escape(currBlock.get())), "</pre>");
        return bsrc.get();
      },
      /**
       * Diables all menu buttons which functionality only works with a selected
       * demo.
       */
      disableMenuButtons: function disableMenuButtons() {
        var elements = this.__P_2_14;
        for (var i = 0; i < elements.length; i++) {
          elements[i].setEnabled(false);
        }
      },
      /**
       * Enables all menu buttons which functionality only works with a selected
       * demo.
       */
      enableMenuButtons: function enableMenuButtons() {
        var elements = this.__P_2_14;
        for (var i = 0; i < elements.length; i++) {
          elements[i].setEnabled(true);
        }
      },
      __P_2_39: function __P_2_39(str) {
        var res = str;

        // This match function might be a bit of overkill right now, but provides
        // for later extensions (cf. Flanagan(5th), 703)
        /**
         * @param vargs
         */
        function matchfunc(vargs) {
          var s = new qx.util.StringBuilder(arguments[1], '<span class="html-tag-name">', arguments[2], "</span>");
          var curr;
          var endT = false;

          // handle rest of submatches
          if (arguments.length - 2 > 3) {
            for (var i = 3; i < arguments.length - 2; i++) {
              curr = arguments[i];
              if (curr == "/") {
                endT = true;
                break;
              } // handle tag attributes
              else {
                var m = /\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
                var r;
                while ((r = m.exec(curr)) != null) {
                  s.add(' <span class="keyword">', r[1], '</span>=<span class="string">', r[2].replace(/\s*$/, ""), "</span>");
                }
              }
            }
            s.add(endT ? "/" : "");
          }
          s.add("&gt;");
          return s.get();
        } //matchfunc()

        //res = res.replace(/(&lt;\/?)([a-zA-Z]+)\b/g, matchfunc);  // only tag start
        res = res.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g, matchfunc); // whole tag

        return res;
      },
      /**
       * 'Atom_1.html' -> 'Atom 1'
       *
       * @param str {String} TODOC
       * @return {var} TODOC
       */
      polish: function polish(str) {
        return str.replace(".html", "").replace(/_/g, " ");
      },
      __P_2_35: function __P_2_35(e) {
        this.__P_2_1 = e.getData()[0].getUserData("value");
        var cw = this._iframe.getWindow();
        var theme = cw.qx.Theme.getByName(this.__P_2_1);
        if (theme && cw.qx.theme.manager && cw.qx.theme.manager.Meta) {
          cw.qx.theme.manager.Meta.getInstance().setTheme(theme);
        }
      },
      /**
       * Creates the application header.
       */
      _createHeader: function _createHeader() {
        var layout = new qx.ui.layout.HBox();
        var header = new qx.ui.container.Composite(layout);
        header.setAppearance("app-header");
        var title = new qx.ui.basic.Label("Demo Browser");
        var version = new qxl.versionlabel.VersionLabel();
        version.setFont("default");
        header.add(title);
        header.add(new qx.ui.core.Spacer(), {
          flex: 1
        });
        header.add(version);
        return header;
      }
    },
    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this.widgets = this.tests = this._sampleToTreeNodeMap = this.tree = this.logelem = null;
      this._disposeObjects("mainsplit", "tree1", "left", "runbutton", "toolbar", "f1", "f2", "_history", "logappender", "_cmdObjectSummary", "_cmdRunSample", "_cmdPrevSample", "_cmdNextSample", "_cmdSampleInOwnWindow", "_navPart", "_runbutton", "__P_2_15", "__P_2_18", "__P_2_24", "__P_2_16", "__P_2_27", "__P_2_3", "_infosplit", "_searchTextField", "_status", "_tree", "_iframe", "_demoView", "__P_2_14", "__P_2_19", "_leftComposite", "_urlWindow", "_nextButton", "_prevButton", "__P_2_0", "__P_2_25");
    }
  });
  qxl.demobrowser.DemoBrowser.$$dbClassInfo = $$dbClassInfo;
})();
