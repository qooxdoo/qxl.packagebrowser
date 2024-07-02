(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.widgetbrowser.pages.AbstractPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.tabview.TabView": {},
      "qx.lang.Function": {},
      "qx.ui.tabview.Page": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tristan Koch (tristankoch)
  
  ************************************************************************ */

  /**
   * Demonstrates qx.ui.tabview(...):
   *
   * TabView, Page
   *
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-terminal.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-notes.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/utilities-calculator.png)
   *
   */

  qx.Class.define("qxl.widgetbrowser.pages.Tab", {
    extend: qxl.widgetbrowser.pages.AbstractPage,
    construct: function construct() {
      qxl.widgetbrowser.pages.AbstractPage.constructor.call(this);
      this.__P_230_0 = new qx.ui.container.Composite(new qx.ui.layout.Grid(10, 20));
      this.add(this.__P_230_0);
      this.initWidgets();
    },
    members: {
      __P_230_0: null,
      initWidgets: function initWidgets() {
        var widgets = this._widgets;
        var tabTop = this.__P_230_1();
        tabTop.setBarPosition("top");
        this.__P_230_0.add(tabTop, {
          row: 0,
          column: 0
        });
        widgets.push(tabTop);
        var tabBottom = this.__P_230_1();
        tabBottom.setBarPosition("bottom");
        this.__P_230_0.add(tabBottom, {
          row: 0,
          column: 1
        });
        widgets.push(tabBottom);
        var tabLeft = this.__P_230_1();
        tabLeft.setBarPosition("left");
        this.__P_230_0.add(tabLeft, {
          row: 1,
          column: 0
        });
        widgets.push(tabLeft);
        var tabRight = this.__P_230_1();
        tabRight.setBarPosition("right");
        this.__P_230_0.add(tabRight, {
          row: 1,
          column: 1
        });
        widgets.push(tabRight);
      },
      toggleOverflow: function toggleOverflow(tabView, enable) {
        if (!enable) {
          var children = tabView.getChildren();
          for (var i = children.length - 1; i >= 0; i--) {
            tabView.remove(children[i]);
          }
        } else {
          this.addTabPages(tabView);
        }
        this.addTabPages(tabView);
      },
      __P_230_1: function __P_230_1() {
        var tabView = new qx.ui.tabview.TabView();
        tabView.toggleOverflow = qx.lang.Function.bind(this.toggleOverflow, this);
        tabView.setWidth(400);
        tabView.setHeight(200);
        this.addTabPages(tabView);
        return tabView;
      },
      addTabPages: function addTabPages(tabView) {
        var page1 = new qx.ui.tabview.Page("Layout", "icon/16/apps/utilities-terminal.png");
        page1.setLayout(new qx.ui.layout.VBox());
        page1.add(new qx.ui.basic.Label("Layout-Settings…"));
        tabView.add(page1);
        var page2 = new qx.ui.tabview.Page("Notes", "icon/16/apps/utilities-notes.png");
        page2.setLayout(new qx.ui.layout.VBox());
        page2.add(new qx.ui.basic.Label("Notes…"));
        tabView.add(page2);
        var page3 = new qx.ui.tabview.Page("Calculator", "icon/16/apps/utilities-calculator.png");
        page3.setLayout(new qx.ui.layout.VBox());
        page3.add(new qx.ui.basic.Label("Calculator…"));
        tabView.add(page3);
      }
    }
  });
  qxl.widgetbrowser.pages.Tab.$$dbClassInfo = $$dbClassInfo;
})();
