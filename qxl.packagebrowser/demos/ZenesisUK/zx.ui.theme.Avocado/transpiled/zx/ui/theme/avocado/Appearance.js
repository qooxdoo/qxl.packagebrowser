(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.lang.Object": {},
      "zx.ui.theme.avocado.Image": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
   *
   *  Zen [and the art of] CMS
   *
   *  https://zenesis.com
   *
   *  Copyright:
   *    2023 Zenesis Ltd, https://www.zenesis.com
   *
   *  License:
   *    MIT (see LICENSE in project root)
   *
   *  Authors:
   *    John Spackman (john.spackman@zenesis.com, @johnspackman)
   *    Patryk Malinowski (@p9malino26)
   *    Will Johnson (@WillsterJohnsonAtZenesis)
   *
   * ************************************************************************ */

  /**
   * @usefont(MaterialIcons)
   */
  const COMBOBOX_BUTTON_WIDTH = 35;
  const SLIDER_THICKNESS = 15;
  const SCROLLBAR_THICKNESS = 25;
  const TABLE_COL_BTN_WIDTH = 24;
  const VERT_TABARROW_PADDING = 17;
  const SCROLLBAR_TRACK_THICKNESS = 20;
  const SCROLLBAR_THUMB_THICKNESS = 14;
  const SCROLLBAR_THUMB_PADDING = (SCROLLBAR_TRACK_THICKNESS - SCROLLBAR_THUMB_THICKNESS) / 2;
  const TITLEBAR_HEIGHT = 25;
  const scrollBarButton = {
    style(states) {
      let horizontal = states.left || states.right;
      return {
        height: horizontal ? undefined : TITLEBAR_HEIGHT,
        width: horizontal ? TITLEBAR_HEIGHT : undefined,
        padding: 0
      };
    }
  };
  const HELPER = {
    pickDecorator(name, states) {
      if (states.readonly) {
        name += "-readonly";
      } else if (states.disabled) {
        name += "-disabled";
      } else if (states.focused) {
        name += "-focused";
        if (states.invalid) {
          name += "-invalid";
        }
      } else if (states.invalid) {
        name += "-invalid";
      }
      return name;
    },
    getTextPadding(states) {
      var padding = [3, 0, 4, 0];
      if (states.readonly) {
        padding = [3, 0, 5, 0];
      } else if (states.focused) {
        padding = [3, 0, 3, 0];
      }
      return padding;
    }
  };
  qx.Theme.define("zx.ui.theme.avocado.Appearance", {
    appearances: {
      "table-filter-header-cell": {
        style(states) {
          return {
            minWidth: 13,
            minHeight: 33,
            padding: states.hovered ? [3, 6, 2, 6] : [3, 6],
            decorator: states.hovered ? "table-header-cell-hovered" : "table-header-cell"
          };
        }
      },
      "table-filter-header-cell/filter-icon": {
        style(states) {
          return {
            padding: 0,
            margin: 0,
            decorator: states.pressed || states.checked && !states.hovered || states.checked && states.disabled ? "table-filter-button-checked" : states.hovered && !states.disabled ? "table-filter-button-hovered" : undefined
          };
        }
      },
      "tabview/system-button/icon": "atom",
      // "searchfield/btnSearch/icon": "atom",

      "smart-content-tree": {
        style(states) {
          return {
            decorator: states.expanded ? null : "smart-content-tree-header-collapsed"
          };
        }
      },
      "smart-content-tree/label": {
        style(states) {
          return {
            font: "large"
          };
        }
      },
      "smart-widget-palette": {
        style(states) {
          return {
            decorator: states.expanded ? null : "smart-widget-palette-header-collapsed"
          };
        }
      },
      "smart-widget-palette/label": {
        style(states) {
          return {
            font: "large"
          };
        }
      },
      radiobar: {
        style(states) {
          return {
            margin: [0, 0]
          };
        }
      },
      "radiobar-button": {
        style(states) {
          var decorator = "radiobar-button";
          if (states.pressed || states.checked) decorator = "radiobar-button-pressed";

          // set the right left and right decoratos
          if (states.left) {
            decorator += "-left";
          } else if (states.right) {
            decorator += "-right";
          } else if (states.middle) {
            decorator += "-middle";
          }

          // set the margin
          return {
            cursor: "pointer",
            decorator: decorator,
            margin: 0,
            padding: [2, 15]
          };
        }
      },
      "radiobar-button/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled" : "#132d3b"
          };
        }
      },
      "collapsible-group": {},
      "collapsible-group/legend": {
        style(states) {
          return {
            cursor: "pointer",
            decorator: "collapsible-group-legend",
            margin: 0,
            font: "bold",
            padding: [2, 5, 2, 5]
          };
        }
      },
      "collapsible-group/secondary-title": "collapsible-group/legend",
      "collapsible-group/legend/icon": {
        include: "image",
        style(states, style) {
          style = qx.lang.Object.clone(style);
          style.minWidth = 10;
          return style;
        }
      },
      "text-shadow-label": {
        style(states) {
          return {
            decorator: "text-shadow",
            textColor: states.disabled ? "text-disabled" : undefined
          };
        }
      },
      "mini-window": {
        style(states) {
          return {
            shadow: "shadow-window-inactive",
            // states.focused?
            // "shadow-window"
            // :
            // "gray-shadow",
            contentPadding: 0
          };
        }
      },
      "mini-window/pane": {
        style(states) {
          return {
            decorator: "window",
            spacing: 0
          };
        }
      },
      "mini-window/captionbar": {
        style(states) {
          return {
            decorator: "window-captionbar",
            textColor: states.active ? "text-label" : "text-disabled",
            minHeight: 14,
            maxHeight: 14,
            paddingRight: 0
          };
        }
      },
      "mini-window/close-button": {
        style(states) {
          return {
            icon: states.active ? "grasshopper/decoration/mini-close-active.png" : "grasshopper/decoration/mini-close-inactive.png",
            margin: [2, 0, 2, 0]
          };
        }
      },
      "mini-window/close-button/icon": "window/icon",
      "floating-toolbar-button": {
        style(states) {
          return {
            marginTop: 0,
            marginBottom: 0,
            padding: (states.pressed || states.checked || states.hovered) && !states.disabled || states.disabled && states.checked ? [0, 2] : [2, 4],
            decorator: states.pressed || states.checked && !states.hovered || states.checked && states.disabled ? "toolbar-button-checked" : states.hovered && !states.disabled ? "toolbar-button-hovered" : undefined
          };
        }
      },
      "app-navitem-row": "gtree-row",
      "app-navitem-row/content/arrow": {
        style(states) {
          return {
            padding: 0,
            source: undefined,
            //states.hovered ? "grasshopper/decoration/app/smart/navitem-arrow.png" : undefined,
            minHeight: 18,
            maxHeight: 18
          };
        }
      },
      // searchfield: {
      //   include: "textfield",
      //   style(states, style) {
      //     style = qx.lang.Object.clone(style);
      //     style.padding = 0;
      //     style.margin = 0;
      //     return style;
      //   }
      // },

      // "searchfield/field": {
      //   style(states, style) {
      //     return {
      //       padding: 0,
      //       margin: 2
      //     };
      //   }
      // },

      // inlinebutton: {
      //   style(states) {
      //     return {
      //       padding: 2,
      //       margin: 0,
      //       decorator: states.pressed || (states.checked && !states.hovered) || (states.checked && states.disabled) ? "inlinebutton-checked" : states.hovered && !states.disabled ? "inlinebutton-hovered" : undefined
      //     };
      //   }
      // },

      "toolbar-slim-button": {
        style(states) {
          return {
            marginTop: 1,
            marginBottom: 1,
            padding: 0,
            decorator: states.pressed || states.checked && !states.hovered || states.checked && states.disabled ? "toolbar-button-checked" : states.hovered && !states.disabled ? "toolbar-button-hovered" : "toolbar-button"
          };
        }
      },
      "uploaded-file": {
        style(states) {
          return {
            margin: 0,
            padding: 0,
            maxHeight: 20
          };
        }
      },
      "uploaded-file/btnClear": {
        style(states) {
          return {
            padding: 0,
            margin: 0,
            maxHeight: 20,
            decorator: states.pressed || states.checked && !states.hovered || states.checked && states.disabled ? "inlinebutton-checked" : states.hovered && !states.disabled ? "inlinebutton-hovered" : undefined
          };
        }
      },
      "uploaded-file/downloadLink": "label",
      "uploaded-file/btnUpload": "uploaded-file/btnClear",
      "uploaded-file/btnSelect": "uploaded-file/btnClear",
      skinnybutton: {
        include: "button-frame",
        style(states) {
          return {
            padding: [0, 6],
            center: true
          };
        }
      },
      "checked-item": {
        style(states) {
          return {
            padding: states.dragover ? [2, 2, 1, 2] : 2,
            textColor: states.selected ? "half-selected" : "text-on-surface"
            // decorator: states.selected ? "selected" : undefined
          };
        }
      },
      "checked-item/label": {
        include: "atom",
        style(states) {
          return {
            padding: [2, 0, 0, 0]
          };
        }
      },
      "noa-location-checkeditem": {
        include: "checked-item"
      },
      "noa-location-checkeditem/numStaff": {
        include: "textfield",
        style(states) {
          return {
            padding: [1, 4, 0, 4],
            margin: 0,
            maxWidth: 50
          };
        }
      },
      // "select-permission": {
      //   style(states) {
      //     return {
      //       padding: states.dragover ? [2, 2, 1, 2] : 2,
      //       textColor: states.selected ? "half-selected" : "text-on-surface",
      //       decorator: states.selected ? "selected" : undefined
      //     };
      //   }
      // },

      // "select-permission/scopes": {
      //   style(states) {
      //     return {
      //       minWidth: 50,
      //       maxWidth: 50
      //     };
      //   }
      // },

      // "permission-scope": {
      //   style(states) {
      //     return {
      //       padding: [0, 1, 0, 1],
      //       textColor: states.disabled ? "text-disabled" : undefined,
      //       font: states.checked ? "bold" : "strikeout",
      //       decorator: states.hovered ? "select-permission-scope-hovered" : "select-permission-scope"
      //     };
      //   }
      // },

      countedtextarea: {},
      "countedtextarea/message": {
        style(states) {
          return {
            textColor: states.oversize ? "invalid" : undefined,
            font: states.oversize ? "bold" : "default"
          };
        }
      },
      "uploaded-files": {
        include: "list",
        style(states, style) {
          style = qx.lang.Object.clone(style || {});
          style.margin = 0;
          return style;
        }
      },
      "uploaded-files/lst": {},
      "table-zoomedout": {
        include: "table",
        style(states, style) {
          style = qx.lang.Object.clone(style || {});
          style.font = "tiny";
          return style;
        }
      },
      // "listex-table": {
      //   style(states) {
      //     return {
      //       decorator: "main"
      //     };
      //   }
      // },

      // "listex-table/list": {
      //   style(states) {
      //     return {
      //       margin: 0
      //     };
      //   }
      // },

      // "virtual-list": {
      //   include: "list",

      //   style(states) {
      //     return {
      //       decorator: "virtual-list"
      //     };
      //   }
      // },

      // "virtual-list/row-layer": "row-layer",
      // "row-layer": "widget",

      // "virtual-list-header-cell": {
      //   style(states) {
      //     return {
      //       decorator: "virtual-list-header-cell",
      //       font: "bold",
      //       paddingTop: 3,
      //       paddingLeft: 5,
      //       cursor: states.disabled ? undefined : "pointer"
      //     };
      //   }
      // },

      // "listex-table/header": {
      //   style(states) {
      //     return {
      //       minWidth: 13,
      //       minHeight: 33,
      //       padding: [3, 6, 3, 6],
      //       decorator: "listex-header",
      //       font: "bold"
      //     };
      //   }
      // },

      // "listex-table/header/label": {
      //   style(states) {
      //     return {
      //       minWidth: 0,
      //       paddingRight: 5,
      //       alignY: "middle"
      //     };
      //   }
      // },

      // "listex-table/header/sublabel": "listex-table/header/label",

      // "listex-listitem": "listitem",
      // "listex-listitem/sublabel": "listex-listitem/label",

      pane: {
        style(states) {
          return {
            backgroundColor: "surface",
            margin: 2
          };
        }
      },
      "alert-listitem": {
        style(states) {
          return {
            padding: states.dragover ? [4, 4, 2, 4] : 4,
            decorator: states.selected ? "alert-listitem-selected" : "alert-listitem"
          };
        }
      },
      "button/icon": {
        style(states) {
          return {
            minWidth: 16,
            minHeight: 16,
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      "widget/buttonShrink": "button",
      "widget/labelShrink": "label",
      "tabview-button": "tabview-page/button",
      /**
       * Grasshopper Tree
       */
      "mce-toolbar": {
        style(states) {
          return {
            contentPadding: 2
          };
        }
      },
      "mce-toolbar-page": "tabview-page",
      "mce-toolbar-page/button": {
        include: "tabview-page/button",
        style(states, style) {
          style = qx.lang.Object.clone(style);
          style.padding[0] -= 2;
          return style;
        }
      },
      "mce-groupbox": {
        style(states) {
          return {
            legendPosition: "top"
          };
        }
      },
      "mce-groupbox/legend": {
        style(states) {
          return {
            textColor: states.invalid ? "invalid" : undefined,
            padding: [1, 0, 1, 4],
            margin: [0, 2, 0, 0]
          };
        }
      },
      "mce-groupbox/frame": {
        style(states) {
          return {
            backgroundColor: "surface",
            padding: [3, 6],
            margin: 0,
            decorator: "mce-group-box"
          };
        }
      },
      "mce-group": {
        style(states) {
          return {
            backgroundColor: "surface",
            padding: [0, 2, 2, 0],
            margin: 0
          };
        }
      },
      "mce-group/part": {
        include: "toolbar/part",
        style(states) {
          return {
            margin: [0, 0]
          };
        }
      },
      "mce-borders": {
        include: "toolbar",
        style(states) {
          return {
            backgroundColor: "white"
          };
        }
      },
      "mce-borders-button": {
        include: "toolbar-button",
        style(states, style) {
          style = qx.lang.Object.clone(style);
          style.decorator = states.checked ? "mce-borders-button-active" : "mce-borders-button-inactive";
          style.margin = 0;
          style.padding = 0;
          return style;
        }
      },
      "mce-toolbar-button": {
        include: "toolbar-button",
        style(states, style) {
          style = qx.lang.Object.clone(style);
          style.margin = [0, 0];
          return style;
        }
      },
      "mce-style-button": {
        style(states) {
          return {
            margin: [2, 3],
            padding: 0,
            decorator: "mce-style-button"
          };
        }
      },
      "mce-style-button/preview": {
        style(states) {
          return {
            padding: [4, 3, 0, 3],
            backgroundColor: "surface",
            decorator: "mce-style-button-preview"
          };
        }
      },
      "mce-style-button/label": {
        style(states) {
          return {
            backgroundColor: "#E3E3E3",
            font: "small",
            padding: [2, 0, 2, 0],
            margin: [0, 0, 0, 0],
            decorator: states.selected ? "mce-style-button-title-selected" : "mce-style-button-title"
          };
        }
      },
      "mce-style-dropdown": {
        include: "selectbox",
        style(states) {
          return {
            padding: [0, 8, 0, 0],
            margin: [0, 2]
          };
        }
      },
      "mce-style-dropdown/arrow": {
        include: "selectbox/arrow",
        style(states) {
          return {
            padding: 0,
            margin: 0
          };
        }
      },
      "mce-style-dropdown/preview": {
        include: "mce-style-button",
        style(states) {
          return {
            margin: 0,
            padding: 0
          };
        }
      },
      "mce-colour-splitbutton": {
        include: "splitbutton",
        style(states, styles) {
          return {
            padding: [2, 0, 0, 0]
          };
        }
      },
      "mce-alignment": {
        include: "selectbox",
        style(states, styles) {
          styles = qx.lang.Object.clone(styles);
          styles.padding = 0;
          styles.margin = [0, 4, 4, 0];
          return styles;
        }
      },
      "mce-spinner": {
        include: "spinner",
        style(states, styles) {
          styles = qx.lang.Object.clone(styles);
          styles.margin = 0;
          return styles;
        }
      },
      "mce-spinner/textfield": {
        include: "textfield",
        style(states) {
          return {
            marginRight: 2,
            padding: 0,
            decorator: undefined
          };
        }
      },
      "mce-palette-item": {
        style(states) {
          return {
            // decorator: states.selected ? "selected" : undefined,
            width: states.styleThumbnail ? 80 : null,
            margin: 3
          };
        }
      },
      "mce-palette-item/image": {
        include: "widget",
        style(states) {
          return {
            backgroundColor: "white",
            height: states.styleThumbnail ? 75 : 32,
            width: states.styleThumbnail ? 75 : 32
          };
        }
      },
      "mce-file-palette-item": {
        include: "mce-palette-item"
      },
      "mce-palette-item/legend": {
        include: "label",
        style(states) {
          return {
            textColor: states.selected ? "half-selected" : "text-on-surface",
            textAlign: states.styleThumbnail ? "center" : "left",
            font: states.hovered ? "underline" : "default",
            margin: [2, 4],
            height: 32
          };
        }
      },
      gtree: {
        style(states) {
          return {};
        }
      },
      "gtree-row": {
        style(states) {
          return {
            textColor: "text-on-surface",
            backgroundColor: "box"
          };
        }
      },
      "gtree-row/check": "atom",
      "gtree-row/column-widget": "atom",
      "gtree-row/arrow": {
        style(states) {
          return {
            source: states.hasChildren ? states.opened ? zx.ui.theme.avocado.Image.URLS["arrow-down-small"] : zx.ui.theme.avocado.Image.URLS["arrow-right-small"] : states.selected ? zx.ui.theme.avocado.Image.URLS["checkbox-checked"] : zx.ui.theme.avocado.Image.URLS["checkbox-blank"]
          };
        }
      },
      "gtree-row/content/label": {
        style(states) {
          return {
            textColor: states.selected ? "half-selected" : "text-on-surface",
            padding: [2, 0, 0, 2]
          };
        }
      },
      "gtree-row/content/icon": "image",
      "browser-gtree-row": "gtree-row",
      "browser-gtree-row/arrow": {
        include: "gtree-row/arrow",
        style(states) {
          return {
            source: states.hasChildren ? states.opened ? zx.ui.theme.avocado.Image.URLS["arrow-down-small"] : zx.ui.theme.avocado.Image.URLS["arrow-right-small"] : ""
          };
        }
      },
      "gtree-dropcaret": {
        style(states) {
          return {
            opacity: 0.5
          };
        }
      },
      "tree-column-rowwidget": {
        style(states) {
          return {};
        }
      },
      /*
      "tree-column-header": {
      },
      */

      "tree-column-cell": {
        include: "atom",
        style(states) {
          var decorator;
          return {
            padding: [3, 0, 2, 0],
            textColor: states.selected ? "text-on-primary" : "text-on-widget"
          };
        }
      },
      /**
       * Control Panel Naviator
       */
      controlpanel: "tabview",
      "controlpanel/logo": {
        style(states) {
          return {
            decorator: "controlpanel-logo",
            width: 192,
            height: 35,
            maxHeight: 35,
            margin: [5, 0]
          };
        }
      },
      "controlpanel/bar-outer": {
        style(states, style) {
          return {
            decorator: "controlpanel-bar",
            padding: 0
          };
        }
      },
      "controlpanel/pane": {
        style(states) {
          return {
            minHeight: 40,
            margin: 0,
            padding: 0
          };
        }
      },
      "controlpanel-page": {},
      "controlpanel-page/button": {
        style(states) {
          var decorator;
          if (states.checked) {
            decorator = "controlpanel-button-active";
          } else {
            decorator = "controlpanel-button-inactive";
          }
          return {
            zIndex: states.checked ? 10 : 5,
            decorator: decorator,
            padding: [16, 16, 0, 16],
            margin: 0 //[ 6, 25, 6, 6 ]
          };
        }
      },
      "controlpanel-page/button/label": {
        style(states) {
          return {
            textColor: "text-on-cpanel"
          };
        }
      },
      "controlpanel-toolbar": {},
      "controlpanel/system-button": {
        style(states) {
          var decorator = "system-button";
          if (!states.disabled && (states.pressed || states.checked)) {
            decorator = "system-button-pressed";
          }
          return {
            icon: "@MaterialIcons/account_circle",
            margin: [3, 8],
            decorator: decorator,
            padding: [3, 0, 0, 3],
            center: true
          };
        }
      },
      "controlpanel/alerts-button": {
        style(states) {
          var decorator = "alerts-button";
          if (!states.disabled && (states.pressed || states.checked)) {
            decorator = "alerts-button-pressed";
          }
          return {
            margin: 8,
            decorator: decorator,
            padding: 0,
            center: true
          };
        }
      },
      /**
       * ListEx
       */
      "listex-table": {
        style(states) {
          return {
            decorator: "main"
          };
        }
      },
      "listex-table/list": {
        style(states) {
          return {
            margin: 0
          };
        }
      },
      "listex-table/header": {
        style(states) {
          return {
            minWidth: 13,
            minHeight: 33,
            padding: [3, 6, 3, 6],
            font: "bold",
            textColor: "text-on-surface"
          };
        }
      },
      "listex-table/header/label": {
        style(states) {
          return {
            minWidth: 0,
            paddingRight: 5,
            alignY: "middle"
          };
        }
      },
      "listex-table/header/sublabel": "listex-table/header/label",
      // "listex-listitem": "listitem",
      // "listex-listitem/sublabel": "listex-listitem/label",
      "listex-listitem": {
        style(states) {
          var padding = [1, 5, 1, 5];
          if (states.lead) {
            padding = [2, 4, 1, 4];
          }
          if (states.dragover) {
            padding[2] -= 2;
          }
          return {
            padding: padding,
            backgroundColor: states.selected ? "primary" : "transparent",
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "listex-listitem/label": {
        style(states) {
          return {
            textColor: states.selected ? "text-on-primary" : "text-on-surface"
          };
        }
      },
      "listex-listitem/sublabel": "listex-listitem/label",
      /**
       * Various utility widgets
       */
      "select-permission": {
        style(states) {
          return {
            padding: states.dragover ? [2, 2, 1, 2] : 2
          };
        }
      },
      //grant,label

      "select-permission/grant/icon": {
        include: "checkbox/icon",
        style(states) {
          return {
            textColor: "text-on-widget",
            font: "default"
          };
        }
      },
      "select-permission/label": {
        style(states) {
          return {
            textColor: "text-on-widget"
          };
        }
      },
      "select-permission/scopes": {
        style(states) {
          return {
            minWidth: 50,
            maxWidth: 50
          };
        }
      },
      "permission-scope": {
        style(states) {
          return {
            padding: [0, 1, 0, 1],
            textColor: states.disabled ? "text-disabled" : undefined,
            font: states.checked ? "bold" : "strikeout",
            decorator: states.hovered ? "select-permission-scope-hovered" : "select-permission-scope"
          };
        }
      },
      searchfield: {
        include: "textfield",
        style(states, style) {
          style = qx.lang.Object.clone(style);
          style.padding = 0;
          style.margin = 0;
          return style;
        }
      },
      "searchfield/field": {
        style(states, style) {
          return {
            padding: 5,
            margin: 2
          };
        }
      },
      "searchfield/btnSearch": {
        style(states, style) {
          return {
            padding: 5
          };
        }
      },
      "searchfield/btnSearch/icon": {
        style(states, style) {
          return {
            textColor: "text-on-widget"
          };
        }
      },
      searchfieldbutton: "searchfield/btnSearch",
      "searchfieldbutton/icon": "searchfield/btnSearch/icon",
      progress: {
        style(states) {
          return {
            backgroundColor: "box",
            padding: 20,
            decorator: "progress"
          };
        }
      },
      "session-expired": {
        style(states) {
          return {
            backgroundColor: "box",
            padding: 20,
            decorator: "progress"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        CORE
      ---------------------------------------------------------------------------
      */

      // WIDGET
      widget: {
        style(states) {
          return {
            textColor: "text-on-primary"
          };
        }
      },
      label: {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface",
            height: null,
            paddingBottom: 4
          };
        }
      },
      //IMAGE
      image: {
        style(states) {
          var textColor = "widget";
          if (states.disabled) {
            textColor = "widget-disabled";
          } else if (states.hovered) {
            textColor = "widget-hovered";
          }
          return {
            textColor: textColor,
            opacity: !states.replacement && states.disabled ? 0.3 : undefined
          };
        }
      },
      atom: {},
      "atom/label": "label",
      "atom/icon": "image",
      root: {
        style(states) {
          return {
            backgroundColor: "surface",
            textColor: "text-primary-on-surface",
            font: "default"
          };
        }
      },
      popup: {
        style(states) {
          return {
            decorator: "popup",
            backgroundColor: "surface"
          };
        }
      },
      tooltip: {
        include: "popup",
        style(states) {
          return {
            backgroundColor: "widget",
            textColor: "text-on-widget",
            decorator: "tooltip",
            padding: [1, 3, 2, 3],
            offset: [10, 5, 5, 5]
          };
        }
      },
      "tooltip/atom": "atom",
      "tooltip/atom/label": {
        style(states) {
          return {
            textColor: "text-on-widget"
          };
        }
      },
      "tooltip-error": {
        include: "tooltip",
        style(states) {
          return {
            textColor: "text-on-error",
            showTimeout: 100,
            hideTimeout: 10000,
            decorator: "tooltip-error",
            font: "bold",
            backgroundColor: undefined
          };
        }
      },
      "tooltip-error/atom": "atom",
      iframe: {
        style(states) {
          return {
            backgroundColor: "surface",
            decorator: "main"
          };
        }
      },
      "move-frame": {
        style(states) {
          return {
            decorator: "main"
          };
        }
      },
      "resize-frame": "move-frame",
      "dragdrop-cursor": {
        style(states) {
          var icon = "nodrop";
          if (states.copy) {
            icon = "copy";
          } else if (states.move) {
            icon = "move";
          } else if (states.alias) {
            icon = "alias";
          }
          return {
            source: zx.ui.theme.avocado.Image.URLS["cursor-" + icon],
            position: "right-top",
            offset: [2, 16, 2, 6]
          };
        }
      },
      // MATERIAL-BUTTON
      "material-button": {
        style(states) {
          var decorator = "material-button";
          if (!states.disabled) {
            if (states.pressed || states.checked) {
              decorator += "-pressed";
            } else if (states.hovered || states.focused) {
              decorator += "-hovered";
            }
          } else {
            decorator += "-disabled";
          }
          return {
            decorator: decorator,
            padding: [4, 8],
            margin: [2, 4],
            cursor: states.disabled ? undefined : "pointer",
            minWidth: 5,
            minHeight: 5
          };
        }
      },
      "material-button/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      "material-button/icon": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        BUTTON
      ---------------------------------------------------------------------------
      */

      button: {
        /* qx.ui.form.Button */

        include: "material-button",
        style(states) {
          return {
            center: true
          };
        }
      },
      "button/label": {
        include: "material-button/label",
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      "toggle-button": {
        include: "button",
        style(states) {
          return {
            decorator: "toggle-button" + (states.checked ? "-checked" : "") + (states.disabled ? "-disabled" : "") + (!states.disabled && states.hovered ? "-hovered" : ""),
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      "toggle-button/label": {
        include: "button/label",
        style(states) {
          if (states.checked) {
            return {
              textColor: undefined
            };
          }
          return {
            textColor: undefined
          };
        }
      },
      inlinebutton: {
        style(states) {
          let textColor = "text-on-";
          if (states.selected) textColor += "primary";else textColor += "surface";
          if (states.disabled) textColor += "-disabled";else if (states.hovered) textColor += "-hovered";
          return {
            textColor,
            margin: [-2, 0, 0, 0]
          };
        }
      },
      "inlinebutton/icon": {
        style(states) {
          var backgroundColor = "transparent";
          if (states.disabled) {} else if (states.hovered) {
            backgroundColor = "inlinebutton-hovered"; //!
          }
          return {
            backgroundColor: backgroundColor,
            padding: [2, 2, 0, 0],
            minWidth: 16,
            minHeight: 16
          };
        }
      },
      "hover-button": {
        include: "button",
        style(states) {
          return {
            decorator: states.hovered ? "button-hover" : undefined
          };
        }
      },
      menubutton: {
        include: "button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
            iconPosition: "right"
          };
        }
      },
      "menubutton/label": "button/label",
      /*
      ---------------------------------------------------------------------------
        TEXT FIELD
      ---------------------------------------------------------------------------
      */

      textfield: {
        style(states) {
          var decorator;
          decorator = "material-textfield";
          if (states.readonly) {
            decorator += "-readonly";
          }
          if (states.disabled) {
            decorator += "-disabled";
          }
          if (states.focused) {
            decorator += "-focused";
          }
          if (states.invalid) {
            decorator += "-invalid";
          }
          return {
            decorator: decorator,
            padding: [2, 7],
            textColor: "text-on-widget" + (states.disabled || states.readonly ? "-disabled" : ""),
            backgroundColor: "textbox_background"
          };
        }
      },
      textarea: "textfield",
      // FRAMEBOX
      framebox: {
        style(states) {
          var decorator;
          var padding = [1, 2];
          return {
            padding: padding,
            backgroundColor: "widget",
            textColor: states.disabled ? "text-on-widget-disabled" : states.showingPlaceholder ? "text-hint-on-surface" : undefined,
            decorator: "framebox"
          };
        }
      },
      //COMPLEX WIDGET
      "complex-widget": {
        style(states) {
          return {
            backgroundColor: "widget",
            padding: 10
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SPLIT BUTTON
      ---------------------------------------------------------------------------
      */
      splitbutton: {},
      "splitbutton/button": {
        style(states) {
          var decorator = "material-button";
          if (!states.disabled) {
            if (states.pressed || states.checked) {
              decorator += "-pressed";
            } else if (states.hovered) {
              decorator += "-hovered";
            } else if (states.focused) {
              decorator += "-focused";
            }
          } else {
            decorator += "-disabled";
          }
          decorator += "-left";
          return {
            decorator: decorator,
            padding: [4, 8, 4, 8],
            margin: [2, 0, 2, 4],
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-primary-on-surface"
          };
        }
      },
      "splitbutton/button/label": "button/label",
      "splitbutton/arrow": {
        style(states) {
          var decorator = "material-button";
          if (!states.disabled) {
            if (states.pressed || states.checked) {
              decorator += "-pressed";
            } else if (states.focused) {
              decorator += "-focused";
            } else if (states.hovered) {
              decorator += "-hovered";
            }
          } else {
            decorator += "-disabled";
          }
          decorator += "-right";
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
            decorator: decorator,
            cursor: states.disabled ? undefined : "pointer",
            padding: [4, 10, 4, 4],
            margin: [2, 4, 2, 0],
            textColor: "text-on-primary",
            maxWidth: 25,
            backgroundColor: "primary"
          };
        }
      },
      "splitbutton/arrow/icon": {
        style(states) {
          return {
            textColor: "text-icon-on-primary"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SLIDEBAR
      ---------------------------------------------------------------------------
      */

      slidebar: {},
      "slidebar/scrollpane": {},
      "slidebar/content": {},
      "slidebar/button": {
        include: "button",
        style(states) {
          return {
            decorator: "slidebar-button",
            backgroundColor: "primary",
            width: 20,
            paddingLeft: 0
          };
        }
      },
      "slidebar/button-forward": {
        include: "slidebar/button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-" + (states.vertical ? "down" : "right")]
          };
        }
      },
      "slidebar/button-backward": {
        include: "slidebar/button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-" + (states.vertical ? "up" : "left")]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        COMBO BOX
      ---------------------------------------------------------------------------
      */

      combobox: {
        style(states) {
          return {
            decorator: states.invalid ? "combobox-invalid" : states.focused ? "combobox-focused" : "combobox",
            backgroundColor: "widget"
          };
        }
      },
      "combobox/button": {
        include: "button",
        style(states) {
          var decorator = "combobox-button";
          if (states.disabled) decorator += "-disabled";else if (states.pressed) decorator += "-pressed";else if (states.hovered) decorator += "-hovered";
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-down"],
            padding: [0, 0, 0, 0],
            margin: 0,
            width: COMBOBOX_BUTTON_WIDTH,
            decorator: decorator
          };
        }
      },
      "combobox/button/icon": {
        style(states) {
          return {
            padding: [0, 2, 0, 0]
          };
        }
      },
      "combobox/popup": "popup",
      "combobox/list": {
        include: "list",
        style(states) {
          return {
            paddingRight: 2
          };
        }
      },
      "combobox/textfield": {
        include: "textfield",
        style(states) {
          return {
            //decorator: HELPER.pickDecorator("material-textfield", states),
            //padding: HELPER.getTextPadding(states),
            decorator: "combobox-textfield"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SELECTBOX
      ---------------------------------------------------------------------------
      */

      selectbox: "combobox",
      "selectbox/atom": {
        style(states) {
          return {
            paddingLeft: 10
          };
        }
      },
      "selectbox/atom/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-on-widget-disabled" : "text-on-widget"
          };
        }
      },
      "selectbox/atom/icon": "selectbox/atom/label",
      "selectbox/popup": "popup",
      "selectbox/list": {
        include: "list",
        style() {
          return {
            decorator: undefined
          };
        }
      },
      "selectbox/arrow": {
        include: "image",
        style(states) {
          return {
            source: zx.ui.theme.avocado.Image.URLS["arrow-down"],
            alignY: "middle",
            padding: [4, 8, 4, 8],
            width: COMBOBOX_BUTTON_WIDTH,
            decorator: "combobox-button",
            backgroundColor: "primary",
            textColor: "text-on-primary"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        CHECKED SELECT BOX
      ---------------------------------------------------------------------------
      */
      "checked-selectbox": "selectbox",
      "checked-selectbox/allNone": {
        include: "button",
        style(states) {
          return {
            padding: [2, 10],
            textColor: "text-on-primary"
          };
        }
      },
      "checked-selectbox/tag": "tag",
      tag: {
        include: "button",
        style(states) {
          return {
            padding: [1, 7],
            margin: 0,
            decorator: "tag"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TABLE
      ---------------------------------------------------------------------------
      */

      table: {
        style(states) {
          return {
            decorator: "table",
            rowHeight: 30
          };
        }
      },
      "table/statusbar": {
        style(states) {
          return {
            decorator: "table-statusbar",
            padding: [2, 5],
            textColor: "text-on-table-header"
          };
        }
      },
      "table/column-button": {
        style(states) {
          return {
            // decorator: "table-header-column-button",
            textColor: "text-primary-on-surface",
            backgroundColor: "table-header",
            padding: 3,
            icon: zx.ui.theme.avocado.Image.URLS["select-column-order"],
            width: TABLE_COL_BTN_WIDTH
          };
        }
      },
      "table-column-reset-button": {
        include: "menu-button",
        style() {
          return {
            decorator: "table-header-column-button",
            icon: "icon/16/actions/view-refresh.png"
          };
        }
      },
      "table-scroller": {
        style(states) {
          return {
            backgroundColor: "widget"
          };
        }
      },
      "table-scroller/scrollbar-x": "scrollbar",
      "table-scroller/scrollbar-y": "scrollbar",
      "table-scroller/header": {
        style() {
          return {
            decorator: "table-header"
          };
        }
      },
      "table-scroller/pane": {
        style(states) {
          return {};
        }
      },
      "table-scroller/focus-indicator": {
        style(states) {
          return {
            // attention hackerery in the qx.ui.table.pane.Scroller
            // decorator: "table-scroller-focus-indicator"
            // gets applied hardcoded! So do not try to change its
            // name here!
          };
        }
      },
      "table-scroller/resize-line": {
        style(states) {
          return {
            backgroundColor: "text-hint-on-surface",
            width: 3
          };
        }
      },
      "table-header-cell": {
        style(states) {
          return {
            decorator: states.first ? "table-header-cell-first" : "table-header-cell",
            minWidth: 13,
            font: "bold",
            paddingTop: 3,
            paddingLeft: 5,
            paddingBottom: 4,
            cursor: states.disabled ? undefined : "pointer",
            sortIcon: states.sorted ? zx.ui.theme.avocado.Image.URLS["table-" + (states.sortedAscending ? "ascending" : "descending")] : undefined
          };
        }
      },
      "table-header-cell/label": {
        include: "atom/label",
        style(states) {
          return {
            textColor: "text-on-table-header"
          };
        }
      },
      "table-header-cell/icon": {
        include: "atom/icon",
        style(states) {
          return {
            paddingRight: 5,
            textColor: "text-on-table-header"
          };
        }
      },
      "table-header-cell/sort-icon": {
        style(states) {
          return {
            alignY: "middle",
            alignX: "right",
            paddingRight: 5
          };
        }
      },
      "table-editor-textfield": {
        include: "framebox",
        style(states) {
          return {
            decorator: undefined,
            padding: [2, 2],
            backgroundColor: "widget"
          };
        }
      },
      "table-editor-selectbox": {
        include: "selectbox",
        style(states) {
          return {
            padding: [0, 2],
            backgroundColor: "surface"
          };
        }
      },
      "table-editor-combobox": {
        include: "combobox",
        style(states) {
          return {
            decorator: undefined,
            backgroundColor: "surface"
          };
        }
      },
      "progressive-table-header": {
        style(states) {
          return {
            decorator: "progressive-table-header"
          };
        }
      },
      "progressive-table-header-cell": {
        style(states) {
          return {
            decorator: "progressive-table-header-cell",
            padding: [5, 6, 5, 6]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TREEVIRTUAL
      ---------------------------------------------------------------------------
      */

      treevirtual: {
        style(states) {
          return {
            padding: [1, 2],
            backgroundColor: "box",
            decorator: "tree"
          };
        }
      },
      "treevirtual-folder": {
        style(states) {
          return {
            icon: states.opened ? zx.ui.theme.avocado.Image.URLS["folder-open"] : zx.ui.theme.avocado.Image.URLS["folder"],
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "treevirtual-file": {
        include: "treevirtual-folder",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["file"],
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "treevirtual-blank": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["blank"]
          };
        }
      },
      "treevirtual-contract": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["tree-minus"]
          };
        }
      },
      "treevirtual-expand": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["tree-plus"]
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
      "treevirtual-line": "treevirtual-blank",
      "treevirtual-end": "treevirtual-blank",
      "treevirtual-cross": "treevirtual-blank",
      /*
      ---------------------------------------------------------------------------
        RESIZER
      ---------------------------------------------------------------------------
      */

      resizer: {
        style(states) {
          return {
            decorator: "main"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SPLITPANE
      ---------------------------------------------------------------------------
      */

      splitpane: {},
      "splitpane/splitter": {
        style(states) {
          return {
            backgroundColor: "text-hint-on-surface"
          };
        }
      },
      "splitpane/splitter/knob": {
        style(states) {
          return {
            source: zx.ui.theme.avocado.Image.URLS["knob-" + (states.horizontal ? "horizontal" : "vertical")],
            padding: 0
          };
        }
      },
      "splitpane/slider": {
        style(states) {
          return {
            backgroundColor: "text-hint-on-surface",
            opacity: 0.3
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        MENU
      ---------------------------------------------------------------------------
      */

      menu: {
        style(states) {
          var result = {
            backgroundColor: "menu",
            decorator: "menu",
            spacingX: 6,
            spacingY: 1,
            iconColumnWidth: 16,
            arrowColumnWidth: 4,
            padding: 1,
            placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align"
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
      },
      "menu/slidebar": "menu-slidebar",
      "menu-slidebar": {
        include: "widget",
        style(states) {
          return {};
        }
      },
      "menu-slidebar-button": {
        style(states) {
          return {
            backgroundColor: states.hovered ? "primary-hovered" : undefined,
            padding: 6,
            center: true
          };
        }
      },
      "menu-slidebar/button-backward": {
        include: "menu-slidebar-button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-up" + (states.hovered ? "-invert" : "")]
          };
        }
      },
      "menu-slidebar/button-forward": {
        include: "menu-slidebar-button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-down" + (states.hovered ? "-invert" : "")]
          };
        }
      },
      "menu-slidebar/content": {
        style(states) {
          return {};
        }
      },
      "menu-separator": {
        style(states) {
          return {
            height: 0,
            decorator: "menu-separator",
            marginTop: 4,
            marginBottom: 4,
            marginLeft: 2,
            marginRight: 2
          };
        }
      },
      "menu-button": {
        style(states) {
          return {
            backgroundColor: states.selected ? "primary-selected" : undefined,
            padding: [2, 6]
          };
        }
      },
      "menu-button/icon": {
        include: "image",
        style(states) {
          return {
            alignY: "middle",
            textColor: states.selected ? "text-icon-on-primary" : "text-icon-on-surface"
          };
        }
      },
      "menu-button/label": {
        // include: "button/label",

        style(states) {
          return {
            alignY: "middle",
            padding: 1,
            textColor: states.selected ? "text-on-primary" : "text-on-surface"
          };
        }
      },
      "menu-button/shortcut": {
        include: "label",
        style(states) {
          return {
            alignY: "middle",
            marginLeft: 14,
            padding: 1
          };
        }
      },
      "menu-button/arrow": {
        include: "image",
        style(states) {
          return {
            source: zx.ui.theme.avocado.Image.URLS["arrow-right" + (states.selected ? "-invert" : "")],
            alignY: "middle"
          };
        }
      },
      "menu-checkbox": {
        include: "menu-button",
        style(states) {
          var icon = "menu-checkbox";
          if (states.checked) {
            icon += "-checked";
          }
          return {
            icon: zx.ui.theme.avocado.Image.URLS[icon]
          };
        }
      },
      "menu-radiobutton": {
        include: "menu-button",
        style(states) {
          var icon = "menu-radiobutton";
          if (states.checked) {
            icon += "-checked";
          }
          return {
            icon: zx.ui.theme.avocado.Image.URLS[icon]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        MENU BAR
      ---------------------------------------------------------------------------
      */

      menubar: {
        style(states) {
          return {
            backgroundColor: "surface",
            padding: [4, 2]
          };
        }
      },
      "menubar-button": {
        style(states) {
          var decorator = "button-box";
          var padding = [2, 6];
          if (states.disabled) decorator += "-disabled";else if (states.pressed) decorator += "-pressed";
          return {
            padding: padding,
            cursor: states.disabled ? undefined : "pointer",
            decorator: decorator
          };
        }
      },
      "menubar-button/icon": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : states.pressed || states.hovered ? "text-on-primary" : "text-on-surface"
          };
        }
      },
      "menubar-button/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        VIRTUAL WIDGETS
      ---------------------------------------------------------------------------
      */
      "virtual-list": {
        include: "list",
        style(states) {
          return {
            backgroundColor: "transparent"
          };
        }
      },
      "virtual-list/scrollbar-x": "scrollbar",
      "virtual-list/scrollbar-y": "scrollbar",
      "virtual-list/row-layer": "row-layer",
      "row-layer": {
        style() {
          return {
            backgroundColor: "widget",
            textColor: "text-on-widget"
          };
        }
      },
      "column-layer": {},
      "virtual-background-span": {
        style(states) {
          var style = {
            decorator: "virtual-background-span"
          };
          if (states.header) {
            style.decorator = "virtual-background-header";
            style.backgroundColor = "table-header-cell";
          } else if (states.selected) {
            style.backgroundColor = "table-row-background-selected";
          } else if (states.odd) {
            style.backgroundColor = "table-row-background-odd";
          } else {
            style.backgroundColor = "table-row-background-even";
          }
          return style;
        }
      },
      "virtual-list-header-cell": {
        style(states) {
          return {
            font: "bold",
            paddingTop: 3,
            paddingLeft: 5,
            backgroundColor: "table-header"
          };
        }
      },
      "virtual-list-header-cell-label": {
        style(states) {
          return {
            textColor: "text-on-table-header"
          };
        }
      },
      "group-item": {
        include: "label",
        style(states) {
          return {
            padding: 4,
            backgroundColor: "primary",
            textColor: "text-on-primary",
            font: "bold"
          };
        }
      },
      "virtual-selectbox": "selectbox",
      "virtual-selectbox/dropdown": "popup",
      "virtual-selectbox/dropdown/list": {},
      "virtual-combobox": "combobox",
      "virtual-combobox/dropdown": "popup",
      "virtual-combobox/dropdown/list": {},
      "virtual-tree": {
        include: "tree",
        style(states) {
          return {
            itemHeight: 21
          };
        }
      },
      "virtual-tree-folder": "tree-folder",
      "virtual-tree-file": "tree-file",
      cell: {
        style(states) {
          return {
            textColor: states.selected ? "text-on-primary" : "text-primary-on-surface",
            padding: [3, 6],
            decorator: "cell"
          };
        }
      },
      "cell-string": "cell",
      "cell-number": {
        include: "cell",
        style(states) {
          return {
            textAlign: "right"
          };
        }
      },
      "cell-image": "cell",
      "cell-boolean": "cell",
      "cell-atom": "cell",
      "cell-date": "cell",
      "cell-html": "cell",
      /*
      ---------------------------------------------------------------------------
        SCROLLBAR
      ---------------------------------------------------------------------------
      */

      scrollbar: {
        style(states) {
          return {
            decorator: "scrollbar",
            backgroundColor: "white",
            width: states.horizontal ? undefined : SCROLLBAR_TRACK_THICKNESS,
            height: states.horizontal ? SCROLLBAR_TRACK_THICKNESS : undefined,
            padding: 2
          };
        }
      },
      "scrollbar/slider": {
        style(states) {
          return {
            decorator: "scroll-slider",
            backgroundColor: "box",
            width: states.horizontal ? undefined : SCROLLBAR_TRACK_THICKNESS,
            height: states.horizontal ? SCROLLBAR_TRACK_THICKNESS : undefined,
            padding: SCROLLBAR_THUMB_PADDING
          };
        }
      },
      "scrollbar/slider/knob": {
        style(states) {
          let decorator = "scroll-knob";
          if (!states.disabled) {
            if (states.hovered && !states.pressed && !states.checked) {
              decorator = "scroll-knob-hovered";
            } else if (states.hovered && (states.pressed || states.checked)) {
              decorator = "scroll-knob-pressed-hovered";
            } else if (states.pressed || states.checked) {
              decorator = "scroll-knob-pressed";
            }
          } else decorator = "scroll-knob-disabled";
          return {
            marginTop: states.horizontal ? 0 : 3,
            cursor: states.disabled ? undefined : "pointer",
            decorator,
            backgroundColor: "widget",
            minHeight: states.horizontal ? undefined : 10,
            minWidth: states.horizontal ? 10 : undefined,
            maxWidth: states.horizontal ? undefined : SCROLLBAR_THUMB_THICKNESS,
            maxHeight: states.horizontal ? SCROLLBAR_THUMB_THICKNESS : undefined
          };
        }
      },
      "scroll-button-none": {
        style() {
          return {
            height: 0,
            width: 0,
            maxHeight: 0,
            maxWidth: 0,
            backgroundColor: "transparent",
            textColor: "transparent",
            decorator: undefined
          };
        }
      },
      "scrollbar/button-begin": "scroll-button-none",
      "scrollbar/button-end": "scroll-button-none",
      /*
      ---------------------------------------------------------------------------
        SCROLLAREA
      ---------------------------------------------------------------------------
      */

      "scrollarea/corner": {
        style(states) {
          return {
            backgroundColor: "surface"
          };
        }
      },
      scrollarea: "widget",
      "scrollarea/pane": "widget",
      "scrollarea/scrollbar-x": "scrollbar",
      "scrollarea/scrollbar-y": "scrollbar",
      /*
      ---------------------------------------------------------------------------
        RADIO BUTTON
      ---------------------------------------------------------------------------
      */

      radiobutton: {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS[states.checked ? "radiobutton-checked" : "radiobutton-unchecked"],
            paddingTop: 2,
            textColor: states.disabled ? "text-disabled-on-surface" : states.invalid ? "error" : states.checked ? "primary" : "text-primary-on-surface",
            gap: 6
          };
        }
      },
      "radiobutton/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface"
          };
        }
      },
      "radiobutton/icon": {
        style(states) {
          return {
            decorator: "radiobutton",
            padding: [2, 0, 0, 0]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        FORM
      ---------------------------------------------------------------------------
      */
      "form-renderer-label": {
        include: "label",
        style() {
          return {
            paddingTop: 3
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        CHECK BOX
      ---------------------------------------------------------------------------
      */
      checkbox: {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS[states.checked ? "checkbox-checked" : states.undetermined ? "checkbox-undetermined" : "checkbox-blank"],
            textColor: states.disabled ? "text-disabled-on-surface" : states.invalid ? "error" : states.checked ? "primary" : "text-primary-on-surface",
            gap: 6
          };
        }
      },
      "checkbox/icon": {
        style(states) {
          return {
            decorator: "checkbox",
            padding: 0,
            textColor: states.disabled ? "text-disabled-on-surface" : states.invalid ? "error" : states.checked ? "primary" : "text-primary-on-surface"
          };
        }
      },
      "checkbox/label": "radiobutton/label",
      checkedlistitem: "checkedlist-checkbox",
      /*
      ---------------------------------------------------------------------------
        SPINNER
      ---------------------------------------------------------------------------
      */

      spinner: {
        include: "combobox",
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : undefined
            // decorator: "rounded-edges"
          };
        }
      },
      "spinner/textfield": {
        include: "textfield",
        style(states) {
          return {
            decorator: undefined,
            height: undefined
          };
        }
      },
      "spinner/button": {
        include: "combobox/button",
        style(states) {
          return {
            width: COMBOBOX_BUTTON_WIDTH,
            height: 6,
            padding: [-1, 0, 0, 0]
            // decorator: "spinner-button",
          };
        }
      },
      "spinner/button/icon": {
        style(states) {
          return {
            textColor: "text-on-primary"
          };
        }
      },
      "spinner/upbutton": {
        include: "spinner/button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-up-small"],
            paddingTop: 0
            // decorator: "spinner-upbutton"
          };
        }
      },
      "spinner/upbutton/icon": "spinner/button/icon",
      "spinner/downbutton": {
        include: "spinner/button",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["arrow-down-small"],
            marginBottom: 0,
            paddingBottom: 2
            // decorator: "spinner-downbutton"
          };
        }
      },
      "spinner/downbutton/icon": "spinner/button/icon",
      /*
      ---------------------------------------------------------------------------
        DATEFIELD
      ---------------------------------------------------------------------------
      */

      datefield: {
        include: "combobox",
        alias: "combobox",
        style(states) {
          return {
            padding: 0,
            minWidth: 120
          };
        }
      },
      "datefield/button": {
        alias: "combobox/button",
        include: "combobox/button",
        style(states) {
          return {
            icon: "@MaterialIcons/calendar_month/14",
            padding: [2, 0],
            margin: 0
          };
        }
      },
      "datefield/textfield": {
        include: "combobox/textfield"
      },
      "datefield/list": "datechooser",
      "datefield/popup": {
        style(states) {
          return {
            backgroundColor: "widget",
            decorator: "framebox"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SLIDER
      ---------------------------------------------------------------------------
      */

      slider: {
        style(states) {
          var decorator = "slider";
          if (states.disabled) decorator += "-disabled";else if (states.invalid) decorator += "-invalid";else if (states.focused) decorator += "-focused";
          return {
            padding: [1, 2],
            height: 25,
            backgroundColor: "widget",
            decorator: decorator
          };
        }
      },
      "slider/knob": {
        style(states) {
          var decorator = "slider-knob";
          if (states.disabled) decorator += "-disabled";
          return {
            cursor: states.disabled ? undefined : "pointer",
            backgroundColor: states.disabled ? "primary-disabled" : "primary",
            decorator,
            margin: 2,
            height: SLIDER_THICKNESS,
            minHeight: SLIDER_THICKNESS,
            maxHeight: SLIDER_THICKNESS,
            width: SLIDER_THICKNESS,
            minWidth: SLIDER_THICKNESS,
            maxWidth: SLIDER_THICKNESS
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        GROUP BOX
      ---------------------------------------------------------------------------
      */

      groupbox: {
        style(states) {
          return {
            decorator: "groupbox"
          };
        }
      },
      "groupbox/help": {
        alias: "inlinebutton",
        include: "inlinebutton",
        style(states) {
          return {
            margin: [6, 4, 4, 4]
          };
        }
      },
      "groupbox/help/icon": "atom",
      "groupbox/legend": {
        style(states) {
          return {
            textColor: states.invalid ? "error" : undefined,
            padding: [6, 0, 0, 6],
            margin: 0
          };
        }
      },
      "groupbox/frame": {
        style(states) {
          return {
            padding: [6, 9],
            margin: [14, 0, 0, 0],
            decorator: "groupbox-frame"
          };
        }
      },
      "check-groupbox": "groupbox",
      "check-groupbox/legend": {
        include: "checkbox",
        style(states) {
          return {
            textColor: states.invalid ? "error" : undefined,
            padding: 5,
            margin: 4,
            font: "bold"
          };
        }
      },
      "radio-groupbox": "groupbox",
      "radio-groupbox/legend": {
        include: "radiobutton",
        style(states) {
          return {
            textColor: states.invalid ? "error" : undefined,
            padding: 5,
            margin: 4,
            font: "bold"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        LIST
      ---------------------------------------------------------------------------
      */

      list: {
        include: "framebox",
        style(states) {
          return {
            decorator: states.invalid ? "list-invalid" : states.focused ? "list-focused" : "list",
            padding: 0
          };
        }
      },
      "list/scrollbar-x": "scrollbar",
      "list/scrollbar-y": "scrollbar",
      "uploaded-files/lst/scrollbar-x": "scrollbar",
      "uploaded-files/lst/scrollbar-y": "scrollbar",
      listitem: {
        style(states) {
          var padding = [1, 5, 1, 5];
          if (states.lead) {
            padding = [2, 4, 1, 4];
          }
          if (states.dragover) {
            padding[2] -= 2;
          }
          return {
            padding: padding,
            backgroundColor: states.selected ? states.disabled ? "primary-disabled" : "primary" : "widget",
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "listitem/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : states.selected ? "text-on-primary" : "text-on-widget"
          };
        }
      },
      "listitem/icon": "listitem/label",
      boldlistitem: "listitem",
      "boldlistitem/label": {
        style(states) {
          return {
            textColor: states.selected ? states.disabled ? "text-disabled-on-primary" : "text-on-primary" : "text-on-widget",
            font: "heavy"
          };
        }
      },
      "noninteractive-list": {
        include: "list",
        style(states) {
          return {
            backgroundColor: "surface"
          };
        }
      },
      "noninteractive-listitem": {
        include: "listitem",
        style(states, styles) {
          styles = qx.lang.Object.clone(styles);
          styles.backgroundColor = "surface";
          return styles;
        }
      },
      "noninteractive-listitem/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface"
          };
        }
      },
      "noninteractive-listitem/icon": "noninteractive-listitem/label",
      /*
      ---------------------------------------------------------------------------
        TREE
      ---------------------------------------------------------------------------
      */

      tree: {
        style(states) {
          return {
            backgroundColor: "box",
            decorator: "tree"
          };
        }
      },
      "tree/scrollbar-x": "scrollbar",
      "tree/scrollbar-y": "scrollbar",
      "tree-folder/open": {
        include: "image",
        style(states) {
          return {
            source: states.opened ? zx.ui.theme.avocado.Image.URLS["tree-minus"] : zx.ui.theme.avocado.Image.URLS["tree-plus"],
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface"
          };
        }
      },
      "tree-folder": {
        style(states) {
          return {
            padding: [2, 8, 2, 5],
            icon: states.opened ? zx.ui.theme.avocado.Image.URLS["folder-open"] : zx.ui.theme.avocado.Image.URLS["folder"],
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface",
            iconOpened: zx.ui.theme.avocado.Image.URLS["folder-open"],
            opacity: states.drag ? 0.5 : undefined
          };
        }
      },
      "tree-folder/icon": {
        include: "image",
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface",
            padding: [0, 4, 0, 0]
          };
        }
      },
      "tree-folder/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-surface" : "text-on-surface",
            padding: [1, 2]
          };
        }
      },
      "tree-file": {
        include: "tree-folder",
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["file"]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        WINDOW
      ---------------------------------------------------------------------------
      */

      window: {
        style(states) {
          return {
            contentPadding: [10, 10, 10, 10],
            backgroundColor: "surface",
            decorator: states.maximized ? undefined : states.active ? "window-active" : "window"
          };
        }
      },
      "window-resize-frame": "resize-frame",
      "window/pane": {
        style(states) {
          return {
            padding: 10
          };
        }
      },
      "window/captionbar": {
        style(states) {
          return {
            backgroundColor: states.active ? "primary-focused" : "primary",
            margin: 0,
            padding: 8,
            decorator: "window-caption"
          };
        }
      },
      "window/icon": {
        style(states) {
          return {
            marginRight: 4,
            marginTop: 2
          };
        }
      },
      "window/title": {
        style(states) {
          return {
            cursor: "default",
            font: states.active ? "bold" : "default",
            textColor: states.active ? "text-on-primary" : "text-on-primary",
            marginRight: 20,
            marginLeft: 4,
            alignY: "middle"
          };
        }
      },
      "window/minimize-button": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["window-minimize"] + "/18",
            padding: 0,
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-primary"
          };
        }
      },
      "window/restore-button": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["window-restore"] + "/18",
            padding: 0,
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-primary"
          };
        }
      },
      "window/maximize-button": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["window-maximize"] + "/18",
            padding: 0,
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-primary"
          };
        }
      },
      "window/close-button": {
        style(states) {
          return {
            icon: zx.ui.theme.avocado.Image.URLS["window-close"] + "/18",
            padding: 0,
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-primary"
          };
        }
      },
      "window/statusbar": {
        style(states) {
          return {
            decorator: "statusbar",
            padding: [2, 6]
          };
        }
      },
      "window/statusbar-text": "label",
      /*
      ---------------------------------------------------------------------------
        DATE CHOOSER
      ---------------------------------------------------------------------------
      */
      datechooser: {
        style(states) {
          return {
            decorator: "datechooser",
            minWidth: undefined,
            maxWidth: undefined,
            width: 250
          };
        }
      },
      "datechooser/navigation-bar": {
        style(states) {
          return {
            backgroundColor: "primary",
            // textColor: states.disabled ? "text-disabled-on-surface" : states.invalid ? "error" : "text-on-primary",
            padding: [2, 10],
            textColor: "#FF0000"
          };
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
      "datechooser/button": {
        style(states) {
          var result = {
            width: 17,
            show: "icon",
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-widget"
          };
          if (states.lastYear) {
            result.icon = zx.ui.theme.avocado.Image.URLS["arrow-rewind"];
          } else if (states.lastMonth) {
            result.icon = zx.ui.theme.avocado.Image.URLS["arrow-left"];
          } else if (states.nextYear) {
            result.icon = zx.ui.theme.avocado.Image.URLS["arrow-forward"];
          } else if (states.nextMonth) {
            result.icon = zx.ui.theme.avocado.Image.URLS["arrow-right"];
          }
          return result;
        }
      },
      "datechooser/month-year-label": {
        style(states) {
          return {
            font: "bold",
            textAlign: "center",
            textColor: "text-on-widget"
          };
        }
      },
      "datechooser/date-pane": {
        //top line after month year
        style(states) {
          return {
            backgroundColor: "widget",
            textColor: "text-on-widget"
          };
        }
      },
      "datechooser/weekday": {
        style(states) {
          return {
            font: "bold",
            textAlign: "center",
            textColor: states.disabled ? "text-disabled-on-widget" : states.weekend ? "text-on-widget-selected" : "text-on-widget",
            paddingTop: 2,
            decorator: "datechooser-weekday"

            // width: 60,
          };
        }
      },
      "datechooser/day": {
        style(states) {
          let backgroundColor;
          if (states.selected && !(states.otherMonth || states.disabled)) {
            backgroundColor = "#FFFFFF44";
          } else if (states.today) {
            backgroundColor = "primary";
          } else backgroundColor = "transparent";
          return {
            textAlign: "center",
            backgroundColor,
            textColor: states.otherMonth || states.disabled ? "text-disabled-on-widget" : states.selected ? "text-on-widget-selected" : "text-on-widget",
            padding: states.today ? [1, 3] : [2, 4]
          };
        }
      },
      "datechooser/week": {
        style(states) {
          var decorator = "datechooser-week";
          if (states.header) decorator += "-header";
          return {
            textAlign: "center",
            textColor: "text-on-widget",
            padding: [2, 4],
            decorator: decorator
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        PROGRESSBAR
      ---------------------------------------------------------------------------
      */
      progressbar: {
        include: "complex-widget",
        style(states) {
          return {
            backgroundColor: "box",
            decorator: "progressbar",
            padding: 3,
            width: 200,
            height: 25
          };
        }
      },
      "progressbar/progress": {
        style(states) {
          return {
            backgroundColor: states.disabled ? "primary-disabled" : "primary",
            decorator: "progressbar-progress"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TOOLBAR
      ---------------------------------------------------------------------------
      */

      toolbar: {
        style(states) {
          return {
            padding: [0, 6],
            decorator: "toolbar"
          };
        }
      },
      "toolbar/part": {
        style(states) {
          return {
            margin: [0, 15, 0, 0]
          };
        }
      },
      "toolbar/part/container": {},
      "toolbar/part/handle": {},
      "toolbar-separator": {
        style(states) {
          return {
            decorator: "toolbar-separator",
            margin: [7, 0],
            width: 4
          };
        }
      },
      "toolbar-button": {
        style(states) {
          var decorator = "button-box";
          if (states.disabled) {
            decorator = "button-box-disabled";
          } else if (states.pressed || states.checked) {
            decorator = "button-box-pressed";
          }

          // set the right left and right decorator
          if (states.left) {
            decorator += "-left";
          } else if (states.right) {
            decorator += "-right";
          } else if (states.middle) {
            decorator += "-middle";
          }

          // set the margin
          var margin = [7, 10, 7, 0];
          if (states.left || states.middle || states.right) {
            margin = [7, 0];
          }
          return {
            cursor: states.disabled ? undefined : "pointer",
            decorator: decorator,
            margin: margin,
            padding: [3, 5]
          };
        }
      },
      "toolbar-selectbox": {
        alias: "selectbox",
        style(states) {
          var decorator = "button-box";

          // set the margin
          var margin = [7, 10, 7, 0];
          if (states.left || states.middle || states.right) {
            margin = [7, 0];
          }
          return {
            margin: margin,
            decorator: states.invalid ? "combobox-invalid" : states.focused ? "combobox-focused" : "combobox",
            backgroundColor: "widget"
          };
        }
      },
      // "toolbar-button/arrow": {
      //   include: "atom/icon",
      //   style(states) {
      //     return {
      //       textColor: "text-on-primary"
      //     };
      //   }
      // },
      "toolbar-button/icon": "button/icon",
      "toolbar-button/label": {
        style(states) {
          return {
            textColor: states.disabled ? "text-disabled-on-primary" : "text-on-primary"
          };
        }
      },
      "toolbar-menubutton": {
        include: "toolbar-button",
        style(states) {
          return {
            showArrow: true
          };
        }
      },
      "toolbar-menubutton/label": "toolbar-button/label",
      "toolbar-menubutton/icon": "button/icon",
      "toolbar-menubutton/arrow": {
        include: "atom/icon",
        style(states) {
          return {
            source: "@MaterialIcons/expand_more/16",
            cursor: states.disabled ? undefined : "pointer",
            textColor: "text-on-primary",
            padding: [0, 5],
            marginLeft: 2
          };
        }
      },
      "toolbar-splitbutton": {},
      "toolbar-splitbutton/button": {
        include: "toolbar-button",
        style(states) {
          var decorator = "button-box";
          if (states.disabled) {
            decorator = "button-box-disabled";
          } else if (states.pressed || states.checked) {
            decorator = "button-box-pressed";
          }

          // default margin, when the button is alone
          var margin = [7, 0, 7, 10];
          if (states.left || states.middle || states.right) {
            margin = [7, 0, 7, 0];
          }

          // set the right left and right decorator
          if (states.left) {
            decorator += "-left";
          } else if (states.right) {
            decorator += "-middle";
          } else if (states.middle) {
            decorator += "-middle";
          } else {
            decorator += "-left";
          }
          return {
            icon: "@MaterialIcons/expand_more/16",
            decorator: decorator,
            margin: margin
          };
        }
      },
      "toolbar-splitbutton/button/label": "button/label",
      "toolbar-splitbutton/arrow": {
        include: "toolbar-button",
        style(states) {
          var decorator = "button-box";
          if (states.disabled) {
            decorator = "button-box-disabled";
          } else if (states.pressed || states.checked) {
            decorator = "button-box-pressed";
          }

          // default margin, when the button is alone
          var margin = [7, 10, 7, 0];
          if (states.left || states.middle || states.right) {
            margin = [7, 0, 7, 0];
          }

          // set the right left and right decorator
          if (states.left) {
            decorator += "-middle";
          } else if (states.right) {
            decorator += "-right";
          } else if (states.middle) {
            decorator += "-middle";
          } else {
            decorator += "-right";
          }
          return {
            icon: "@MaterialIcons/expand_more/16",
            decorator: decorator,
            margin: margin
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        TABVIEW
      ---------------------------------------------------------------------------
      */

      tabview: {},
      "tabview/bar": {
        style(states) {
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
      },
      "tabview/bar/button-forward": {
        include: "slidebar/button-forward",
        style(states) {
          if (states.barTop) {
            return {
              marginTop: 4,
              marginBottom: 2,
              decorator: "tabview-arrow"
            };
          } else if (states.barBottom) {
            return {
              marginTop: 2,
              marginBottom: 4,
              decorator: "tabview-arrow"
            };
          } else if (states.barLeft) {
            return {
              paddingLeft: VERT_TABARROW_PADDING,
              marginLeft: 4,
              marginRight: 2,
              decorator: "tabview-arrow"
            };
          } else {
            return {
              paddingLeft: VERT_TABARROW_PADDING,
              marginLeft: 2,
              marginRight: 4,
              decorator: "tabview-arrow"
            };
          }
        }
      },
      "tabview/bar/button-backward": {
        include: "slidebar/button-backward",
        style(states) {
          if (states.barTop) {
            return {
              marginTop: 4,
              marginBottom: 2,
              decorator: "tabview-arrow"
            };
          } else if (states.barBottom) {
            return {
              marginTop: 2,
              marginBottom: 4,
              decorator: "tabview-arrow"
            };
          } else if (states.barLeft) {
            return {
              paddingLeft: VERT_TABARROW_PADDING,
              marginLeft: 4,
              marginRight: 2,
              decorator: "tabview-arrow"
            };
          } else {
            return {
              paddingLeft: VERT_TABARROW_PADDING,
              marginLeft: 2,
              marginRight: 4,
              decorator: "tabview-arrow"
            };
          }
        }
      },
      "tabview/bar/button-backward/icon": {
        style(states) {
          return {};
        }
      },
      "tabview/pane": {
        style(states) {
          return {
            // backgroundColor: "surface",
            decorator: "tabview-pane",
            padding: 10
          };
        }
      },
      "tabview-page": "widget",
      "tabview-page/button": {
        style(states) {
          var decorator;

          // default padding
          if (states.barTop || states.barBottom) {
            var padding = [6, 10, 6, 7];
          } else {
            var padding = [6, 4, 6, 4];
          }

          // decorator
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
            }
            // reduce the size by 1 because we have different decorator border width
            if (states.barTop) {
              padding[2] -= 1;
            } else if (states.barBottom) {
              padding[0] -= 1;
            } else if (states.barRight) {
              padding[3] -= 1;
            } else if (states.barLeft) {
              padding[1] -= 1;
            }
          }
          return {
            zIndex: states.checked ? 10 : 5,
            decorator: decorator,
            textColor: states.disabled ? "text-disabled" : states.checked ? "primary" : "black",
            padding: padding,
            cursor: "pointer"
          };
        }
      },
      "tabview-page/button/label": {
        style(states) {
          return {
            font: "bold",
            padding: [0, 1, 0, 1]
          };
        }
      },
      "tabview-page/button/icon": "image",
      "tabview-page/button/close-button": {
        style(states) {
          return {
            cursor: states.disabled ? undefined : "pointer",
            icon: "@MaterialIcons/close/16"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        POPOUT TABVIEW
      ---------------------------------------------------------------------------
      */

      "popout-tabview": {
        style(states, styles) {
          var _styles;
          styles = qx.lang.Object.clone((_styles = styles) !== null && _styles !== void 0 ? _styles : {}, true);
          styles.zIndex = 1e6;
          return styles;
        }
      },
      "popout-tabview/tabview": {
        include: "tabview",
        style(states, styles) {
          var _styles2;
          styles = qx.lang.Object.clone((_styles2 = styles) !== null && _styles2 !== void 0 ? _styles2 : {}, true);
          return styles;
        }
      },
      "popout-tabview/tabview/bar": {
        include: "tabview/bar",
        style(states, styles) {
          var _styles3;
          styles = qx.lang.Object.clone((_styles3 = styles) !== null && _styles3 !== void 0 ? _styles3 : {}, true);
          return styles;
        }
      },
      "popout-tabview/tabview/bar/button-forward": {
        include: "tabview/bar/button-forward",
        style(states, styles) {
          var _styles4;
          styles = qx.lang.Object.clone((_styles4 = styles) !== null && _styles4 !== void 0 ? _styles4 : {}, true);
          return styles;
        }
      },
      "popout-tabview/tabview/bar/button-backward": {
        include: "tabview/bar/button-backward",
        style(states, styles) {
          var _styles5;
          styles = qx.lang.Object.clone((_styles5 = styles) !== null && _styles5 !== void 0 ? _styles5 : {}, true);
          return styles;
        }
      },
      "popout-tabview/tabview/bar/button-backward/icon": {
        include: "tabview/bar/button-backward/icon",
        style(states, styles) {
          var _styles6;
          styles = qx.lang.Object.clone((_styles6 = styles) !== null && _styles6 !== void 0 ? _styles6 : {}, true);
          return styles;
        }
      },
      "popout-tabview/tabview/pane": {
        include: "tabview/pane",
        style(states, styles) {
          var _styles7;
          styles = qx.lang.Object.clone((_styles7 = styles) !== null && _styles7 !== void 0 ? _styles7 : {}, true);
          styles.padding = 0;
          return styles;
        }
      },
      "popout-tabview-page": {
        include: "tabview-page",
        style(states, styles) {
          var _styles8;
          styles = qx.lang.Object.clone((_styles8 = styles) !== null && _styles8 !== void 0 ? _styles8 : {}, true);
          styles.backgroundColor = "primary";
          return styles;
        }
      },
      "popout-tabview-page/button": {
        include: "tabview-page/button",
        style(states, styles) {
          var _styles9;
          styles = qx.lang.Object.clone((_styles9 = styles) !== null && _styles9 !== void 0 ? _styles9 : {}, true);
          const inlineMargin = [0, 2];
          const blockMargin = [2, 0];
          if (states.barTop) {
            styles.margin = inlineMargin;
            styles.decorator = "popout-tabview-page-button-top";
          } else if (states.barBottom) {
            styles.margin = inlineMargin;
            styles.decorator = "popout-tabview-page-button-bottom";
          } else if (states.barRight) {
            styles.margin = blockMargin;
            styles.decorator = "popout-tabview-page-button-right";
          } else if (states.barLeft) {
            styles.margin = blockMargin;
            styles.decorator = "popout-tabview-page-button-left";
          }
          styles.backgroundColor = "primary-focused";
          if (states.checked) styles.backgroundColor = "primary";
          styles.textColor = "text-on-primary";
          return styles;
        }
      },
      "popout-tabview-page/button/label": {
        include: "tabview-page/button/label",
        style(states, styles) {
          var _styles10;
          styles = qx.lang.Object.clone((_styles10 = styles) !== null && _styles10 !== void 0 ? _styles10 : {}, true);
          return styles;
        }
      },
      "popout-tabview-page/button/icon": {
        include: "tabview-page/button/icon",
        style(states, styles) {
          var _styles11;
          styles = qx.lang.Object.clone((_styles11 = styles) !== null && _styles11 !== void 0 ? _styles11 : {}, true);
          return styles;
        }
      },
      "popout-tabview-page/button/close-button": {
        include: "tabview-page/button/close-button",
        style(states, styles) {
          var _styles12;
          styles = qx.lang.Object.clone((_styles12 = styles) !== null && _styles12 !== void 0 ? _styles12 : {}, true);
          return styles;
        }
      },
      /*
      ---------------------------------------------------------------------------
        ACCORDION
      ---------------------------------------------------------------------------
      */

      /**
       * Applied to the {@link zx.ui.accordion.Accordion}.
       */
      accordion: {},
      /**
       * Applied to the scroll container used by the accordion.
       */
      "accordion/scroll": "scrollarea",
      "accordion/scroll/pane": "scrollarea/pane",
      "accordion/scroll/scrollbar-x": "scrollbar",
      "accordion/scroll/scrollbar-y": "scrollbar",
      /**
       * Applied to the {@link zx.ui.accordion.AccordionPanelGroup} used by the
       * {@link zx.ui.accordion.Accordion}.
       */
      "accordion/panelgroup": {
        style() {
          return {
            padding: [0, 10, 0, 0]
          };
        }
      },
      /**
       * Applied to individual {@link zx.ui.accordion.AccordionPanel}s.
       */
      "accordion-panel": {
        style() {
          return {
            backgroundColor: "accordion-panel-background"
          };
        }
      },
      /**
       * Applied to the composite container used by the
       * {@link zx.ui.accordion.AccordionPanel}.
       *
       * This is where any components added to the panel will be placed.
       */
      "accordion-panel/content": {},
      /**
       * Applied to the {@link zx.ui.accordion.AccordionHeader}.
       */
      "accordion-panel/header": {
        style() {
          return {
            decorator: "accordion-panel-header",
            padding: [4, 8],
            backgroundColor: "light_grey"
          };
        }
      },
      "accordion-panel/header/label": {
        style() {
          return {
            font: "large",
            textColor: "text-on-surface"
          };
        }
      },
      "accordion-panel/header/icon": {
        style(states) {
          return {
            padding: [5, 0, 0, 0],
            source: states.open ? "@MaterialIcons/expand_less/18" : "@MaterialIcons/expand_more/18",
            textColor: "text-on-surface"
          };
        }
      },
      "accordion/minimap": {
        style() {
          return {
            width: 45,
            opacity: 0.9
          };
        }
      },
      /**
       * Applied to the composite container used by the
       * {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion/minimap/content": {
        style() {
          return {
            decorator: "accordion-minimap",
            backgroundColor: "accordion-minimap-content-background",
            margin: [0, 5]
          };
        }
      },
      /**
       * Applied to the {@link zx.ui.accordion.minimap.FloatyBit} used by the
       * {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion/minimap/floatybit": {
        style() {
          return {
            backgroundColor: "accordion-minimap-floatybit-background",
            opacity: 0.5
          };
        }
      },
      /**
       * Applied to individual {@link zx.ui.accordion.minimap.MinicordionPanel}s.
       */
      "accordion-minimap-panel": {
        include: "accordion-panel",
        style(_, style) {
          var _style;
          style = qx.lang.Object.clone((_style = style) !== null && _style !== void 0 ? _style : {}, true);
          return style;
        }
      },
      /**
       * Applied to the tooltip which appears while hovering over a
       * {@link zx.ui.accordion.minimap.MinicordionPanel}.
       */
      "accordion-minimap-panel/tooltip": {
        style() {
          return {
            decorator: "accordion-minimap-tooltip",
            backgroundColor: "accordion-minimap-tooltip-background",
            padding: 5,
            margin: 5
          };
        }
      },
      /**
       * Applied to the {@link zx.ui.accordion.minimap.MinicordionHeader} used by
       * the {@link zx.ui.accordion.minimap.Minicordion}.
       */
      "accordion-minimap-panel/header": {
        include: "accordion-panel/header",
        style(_, styles) {
          var _styles13;
          styles = qx.lang.Object.clone((_styles13 = styles) !== null && _styles13 !== void 0 ? _styles13 : {}, true);
          styles.padding = [1, 4];
          styles.decorator = "accordion-minimap-panel-header";
          styles.backgroundColor = "light_grey";
          return styles;
        }
      },
      "accordion-minimap-panel/header/label": {
        include: "accordion-panel/header/label",
        style(_, styles) {
          var _styles14;
          styles = qx.lang.Object.clone((_styles14 = styles) !== null && _styles14 !== void 0 ? _styles14 : {}, true);
          styles.font = "micro";
          styles.textColor = "transparent";
          return styles;
        }
      },
      /**
       * applied to {@link zx.ui.SkeletonText} instances used in the
       * {@link zx.ui.Accordion.minimap.Minicordion}.
       */
      "accordion-minimap-skeleton-text": {},
      /**
       * applied to lines of {@link zx.ui.SkeletonText} instances used in the
       * {@link zx.ui.Accordion.minimap.Minicordion}.
       */
      "accordion-minimap-skeleton-text-line": {
        style() {
          return {
            backgroundColor: "accordion-minimap-skeleton-background",
            height: 2,
            margin: [2, 8, 1, 8]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        SKELETON TEXT
      ---------------------------------------------------------------------------
      */

      "skeleton-text": {
        style(states, styles) {
          var _styles15;
          styles = qx.lang.Object.clone((_styles15 = styles) !== null && _styles15 !== void 0 ? _styles15 : {}, true);
          return styles;
        }
      },
      "skeleton-text-line": {
        style(states, styles) {
          var _styles16;
          styles = qx.lang.Object.clone((_styles16 = styles) !== null && _styles16 !== void 0 ? _styles16 : {}, true);
          styles.backgroundColor = "text-on-surface";
          return styles;
        }
      },
      /*
      ---------------------------------------------------------------------------
        COMPARISON
      ---------------------------------------------------------------------------
      */
      "line-comparison": {
        style(states) {
          return {
            textColor: "text-on-surface"
          };
        }
      },
      "line-comparison-cell": {
        style(states) {
          return {
            minWidth: 816,
            padding: [0, 0, 0, 16],
            margin: [8, 0, 0, 0]
          };
        }
      },
      "line-comparison-row-header": {
        style(states) {
          return {
            padding: [0, 0, 0, 16],
            margin: [8, 0, 0, 0]
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        COLOR POPUP
      ---------------------------------------------------------------------------
      */

      colorpopup: {
        include: "popup",
        style(states) {
          return {
            padding: 5,
            backgroundColor: "surface",
            decorator: "main"
          };
        }
      },
      "colorpopup/field": {
        style(states) {
          return {
            margin: 2,
            width: 14,
            height: 14,
            backgroundColor: "surface",
            decorator: "main"
          };
        }
      },
      "colorpopup/selector-button": "button",
      "colorpopup/auto-button": "button",
      "colorpopup/preview-pane": "groupbox",
      "colorpopup/current-preview": {
        style(state) {
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
        style(state) {
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
        include: "button",
        style(states) {
          return {
            icon: "icon/16/actions/dialog-ok.png"
          };
        }
      },
      "colorpopup/colorselector-cancelbutton": {
        include: "button",
        style(states) {
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

      colorselector: "widget",
      "colorselector/control-bar": "widget",
      "colorselector/visual-pane": "groupbox",
      "colorselector/control-pane": "widget",
      "colorselector/preset-grid": "widget",
      "colorselector/colorbucket": {
        style(states) {
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
        style() {
          return {
            paddingTop: 12
          };
        }
      },
      "colorselector/preview-field-set": {
        include: "groupbox",
        style() {
          return {
            paddingTop: 12
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
        style(states) {
          return {
            decorator: "main",
            width: 50,
            height: 25
          };
        }
      },
      "colorselector/preview-content-new": {
        style(states) {
          return {
            decorator: "main",
            backgroundColor: "surface",
            width: 50,
            height: 25
          };
        }
      },
      "colorselector/hue-saturation-field": {
        style(states) {
          return {
            decorator: "main",
            margin: 5
          };
        }
      },
      "colorselector/brightness-field": {
        style(states) {
          return {
            decorator: "main",
            margin: [5, 7]
          };
        }
      },
      "colorselector/hue-saturation-pane": "widget",
      "colorselector/hue-saturation-handle": "widget",
      "colorselector/brightness-pane": "widget",
      "colorselector/brightness-handle": "widget",
      /*
      ---------------------------------------------------------------------------
        APPLICATION
      ---------------------------------------------------------------------------
      */

      "app-header": {
        style(states) {
          return {
            font: "headline",
            textColor: "text-on-primary",
            backgroundColor: "primary",
            padding: [8, 12]
          };
        }
      },
      "app-header-label": {
        style(states) {
          return {
            paddingTop: 5
          };
        }
      },
      "app-splitpane": {
        style(states) {
          return {
            padding: [0, 10, 10, 10]
          };
        }
      },
      /*
        --------------------
        VIRTUAL SELECTBOX
        --------------------
      */
      checkedlist: {
        include: "list",
        style(states) {
          return {
            padding: 7,
            margin: 4
          };
        }
      },
      "list-search-highlight": {
        style(states) {
          return {
            backgroundColor: "rgba(255, 251, 0, 0.53)",
            textDecorationStyle: "dotted",
            textDecorationLine: "underline"
          };
        }
      },
      "checkedlist-checkbox": {
        alias: "checkbox",
        include: "checkbox",
        style(states) {
          return {
            margin: [2, 4]
          };
        }
      },
      "checkedlist-checkbox/icon": {
        include: "checkbox/icon",
        style(states) {
          let textColor = "text-on-widget";
          if (states.disabled) {
            textColor = "text-on-widget-disabled";
          } else if (states.selected) {
            textColor = "text-on-widget-selected";
          } else if (states.checked || states.undetermined) {
            textColor = "primary";
          }
          return {
            textColor,
            backgroundColor: states.checked || states.undetermined ? "text-on-widget" : "widget"
          };
        }
      },
      "checkedlist-checkbox/label": {
        include: "checkbox/label",
        style(states) {
          return {
            textColor: states.disabled ? "text-on-widget-disabled" : states.selected ? "text-on-widget-selected" : "text-on-widget"
          };
        }
      },
      "qxl-datagrid": {
        style(states) {
          return {
            backgroundColor: "box",
            decorator: "qxl-datagrid"
          };
        }
      },
      // "qxl-datagrid/scrollbar": {
      //   include: "scrollbar",

      //   // style(states) {
      //   //   return {
      //   //     decorator: "table-scrollbar",
      //   //     margin: 0
      //   //   };
      //   // }
      // },
      "qxl-datagrid/scrollbar-x": "scrollbar",
      "qxl-datagrid/scrollbar-y": "scrollbar",
      // DATAGRID
      "qxl-datagrid-widgetpane": {
        style(states) {
          return {
            padding: 4
          };
        }
      },
      "qxl-datagrid-cell": {
        style(states) {
          let backgroundColor = "transparent";
          let textColor = "text-on-surface";
          if (states.selected) {
            backgroundColor = "primary";
            textColor = "text-on-primary";
          }
          return {
            backgroundColor,
            textColor
          };
        }
      },
      "qxl-datagrid-cell/label": {
        style(states) {
          return {
            paddingTop: 2,
            textColor: states.selected ? "text-on-primary" : "text-on-surface"
          };
        }
      },
      "qxl-datagrid-cell/icon": {
        style(states) {
          return {
            paddingTop: 2,
            textColor: states.selected ? "text-on-primary" : "text-on-surface"
          };
        }
      },
      "qxl-datagrid-cell/expander": {
        style(states) {
          return {
            paddingTop: 2,
            textColor: states.selected ? "text-on-primary" : "primary"
          };
        }
      },
      "qxl-datagrid-header": {
        style(states) {
          return {
            padding: [0, 4],
            backgroundColor: "table-header"
          };
        }
      },
      "qxl-datagrid-header-cell": {},
      "qxl-datagrid-header-cell/label": {
        style(states) {
          return {
            textColor: "text-on-table-header"
          };
        }
      },
      "qxl-datagrid-row": {
        style(states) {
          let backgroundColor = "transparent";
          let textColor = "table-row";
          if (states.selected) {
            backgroundColor = "primary";
            textColor = "table-row-selected";
          }
          return {
            backgroundColor,
            textColor
          };
        }
      },
      pricefield: "spinner",
      "pricefield/textfield": {
        include: "spinner/textfield"
      },
      "pricefield/currencysign": "spinner/textfield",
      unitlabelfield: "spinner",
      "unitlabelfield/textfield": "spinner/textfield",
      "unitlabelfield/unitsymbol": {
        include: "spinner/textfield",
        style(states) {
          return {
            paddingTop: 3,
            marginRight: 4
          };
        }
      },
      "prices-table-header-cell": "table-header-cell",
      "prices-table-header-cell/label": {
        include: "table-header-cell/label",
        style(states) {
          return {
            font: "default"
          };
        }
      },
      /*
      ---------------------------------------------------------------------------
        DIFFERENCE VIEWER
      ---------------------------------------------------------------------------
      */

      "difference-cell": {
        style(state) {
          return {
            decorator: "differenceviewer-cell",
            textColor: "black"
          };
        }
      },
      "difference-cell-rowtitles": {
        style(state) {
          return {
            decorator: "differenceviewer-cell",
            textColor: "black"
          };
        }
      },
      "difference-viewer": {
        style(state) {
          return {};
        }
      },
      "difference-viewer/header": {
        style(state) {
          return {
            decorator: "differenceviewer-columntitles"
          };
        }
      },
      "difference-viewer/content": {
        style(state) {
          return {};
        }
      },
      "difference-viewer/scrollbar-x": "scrollbar",
      "difference-viewer/scrollbar-y": "scrollbar",
      "difference-column": {
        style(state, style) {
          return {
            margin: [0, 8],
            decorator: "differenceviewer-column"
          };
        }
      },
      "difference-column-rowtitles": {
        style(state) {
          return {};
        }
      },
      "difference-header": {
        style(state) {
          return {
            iconLeft: "@MaterialIcons/cheveron_left/16",
            iconRight: "@MaterialIcons/cheveron_right/16",
            iconClear: "@MaterialIcons/delete/16",
            margin: [0, 8]
          };
        }
      },
      "difference-header-group": {
        style(state) {
          return {
            backgroundColor: "light_grey",
            decorator: "differenceviewer-header-group",
            margin: [4, 0]
          };
        }
      },
      "difference-header-button": {
        include: "button",
        style(state, style) {
          var _style2;
          style = qx.lang.Object.clone((_style2 = style) !== null && _style2 !== void 0 ? _style2 : {});
          style.decorator = "differenceviewer-header-button";
          style.padding = 2;
          if (!state.disabled && state.hovered) style.backgroundColor = "#0002";else style.backgroundColor = "transparent";
          return style;
        }
      },
      "difference-header-button/icon": {
        include: "button/icon",
        style(state, style) {
          var _style3;
          style = qx.lang.Object.clone((_style3 = style) !== null && _style3 !== void 0 ? _style3 : {});
          if (state.disabled) style.textColor = "primary-disabled";else style.textColor = "primary";
          style.cursor = "pointer";
          return style;
        }
      },
      "difference-header/btnLeft": "difference-header-button",
      "difference-header/btnRight": "difference-header-button",
      "difference-header/btnClear": "difference-header-button"
    }
  });
  zx.ui.theme.avocado.Appearance.$$dbClassInfo = $$dbClassInfo;
})();
