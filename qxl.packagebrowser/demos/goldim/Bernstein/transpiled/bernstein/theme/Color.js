(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "usage": "dynamic",
        "require": true
      },
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.client.Css": {
        "require": true
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "css.rgba": {
          "load": true,
          "className": "qx.bom.client.Css"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2015-2021 Norbert Schröder
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("bernstein.theme.Color", {
    colors: {
      "app-header-start": "#1E1E1E",
      "app-header-end": "#151515",
      "background-application": "#171717",
      "background-datechooser": "#202020",
      "background-group": "#171717",
      "background-htmlarea": "#F0F0F0",
      "background-light": "#444444",
      "background-pane": "#191919",
      "background-selected": "#111111",
      "background-splitpane": "#232323",
      "background-week": "#151515",
      "background-weekday": "#151515",
      "border-button": "#101010",
      "border-button-disabled": "#151515",
      "border-button-hovered": "#222222",
      "border-button-inner": "#424242",
      "border-button-inner-hovered": "#494949",
      "border-captionbar-active-bottom": "black",
      "border-captionbar-active-top": "#303030",
      "border-captionbar-inactive-bottom": "#151515",
      "border-captionbar-inactive-top": "#323232",
      "border-dragover": "#E29A14",
      "border-group": "#090909",
      "border-group-inner": "#303030",
      "border-header-cell": "#090909",
      "border-input": "#101010",
      "border-input-disabled": "transparent",
      "border-invalid": "#561818",
      "border-main": "#050505",
      "border-menu": "#070707",
      "border-menu-bar": "#111111",
      "border-popup": "#070707",
      "border-progressbar": "#101010",
      "border-separator": "#808080",
      "border-table": "#070707",
      "border-table-statusbar": "#101010",
      "border-tabview-button-inactive": "#323232",
      "border-tabview-pane": "#0C0C0C",
      "border-window": "#0A0A0A",
      "border-window-top": "#050505",
      "button-start": "#303030",
      "button-end": "#202020",
      "button-end-checked": "#442A00",
      "button-end-checked-hovered": "#5E3A00",
      "button-disabled-start": "#454545",
      "button-disabled-end": "#353535",
      "button-hovered-start": "#393939",
      "button-hovered-end": "#292929",
      "button-pressed-start": "#151515",
      "button-pressed-end": "#383838",
      "captionbar-active-start": "#1A1A1a",
      "captionbar-active-end": "#090909",
      "captionbar-inactive-start": "#262626",
      "captionbar-inactive-end": "#171717",
      "checkbox-hovered-inner-invalid": "#FAF2F2",
      "checkbox-hovered-invalid": "#F7E9E9",
      "close-button": "#7A1225",
      "close-button-hovered": "#B51316",
      "groupitem-start": "#A7A7A7",
      "groupitem-end": "#949494",
      "groupitem-text": "white",
      "header-cell-hovered-start": "#454545",
      "header-cell-hovered-end": "#252525",
      "inactive-button": "#525252",
      "input-disabled": "#2C2C2C",
      "input-start": "#050505",
      "input-end": "#303030",
      "input-hovered-start": "#191919",
      "input-hovered-end": "#444444",
      "invalid": "#990000",
      "keyboard-focus": "black",
      "menu-bar-button-hovered-start": "transparent",
      "menu-bar-button-hovered-end": "#101010",
      "menu-separator-top": "#050505",
      "menu-separator-bottom": "#303030",
      "minimize-button-hovered": "#33A533",
      "minimize-button": "#297A11",
      "maximize-button": "#876311",
      "maximize-button-hovered": "#B7AD2B",
      "progressbar-start": "#191919",
      "progressbar-end": "#292929",
      "progressive-table-header-border-right": "#F2F2F2",
      "radiobutton-hovered-invalid": "#F7EAEA",
      "restore-button": "#876311",
      "restore-button-hovered": "#B7AD2B",
      "scrollbar-start": "#232323",
      "scrollbar-end": "#171717",
      "shadow": qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999",
      "shadow-input": "#101010",
      "shadow-menu": "#0C0C0C",
      "shadow-popup": "#090909",
      "shadow-table": "#080808",
      "shadow-window": "#050505",
      "slider-start": "#121212",
      "slider-end": "#050505",
      "table-column-line": "#090909",
      "table-focus-indicator": "#845909",
      "table-header-start": "#E8E8E8",
      "table-header-end": "#B3B3B3",
      "table-pane": "transparent",
      "table-row": "#A2A2A2",
      "table-row-background-even": "transparent",
      "table-row-background-focused": "#353535",
      "table-row-background-focused-selected": "#252525",
      "table-row-background-odd": "#151515",
      "table-row-background-selected": "#090909",
      "table-row-line": "#101010",
      "table-row-selected": "#FFFEFE",
      "table-statusbar-start": "#252525",
      "table-statusbar-end": "#191919",
      "tabview-button-inactive-start": "#222222",
      "tabview-button-inactive-end": "#171717",
      "tabview-pane-start": "#050505",
      "tabview-pane-end": "#191919",
      "text-active": "#A2A2A2",
      "text-app-header": "#FFFFFF",
      "text-disabled": "#7B7A7E",
      "text-gray": "#4A4A4A",
      "text-highlight": "#E29A14",
      "text-hovered": "#E29A14",
      "text-label": "#A2A2A2",
      "text-light": "#909090",
      "text-placeholder": "#727272",
      "text-selected": "#AA720A",
      "toolbar-start": "#2D2D2D",
      "toolbar-end": "#1D1D1D",
      "toolbar-separator-left": "#131313",
      "toolbar-separator-right": "#373737",
      "tooltip-error": "#C82C2C",
      "window-button-start": "transparent",
      "window-button-end": "black",
      "window-statusbar-background": "#101010"
    }
  });
  bernstein.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
