function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qxShowdown.Load": {
        "construct": true
      },
      "qx.util.ResourceManager": {
        "construct": true
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
      "qx.bom.History": {
        "construct": true
      },
      "qxl.packagebrowser.InfoWindow": {
        "construct": true
      },
      "qx.ui.command.Command": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Part": {},
      "qx.ui.toolbar.Button": {},
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.Separator": {},
      "qx.ui.toolbar.RadioButton": {},
      "qx.ui.menu.RadioButton": {},
      "qx.ui.form.RadioGroup": {},
      "qx.ui.menu.Button": {},
      "qx.event.Registration": {},
      "qx.lang.Function": {},
      "qx.ui.toolbar.CheckBox": {},
      "qx.ui.menu.CheckBox": {},
      "qx.ui.embed.Iframe": {},
      "qx.ui.tree.Tree": {},
      "qx.ui.tree.TreeFolder": {},
      "qx.ui.window.Window": {},
      "qx.ui.basic.Label": {},
      "qx.bom.Viewport": {},
      "qx.lang.Type": {},
      "qx.ui.tree.TreeFile": {},
      "qx.ui.tree.core.AbstractTreeItem": {},
      "qxl.packagebrowser.Tree": {},
      "qxl.packagebrowser.Popup": {},
      "qx.io.request.Xhr": {},
      "qxl.packagebrowser.TreeDataHandler": {},
      "qxl.versionlabel.VersionLabel": {},
      "qx.ui.core.Spacer": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.contrib": {}
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
   * @ignore(showdown)
   * @ignore(qx.$$appRoot)
   */

  /* global showdown */
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
    construct: function construct() {
      var _this = this;

      qxShowdown.Load;
      qx.ui.container.Composite.constructor.call(this);
      this.__P_3_0 = {};
      this.welcomeUrl = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/welcome.html");
      this.defaultUrl = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/default.html"); // Configure layout

      var layout = new qx.ui.layout.VBox();
      this.setLayout(layout); // Header

      this.add(this._createHeader()); // Data

      this.widgets = {};
      this.tests = {}; // Commands & Menu Bar

      this.__P_3_1();

      this.__P_3_2 = this.__P_3_3();
      this.add(this.__P_3_2); // Main Split Pane

      var mainsplit = new qx.ui.splitpane.Pane("horizontal");
      mainsplit.setAppearance("app-splitpane");
      this.mainsplit = mainsplit;
      var infosplit = new qx.ui.splitpane.Pane("horizontal");
      infosplit.setDecorator(null);
      this._infosplit = infosplit;
      this.add(mainsplit, {
        flex: 1
      }); // tree side

      var leftComposite = this._leftComposite = new qx.ui.container.Composite();
      leftComposite.setLayout(new qx.ui.layout.VBox(3));
      mainsplit.add(leftComposite, 0); // search

      var searchComposite = new qx.ui.container.Composite();
      searchComposite.setLayout(new qx.ui.layout.HBox(3));
      searchComposite.setAppearance("textfield");
      leftComposite.add(searchComposite);
      var searchIcon = new qx.ui.basic.Image("icon/16/actions/edit-find.png");
      searchComposite.add(searchIcon);
      var stf = this._searchTextField = new qx.ui.form.TextField();
      stf.setLiveUpdate(true);
      stf.setAppearance("widget");
      stf.setPlaceholder("Filter...");
      var filterTimer = new qx.event.Timer(500);
      filterTimer.addListener("interval", function (ev) {
        var searchTxt = this._searchTextField.getValue();

        this.filter(searchTxt);

        this._history.setState("filter~" + searchTxt);

        filterTimer.stop();
      }, this);

      this._searchTextField.addListener("changeValue", function (e) {
        this._clearIcon.setEnabled(Boolean(e.getData()));

        filterTimer.restart();
      }, this);

      searchComposite.add(this._searchTextField, {
        flex: 1
      }); // clear

      var clearIcon = this._clearIcon = new qx.ui.basic.Image("qx/icon/Tango/16/actions/edit-delete.png");
      clearIcon.setMarginTop(3);
      clearIcon.setEnabled(false);
      clearIcon.addListener("tap", function () {
        return _this._searchTextField.setValue("");
      });
      searchComposite.add(clearIcon);
      mainsplit.add(infosplit, 1);
      this._tree = this.__P_3_4();
      leftComposite.add(this._tree, {
        flex: 1
      });

      this.__P_3_5();

      this._demoView = this.__P_3_6();
      infosplit.add(this._demoView, 2); // Back button and bookmark support

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

      this.__P_3_7 = [this.__P_3_8, this.__P_3_9];
      this.__P_3_10 = new qxl.packagebrowser.InfoWindow(this.tr("Info"));

      this.__P_3_10.setAutoCenter(true);
    },
    members: {
      // ------------------------------------------------------------------------
      //   CONSTRUCTOR HELPERS
      // ------------------------------------------------------------------------
      _iframe: null,
      __P_3_11: null,
      _tree: null,
      _searchTextField: null,
      __P_3_7: null,
      _versionFilter: null,
      _navPart: null,
      __P_3_8: null,
      __P_3_9: null,
      __P_3_2: null,
      _leftComposite: null,
      _infosplit: null,
      _demoView: null,
      __P_3_12: null,
      __P_3_0: null,
      __P_3_13: null,
      _urlWindow: null,
      __P_3_10: null,
      __P_3_14: null,
      __P_3_15: null,
      defaultUrl: null,
      welcomeUrl: null,
      __P_3_1: function __P_3_1() {
        this._cmdRunSample = new qx.ui.command.Command("F5");

        this._cmdRunSample.addListener("execute", this.runSample, this);

        this._cmdPrevSample = new qx.ui.command.Command("Ctrl+Left");

        this._cmdPrevSample.addListener("execute", this.playPrev, this);

        this._cmdNextSample = new qx.ui.command.Command("Ctrl+Right");

        this._cmdNextSample.addListener("execute", this.playNext, this);

        this._cmdSampleInOwnWindow = new qx.ui.command.Command("Ctrl+N");

        this._cmdSampleInOwnWindow.addListener("execute", this.__P_3_16, this);
      },
      __P_3_16: function __P_3_16() {
        var sampUrl = this._iframe.getSource();

        window.open(sampUrl, "_blank");
      },
      __P_3_3: function __P_3_3() {
        var bar = new qx.ui.toolbar.ToolBar();
        var prevNextPart = new qx.ui.toolbar.Part();
        bar.add(prevNextPart); // -- previous navigation

        var prevbutt = new qx.ui.toolbar.Button(this.tr("Previous"), "icon/22/actions/go-previous.png");
        prevbutt.addListener("execute", this.playPrev, this);
        prevbutt.setToolTipText("Run previous demo");
        prevNextPart.add(prevbutt);
        this._prevButton = prevbutt; // -- next navigation

        var nextbutt = new qx.ui.toolbar.Button(this.tr("Next"), "icon/22/actions/go-next.png");
        nextbutt.addListener("execute", this.playNext, this);
        nextbutt.setToolTipText("Run next demo");
        prevNextPart.add(nextbutt);
        this._nextButton = nextbutt; // -- spin-out demo

        var ownWinBtn = new qx.ui.toolbar.Button(this.tr("Own Window"), "icon/22/actions/edit-redo.png");
        ownWinBtn.addListener("execute", this.__P_3_16, this);
        ownWinBtn.setToolTipText("Open demo in new window");
        this.__P_3_8 = ownWinBtn;
        bar.add(ownWinBtn); // -- documentaton

        var docButton = new qx.ui.toolbar.Button(this.tr("Documentation"), "icon/22/apps/internet-web-browser.png");
        docButton.addListener("execute", function () {
          window.open("https://www.qooxdoo.org/docs/#/development/cli/packages");
        }, this);
        docButton.setToolTipText("Open package system documentation");
        bar.add(docButton); // VIEWS
        // -----------------------------------------------------

        var viewPart = new qx.ui.toolbar.Part();
        this.__P_3_9 = viewPart;
        bar.addSpacer();
        bar.add(viewPart); // enable overflow handling

        bar.setOverflowHandling(true); // add a button for overflow handling

        var chevron = new qx.ui.toolbar.MenuButton(null, "icon/22/actions/media-seek-forward.png");
        chevron.setAppearance("toolbar-button"); // hide the down arrow icon

        bar.add(chevron);
        bar.setOverflowIndicator(chevron); // set priorities for overflow handling

        bar.setRemovePriority(viewPart, 6);
        bar.setRemovePriority(prevNextPart, 2);
        bar.setRemovePriority(this._navPart, 1); // add the overflow menu

        this.__P_3_12 = new qx.ui.menu.Menu();
        chevron.setMenu(this.__P_3_12); // add the listener

        bar.addListener("hideItem", this._onHideItem, this);
        bar.addListener("showItem", this._onShowItem, this);
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
          var separator = null;
          var firstGroup = false;

          var menuItems = this.__P_3_12.getChildren();

          if (partItem !== this.__P_3_9) {
            separator = this.__P_3_0[partItem.toHashCode()];

            if (!separator) {
              separator = new qx.ui.menu.Separator();

              this.__P_3_12.addBefore(separator, menuItems[0]);

              this.__P_3_0[partItem.toHashCode()] = separator;
            }

            cachedItems.push(separator);
          } else {
            firstGroup = true;
          }

          for (var i = 0, l = partButtons.length; i < l; i++) {
            if (partButtons[i].getVisibility() === "excluded") {
              continue;
            }

            var cachedItem = this.__P_3_0[partButtons[i].toHashCode()];

            if (!cachedItem) {
              if (partButtons[i] instanceof qx.ui.toolbar.RadioButton) {
                cachedItem = new qx.ui.menu.RadioButton(partButtons[i].getLabel());
                cachedItem.setToolTipText(partButtons[i].getToolTipText());
                cachedItem.setEnabled(partButtons[i].getEnabled());
                cachedItem.setUserData("value", partButtons[i].getUserData("value"));
                cachedItem.setModel(partButtons[i].getModel());
                partButtons[i].bind("enabled", cachedItem, "enabled"); // sync the value's

                partButtons[i].bind("value", cachedItem, "value");
                cachedItem.bind("value", partButtons[i], "value");

                if (!this.__P_3_13) {
                  this.__P_3_13 = new qx.ui.form.RadioGroup();

                  this.__P_3_13.setAllowEmptySelection(true);
                }

                this.__P_3_13.add(cachedItem);
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
                this.__P_3_12.add(cachedItem);
              } else {
                this.__P_3_12.addBefore(cachedItem, separator);
              }

              this.__P_3_0[partButtons[i].toHashCode()] = cachedItem;
            }

            cachedItems.push(cachedItem);
          }
        }

        return cachedItems;
      },
      __P_3_6: function __P_3_6() {
        var iframe = new qx.ui.embed.Iframe().set({
          nativeContextMenu: true
        });
        iframe.addListener("load", this.__P_3_17, this);
        this._iframe = iframe;
        return iframe;
      },

      /**
       * Tree View in Left Pane
       * - only make root node; rest will be filled when iframe has loaded (with
       *   leftReloadTree)
       *
       * @return {var} TODOC
       */
      __P_3_4: function __P_3_4() {
        var tree1 = new qx.ui.tree.Tree();
        var root = new qx.ui.tree.TreeFolder("Packages");
        tree1.setAppearance("demo-tree");
        tree1.setRoot(root); //tree1.setSelection([root]);

        this.tree = this.widgets["treeview.flat"] = tree1;
        tree1.addListener("changeSelection", this.__P_3_18, this);
        tree1.addListener("tap", function (e) {
          qx.event.Timer.once(this.runSample, this, 50);
        }, this);
        return tree1;
      },
      __P_3_5: function __P_3_5() {
        var urlWindow = new qx.ui.window.Window(this.tr("Package Link"), "icon/22/mimetypes/text-html.png");
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
      __P_3_18: function __P_3_18(e) {
        var treeNode = this.tree.getSelection()[0];
        var modelNode = treeNode.getUserData("modelLink");
        this.__P_3_15 = modelNode;
      },

      /**
       * @param e {Event}
       * @return {void}
       */
      leftReloadTree: function leftReloadTree(e) {
        this._sampleToTreeNodeMap = {};
        var _sampleToTreeNodeMap = this._sampleToTreeNodeMap;
        var _initialNode = null; // set a section to open initially

        var state = this._history.getState().replace(/~/g, "/");

        var icons = qxl.packagebrowser.PackageBrowser.icons; // use tree struct

        /**
         * create widget tree from model
         *
         * @param widgetR {qx.ui.tree.Tree}    [In/Out]
         *        widget root under which the widget tree will be built
         * @param modelR  {qxl.packagebrowser.Tree} [In]
         *        model root for the tree from which the widgets representation
         *        will be built
         */

        var buildSubTree = function buildSubTree(widgetR, modelR) {
          var children = modelR.getChildren();
          var t;

          for (var i = 0; i < children.length; i++) {
            var currNode = children[i];
            var fullPath = void 0;

            if (currNode.hasChildren()) {
              t = new qx.ui.tree.TreeFolder(currNode.label);
              t.setUserData("filled", false);
              t.setUserData("node", currNode); // tags

              var tags = [];

              if (currNode.description) {
                tags.push(currNode.description);
              }

              if (currNode.info.description) {
                tags.push(currNode.info.description);
              }

              var keywords = currNode.info.keywords;

              if (qx.lang.Type.isArray(keywords) && keywords.length) {
                tags = tags.concat(keywords);
              }

              var authors = currNode.info.authors;

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
            } // set icon


            var type = currNode.data && currNode.data.problems ? "problems" : currNode.type;

            if (type && icons[type]) {
              t.setIcon(icons[type]);
            } // make connections


            widgetR.add(t);
            t.setUserData("modelLink", currNode);
            currNode.widgetLinkFull = t;
          }
        }; // -- Main --------------------------------


        var ttree = this.tests.handler.ttree; // Handle current Tree Selection and Content

        this.tree.setUserData("modelLink", ttree); // link top level widgets and model

        this.tree.getRoot().setOpen(true);
        buildSubTree(this.tree.getRoot(), ttree);

        if (_initialNode !== null) {
          this.updateIframe(_initialNode);
        } else {
          this.tree.setSelection([this.tree.getRoot()]);
        }
      },
      runSample: function runSample() {
        //if (this.__selectedModelNode) {
        this.updateIframe(this.__P_3_15); //} else {
        //this.playNext();
        //}
      },
      updateIframe: function updateIframe(value) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var treeNode, modelNode, state, url, html, children;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(value === _this2._currentSample)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  if (!value) {
                    value = _this2.welcomeUrl;

                    _this2._history.setState("");
                  }

                  if (typeof value == "string") {
                    if (value.startsWith("http")) {
                      url = state = value;
                    } else {
                      state = value;
                      treeNode = _this2._sampleToTreeNodeMap[value];

                      if (treeNode) {
                        treeNode.getTree().setSelection([treeNode]);
                      }
                    }
                  } else if (value instanceof qx.ui.tree.core.AbstractTreeItem) {
                    treeNode = value;
                  } else if (value instanceof qxl.packagebrowser.Tree) {
                    modelNode = value;
                  }

                  if (!treeNode) {
                    _context.next = 9;
                    break;
                  }

                  modelNode = treeNode.getUserData("modelLink");

                  if (modelNode) {
                    _context.next = 9;
                    break;
                  }

                  _this2.error("Could not find model node for " + value + " from tree node");

                  return _context.abrupt("return");

                case 9:
                  if (!modelNode) {
                    _context.next = 36;
                    break;
                  }

                  url = _this2.defaultUrl;
                  state = state || modelNode.pwd().slice(1).concat([modelNode.type]).join("/");
                  _context.t0 = modelNode.type;
                  _context.next = _context.t0 === "demo" ? 15 : _context.t0 === "library" ? 17 : _context.t0 === "readme" ? 19 : _context.t0 === "releases" ? 23 : _context.t0 === "problems" ? 27 : 29;
                  break;

                case 15:
                  if (modelNode.hasChildren()) {
                    // demo parent (without url)
                    html = _this2.__P_3_19(modelNode.children);
                  } else {
                    // demo child (with url)
                    url = modelNode.url;
                    state = modelNode.pwd().slice(1).concat([modelNode.label]).join("/");
                  }

                  return _context.abrupt("break", 34);

                case 17:
                  html = _this2.__P_3_20(modelNode);
                  return _context.abrupt("break", 34);

                case 19:
                  _context.next = 21;
                  return _this2.__P_3_21(modelNode.uri);

                case 21:
                  html = _context.sent;
                  return _context.abrupt("break", 34);

                case 23:
                  _context.next = 25;
                  return _this2.__P_3_22(modelNode, treeNode);

                case 25:
                  html = _context.sent;
                  return _context.abrupt("break", 34);

                case 27:
                  html = _this2.__P_3_23(modelNode);
                  return _context.abrupt("break", 34);

                case 29:
                  children = modelNode.getChildren();

                  if (!(Array.isArray(children) && children.length && children[0].type === "library")) {
                    _context.next = 32;
                    break;
                  }

                  return _context.abrupt("return", _this2.updateIframe(children[0]));

                case 32:
                  state = modelNode.pwd().slice(1).concat([modelNode.label]).join("/");
                  url = _this2.welcomeUrl;

                case 34:
                  _context.next = 37;
                  break;

                case 36:
                  if (!url) {
                    url = _this2.welcomeUrl;
                  }

                case 37:
                  if (state && state !== _this2.defaultUrl && state !== _this2.welcomeUrl) {
                    state = state.replace(/\//g, "~");

                    _this2._history.setState(state);
                  } // if we have a cross-domain url, we cannot open it in the iFrame.
                  // create some html with a link instead.


                  if (url && !(url.startsWith(location.origin) || url.startsWith(qx.$$appRoot))) {
                    html = _this2.__P_3_24(url);
                  } // write html instead of loading from remote url


                  if (!html) {
                    _context.next = 47;
                    break;
                  }

                  _this2.__P_3_8.setEnabled(false);

                  if (!(_this2._iframe.getSource() !== _this2.defaultUrl)) {
                    _context.next = 44;
                    break;
                  }

                  _context.next = 44;
                  return _this2.__P_3_25(_this2.defaultUrl);

                case 44:
                  _this2._iframe.getDocument().body.innerHTML = html;
                  _context.next = 51;
                  break;

                case 47:
                  // Toggle menu buttons
                  if (url === _this2.defaultUrl || url === _this2.welcomeUrl) {
                    _this2.__P_3_8.setEnabled(false);

                    _this2.disableMenuButtons();
                  } else {
                    _this2.__P_3_8.setEnabled(true);

                    _this2.enableMenuButtons();
                  }

                  if (!(_this2._iframe.getSource() !== url)) {
                    _context.next = 51;
                    break;
                  }

                  _context.next = 51;
                  return _this2.__P_3_25(url);

                case 51:
                  _this2._currentSample = value;
                  _this2._currentSampleUrl = url;

                case 53:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },

      /**
       * Loads an iframe asynchronously and returns a promise that resolves to
       * the iframe's window object once it is loaded
       * @param url
       * @return {Promise<window>}
       * @private
       */
      __P_3_25: function __P_3_25(url) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    if (url !== _this3.defaultUrl) {
                      qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display("Loading, please wait... ");
                    }

                    _this3._iframe.addListener("load", function () {
                      qx.event.Timer.once(function () {
                        qxl.packagebrowser.Popup.getInstance().hide();
                        resolve(_this3._iframe.getWindow());
                      }, _this3, 500);
                    });

                    _this3._iframe.setSource(url);
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      },
      __P_3_20: function __P_3_20(modelNode) {
        var lib = modelNode.manifest;
        var req = lib.requires || {};
        var repo_url = "https://github.com/" + modelNode.uri.split(/\//).slice(0, 2).join("/");

        var display = function display(v) {
          return v ? "" : "display:none";
        };
        /**
         * @param {...any} args
         */


        function createTableRow() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return "<tr>" + args.map(function (arg) {
            return "<td>".concat(arg, "</td>");
          }).join("") + "</tr>";
        }
        /**
         * @param href
         * @param linktext
         * @param target
         */


        function createAnchor(href, linktext) {
          var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "_blank";
          return "<a href=\"".concat(href, "\" ").concat(target ? "target=\"" + target + "\"" : "", ">").concat(linktext || href, "</a>");
        }

        var dependencies = Object.entries(req).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              pkg_uri = _ref2[0],
              range = _ref2[1];

          if (!pkg_uri.startsWith("@") && !pkg_uri.startsWith("qooxdoo-")) {
            return createTableRow(createAnchor("javascript:void(top.location.hash='".concat(pkg_uri.replace("/", "~"), "~library')"), pkg_uri), range);
          }

          return null;
        }).filter(function (v) {
          return Boolean(v);
        });
        var html = "\n        <h1>".concat(lib.info.name, "</h1>\n        <h2 style=\"font-weight:bold;").concat(display(lib.info.summary), "\">").concat(lib.info.summary, "</h2>\n        <table>\n          ").concat(createTableRow("Version:", lib.info.version), "\n          ").concat(createTableRow("Namespace:", lib.provides.namespace), "\n          ").concat(createTableRow("Authors:", this.__P_3_26(lib.info.authors)), "\n          ").concat(createTableRow("Homepage:", createAnchor(lib.info.homepage)), "\n          ").concat(createTableRow("Repository:", createAnchor(repo_url)), "\n          ").concat(createTableRow("Issues:", createAnchor(this.__P_3_27(modelNode.uri), "List of issues") + " | " + createAnchor(this.__P_3_27(modelNode.uri, true), "Create new issue")), "\n          ").concat(createTableRow("Keywords:", this.__P_3_28(lib.info.keywords || [])), "\n        </table>\n        <h2 style=\"").concat(display(lib.info.description), "\">Description</h2>\n        <p style=\"").concat(display(lib.info.description), "\">").concat(lib.info.description, "</p>\n        <h2>Installation</h2>\n        <p><code>qx package install ").concat(modelNode.uri, "</code></p>\n        <h2>Dependencies</h2>\n        <table>\n          ").concat(createTableRow("qooxdoo version:", req["@qooxdoo/framework"] || req["qooxdoo-sdk"]), "\n          ").concat(createTableRow("Compiler version:", req["@qooxdoo/compiler"] || req["qooxdoo-compiler"]), "\n          ").concat(dependencies.join("\n"), "\n        </table>  \n       ");
        return html;
      },
      __P_3_24: function __P_3_24(url) {
        return "<p>Click on the following link to open it in a new window: <a target=\"_blank\" href=\"".concat(url, "\">").concat(url, "</a>");
      },
      __P_3_26: function __P_3_26(authors) {
        return authors.map(function (author) {
          var html = "".concat(author.name);

          if (author.githubUser) {
            var img_src = qx.util.ResourceManager.getInstance().toUri("qxl/packagebrowser/icon/github-16x16.png");
            html += " <img src=\"".concat(img_src, "\" /><a href=\"https://github.com/").concat(author.githubUser, "\">@").concat(author.githubUser, "</a>");
          }

          return html;
        }).join(", ");
      },
      __P_3_28: function __P_3_28(keywords) {
        return keywords.join(", ");
      },
      __P_3_27: function __P_3_27(uri) {
        var newIssue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        uri = uri.split("/").slice(0, 2).join("/");
        return "https://github.com/".concat(uri, "/issues").concat(newIssue ? "/new" : "");
      },

      /**
       * @param {qxl.packagebrowser.Tree} modelNode
       * @return {string}
       * @private
       * @ignore(top)
       */
      __P_3_23: function __P_3_23(modelNode) {
        var compilation_log = modelNode.data.compilation_log,
            _modelNode$manifest = modelNode.manifest,
            info = _modelNode$manifest.info,
            _modelNode$manifest$r = _modelNode$manifest.requires,
            requires = _modelNode$manifest$r === void 0 ? {} : _modelNode$manifest$r;
        var lineStartsWith = ["One or more libraries", "Writing", "Minifying", "Everything is up-to-date"];
        var log = compilation_log.split("\n").filter(function (line) {
          return Boolean(line.trim());
        }).filter(function (line) {
          return !lineStartsWith.some(function (string) {
            return line.startsWith(string);
          });
        }).join("\n");
        var migrateMsg = "";
        var migrateSignal = "Migration completed.\n";

        if (log.includes(migrateSignal)) {
          migrateMsg = "<p class=\"notice\">The package must be migrated to a new compiler version.  \n          The package author should run <span class=\"code\">qx package migrate</span> \n          in the root folder of this package, follow the instructions, and \n          release a new version of the package.</p>";
          log = log.replace(migrateSignal, "");
        }

        var newIssueBody = ["Compiling package '".concat(info.name, "' with the following environment:"), "", " - qooxdoo version: ".concat(requires["@qooxdoo/framework"]), " - compiler: ".concat(requires["@qooxdoo/compiler"]), "", "results in the following warnings/errors:", "```", log, "```", "Please visit https://www.qooxdoo.org/qxl.packagebrowser/".concat(top.location.hash, " for more information how to fix the problems.")].join("\n");
        var newPackageIssueUrl = this.__P_3_27(modelNode.uri, true) + "?title=" + encodeURIComponent("Compilation problems") + "&body=" + encodeURIComponent(newIssueBody);
        var newCompilerIssueUrl = "https://github.com/qooxdoo/qooxdoo-compiler/issues/new" + "?title=" + encodeURIComponent("Compilation problems") + "&body=" + encodeURIComponent(newIssueBody);
        var html = "<h1>Compilation problems</h1>\n        ".concat(migrateMsg, "\n        <p>During the compilation of this package, the following warnings or errors have been logged.\n        The messages do not necessarily imply that the package is broken.\n        They might point to problems of the compiled library or might be\n        the symptom of an unresolved bug of the compiler.</p> \n        <pre>").concat(log, "</pre>");
        var explanations = [{
          regex: /^([^:]+): (.+) Unresolved use of symbol (.+)$/,
          description: "The compiler cannot find a reference for the given symbol <span class=\"code\">$3</span>. \n            If this does not indicate a bug, it can usually fixed with adding <span class=\"code\">@ignore($3)</span> \n            in class <span class=\"code\">$1</span>."
        }, {
          regex: /^Cannot find path (.+) required by library (.+)$/,
          description: "The <span class=\"code\">Manifest.json</span> file of the class \n            <span class=\"code\">$2</span> declares to provide a path \n            <span class=\"code\">$1</span>, which does not exist. \n            If no such path is needed, consider removing the entry in Manifest.json."
        }, {
          regex: /^(.*)Error validating data for ([^:]+): (.+)$/,
          description: "The file <span class=\"code\">$2</span> is not valid according to \n             <a target=\"_blank\" href=\"https://github.com/qooxdoo/qooxdoo-compiler/tree/master/source/resource/qx/tool/schema\">\n             the current JSON Schema</a> \n             (see documentation <a href=\"http://www.qooxdoo.org/docs/#/configuration/overview?id=configuration-files\" target=\"_blank\">\n             here</a>). Validation errors are: <span class=\"code\">$3</span>."
        }];
        var explainMessages = compilation_log.split("\n").reduce(function (result, line) {
          var explanation = explanations.find(function (expl) {
            return line.match(expl.regex);
          });

          if (explanation) {
            result.push(line.replace(explanation.regex, explanation.description));
          }

          return result;
        }, []);

        if (explainMessages.length) {
          html += "<h2>Explanation</h2>\n        <ul><li>".concat(explainMessages.join("</li><li>"), "</li></ul>");
        }

        html += "<h2>What you can do</h2>\n      <ul>\n        <li><a target=\"_blank\" href=\"".concat(newPackageIssueUrl, "\">Create an issue in the package repo</a>;</li>    \n        <li>If you think that a compiler bug is concerned, <a target=\"_blank\" href=\"").concat(newCompilerIssueUrl, "\">create an issue in the compiler repo</a>;</li>\n        <li>If the problem concerns a dependency of this package, try upgrading the dependent package to its most recent compatible version; if that doesn't help, contact the package author;</li>\n        <li>Or, if you are unsure, <a target=\"_blank\" href=\"https://gitter.im/qooxdoo/qooxdoo\">report the problems on Gitter</a>.</li>\n      </ul>");
        return html;
      },
      __P_3_19: function __P_3_19(children) {
        var appsHtml = children.map(function (childNode) {
          var hash = childNode.pwd().slice(1).concat([childNode.label]).join("~");
          return "<a href=\"javascript:void(top.location.hash='".concat(hash, "')\"><h2>").concat(childNode.label, "</h2></a>") + (childNode.description ? "<p>".concat(childNode.description, "</p>") : "");
        }).join("\n");
        return "<h1>Demo Applications</h1>\n      <p>This package contains the following executable applications:</p>\n      ".concat(appsHtml);
      },

      /**
       *
       * @param uri {String} The GitHub uri
       * @return {Promise<string|*|string>}
       * @private
       * @ignore(fetch)
       * @ignore(showdown)
       */
      __P_3_21: function () {
        var _P_3_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(uri) {
          var apiUrl, result, markdown, converter;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  apiUrl = "https://api.github.com/repos/".concat(uri, "/readme");
                  qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display("Loading, please wait... ");
                  _context3.prev = 2;
                  _context3.next = 5;
                  return fetch(apiUrl);

                case 5:
                  _context3.next = 7;
                  return _context3.sent.json();

                case 7:
                  result = _context3.sent;

                  if (!result.content) {
                    _context3.next = 12;
                    break;
                  }

                  markdown = atob(result.content);
                  converter = new showdown.Converter();
                  return _context3.abrupt("return", converter.makeHtml(markdown).replace(/(href|src)="([^h][^t][^t][^p])/g, function (match, attr, urlFragment) {
                    var urlPrefix = attr === "href" ? "https://github.com/".concat(uri, "/tree/master") : "https://raw.githubusercontent.com/".concat(uri, "/master");
                    return "target=\"_blank\" ".concat(attr, "=\"").concat(urlPrefix, "/").concat(urlFragment);
                  }));

                case 12:
                  return _context3.abrupt("return", "<p>The repository does not have a README file.");

                case 15:
                  _context3.prev = 15;
                  _context3.t0 = _context3["catch"](2);
                  return _context3.abrupt("return", "<p>Error retrieving ".concat(apiUrl, ": ").concat(_context3.t0.message, ".</p>"));

                case 18:
                  _context3.prev = 18;
                  qxl.packagebrowser.Popup.getInstance().hide();
                  return _context3.finish(18);

                case 21:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[2, 15, 18, 21]]);
        }));

        function __P_3_21(_x) {
          return _P_3_.apply(this, arguments);
        }

        return __P_3_21;
      }(),
      __P_3_22: function __P_3_22(modelNode, treeNode) {
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var uri, apiUrl, oneDay, today, html, result;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  uri = modelNode.uri.split("/").slice(0, 2).join("/");
                  apiUrl = "https://api.github.com/repos/".concat(uri, "/releases");
                  qxl.packagebrowser.Popup.getInstance().useIcon("waiting").display("Loading, please wait... ");
                  _context4.prev = 3;
                  oneDay = 86400000; // hours*minutes*seconds*milliseconds

                  today = new Date();
                  html = "";
                  _context4.next = 9;
                  return fetch(apiUrl);

                case 9:
                  _context4.next = 11;
                  return _context4.sent.json();

                case 11:
                  result = _context4.sent;

                  if (result.length) {
                    html = "<h1>Releases</h1>";
                    html += result.map(function (release) {
                      if (release.draft) {
                        return null;
                      }

                      var datePublished = new Date(release.published_at);
                      var daysSincePublished = Math.round(Math.abs((today.getTime() - datePublished.getTime()) / oneDay));

                      if (treeNode && daysSincePublished < 7) {
                        treeNode.setIcon("qx/icon/Tango/16/status/mail-unread.png");
                        treeNode.setLabel("New release available");
                      }

                      var tagHtml = release.tag_name !== release.name ? "Tag name: ".concat(release.tag_name, ". ") : "";
                      var titleSuffixes = [];

                      if (release.prerelease) {
                        titleSuffixes.push("prerelease");
                      }

                      if (release.tag_name === modelNode.latestCompatible) {
                        titleSuffixes.push("latest compatible release");
                      }

                      if (release.tag_name === modelNode.latestVersion) {
                        titleSuffixes.push("current version");
                      }

                      var div = document.createElement("div");
                      div.innerText = release.body;
                      var description = div.innerHTML;
                      return "\n              <h2><a href=\"".concat(release.html_url, "\" target=\"_blank\">").concat(release.name, " ").concat(titleSuffixes.length ? "(" + titleSuffixes.join(", ") + ")" : "", "</a></h2>\n              <p style=\"font-weight: bold\">").concat(tagHtml, "Published at ").concat(datePublished.toLocaleDateString(), ", ").concat(datePublished.toLocaleTimeString(), " (").concat(daysSincePublished, " days ago)</p>\n              <p>").concat(description, "</p>\n            ");
                    }).filter(function (release) {
                      return Boolean(release);
                    }).join("\n");
                  }

                  return _context4.abrupt("return", html);

                case 16:
                  _context4.prev = 16;
                  _context4.t0 = _context4["catch"](3);
                  return _context4.abrupt("return", "<p>Error retrieving ".concat(apiUrl, ": ").concat(_context4.t0.message, ".</p>"));

                case 19:
                  _context4.prev = 19;
                  qxl.packagebrowser.Popup.getInstance().hide();
                  return _context4.finish(19);

                case 22:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[3, 16, 19, 22]]);
        }))();
      },
      __P_3_17: function __P_3_17() {// var fwindow = this._iframe.getWindow();
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
      filter: function filter(term) {
        var searchRegExp = new RegExp("^.*" + term + ".*", "ig");

        var items = this._tree.getRoot().getItems(true, true);

        for (var i = 0; i < items.length; i++) {
          var folder = items[i];
          var parent = folder.getParent(); // check for the tags

          var tags = folder.getUserData("tags");
          var inTags = false;

          if (tags !== null) {
            for (var j = 0; j < tags.length; j++) {
              inTags = Boolean(tags[j].match(searchRegExp));

              if (inTags) {
                break;
              }
            }
          }

          if (inTags || folder.getLabel().search(searchRegExp) !== -1 || parent.getLabel().search(searchRegExp) !== -1) {
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
        } // special case for the empty string


        if (term === "") {
          var folders = this._tree.getRoot().getItems(false, true);

          var selection = this._tree.getSelection(); // close all folders


          for (var _i2 = 0; _i2 < folders.length; _i2++) {
            // don't close the current selected
            if (folders[_i2] === selection[0] || folders[_i2] === selection[0].getParent()) {
              continue;
            }

            folders[_i2].setOpen(false);
          }
        }
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

          if (!content) {
            /* eslint-disable-next-line no-alert */
            alert("Failed to load package data");
            return;
          }
          /* eslint-disable-next-line no-eval */


          var treeData = eval(content); // give the browser a chance to update its UI before doing more

          qx.event.Timer.once(function () {
            var _this4 = this;

            this.tests.handler = new qxl.packagebrowser.TreeDataHandler(treeData);
            this.leftReloadTree(); // read initial state

            var state = this._history.getState().replace(/\~/g, "/");

            if (state) {
              if (state.startsWith("filter/")) {
                qx.event.Timer.once(function () {
                  _this4._searchTextField.setValue(state.slice(7));
                }, null, 1000);
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
      playPrev: function playPrev(e) {
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
      playNext: function playNext(e) {
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
      disableMenuButtons: function disableMenuButtons() {
        var elements = this.__P_3_7;

        for (var i = 0; i < elements.length; i++) {
          elements[i].setEnabled(false);
        }
      },

      /**
       * Enables all menu buttons which functionality only works with a selected
       * demo.
       */
      enableMenuButtons: function enableMenuButtons() {
        var elements = this.__P_3_7;

        for (var i = 0; i < elements.length; i++) {
          elements[i].setEnabled(true);
        }
      },

      /**
       * Creates the application header.
       */
      _createHeader: function _createHeader() {
        var layout = new qx.ui.layout.HBox();
        var header = new qx.ui.container.Composite(layout);
        header.setAppearance("app-header");
        var title = new qx.ui.basic.Label("Package Browser");
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

      this._disposeObjects("mainsplit", "tree1", "left", "toolbar", "f1", "f2", "_history", "logappender", "_cmdRunSample", "_cmdPrevSample", "_cmdNextSample", "_cmdSampleInOwnWindow", "_navPart", "__P_3_8", "__P_3_9", "__P_3_14", "__P_3_2", "_infosplit", "_searchTextField", "_tree", "_iframe", "_demoView", "__P_3_7", "__logSync", "_leftComposite", "_urlWindow", "_nextButton", "_prevButton", "__P_3_0", "__P_3_12");
    }
  });
  qxl.packagebrowser.PackageBrowser.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=PackageBrowser.js.map?dt=1626055231038