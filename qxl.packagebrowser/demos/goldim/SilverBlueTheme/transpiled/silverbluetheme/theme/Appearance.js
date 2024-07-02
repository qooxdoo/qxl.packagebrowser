(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2010-2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  /**
   * The SilverBlueTheme appearance theme.
   *
   * @asset(silverbluetheme/*)
   * 
   * @asset(qx/icon/Oxygen/16/mimetypes/office-document.png)
   * @asset(qx/icon/Oxygen/16/places/folder.png)
   * @asset(qx/icon/Oxygen/16/places/folder-open.png)
   * @asset(qx/icon/Oxygen/22/mimetypes/office-document.png)
   * @asset(qx/icon/Oxygen/22/places/folder.png)
   * @asset(qx/icon/Oxygen/22/places/folder-open.png)
   * @asset(qx/icon/Oxygen/32/mimetypes/office-document.png)
   * @asset(qx/icon/Oxygen/32/places/folder.png)
   * @asset(qx/icon/Oxygen/32/places/folder-open.png)
   * 
   */

  qx.Theme.define("silverbluetheme.theme.Appearance", {
    aliases: {
      decoration: "silverbluetheme/decoration"
    },
    appearances: {
      /*
      ---------------------------------------------------------------------------
        APPLICATION
      ---------------------------------------------------------------------------
      */

      "app-header": {
        style: function style(states) {
          return {
            font: "bold",
            textColor: "text-app-header",
            padding: [8, 12],
            decorator: "app-header"
          };
        }
      },
      "app-header-label": "label",
      "app-splitpane": {
        alias: "splitpane",
        style: function style(states) {
          return {
            padding: 0
          };
        }
      },
      "app-logo": {
        include: "app-header",
        style: function style(states) {
          return {
            font: "headline",
            decorator: "app-logo"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        BUTTON
      ---------------------------------------------------------------------------
      */

      "button-frame": {
        alias: "atom",
        style: function style(states) {
          var decorator, textColor;
          if (states.checked && states.focused && !states.inner) {
            decorator = states.disabled ? "button-checked-disabled" : "button-checked";
            textColor = undefined;
          } else if (states.pressed) {
            decorator = states.disabled ? "button-checked-disabled" : "button-checked";
            textColor = "text-hovered";
          } else if (states.checked) {
            decorator = states.disabled ? "button-checked-disabled" : states.invalid ? "button-checked-invalid" : "button-checked";
            textColor = undefined;
          } else if (states.invalid) {
            decorator = "button-invalid";
            textColor = undefined;
          } else if (states.hovered) {
            decorator = "button-hovered";
            textColor = "text-hovered";
          } else if (states.preselected && states.focused && !states.inner) {
            decorator = "button-hovered";
            textColor = "text-hovered";
          } else if (states.preselected) {
            decorator = "button-hovered";
            textColor = "text-hovered";
          } else {
            decorator = "button";
            textColor = "text-button";
          }
          return {
            decorator: decorator,
            textColor: textColor
          };
        }
      },
      "button-frame/image": {
        style: function style(states) {
          return {
            opacity: !states.replacement && states.disabled ? 0.5 : 1
          };
        }
      },
      "button": {
        alias: "button-frame",
        include: "button-frame",
        style: function style(states) {
          return {
            padding: states.pressed || states.checked || states.checked && states.disabled ? [2, 7, 3, 5] : [1, 7, 4, 5],
            cursor: states.disabled ? "default" : "pointer",
            center: true
          };
        }
      },
      "toggle-button": "button",
      "hover-button": {
        alias: "atom",
        include: "atom",
        style: function style(states) {
          return {
            decorator: states.hovered ? "selected" : undefined,
            textColor: states.hovered ? "text-highlight" : undefined
          };
        }
      },
      "menubutton": {
        include: "button",
        alias: "button",
        style: function style(states) {
          return {
            icon: "decoration/arrows/down-invert.png",
            iconPosition: "right"
          };
        }
      },
      "spinner-button": {
        alias: "atom",
        style: function style(states) {
          return {
            padding: states.pressed || states.checked || states.checked && states.disabled ? [1, 5, 0, 5] : [0, 5, 1, 5],
            decorator: states.pressed || states.checked ? "spinner-button-checked" : states.hovered && !states.disabled ? "spinner-button-hovered" : "spinner-button",
            textColor: "text-button"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SPLITBUTTON
      ---------------------------------------------------------------------------
      */
      "splitbutton": {},
      "splitbutton/button": {
        alias: "atom",
        style: function style(states) {
          return {
            padding: states.pressed || states.checked || states.checked && states.disabled ? [4, 3, 2, 3] : [3],
            decorator: states.pressed || states.checked ? "splitbutton-checked" : states.hovered ? "splitbutton-hovered" : "splitbutton",
            textColor: "text-button",
            cursor: states.hovered && !states.disabled ? "pointer" : "default",
            center: true
          };
        }
      },
      "splitbutton/arrow": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: "decoration/arrows/down-small.png",
            decorator: states.pressed || states.checked ? "combobox-button-checked" : states.hovered ? "combobox-button-hovered" : "combobox-button",
            padding: 4
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        CHECK BOX
      ---------------------------------------------------------------------------
      */

      "checkbox": {
        alias: "atom",
        style: function style(states) {
          var icon;

          // Checked
          if (states.checked) {
            if (states.invalid) {
              icon = "checkbox-checked-invalid";
            } else if (states.focused) {
              icon = states.hovered ? "checkbox-checked-hovered-focused" : "checkbox-checked-focused";
            } else if (states.hovered) {
              icon = "checkbox-checked-hovered";
            } else {
              icon = "checkbox-checked";
            }

            // Undetermined
          } else if (states.undetermined) {
            if (states.invalid) {
              icon = "checkbox-undetermined-invalid";
            } else if (states.focused) {
              icon = "checkbox-undetermined-focused";
            } else if (states.hovered) {
              icon = "checkbox-undetermined-hovered";
            } else {
              icon = "checkbox-undetermined";
            }

            // Focused & Hovered (when enabled)
          } else if (!states.disabled) {
            if (states.focused) {
              icon = states.hovered ? "checkbox-hovered-focused" : "checkbox-focused";
            } else if (states.hovered) {
              icon = "checkbox-hovered";
            }
          }

          // Unchecked
          if (!icon) {
            icon = states.invalid ? "checkbox-invalid" : "checkbox";
          }
          return {
            icon: "decoration/form/" + icon + ".png",
            gap: 6,
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "checkbox/icon": "image",
      /*
      ---------------------------------------------------------------------------
        COLOR POPUP
      ---------------------------------------------------------------------------
      */

      "colorpopup": {
        alias: "popup",
        include: "popup",
        style: function style(states) {
          return {
            padding: 5,
            backgroundColor: "background-application"
          };
        }
      },
      "colorpopup/field": {
        style: function style(states) {
          return {
            decorator: "main",
            margin: 2,
            width: 14,
            height: 14,
            backgroundColor: "background-light"
          };
        }
      },
      "colorpopup/selector-button": "button",
      "colorpopup/auto-button": "button",
      "colorpopup/preview-pane": "groupbox",
      "colorpopup/current-preview": {
        style: function style(state) {
          return {
            height: 20,
            padding: 4,
            marginLeft: 4,
            decorator: "main",
            allowGrowX: true
          };
        }
      },
      "colorpopup/selected-preview": {
        style: function style(state) {
          return {
            height: 20,
            padding: 4,
            marginRight: 4,
            decorator: "main",
            allowGrowX: true
          };
        }
      },
      "colorpopup/colorselector-okbutton": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: "icon/16/actions/dialog-ok.png"
          };
        }
      },
      "colorpopup/colorselector-cancelbutton": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: "icon/16/actions/dialog-cancel.png"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        COLOR SELECTOR
      ---------------------------------------------------------------------------
      */

      "colorselector": "widget",
      "colorselector/control-bar": "widget",
      "colorselector/control-pane": "widget",
      "colorselector/visual-pane": "groupbox",
      "colorselector/preset-grid": "widget",
      "colorselector/colorbucket": {
        style: function style(states) {
          return {
            decorator: "main",
            width: 16,
            height: 16
          };
        }
      },
      "colorselector/preset-field-set": "groupbox",
      "colorselector/input-field-set": {
        include: "groupbox",
        alias: "groupbox",
        style: function style() {
          return {
            paddingTop: 20
          };
        }
      },
      "colorselector/preview-field-set": {
        include: "groupbox",
        alias: "groupbox",
        style: function style() {
          return {
            paddingTop: 20
          };
        }
      },
      "colorselector/hex-field-composite": "widget",
      "colorselector/hex-field": "textfield",
      "colorselector/rgb-spinner-composite": "widget",
      "colorselector/rgb-spinner-red": "spinner",
      "colorselector/rgb-spinner-green": "spinner",
      "colorselector/rgb-spinner-blue": "spinner",
      "colorselector/hsb-spinner-composite": "widget",
      "colorselector/hsb-spinner-hue": "spinner",
      "colorselector/hsb-spinner-saturation": "spinner",
      "colorselector/hsb-spinner-brightness": "spinner",
      "colorselector/preview-content-old": {
        style: function style(states) {
          return {
            decorator: "main",
            width: 50,
            height: 10
          };
        }
      },
      "colorselector/preview-content-new": {
        style: function style(states) {
          return {
            decorator: "main",
            backgroundColor: "background-light",
            width: 50,
            height: 10
          };
        }
      },
      "colorselector/hue-saturation-field": {
        style: function style(states) {
          return {
            decorator: "main",
            margin: 5
          };
        }
      },
      "colorselector/brightness-field": {
        style: function style(states) {
          return {
            decorator: "main",
            margin: [5, 7]
          };
        }
      },
      "colorselector/hue-saturation-pane": "widget",
      "colorselector/hue-saturation-handle": {
        include: "widget",
        style: function style(states) {
          return {
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      "colorselector/brightness-pane": "widget",
      "colorselector/brightness-handle": {
        include: "widget",
        style: function style(states) {
          return {
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        COMBOBOX
      ---------------------------------------------------------------------------
      */

      "combobox": {
        style: function style(states) {
          return {
            decorator: undefined
          };
        }
      },
      "combobox/button": {
        style: function style(states) {
          return {
            icon: "decoration/arrows/combobox.png",
            padding: states.pressed || states.checked ? [1, 8, 0, 8] : [0, 8, 1, 8],
            decorator: states.pressed || states.checked ? "combobox-button-checked" : states.hovered && !states.disabled ? "combobox-button-hovered" : "combobox-button",
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "combobox/list": {
        alias: "list"
      },
      "combobox/popup": "popup",
      "combobox/textfield": {
        include: "textfield",
        style: function style(states) {
          return {
            decorator: states.disabled ? "combobox-disabled" : states.invalid ? "combobox-invalid" : states.focused ? "combobox-focused" : "combobox",
            padding: 2
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        CORE
      ---------------------------------------------------------------------------
      */

      "atom": {},
      "atom/label": "label",
      "atom/icon": "image",
      "dragdrop-cursor": {
        style: function style(states) {
          var icon = "nodrop";
          if (states.copy) {
            icon = "copy";
          } else if (states.move) {
            icon = "move";
          } else if (states.alias) {
            icon = "alias";
          }
          return {
            source: "decoration/cursors/" + icon + ".gif",
            position: "right-top",
            offset: [2, 16, 2, 6]
          };
        }
      },
      "image": {
        style: function style(states) {
          return {
            opacity: !states.replacement && states.disabled ? 0.3 : 1
          };
        }
      },
      "label": {
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined
          };
        }
      },
      "move-frame": {
        style: function style(states) {
          return {
            decorator: "main"
          };
        }
      },
      "popup": {
        style: function style(states) {
          return {
            decorator: "list",
            textColor: "text-label"
          };
        }
      },
      "resize-frame": "move-frame",
      "root": {
        style: function style(states) {
          return {
            decorator: "app-background",
            textColor: "text-label",
            font: "default"
          };
        }
      },
      "widget": {},
      /*
      ---------------------------------------------------------------------------
        DATE CHOOSER
      ---------------------------------------------------------------------------
      */

      "datechooser": {
        style: function style(states) {
          var decorator;
          var focused = !!states.focused;
          var invalid = !!states.invalid;
          var disabled = !!states.disabled;
          if (focused && invalid && !disabled) {
            decorator = "input-focused-invalid";
          } else if (focused && !invalid && !disabled) {
            decorator = "input-focused";
          } else if (disabled) {
            decorator = "input-disabled";
          } else if (!focused && invalid && !disabled) {
            decorator = "border-invalid";
          } else {
            decorator = "group";
          }
          return {
            padding: 2,
            decorator: decorator,
            backgroundColor: "background-datechooser",
            width: 220
          };
        }
      },
      "datechooser/navigation-bar": {},
      "datechooser/button": {
        include: "button-frame",
        alias: "button-frame",
        style: function style(states) {
          var result = {
            padding: [1, 4, 3, 0],
            show: "icon",
            cursor: "pointer"
          };
          if (states.lastYear) {
            result.icon = "decoration/arrows/rewind.png";
            result.marginRight = 1;
          } else if (states.lastMonth) {
            result.icon = "decoration/arrows/left.png";
          } else if (states.nextYear) {
            result.icon = "decoration/arrows/forward.png";
            result.marginLeft = 1;
          } else if (states.nextMonth) {
            result.icon = "decoration/arrows/right.png";
          }
          return result;
        }
      },
      "datechooser/last-year-button-tooltip": "tooltip",
      "datechooser/last-month-button-tooltip": "tooltip",
      "datechooser/next-year-button-tooltip": "tooltip",
      "datechooser/next-month-button-tooltip": "tooltip",
      "datechooser/last-year-button": "datechooser/button",
      "datechooser/last-month-button": "datechooser/button",
      "datechooser/next-year-button": "datechooser/button",
      "datechooser/next-month-button": "datechooser/button",
      "datechooser/button/icon": {},
      "datechooser/month-year-label": {
        style: function style(states) {
          return {
            font: "bold",
            textAlign: "center",
            textColor: states.disabled ? "text-disabled" : undefined,
            padding: [1, 0, 1, 0],
            decorator: "toolbar-blue"
          };
        }
      },
      "datechooser/date-pane": {
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined,
            marginTop: 2
          };
        }
      },
      "datechooser/day": {
        style: function style(states) {
          return {
            textAlign: "center",
            decorator: states.disabled ? undefined : states.selected ? "selected" : undefined,
            textColor: states.disabled ? "text-disabled" : states.selected ? "text-selected" : states.otherMonth ? "text-light" : undefined,
            font: states.today ? "bold" : undefined,
            padding: [2, 4]
          };
        }
      },
      "datechooser/week": {
        style: function style(states) {
          return {
            textAlign: "center",
            padding: [2, 4],
            backgroundColor: "background-medium"
          };
        }
      },
      "datechooser/weekday": {
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : states.weekend ? "text-light" : undefined,
            textAlign: "center",
            paddingTop: 2,
            backgroundColor: "background-medium"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        DATE FIELD
      ---------------------------------------------------------------------------
      */

      "datefield": "combobox",
      "datefield/button": {
        alias: "combobox/button",
        include: "combobox/button",
        style: function style(states) {
          return {
            icon: "silverbluetheme/icon/16/office-calendar.png",
            padding: [3, 4, 4, 4]
          };
        }
      },
      "datefield/textfield": "combobox/textfield",
      "datefield/list": {
        alias: "datechooser",
        include: "datechooser",
        style: function style(states) {
          return {
            decorator: undefined
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        FORM RENDERER
      ---------------------------------------------------------------------------
      */

      "form-renderer-label": {
        include: "label",
        style: function style() {
          return {
            paddingTop: 4
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        GROUP BOX
      ---------------------------------------------------------------------------
      */

      "groupbox": {
        style: function style(states) {
          return {
            legendPosition: "top"
          };
        }
      },
      "groupbox/frame": {
        style: function style(states) {
          return {
            padding: 6,
            decorator: "group"
          };
        }
      },
      "groupbox/legend": {
        alias: "atom",
        style: function style(states) {
          return {
            padding: [1, 0, 2, 4],
            textColor: states.invalid ? "text-invalid" : "text-title",
            font: "bold"
          };
        }
      },
      "check-groupbox": "groupbox",
      "check-groupbox/legend": {
        alias: "checkbox",
        include: "checkbox",
        style: function style(states) {
          return {
            padding: [1, 0, 2, 4],
            textColor: states.invalid ? "text-invalid" : "text-title",
            font: "bold"
          };
        }
      },
      "radio-groupbox": "groupbox",
      "radio-groupbox/legend": {
        alias: "radiobutton",
        include: "radiobutton",
        style: function style(states) {
          return {
            padding: [1, 0, 2, 4],
            textColor: "text-title",
            font: "bold"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        HTMLAREA
      ---------------------------------------------------------------------------
      */

      "htmlarea": {
        include: "widget",
        style: function style(states) {
          return {
            backgroundColor: "background-htmlarea",
            opacity: 0.5
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        IFRAME
      ---------------------------------------------------------------------------
      */

      "iframe": {
        style: function style(states) {
          return {
            decorator: "iframe"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        LIST
      ---------------------------------------------------------------------------
      */

      "list": {
        alias: "scrollarea",
        style: function style(states) {
          var decorator;
          var focused = !!states.focused;
          var invalid = !!states.invalid;
          var disabled = !!states.disabled;
          if (focused && invalid && !disabled) {
            decorator = "input-focused-invalid";
          } else if (focused && !invalid && !disabled) {
            decorator = "input-focused";
          } else if (disabled) {
            decorator = "input-disabled";
          } else if (!focused && invalid && !disabled) {
            decorator = "input-invalid";
          } else {
            decorator = "input";
          }
          return {
            decorator: decorator,
            textColor: "text-active"
          };
        }
      },
      "list/pane": "widget",
      "listitem": {
        style: function style(states) {
          var decorator;
          if (states.dragover) {
            decorator = states.selected ? "selected-dragover" : "dragover";
          } else {
            decorator = states.selected ? "menu-button-selected" : undefined;
          }
          return {
            padding: states.dragover ? [5, 5, 3, 5] : 3,
            textColor: states.selected ? "text-selected" : undefined,
            decorator: decorator,
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        MENU
      ---------------------------------------------------------------------------
      */

      "menu": {
        style: function style(states) {
          var result = {
            decorator: "menu",
            backgroundColor: "background-menu",
            spacingX: 6,
            spacingY: 1,
            iconColumnWidth: 16,
            arrowColumnWidth: 4,
            placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align"
          };
          if (states.submenu) {
            result.position = "right-top";
            result.offset = [-2, -3];
          }
          return result;
        }
      },
      "menu/slidebar": "menu-slidebar",
      "menu-slidebar": "widget",
      "menu-slidebar-button": {
        style: function style(states) {
          return {
            decorator: states.hovered ? "selected" : undefined,
            padding: 7,
            center: true
          };
        }
      },
      "menu-slidebar/button-backward": {
        include: "menu-slidebar-button",
        style: function style(states) {
          return {
            icon: "decoration/arrows/up.png"
          };
        }
      },
      "menu-slidebar/button-forward": {
        include: "menu-slidebar-button",
        style: function style(states) {
          return {
            icon: "decoration/arrows/down.png"
          };
        }
      },
      "menu-separator": {
        style: function style(states) {
          return {
            height: 0,
            decorator: "menu-separator",
            margin: [4, 2]
          };
        }
      },
      "menu-button": {
        alias: "atom",
        style: function style(states) {
          return {
            textColor: states.selected ? "text-selected" : "text-button",
            decorator: states.selected ? "menu-button-selected" : undefined,
            padding: [3, 5]
          };
        }
      },
      "menu-button/icon": {
        include: "image",
        style: function style(states) {
          return {
            alignY: "middle"
          };
        }
      },
      "menu-button/label": {
        include: "label",
        style: function style(states) {
          return {
            alignY: "middle",
            padding: 1
          };
        }
      },
      "menu-button/shortcut": {
        include: "label",
        style: function style(states) {
          return {
            alignY: "middle",
            marginLeft: 14,
            padding: 1
          };
        }
      },
      "menu-button/arrow": {
        include: "image",
        style: function style(states) {
          return {
            source: states.selected ? "decoration/arrows/right-invert.png" : "decoration/arrows/right.png",
            alignY: "middle"
          };
        }
      },
      "menu-checkbox": {
        alias: "menu-button",
        include: "menu-button",
        style: function style(states) {
          return {
            icon: states.checked ? states.selected ? "decoration/menu/checkbox-invert.gif" : "decoration/menu/checkbox.gif" : undefined
          };
        }
      },
      "menu-radiobutton": {
        alias: "menu-button",
        include: "menu-button",
        style: function style(states) {
          return {
            icon: states.checked ? states.selected ? "decoration/menu/radiobutton-invert.gif" : "decoration/menu/radiobutton.gif" : undefined
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        MENU BAR
      ---------------------------------------------------------------------------
      */

      "menubar": {
        style: function style(states) {
          return {
            decorator: "toolbar-silver"
          };
        }
      },
      "menubar-button": {
        alias: "atom",
        style: function style(states) {
          return {
            decorator: (states.pressed || states.hovered) && !states.disabled ? "selected" : undefined,
            textColor: states.pressed || states.hovered ? "text-selected" : undefined,
            padding: [3, 8]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        PROGRESSIVE
      ---------------------------------------------------------------------------
      */

      "progressive-table-header": {
        alias: "widget",
        style: function style(states) {
          return {
            decorator: "progressive-table-header"
          };
        }
      },
      "progressive-table-header-cell": {
        alias: "atom",
        style: function style(states) {
          return {
            minWidth: 40,
            minHeight: 25,
            paddingLeft: 6,
            decorator: "progressive-table-header-cell"
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
            height: 16,
            margin: 1
          };
        }
      },
      "progressbar/progress": {
        style: function style(states) {
          return {
            decorator: states.disabled ? "progressbar-progress-disabled" : "progressbar-progress"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        RADIO BUTTON
      ---------------------------------------------------------------------------
      */

      "radiobutton": {
        alias: "atom",
        style: function style(states) {
          var icon;
          if (states.checked && states.invalid) {
            icon = "radiobutton-checked-invalid";
          } else if (states.checked && states.focused) {
            icon = states.hovered ? "radiobutton-checked-hovered-focused" : "radiobutton-checked-focused";
          } else if (states.checked) {
            icon = states.hovered ? "radiobutton-checked-hovered" : "radiobutton-checked";
          } else if (states.hovered && !states.disabled) {
            icon = states.focused ? "radiobutton-hovered-focused" : "radiobutton-hovered";
          } else if (states.focused) {
            icon = "radiobutton-focused";
          } else if (states.pressed) {
            icon = "radiobutton-checked";
          } else {
            icon = states.invalid ? "radiobutton-invalid" : "radiobutton";
          }
          return {
            icon: "decoration/form/" + icon + ".png",
            gap: 6,
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "radiobutton/icon": "image",
      /*
      ---------------------------------------------------------------------------
        RESIZER
      ---------------------------------------------------------------------------
      */

      "resizer": {
        style: function style(states) {
          return {
            decorator: "pane"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SCROLL AREA
      ---------------------------------------------------------------------------
      */

      "scrollarea": {
        style: function style(states) {
          return {
            // since the scroll container disregards the min size of the scrollbars
            // we have to set the min size of the scroll area to ensure that the
            // scrollbars always have a usable size.
            minWidth: 50,
            minHeight: 50
          };
        }
      },
      "scrollarea/corner": {
        style: function style(states) {
          return {
            backgroundColor: "background-application"
          };
        }
      },
      "scrollarea/pane": "widget",
      "scrollarea/scrollbar-x": "scrollbar",
      "scrollarea/scrollbar-y": "scrollbar",
      /*
      ---------------------------------------------------------------------------
        SCROLL BAR
      ---------------------------------------------------------------------------
      */

      "scrollbar": {
        style: function style(states) {
          if (states["native"]) {
            return {};
          }
          return {
            width: states.horizontal ? undefined : 16,
            height: states.horizontal ? 16 : undefined,
            decorator: states.horizontal ? "scrollbar-horizontal" : "scrollbar-vertical",
            padding: 1
          };
        }
      },
      "scrollbar/slider": {
        alias: "slider",
        style: function style(states) {
          return {
            padding: states.horizontal ? [0, 1, 0, 1] : [1, 0, 1, 0]
          };
        }
      },
      "scrollbar/slider/knob": {
        include: "button-frame",
        style: function style(states) {
          var decorator = states.horizontal ? "scrollbar-slider-horizontal" : "scrollbar-slider-vertical";
          if (states.hovered) {
            decorator += "-hovered";
          }
          return {
            decorator: decorator,
            minHeight: states.horizontal ? undefined : 9,
            minWidth: states.horizontal ? 9 : undefined,
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "scrollbar/button": {
        style: function style(states) {
          var decorator = "scrollbar-button";
          var icon = "decoration/scrollbar/scrollbar-";
          if (states.left) {
            icon += "left.png";
            decorator += "-horizontal";
          } else if (states.right) {
            icon += "right.png";
            decorator += "-horizontal";
          } else if (states.up) {
            icon += "up.png";
            decorator += "-vertical";
          } else {
            icon += "down.png";
            decorator += "-vertical";
          }
          if (states.hovered) {
            decorator += "-hovered";
          }
          if (states.left || states.right) {
            return {
              padding: [0, 0, 0, states.left ? 5 : 5],
              icon: icon,
              width: 14,
              height: 14,
              margin: 0,
              decorator: decorator,
              cursor: states.hovered && !states.disabled ? "pointer" : "default"
            };
          } else {
            return {
              padding: [0, 0, 0, 4],
              icon: icon,
              width: 14,
              height: 14,
              margin: 0,
              decorator: decorator,
              cursor: states.hovered && !states.disabled ? "pointer" : "default"
            };
          }
        }
      },
      "scrollbar/button-begin": "scrollbar/button",
      "scrollbar/button-end": "scrollbar/button",
      /*
      ---------------------------------------------------------------------------
        SELECTBOX
      ---------------------------------------------------------------------------
      */

      "selectbox": {
        alias: "button-frame",
        include: "button-frame",
        style: function style(states) {
          return {
            padding: [1, 6, 4, 6],
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "selectbox/atom": "atom",
      "selectbox/popup": "popup",
      "selectbox/list": {
        alias: "list"
      },
      "selectbox/arrow": {
        include: "image",
        style: function style(states) {
          return {
            source: "decoration/arrows/down.png",
            paddingLeft: 5
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SLIDER
      ---------------------------------------------------------------------------
      */

      "slider": {
        style: function style(states) {
          return {
            decorator: states.horizontal ? "slider-horizontal" : "slider-vertical",
            maxHeight: states.horizontal ? 16 : undefined,
            maxWidth: states.horizontal ? undefined : 16,
            minHeight: states.horizontal ? 14 : undefined,
            minWidth: states.horizontal ? undefined : 14,
            padding: states.horizontal ? [0, 1, 0, 1] : [1, 0, 1, 0]
          };
        }
      },
      "slider/knob": {
        style: function style(states) {
          var decorator = "slider-knob";
          if (states.pressed) {
            decorator += "-pressed";
          } else if (states.hovered) {
            decorator += "-hovered";
          }
          return {
            decorator: decorator,
            maxHeight: 14,
            maxWidth: 14,
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SLIDE BAR
      ---------------------------------------------------------------------------
      */

      "slidebar": {},
      "slidebar/scrollpane": {},
      "slidebar/content": {},
      "slidebar/button-forward": {
        alias: "button-frame",
        include: "button-frame",
        style: function style(states) {
          return {
            padding: [5, 5, 5, 1],
            center: true,
            icon: states.vertical ? "decoration/arrows/down.png" : "decoration/arrows/right.png",
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "slidebar/button-backward": {
        alias: "button-frame",
        include: "button-frame",
        style: function style(states) {
          return {
            padding: [5, 5, 5, 1],
            center: true,
            icon: states.vertical ? "decoration/arrows/up.png" : "decoration/arrows/left.png",
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SPINNER
      ---------------------------------------------------------------------------
      */

      "spinner": {
        style: function style(states) {
          var decorator;
          var focused = !!states.focused;
          var invalid = !!states.invalid;
          var disabled = !!states.disabled;
          if (focused && invalid && !disabled) {
            decorator = "input-focused-invalid";
          } else if (focused && !invalid && !disabled) {
            decorator = "input-focused";
          } else if (disabled) {
            decorator = "input-disabled";
          } else if (!focused && invalid) {
            decorator = "input-invalid";
          } else {
            decorator = "input";
          }
          return {
            decorator: decorator
          };
        }
      },
      "spinner/textfield": {
        style: function style(states) {
          return {
            marginRight: 2,
            padding: [1, 4, 1],
            textColor: states.disabled ? "text-disabled" : "text-active"
          };
        }
      },
      "spinner/upbutton": {
        alias: "spinner-button",
        include: "spinner-button",
        style: function style(states) {
          var icon = "decoration/arrows/up-small.png";
          return {
            icon: icon,
            padding: [1, 4],
            width: 13,
            margin: 0,
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "spinner/downbutton": {
        alias: "spinner-button",
        include: "spinner-button",
        style: function style(states) {
          var icon = "decoration/arrows/down-small.png";
          return {
            icon: icon,
            padding: [1, 4],
            width: 13,
            margin: 0,
            cursor: states.hovered && !states.disabled ? "pointer" : "default"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SPLITPANE
      ---------------------------------------------------------------------------
      */

      "splitpane": {
        style: function style(states) {
          return {
            decorator: "splitpane"
          };
        }
      },
      "splitpane/splitter": {
        style: function style(states) {
          return {
            decorator: undefined
          };
        }
      },
      "splitpane/splitter/knob": {
        style: function style(states) {
          return {
            source: states.horizontal ? "decoration/button/knob-horizontal.png" : "decoration/button/knob-vertical.png",
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      "splitpane/slider": {
        style: function style(states) {
          return {
            decorator: states.horizontal ? "splitter-horizontal" : "splitter-vertical"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TABLE
      ---------------------------------------------------------------------------
      */

      "table": {
        alias: "widget",
        style: function style(states) {
          return {
            decorator: "table"
          };
        }
      },
      "table-header": {},
      "table/statusbar": {
        style: function style(states) {
          return {
            decorator: "table-statusbar",
            padding: [0, 2]
          };
        }
      },
      "table/column-button": {
        alias: "button-frame",
        style: function style(states) {
          return {
            decorator: "table-column-button",
            padding: 3,
            icon: "decoration/table/select-column-order.png",
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      "table-column-reset-button": {
        include: "menu-button",
        alias: "menu-button",
        style: function style() {
          return {
            icon: "icon/16/actions/view-refresh.png"
          };
        }
      },
      "table-scroller": "widget",
      "table-scroller/scrollbar-x": "scrollbar",
      "table-scroller/scrollbar-y": "scrollbar",
      "table-scroller/header": {
        style: function style(states) {
          return {
            decorator: "table-scroller-header"
          };
        }
      },
      "table-scroller/pane": {
        style: function style(states) {
          return {
            backgroundColor: "table-pane"
          };
        }
      },
      "table-scroller/focus-indicator": {
        style: function style(states) {
          return {
            decorator: "table-scroller-focus-indicator"
          };
        }
      },
      "table-scroller/resize-line": {
        style: function style(states) {
          return {
            backgroundColor: "border-separator",
            width: 2
          };
        }
      },
      "table-header-cell": {
        alias: "atom",
        style: function style(states) {
          return {
            minWidth: 13,
            minHeight: 25,
            padding: states.hovered ? [2, 4, 2, 4] : [2, 4],
            decorator: states.hovered ? "table-header-cell-hovered" : "table-header-cell",
            sortIcon: states.sorted ? states.sortedAscending ? "decoration/table/ascending.png" : "decoration/table/descending.png" : undefined
          };
        }
      },
      "table-header-cell/label": {
        style: function style(states) {
          return {
            minWidth: 0,
            alignY: "middle",
            paddingRight: 5,
            marginBottom: 3,
            marginTop: 0
          };
        }
      },
      "table-header-cell/sort-icon": {
        style: function style(states) {
          return {
            alignY: "middle",
            alignX: "right"
          };
        }
      },
      "table-header-cell/icon": {
        style: function style(states) {
          return {
            minWidth: 0,
            alignY: "middle",
            paddingRight: 5
          };
        }
      },
      "table-editor-textfield": {
        include: "textfield",
        style: function style(states) {
          return {
            decorator: undefined,
            padding: [2, 2],
            backgroundColor: "background-light"
          };
        }
      },
      "table-editor-selectbox": {
        include: "selectbox",
        alias: "selectbox",
        style: function style(states) {
          return {
            padding: [0, 2],
            backgroundColor: "background-light"
          };
        }
      },
      "table-editor-combobox": {
        include: "combobox",
        alias: "combobox",
        style: function style(states) {
          return {
            decorator: undefined,
            backgroundColor: "background-light"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TAB VIEW
      ---------------------------------------------------------------------------
      */

      "tabview": {
        style: function style(states) {
          return {
            contentPadding: 8
          };
        }
      },
      "tabview/bar": {
        alias: "slidebar",
        style: function style(states) {
          var result = {
            marginBottom: states.barTop ? -1 : 0,
            marginTop: states.barBottom ? -4 : 0,
            marginLeft: states.barRight ? -3 : 0,
            marginRight: states.barLeft ? -1 : 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0
          };
          if (states.barTop || states.barBottom) {
            result.paddingLeft = 5;
            result.paddingRight = 7;
          } else {
            result.paddingTop = 5;
            result.paddingBottom = 7;
          }
          return result;
        }
      },
      "tabview/bar/button": {
        include: "button-frame",
        alias: "button-frame",
        style: function style(states) {
          var margin;
          switch (true) {
            case states.barTop:
              margin = [4, 0, 1, 0];
              break;
            case states.barBottom:
              margin = [3, 0, 4, 0];
              break;
            case states.barLeft:
              margin = [0, 0, 0, 5];
              break;
            case states.barRight:
              margin = [0, 4, 0, 2];
              break;
          }
          return {
            margin: margin,
            padding: 4,
            center: true,
            cursor: states.disabled || states.checked ? "default" : "pointer"
          };
        }
      },
      "tabview/bar/button-forward": {
        include: "tabview/bar/button",
        alias: "tabview/bar/button",
        style: function style(states) {
          return {
            icon: states.vertical ? "decoration/arrows/down.png" : "decoration/arrows/right.png"
          };
        }
      },
      "tabview/bar/button-backward": {
        include: "tabview/bar/button",
        alias: "tabview/bar/button",
        style: function style(states) {
          return {
            icon: states.vertical ? "decoration/arrows/up.png" : "decoration/arrows/left.png"
          };
        }
      },
      "tabview/bar/scrollpane": {},
      "tabview/pane": {
        style: function style(states) {
          return {
            decorator: "tabview-pane",
            minHeight: 100,
            marginBottom: states.barBottom ? -1 : 0,
            marginTop: states.barTop ? -1 : 0,
            marginLeft: states.barLeft ? -1 : 0,
            marginRight: states.barRight ? -1 : 0
          };
        }
      },
      "tabview-page": "widget",
      "tabview-page/button": {
        alias: "atom",
        style: function style(states) {
          var decorator,
            padding = 0;
          var marginTop = 0,
            marginBottom = 0,
            marginLeft = 0,
            marginRight = 0;
          if (states.barTop) {
            decorator = states.checked ? "tabview-page-button-top-active" : states.hovered ? "tabview-page-button-top-hovered" : "tabview-page-button-top-inactive";
            padding = states.checked ? [2, 10, 4] : [2, 10];
            marginTop = states.checked ? 2 : 4;
            marginRight = -2;
            marginBottom = 1;
          } else if (states.barBottom) {
            decorator = states.checked ? "tabview-page-button-bottom-active" : states.hovered ? "tabview-page-button-bottom-hovered" : "tabview-page-button-bottom-inactive";
            padding = states.checked ? [4, 10] : [2, 10];
            marginBottom = states.checked ? 2 : 4;
            marginRight = -2;
            marginTop = 4;
          } else if (states.barRight) {
            decorator = states.checked ? "tabview-page-button-right-active" : states.hovered ? "tabview-page-button-right-hovered" : "tabview-page-button-right-inactive";
            padding = states.checked ? [4, 10, 4, 12] : [4, 10];
            marginRight = states.checked ? 2 : 4;
            marginBottom = -2;
            marginLeft = 3;
          } else {
            decorator = states.checked ? "tabview-page-button-left-active" : states.hovered ? "tabview-page-button-left-hovered" : "tabview-page-button-left-inactive";
            padding = states.checked ? [4, 10, 4, 8] : [4, 10];
            marginLeft = states.checked ? 2 : 4;
            marginBottom = -2;
            marginRight = 1;
          }
          return {
            zIndex: states.checked ? 10 : 5,
            decorator: decorator,
            padding: padding,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            textColor: states.disabled ? "text-disabled" : "text-active",
            font: "bold",
            cursor: states.disabled || states.checked ? "default" : "pointer"
          };
        }
      },
      "tabview-page/button/label": {
        alias: "label",
        style: function style(states) {
          return {
            padding: [0, 1, 0, 1],
            margin: states.focused ? 0 : 1,
            decorator: states.focused ? "keyboard-focus" : undefined
          };
        }
      },
      "tabview-page/button/close-button": {
        alias: "atom",
        style: function style(states) {
          var icon;
          if (states.hovered) {
            icon = "decoration/tabview/tab-close-button-hovered.png";
          } else {
            icon = "decoration/tabview/tab-close-button.png";
          }
          return {
            icon: icon
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TEXT AREA
      ---------------------------------------------------------------------------
      */

      "textarea": "textfield",
      /*
      ---------------------------------------------------------------------------
        TEXT FIELD
      ---------------------------------------------------------------------------
      */

      "textfield": {
        style: function style(states) {
          var decorator;
          var focused = !!states.focused;
          var invalid = !!states.invalid;
          var disabled = !!states.disabled;
          var hovered = !!states.hovered;
          if (focused && invalid && !disabled) {
            decorator = "input-focused-invalid";
          } else if (focused && !invalid && !disabled) {
            decorator = "input-focused";
          } else if (disabled) {
            decorator = "input-disabled";
          } else if (!focused && invalid && !disabled) {
            decorator = "input-invalid";
          } else {
            decorator = "input";
          }
          var textColor;
          if (states.disabled) {
            textColor = "text-disabled";
          } else if (states.showingPlaceholder) {
            textColor = "text-placeholder";
          } else {
            textColor = "text-textfield";
          }
          return {
            decorator: decorator,
            padding: [1, 2, 3, 2],
            textColor: textColor
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TOOLBAR
      ---------------------------------------------------------------------------
      */

      "toolbar": {
        style: function style(states) {
          return {
            decorator: "toolbar-silver",
            spacing: 2
          };
        }
      },
      "toolbar/part": {
        style: function style(states) {
          return {
            decorator: "toolbar-part",
            spacing: 2
          };
        }
      },
      "toolbar/part/container": {
        style: function style(states) {
          return {
            paddingLeft: 2,
            paddingRight: 2
          };
        }
      },
      "toolbar/part/handle": {
        style: function style(states) {
          return {
            source: "decoration/toolbar/toolbar-handle-knob.gif",
            marginLeft: 3,
            marginRight: 3
          };
        }
      },
      "toolbar-button": {
        alias: "atom",
        style: function style(states) {
          return {
            margin: 1,
            padding: states.pressed || states.checked ? [4, 6, 3, 6] : [3, 6, 4, 6],
            decorator: states.pressed || states.checked ? "toolbar-button-checked" : states.hovered && !states.disabled ? "toolbar-button-hovered" : "toolbar-button",
            textColor: states.pressed || states.checked ? "text-active" : "text-button",
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      "toolbar-menubutton": {
        alias: "toolbar-button",
        include: "toolbar-button",
        style: function style(states) {
          return {
            showArrow: true
          };
        }
      },
      "toolbar-menubutton/arrow": {
        alias: "image",
        include: "image",
        style: function style(states) {
          return {
            source: "decoration/arrows/down-small.png"
          };
        }
      },
      "toolbar-splitbutton": {
        style: function style(states) {
          return {
            margin: 0
          };
        }
      },
      "toolbar-splitbutton/button": "toolbar-button",
      "toolbar-splitbutton/arrow": {
        alias: "toolbar-button",
        include: "toolbar-button",
        style: function style(states) {
          return {
            icon: "decoration/arrows/down.png"
          };
        }
      },
      "toolbar-separator": {
        style: function style(states) {
          return {
            decorator: "toolbar-separator",
            margin: [4, 5, 4, 5]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TOOL TIP
      ---------------------------------------------------------------------------
      */

      "tooltip": {
        include: "popup",
        style: function style(states) {
          return {
            padding: [1, 4, 2, 4],
            offset: [15, 5, 5, 5]
          };
        }
      },
      "tooltip/atom": "atom",
      "tooltip-error": {
        style: function style(states) {
          return {
            placeMethod: "widget",
            offset: [-3, 1, 0, 0],
            arrowPosition: states.placementLeft ? "left" : "right",
            position: "right-top",
            showTimeout: 100,
            hideTimeout: 10000,
            padding: [0, 4, 4, 0]
          };
        }
      },
      "tooltip-error/arrow": {
        include: "image",
        style: function style(states) {
          return {
            source: states.placementLeft ? "decoration/form/tooltip-error-arrow-right.png" : "decoration/form/tooltip-error-arrow-left.png",
            padding: [6, 0, 0, 0],
            zIndex: 10000001
          };
        }
      },
      "tooltip-error/atom": {
        include: "popup",
        style: function style(states) {
          return {
            textColor: "text-selected",
            backgroundColor: undefined,
            decorator: "tooltip-error",
            font: "bold",
            padding: [3, 4, 4, 4],
            margin: [1, 0, 0, 0],
            maxWidth: 333
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TREE
      ---------------------------------------------------------------------------
      */

      "tree": "list",
      "tree-item": {
        style: function style(states) {
          var decorator = states.selected ? "selected" : undefined;
          return {
            padding: [2, 6],
            textColor: states.selected ? "text-highlight" : states.disabled ? "red" : undefined,
            decorator: decorator,
            cursor: states.disabled ? "default" : "pointer"
          };
        }
      },
      "tree-item/icon": {
        include: "image",
        style: function style(states) {
          return {
            paddingRight: 5
          };
        }
      },
      "tree-item/label": {
        include: "label",
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined
          };
        }
      },
      "tree-item/open": {
        include: "image",
        style: function style(states) {
          var icon;
          if (states.selected && states.opened) {
            icon = "decoration/tree/open-selected.png";
          } else if (states.selected && !states.opened) {
            icon = "decoration/tree/closed-selected.png";
          } else if (states.opened) {
            icon = "decoration/tree/open.png";
          } else {
            icon = "decoration/tree/closed.png";
          }
          return {
            padding: [0, 5, 0, 2],
            source: icon
          };
        }
      },
      "tree-folder": {
        include: "tree-item",
        alias: "tree-item",
        style: function style(states) {
          var icon, iconOpened;
          if (states.small) {
            icon = states.opened ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png";
            iconOpened = "icon/16/places/folder-open.png";
          } else if (states.large) {
            icon = states.opened ? "icon/32/places/folder-open.png" : "icon/32/places/folder.png";
            iconOpened = "icon/32/places/folder-open.png";
          } else {
            icon = states.opened ? "icon/22/places/folder-open.png" : "icon/22/places/folder.png";
            iconOpened = "icon/22/places/folder-open.png";
          }
          return {
            icon: icon,
            iconOpened: iconOpened
          };
        }
      },
      "tree-file": {
        include: "tree-item",
        alias: "tree-item",
        style: function style(states) {
          return {
            icon: states.small ? "icon/16/mimetypes/office-document.png" : states.large ? "icon/32/mimetypes/office-document.png" : "icon/22/mimetypes/office-document.png"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TREE VIRTUAL
      ---------------------------------------------------------------------------
      */

      "treevirtual": "table",
      "treevirtual-folder": {
        style: function style(states) {
          return {
            icon: states.opened ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png"
          };
        }
      },
      "treevirtual-file": {
        include: "treevirtual-folder",
        alias: "treevirtual-folder",
        style: function style(states) {
          return {
            icon: "icon/16/mimetypes/office-document.png"
          };
        }
      },
      "treevirtual-line": {
        style: function style(states) {
          return {
            icon: "qx/static/blank.gif"
          };
        }
      },
      "treevirtual-contract": {
        style: function style(states) {
          return {
            icon: "decoration/tree/open.png",
            paddingLeft: 5,
            paddingTop: 2
          };
        }
      },
      "treevirtual-expand": {
        style: function style(states) {
          return {
            icon: "decoration/tree/closed.png",
            paddingLeft: 5,
            paddingTop: 2
          };
        }
      },
      "treevirtual-only-contract": "treevirtual-contract",
      "treevirtual-only-expand": "treevirtual-expand",
      "treevirtual-start-contract": "treevirtual-contract",
      "treevirtual-start-expand": "treevirtual-expand",
      "treevirtual-end-contract": "treevirtual-contract",
      "treevirtual-end-expand": "treevirtual-expand",
      "treevirtual-cross-contract": "treevirtual-contract",
      "treevirtual-cross-expand": "treevirtual-expand",
      "treevirtual-end": {
        style: function style(states) {
          return {
            icon: "qx/static/blank.gif"
          };
        }
      },
      "treevirtual-cross": {
        style: function style(states) {
          return {
            icon: "qx/static/blank.gif"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        VIRTUAL WIDGETS
      ---------------------------------------------------------------------------
      */

      "virtual-list": "list",
      "virtual-list/row-layer": "row-layer",
      "row-layer": "widget",
      "group-item": {
        include: "label",
        alias: "label",
        style: function style(states) {
          return {
            padding: 4,
            decorator: "group-item",
            textColor: "groupitem-text",
            font: "bold"
          };
        }
      },
      "virtual-selectbox": "selectbox",
      "virtual-selectbox/dropdown": "popup",
      "virtual-selectbox/dropdown/list": {
        alias: "virtual-list"
      },
      "virtual-combobox": "combobox",
      "virtual-combobox/dropdown": "popup",
      "virtual-combobox/dropdown/list": {
        alias: "virtual-list"
      },
      "virtual-tree": {
        include: "tree",
        alias: "tree",
        style: function style(states) {
          return {
            itemHeight: 26
          };
        }
      },
      "virtual-tree-folder": "tree-folder",
      "virtual-tree-file": "tree-file",
      "column-layer": "widget",
      "cell": {
        style: function style(states) {
          return {
            textColor: states.selected ? "text-selected" : "text-label",
            padding: [3, 6],
            font: "default"
          };
        }
      },
      "cell-string": "cell",
      "cell-number": {
        include: "cell",
        style: function style(states) {
          return {
            textAlign: "right"
          };
        }
      },
      "cell-image": "cell",
      "cell-boolean": {
        include: "cell",
        style: function style(states) {
          return {
            iconTrue: "decoration/table/boolean-true.png",
            iconFalse: "decoration/table/boolean-false.png"
          };
        }
      },
      "cell-atom": "cell",
      "cell-date": "cell",
      "cell-html": "cell",
      /*
      ---------------------------------------------------------------------------
        WINDOW
      ---------------------------------------------------------------------------
      */

      "window": {
        style: function style(states) {
          return {
            decorator: states.active ? "window-active" : "window-inactive",
            contentPadding: 5,
            margin: states.maximized ? 0 : [0, 5, 5, 0]
          };
        }
      },
      "window/pane": "widget",
      "window/captionbar": {
        style: function style(states) {
          return {
            decorator: states.active ? "window-captionbar-active" : "window-captionbar-inactive",
            textColor: states.active && !states.disabled ? "text-active" : "text-disabled",
            minHeight: 30,
            paddingRight: 2
          };
        }
      },
      "window/icon": {
        style: function style(states) {
          return {
            margin: [5, 0, 3, 6]
          };
        }
      },
      "window/title": {
        style: function style(states) {
          return {
            alignY: "middle",
            font: "bold",
            marginLeft: 6,
            marginRight: 12
          };
        }
      },
      "window-button": {
        alias: "atom",
        style: function style(states) {
          return {
            margin: [2, 3, 3, 1],
            cursor: states.active && !states.disabled ? "pointer" : "default"
          };
        }
      },
      "window/close-button": {
        alias: "window-button",
        include: "window-button",
        style: function style(states) {
          var icon;
          switch (true) {
            case states.hovered:
              icon = "decoration/window/close-hovered.png";
              break;
            case states.active:
              icon = "decoration/window/close-active.png";
              break;
            default:
              icon = "decoration/window/button-inactive.png";
          }
          return {
            icon: icon
          };
        }
      },
      "window/maximize-button": {
        alias: "window-button",
        include: "window-button",
        style: function style(states) {
          var icon;
          switch (true) {
            case states.hovered:
              icon = "decoration/window/maximize-hovered.png";
              break;
            case states.active:
              icon = "decoration/window/maximize-active.png";
              break;
            default:
              icon = "decoration/window/button-inactive.png";
          }
          return {
            icon: icon
          };
        }
      },
      "window/minimize-button": {
        alias: "window-button",
        include: "window-button",
        style: function style(states) {
          var icon;
          switch (true) {
            case states.hovered:
              icon = "decoration/window/minimize-hovered.png";
              break;
            case states.active:
              icon = "decoration/window/minimize-active.png";
              break;
            default:
              icon = "decoration/window/button-inactive.png";
          }
          return {
            icon: icon
          };
        }
      },
      "window/restore-button": {
        alias: "window-button",
        include: "window-button",
        style: function style(states) {
          var icon;
          switch (true) {
            case states.hovered:
              icon = "decoration/window/restore-hovered.png";
              break;
            case states.active:
              icon = "decoration/window/maximize-active.png";
              break;
            default:
              icon = "decoration/window/button-inactive.png";
          }
          return {
            icon: icon
          };
        }
      },
      "window/statusbar": {
        style: function style(states) {
          return {
            padding: [2, 6],
            decorator: "window-statusbar",
            minHeight: 18
          };
        }
      },
      "window/statusbar-text": {},
      "window-resize-frame": {
        style: function style(states) {
          return {
            decorator: "main"
          };
        }
      }
    }
  });
  silverbluetheme.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
