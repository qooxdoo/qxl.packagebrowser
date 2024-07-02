(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "construct": true,
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
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qx.Theme": {
        "construct": true
      },
      "qx.ui.form.SelectBox": {
        "construct": true
      },
      "qx.theme.manager.Meta": {
        "construct": true
      },
      "qx.ui.form.ListItem": {
        "construct": true
      },
      "qx.ui.core.Spacer": {
        "construct": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.revision": {
          "construct": true
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Jonathan Weiß (jonathan_rass)
       * Tristan Koch (tristankoch)
  
  ************************************************************************ */
  /**
   * The Application's header
   */

  qx.Class.define("zx.ui.theme.avocado.demo.view.Header", {
    extend: qx.ui.container.Composite,
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @ignore(qxc)
     */
    construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.HBox());
      this.setAppearance("app-header");
      this.getLayout().setAlignY("middle");
      var title = new qx.ui.basic.Label("Widget Browser");
      var version = new qx.ui.basic.Label("qooxdoo " + (qx.core.Environment.get("qx.revision") || null));
      version.setFont("default");
      version.setAppearance("app-header-label");
      var themes = qx.Theme.getAll();
      // //set default theme
      // for (var theme in themes) {
      //   if (theme == "zx.ui.theme.avocado.Avocado") {
      //     theme = qx.Theme.getByName(theme);
      //     qx.theme.manager.Meta.getInstance().setTheme(theme);
      //     break;
      //   }
      // }

      // Build select-box
      var hashTheme = window.location.hash.substr(1);
      var select = new qx.ui.form.SelectBox("Theme");
      var currentThemeItem;
      var currentTheme = qx.theme.manager.Meta.getInstance().getTheme();
      for (var key in themes) {
        let theme = themes[key];
        if (theme.type === "meta") {
          var item = new qx.ui.form.ListItem(theme.title);
          item.setUserData("value", theme.name);
          select.add(item);
          if (theme === currentTheme) {
            select.setSelection([item]);
          }
          if (!currentThemeItem && hashTheme && theme.name.match(hashTheme)) {
            currentThemeItem = item;
          }
        }
      }
      select.setFont("default");
      select.setTextColor(null);
      select.setWidth(250);
      select.addListener("changeSelection", function (evt) {
        var selected = evt.getData()[0].getUserData("value");
        var theme = qx.Theme.getByName(selected);
        if (theme) {
          qx.theme.manager.Meta.getInstance().setTheme(theme);
        }
        this.close();
      });

      // Set current theme
      if (currentThemeItem) {
        select.setSelection([currentThemeItem]);
      }

      // Finally assemble header
      this.add(title);
      this.add(new qx.ui.core.Spacer(), {
        flex: 1
      });
      this.add(select);
      this.add(new qx.ui.core.Spacer(), {
        width: "2%"
      });
      this.add(version);
    }
  });
  zx.ui.theme.avocado.demo.view.Header.$$dbClassInfo = $$dbClassInfo;
})();
