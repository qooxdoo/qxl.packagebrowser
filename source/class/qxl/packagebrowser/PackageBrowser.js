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
     * Martin Wittemann (martinwittemann)
     * Jonathan Weiß (jonathan_rass)
     * Christian Boulanger (cboulanger)

************************************************************************ */


/**
 * The GUI + business logic of the package browser.
 *
 * @asset(qx/icon/Tango/16/actions/edit-find.png)
 * @asset(qx/icon/Tango/16/actions/edit-delete.png)
 * @asset(qx/icon/Tango/16/actions/document-properties.png)
 * @asset(qx/icon/Tango/16/actions/go-home.png)
 * @asset(qx/icon/Tango/16/apps/internet-web-browser.png)
 * @asset(qx/icon/Tango/16/apps/utilities-archiver.png)
 * @asset(qx/icon/Tango/16/apps/preferences-clock.png)
 * @asset(qx/icon/Tango/16/emblems/emblem-important.png)
 * @asset(qx/icon/Tango/16/mimetypes/text-plain.png)
 * @asset(qx/icon/Tango/16/mimetypes/archive.png)
 * @asset(qx/icon/Tango/16/places/folder.png)
 * @asset(qx/icon/Tango/16/places/folder-open.png)
 * @asset(qx/icon/Tango/16/status/dialog-information.png)
 * @asset(qx/icon/Tango/16/status/mail-unread.png)
 * @asset(qx/icon/Tango/22/actions/media-playback-start.png)
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
 * @asset(qxl/packagebrowser/icon/github-16x16.png)
 *
 * @ignore(location.*)
 * @ignore(qx.$$appRoot)
 */
