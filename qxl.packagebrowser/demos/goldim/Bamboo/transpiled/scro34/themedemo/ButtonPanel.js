(function () {
  var $$dbClassInfo = {
    "dependsOn": {
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
      "scro34.themedemo.AudioPlayerButton": {
        "construct": true
      },
      "scro34.themedemo.PanelButton": {
        "construct": true
      },
      "scro34.themedemo.IconFactory": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2024 Dmitrii Zolotov
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  qx.Class.define("scro34.themedemo.ButtonPanel", {
    extend: qx.ui.container.Composite,
    construct: function construct() {
      var _this = this;
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.HBox(10).set({
        alignX: "center"
      }));
      this.setPaddingBottom(5);
      this.addListener("appear", function () {
        return _this.fadeIn(200);
      });
      this.getButtonData().forEach(function (options) {
        var button;
        if (options.name === "AudioPlayer") {
          button = new scro34.themedemo.AudioPlayerButton(options);
        } else {
          button = new scro34.themedemo.PanelButton(options);
        }
        button.addListener("windowClose", function () {
          _this.checkShow();
        });
        _this.add(button);
      });
    },
    members: {
      hasActiveButtons: function hasActiveButtons() {
        var buttonDockButtons = this.getChildren();
        return buttonDockButtons.some(function (button) {
          return button.getValue();
        });
      },
      checkShow: function checkShow() {
        if (!this.hasActiveButtons()) {
          this.setVisibility("visible");
        }
      },
      pressButton: function pressButton(name) {
        var buttons = this.getChildren();
        var found = buttons.find(function (button) {
          return button.getName() == name;
        });
        found === null || found === void 0 || found.setValue(true);
      },
      getButtonData: function getButtonData() {
        var icons = scro34.themedemo.IconFactory.getInstance();
        return [{
          icon: icons.getIcon("WIDGET_BROWSER"),
          toolTip: "Widget Browser",
          name: "WidgetBrowser",
          center: true
        }, {
          icon: icons.getIcon("CALCULATOR"),
          toolTip: "Calculator",
          name: "Calculator",
          position: {
            top: 20,
            right: 50
          }
        }, {
          icon: icons.getIcon("COLOR_SELECTOR"),
          toolTip: "Color Selector",
          name: "ColorSelector",
          position: {
            bottom: 30,
            right: 10
          }
        }, {
          icon: icons.getIcon("TABLE"),
          toolTip: "Table",
          name: "Table",
          position: {
            left: 50,
            bottom: 20
          }
        }, {
          icon: icons.getIcon("WEB_BROWSER"),
          toolTip: "Web Browser",
          name: "WebBrowser",
          center: true
        }, {
          icon: icons.getIcon("MEDIA_PLAYER"),
          toolTip: "Audio Player",
          name: "AudioPlayer",
          position: {
            top: 110,
            left: 20
          }
        }];
      }
    }
  });
  scro34.themedemo.ButtonPanel.$$dbClassInfo = $$dbClassInfo;
})();
