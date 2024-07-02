function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (_appearances) {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.fluent.Image": {},
      "ville.global.spacing": {},
      "qx.ui.style.Stylesheet": {},
      "qx.theme.manager.Decoration": {},
      "qx.theme.manager.Color": {},
      "ville.global.duration": {},
      "ville.global.curve": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Ville Software (SQville)
  
     Copyright:
       None
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (chris.eskew@sqville.com)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************* */

  /**
   * The fluent appearance theme.
   * @asset(qx/icon/${qx.icontheme}/22/apps/office-calendar.png)
   */
  qx.Theme.define("ville.theme.fluent.Appearance", {
    appearances: (_appearances = {
      /*
      ---------------------------------------------------------------------------
        CORE
      ---------------------------------------------------------------------------
      */

      "widget": {
        style: function style(states) {
          return {
            backgroundColor: "NeutralBackground1"
          };
        }
      },
      "label": {
        style: function style(states) {
          return {
            font: "default",
            textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForeground1"
          };
        }
      },
      "image": {
        style: function style(states) {
          return {
            opacity: !states.replacement && states.disabled ? 0.3 : undefined
          };
        }
      },
      "icon": {
        include: "label",
        style: function style(states) {
          return {
            backgroundColor: "transparent"
          };
        }
      },
      "atom": {},
      "atom/label": "label",
      "atom/icon": "image",
      "root": {
        style: function style(states) {
          return {
            backgroundColor: "NeutralBackground1",
            font: "default"
          };
        }
      },
      "popup": {
        style: function style(states) {
          return {
            decorator: "popup",
            backgroundColor: "NeutralBackground1"
          };
        }
      },
      "tooltip": {
        include: "popup",
        style: function style(states) {
          return {
            backgroundColor: "tooltip",
            textColor: "tooltip-text",
            decorator: "tooltip",
            padding: [1, 3, 2, 3],
            offset: [10, 5, 5, 5]
          };
        }
      },
      "tooltip/atom": "atom",
      "tooltip-error": {
        include: "tooltip",
        style: function style(states) {
          return {
            textColor: "text-selected",
            showTimeout: 100,
            hideTimeout: 10000,
            decorator: "tooltip-error",
            font: "default",
            backgroundColor: undefined
          };
        }
      },
      "tooltip-error/atom": "atom",
      "iframe": {
        style: function style(states) {
          return {
            backgroundColor: "background",
            decorator: "main-dark"
          };
        }
      },
      "move-frame": {
        style: function style(states) {
          return {
            decorator: "main-dark"
          };
        }
      },
      "resize-frame": "move-frame",
      "dragdrop-cursor": {
        style: function style(states) {
          var icon = "";
          var retval = {};
          if (states.copy) {
            icon = "copy";
            retval = {
              source: ville.theme.fluent.Image.URLS["cursor-" + icon],
              decorator: "cursor-" + icon,
              position: "right-top",
              offset: [2, 16, 2, 6]
            };
          } else if (states.move) {
            icon = "move";
            retval = {
              source: "",
              decorator: "cursor-" + icon,
              position: "right-top",
              offset: [2, 16, 2, 6],
              width: 15,
              height: 15
            };
          } else if (states.alias) {
            icon = "alias";
            retval = {
              source: ville.theme.fluent.Image.URLS["cursor-" + icon],
              decorator: "cursor-" + icon,
              position: "right-top",
              offset: [2, 16, 2, 6]
            };
          } else {
            icon = "nodrop";
            retval = {
              source: ville.theme.fluent.Image.URLS["cursor-" + icon],
              position: "right-top",
              offset: [2, 16, 2, 6],
              decorator: "cursor-" + icon
            };
          }
          return retval;
        }
      },
      /*
      ---------------------------------------------------------------------------
        SLIDEBAR
      ---------------------------------------------------------------------------
      */

      "slidebar": {},
      "slidebar/scrollpane": {},
      "slidebar/content": {},
      "slidebar/button-forward": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: ville.theme.fluent.Image.URLS["arrow-" + (states.vertical ? "down" : "right")],
            padding: [10, 12]
          };
        }
      },
      "slidebar/button-backward": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: ville.theme.fluent.Image.URLS["arrow-" + (states.vertical ? "up" : "left")],
            padding: [10, 12]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TABLE
      ---------------------------------------------------------------------------
      */

      "table": "widget",
      /*{
        include : "widget",
      	
        style : function(states)
        {
          return {
            decorator : "table-standard"
          };
        }
      },*/

      "table/statusbar": {
        style: function style(states) {
          return {
            decorator: "statusbar",
            padding: [14, 10],
            backgroundColor: "NeutralBackground1",
            textColor: "NeutralForeground1"
          };
        }
      },
      "table/column-button": {
        alias: "button",
        style: function style(states) {
          return {
            decorator: "table-header-column-button",
            padding: 6,
            backgroundColor: "NeutralBackground1",
            icon: ville.theme.fluent.Image.URLS["table-column-settings"]
          };
        }
      },
      "table/column-button/icon": {
        alias: "image",
        style: function style(states) {
          return {
            width: 14,
            height: 14
            //backgroundColor : states.hovered ? "black" : "gray",
            //decorator : states.hovered ? "select-column-order-hovered-vert" : "select-column-order-vert"
          };
        }
      },
      "table-column-reset-button": {
        include: "menu-button",
        alias: "menu-button",
        style: function style() {
          return {
            icon: ville.theme.fluent.Image.URLS["arrow-reset"]
          };
        }
      },
      "table-scroller/scrollbar-x": "scrollbar",
      "table-scroller/scrollbar-y": "scrollbar",
      "table-scroller": "widget",
      "table-scroller/header": {
        style: function style() {
          return {
            decorator: "table-header",
            backgroundColor: "NeutralBackground1"
          };
        }
      },
      "table-scroller/pane": {
        style: function style(states) {
          return {
            decorator: "table-pane",
            backgroundColor: "NeutralBackground1"
          };
        }
      },
      "table-scroller/focus-indicator": {
        style: function style(states) {
          return {
            decorator: "main"
          };
        }
      },
      "table-scroller/resize-line": {
        style: function style(states) {
          return {
            backgroundColor: "NeutralStroke1",
            width: 2
          };
        }
      },
      "table-header-cell": {
        alias: "atom",
        style: function style(states) {
          return {
            decorator: states.first ? "table-header-cell-first" : "table-header-cell",
            minWidth: 13,
            alignY: "middle",
            padding: 6,
            cursor: states.disabled ? undefined : "pointer",
            sortIcon: states.sorted ? ville.theme.fluent.Image.URLS["" + (states.sortedAscending ? "arrow-up" : "arrow-down")] : undefined
          };
        }
      },
      "table-header-cell/icon": {
        include: "atom/icon",
        style: function style(states) {
          return {
            paddingRight: 5
          };
        }
      },
      "table-header-cell/sort-icon": "image"
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "table-header-cell/sort-icon", {
      style: function style(states) {
        return {
          alignY: "middle",
          alignX: "right"
        };
      }
    }), "table-editor-textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          padding: [2, 2]
        };
      }
    }), "table-editor-selectbox", {
      include: "selectbox",
      alias: "selectbox",
      style: function style(states) {
        return {
          padding: [0, 2]
        };
      }
    }), "table-editor-combobox", {
      include: "combobox",
      alias: "combobox",
      style: function style(states) {
        return {
          decorator: undefined
        };
      }
    }), "progressive-table-header", {
      style: function style(states) {
        return {
          decorator: "progressive-table-header"
        };
      }
    }), "progressive-table-header-cell", {
      style: function style(states) {
        return {
          decorator: "progressive-table-header-cell",
          padding: [5, 6, 5, 6]
        };
      }
    }), "treevirtual", {
      include: "textfield",
      alias: "table",
      style: function style(states, superStyles) {
        return {
          padding: [superStyles.padding[0] + 2, superStyles.padding[1] + 1]
        };
      }
    }), "treevirtual-folder", {
      style: function style(states) {
        return {
          icon: states.opened ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), "treevirtual-file", {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",
      style: function style(states) {
        return {
          icon: "icon/16/mimetypes/text-plain.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), "treevirtual-line", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-line"]
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "treevirtual-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["tree-minus"]
        };
      }
    }), "treevirtual-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["tree-plus"]
        };
      }
    }), "treevirtual-only-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-minus-only"]
        };
      }
    }), "treevirtual-only-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-plus-only"]
        };
      }
    }), "treevirtual-start-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-minus-start"]
        };
      }
    }), "treevirtual-start-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-plus-start"]
        };
      }
    }), "treevirtual-end-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-minus-end"]
        };
      }
    }), "treevirtual-end-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-plus-end"]
        };
      }
    }), "treevirtual-cross-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-minus-cross"]
        };
      }
    }), "treevirtual-cross-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-plus-cross"]
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "treevirtual-end", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-end"]
        };
      }
    }), "treevirtual-cross", {
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["treevirtual-cross"]
        };
      }
    }), "treevirtual-node-editor-textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          padding: [2, 2]
        };
      }
    }), "resizer", {
      style: function style(states) {
        return {
          decorator: "main-dark"
        };
      }
    }), "splitpane", {}), "splitpane/splitter", {
      style: function style(states) {
        return {
          backgroundColor: "light-background"
        };
      }
    }), "splitpane/splitter/knob", {
      style: function style(states) {
        return {
          source: "",
          decorator: "splitpane-knob",
          padding: 0,
          marginLeft: 3,
          marginRight: 3,
          width: states.horizontal ? 2 : 12,
          height: states.horizontal ? 12 : 2
        };
      }
    }), "splitpane/slider", {
      style: function style(states) {
        return {
          backgroundColor: "border-light-shadow",
          opacity: 0.3
        };
      }
    }), "menu", {
      style: function style(states) {
        var result = {
          backgroundColor: "NeutralBackground1",
          decorator: "popup",
          spacingX: 12,
          spacingY: 0,
          iconColumnWidth: 12,
          arrowColumnWidth: 8,
          padding: 0,
          placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align",
          offset: [0, 0, 0, 0]
        };
        if (states.submenu) {
          result.position = "right-top";
          result.offset = [-2, -3];
        }
        if (states.contextmenu) {
          result.offset = 4;
        }
        return result;
      }
    }), "menu/slidebar", "menu-slidebar"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "menu-slidebar", "widget"), "menu-slidebar-button", {
      include: "hover-button",
      style: function style(states) {
        return {
          backgroundColor: states.hovered ? "NeutralBackground1Hover" : "transparent",
          decorator: "subtle-button-box",
          padding: 6,
          center: true
        };
      }
    }), "menu-slidebar/button-backward", {
      include: "menu-slidebar-button",
      style: function style(states) {
        return {
          icon: ""
        };
      }
    }), "menu-slidebar/button-backward/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-up",
          width: 0,
          height: 0
        };
      }
    }), "menu-slidebar/button-forward", {
      include: "menu-slidebar-button",
      style: function style(states) {
        return {
          icon: ""
        };
      }
    }), "menu-slidebar/button-forward/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-down",
          width: 0,
          height: 0
        };
      }
    }), "menu-separator", {
      style: function style(states) {
        return {
          height: 0,
          decorator: "menu-separator",
          marginTop: 4,
          marginBottom: 4,
          marginLeft: 2,
          marginRight: 2
        };
      }
    }), "menu-button", {
      alias: "atom",
      style: function style(states) {
        return {
          backgroundColor: states.selected ? "NeutralBackground1Hover" : undefined,
          decorator: "button-box-common",
          padding: [6, 6],
          margin: [0, 6, 0, 8]
        };
      }
    }), "menu-button-header", {
      include: "menu-button",
      style: function style(states) {
        return {
          font: "menu-button-header",
          padding: [6, 0]
        };
      }
    }), "menu-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          alignY: "middle",
          marginLeft: 14,
          width: 20,
          height: 20
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "menu-button-header/icon", {
      include: "menu-button/icon",
      style: function style(states) {
        return {
          marginLeft: 6
        };
      }
    }), "menu-button/label", {
      include: "label",
      style: function style(states) {
        return {
          textColor: "NeutralForeground2",
          alignY: "middle",
          padding: 1
        };
      }
    }), "menu-button-header/label", {
      include: "menu-button/label",
      style: function style(states) {
        return {
          font: "menu-button-header",
          textColor: "NeutralForeground3",
          alignY: "middle",
          alignX: "left",
          padding: 1,
          marginLeft: -10
        };
      }
    }), "menu-button/shortcut", {
      include: "label",
      style: function style(states) {
        return {
          textColor: "NeutralForeground2",
          alignY: "middle",
          margin: [0, 0, 0, 20],
          padding: 1
        };
      }
    }), "menu-button/arrow", {
      include: "image",
      style: function style(states) {
        return {
          source: ville.theme.fluent.Image.URLS["chevron-right-regular"],
          //decorator : "ville-icon-arrow-right",
          alignY: "middle",
          marginRight: 10,
          paddingRight: 20,
          width: 20,
          height: 20
        };
      }
    }), "menu-checkbox", {
      alias: "menu-button",
      include: "menu-button",
      style: function style(states) {
        return {
          icon: states.checked ? ville.theme.fluent.Image.URLS["checkbox-checked"] : ville.theme.fluent.Image.URLS["blank"]
        };
      }
    }), "menu-checkbox/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "menu-checkbox-checked",
          width: 17,
          height: 17,
          marginLeft: 14,
          padding: 0
        };
      }
    }), "menu-radiobutton", {
      include: "menu-button",
      style: function style(states) {
        return {
          icon: !states.checked ? undefined : ville.theme.fluent.Image.URLS["blank"]
        };
      }
    }), "menu-radiobutton/icon", {
      include: "image",
      style: function style(states) {
        var decorator = "menu-radiobutton";
        decorator += states.invalid && !states.disabled ? "-invalid" : "";
        return {
          decorator: decorator,
          width: 8,
          height: 8,
          backgroundColor: "NeutralForeground2",
          marginLeft: 17
        };
      }
    }), "menubar", "toolbar"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "menubar-button", "menubutton"), "virtual-list", "list"), "virtual-list/row-layer", "row-layer"), "row-layer", "widget"), "column-layer", "widget"), "group-item", {
      include: "label",
      alias: "label",
      style: function style(states) {
        return {
          padding: 4,
          backgroundColor: "background-group-item",
          textColor: "group-item",
          font: "bold"
        };
      }
    }), "virtual-selectbox", "selectbox"), "virtual-selectbox/dropdown", "selectbox/popup"), "virtual-selectbox/dropdown/list", {
      alias: "virtual-list"
    }), "virtual-combobox", "combobox"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "virtual-combobox/dropdown", "combobox/popup"), "virtual-combobox/dropdown/list", {
      alias: "virtual-list"
    }), "virtual-tree", "tree"), "virtual-tree-folder", "tree-folder"), "virtual-tree-file", "tree-file"), "cell", {
      style: function style(states) {
        return {
          //backgroundColor: states.selected ? "table-row-background-selected" : "table-row-background-even",
          backgroundColor: states.selected ? "BrandBackground2" : "NeutralBackground1",
          //textColor: states.selected ? "text-selected" : "text",
          padding: [6, 6]
        };
      }
    }), "cell-string", "cell"), "cell-number", {
      include: "cell",
      style: function style(states) {
        return {
          textAlign: "right"
        };
      }
    }), "cell-image", "cell"), "cell-boolean", "cell"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "cell-atom", "cell"), "cell-date", "cell"), "cell-html", "cell"), "scrollbar", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground2"
        };
      }
    }), "scrollbar/slider", {}), "scrollbar/slider/knob", {
      style: function style(states) {
        var decorator = "button-box";
        var bgcolor = "NeutralBackground1";
        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            bgcolor = "NeutralBackground1Hover";
            decorator = "button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            bgcolor = "NeutralBackground1Pressed";
            decorator = "button-box-pressed";
          } else if (states.pressed || states.checked) {
            bgcolor = "NeutralBackground1Pressed";
          }
        }
        return {
          height: 14,
          width: 14,
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          backgroundColor: bgcolor,
          minHeight: states.horizontal ? undefined : 20,
          minWidth: states.horizontal ? 20 : undefined
        };
      }
    }), "scrollbar/button", {
      style: function style(states) {
        var styles = {};
        styles.padding = 4;
        var icon = "";
        if (states.left) {
          icon = "left";
          styles.marginRight = 2;
        } else if (states.right) {
          icon += "right";
          styles.marginLeft = 2;
        } else if (states.up) {
          icon += "up-small";
          //icon += "up";
          styles.marginBottom = 2;
        } else {
          icon += "down-small";
          //icon += "down";
          styles.marginTop = 2;
        }
        styles.icon = ville.theme.fluent.Image.URLS["arrow-" + icon];
        styles.cursor = "pointer";
        styles.decorator = "button-box";
        return styles;
      }
    }), "scrollbar/button-begin", "scrollbar/button"), "scrollbar/button-end", "scrollbar/button"), "scrollarea/corner", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "scrollarea", "widget"), "scrollarea/pane", "widget"), "scrollarea/scrollbar-x", "scrollbar"), "scrollarea/scrollbar-y", "scrollbar"), "textfield", {
      style: function style(states) {
        var textColor;
        if (states.disabled) {
          textColor = "NeutralForegroundDisabled";
        } else if (states.showingPlaceholder) {
          textColor = "NeutralForeground2";
        } else {
          textColor = "NeutralForeground1";
        }
        var decorator;
        var cursor = "text";
        var padding = [0, ville.global.spacing.MNudge];
        var backgroundcolor = "NeutralBackground1";
        if (states.disabled) {
          decorator = "textfield-disabled";
          backgroundcolor = "TransparentBackground";
          cursor = "not-allowed";
        } else if (states.invalid) {
          decorator = "textfield-invalid";
        } else if (states.focused) {
          decorator = "textfield-focused";
          //padding = [0, 7]
        } else {
          decorator = "textfield";
        }
        return {
          decorator: decorator,
          padding: padding,
          height: 32,
          font: "default",
          textColor: textColor,
          backgroundColor: backgroundcolor,
          cursor: cursor
        };
      }
    }), "textarea", {
      include: "textfield",
      style: function style(states) {
        return {
          height: undefined
        };
      }
    }), "radiobutton", {
      style: function style(states) {
        return {
          icon: "",
          gap: 10,
          cursor: "pointer "
        };
      }
    }), "radiobutton/label", {
      style: function style(states) {
        var textcolor = "NeutralStrokeAccessible";
        if (states.checked) {
          textcolor = "NeutralForeground1";
        }
        if (!states.checked && states.hovered) {
          textcolor = "NeutralForeground2";
        }
        if (states.disabled) {
          textcolor = "NeutralStrokeDisabled";
        }
        return {
          textColor: textcolor
        };
      }
    }), "radiobutton/icon", {
      style: function style(states) {
        var decorator = "radiobutton";

        //decorator += states.invalid && !states.disabled ? "-invalid" : "";

        var backgroundColor = "TransparentBackground";
        if (states.disabled && states.checked) {
          backgroundColor = "NeutralBackgroundDisabled";
          decorator += "-checked-disabled";
        } else if (states.disabled) {
          decorator += "-disabled";
        } else if (states.checked) {
          backgroundColor = "CompoundBrandForeground1";
          decorator += "-checked";
        }
        return {
          decorator: decorator,
          width: 16,
          height: 16,
          backgroundColor: backgroundColor
        };
      }
    }), "form-renderer-label", {
      include: "label",
      style: function style() {
        return {
          paddingTop: 3
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "checkbox", {
      alias: "atom",
      style: function style(states) {
        var icon;

        // Checked
        if (states.checked && !states.disabled) {
          icon = ville.theme.fluent.Image.URLS["checkbox-brand-checked"];
          // Undetermined
        } else if (states.checked && states.disabled) {
          icon = ville.theme.fluent.Image.URLS["checkbox-checked-disabled"];
        } else if (states.undetermined) {
          icon = "";
          // Unchecked
        } else {
          icon = "";
        }
        return {
          icon: icon,
          gap: 10
        };
      }
    }), "checkbox/icon", {
      style: function style(states) {
        var decorator = "checkbox";

        /*if (states.focused && !states.invalid) {
          decorator = "checkbox-focused";
        }*/

        decorator += states.invalid && !states.disabled ? "-invalid" : "";
        var padding;
        var bckgrdcolr = "TransparentBackground";
        // Checked
        if (states.checked) {
          padding = [0, 0, 0, 0];
          decorator = "checkbox-checked";
          bckgrdcolr = "CompoundBrandBackground";
          if (states.hovered) {
            bckgrdcolr = "CompoundBrandBackgroundHover";
          }
          if (states.focused) {
            decorator = "checkbox-checked";
          }
          if (states.invalid) {
            decorator = "checkbox-checked-invalid";
          }
          if (states.disabled) {
            bckgrdcolr = "TransparentBackground";
            decorator = "checkbox-checked-disabled";
          }
          // Undetermined
        } else if (states.undetermined) {
          padding = [0, 0, 0, 0];
          decorator = "checkbox-undetermined";
          if (states.focused) {
            decorator = "checkbox-undetermined-focused";
          }
          if (states.invalid) {
            decorator = "checkbox-undetermined-invalid";
          }
          if (states.disabled) {
            decorator = "checkbox-undetermined-disabled";
            bckgrdcolr = "TransparentBackground";
          }
        } else if (states.disabled) {
          decorator = "checkbox-disabled";
        }
        return {
          decorator: decorator,
          width: 17,
          height: 17,
          padding: padding,
          backgroundColor: bckgrdcolr
        };
      }
    }), "spinner", {
      include: "combobox",
      style: function style(states) {
        return {
          cursor: "pointer"
          //padding : [ville.global.spacing.SNudge, ville.global.spacing.SNudge]
        };
      }
    }), "spinner/textfield", {
      include: "combobox/textfield",
      style: function style(states) {
        return {
          padding: [ville.global.spacing.XS, ville.global.spacing.S]
        };
      }
    }), "spinner/upbutton", {
      style: function style(states) {
        return {
          backgroundColor: states.hovered ? "NeutralBackground1Hover" : "transparent",
          decorator: "button-box-top-right",
          padding: [0, 3, 0, 4],
          icon: "",
          width: 20,
          cursor: "pointer"
        };
      }
    }), "spinner/upbutton/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-up-small",
          width: 0,
          height: 0
        };
      }
    }), "spinner/downbutton", {
      style: function style(states) {
        return {
          icon: "",
          backgroundColor: states.hovered ? "NeutralBackground1Hover" : "transparent",
          decorator: "button-box-bottom-right",
          padding: [0, 3, 0, 4],
          width: 20,
          cursor: "pointer"
        };
      }
    }), "spinner/downbutton/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-down-small",
          width: 0,
          height: 0
        };
      }
    }), "selectbox", {
      include: "combobox",
      style: function style(states) {
        return {
          cursor: "pointer"
        };
      }
    }), "selectbox/atom", {
      style: function style(states) {
        return {
          padding: [0, ville.global.spacing.MNudge]
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "selectbox/popup", "combobox/popup"), "selectbox/list", "combobox/list"), "selectbox/arrow", {
      style: function style(states) {
        return {
          textColor: "blue",
          source: ville.theme.fluent.Image.URLS["chevron-down"],
          width: 22,
          height: 22,
          marginRight: ville.global.spacing.S
        };
      }
    }), "checked-selectbox", "selectbox"), "combobox", {
      style: function style(states) {
        /**
         * TODO - use maps with Camel Case to store rules; hyphenate and add to style sheet when called 
         */

        var decorator = "comboboxfield";
        var sheet = qx.ui.style.Stylesheet.getInstance();
        var prefix = qx.theme.manager.Decoration.CSS_CLASSNAME_PREFIX;
        var prefixdecbase = "." + prefix + decorator;
        sheet.addRule(":root", "--compoundbrandbackground:" + qx.theme.manager.Color.getInstance().resolve("CompoundBrandBackground"));
        if (!sheet.hasRule(prefixdecbase + "-focused:focus-within::after")) {
          //var keyframe1 = "@keyframes textfieldout";
          var rule1 = prefixdecbase + "-focused::after";
          var css1 = ["position: absolute;", "content: '';", "border-bottom-width: 2px;", "border-bottom-style: solid;", "border-bottom-color: var(--compoundbrandbackground);", "border-bottom-left-radius: 4px;", "border-bottom-right-radius: 4px;", "left: -1px; bottom: -1px; right: -1px;", "clip-path: inset(calc(100% -2px) 0px 0px);", "height: max(2px, 4px);", "box-sizing: border-box;", "border-radius: inherit;", "transform: scaleX(0);", "transition-property: transform;", "transition-duration: " + ville.global.duration.Normal + ";", "transition-delay: " + ville.global.curve.DecelerateMid + ";"];

          /*var css0 = [
            "animation-name: textfieldout;",
            "animation-duration: 400ms;",
            "animation-timing-function: cubic-bezier(0.1,0.9,0.2,1)"
          ];
           var frames1 = [
            "0% {transform: scaleX(0);}",
            "98% {transform: scaleX(1);}",
            "100% {transform: scaleX(0);}"
          ];*/

          var rule2 = prefixdecbase + "-focused:focus-within::after";
          var css2 = ["transform: scaleX(1);", "transition-property: transform;", "transition-duration: " + ville.global.duration.UltraFast + ";", "transition-delay: " + ville.global.curve.AccelerateMid + ";"];
          //sheet.addRule(keyframe1, frames1.join(' '));
          var rule0 = prefixdecbase + "::after";
          sheet.addRule(rule0, css1.join(' '));
          sheet.addRule(rule1, css1.join(' '));
          //qx.theme.manager.Decoration.getInstance().addCssClass("comboboxfield-focused");
          sheet.addRule(rule2, css2.join(' '));
        }
        var textColor;
        if (states.disabled) {
          textColor = "NeutralForegroundDisabled";
        } else if (states.showingPlaceholder) {
          textColor = "NeutralForeground2";
        } else {
          textColor = "NeutralForeground1";
        }
        var cursor = "text";
        var padding = [0, 8];
        var backgroundcolor = "NeutralBackground1";
        if (states.disabled) {
          decorator = "textfield-disabled";
          backgroundcolor = "TransparentBackground";
          cursor = "not-allowed";
        } else if (states.invalid) {
          decorator = "textfield-invalid";
        } else if (states.focused) {
          decorator += "-focused";
          //padding = [0, 7]
        }
        return {
          decorator: decorator,
          padding: 0,
          height: 32,
          font: "default",
          textColor: textColor,
          backgroundColor: backgroundcolor,
          cursor: cursor
        };
      }
    }), "combobox/button", {
      style: function style(states) {
        //var imgcolor = qx.theme.manager.Color.getInstance().resolve("NeutralStrokeAccessible");
        return {
          icon: ville.theme.fluent.Image.URLS["chevron-down"],
          backgroundColor: "TransparentBackground",
          decorator: "button-box-right-borderless",
          padding: [2, 8, 0, 6],
          width: 24,
          cursor: "pointer"
        };
      }
    }), "combobox/button/icon", {
      include: "image",
      style: function style(states) {
        return {
          scale: true,
          width: 22,
          height: 22
        };
      }
    }), "combobox/popup", {
      include: "popup",
      style: function style(states) {
        return {
          padding: ville.global.spacing.SNudge,
          decorator: "combobox-popup"
        };
      }
    }), "combobox/list", {
      alias: "list",
      style: function style(states) {
        return {
          spacing: 2
        };
      }
    }), "combobox/textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          height: undefined
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "datefield", {
      include: "combobox",
      style: function style(states) {
        return {
          padding: [0, 0, 0, 10]
        };
      }
    }), "datefield/button", {
      style: function style(states) {
        return {
          icon: "",
          padding: [0, 0, 0, 10],
          cursor: "pointer",
          width: 30
          //backgroundColor : undefined
        };
      }
    }), "datefield/button/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-down"
          //width: 22,
          //height: 24,
          //padding : 2
        };
      }
    }), "datefield/textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          height: undefined
        };
      }
    }), "datefield/list", {
      alias: "datechooser",
      include: "datechooser",
      style: function style(states) {
        return {
          decorator: undefined
        };
      }
    }), "list", {
      alias: "scrollarea",
      style: function style(states) {
        var decorator = "textfield";
        var padding = ville.global.spacing.S;
        var backgroundcolor = "NeutralBackground1";
        if (states.disabled) {
          //decorator = "inset";
          backgroundcolor = "NeutralBackgroundDisabled";
        } else if (states.invalid) {
          //decorator = "border-invalid";
          backgroundcolor = "background-invalid";
        } else if (states.focused) {
          decorator += "-focused";
        } else {
          decorator = "textfield";
        }
        return {
          decorator: decorator,
          padding: padding,
          backgroundColor: backgroundcolor,
          spacing: 2
        };
      }
    }), "listitem", {
      alias: "atom",
      style: function style(states) {
        var padding = ville.global.spacing.S;
        if (states.lead) {
          padding = [9, 9, 9, 13];
        }
        if (states.dragover) {
          padding[2] -= 2;
        }
        var backgroundColor = "NeutralBackground1";
        if (states.selected) {
          backgroundColor = "NeutralBackground1Selected";
        }
        return {
          gap: 4,
          padding: padding,
          backgroundColor: backgroundColor,
          textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForeground1",
          decorator: states.lead ? "lead-item" : states.dragover ? "dragover" : undefined,
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), "combobox-listitem", {
      alias: "atom",
      style: function style(states) {
        var padding = ville.global.spacing.S;
        if (states.lead) {
          padding = [9, 9, 9, 13];
        }
        if (states.dragover) {
          padding[2] -= 2;
        }
        var icon;
        var backgroundColor;
        if (states.selected) {
          backgroundColor = "transparent";
          icon = ville.theme.fluent.Image.URLS["checkbox-checked"];
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (states.selected && states.hovered) {
          backgroundColor = "NeutralBackground1Hover";
          icon = ville.theme.fluent.Image.URLS["checkbox-checked"];
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (states.hovered && !states.selected) {
          backgroundColor = "NeutralBackground1Hover";
          icon = ville.theme.fluent.Image.URLS["blank"];
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (!states.hovered && !states.selected) {
          backgroundColor = "transparent";
          icon = ville.theme.fluent.Image.URLS["blank"];
        }
        return {
          icon: icon,
          gap: 4,
          padding: padding,
          backgroundColor: backgroundColor,
          textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForeground1",
          decorator: states.lead ? "lead-item" : states.dragover ? "dragover" : "combobox-listitem",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), "combobox-listitem/icon", {
      include: "image",
      style: function style(states) {
        return {
          width: 22,
          height: 22
        };
      }
    }), "slider", {
      include: "combobox",
      style: function style(states) {
        return {
          padding: [6, 0, 2, 0],
          cursor: "pointer"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "slider/knob", {
      style: function style(states) {
        var decorator = "slider-knob";
        if (states.disabled) {
          decorator += "-disabled";
        }
        return {
          height: 18,
          width: 18,
          backgroundColor: !states.disabled ? "CompoundBrandForeground1" : "NeutralStrokeDisabled",
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          maxHeight: 18,
          maxWidth: 18
        };
      }
    }), "button-frame", {
      alias: "atom",
      style: function style(states) {
        var decorator = "button-box";
        var bgcolor = "Background1";
        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            bgcolor = "Background1Hover";
            decorator = "button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            bgcolor = "Background1Pressed";
            decorator = "button-box-pressed";
          } else if (states.pressed || states.checked) {
            bgcolor = "Background1Pressed";
          }
        }
        if (states.invalid && !states.disabled) {
          decorator += "-invalid";
        } /*else if (states.focused) {
          decorator += "-focused";
          }*/

        return {
          decorator: decorator,
          cursor: states.disabled ? undefined : "pointer",
          backgroundColor: bgcolor,
          font: "button"
        };
      }
    }), "button-frame/label", {
      alias: "atom/label",
      style: function style(states) {
        return {
          textColor: states.disabled ? "text-disabled" : "NeutralForeground1",
          font: "button"
        };
      }
    }), "button", {
      alias: "button-frame",
      include: "button-frame",
      style: function style(states, styles) {
        return {
          backgroundColor: "Neutral" + styles.backgroundColor,
          center: true,
          padding: [ville.global.spacing.SNudge, ville.global.spacing.M],
          gap: 8
        };
      }
    }), "toggle-button", "button"), "hover-button", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          backgroundColor: states.hovered ? "NeutralBackground1Pressed" : "NeutralBackground1"
        };
      }
    }), "menubutton", {
      include: "button",
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          iconPosition: "right"
        };
      }
    }), "menubutton/icon", "combobox/button/icon"), "default-rounded-button", {
      include: "button-frame",
      alias: "button-frame",
      style: function style(states, styles) {
        return {
          decorator: "rounded-" + styles.decorator,
          backgroundColor: "Neutral" + styles.backgroundColor,
          center: true,
          padding: [ville.global.spacing.SNudge, ville.global.spacing.M],
          gap: 8
        };
      }
    }), "primary-button", {
      include: "button-frame",
      style: function style(states, styles) {
        return {
          decorator: "primary-" + styles.decorator,
          backgroundColor: "Brand" + styles.backgroundColor,
          center: true,
          padding: [ville.global.spacing.SNudge, ville.global.spacing.M],
          gap: 8
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "primary-button/label", {
      alias: "button/label",
      style: function style(states) {
        return {
          textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForegroundOnBrand"
        };
      }
    }), "primary-button/embed", {
      include: "icon",
      style: function style(states) {
        return {
          textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForegroundOnBrand"
        };
      }
    }), "primary-rounded-button", {
      include: "button-frame",
      style: function style(states, styles) {
        return {
          decorator: "primary-rounded-" + styles.decorator,
          backgroundColor: "Brand" + styles.backgroundColor,
          center: true,
          padding: [ville.global.spacing.SNudge, ville.global.spacing.M],
          gap: 8
        };
      }
    }), "primary-rounded-button/label", {
      alias: "button/label",
      style: function style(states) {
        return {
          textColor: states.disabled ? "text-disabled" : "NeutralForegroundOnBrand"
        };
      }
    }), "secondary-button-frame", {
      include: "button-frame",
      style: function style(states) {
        var bgcolor = "secondary-button-box";
        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            bgcolor = "secondary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            bgcolor = "secondary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            bgcolor = "secondary-button-box-pressed";
          }
        }
        return {
          backgroundColor: bgcolor
        };
      }
    }), "secondary-button", {
      alias: "secondary-button-frame",
      include: "secondary-button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18],
          textColor: "secondary-button-text"
        };
      }
    }), "tertiary-button-frame", {
      include: "button-frame",
      style: function style(states) {
        var bgcolor = "tertiary-button-box";
        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            bgcolor = "tertiary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            bgcolor = "tertiary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            bgcolor = "tertiary-button-box-pressed";
          }
        }
        return {
          backgroundColor: bgcolor
        };
      }
    }), "tertiary-button", {
      alias: "tertiary-button-frame",
      include: "tertiary-button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18],
          textColor: "tertiary-button-text"
        };
      }
    }), "splitbutton", {}), "splitbutton/button", {
      alias: "button",
      include: "button",
      style: function style(states, styles) {
        return {
          decorator: "split" + styles.decorator + "-left"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "splitbutton/arrow", {
      alias: "menubutton",
      include: "menubutton",
      style: function style(states, styles) {
        return {
          icon: ville.theme.fluent.Image.URLS["chevron-down"],
          decorator: "split" + styles.decorator + "-arrow",
          padding: [ville.global.spacing.SNudge, ville.global.spacing.XS]
        };
      }
    }), "splitbutton/arrow/icon", {
      include: "combobox/button/icon",
      style: function style() {
        return {
          width: 12,
          height: 12
        };
      }
    }), "splitbutton-menu", {
      include: "menu",
      style: function style(states) {
        var result = {
          position: "bottom-right"
        };
        return result;
      }
    }), "groupbox", {}), "groupbox/legend", {
      alias: "atom",
      style: function style(states) {
        return {
          textColor: states.invalid ? "invalid" : undefined,
          padding: 5,
          margin: 4,
          font: "groupbox-legend"
        };
      }
    }), "groupbox/frame", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1",
          padding: [6, 9],
          margin: [18, 2, 2, 2],
          decorator: "textfield-common"
        };
      }
    }), "check-groupbox", "groupbox"), "check-groupbox/legend", {
      alias: "checkbox",
      include: "checkbox",
      style: function style(states) {
        return {
          textColor: states.invalid ? "invalid" : undefined,
          padding: 5,
          margin: 4,
          font: "bold"
        };
      }
    }), "radio-groupbox", "groupbox"), "radio-groupbox/legend", {
      alias: "radiobutton",
      include: "radiobutton",
      style: function style(states) {
        return {
          textColor: states.invalid ? "invalid" : undefined,
          padding: 5,
          margin: 4,
          font: "bold"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "tree", {
      include: "list",
      alias: "list",
      style: function style(states, styles) {
        //TEMP delete. remove later
        delete styles.spacing;
        return {
          contentPadding: states.invalid && !states.disabled ? [3, 0] : [4, 1],
          padding: states.focused ? 0 : 0
        };
      }
    }), "tree-folder/open", {
      include: "image",
      style: function style(states) {
        return {
          source: "",
          decorator: states.opened ? "ville-icon-triangle-bottom-right" : "ville-icon-arrow-right",
          margin: states.opened ? [4, 0, 0, 0] : [0, 0, 0, 0],
          padding: states.opened ? [4, 0, 0, 0] : [0, 0, 0, 0],
          alignX: "left",
          width: 0,
          height: 0
        };
      }
    }), "tree-folder", {
      style: function style(states) {
        return {
          padding: [3, 8, 3, 5],
          icon: states.opened ? ville.theme.fluent.Image.URLS["tree-folder-open"] : ville.theme.fluent.Image.URLS["tree-folder"],
          iconOpened: ville.theme.fluent.Image.URLS["tree-folder-open"],
          backgroundColor: states.selected ? "NeutralBackground1Selected" : undefined,
          opacity: states.drag ? 0.5 : undefined,
          cursor: "pointer"
        };
      }
    }), "tree-folder/icon", {
      include: "image",
      style: function style(states) {
        return {
          marginLeft: 6,
          width: 18,
          height: 18
        };
      }
    }), "tree-folder/label", {
      include: "label",
      style: function style(states) {
        return {
          padding: [1, 4],
          textColor: states.disabled ? "NeutralStrokeDisabled" : "NeutralForeground1"
        };
      }
    }), "tree-file", {
      include: "tree-folder",
      alias: "tree-folder",
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["tree-file"],
          opacity: states.drag ? 0.5 : undefined,
          cursor: "pointer"
        };
      }
    }), "tree-file/icon", {
      include: "image",
      style: function style(states) {
        return {
          //padding : [0, 4, 0, 0],
          width: 18,
          height: 18,
          scale: true
        };
      }
    }), "window", {
      style: function style(states) {
        return {
          contentPadding: [0, 24, 24, 24],
          backgroundColor: "NeutralBackground1",
          decorator: states.maximized ? undefined : "window"
        };
      }
    }), "window-resize-frame", "resize-frame"), "window/captionbar", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1",
          padding: 24,
          decorator: "window-caption"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "window/icon", {
      style: function style(states) {
        return {
          marginRight: 4,
          alignY: "middle"
        };
      }
    }), "window/title", {
      style: function style(states) {
        return {
          cursor: "default",
          font: "window-header",
          textColor: states.disabled ? "NeutralForegroundDisabled" : "NeutralForeground1",
          alignY: "middle"
        };
      }
    }), "window/minimize-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          padding: [7, 3, 0, 0],
          marginRight: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), "window/minimize-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          backgroundColor: "NeutralForeground1",
          width: 12,
          height: 2
          //backgroundColor : states.hovered ? "red" : "blue",
          //width : 20,
          //height : 20,
          //clipPath : 'path("M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm9.78-1.52a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.72 5.72 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z")'
        };
      }
    }), "window/restore-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          //padding : [ 1, 2 ],
          marginRight: 5,
          marginLeft: 5,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), "window/restore-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          width: 12,
          height: 12,
          decorator: "window-button-restore-icon"
        };
      }
    }), "window/maximize-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          //padding : [ 1, 2 ],
          marginRight: 6,
          marginLeft: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), "window/maximize-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "window-button-maximize-icon",
          width: 14,
          height: 14
        };
      }
    }), "window/close-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: ville.theme.fluent.Image.URLS["window-dismiss"],
          width: 24,
          height: 24,
          //paddingBottom : 4,
          marginLeft: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), "window/close-button/icon", "image"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "window/statusbar", {
      style: function style(states) {
        return {
          decorator: "window-statusbar",
          padding: [4, 12]
        };
      }
    }), "window/statusbar-text", "label"), "datechooser", {
      style: function style(states) {
        return {
          decorator: "main",
          minWidth: 220
        };
      }
    }), "datechooser/navigation-bar", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1",
          textColor: states.disabled ? "NeutralForegroundDisabled" : states.invalid ? "invalid" : "NeutralForeground1",
          padding: [2, 10]
        };
      }
    }), "datechooser/last-year-button-tooltip", "tooltip"), "datechooser/last-month-button-tooltip", "tooltip"), "datechooser/next-year-button-tooltip", "tooltip"), "datechooser/next-month-button-tooltip", "tooltip"), "datechooser/last-year-button", "datechooser/button"), "datechooser/last-month-button", "datechooser/button"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "datechooser/next-year-button", "datechooser/button"), "datechooser/next-month-button", "datechooser/button"), "datechooser/button/icon", {}), "datechooser/last-month-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-left-small",
          width: 0,
          height: 0
        };
      }
    }), "datechooser/last-year-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-rewind",
          width: 0,
          height: 0
        };
      }
    }), "datechooser/next-month-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-right-small",
          width: 0,
          height: 0
        };
      }
    }), "datechooser/next-year-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-forward",
          width: 0,
          height: 0
        };
      }
    }), "datechooser/button", {
      style: function style(states) {
        var result = {
          backgroundColor: "NeutralBackground1",
          width: 14,
          show: "icon",
          cursor: states.disabled ? undefined : "pointer"
        };
        if (states.lastYear) {
          result.icon = "";
        } else if (states.lastMonth) {
          result.paddingLeft = 4;
          result.marginLeft = 6;
          result.icon = "";
        } else if (states.nextYear) {
          result.icon = "";
          result.paddingLeft = 6;
        } else if (states.nextMonth) {
          result.icon = "";
          result.paddingLeft = 4;
          result.marginRight = 6;
        }
        return result;
      }
    }), "datechooser/month-year-label", {
      style: function style(states) {
        return {
          font: "datechooser-bold",
          textAlign: "center",
          textColor: "NeutralForeground1"
        };
      }
    }), "datechooser/date-pane", {
      style: function style(states) {
        return {
          decorator: "datechooser-date-pane",
          backgroundColor: "NeutralBackground1"
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "datechooser/weekday", {
      style: function style(states) {
        return {
          decorator: "datechooser-weekday",
          font: "datechooser-bold",
          textAlign: "center",
          textColor: states.disabled ? "NeutralForegroundDisabled" : states.weekend ? "NeutralForeground1" : "NeutralForegroundInverted",
          backgroundColor: states.weekend ? "NeutralBackground1" : "BrandForeground1",
          paddingTop: 2
        };
      }
    }), "datechooser/day", {
      style: function style(states) {
        return {
          textAlign: "center",
          decorator: states.today ? "main" : undefined,
          textColor: states.disabled ? "NeutralForegroundDisabled" : states.selected ? "NeutralForegroundInverted" : states.otherMonth ? "NeutralForegroundDisabled" : "NeutralForeground1",
          font: "datechooser",
          backgroundColor: states.disabled ? undefined : states.selected ? "BrandForeground1" : undefined,
          padding: states.today ? [1, 3] : [2, 4]
        };
      }
    }), "datechooser/week", {
      style: function style(states) {
        return {
          textAlign: "center",
          textColor: "NeutralForeground1",
          font: "datechooser-bold",
          padding: [2, 4],
          decorator: states.header ? "datechooser-week-header" : "datechooser-week"
        };
      }
    }), "progressbar", {
      style: function style(states) {
        return {
          decorator: "progressbar",
          padding: 0,
          backgroundColor: "NeutralBackground6",
          //width : 200,
          height: 4
        };
      }
    }), "progressbar-trans", {
      include: "progressbar",
      style: function style(states) {
        return {
          decorator: "progressbar-trans",
          backgroundColor: "transparent"
        };
      }
    }), "progressbar/progress", {
      style: function style(states) {
        return {
          backgroundColor: "CompoundBrandBackground",
          decorator: "progressbar"
        };
      }
    }), "toolbar", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1",
          padding: [4, 0, 4, 0]
        };
      }
    }), "toolbar/part", {
      style: function style(states) {
        return {
          margin: [0, 15]
        };
      }
    }), "toolbar/part/container", {}), "toolbar/part/handle", {}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "toolbar-separator", {
      style: function style(states) {
        return {
          decorator: "toolbar-separator",
          margin: [7, 0],
          width: 4
        };
      }
    }), "toolbar-button", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), "toolbar-menubutton", {
      alias: "toolbar-button",
      include: "toolbar-button",
      style: function style(states) {
        return {
          showArrow: true
        };
      }
    }), "toolbar-menubutton/arrow", {
      include: "splitbutton/arrow/icon",
      style: function style(states) {
        return {
          source: ville.theme.fluent.Image.URLS["chevron-down"]
        };
      }
    }), "toolbar-splitbutton", {}), "toolbar-splitbutton/button", "splitbutton/button"), "toolbar-splitbutton/arrow", "splitbutton/arrow"), "toolbar-splitbutton/arrow/icon", "splitbutton/arrow/icon"), "tabview", {}), "tabview/bar", {
      style: function style(states) {
        return {
          margin: 4
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "tabview/bar/button-forward", {
      include: "slidebar/button-forward",
      alias: "slidebar/button-forward",
      style: function style(states) {
        if (states.barTop) {
          return {
            marginTop: 4,
            marginBottom: 2
          };
        } else if (states.barBottom) {
          return {
            marginTop: 2,
            marginBottom: 4
          };
        } else if (states.barLeft) {
          return {
            marginLeft: 4,
            marginRight: 2
          };
        } else {
          return {
            marginLeft: 2,
            marginRight: 4
          };
        }
      }
    }), "tabview/bar/button-backward", {
      include: "slidebar/button-backward",
      alias: "slidebar/button-backward",
      style: function style(states) {
        if (states.barTop) {
          return {
            marginTop: 4,
            marginBottom: 2
          };
        } else if (states.barBottom) {
          return {
            marginTop: 2,
            marginBottom: 4
          };
        } else if (states.barLeft) {
          return {
            marginLeft: 4,
            marginRight: 2
          };
        } else {
          return {
            marginLeft: 2,
            marginRight: 4
          };
        }
      }
    }), "tabview/pane", {
      style: function style(states) {
        return {
          backgroundColor: "NeutralBackground1",
          decorator: "main",
          padding: 10
        };
      }
    }), "tabview-page", "widget"), "tabview-page/button", {
      style: function style(states) {
        var decorator;
        var padding;
        var margin;

        // default padding
        if (states.barTop) {
          padding = [10, 1, 10, 1]; //[12, 18, 12, 15];
          margin = states.firstTab ? [0, 26, 0, 0] : [0, 26];
        } else if (states.barBottom) {
          padding = [10, 1, 10, 1]; //[12, 8, 12, 8];
          margin = states.firstTab ? [0, 26, 0, 0] : [0, 26];
        } else if (states.barLeft) {
          padding = [1, 16, 1, 10]; //[12, 8, 12, 8];
          margin = [16, 0];
        } else {
          padding = [1, 10, 1, 16];
          margin = [16, 0];
        }

        // decorator
        if (!states.disabled) {
          if (states.hovered && !states.checked) {
            if (states.barTop) {
              decorator = "tabview-page-button-top-hovered";
              padding[2] -= 4;
            } else if (states.barBottom) {
              decorator = "tabview-page-button-bottom-hovered";
              padding[0] -= 4;
            } else if (states.barRight) {
              decorator = "tabview-page-button-right-hovered";
              padding[1] -= 4;
            } else if (states.barLeft) {
              decorator = "tabview-page-button-left-hovered";
              padding[3] -= 4;
            }
          } else if (states.checked) {
            if (states.barTop) {
              decorator = "tabview-page-button-top";
              padding[2] -= 4;
            } else if (states.barBottom) {
              decorator = "tabview-page-button-bottom";
              padding[0] -= 4;
            } else if (states.barRight) {
              decorator = "tabview-page-button-right";
              padding[1] -= 4;
            } else if (states.barLeft) {
              decorator = "tabview-page-button-left";
              padding[3] -= 4;
            }
          }
        } else {
          if (states.checked) {
            if (states.barTop) {
              decorator = "tabview-page-button-top-disabled";
              padding[2] -= 4;
            } else if (states.barBottom) {
              decorator = "tabview-page-button-bottom-disabled";
              padding[0] -= 4;
            } else if (states.barRight) {
              decorator = "tabview-page-button-right-disabled";
              padding[1] -= 4;
            } else if (states.barLeft) {
              decorator = "tabview-page-button-left-disabled";
              padding[3] -= 4;
            }
          }
        }
        return {
          zIndex: states.checked ? 10 : 5,
          decorator: decorator,
          //backgroundColor: "NeutralBackground1",
          textColor: states.disabled ? "text-disabled" : "NeutralForeground1",
          font: states.checked ? "button" : "default",
          padding: padding,
          //[10, 16, 4, 16],
          cursor: "pointer",
          margin: margin
          //opacity : states.disabled ? .8 : 1
        };
      }
    }), "tabview-page/button/label", {
      alias: "label",
      style: function style(states) {
        return {
          padding: 0 //[2, 1, 2, 1]
        };
      }
    }), "tabview-page/button/icon", "image"), "tabview-page/button/close-button", {
      alias: "atom",
      style: function style(states) {
        return {
          cursor: states.disabled ? undefined : "pointer",
          marginLeft: 12,
          icon: states.hovered ? ville.theme.fluent.Image.URLS["tabview-close-hovered"] : ville.theme.fluent.Image.URLS["tabview-close"]
        };
      }
    }), "tabview-page/button/close-button/icon", "image"), "tabviewspacebar", {}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "tabviewspacebar/bar", "tabview/bar"), "tabviewspacebar/bar/button-forward", "tabview/bar/button-forward"), "tabviewspacebar/bar/button-backward", "tabview/bar/button-backward"), "tabviewspacebar/pane", {
      style: function style(states) {
        var margin;
        if (states.barTop) {
          margin = [10, 0, 0, 0];
        } else if (states.barBottom) {
          margin = [0, 0, 10, 0];
        } else if (states.barRight) {
          margin = [0, 10, 0, 0];
        } else if (states.barLeft) {
          margin = [0, 0, 0, 10];
        }
        return {
          backgroundColor: "background",
          decorator: "main",
          margin: margin,
          padding: 10
        };
      }
    }), "tabviewspacebar-page", "tabview-page"), "tabviewspacebar-page/button", {
      include: "tabview-page/button",
      style: function style(states) {
        var decorator;

        // default padding
        if (states.barTop || states.barBottom) {
          var padding = [12, 18, 12, 15];
        } else {
          var padding = [12, 8, 12, 8];
        }

        // decorator
        if (states.checked) {
          if (states.barTop) {
            decorator = "tabviewspacebar-page-button-top";
          } else if (states.barBottom) {
            decorator = "tabviewspacebar-page-button-bottom";
          } else if (states.barRight) {
            decorator = "tabviewspacebar-page-button-right";
          } else if (states.barLeft) {
            decorator = "tabviewspacebar-page-button-left";
          }
        } else {
          for (var i = 0; i < padding.length; i++) {
            padding[i] += 1;
          }
          // reduce the size by 1 because we have different decorator border width
          if (states.barTop) {
            padding[2] += 2;
            padding[1] -= 1;
            padding[3] -= 1;
            padding[0] -= 1;
          } else if (states.barBottom) {
            padding[0] += 2;
            padding[1] -= 1;
            padding[3] -= 1;
          } else if (states.barRight) {
            padding[3] += 2;
            padding[0] -= 1;
            padding[2] -= 1;
          } else if (states.barLeft) {
            padding[1] += 2;
            padding[0] -= 1;
            padding[2] -= 1;
            padding[3] -= 1;
          }
        }
        return {
          decorator: decorator,
          padding: padding
        };
      }
    }), "tabviewspacebar-page/button/label", "tabview-page/button/label"), "tabviewspacebar-page/button/icon", "tabview-page/button/icon"), "tabviewspacebar-page/button/close-button", "tabview-page/button/close-button"), "tabviewspot", {}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "tabviewspot/bar", "tabviewspacebar/bar"), "tabviewspot/bar/button-forward", "tabviewspacebar/bar/button-forward"), "tabviewspot/bar/button-backward", "tabviewspacebar/bar/button-backward"), "tabviewspot/pane", "tabviewspacebar/pane"), "tabviewspot-page", "tabviewspacebar-page"), "tabviewspot-page/button", {
      include: "tabviewspacebar-page/button",
      style: function style(states) {
        var decorator;

        // default padding
        if (states.barTop || states.barBottom) {
          var padding = [8, 15, 8, 15];
        } else {
          var padding = [8, 8, 8, 8];
        }

        // decorator
        if (states.checked) {
          decorator = "tabviewspot-page-button-top";
        } else if (states.hovered) {
          decorator = "tabviewspot-page-button-top-hovered";
        }
        return {
          decorator: decorator,
          padding: padding
        };
      }
    }), "tabviewspot-page/button/label", "tabviewspacebar-page/button/label"), "tabviewspot-page/button/icon", "tabviewspacebar-page/button/icon"), "tabviewspot-page/button/close-button", "tabviewspacebar-page/button/close-button"), "colorpopup", {
      alias: "popup",
      include: "popup",
      style: function style(states) {
        return {
          padding: 5
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "colorpopup/field", {
      style: function style(states) {
        return {
          margin: 2,
          width: 14,
          height: 14,
          backgroundColor: "background",
          decorator: "main-dark"
        };
      }
    }), "colorpopup/selector-button", "button"), "colorpopup/auto-button", "button"), "colorpopup/preview-pane", "groupbox"), "colorpopup/current-preview", {
      style: function style(state) {
        return {
          height: 20,
          padding: 4,
          marginLeft: 4,
          decorator: "main-dark",
          allowGrowX: true
        };
      }
    }), "colorpopup/selected-preview", {
      style: function style(state) {
        return {
          height: 20,
          padding: 4,
          marginRight: 4,
          decorator: "main-dark",
          allowGrowX: true
        };
      }
    }), "colorpopup/colorselector-okbutton", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          icon: "icon/16/actions/dialog-ok.png"
        };
      }
    }), "colorpopup/colorselector-cancelbutton", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          icon: "icon/16/actions/dialog-cancel.png"
        };
      }
    }), "colorselector", "widget"), "colorselector/control-bar", "widget"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "colorselector/visual-pane", "groupbox"), "colorselector/control-pane", "widget"), "colorselector/preset-grid", "widget"), "colorselector/colorbucket", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          width: 16,
          height: 16
        };
      }
    }), "colorselector/preset-field-set", "groupbox"), "colorselector/input-field-set", {
      include: "groupbox",
      alias: "groupbox",
      style: function style() {
        return {
          paddingTop: 12
        };
      }
    }), "colorselector/preview-field-set", {
      include: "groupbox",
      alias: "groupbox",
      style: function style() {
        return {
          paddingTop: 12
        };
      }
    }), "colorselector/hex-field-composite", "widget"), "colorselector/hex-field", "textfield"), "colorselector/rgb-spinner-composite", "widget"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "colorselector/rgb-spinner-red", "spinner"), "colorselector/rgb-spinner-green", "spinner"), "colorselector/rgb-spinner-blue", "spinner"), "colorselector/hsb-spinner-composite", "widget"), "colorselector/hsb-spinner-hue", "spinner"), "colorselector/hsb-spinner-saturation", "spinner"), "colorselector/hsb-spinner-brightness", "spinner"), "colorselector/preview-content-old", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          width: 50,
          height: 25
        };
      }
    }), "colorselector/preview-content-new", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          backgroundColor: "background",
          width: 50,
          height: 25
        };
      }
    }), "colorselector/hue-saturation-field", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          margin: 5
        };
      }
    }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_appearances, "colorselector/brightness-field", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          margin: [5, 7]
        };
      }
    }), "colorselector/hue-saturation-pane", "widget"), "colorselector/hue-saturation-handle", "widget"), "colorselector/brightness-pane", "widget"), "colorselector/brightness-handle", "widget"), "app-header", {
      style: function style(states) {
        return {
          font: "headline",
          textColor: "text-selected",
          backgroundColor: "background-selected-dark",
          padding: [8, 12]
        };
      }
    }), "app-header-title", {
      style: function style(states) {
        return {
          padding: [4, 8]
        };
      }
    }), "app-header-label", {
      style: function style(states) {
        return {
          paddingTop: 5,
          paddingBottom: 2
        };
      }
    }), "app-splitpane", {
      alias: "splitpane",
      style: function style(states) {
        return {
          padding: [0, 10, 10, 10],
          backgroundColor: "light-background"
        };
      }
    }), "list-search-highlight", {
      style: function style(states) {
        return {
          backgroundColor: 'rgba(255, 251, 0, 0.53)',
          textDecorationStyle: 'dotted',
          textDecorationLine: 'underline'
        };
      }
    }))
  });
  ville.theme.fluent.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