qx.Class.define("qxl.packagebrowser.PackageBrowser", {
  extend: qx.ui.container.Composite,

  statics: {
    icons: {
      owner: "qxl/packagebrowser/icon/github-16x16.png",
      repository: "qx/icon/Tango/16/apps/utilities-archiver.png",
      folder: "qx/icon/Tango/16/mimetypes/archive.png",
      library: "qx/icon/Tango/16/status/dialog-information.png",
      homepage: "qx/icon/Tango/16/actions/go-home.png",
      readme: "qx/icon/Tango/16/mimetypes/text-plain.png",
      sourcecode: "qx/icon/Tango/16/actions/document-properties.png",
      demo: "qx/icon/Tango/16/apps/internet-web-browser.png",
      problems: "qx/icon/Tango/16/emblems/emblem-important.png",
      releases: "qx/icon/Tango/16/apps/preferences-clock.png"
    }
  },

  construct: function () {

    qxShowdown.Load;
    this.base(arguments);

    this.__menuItemStore = {};
    this.welcomeUrl = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/welcome.html");
    this.defaultUrl = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/default.html");

    // Configure layout
    var layout = new qx.ui.layout.VBox();
    this.setLayout(layout);

    // Header
    this.add(this._createHeader());

    // Data
    this.widgets = {};
    this.tests = {};


    // Commands & Menu Bar
    this.__makeCommands();
    this.__menuBar = this.__makeToolBar();
    this.add(this.__menuBar);


    // Main Split Pane
    var mainsplit = new qx.ui.splitpane.Pane("horizontal");
    mainsplit.setAppearance("app-splitpane");
    this.mainsplit = mainsplit;

    var infosplit = new qx.ui.splitpane.Pane("horizontal");
    infosplit.setDecorator(null);
    this._infosplit = infosplit;

    this.add(mainsplit, {flex: 1});

    // tree side
    var leftComposite = this._leftComposite = new qx.ui.container.Composite();
    leftComposite.setLayout(new qx.ui.layout.VBox(3));
    mainsplit.add(leftComposite, 0);

    // search
    var searchComposite = new qx.ui.container.Composite();
    searchComposite.setLayout(new qx.ui.layout.HBox(3));
    searchComposite.setAppearance("textfield");
    leftComposite.add(searchComposite);

    var searchIcon = new qx.ui.basic.Image("icon/16/actions/edit-find.png");
    searchComposite.add(searchIcon);

    let stf = this._searchTextField = new qx.ui.form.TextField();
    stf.setLiveUpdate(true);
    stf.setAppearance("widget");
    stf.setPlaceholder("Filter...");

    var filterTimer = new qx.event.Timer(500);
    filterTimer.addListener("interval", function (ev) {
      let searchTxt = this._searchTextField.getValue();
      this.filter(searchTxt);
      this._history.setState("filter~" + searchTxt);
      filterTimer.stop();
    }, this);

    this._searchTextField.addListener("changeValue", function (e) {
      this._clearIcon.setEnabled(Boolean(e.getData()));
      filterTimer.restart();
    }, this);

    searchComposite.add(this._searchTextField, {flex: 1});

    // clear
    let clearIcon = this._clearIcon = new qx.ui.basic.Image("qx/icon/Tango/16/actions/edit-delete.png");
    clearIcon.setMarginTop(3);
    clearIcon.setEnabled(false);
    clearIcon.addListener("tap", () => this._searchTextField.setValue(""));
    searchComposite.add(clearIcon);

    mainsplit.add(infosplit, 1);
    this._tree = this.__makeTree();
    leftComposite.add(this._tree, {flex: 1});
    this.__makeUrlMenu();

    this._demoView = this.__makeDemoView();
    infosplit.add(this._demoView, 2);


    // Back button and bookmark support
    this._history = qx.bom.History.getInstance();
    this._history.addListener("changeState", function (e) {
      var state = e.getData().replace(/~/g, "/");
      if (state.startsWith("filter/")) {
        this._searchTextField.setValue(state.slice(7));
        return;
      }
      if (this._currentSample !== state) {
        this.updateIframe(state);
      }
    }, this);

    this.__menuElements = [this.__ownWindowButton, this.__viewPart];

    this.__infoWindow = new qxl.packagebrowser.InfoWindow(this.tr("Info"));
    this.__infoWindow.setAutoCenter(true);
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members: {
    // ------------------------------------------------------------------------
    //   CONSTRUCTOR HELPERS
    // ------------------------------------------------------------------------

    _iframe: null,
    __logDone: null,
    _tree: null,
    _searchTextField: null,
    __currentJSCode: null,
    __menuElements: null,
    _versionFilter: null,
    _navPart: null,
    __ownWindowButton: null,
    __viewPart: null,
    __menuBar: null,
    _leftComposite: null,
    _infosplit: null,
    _demoView: null,
    __overflowMenu: null,
    __menuItemStore: null,
    __menuViewRadioGroup: null,
    _urlWindow: null,
    __infoWindow: null,
    __viewGroup: null,
    __selectedModelNode: null,
    defaultUrl: null,
    welcomeUrl: null,

    __makeCommands: function () {
      this._cmdObjectSummary = new qx.ui.command.Command("Ctrl+O");
      this._cmdObjectSummary.addListener("execute", this.__getObjectSummary, this);

      this._cmdRunSample = new qx.ui.command.Command("F5");
      this._cmdRunSample.addListener("execute", this.runSample, this);

      this._cmdPrevSample = new qx.ui.command.Command("Ctrl+Left");
      this._cmdPrevSample.addListener("execute", this.playPrev, this);

      this._cmdNextSample = new qx.ui.command.Command("Ctrl+Right");
      this._cmdNextSample.addListener("execute", this.playNext, this);

      this._cmdSampleInOwnWindow = new qx.ui.command.Command("Ctrl+N");
      this._cmdSampleInOwnWindow.addListener("execute", this.__openWindow, this);
    },

    /**
     * TODOC
     *
     */
    __getObjectSummary: function () {
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
      this.__infoWindow.setContent(area);
      this.__infoWindow.setWidth(400);
      this.__infoWindow.show();
    },

    __openWindow: function () {
      var sampUrl = this._iframe.getSource();
      window.open(sampUrl, "_blank");
    },


    __setCurrentJSCode: function (code) {
      this.__currentJSCode = code;
    },


    /**
     * Handler for opening the api viewer.
     */
    __onApiOpen: function () {
      window.open("./apiviewer");
    },


    /**
     * Handler for opening the manual.
     */
    __onManualOpen: function () {
      window.open("../docs");
    },


    __makeToolBar: function () {
      var bar = new qx.ui.toolbar.ToolBar();

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

      // -- spin-out demo
      var ownWinBtn = new qx.ui.toolbar.Button(this.tr("Own Window"), "icon/22/actions/edit-redo.png");
      ownWinBtn.addListener("execute", this.__openWindow, this);
      ownWinBtn.setToolTipText("Open demo in new window");
      this.__ownWindowButton = ownWinBtn;
      bar.add(ownWinBtn);

      // -- documentaton
      var docButton = new qx.ui.toolbar.Button(this.tr("Documentation"), "icon/22/apps/internet-web-browser.png");
      docButton.addListener("execute",() => {
        window.open('https://www.qooxdoo.org/docs/#/cli/packages');
      }, this);
      docButton.setToolTipText("Open package system documentation");
      bar.add(docButton);

      // VIEWS
      // -----------------------------------------------------

      var viewPart = new qx.ui.toolbar.Part();
      this.__viewPart = viewPart;
      bar.addSpacer();
      bar.add(viewPart);
      // enable overflow handling
      bar.setOverflowHandling(true);

      // add a button for overflow handling
      var chevron = new qx.ui.toolbar.MenuButton(null, "icon/22/actions/media-seek-forward.png");
      chevron.setAppearance("toolbar-button"); // hide the down arrow icon
      bar.add(chevron);
      bar.setOverflowIndicator(chevron);

      // set priorities for overflow handling
      bar.setRemovePriority(viewPart, 6);
      bar.setRemovePriority(prevNextPart, 2);
      bar.setRemovePriority(this._navPart, 1);

      // add the overflow menu
      this.__overflowMenu = new qx.ui.menu.Menu();
      chevron.setMenu(this.__overflowMenu);

      // add the listener
      bar.addListener("hideItem", this._onHideItem, this);
      bar.addListener("showItem", this._onShowItem, this);

      return bar;
    },

    /**
     * Handler for the overflow handling which will be called on hide.
     * @param e {qx.event.type.Data} The event.
     */
    _onHideItem: function (e) {
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
    _onShowItem: function (e) {
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
    _getMenuItems: function (partItem) {
      var cachedItems = [];
      if (partItem instanceof qx.ui.toolbar.Part) {
        var partButtons = partItem.getChildren();
        var separator = null;
        var firstGroup = false;
        var menuItems = this.__overflowMenu.getChildren();
        if (partItem !== this.__viewPart) {
          separator = this.__menuItemStore[partItem.toHashCode()];
          if (!separator) {
            separator = new qx.ui.menu.Separator();
            this.__overflowMenu.addBefore(separator, menuItems[0]);
            this.__menuItemStore[partItem.toHashCode()] = separator;
          }
          cachedItems.push(separator);
        } else {
          firstGroup = true;
        }
        for (var i = 0, l = partButtons.length; i < l; i++) {
          if (partButtons[i].getVisibility() === "excluded") {
            continue;
          }
          var cachedItem = this.__menuItemStore[partButtons[i].toHashCode()];

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

              if (!this.__menuViewRadioGroup) {
                this.__menuViewRadioGroup = new qx.ui.form.RadioGroup();
                this.__menuViewRadioGroup.setAllowEmptySelection(true);
              }
              this.__menuViewRadioGroup.add(cachedItem);
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
              this.__overflowMenu.add(cachedItem);
            } else {
              this.__overflowMenu.addBefore(cachedItem, separator);
            }
            this.__menuItemStore[partButtons[i].toHashCode()] = cachedItem;
          }
          cachedItems.push(cachedItem);
        }
      }

      return cachedItems;
    },

    __makeDemoView: function () {
      var iframe = new qx.ui.embed.Iframe().set({
        nativeContextMenu: true
      });
      iframe.addListener("load", this.__onIframeLoaded, this);
      this._iframe = iframe;

      return iframe;
    },

    /**
     * Tree View in Left Pane
     * - only make root node; rest will befilled when iframe has loaded (with
     *   leftReloadTree)
     *
     * @return {var} TODOC
     */
    __makeTree: function () {
      var tree1 = new qx.ui.tree.Tree();
      var root = new qx.ui.tree.TreeFolder("Packages");
      tree1.setAppearance("demo-tree");
      tree1.setRoot(root);
      //tree1.setSelection([root]);

      this.tree = this.widgets["treeview.flat"] = tree1;

      tree1.addListener("changeSelection", this.__onTreeChangeSelection, this);
      tree1.addListener("tap", function (e) {
        qx.event.Timer.once(this.runSample, this, 50);
      }, this);

      return tree1;
    },


    __makeUrlMenu: function () {
      var urlWindow = new qx.ui.window.Window(this.tr("Package Link"), "icon/22/mimetypes/text-html.png");
      urlWindow.setLayout(new qx.ui.layout.VBox(10));
      urlWindow.setAllowMaximize(false);
      urlWindow.setAllowMinimize(false);
      var urlLabel = new qx.ui.basic.Label("");
      urlLabel.setSelectable(true);
      urlLabel.setNativeContextMenu(true);
      urlWindow.add(urlLabel);
      this._urlWindow = urlWindow;
      var left = Math.ceil((qx.bom.Viewport.getWidth() / 2) - 250);
      if (left < 0) {
        left = 0;
      }
      var top = Math.ceil((qx.bom.Viewport.getHeight() / 2) - 25);
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
        if (qx.core.Environment.get("qx.contrib")) {
          demoName = demoName.replace(/\|/g, "/");
        } else {
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

    __onTreeChangeSelection: function (e) {
      const treeNode = this.tree.getSelection()[0];
      const modelNode = treeNode.getUserData("modelLink");
      this.__selectedModelNode = modelNode;
    },


    /**
     * TODOC
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    leftReloadTree: function (e) {
      this._sampleToTreeNodeMap = {};
      var _sampleToTreeNodeMap = this._sampleToTreeNodeMap;
      var _initialSection = null;
      var _initialNode = null;

      // set a section to open initially
      var state = this._history.getState().replace(/\~/g, "/");

      let icons = this.self(arguments).icons;

      // use tree struct
      /**
       * create widget tree from model
       *
       * @param widgetR {qx.ui.tree.Tree}    [In/Out]
       *        widget root under which the widget tree will be built
       * @param modelR  {qxl.packagebrowser.Tree} [In]
       *        model root for the tree from which the widgets representation
       *        will be built
       */
      const buildSubTree = (widgetR, modelR) => {
        var children = modelR.getChildren();
        var t;

        for (var i = 0; i < children.length; i++) {
          let currNode = children[i];
          let fullPath;

          if (currNode.hasChildren()) {
            t = new qx.ui.tree.TreeFolder(currNode.label);
            t.setUserData("filled", false);
            t.setUserData("node", currNode);

            // tags
            let tags = [];
            if (currNode.description) {
              tags.push(currNode.description);
            }

            if (currNode.info.description) {
              tags.push(currNode.info.description);
            }

            let keywords = currNode.info.keywords;
            if (qx.lang.Type.isArray(keywords) && keywords.length) {
              tags = tags.concat(keywords);
            }

            let authors = currNode.info.authors;
            if (qx.lang.Type.isArray(authors) && authors.length) {
              tags = tags.concat(authors);
            }

            t.setUserData("tags", tags);
            buildSubTree(t, t.getUserData("node"));
          } else {
            t = new qx.ui.tree.TreeFile(currNode.label);
            if (currNode.type !== "demo") {
              fullPath = currNode.pwd().slice(1).concat([currNode.type]).join("/");
            }
          }
          fullPath = fullPath || currNode.pwd().slice(1).concat([currNode.label]).join("/");
          _sampleToTreeNodeMap[fullPath] = t;
          if (fullPath === state) {
            _initialNode = t;
            if (t instanceof qx.ui.tree.TreeFolder) {
              t.setOpen(true);
            }
          }

          // set icon
          let type = currNode.data && currNode.data.problems ? "problems" : currNode.type;
          if (type && icons[type]) {
            t.setIcon(icons[type]);
          }

          // make connections
          widgetR.add(t);
          t.setUserData("modelLink", currNode);
          currNode.widgetLinkFull = t;
        }
      };

      // -- Main --------------------------------
      var ttree = this.tests.handler.ttree;
      var that = this;

      // Handle current Tree Selection and Content
      this.tree.setUserData("modelLink", ttree); // link top level widgets and model

      this.tree.getRoot().setOpen(true);
      buildSubTree(this.tree.getRoot(), ttree);

      if (_initialNode != null) {
        this.updateIframe(_initialNode);
      } else {
        this.tree.setSelection([this.tree.getRoot()]);
      }
    },

    runSample: function() {
      //if (this.__selectedModelNode) {
        this.updateIframe(this.__selectedModelNode);
      //} else {
        //this.playNext();
      //}
    },

    async updateIframe(value) {
      if (value === this._currentSample) {
        return;
      }

      if (!value) {
        value = this.welcomeUrl;
        this._history.setState("");
      }

      let treeNode;
      let modelNode;
      let state;
      let url;
      let html;

      if (typeof value == "string") {
        if (value.startsWith("http")) {
          url = state = value;
        } else {
          state = value;
          treeNode = this._sampleToTreeNodeMap[value];
          if (treeNode) {
            treeNode.getTree().setSelection([treeNode]);
          }
        }
      } else if (value instanceof qx.ui.tree.core.AbstractTreeItem) {
        treeNode = value;
      } else if (value instanceof qxl.packagebrowser.Tree) {
        modelNode = value;
      }

      if (treeNode) {
        modelNode = treeNode.getUserData("modelLink");
        if (!modelNode) {
          this.error("Could not find model node for " + value + " from tree node");
          return;
        }
      }

      if (modelNode) {
        url = this.defaultUrl;
        state = state || modelNode.pwd().slice(1).concat([modelNode.type]).join("/");
        switch (modelNode.type) {
          case "demo":
            if (modelNode.hasChildren()) {
              // demo parent (without url)
              html = this.__getApplicationsHtml(modelNode.children);
            } else {
              // demo child (with url)
              url = modelNode.url;
              state = modelNode.pwd().slice(1).concat([modelNode.label]).join("/");
            }
            break;
          case "library":
            html = this.__getLibraryInfoHtml(modelNode);
            break;
          case "readme":
            html = await this.__getReadmeHtml(modelNode.uri);
            break;
          case "releases":
            html = await this.__getReleasesHtml(modelNode, treeNode);
            break;
          case "problems":
            html = this.__getProblemsHtml(modelNode);
            break;
          default:
            let children = modelNode.getChildren();
            if (Array.isArray(children) && children.length && children[0].type === "library") {
              return this.updateIframe(children[0]);
            }
            state = modelNode.pwd().slice(1).concat([modelNode.label]).join("/");
            url = this.welcomeUrl;
        }
      } else if (!url) {
        url = this.welcomeUrl;
      }

      if (state && state !== this.defaultUrl && state !== this.welcomeUrl) {
        state = state.replace(/\//g, "~");
        this._history.setState(state);
      }

      // if we have a cross-domain url, we cannot open it in the iFrame.
      // create some html with a link instead.
      if (url && !(url.startsWith(location.origin) || url.startsWith(qx.$$appRoot))) {
        html = this.__getOpenLinkHtml(url);
      }

      // write html instead of loading from remote url
      if (html) {
        this.__ownWindowButton.setEnabled(false);
        if (this._iframe.getSource() !== this.defaultUrl) {
          await this.__loadIframe(this.defaultUrl);
        }
        this._iframe.getDocument().body.innerHTML = html;
      } else {
        // Toggle menu buttons
        if (url === this.defaultUrl || url === this.welcomeUrl) {
          this.__ownWindowButton.setEnabled(false);
          this.disableMenuButtons();
        } else {
          this.__ownWindowButton.setEnabled(true);
          this.enableMenuButtons();
        }
        if (this._iframe.getSource() !== url) {
          await this.__loadIframe(url);
        }
      }

      this._currentSample = value;
      this._currentSampleUrl = url;
    },

    /**
     * Loads an iframe asynchronously and returns a promise that resolves to
     * the iframe's window object once it is loaded
     * @param url
     * @return {Promise<window>}
     * @private
     */
    async __loadIframe(url) {
      return new Promise((resolve, reject) => {
        if (url !== this.defaultUrl) {
          qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display(`Loading, please wait... `);
        }
        this._iframe.addListener("load", () => {
          qx.event.Timer.once(() => {
            qxl.packagebrowser.Popup.getInstance().hide();
            resolve(this._iframe.getWindow());
          }, this, 500);
        });
        this._iframe.setSource(url);
      });
    },

    __getLibraryInfoHtml(modelNode) {
      const lib = modelNode.manifest;
      const req = lib.requires || {};
      const repo_url = "https://github.com/" + modelNode.uri.split(/\//).slice(0, 2).join("/");
      const display = v => v ? "" : "display:none";

      function createTableRow(...args) {
        return "<tr>" + args.map(arg => `<td>${arg}</td>`).join("") + "</tr>";
      }

      function createAnchor(href, linktext, target="_blank") {
        return `<a href="${href}" ${target ? "target=\"" + target + "\"" : ""}>${linktext || href}</a>`;
      }

      const dependencies = Object.entries(req).map(([pkg_uri, range]) => {
        if (!pkg_uri.startsWith("@") && !pkg_uri.startsWith("qooxdoo-")) {
          return createTableRow(createAnchor(`javascript:void(top.location.hash='${pkg_uri.replace("/", "~")}~library')`, pkg_uri), range);
        }
      }).filter(v => Boolean(v));
      let html = `
        <h1>${lib.info.name}</h1>
        <h2 style="font-weight:bold;${display(lib.info.summary)}">${lib.info.summary}</h2>
        <table>
          ${createTableRow("Version:", lib.info.version)}
          ${createTableRow("Namespace:", lib.provides.namespace)}
          ${createTableRow("Authors:", this.__getAuthorsHtml(lib.info.authors))}
          ${createTableRow("Homepage:", createAnchor(lib.info.homepage))}
          ${createTableRow("Repository:", createAnchor(repo_url))}
          ${createTableRow("Issues:", createAnchor(this.__getNewIssueUrl(modelNode.uri), "List of issues") + " | " + createAnchor(this.__getNewIssueUrl(modelNode.uri,true), "Create new issue"))}
          ${createTableRow("Keywords:", this.__getKeywordssHtml(lib.info.keywords || []))}
        </table>
        <h2 style="${display(lib.info.description)}">Description</h2>
        <p style="${display(lib.info.description)}">${lib.info.description}</p>
        <h2>Installation</h2>
        <p><code>qx package install ${modelNode.uri}</code></p>
        <h2>Dependencies</h2>
        <table>
          ${createTableRow("qooxdoo version:", req["@qooxdoo/framework"] || req["qooxdoo-sdk"])}
          ${createTableRow("Compiler version:", req["@qooxdoo/compiler"] || req["qooxdoo-compiler"])}
          ${dependencies.join("\n")}
        </table>  
       `;
      return html;
    },

    __getOpenLinkHtml(url) {
      return `<p>Click on the following link to open it in a new window: <a target="_blank" href="${url}">${url}</a>`;
    },

    __getAuthorsHtml(authors) {
      return authors.map(author => {
        let html = `${author.name}`;
        if (author.githubUser) {
          let img_src = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/icon/github-16x16.png");
          html += ` <img src="${img_src}" /><a href="https://github.com/${author.githubUser}">@${author.githubUser}</a>`;
        }
        return html;
      }).join(", ");
    },

    __getKeywordssHtml(keywords) {
      return keywords.join(", ");
    },

    __getNewIssueUrl(uri, newIssue=false) {
      uri = uri.split("/").slice(0,2).join("/");
      return `https://github.com/${uri}/issues${newIssue ? "/new" : ""}`;
    },

    /**
     * @param {qxl.packagebrowser.Tree} modelNode
     * @return {string}
     * @private
     */
    __getProblemsHtml(modelNode) {
      let {data:{compilation_log}, manifest:{info, requires={}}} = modelNode;
      const lineStartsWith = [
        "One or more libraries",
        "Writing",
        "Minifying",
        "Everything is up-to-date"
      ];
      let log =
        compilation_log
          .split("\n")
          .filter(line => Boolean(line.trim()))
          .filter(line => !lineStartsWith.some(string => line.startsWith(string)))
          .join("\n");
      let migrateMsg = "";
      const migrateSignal = "Migration completed.\n";
      if (log.includes(migrateSignal)) {
        migrateMsg = `<p class="notice">The package must be migrated to a new compiler version.  
          The package author should run <span class="code">qx package migrate</span> 
          in the root folder of this package, follow the instructions, and 
          release a new version of the package.</p>`;
        log = log.replace(migrateSignal,"");
      }
      const newIssueBody = [
        `Compiling package '${info.name}' with the following environment:`, "",
        ` - qooxdoo version: ${requires["@qooxdoo/framework"]}`,
        ` - compiler: ${requires["@qooxdoo/compiler"]}`, "",
        `results in the following warnings/errors:`, "```", log, "```",
        `Please visit https://www.qooxdoo.org/qxl.packagebrowser/${top.location.hash} for more information how to fix the problems.`
      ].join("\n");
      const newPackageIssueUrl =
        this.__getNewIssueUrl(modelNode.uri, true) +
        "?title=" + encodeURIComponent("Compilation problems") +
        "&body=" + encodeURIComponent(newIssueBody);
      const newCompilerIssueUrl =
        `https://github.com/qooxdoo/qooxdoo-compiler/issues/new` +
        "?title=" + encodeURIComponent("Compilation problems") +
        "&body=" + encodeURIComponent(newIssueBody);
      let html = `<h1>Compilation problems</h1>
        ${migrateMsg}
        <p>During the compilation of this package, the following warnings or errors have been logged.
        The messages do not necessarily imply that the package is broken.
        They might point to problems of the compiled library or might be
        the symptom of an unresolved bug of the compiler.</p> 
        <pre>${log}</pre>`;

      const explanations = [
        {
          regex: /^([^:]+): (.+) Unresolved use of symbol (.+)$/,
          description:
            `The compiler cannot find a reference for the given symbol <span class="code">$3</span>. 
            If this does not indicate a bug, it can usually fixed with adding <span class="code">@ignore($3)</span> 
            in class <span class="code">$1</span>.`
        },
        {
          regex: /^Cannot find path (.+) required by library (.+)$/,
          description:
            `The <span class="code">Manifest.json</span> file of the class 
            <span class="code">$2</span> declares to provide a path 
            <span class="code">$1</span>, which does not exist.`
        },
        {
          regex: /^(.*)Error validating data for ([^:]+): (.+)$/,
          description:
            `The file <span class="code">$2</span> is not valid according to 
             <a target="_blank" href="https://github.com/qooxdoo/qooxdoo-compiler/tree/master/source/resource/qx/tool/schema">
             the current JSON Schema</a> 
             (see documentation <a href="http://www.qooxdoo.org/docs/#/configuration/overview?id=configuration-files" target="_blank">
             here</a>). Validation errors are: <span class="code">$3</span>.`
        }
      ];
      const explainMessages =
        compilation_log
          .split("\n")
          .reduce((result, line) => {
            let explanation = explanations.find(expl => line.match(expl.regex));
            if (explanation) {
              result.push(line.replace(explanation.regex, explanation.description));
            }
            return result;
          },[]);
      if (explainMessages.length) {
        html += `<h2>Explanation</h2>
        <ul><li>${explainMessages.join("</li><li>")}</li></ul>`;
      }
      html += `<h2>What you can do</h2>
      <ul>
        <li><a target="_blank" href="${newPackageIssueUrl}">Create an issue in the package repo</a>;</li>    
        <li>If you think that a compiler bug is concerned, <a target="_blank" href="${newCompilerIssueUrl}">create an issue in the compiler repo</a>;</li>
        <li>If the problem concerns a dependency of this package, try upgrading the dependent package to its most recent compatible version; if that doesn't help, contact the package author;</li>
        <li>Or, if you are unsure, <a target="_blank" href="https://gitter.im/qooxdoo/qooxdoo">report the problems on Gitter</a>.</li>
      </ul>`;
      return html;
    },

    __getApplicationsHtml(children) {
      const appsHtml = children.map(childNode => {
          const hash = childNode.pwd().slice(1).concat([childNode.label]).join("~");
          return `<a href="javascript:void(top.location.hash='${hash}')"><h2>${childNode.label}</h2></a>` +
            (childNode.description ? `<p>${childNode.description}</p>` : "")
        }
      ).join("\n");
      return `<h1>Demo Applications</h1>
      <p>This package contains the following executable applications:</p>
      ${appsHtml}`;
    },

    /**
     *
     * @param uri {String} The GitHub uri
     * @return {Promise<string|*|string>}
     * @private
     * @ignore(fetch)
     * @ignore(showdown)
     */
    __getReadmeHtml: async function (uri) {
      let apiUrl = `https://api.github.com/repos/${uri}/readme`;
      qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display(`Loading, please wait... `);
      try {
        let result = await (await fetch(apiUrl)).json();
        if (result.content) {
          let markdown = atob(result.content);
          let converter = new showdown.Converter();
          return converter
            .makeHtml(markdown)
            .replace(/(href|src)="([^h][^t][^t][^p])/g, (match, attr, urlFragment) => {
              let urlPrefix = attr === "href" ? `https://github.com/${uri}/tree/master` : `https://raw.githubusercontent.com/${uri}/master`;
              return `target="_blank" ${attr}="${urlPrefix}/${urlFragment}`;
            });
        }
        return `<p>The repository does not have a README file.`;
      } catch (e) {
        return `<p>Error retrieving ${apiUrl}: ${e.message}.</p>`;
      } finally {
        qxl.packagebrowser.Popup.getInstance().hide();
      }
    },

    async __getReleasesHtml(modelNode, treeNode) {

      let uri = modelNode.uri.split("/").slice(0,2).join("/");
      let apiUrl = `https://api.github.com/repos/${uri}/releases`;
      qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display(`Loading, please wait... `);
      try {
        const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        const today = new Date();
        let html="";
        let result = await (await fetch(apiUrl)).json();
        if (result.length) {
          html = `<h1>Releases</h1>`;
          html += result.map( release => {
            if (release.draft) {
              return null;
            }
            const datePublished = new Date(release.published_at);
            const daysSincePublished = Math.round(Math.abs((today.getTime() - datePublished.getTime())/(oneDay)));
            if (treeNode && daysSincePublished < 7) {
              treeNode.setIcon("qx/icon/Tango/16/status/mail-unread.png");
              treeNode.setLabel("New release available");
            }
            const tagHtml = release.tag_name !== release.name ? `Tag name: ${release.tag_name}. ` : "";
            const titleSuffixes = [];
            if (release.prerelease) {
              titleSuffixes.push("prerelease");
            }
            if (release.tag_name === modelNode.latestCompatible) {
              titleSuffixes.push("latest compatible release");
            }
            if (release.tag_name === modelNode.latestVersion) {
              titleSuffixes.push("current version");
            }
            let div = document.createElement('div');
            div.innerText = release.body;
            let description = div.innerHTML;
            return `
              <h2><a href="${release.html_url}" target="_blank">${release.name} ${titleSuffixes.length ? ("(" + titleSuffixes.join(", ") + ")") : ""}</a></h2>
              <p style="font-weight: bold">${tagHtml}Published at ${datePublished.toLocaleDateString()}, ${datePublished.toLocaleTimeString()} (${daysSincePublished} days ago)</p>
              <p>${description}</p>
            `;
          }).filter(release => Boolean(release)).join("\n");
        }
        return html;
      } catch (e) {
        return `<p>Error retrieving ${apiUrl}: ${e.message}.</p>`;
      } finally {
        qxl.packagebrowser.Popup.getInstance().hide();
      }
    },

    __onIframeLoaded: function () {
      // var fwindow = this._iframe.getWindow();
      // var furl = this._iframe.getSource();
      // if (furl != null && furl !== this.defaultUrl) {
      //
      // }
    },


    // ------------------------------------------------------------------------
    //   MISC HELPERS
    // ------------------------------------------------------------------------

    /**
     * This method filters the folders in the tree.
     * @param term {String} The search term.
     */
    filter: function (term) {
      var searchRegExp = new RegExp("^.*" + term + ".*", "ig");
      var items = this._tree.getRoot().getItems(true, true);

      for (let i = 0; i < items.length; i++) {
        var folder = items[i];
        var parent = folder.getParent();

        // check for the tags
        var tags = folder.getUserData("tags");
        var inTags = false;
        if (tags != null) {
          for (let j = 0; j < tags.length; j++) {
            inTags = Boolean(tags[j].match(searchRegExp));
            if (inTags) {
              break;
            }
          }
        }

        if ((inTags || (folder.getLabel().search(searchRegExp) !== -1) || (parent.getLabel().search(searchRegExp) !== -1))) {
          folder.setOpen(false);
          folder.setUserData("show", true);
          folder.show();
          while (parent) {
            parent.setOpen(true);
            parent.show();
            parent = parent.getParent();
          }
        } else {
          folder.setUserData("show", false);
          if (!parent.getUserData("show")) {
            folder.exclude();
          }
        }
      }

      // special case for the empty string
      if (term === "") {
        var folders = this._tree.getRoot().getItems(false, true);
        var selection = this._tree.getSelection();

        // close all folders
        for (let i = 0; i < folders.length; i++) {
          // don't close the current selected
          if (folders[i] === selection[0] || folders[i] === selection[0].getParent()) {
            continue;
          }
          folders[i].setOpen(false);
        }
      }
    },

    /**
     * TODOC
     *
     * @param url {var} TODOC
     * @return {void}
     */
    dataLoader: function (url) {
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
        if (!content) {
          alert("Failed to load package data");
          return;
        }

        let treeData = eval(content);

        // give the browser a chance to update its UI before doing more
        qx.event.Timer.once(function () {
          this.tests.handler = new qxl.packagebrowser.TreeDataHandler(treeData);
          this.leftReloadTree();

          // read initial state
          var state = this._history.getState().replace(/\~/g, "/");
          if (state) {
            if (state.startsWith("filter/")) {
              qx.event.Timer.once(() => {
                this._searchTextField.setValue(state.slice(7));
              },null,1000);
            } else {
              this.updateIframe(state);
            }
          } else {
            this.updateIframe(this.welcomeUrl);
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
    playPrev: function (e) {
      var currSamp = this.tree.getSelection()[0]; // widget

      if (currSamp) {
        var otherSamp = this.tree.getPreviousNodeOf(currSamp, false);
        if (!otherSamp || otherSamp === this.tree.getRoot()) {
          return;
        }

        while (otherSamp.isVisible && !otherSamp.isVisible()) {
          otherSamp = this.tree.getPreviousNodeOf(otherSamp, false);
        }

        if (otherSamp.getParent() === this.tree.getRoot()) {
          // otherSamp is the parent
          var candidate = this.tree.getPreviousNodeOf(otherSamp, false);
          while (candidate.isVisible && !candidate.isVisible()) {
            candidate = this.tree.getPreviousNodeOf(candidate, false);
          }
          if (candidate.getParent() === this.tree.getRoot()) {
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

        if (otherSamp && otherSamp !== currSamp) {
          this.tree.setSelection([otherSamp]);
          this.runSample();
        }
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
    playNext: function (e) {
      this._nextButton.setEnabled(true);
      this._prevButton.setEnabled(true);
      var currSamp = this.tree.getSelection()[0]; // widget

      if (currSamp) {
        var otherSamp = this.tree.getNextNodeOf(currSamp);
        if (!otherSamp) {
          return;
        }

        if (otherSamp.getParent() === this.tree.getRoot()) {
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
          if (candidate.getParent() === this.tree.getRoot()) {
            // found a folder
            otherSamp.setOpen(true);
            candidate = this.tree.getNextNodeOf(candidate);
          }
          otherSamp = candidate;
        }
        if (otherSamp) {
          this.tree.setSelection([otherSamp]);
          this.runSample();
        }
      }
    },

    /**
     * Diables all menu buttons which functionality only works with a selected
     * demo.
     */
    disableMenuButtons: function () {
      var elements = this.__menuElements;
      for (var i = 0; i < elements.length; i++) {
        elements[i].setEnabled(false);
      }
    },

    /**
     * Enables all menu buttons which functionality only works with a selected
     * demo.
     */
    enableMenuButtons: function () {
      var elements = this.__menuElements;
      for (var i = 0; i < elements.length; i++) {
        elements[i].setEnabled(true);
      }
    },


    /**
     * Creates the application header.
     */
    _createHeader: function () {
      var layout = new qx.ui.layout.HBox();
      var header = new qx.ui.container.Composite(layout);
      header.setAppearance("app-header");

      var title = new qx.ui.basic.Label("Package Browser");
      var version = new qxl.versionlabel.VersionLabel();
      version.setFont("default");

      header.add(title);
      header.add(new qx.ui.core.Spacer(), {flex: 1});
      header.add(version);

      return header;
    }

  },


  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct: function () {
    this.widgets = this.tests = this._sampleToTreeNodeMap = this.tree = this.logelem = null;
    this._disposeObjects("mainsplit", "tree1", "left", "toolbar", "f1", "f2", "_history", "logappender", "_cmdObjectSummary", "_cmdRunSample", "_cmdPrevSample", "_cmdNextSample", "_cmdSampleInOwnWindow", "_navPart", "__ownWindowButton", "__viewPart", "__viewGroup", "__menuBar", "_infosplit", "_searchTextField", "_tree", "_iframe", "_demoView", "__menuElements", "__logSync", "_leftComposite", "_urlWindow", "_nextButton", "_prevButton", "__menuItemStore", "__overflowMenu");
  }
});
