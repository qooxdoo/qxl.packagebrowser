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
       2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("darktheme.theme.Color", {
    colors: {
      "app-header-start": "#1E1E1E",
      "app-header-end": "#151515",
      "background-application": "#626262",
      "background-datechooser": "#202020",
      "background-group": "#171717",
      "background-htmlarea": "#F0F0F0",
      "background-light": "#444444",
      "background-pane": "transparent",
      "background-selected": "#3E646E",
      "background-splitpane": "#333333",
      "background-week": "#151515",
      "background-weekday": "#151515",
      "background-window": "#525252",
      "border-button": "#101010",
      "border-button-disabled": "#151515",
      "border-button-hovered": "#222222",
      "border-button-inner": "#E2C894",
      "border-button-inner-pressed": "#525252",
      "border-button-inner-hovered": "#494949",
      "border-captionbar-active-bottom": "#808080",
      "border-captionbar-inactive-bottom": "#A0A0A0",
      "border-disabled": "#B6B6B6",
      "border-dragover": "#33508D",
      "border-group": "#FFE2AE",
      "border-group-inner": "#D4BF99",
      "border-header-cell": "#090909",
      "border-input": "#101010",
      "border-input-disabled": "transparent",
      "border-invalid": "#561818",
      "border-main": "#050505",
      "border-menu": "#101010",
      "border-menu-bar": "#613F2B",
      "border-popup": "#070707",
      "border-progressbar": "#101010",
      "border-separator": "#808080",
      "border-statusbar-top": "#202020",
      "border-statusbar-top-inner": "#808080",
      "border-table": "#070707",
      "border-table-statusbar": "#101010",
      "border-tabview-button-active": "black",
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
      "captionbar-active-start": "#525252",
      "captionbar-active-end": "#212121",
      "captionbar-inactive-start": "#909090",
      "captionbar-inactive-end": "#535353",
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
      "menu-separator-top": "black",
      "menu-separator-bottom": "gray",
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
      "shadow-scrollbar": "#5E5E5E",
      "shadow-table": "#080808",
      "shadow-window": "#070707",
      "slider-start": "#121212",
      "slider-end": "#050505",
      "table-column-line": "#CCCCCC",
      "table-focus-indicator": "#80B4EF",
      "table-pane": "#F3F3F3",
      "table-row-background-even": "#F3F3F3",
      "table-row-background-focused-selected": "#3E646E",
      "table-row-background-focused": "#AFC1D5",
      "table-row-background-odd": "#E4E4E4",
      "table-row-background-selected": "#3E646E",
      "table-row": "#1A1A1A",
      "table-row-line": "transparent",
      "table-row-selected": "#FFFEFE",
      "tabview-button-inactive-start": "#222222",
      "tabview-button-inactive-end": "#171717",
      "tabview-pane-start": "#050505",
      "tabview-pane-end": "#191919",
      "text-active": "black",
      "text-app-header": "#FFFFFF",
      "text-button": "#F0F0F0",
      "text-caption": "white",
      "text-disabled": "#7B7A7E",
      "text-gray": "#4A4A4A",
      "text-highlight": "white",
      "text-inactive": "silver",
      "text-invalid": "#990000",
      "text-hovered": "#F0F0F0",
      "text-label": "white",
      "text-label-disabled": "silver",
      "text-light": "#909090",
      "text-placeholder": "#727272",
      "text-selected": "#FDFDFD",
      "text-textfield": "#050505",
      "text-title": "white",
      "text-window": "white",
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
  darktheme.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
