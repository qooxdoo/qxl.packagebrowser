function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var _appearances;

  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "ville.theme.clean.Image": {}
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
   * The Clean appearance theme.
   * @asset(qx/icon/${qx.icontheme}/22/apps/office-calendar.png)
   * 
   */
  qx.Theme.define("ville.theme.clean.Appearance", {
    appearances: (_appearances = {
      /*
      ---------------------------------------------------------------------------
        CORE
      ---------------------------------------------------------------------------
      */
      "widget": {},
      "label": {
        style: function style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : undefined
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
      "atom": {},
      "atom/label": "label",
      "atom/icon": "image",
      "root": {
        style: function style(states) {
          return {
            backgroundColor: "background",
            textColor: "text",
            font: "default"
          };
        }
      },
      "popup": {
        style: function style(states) {
          return {
            decorator: "popup",
            backgroundColor: "background-pane"
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
              source: ville.theme.clean.Image.URLS["cursor-" + icon],
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
              source: ville.theme.clean.Image.URLS["cursor-" + icon],
              decorator: "cursor-" + icon,
              position: "right-top",
              offset: [2, 16, 2, 6]
            };
          } else {
            icon = "nodrop";
            retval = {
              source: ville.theme.clean.Image.URLS["cursor-" + icon],
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
            icon: ville.theme.clean.Image.URLS["arrow-" + (states.vertical ? "down" : "right")],
            padding: [10, 12]
          };
        }
      },
      "slidebar/button-backward": {
        alias: "button",
        include: "button",
        style: function style(states) {
          return {
            icon: ville.theme.clean.Image.URLS["arrow-" + (states.vertical ? "up" : "left")],
            padding: [10, 12]
          };
        }
      },

      /*
      ---------------------------------------------------------------------------
        TABLE
      ---------------------------------------------------------------------------
      */
      "table": {
        include: "widget",
        style: function style(states) {
          return {
            decorator: "table-standard"
          };
        }
      },
      "table/statusbar": {
        style: function style(states) {
          return {
            decorator: "statusbar",
            padding: [14, 10],
            backgroundColor: "table-header"
          };
        }
      },
      "table/column-button": {
        alias: "button",
        style: function style(states) {
          return {
            decorator: "table-header-column-button",
            padding: [14, 12],
            backgroundColor: "table-header",
            icon: ""
          };
        }
      },
      "table/column-button/icon": {
        alias: "image",
        style: function style(states) {
          return {
            width: 12,
            height: 14,
            backgroundColor: states.hovered ? "black" : "gray",
            decorator: states.hovered ? "select-column-order-hovered-vert" : "select-column-order-vert"
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
      "table-scroller/scrollbar-x": "scrollbar",
      "table-scroller/scrollbar-y": "scrollbar",
      "table-scroller": "widget",
      "table-scroller/header": {
        style: function style() {
          return {
            decorator: "table-header",
            backgroundColor: "table-header"
          };
        }
      },
      "table-scroller/pane": {
        style: function style(states) {
          return {
            decorator: "table-pane"
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
            backgroundColor: "button-border",
            width: 3
          };
        }
      },
      "table-header-cell": {
        alias: "atom",
        style: function style(states) {
          return {
            decorator: states.first ? "table-header-cell-first" : "table-header-cell",
            minWidth: 13,
            font: "groupbox-legend",
            alignY: "middle",
            padding: [14, 10],
            cursor: states.disabled ? undefined : "pointer",
            sortIcon: states.sorted ? ville.theme.clean.Image.URLS["" + (states.sortedAscending ? "arrow-up" : "arrow-down")] : undefined
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
    }, _defineProperty(_appearances, "table-header-cell/sort-icon", {
      style: function style(states) {
        return {
          alignY: "middle",
          alignX: "right"
        };
      }
    }), _defineProperty(_appearances, "table-editor-textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          padding: [2, 2]
        };
      }
    }), _defineProperty(_appearances, "table-editor-selectbox", {
      include: "selectbox",
      alias: "selectbox",
      style: function style(states) {
        return {
          padding: [0, 2]
        };
      }
    }), _defineProperty(_appearances, "table-editor-combobox", {
      include: "combobox",
      alias: "combobox",
      style: function style(states) {
        return {
          decorator: undefined
        };
      }
    }), _defineProperty(_appearances, "progressive-table-header", {
      style: function style(states) {
        return {
          decorator: "progressive-table-header"
        };
      }
    }), _defineProperty(_appearances, "progressive-table-header-cell", {
      style: function style(states) {
        return {
          decorator: "progressive-table-header-cell",
          padding: [5, 6, 5, 6]
        };
      }
    }), _defineProperty(_appearances, "treevirtual", {
      include: "textfield",
      alias: "table",
      style: function style(states, superStyles) {
        return {
          padding: [superStyles.padding[0] + 2, superStyles.padding[1] + 1]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-folder", {
      style: function style(states) {
        return {
          icon: states.opened ? "icon/16/places/folder-open.png" : "icon/16/places/folder.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "treevirtual-file", {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",
      style: function style(states) {
        return {
          icon: "icon/16/mimetypes/text-plain.png",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "treevirtual-line", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-line"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["tree-minus"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["tree-plus"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-only-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-minus-only"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-only-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-plus-only"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-start-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-minus-start"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-start-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-plus-start"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-end-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-minus-end"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-end-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-plus-end"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-cross-contract", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-minus-cross"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-cross-expand", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-plus-cross"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-end", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-end"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-cross", {
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["treevirtual-cross"]
        };
      }
    }), _defineProperty(_appearances, "treevirtual-node-editor-textfield", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          padding: [2, 2]
        };
      }
    }), _defineProperty(_appearances, "resizer", {
      style: function style(states) {
        return {
          decorator: "main-dark"
        };
      }
    }), _defineProperty(_appearances, "splitpane", {}), _defineProperty(_appearances, "splitpane/splitter", {
      style: function style(states) {
        return {
          backgroundColor: "light-background"
        };
      }
    }), _defineProperty(_appearances, "splitpane/splitter/knob", {
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
    }), _defineProperty(_appearances, "splitpane/slider", {
      style: function style(states) {
        return {
          backgroundColor: "border-light-shadow",
          opacity: 0.3
        };
      }
    }), _defineProperty(_appearances, "menu", {
      style: function style(states) {
        var result = {
          backgroundColor: "background",
          decorator: "popup",
          spacingX: 12,
          spacingY: 0,
          iconColumnWidth: 16,
          arrowColumnWidth: 8,
          padding: 0,
          placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align",
          offset: [8, 0, 0, 0]
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
    }), _defineProperty(_appearances, "menu/slidebar", "menu-slidebar"), _defineProperty(_appearances, "menu-slidebar", "widget"), _defineProperty(_appearances, "menu-slidebar-button", {
      style: function style(states) {
        return {
          backgroundColor: states.hovered ? "button-box-bright-hovered" : undefined,
          padding: 6,
          center: true
        };
      }
    }), _defineProperty(_appearances, "menu-slidebar/button-backward", {
      include: "menu-slidebar-button",
      style: function style(states) {
        return {
          icon: ""
        };
      }
    }), _defineProperty(_appearances, "menu-slidebar/button-backward/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-up",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "menu-slidebar/button-forward", {
      include: "menu-slidebar-button",
      style: function style(states) {
        return {
          icon: ""
        };
      }
    }), _defineProperty(_appearances, "menu-slidebar/button-forward/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: "ville-icon-arrow-down",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "menu-separator", {
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
    }), _defineProperty(_appearances, "menu-button", {
      alias: "atom",
      style: function style(states) {
        return {
          backgroundColor: states.selected ? "combobox-item-selected" : undefined,
          textColor: states.selected ? "text-selected" : "text",
          padding: [6, 6]
        };
      }
    }), _defineProperty(_appearances, "menu-button-header", {
      include: "menu-button",
      style: function style(states) {
        return {
          textColor: states.disabled ? "text-selected" : "text",
          font: "bold",
          padding: [8, 6]
        };
      }
    }), _defineProperty(_appearances, "menu-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          alignY: "middle",
          marginLeft: 14
        };
      }
    }), _defineProperty(_appearances, "menu-button-header/icon", {
      include: "menu-button/icon",
      style: function style(states) {
        return {
          marginLeft: 6
        };
      }
    }), _defineProperty(_appearances, "menu-button/label", {
      include: "label",
      style: function style(states) {
        return {
          alignY: "middle",
          padding: 1
        };
      }
    }), _defineProperty(_appearances, "menu-button-header/label", {
      include: "menu-button/label",
      style: function style(states) {
        return {
          alignY: "middle",
          padding: [1, 1, 1, 0],
          marginLeft: -10
        };
      }
    }), _defineProperty(_appearances, "menu-button/shortcut", {
      include: "label",
      style: function style(states) {
        return {
          alignY: "middle",
          marginLeft: 14,
          padding: 1
        };
      }
    }), _defineProperty(_appearances, "menu-button/arrow", {
      include: "image",
      style: function style(states) {
        return {
          source: "",
          decorator: "ville-icon-arrow-right",
          alignY: "middle",
          marginLeft: 6,
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "menu-checkbox", {
      alias: "menu-button",
      include: "menu-button",
      style: function style(states) {
        return {
          icon: states.checked ? ville.theme.clean.Image.URLS["checkbox-checked"] : ville.theme.clean.Image.URLS["blank"]
        };
      }
    }), _defineProperty(_appearances, "menu-checkbox/icon", {
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
    }), _defineProperty(_appearances, "menu-radiobutton", {
      include: "menu-button",
      style: function style(states) {
        return {
          icon: !states.checked ? undefined : ville.theme.clean.Image.URLS["blank"]
        };
      }
    }), _defineProperty(_appearances, "menu-radiobutton/icon", {
      include: "image",
      style: function style(states) {
        var decorator = "menu-radiobutton";
        decorator += states.invalid && !states.disabled ? "-invalid" : "";
        return {
          decorator: decorator,
          width: 8,
          height: 8,
          backgroundColor: "text",
          marginLeft: 17
        };
      }
    }), _defineProperty(_appearances, "menubar", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          padding: [4, 2]
        };
      }
    }), _defineProperty(_appearances, "menubar-button", {
      include: "menubutton",
      style: function style(states) {
        var decorator = "button-box-blank";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "button-box-pressed-hovered";
          } else if (states.pressed || states.checked) {
            decorator = "button-box-pressed";
          }
        }

        if (states.invalid && !states.disabled) {
          decorator += "-invalid";
        } else if (states.focused) {
          decorator += "-focused";
        }

        return {
          decorator: decorator,
          font: "button"
        };
      }
    }), _defineProperty(_appearances, "virtual-list", "list"), _defineProperty(_appearances, "virtual-list/row-layer", "row-layer"), _defineProperty(_appearances, "row-layer", "widget"), _defineProperty(_appearances, "column-layer", "widget"), _defineProperty(_appearances, "group-item", {
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
    }), _defineProperty(_appearances, "virtual-selectbox", "selectbox"), _defineProperty(_appearances, "virtual-selectbox/dropdown", "selectbox/popup"), _defineProperty(_appearances, "virtual-selectbox/dropdown/list", {
      alias: "virtual-list"
    }), _defineProperty(_appearances, "virtual-combobox", "combobox"), _defineProperty(_appearances, "virtual-combobox/dropdown", "combobox/popup"), _defineProperty(_appearances, "virtual-combobox/dropdown/list", {
      alias: "virtual-list"
    }), _defineProperty(_appearances, "virtual-tree", "tree"), _defineProperty(_appearances, "virtual-tree-folder", "tree-folder"), _defineProperty(_appearances, "virtual-tree-file", "tree-file"), _defineProperty(_appearances, "cell", {
      style: function style(states) {
        return {
          backgroundColor: states.selected ? "table-row-background-selected" : "table-row-background-even",
          textColor: states.selected ? "text-selected" : "text",
          padding: [3, 6]
        };
      }
    }), _defineProperty(_appearances, "cell-string", "cell"), _defineProperty(_appearances, "cell-number", {
      include: "cell",
      style: function style(states) {
        return {
          textAlign: "right"
        };
      }
    }), _defineProperty(_appearances, "cell-image", "cell"), _defineProperty(_appearances, "cell-boolean", "cell"), _defineProperty(_appearances, "cell-atom", "cell"), _defineProperty(_appearances, "cell-date", "cell"), _defineProperty(_appearances, "cell-html", "cell"), _defineProperty(_appearances, "scrollbar", {
      style: function style(states) {
        return {
          backgroundColor: "scrollbar-bright"
        };
      }
    }), _defineProperty(_appearances, "scrollbar/slider", {}), _defineProperty(_appearances, "scrollbar/slider/knob", {
      style: function style(states) {
        var decorator = "scroll-knob";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "scroll-knob-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "scroll-knob-pressed-hovered";
          } else if (states.pressed || states.checked) {
            decorator = "scroll-knob-pressed";
          }
        }

        return {
          height: 14,
          width: 14,
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          minHeight: states.horizontal ? undefined : 20,
          minWidth: states.horizontal ? 20 : undefined
        };
      }
    }), _defineProperty(_appearances, "scrollbar/button", {
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
          icon += "up-small"; //icon += "up";

          styles.marginBottom = 2;
        } else {
          icon += "down-small"; //icon += "down";

          styles.marginTop = 2;
        }

        styles.icon = ville.theme.clean.Image.URLS["arrow-" + icon];
        styles.cursor = "pointer";
        styles.decorator = "button-box";
        return styles;
      }
    }), _defineProperty(_appearances, "scrollbar/button-begin", "scrollbar/button"), _defineProperty(_appearances, "scrollbar/button-end", "scrollbar/button"), _defineProperty(_appearances, "scrollarea/corner", {
      style: function style(states) {
        return {
          backgroundColor: "background"
        };
      }
    }), _defineProperty(_appearances, "scrollarea", "widget"), _defineProperty(_appearances, "scrollarea/pane", "widget"), _defineProperty(_appearances, "scrollarea/scrollbar-x", "scrollbar"), _defineProperty(_appearances, "scrollarea/scrollbar-y", "scrollbar"), _defineProperty(_appearances, "textfield", {
      style: function style(states) {
        var textColor;

        if (states.disabled) {
          textColor = "text-disabled";
        } else if (states.showingPlaceholder) {
          textColor = "text-placeholder";
        } else {
          textColor = undefined;
        }

        var decorator;
        var backgroundcolor = "background";

        if (states.disabled) {
          decorator = "inset";
          backgroundcolor = "background-disabled";
        } else if (states.invalid) {
          decorator = "border-invalid";
          backgroundcolor = "background-invalid";
        } else if (states.focused) {
          decorator = "focused-inset";
        } else {
          decorator = "inset";
        }

        return {
          decorator: decorator,
          padding: [9, 14],
          font: "default",
          textColor: textColor,
          backgroundColor: backgroundcolor
        };
      }
    }), _defineProperty(_appearances, "textarea", "textfield"), _defineProperty(_appearances, "textfield-form", {
      include: "textfield",
      style: function style(states) {
        return {
          decorator: states.focused ? "form-focused-inset" : "inset",
          padding: states.focused ? [9, 14, 9, 13] : [9, 14, 9, 14]
        };
      }
    }), _defineProperty(_appearances, "radiobutton", {
      style: function style(states) {
        return {
          icon: "",
          gap: 10
        };
      }
    }), _defineProperty(_appearances, "radiobutton/icon", {
      style: function style(states) {
        var decorator = "radiobutton";
        decorator += states.invalid && !states.disabled ? "-invalid" : "";
        var backgroundColor;

        if (states.disabled && states.checked) {
          backgroundColor = "background-disabled-checked";
        } else if (states.disabled) {
          backgroundColor = "background-disabled";
        } else if (states.checked) {
          backgroundColor = "text";
        }

        return {
          decorator: decorator,
          width: 14,
          height: 14,
          backgroundColor: backgroundColor
        };
      }
    }), _defineProperty(_appearances, "form-renderer-label", {
      include: "label",
      style: function style() {
        return {
          paddingTop: 3
        };
      }
    }), _defineProperty(_appearances, "checkbox", {
      alias: "atom",
      style: function style(states) {
        var icon; // Checked

        if (states.checked && !states.disabled) {
          icon = ville.theme.clean.Image.URLS["checkbox-checked"]; // Undetermined
        } else if (states.checked && states.disabled) {
          icon = ville.theme.clean.Image.URLS["checkbox-checked-disabled"];
        } else if (states.undetermined) {
          icon = ""; // Unchecked
        } else {
          icon = "";
        }

        return {
          icon: icon,
          gap: 10
        };
      }
    }), _defineProperty(_appearances, "checkbox/icon", {
      style: function style(states) {
        var decorator = "checkbox";

        if (states.focused && !states.invalid) {
          decorator = "checkbox-focused";
        }

        decorator += states.invalid && !states.disabled ? "-invalid" : "";
        var padding;
        var bckgrdcolr = "text"; // Checked

        if (states.checked) {
          padding = [0, 0, 0, 0];
          decorator = "checkbox-checked";

          if (states.focused) {
            decorator = "checkbox-checked-focused";
          }

          if (states.invalid) {
            decorator = "checkbox-checked-invalid";
          }

          if (states.disabled) {
            decorator = "checkbox-checked-disabled";
          } // Undetermined

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
            bckgrdcolr = "text-disabled";
          }
        }

        return {
          decorator: decorator,
          width: 17,
          height: 17,
          padding: padding,
          backgroundColor: states.undetermined ? bckgrdcolr : "background"
        };
      }
    }), _defineProperty(_appearances, "spinner", {
      style: function style(states) {
        return {
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    }), _defineProperty(_appearances, "spinner/textfield", "combobox/textfield"), _defineProperty(_appearances, "spinner/upbutton", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          decorator: states.hovered ? "button-box-hovered-top-right" : "button-box-top-right",
          padding: [0, 3, 0, 4],
          icon: "",
          width: 17
        };
      }
    }), _defineProperty(_appearances, "spinner/upbutton/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-up-small",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "spinner/downbutton", {
      style: function style(states) {
        return {
          icon: "",
          backgroundColor: "background",
          decorator: states.hovered ? "button-box-hovered-bottom-right" : "button-box-bottom-right",
          padding: [0, 3, 0, 4],
          width: 17
        };
      }
    }), _defineProperty(_appearances, "spinner/downbutton/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-down-small",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "selectbox", "textfield"), _defineProperty(_appearances, "selectbox/atom", "atom"), _defineProperty(_appearances, "selectbox/popup", {
      include: "popup",
      style: function style(states) {
        return {
          decorator: "selectbox-popup"
        };
      }
    }), _defineProperty(_appearances, "selectbox/list", {
      alias: "list"
    }), _defineProperty(_appearances, "selectbox/arrow", {
      include: "image",
      style: function style(states) {
        return {
          source: "",
          decorator: "ville-icon-arrow-down",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "combobox", {}), _defineProperty(_appearances, "combobox/button", {
      alias: "button-frame",
      include: "button-frame",
      style: function style(states) {
        var decorator = "button-box-right-borderless";

        if (states.hovered && !states.pressed && !states.checked) {
          decorator = "button-box-hovered-right-borderless";
        } else if (states.hovered && (states.pressed || states.checked)) {
          decorator = "button-box-pressed-right-borderless";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed-right-borderless";
        }

        return {
          icon: "",
          backgroundColor: "background",
          decorator: decorator,
          padding: [0, 5, 0, 6],
          width: 24
        };
      }
    }), _defineProperty(_appearances, "combobox/button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-down",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "combobox/popup", "popup"), _defineProperty(_appearances, "combobox/list", {
      alias: "list"
    }), _defineProperty(_appearances, "combobox/textfield", {
      include: "textfield",
      style: function style(states) {
        var decorator = "combobox-inset";

        if (states.focused) {
          decorator = "combobox-focused-inset";
        } else if (states.invalid) {
          decorator = "combobox-border-invalid";
        }

        return {
          decorator: decorator
        };
      }
    }), _defineProperty(_appearances, "datefield", "textfield"), _defineProperty(_appearances, "datefield/button", {
      style: function style(states) {
        return {
          icon: "icon/22/apps/office-calendar.png",
          padding: 0,
          backgroundColor: undefined
        };
      }
    }), _defineProperty(_appearances, "datefield/button/icon", {
      include: "image",
      style: function style(states) {
        return {
          width: 22,
          height: 24,
          padding: 2
        };
      }
    }), _defineProperty(_appearances, "datefield/textfield", {
      alias: "textfield",
      include: "textfield",
      style: function style(states) {
        return {
          decorator: undefined,
          padding: 0
        };
      }
    }), _defineProperty(_appearances, "datefield/list", {
      alias: "datechooser",
      include: "datechooser",
      style: function style(states) {
        return {
          decorator: undefined
        };
      }
    }), _defineProperty(_appearances, "list", {
      alias: "scrollarea",
      style: function style(states) {
        var textColor;

        if (states.disabled) {
          textColor = "text-disabled";
        } else if (states.showingPlaceholder) {
          textColor = "text-placeholder";
        } else {
          textColor = undefined;
        }

        var decorator;
        var padding = [2, 0];
        var backgroundcolor = "background";

        if (states.disabled) {
          decorator = "inset";
          backgroundcolor = "background-disabled";
        } else if (states.invalid) {
          decorator = "border-invalid";
          backgroundcolor = "background-invalid";
        } else if (states.focused) {
          decorator = "focused-inset";
        } else {
          decorator = "inset";
        }

        return {
          decorator: decorator,
          padding: padding,
          textColor: textColor,
          backgroundColor: backgroundcolor
        };
      }
    }), _defineProperty(_appearances, "listitem", {
      alias: "atom",
      style: function style(states) {
        var padding = [10, 10, 10, 14];

        if (states.lead) {
          padding = [9, 9, 9, 13];
        }

        if (states.dragover) {
          padding[2] -= 2;
        }

        var backgroundColor;

        if (states.selected) {
          backgroundColor = "combobox-item-selected";

          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }

        return {
          gap: 4,
          padding: padding,
          backgroundColor: backgroundColor,
          textColor: states.selected ? "text-selected" : "text",
          decorator: states.lead ? "lead-item" : states.dragover ? "dragover" : undefined,
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "combobox-listitem", {
      alias: "atom",
      style: function style(states) {
        var padding = [10, 10, 10, 14];

        if (states.lead) {
          padding = [9, 9, 9, 13];
        }

        if (states.dragover) {
          padding[2] -= 2;
        }

        var backgroundColor;
        var textcolor = "text";

        if (states.selected) {
          backgroundColor = "combobox-item-selected";
          textcolor = "text-selected";

          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }

        if (states.hovered) {
          backgroundColor = "combobox-hovered";
          textcolor = "text-selected";

          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }

        return {
          gap: 4,
          padding: padding,
          backgroundColor: backgroundColor,
          textColor: textcolor,
          decorator: states.lead ? "lead-item" : states.dragover ? "dragover" : "combobox-listitem",
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "slider", {
      style: function style(states) {
        var decorator;

        if (states.disabled) {
          decorator = "inset-line";
        } else if (states.invalid) {
          decorator = "invalid-line";
        } else if (states.focused) {
          decorator = "focused-inset-line";
        } else {
          decorator = "inset-line";
        }

        return {
          decorator: decorator,
          backgroundColor: "transparent",
          padding: [0, 0]
        };
      }
    }), _defineProperty(_appearances, "slider/knob", {
      style: function style(states) {
        var decorator = "slider-knob";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "slider-knob-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "slider-knob-pressed-hovered";
          } else if (states.pressed || states.checked) {
            decorator = "slider-knob-pressed";
          }
        }

        return {
          height: 14,
          width: 14,
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          minHeight: states.horizontal ? undefined : 20,
          minWidth: states.horizontal ? 20 : undefined
        };
      }
    }), _defineProperty(_appearances, "button-frame", {
      alias: "atom",
      style: function style(states) {
        var decorator = "button-box";
        var textcolor = "button-text";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "button-box-hovered";
            textcolor = "button-text-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "button-box-pressed-hovered";
            textcolor = "button-text-hovered";
          } else if (states.pressed || states.checked) {
            decorator = "button-box-pressed";
          }
        }

        if (states.invalid && !states.disabled) {
          decorator += "-invalid";
        }
        /*else if (states.focused) {
        decorator += "-focused";
        }*/


        return {
          decorator: decorator,
          padding: [3, 8],
          cursor: states.disabled ? undefined : "pointer",
          minWidth: 5,
          minHeight: 5,
          textColor: textcolor,
          font: "button"
        };
      }
    }), _defineProperty(_appearances, "button-frame/label", {
      alias: "atom/label",
      style: function style(states) {
        return {
          textColor: states.disabled ? "text-disabled" : "button-text"
        };
      }
    }), _defineProperty(_appearances, "button", {
      alias: "button-frame",
      include: "button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18],
          gap: 8
        };
      }
    }), _defineProperty(_appearances, "toggle-button", "button"), _defineProperty(_appearances, "hover-button", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          decorator: states.hovered ? "button-hover" : undefined
        };
      }
    }), _defineProperty(_appearances, "menubutton", {
      include: "button",
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          iconPosition: "right"
        };
      }
    }), _defineProperty(_appearances, "menubutton/icon", "combobox/button/icon"), _defineProperty(_appearances, "primary-button-frame", {
      include: "button-frame",
      style: function style(states) {
        var decorator = "primary-button-box";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "primary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "primary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            decorator = "primary-button-box-pressed";
          }
        }

        return {
          decorator: decorator,
          textColor: "primary-button-text"
        };
      }
    }), _defineProperty(_appearances, "primary-button", {
      alias: "primary-button-frame",
      include: "primary-button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18]
        };
      }
    }), _defineProperty(_appearances, "secondary-button-frame", {
      include: "button-frame",
      style: function style(states) {
        var decorator = "secondary-button-box";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "secondary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "secondary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            decorator = "secondary-button-box-pressed";
          }
        }

        return {
          decorator: decorator,
          textColor: "secondary-button-text"
        };
      }
    }), _defineProperty(_appearances, "secondary-button", {
      alias: "secondary-button-frame",
      include: "secondary-button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18]
        };
      }
    }), _defineProperty(_appearances, "tertiary-button-frame", {
      include: "button-frame",
      style: function style(states) {
        var decorator = "tertiary-button-box";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            decorator = "tertiary-button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            decorator = "tertiary-button-box-pressed";
          } else if (states.pressed || states.checked) {
            decorator = "tertiary-button-box-pressed";
          }
        }

        return {
          decorator: decorator,
          textColor: "tertiary-button-text"
        };
      }
    }), _defineProperty(_appearances, "tertiary-button", {
      alias: "tertiary-button-frame",
      include: "tertiary-button-frame",
      style: function style(states) {
        return {
          center: true,
          padding: [10, 18]
        };
      }
    }), _defineProperty(_appearances, "splitbutton", {
      style: function style(states) {
        return {
          decorator: "splitbutton"
        };
      }
    }), _defineProperty(_appearances, "splitbutton/button", {
      include: "button",
      alias: "button",
      style: function style(states) {
        var decorator = "splitbutton-box";

        if (!states.disabled) {
          if (states.pressed || states.checked) {
            decorator += "-pressed";
          }

          if (states.hovered) {
            decorator += "-hovered";
          }
        }
        /*if (states.focused) {
          decorator += "-focused";
        }*/


        decorator += "-left";
        return {
          decorator: decorator,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), _defineProperty(_appearances, "splitbutton/arrow", {
      style: function style(states) {
        var decorator = "button-box";

        if (!states.disabled) {
          if (states.pressed || states.checked) {
            decorator += "-pressed";
          }

          if (states.hovered) {
            decorator += "-hovered";
          }
        }

        if (states.focused) {
          decorator += "-focused";
        }

        decorator += "-right";
        return {
          icon: "",
          decorator: decorator,
          cursor: states.disabled ? undefined : "pointer",
          padding: [3, 8]
        };
      }
    }), _defineProperty(_appearances, "splitbutton/arrow/icon", "combobox/button/icon"), _defineProperty(_appearances, "splitbutton-menu", {
      include: "menu",
      style: function style(states) {
        var result = {
          position: "bottom-right"
        };
        return result;
      }
    }), _defineProperty(_appearances, "groupbox", {}), _defineProperty(_appearances, "groupbox-connected", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          decorator: "white-box"
        };
      }
    }), _defineProperty(_appearances, "groupbox-blue-top", {}), _defineProperty(_appearances, "groupbox-orange-top", {}), _defineProperty(_appearances, "groupbox-green-top", {}), _defineProperty(_appearances, "groupbox/legend", {
      alias: "atom",
      style: function style(states) {
        return {
          textColor: states.invalid ? "invalid" : undefined,
          padding: 5,
          margin: 4,
          font: "groupbox-legend"
        };
      }
    }), _defineProperty(_appearances, "groupbox-connected/legend", "groupbox/legend"), _defineProperty(_appearances, "groupbox-blue-top/legend", "groupbox/legend"), _defineProperty(_appearances, "groupbox-orange-top/legend", "groupbox/legend"), _defineProperty(_appearances, "groupbox-green-top/legend", "groupbox/legend"), _defineProperty(_appearances, "groupbox/frame", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          padding: [6, 9],
          margin: [18, 2, 2, 2],
          decorator: "white-box"
        };
      }
    }), _defineProperty(_appearances, "groupbox-connected/frame", {
      include: "groupbox/frame",
      style: function style(states) {
        return {
          decorator: "connected-top-box"
        };
      }
    }), _defineProperty(_appearances, "groupbox-blue-top/frame", {
      include: "groupbox/frame",
      style: function style(states) {
        return {
          decorator: "blue-top-box"
        };
      }
    }), _defineProperty(_appearances, "groupbox-orange-top/frame", {
      include: "groupbox/frame",
      style: function style(states) {
        return {
          decorator: "orange-top-box"
        };
      }
    }), _defineProperty(_appearances, "groupbox-green-top/frame", {
      include: "groupbox/frame",
      style: function style(states) {
        return {
          decorator: "green-top-box"
        };
      }
    }), _defineProperty(_appearances, "check-groupbox", "groupbox"), _defineProperty(_appearances, "check-groupbox/legend", {
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
    }), _defineProperty(_appearances, "radio-groupbox", "groupbox"), _defineProperty(_appearances, "radio-groupbox/legend", {
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
    }), _defineProperty(_appearances, "tree-folder/open", {
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
    }), _defineProperty(_appearances, "tree-folder", {
      style: function style(states) {
        var backgroundColor;

        if (states.selected) {
          backgroundColor = "combobox-item-selected";

          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }

        return {
          padding: [3, 8, 3, 5],
          icon: states.opened ? ville.theme.clean.Image.URLS["tree-folder-open"] : ville.theme.clean.Image.URLS["tree-folder"],
          iconOpened: ville.theme.clean.Image.URLS["tree-folder-open"],
          backgroundColor: backgroundColor,
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "tree-folder/icon", {
      include: "image",
      style: function style(states) {
        return {
          marginLeft: 6,
          width: 18,
          height: 18
        };
      }
    }), _defineProperty(_appearances, "tree-folder/label", {
      style: function style(states) {
        return {
          padding: [1, 4],
          textColor: states.selected && !states.disabled ? "text-selected" : "text"
        };
      }
    }), _defineProperty(_appearances, "tree-file", {
      include: "tree-folder",
      alias: "tree-folder",
      style: function style(states) {
        return {
          icon: ville.theme.clean.Image.URLS["tree-file"],
          opacity: states.drag ? 0.5 : undefined
        };
      }
    }), _defineProperty(_appearances, "tree-file/icon", {
      include: "image",
      style: function style(states) {
        return {
          //padding : [0, 4, 0, 0],
          width: 18,
          height: 18,
          scale: true
        };
      }
    }), _defineProperty(_appearances, "tree", {
      include: "list",
      alias: "list",
      style: function style(states) {
        return {
          contentPadding: states.invalid && !states.disabled ? [3, 0] : [4, 1],
          padding: states.focused ? 0 : 0
        };
      }
    }), _defineProperty(_appearances, "window", {
      style: function style(states) {
        return {
          contentPadding: [10, 10, 10, 10],
          backgroundColor: "background",
          decorator: states.maximized ? undefined : states.active ? "window-active" : "window"
        };
      }
    }), _defineProperty(_appearances, "window-resize-frame", "resize-frame"), _defineProperty(_appearances, "window/pane", {}), _defineProperty(_appearances, "window/captionbar", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          padding: 8,
          decorator: "window-caption"
        };
      }
    }), _defineProperty(_appearances, "window/icon", {
      style: function style(states) {
        return {
          marginRight: 4,
          alignY: "middle"
        };
      }
    }), _defineProperty(_appearances, "window/title", {
      style: function style(states) {
        return {
          cursor: "default",
          font: "window-header",
          alignY: "middle"
        };
      }
    }), _defineProperty(_appearances, "window/minimize-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          padding: [7, 3, 0, 0],
          marginRight: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), _defineProperty(_appearances, "window/minimize-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          backgroundColor: states.hovered ? "black" : "gray",
          width: 10,
          height: 4
        };
      }
    }), _defineProperty(_appearances, "window/restore-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          padding: [1, 2],
          marginRight: 5,
          marginLeft: 5,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), _defineProperty(_appearances, "window/restore-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          width: 10,
          height: 10,
          decorator: states.hovered ? "window-button-restore-icon-hover" : "window-button-restore-icon"
        };
      }
    }), _defineProperty(_appearances, "window/maximize-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: "",
          padding: [1, 2],
          marginRight: 6,
          marginLeft: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), _defineProperty(_appearances, "window/maximize-button/icon", {
      include: "image",
      style: function style(states) {
        return {
          decorator: states.hovered ? "window-button-maximize-icon-hover" : "window-button-maximize-icon",
          width: 12,
          height: 12
        };
      }
    }), _defineProperty(_appearances, "window/close-button", {
      alias: "button",
      style: function style(states) {
        return {
          icon: states.hovered ? ville.theme.clean.Image.URLS["tabview-close-hovered"] : ville.theme.clean.Image.URLS["tabview-close"],
          padding: [1, 1],
          marginLeft: 6,
          cursor: states.disabled ? undefined : "pointer"
        };
      }
    }), _defineProperty(_appearances, "window/close-button/icon", "image"), _defineProperty(_appearances, "window/statusbar", {
      style: function style(states) {
        return {
          decorator: "window-statusbar",
          padding: [4, 12]
        };
      }
    }), _defineProperty(_appearances, "window/statusbar-text", "label"), _defineProperty(_appearances, "datechooser", {
      style: function style(states) {
        return {
          decorator: "main",
          minWidth: 220
        };
      }
    }), _defineProperty(_appearances, "datechooser/navigation-bar", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          textColor: states.disabled ? "text-disabled" : states.invalid ? "invalid" : undefined,
          padding: [2, 10]
        };
      }
    }), _defineProperty(_appearances, "datechooser/last-year-button-tooltip", "tooltip"), _defineProperty(_appearances, "datechooser/last-month-button-tooltip", "tooltip"), _defineProperty(_appearances, "datechooser/next-year-button-tooltip", "tooltip"), _defineProperty(_appearances, "datechooser/next-month-button-tooltip", "tooltip"), _defineProperty(_appearances, "datechooser/last-year-button", "datechooser/button"), _defineProperty(_appearances, "datechooser/last-month-button", "datechooser/button"), _defineProperty(_appearances, "datechooser/next-year-button", "datechooser/button"), _defineProperty(_appearances, "datechooser/next-month-button", "datechooser/button"), _defineProperty(_appearances, "datechooser/button/icon", {}), _defineProperty(_appearances, "datechooser/last-month-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-left-small",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "datechooser/last-year-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-rewind",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "datechooser/next-month-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-right-small",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "datechooser/next-year-button/icon", {
      include: "image",
      style: function style() {
        return {
          decorator: "ville-icon-arrow-forward",
          width: 0,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "datechooser/button", {
      style: function style(states) {
        var result = {
          backgroundColor: "background",
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
    }), _defineProperty(_appearances, "datechooser/month-year-label", {
      style: function style(states) {
        return {
          font: "datechooser-bold",
          textAlign: "center"
        };
      }
    }), _defineProperty(_appearances, "datechooser/date-pane", {
      style: function style(states) {
        return {
          decorator: "datechooser-date-pane",
          backgroundColor: "background"
        };
      }
    }), _defineProperty(_appearances, "datechooser/weekday", {
      style: function style(states) {
        return {
          decorator: "datechooser-weekday",
          font: "datechooser-bold",
          textAlign: "center",
          textColor: states.disabled ? "text-disabled" : states.weekend ? "text" : "background",
          backgroundColor: states.weekend ? "background" : "primary",
          paddingTop: 2
        };
      }
    }), _defineProperty(_appearances, "datechooser/day", {
      style: function style(states) {
        return {
          textAlign: "center",
          decorator: states.today ? "main" : undefined,
          textColor: states.disabled ? "text-disabled" : states.selected ? "white" : states.otherMonth ? "text-disabled" : undefined,
          font: "datechooser",
          backgroundColor: states.disabled ? undefined : states.selected ? "primary" : undefined,
          padding: states.today ? [1, 3] : [2, 4]
        };
      }
    }), _defineProperty(_appearances, "datechooser/week", {
      style: function style(states) {
        return {
          textAlign: "center",
          textColor: "text",
          font: "datechooser-bold",
          padding: [2, 4],
          decorator: states.header ? "datechooser-week-header" : "datechooser-week"
        };
      }
    }), _defineProperty(_appearances, "progressbar", {
      style: function style(states) {
        return {
          decorator: "progressbar",
          padding: 0,
          backgroundColor: "progressbar-base",
          width: 200,
          height: 20
        };
      }
    }), _defineProperty(_appearances, "progressbar-trans", {
      include: "progressbar",
      style: function style(states) {
        return {
          decorator: "progressbar-trans",
          backgroundColor: "transparent"
        };
      }
    }), _defineProperty(_appearances, "progressbar/progress", {
      style: function style(states) {
        return {
          backgroundColor: "progressbar-gray"
        };
      }
    }), _defineProperty(_appearances, "toolbar", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          padding: 0
        };
      }
    }), _defineProperty(_appearances, "toolbar/part", {
      style: function style(states) {
        return {
          margin: [0, 15]
        };
      }
    }), _defineProperty(_appearances, "toolbar/part/container", {}), _defineProperty(_appearances, "toolbar/part/handle", {}), _defineProperty(_appearances, "toolbar-separator", {
      style: function style(states) {
        return {
          decorator: "toolbar-separator",
          margin: [7, 0],
          width: 4
        };
      }
    }), _defineProperty(_appearances, "toolbar-button", {
      alias: "atom",
      style: function style(states) {
        var decorator = "button-box";
        var textcolor = "button-text";

        if (states.disabled) {
          decorator = "button-box";
        } else if (states.hovered && !states.pressed && !states.checked) {
          decorator = "button-box-hovered";
        } else if (states.hovered && (states.pressed || states.checked)) {
          decorator = "button-box-pressed-hovered";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        } // set the right left and right decorators


        if (states.left) {
          decorator += "-left";
        } else if (states.right) {
          decorator += "-right";
        } else if (states.middle) {
          decorator += "-middle";
        } // set the margin


        var margin = [7, 10];

        if (states.left || states.middle || states.right) {
          margin = [7, 0];
        }

        return {
          cursor: states.disabled ? undefined : "pointer",
          decorator: decorator,
          textColor: textcolor,
          font: "button",
          margin: margin,
          center: true,
          padding: [10, 18],
          gap: 8
        };
      }
    }), _defineProperty(_appearances, "toolbar-menubutton", {
      alias: "toolbar-button",
      include: "toolbar-button",
      style: function style(states) {
        return {
          showArrow: true
        };
      }
    }), _defineProperty(_appearances, "toolbar-menubutton/arrow", {
      include: "image",
      style: function style(states) {
        return {
          source: "",
          decorator: "ville-icon-arrow-down",
          cursor: states.disabled ? undefined : "pointer",
          marginLeft: 2,
          width: 6,
          height: 0
        };
      }
    }), _defineProperty(_appearances, "toolbar-splitbutton", {}), _defineProperty(_appearances, "toolbar-splitbutton/button", {
      alias: "toolbar-button",
      include: "toolbar-button",
      style: function style(states) {
        var decorator = "button-box";

        if (states.disabled) {
          decorator = "button-box";
        } else if (states.hovered && !states.pressed && !states.checked) {
          decorator = "button-box-hovered";
        } else if (states.hovered && (states.pressed || states.checked)) {
          decorator = "button-box-pressed-hovered";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        } // set the right left and right decoratos


        if (states.left) {
          decorator += "-left";
        } else if (states.right) {
          decorator += "-middle";
        } else if (states.middle) {
          decorator += "-middle";
        }

        return {
          icon: "",
          decorator: decorator
        };
      }
    }), _defineProperty(_appearances, "toolbar-splitbutton/arrow", {
      alias: "toolbar-button",
      include: "toolbar-button",
      style: function style(states) {
        var decorator = "button-box";

        if (states.disabled) {
          decorator = "button-box";
        } else if (states.hovered && !states.pressed && !states.checked) {
          decorator = "button-box-hovered";
        } else if (states.hovered && (states.pressed || states.checked)) {
          decorator = "button-box-pressed-hovered";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed";
        } // set the right left and right decoratos


        if (states.left) {
          decorator += "-middle";
        } else if (states.right) {
          decorator += "-right";
        } else if (states.middle) {
          decorator += "-middle";
        }

        return {
          icon: "",
          decorator: decorator,
          padding: [3, 6]
        };
      }
    }), _defineProperty(_appearances, "toolbar-splitbutton/arrow/icon", "combobox/button/icon"), _defineProperty(_appearances, "tabview", {}), _defineProperty(_appearances, "tabview/bar", {
      alias: "slidebar",
      style: function style(states) {
        var marginTop = 0,
            marginRight = 0,
            marginBottom = 0,
            marginLeft = 0;

        if (states.barTop) {
          marginBottom -= 1;
        } else if (states.barBottom) {
          marginTop -= 1;
        } else if (states.barRight) {
          marginLeft -= 1;
        } else {
          marginRight -= 1;
        }

        return {
          marginBottom: marginBottom,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginRight: marginRight
        };
      }
    }), _defineProperty(_appearances, "tabview/bar/button-forward", {
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
    }), _defineProperty(_appearances, "tabview/bar/button-backward", {
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
    }), _defineProperty(_appearances, "tabview/pane", {
      style: function style(states) {
        return {
          backgroundColor: "background",
          decorator: "main",
          padding: 10
        };
      }
    }), _defineProperty(_appearances, "tabview-page", "widget"), _defineProperty(_appearances, "tabview-page/button", {
      style: function style(states) {
        var decorator;
        var padding; // default padding

        if (states.barTop || states.barBottom) {
          padding = [12, 18, 12, 15];
        } else {
          padding = [12, 8, 12, 8];
        } // decorator


        if (states.checked) {
          if (states.barTop) {
            decorator = "tabview-page-button-top";
          } else if (states.barBottom) {
            decorator = "tabview-page-button-bottom";
          } else if (states.barRight) {
            decorator = "tabview-page-button-right";
          } else if (states.barLeft) {
            decorator = "tabview-page-button-left";
          }
        } else {
          for (var i = 0; i < padding.length; i++) {
            padding[i] += 1;
          } // reduce the size by 1 because we have different decorator border width


          if (states.barTop) {
            padding[2] -= 1; //margin[0] -= 1;
          } else if (states.barBottom) {
            padding[0] -= 1; //margin[2] += 1;
          } else if (states.barRight) {
            padding[3] -= 1; //margin[1] += 1;
          } else if (states.barLeft) {
            padding[1] -= 1; //margin[3] += 1;
          }
        }

        return {
          zIndex: states.checked ? 10 : 5,
          decorator: decorator,
          textColor: states.disabled ? "text-disabled" : states.checked ? null : "button-text",
          font: states.checked ? "bold" : "bold",
          padding: padding,
          cursor: "pointer",
          marginBottom: states.barBottom ? 1 : undefined,
          marginLeft: states.barLeft ? 1 : undefined
        };
      }
    }), _defineProperty(_appearances, "tabview-page/button/label", {
      alias: "label",
      style: function style(states) {
        return {
          padding: [0, 1, 0, 1]
        };
      }
    }), _defineProperty(_appearances, "tabview-page/button/icon", "image"), _defineProperty(_appearances, "tabview-page/button/close-button", {
      alias: "atom",
      style: function style(states) {
        return {
          cursor: states.disabled ? undefined : "pointer",
          marginLeft: 12,
          icon: states.hovered ? ville.theme.clean.Image.URLS["tabview-close-hovered"] : ville.theme.clean.Image.URLS["tabview-close"]
        };
      }
    }), _defineProperty(_appearances, "tabview-page/button/close-button/icon", "image"), _defineProperty(_appearances, "tabviewspacebar", {}), _defineProperty(_appearances, "tabviewspacebar/bar", "tabview/bar"), _defineProperty(_appearances, "tabviewspacebar/bar/button-forward", "tabview/bar/button-forward"), _defineProperty(_appearances, "tabviewspacebar/bar/button-backward", "tabview/bar/button-backward"), _defineProperty(_appearances, "tabviewspacebar/pane", {
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
    }), _defineProperty(_appearances, "tabviewspacebar-page", "tabview-page"), _defineProperty(_appearances, "tabviewspacebar-page/button", {
      include: "tabview-page/button",
      style: function style(states) {
        var decorator; // default padding

        if (states.barTop || states.barBottom) {
          var padding = [12, 18, 12, 15];
        } else {
          var padding = [12, 8, 12, 8];
        } // decorator


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
          } // reduce the size by 1 because we have different decorator border width


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
    }), _defineProperty(_appearances, "tabviewspacebar-page/button/label", "tabview-page/button/label"), _defineProperty(_appearances, "tabviewspacebar-page/button/icon", "tabview-page/button/icon"), _defineProperty(_appearances, "tabviewspacebar-page/button/close-button", "tabview-page/button/close-button"), _defineProperty(_appearances, "tabviewspot", {}), _defineProperty(_appearances, "tabviewspot/bar", "tabviewspacebar/bar"), _defineProperty(_appearances, "tabviewspot/bar/button-forward", "tabviewspacebar/bar/button-forward"), _defineProperty(_appearances, "tabviewspot/bar/button-backward", "tabviewspacebar/bar/button-backward"), _defineProperty(_appearances, "tabviewspot/pane", "tabviewspacebar/pane"), _defineProperty(_appearances, "tabviewspot-page", "tabviewspacebar-page"), _defineProperty(_appearances, "tabviewspot-page/button", {
      include: "tabviewspacebar-page/button",
      style: function style(states) {
        var decorator; // default padding

        if (states.barTop || states.barBottom) {
          var padding = [8, 15, 8, 15];
        } else {
          var padding = [8, 8, 8, 8];
        } // decorator


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
    }), _defineProperty(_appearances, "tabviewspot-page/button/label", "tabviewspacebar-page/button/label"), _defineProperty(_appearances, "tabviewspot-page/button/icon", "tabviewspacebar-page/button/icon"), _defineProperty(_appearances, "tabviewspot-page/button/close-button", "tabviewspacebar-page/button/close-button"), _defineProperty(_appearances, "colorpopup", {
      alias: "popup",
      include: "popup",
      style: function style(states) {
        return {
          padding: 5
        };
      }
    }), _defineProperty(_appearances, "colorpopup/field", {
      style: function style(states) {
        return {
          margin: 2,
          width: 14,
          height: 14,
          backgroundColor: "background",
          decorator: "main-dark"
        };
      }
    }), _defineProperty(_appearances, "colorpopup/selector-button", "button"), _defineProperty(_appearances, "colorpopup/auto-button", "button"), _defineProperty(_appearances, "colorpopup/preview-pane", "groupbox"), _defineProperty(_appearances, "colorpopup/current-preview", {
      style: function style(state) {
        return {
          height: 20,
          padding: 4,
          marginLeft: 4,
          decorator: "main-dark",
          allowGrowX: true
        };
      }
    }), _defineProperty(_appearances, "colorpopup/selected-preview", {
      style: function style(state) {
        return {
          height: 20,
          padding: 4,
          marginRight: 4,
          decorator: "main-dark",
          allowGrowX: true
        };
      }
    }), _defineProperty(_appearances, "colorpopup/colorselector-okbutton", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          icon: "icon/16/actions/dialog-ok.png"
        };
      }
    }), _defineProperty(_appearances, "colorpopup/colorselector-cancelbutton", {
      alias: "button",
      include: "button",
      style: function style(states) {
        return {
          icon: "icon/16/actions/dialog-cancel.png"
        };
      }
    }), _defineProperty(_appearances, "colorselector", "widget"), _defineProperty(_appearances, "colorselector/control-bar", "widget"), _defineProperty(_appearances, "colorselector/visual-pane", "groupbox"), _defineProperty(_appearances, "colorselector/control-pane", "widget"), _defineProperty(_appearances, "colorselector/preset-grid", "widget"), _defineProperty(_appearances, "colorselector/colorbucket", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          width: 16,
          height: 16
        };
      }
    }), _defineProperty(_appearances, "colorselector/preset-field-set", "groupbox"), _defineProperty(_appearances, "colorselector/input-field-set", {
      include: "groupbox",
      alias: "groupbox",
      style: function style() {
        return {
          paddingTop: 12
        };
      }
    }), _defineProperty(_appearances, "colorselector/preview-field-set", {
      include: "groupbox",
      alias: "groupbox",
      style: function style() {
        return {
          paddingTop: 12
        };
      }
    }), _defineProperty(_appearances, "colorselector/hex-field-composite", "widget"), _defineProperty(_appearances, "colorselector/hex-field", "textfield"), _defineProperty(_appearances, "colorselector/rgb-spinner-composite", "widget"), _defineProperty(_appearances, "colorselector/rgb-spinner-red", "spinner"), _defineProperty(_appearances, "colorselector/rgb-spinner-green", "spinner"), _defineProperty(_appearances, "colorselector/rgb-spinner-blue", "spinner"), _defineProperty(_appearances, "colorselector/hsb-spinner-composite", "widget"), _defineProperty(_appearances, "colorselector/hsb-spinner-hue", "spinner"), _defineProperty(_appearances, "colorselector/hsb-spinner-saturation", "spinner"), _defineProperty(_appearances, "colorselector/hsb-spinner-brightness", "spinner"), _defineProperty(_appearances, "colorselector/preview-content-old", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          width: 50,
          height: 25
        };
      }
    }), _defineProperty(_appearances, "colorselector/preview-content-new", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          backgroundColor: "background",
          width: 50,
          height: 25
        };
      }
    }), _defineProperty(_appearances, "colorselector/hue-saturation-field", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          margin: 5
        };
      }
    }), _defineProperty(_appearances, "colorselector/brightness-field", {
      style: function style(states) {
        return {
          decorator: "main-dark",
          margin: [5, 7]
        };
      }
    }), _defineProperty(_appearances, "colorselector/hue-saturation-pane", "widget"), _defineProperty(_appearances, "colorselector/hue-saturation-handle", "widget"), _defineProperty(_appearances, "colorselector/brightness-pane", "widget"), _defineProperty(_appearances, "colorselector/brightness-handle", "widget"), _defineProperty(_appearances, "app-header", {
      style: function style(states) {
        return {
          font: "headline",
          textColor: "text-selected",
          backgroundColor: "background-selected-dark",
          padding: [8, 12]
        };
      }
    }), _defineProperty(_appearances, "app-header-label", {
      style: function style(states) {
        return {
          paddingTop: 5
        };
      }
    }), _defineProperty(_appearances, "app-splitpane", {
      alias: "splitpane",
      style: function style(states) {
        return {
          padding: [0, 10, 10, 10],
          backgroundColor: "light-background"
        };
      }
    }), _appearances)
  });
  ville.theme.clean.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map?dt=1626060272980