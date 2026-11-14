(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.theme.indigo.Appearance": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  qx.Theme.define("wax.demo.theme.Appearance", {
    extend: qx.theme.indigo.Appearance,
    appearances: {
      "header-atom": {
        alias: "atom",
        style: function style(states) {
          return {
            iconPosition: "top",
            center: true,
            padding: [10, 6, 20, 6],
            font: "headeratom"
          };
        }
      },
      "header-atom/icon": {
        include: "image",
        style: function style(states) {
          return {
            width: 120,
            height: 94
          };
        }
      },
      "groupbox/legend/icon": {
        style: function style() {
          return {
            width: 32,
            height: 32
          };
        }
      },
      "groupbox/legend": {
        alias: "atom",
        style: function style(states) {
          return {
            paddingRight: 35,
            margin: 4
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        ville.MENUBUTTON
      ---------------------------------------------------------------------------
      */
      "mainmenubutton-frame": {
        alias: "atom",
        style: function style(states) {
          var decorator = "mainmenubutton-box";
          var padding = [12, 6, 12, 19];
          //var textcolor = "#606060";
          var textcolor = "black";
          var opacity = .85;
          if (!states.disabled) {
            if (states.hovered && !states.pressed && !states.checked) {
              decorator = "mainmenubutton-box-hovered";
              padding = [12, 6, 12, 14];
              textcolor = "black";
              opacity = 1;
            } /*else if (states.hovered && (states.pressed || states.checked)) {
              decorator = "mainmenubutton-box-pressed-hovered";
              }*/else if (states.pressed || states.checked) {
              decorator = "mainmenubutton-box-pressed";
              padding = [12, 6, 12, 14];
              textcolor = "black";
              opacity = 1;
            }
          }
          return {
            decorator: decorator,
            padding: padding,
            cursor: states.disabled ? undefined : "pointer",
            minWidth: 5,
            minHeight: 5,
            textColor: textcolor,
            font: "mainmenubutton",
            opacity: opacity
          };
        }
      },
      "mainmenubutton-frame/label": {
        alias: "atom/label",
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined
          };
        }
      },
      "mainmenubutton": {
        alias: "mainmenubutton-frame",
        include: "mainmenubutton-frame",
        style: function style(states) {
          return {
            center: false,
            minWidth: 220,
            gap: 14
          };
        }
      },
      "mainmenubutton/icon": {
        style: function style() {
          return {
            scale: true,
            width: 32,
            height: 32
          };
        }
      },
      "mainmenuindicator": {
        style: function style() {
          return {
            backgroundColor: "gray",
            textColor: "white",
            height: 24,
            padding: [2, 6, 2, 6],
            decorator: "mainmenuindicator",
            font: "mainmenuindicator"
          };
        }
      },
      "submenubutton": {
        style: function style(states) {
          return {
            cursor: states.disabled ? undefined : "pointer",
            textColor: states.hovered ? "black" : "#505050",
            font: "mainmenubutton",
            decorator: "mainmenubutton-box-pressed"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        ville.MENUBUTTON - "hym" = hybrid moble (i.e. phonegap or cordova)
      ---------------------------------------------------------------------------
      */

      "mainmenubutton-frame-hym": {
        alias: "atom",
        style: function style(states) {
          var decorator = "mainmenubutton-box";
          var padding = [4, 2, 4, 2];
          var textcolor = "black";
          var opacity = .55;
          if (!states.disabled) {
            if (states.hovered && !states.pressed && !states.checked) {
              //decorator = "mainmenubutton-box-hovered";
              //padding = [12,6,12,14];
              textcolor = "black";
              opacity = 1;
            } /*else if (states.hovered && (states.pressed || states.checked)) {
              decorator = "mainmenubutton-box-pressed-hovered";
              }*/else if (states.pressed || states.checked) {
              //decorator = "mainmenubutton-box-pressed";
              //padding = [12,6,12,14];
              textcolor = "blue";
              opacity = 1;
            }
          }
          return {
            decorator: decorator,
            padding: padding,
            cursor: states.disabled ? undefined : "pointer",
            minWidth: 5,
            minHeight: 5,
            textColor: textcolor,
            font: "mainmenubutton-hym",
            opacity: opacity
          };
        }
      },
      "mainmenubutton-frame-hym/label": {
        alias: "atom/label",
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined
          };
        }
      },
      "mainmenubutton-hym": {
        alias: "mainmenubutton-frame-hym",
        include: "mainmenubutton-frame-hym",
        style: function style(states) {
          return {
            center: true,
            gap: 2
          };
        }
      },
      "hym-page-button": {
        style: function style(states) {
          return {
            center: false,
            gap: 12,
            padding: [8, 20, 8, 20],
            decorator: "page-button-right"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        WINDOW
      ---------------------------------------------------------------------------
      */

      "wax-window": {
        alias: "window",
        include: "window",
        style: function style(states) {
          return {
            showMaximize: false,
            showMinimize: false
          };
        }
      },
      "wax-window/title": {
        alias: "window/title",
        style: function style(states) {
          return {
            textColor: "black",
            font: "control-header"
          };
        }
      },
      "wax-window/captionbar": {
        include: "window/captionbar",
        style: function style(states) {
          return {
            decorator: "window-captionbar-default"
          };
        }
      },
      "wax-window/close-button": {
        alias: "button",
        style: function style(states) {
          return {
            marginLeft: 2,
            icon: states.hovered ? "wax/demo/close-red-24px.svg" : "wax/demo/close-24px.svg",
            padding: [1, 2],
            cursor: states.disabled ? undefined : "pointer"
          };
        }
      },
      "wax-window/close-button/icon": {
        alias: "image",
        style: function style(states) {
          return {
            width: 24,
            height: 24
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
      PROGRESSBAR
      ---------------------------------------------------------------------------
      */

      "progressbar": {
        style: function style(states) {
          return {
            decorator: "progressbar",
            padding: 0,
            backgroundColor: "progressbar-base",
            width: 200,
            height: 20
          };
        }
      },
      "progressbar-trans": {
        include: "progressbar",
        style: function style(states) {
          return {
            decorator: "progressbar-trans",
            backgroundColor: "transparent"
          };
        }
      },
      "progressbar/progress": {
        style: function style(states) {
          return {
            backgroundColor: "progressbar-gray"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        ville.UPLOAD
      ---------------------------------------------------------------------------
      */

      "upload": {
        style: function style(states) {
          return {
            decorator: "upload-area"
          };
        }
      },
      "upload/progressbar": "progressbar-trans",
      "upload/progressbar/progress": {
        style: function style(states) {
          return {
            backgroundColor: "progressbar-gray"
          };
        }
      },
      "upload/message/icon": {
        style: function style(states) {
          return {
            scale: true,
            width: 88,
            height: 88,
            opacity: .35
          };
        }
      }
    }
  });
  wax.demo.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
