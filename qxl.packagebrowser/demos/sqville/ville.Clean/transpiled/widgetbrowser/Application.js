(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Dock": {},
      "qx.ui.container.Composite": {},
      "widgetbrowser.view.Header": {},
      "qx.ui.container.Scroll": {},
      "widgetbrowser.view.TabView": {}
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
       * Tristan Koch (tristankoch)
  
  ************************************************************************ */

  /*
   * Main Application.
   */
  qx.Class.define("widgetbrowser.Application", {
    extend: qx.application.Standalone,
    construct: function construct() {
      qx.application.Standalone.constructor.call(this);
    },
    members: {
      __P_2_0: null,
      __P_2_1: null,
      __P_2_2: null,
      main: function main() {
        widgetbrowser.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant. editing to see a change

        var doc = this.getRoot();
        var dockLayout = new qx.ui.layout.Dock();
        var dockLayoutComposite = new qx.ui.container.Composite(dockLayout);
        doc.add(dockLayoutComposite, {
          edge: 0
        });
        this.__P_2_0 = new widgetbrowser.view.Header();
        dockLayoutComposite.add(this.__P_2_0, {
          edge: "north"
        });
        var scroll = this.__P_2_2 = new qx.ui.container.Scroll();
        dockLayoutComposite.add(scroll);
        this.__P_2_1 = this._createTabView();
        this.__P_2_1.set({
          minWidth: 700,
          padding: 15
        });
        scroll.add(this.__P_2_1);
      },
      _createTabView: function _createTabView() {
        this.__P_2_1 = new widgetbrowser.view.TabView();
        return this.__P_2_1;
      },
      getScroll: function getScroll() {
        return this.__P_2_2;
      }
    }
  });
  widgetbrowser.Application.$$dbClassInfo = $$dbClassInfo;
})();
