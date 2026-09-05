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
      "qx.ui.container.Scroll": {},
      "zx.ui.theme.avocado.demo.view.TabView": {},
      "zx.ui.theme.avocado.demo.view.Header": {}
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
   * @asset(qx/icon/*)
   * @usefont(MaterialIcons)
   */
  qx.Class.define("zx.ui.theme.avocado.demo.Application", {
    extend: qx.application.Standalone,
    construct() {
      qx.application.Standalone.constructor.call(this);
    },
    members: {
      __P_2_0: null,
      __P_2_1: null,
      __P_2_2: null,
      main() {
        zx.ui.theme.avocado.demo.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        var doc = this.getRoot();
        var dockLayout = new qx.ui.layout.Dock();
        var dockLayoutComposite = new qx.ui.container.Composite(dockLayout);
        doc.add(dockLayoutComposite, {
          edge: 0
        });
        this.__P_2_0 = this._createHeader();
        dockLayoutComposite.add(this.__P_2_0, {
          edge: "north"
        });
        var scroll = this.__P_2_2 = new qx.ui.container.Scroll();
        dockLayoutComposite.add(scroll);
        this.__P_2_1 = this._createTabView();
        this.__P_2_1.set({
          minWidth: 700
        });
        scroll.add(this.__P_2_1);
      },
      _createTabView() {
        return new zx.ui.theme.avocado.demo.view.TabView();
      },
      _createHeader() {
        return new zx.ui.theme.avocado.demo.view.Header();
      },
      getScroll() {
        return this.__P_2_2;
      }
    }
  });
  zx.ui.theme.avocado.demo.Application.$$dbClassInfo = $$dbClassInfo;
})();
