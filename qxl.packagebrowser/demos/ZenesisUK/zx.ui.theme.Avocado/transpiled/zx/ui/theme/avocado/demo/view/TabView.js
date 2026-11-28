(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.tabview.TabView": {
        "construct": true,
        "require": true
      },
      "zx.ui.theme.avocado.demo.view.TabPage": {},
      "qx.bom.Cookie": {},
      "qx.type.Array": {}
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

  qx.Class.define("zx.ui.theme.avocado.demo.view.TabView", {
    extend: qx.ui.tabview.TabView,
    construct() {
      qx.ui.tabview.TabView.constructor.call(this);
      this.init();
      this.addListener("changeSelection", this.__P_6_0, this);
      this.__P_6_1();
    },
    members: {
      init() {
        var controls;
        var classname;

        // Form
        classname = "zx.ui.theme.avocado.demo.pages.Form";
        controls = {
          disabled: true,
          hovered: true,
          focused: true,
          invalid: true
        };
        var form = new zx.ui.theme.avocado.demo.view.TabPage("Form", classname, controls);
        this.add(form);

        // Tree
        classname = "zx.ui.theme.avocado.demo.pages.Tree";
        controls = {
          disabled: true
        };
        var tree = new zx.ui.theme.avocado.demo.view.TabPage("Tree", classname, controls);
        this.add(tree);

        // List
        classname = "zx.ui.theme.avocado.demo.pages.List";
        controls = {
          disabled: true
        };
        var list = new zx.ui.theme.avocado.demo.view.TabPage("List", classname, controls);
        this.add(list);

        // Table
        classname = "zx.ui.theme.avocado.demo.pages.Table";
        controls = {
          disabled: true
        };
        var table = new zx.ui.theme.avocado.demo.view.TabPage("Table", classname, controls);
        this.add(table);

        // Menu
        classname = "zx.ui.theme.avocado.demo.pages.ToolBar";
        controls = {
          disabled: true,
          hovered: true,
          selected: true,
          hidesome: true
        };
        var menu = new zx.ui.theme.avocado.demo.view.TabPage("Toolbar/Menu", classname, controls);
        this.add(menu);
        this.setSelection([menu]);

        // Window
        classname = "zx.ui.theme.avocado.demo.pages.Window";
        controls = {
          disabled: true
        };
        var win = new zx.ui.theme.avocado.demo.view.TabPage("Window", classname, controls);
        this.add(win);

        // Tab
        classname = "zx.ui.theme.avocado.demo.pages.Tab";
        controls = {
          disabled: true,
          overflow: true
        };
        var tab = new zx.ui.theme.avocado.demo.view.TabPage("Tab", classname, controls);
        this.add(tab);

        // Control
        classname = "zx.ui.theme.avocado.demo.pages.Control";
        controls = {
          disabled: true
        };
        var control = new zx.ui.theme.avocado.demo.view.TabPage("Control", classname, controls);
        this.add(control);

        // Embed
        classname = "zx.ui.theme.avocado.demo.pages.Embed";
        controls = {};
        var embed = new zx.ui.theme.avocado.demo.view.TabPage("Embed", classname, controls);
        this.add(embed);

        // EmbedFrame
        classname = "zx.ui.theme.avocado.demo.pages.EmbedFrame";
        controls = {};
        var embedFrame = new zx.ui.theme.avocado.demo.view.TabPage("EmbedFrame", classname, controls);
        this.add(embedFrame);

        // Basic
        classname = "zx.ui.theme.avocado.demo.pages.Basic";
        controls = {
          disabled: true
        };
        var basic = new zx.ui.theme.avocado.demo.view.TabPage("Basic", classname, controls);
        this.add(basic);

        // Misc
        classname = "zx.ui.theme.avocado.demo.pages.Misc";
        controls = {
          disabled: true
        };
        var misc = new zx.ui.theme.avocado.demo.view.TabPage("Misc", classname, controls);
        this.add(misc);
      },
      __P_6_0(e) {
        qx.bom.Cookie.set("currentTab", e.getData()[0].getLabel());
      },
      __P_6_1() {
        var cookie = qx.bom.Cookie.get("currentTab") || qx.bom.Cookie.set("currentTab", "basic");
        var currentTab = new qx.type.Array().append(this.getSelectables()).filter(function (tab) {
          return tab.getLabel() == cookie;
        })[0];
        if (currentTab) {
          this.setSelection([currentTab]);
        }
      }
    }
  });
  zx.ui.theme.avocado.demo.view.TabView.$$dbClassInfo = $$dbClassInfo;
})();
