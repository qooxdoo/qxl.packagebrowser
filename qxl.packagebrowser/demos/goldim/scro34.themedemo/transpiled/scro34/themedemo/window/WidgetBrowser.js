(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "scro34.themedemo.window.Window": {
        "require": true
      },
      "qx.ui.layout.VBox": {},
      "scro34.themedemo.IconFactory": {},
      "qxl.widgetbrowser.view.TabView": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2021 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * @usefont(MaterialIcons)
   */
  qx.Class.define("scro34.themedemo.window.WidgetBrowser", {
    extend: scro34.themedemo.window.Window,
    members: {
      _tabView: null,
      _createControls: function _createControls() {
        var _this = this;
        this.set({
          layout: new qx.ui.layout.VBox(),
          contentPadding: [10, 0, 0, 0],
          caption: "WidgetBrowser",
          icon: scro34.themedemo.IconFactory.getInstance().getIcon("WIDGET_BROWSER_SMALL")
        });
        this._tabView = new qxl.widgetbrowser.view.TabView();
        var tabsToRemove = ["Table", "Basic", "Control"];
        this._tabView.getChildren().forEach(function (page) {
          if (tabsToRemove.includes(page.getLabel())) {
            _this._tabView.remove(page);
          }
        });
        this._tabView.set({
          minWidth: 880,
          minHeight: 610,
          padding: 5
        });
        this.add(this._tabView, {
          flex: 1
        });
      }
    }
  });
  scro34.themedemo.window.WidgetBrowser.$$dbClassInfo = $$dbClassInfo;
})();
