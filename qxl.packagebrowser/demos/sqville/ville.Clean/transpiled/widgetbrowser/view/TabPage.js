(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "widgetbrowser.pages.Tree": {},
      "widgetbrowser.pages.List": {},
      "widgetbrowser.pages.Table": {},
      "widgetbrowser.pages.Form": {},
      "widgetbrowser.pages.ToolBar": {},
      "widgetbrowser.pages.Window": {},
      "widgetbrowser.pages.Tab": {},
      "widgetbrowser.pages.Control": {},
      "widgetbrowser.pages.Embed": {},
      "widgetbrowser.pages.EmbedFrame": {},
      "widgetbrowser.pages.Basic": {},
      "widgetbrowser.pages.Misc": {},
      "qx.Class": {
        "usage": "dynamic",
        "construct": true,
        "require": true
      },
      "qx.ui.tabview.Page": {
        "construct": true,
        "require": true
      },
      "widgetbrowser.MControls": {
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.ui.basic.Image": {
        "construct": true
      }
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

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(widgetbrowser/loading66.gif)
   * @use(widgetbrowser.pages.Tree)
   * @use(widgetbrowser.pages.List)
   * @use(widgetbrowser.pages.Table)
   * @use(widgetbrowser.pages.Form)
   * @use(widgetbrowser.pages.ToolBar)
   * @use(widgetbrowser.pages.Window)
   * @use(widgetbrowser.pages.Tab)
   * @use(widgetbrowser.pages.Control)
   * @use(widgetbrowser.pages.Embed)
   * @use(widgetbrowser.pages.EmbedFrame)
   * @use(widgetbrowser.pages.Basic)
   * @use(widgetbrowser.pages.Misc)
   * @use(widgetbrowser.pages.Extras)
   */

  qx.Class.define("widgetbrowser.view.TabPage", {
    extend: qx.ui.tabview.Page,
    include: widgetbrowser.MControls,
    construct: function construct(label, classname, controls) {
      qx.ui.tabview.Page.constructor.call(this);
      this.setLabel(label);
      this.setLayout(new qx.ui.layout.Canvas());

      // Load content of tab on "appear"
      this.addListenerOnce("appear", function () {
        var clazz = qx.Class.getByName(classname);
        var pageContent = new clazz();
        // Add to page
        this.add(pageContent, {
          top: 40,
          edge: 0
        });
        // Init controls for widgets of page
        this.initControls(pageContent.getWidgets(), controls);
        // Exclude loading indicator
        loading.setVisibility("excluded");
      }, this);

      // Show centered loading indicator
      var loading = new qx.ui.basic.Image("widgetbrowser/loading66.gif");
      loading.setMarginTop(-33);
      loading.setMarginLeft(-33);
      this.add(loading, {
        left: "50%",
        top: "50%"
      });
    },
    members: {}
  });
  widgetbrowser.view.TabPage.$$dbClassInfo = $$dbClassInfo;
})();
