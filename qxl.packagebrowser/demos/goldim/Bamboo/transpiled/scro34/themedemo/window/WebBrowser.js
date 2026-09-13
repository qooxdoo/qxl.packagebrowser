(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.VBox": {},
      "scro34.themedemo.IconFactory": {},
      "qx.ui.embed.ThemedIframe": {},
      "qx.ui.toolbar.ToolBar": {},
      "scro34.themedemo.toolbar.Button": {},
      "qx.ui.form.TextField": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     https://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * ???
       * Dmitrii Zolotov
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.window.WebBrowser", {
    extend: scro34.themedemo.window.Window,
    construct: function construct() {
      scro34.themedemo.window.Window.constructor.call(this);
      this.setCaption("Web Browser");
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      iframe: null,
      txtUrl: "",
      _createControls: function _createControls() {
        var layout = new qx.ui.layout.VBox(0);
        this.set({
          layout: layout,
          width: 900,
          height: 700,
          contentPadding: 0,
          icon: scro34.themedemo.IconFactory.getInstance().getIcon("WEB_BROWSER_SMALL")
        });
        var toolbar = this._createToolbar();
        this.iframe = new qx.ui.embed.ThemedIframe().set({
          scrollbarY: "on",
          scrollbarX: "on"
        });
        this.add(toolbar);
        this.add(this.iframe, {
          flex: 1
        });
        this.addListenerOnce("appear", this._onAppear, this);
      },
      _createToolbar: function _createToolbar() {
        var _this = this;
        var icons = scro34.themedemo.IconFactory.getInstance();
        var toolbar = new qx.ui.toolbar.ToolBar();
        var btnBack = new scro34.themedemo.toolbar.Button(null, icons.getIcon("WEB_BROWSER_PREVIOUS"), icons.getIcon("WEB_BROWSER_PREVIOUS_HOVER"));
        btnBack.addListener("execute", function (e) {
          // this.iframe.getWindow().history.back();
        });
        toolbar.add(btnBack);
        var btnForward = new scro34.themedemo.toolbar.Button(null, icons.getIcon("WEB_BROWSER_NEXT"), icons.getIcon("WEB_BROWSER_NEXT_HOVER"));
        btnForward.addListener("execute", function (e) {
          // this.iframe.getWindow().history.forward();
        });
        toolbar.add(btnForward); // IE does not allow access to an iframes history object
        // Firefox applies history changes to the main window
        // Opera throws a script error when trying to go forward or back
        btnForward.setToolTipText("This feature is currently not supported.");
        btnBack.setToolTipText("This feature is currently not supported.");
        this.txtUrl = new qx.ui.form.TextField().set({
          marginLeft: 1,
          value: "https://qooxdoo.org",
          padding: 2,
          alignY: "middle"
        });
        this.txtUrl.addListener("keypress", function (e) {
          if (e.getKeyIdentifier() == "Enter") {
            _this.surfTo(_this.txtUrl.getValue());
          }
        });
        toolbar.add(this.txtUrl, {
          flex: 1
        });
        var btnGo = new scro34.themedemo.toolbar.Button(null, icons.getIcon("WEB_BROWSER_GO"), icons.getIcon("WEB_BROWSER_GO_HOVER"));
        btnGo.addListener("execute", function (e) {
          _this.surfTo(_this.txtUrl.getValue());
        });
        toolbar.add(btnGo);
        return toolbar;
      },
      surfTo: function surfTo(url) {
        var hasHttp = url.indexOf("http://") === 0;
        var hasHttps = url.indexOf("https://") === 0;
        if (!hasHttp && !hasHttps) {
          url = "https://" + url;
        }
        this.txtUrl.setValue(url);
        this.iframe.setSource(url);
      },
      _onAppear: function _onAppear() {
        this.surfTo(this.txtUrl.getValue());
      }
    }
  });
  scro34.themedemo.window.WebBrowser.$$dbClassInfo = $$dbClassInfo;
})();
