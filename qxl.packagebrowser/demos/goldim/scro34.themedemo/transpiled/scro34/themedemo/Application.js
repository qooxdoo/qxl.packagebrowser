(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "scro34.themedemo.IconFactory": {},
      "scro34.themedemo.Desktop": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Canvas": {},
      "scro34.themedemo.window.About": {},
      "scro34.themedemo.Separator": {},
      "qx.bom.Font": {},
      "qx.ui.basic.Label": {},
      "qx.ui.layout.VBox": {},
      "qx.theme.manager.Meta": {},
      "qx.lang.String": {},
      "scro34.themedemo.BottomPanel": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2024 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * @usefont(JosefinSlabRegular)
   */
  qx.Class.define("scro34.themedemo.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main(options) {
        scro34.themedemo.Application.superclass.prototype.main.call(this);
        /***************************************************************************/

        var customIcons = this._getCustomIcons();
        if (customIcons) {
          scro34.themedemo.IconFactory.getInstance().setCustomIcons(customIcons);
        }
        var desktop = scro34.themedemo.Desktop.getInstance();
        var title = this.__P_13_0(options);
        desktop.add(this.createTitle(title), {
          top: 10,
          left: 10
        });
        var mainContainer = this.mainContainer = new qx.ui.container.Composite();
        mainContainer.setLayout(new qx.ui.layout.Canvas());
        mainContainer.add(desktop, {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        });
        mainContainer.add(this.createDock(), {
          left: 5,
          bottom: 0,
          right: 5
        });
        this.getRoot().add(mainContainer, {
          edge: 0
        });
        var about = this.about = new scro34.themedemo.window.About(options ? options.about_url : "");
        about.open();
        desktop.add(about);
      },
      _getCustomIcons: function _getCustomIcons() {
        return null;
      },
      createTitle: function createTitle(title) {
        var _this = this;
        var separator = new scro34.themedemo.Separator(80);
        var font = new qx.bom.Font(36, ["JosefinSlab Regular", "serif"]);
        var themeLabel = new qx.ui.basic.Label(title).set({
          font: font,
          textColor: "text-label",
          cursor: "pointer"
        });
        themeLabel.addListener("mouseover", function () {
          return themeLabel.setTextColor("text-selected");
        });
        themeLabel.addListener("mouseout", function () {
          return themeLabel.setTextColor("text-label");
        });
        themeLabel.addListener("click", function () {
          return _this.about.open();
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(0).set({
          alignX: "center"
        }));
        container.add(themeLabel);
        container.add(separator);
        container.add(new qx.ui.basic.Label("Theme Demo"));
        return container;
      },
      __P_13_0: function __P_13_0(options) {
        var title;
        if (!options || !options.title) {
          var currentTheme = qx.theme.manager.Meta.getInstance().getTheme().name;
          var themePart = currentTheme.substring(0, currentTheme.indexOf("."));
          if (themePart === "scro34") {
            themePart = currentTheme.substring(currentTheme.lastIndexOf(".") + 1, currentTheme.length);
          }
          title = qx.lang.String.firstUp(themePart);
        } else if (options && options.title) {
          title = options.title;
        }
        return title;
      },
      createDock: function createDock() {
        var height = this.getRoot()._computeSizeHint().height;
        return new scro34.themedemo.BottomPanel(height);
      }
    }
  });
  scro34.themedemo.Application.$$dbClassInfo = $$dbClassInfo;
})();
