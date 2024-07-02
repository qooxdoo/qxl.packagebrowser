(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.bom.Font": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qxl.tutorial.Application": {
        "construct": true
      },
      "qx.ui.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * @ignore(tutorial)
   */
  qx.Class.define("qxl.tutorial.view.SelectionWindow", {
    extend: qx.ui.window.Window,
    construct: function construct(desktopTutorials, mobileTutorials) {
      qx.ui.window.Window.constructor.call(this, "Select Tutorial");

      // configure window
      this.setModal(true);
      this.setShowMaximize(false);
      this.setShowMinimize(false);
      this.setMovable(false);
      this.setResizable(false);
      this.setLayout(new qx.ui.layout.Grid(10, 5));
      this.getLayout().setRowAlign(0, "center", "top");
      this.__P_598_0 = new qx.bom.Font(12, ["Lucida Grande", "DejaVu Sans", "Verdana", "sans-serif"]);
      this.__P_598_0.set({
        color: "font",
        lineHeight: 1.3
      });

      // build the headlines
      var desktop = new qx.ui.basic.Label("Desktop");
      desktop.setFont("bold");
      this.add(desktop, {
        row: 0,
        column: 0
      });
      var mobileSupported = qxl.tutorial.Application.mobileSupported();
      var title = "Mobile" + (mobileSupported ? "" : " (unsupported browser)");
      var mobile = new qx.ui.basic.Label(title);
      mobile.setFont("bold");
      this.add(mobile, {
        row: 0,
        column: 1
      });
      this.__P_598_1(desktopTutorials, mobileTutorials);
      this.center();
    },
    events: {
      changeTutorial: "qx.event.type.Data"
    },
    members: {
      __P_598_0: null,
      __P_598_2: function __P_598_2(name, desc) {
        var button = new qx.ui.form.Button(name + "<br><span style='font-size: 11px; color: #777'>" + (desc || "&nbsp;") + "</span>");
        button.set({
          rich: true,
          width: 200,
          font: this.__P_598_0,
          center: false
        });
        return button;
      },
      __P_598_1: function __P_598_1(desktopTutorials, mobileTutorials) {
        var i = 0;
        for (var key in desktopTutorials) {
          var name = key.replace(/_/g, " ");
          var desc = desktopTutorials[key];
          var button = this.__P_598_2(name, desc);
          this.add(button, {
            row: i + 1,
            column: 0
          });
          button.addListener("execute", function (name) {
            this.fireDataEvent("changeTutorial", {
              name: name,
              type: "desktop"
            });
            if (qxl.tutorial.Application.allowFade()) {
              this.fadeOut(300).on("end", function () {
                this.close();
              }, this);
            } else {
              this.close();
            }
          }.bind(this, key));
          i++;
        }
        var supportsMobile = qxl.tutorial.Application.mobileSupported();
        i = 0;
        for (key in mobileTutorials) {
          var _name = key.replace(/_/g, " ");
          var _desc = mobileTutorials[key];
          var _button = this.__P_598_2(_name, _desc);
          this.add(_button, {
            row: i + 1,
            column: 1
          });
          if (supportsMobile) {
            _button.addListener("execute", function (name) {
              this.fireDataEvent("changeTutorial", {
                name: name,
                type: "mobile"
              });
              if (qxl.tutorial.Application.allowFade()) {
                this.fadeOut(300).on("end", function () {
                  this.close();
                }, this);
              } else {
                this.close();
              }
            }.bind(this, key));
          } else {
            _button.setEnabled(false);
            _button.setToolTipText("Not supported on your browser.");
          }
          i++;
        }
      }
    }
  });
  qxl.tutorial.view.SelectionWindow.$$dbClassInfo = $$dbClassInfo;
})();
