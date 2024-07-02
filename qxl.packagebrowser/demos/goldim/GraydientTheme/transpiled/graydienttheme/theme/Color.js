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
       2010-2021 Norbert Schröder
  
     License:
       MIT
  
     Authors:
       * Norbert Schröder (scro34)
  
  ************************************************************************ */

  qx.Theme.define("graydienttheme.theme.Color", {
    colors: {
      "app-header-start": "#1E1E1E",
      "app-header-end": "#151515",
      "background-application": "#626262",
      "background-htmlarea": "#F0F0F0",
      "background-light": "#F0F0F0",
      "background-list": "#E5E5E5",
      "background-list-focused": "#EFEFEF",
      "background-medium": "#D7D7D7",
      "background-menu": "#BFBFBF",
      "background-pane": "#F0F0F0",
      "background-selected": "#424242",
      "background-selected-light": "#929292",
      "background-selected-dark": "#50638A",
      "background-tabview-unselected": "#1866B5",
      "background-week": "#151515",
      "background-window-active": "#999999",
      "background-window-button": "#292929",
      "background-window-inactive": "#C2C2C2",
      "border-button": "#626262",
      "border-button-checked": "#525252",
      "border-captionbar-active-top": "#B4B4B4",
      "border-captionbar-inactive-top": "#CCCCCC",
      "border-checkbox": "#525252",
      "border-disabled": "#828282",
      "border-dragover": "#33508D",
      "border-focused": "#2D468F",
      "border-header-cell": "#828282",
      "border-input": "#727272",
      "border-invalid": "#C12B2B",
      "border-list": "#949494",
      "border-main": "#CECECE",
      "border-menu": "#646464",
      "border-menu-separator-bottom": "#FAFAFA",
      "border-menu-separator-top": "gray",
      "border-popup": "#525252",
      "border-progressbar": "#949494",
      "border-progressbar-top": "#949494",
      "border-tabview-pane": "#828282",
      "border-toolbar": "#727272",
      "border-toolbar-separator-right": "#F5F5F5",
      "border-toolbar-separator-left": "#727272",
      "border-window": "#404040",
      "border-window-button": "#222222",
      "border-window-button-inner": "#A7A7A7",
      "border-window-top": "#505050",
      "button-start": "#D6D6D6",
      "button-end": "#9E9E9E",
      "button-hovered-start": "#F2F2F2",
      "button-hovered-end": "#BEBEBE",
      "button-checked-start": "#FFFFFF",
      "button-checked-end": "#D6D6D6",
      "close-button": "#9E0000",
      "close-button-hovered": "#C60000",
      "groupitem-start": "#A7A7A7",
      "groupitem-end": "#949494",
      "groupitem-text": "white",
      "inactive-button": "#525252",
      "input-focused-start": "#F6F8FE",
      "input-focused-end": "#FAFBFE",
      "input-hovered-start": "#191919",
      "input-hovered-end": "#444444",
      "invalid": "#990000",
      "keyboard-focus": "silver",
      "menu-button-start": "#8699B8",
      "menu-button-end": "#50638A",
      "menu-separator-top": "black",
      "menu-separator-bottom": "gray",
      "minimize-button": "#0A9E00",
      "minimize-button-hovered": "#0DC600",
      "maximize-button": "#9E9E00",
      "maximize-button-hovered": "#C6C600",
      "progressbar-start": "#3F5B8C",
      "progressbar-end": "#1F2D45",
      "progressive-table-header-border-right": "#F2F2F2",
      "scrollbar-slider-start": "#B2B2B2",
      "scrollbar-slider-end": "#DBDBDB",
      "scroll-knob-start": "#DBDBDB",
      "scroll-knob-end": "#A1A1A1",
      "scroll-knob-pressed-start": "#C2C2C2",
      "scroll-knob-pressed-end": "#828282",
      "shadow-inactive": qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999",
      "shadow-button": "#A0A0A0",
      "shadow": "#303030",
      "shadow-input": "#303030",
      "shadow-menu": "#0C0C0C",
      "shadow-window-button": "#393939",
      "slider-knob-start": "#FBFBFB",
      "slider-knob-end": "#D2D2D2",
      "slider-knob-pressed-start": "#FFFFFF",
      "slider-knob-pressed-end": "#FEFEFE",
      "table-column-line": "#CCCCCC",
      "table-focus-indicator": "#929292",
      "table-header-start": "#D6D6D6",
      "table-header-end": "#9E9E9E",
      "table-pane": "#F3F3F3",
      "table-row-background-even": "#F3F3F3",
      "table-row-background-focused": "#A3B1C9",
      "table-row-background-focused-selected": "#50638A",
      "table-row-background-odd": "#E4E4E4",
      "table-row-background-selected": "#50638A",
      "table-row": [0, 0, 0],
      "table-row-line": "#EEEEEE",
      "table-row-selected": [255, 255, 255],
      "tabview-button-start": "#E2E2E2",
      "tabview-button-end": "#B2B2B2",
      "tabview-button-checked-start": "#3F5B8C",
      "tabview-button-checked-end": "#1F2D45",
      "tabview-button-hovered-start": "#D2D2D2",
      "tabview-button-hovered-end": "#828282",
      "tabview-pane-start": "#CBCBCB",
      "tabview-pane-end": "#B1B1B1",
      "text-active": "black",
      "text-app-header": "#FFFFFF",
      "text-caption": "#F5F5F5",
      "text-caption-inactive": "#BFBFBF",
      "text-disabled": "#777777",
      "text-highlight": "white",
      "text-inactive": "#828282",
      "text-invalid": "#990000",
      "text-label": "#101010",
      "text-placeholder": "#828282",
      "text-selected": "#FFFFFF",
      "text-tooltip": "black",
      "toolbar-start": "#C2C2C2",
      "toolbar-end": "#A2A2A2",
      "toolbar-separator-left": "#131313",
      "toolbar-separator-right": "#373737",
      "window-button-start": "transparent",
      "window-button-end": "#FFFFFF",
      "window-caption-active-start": "#727272",
      "window-caption-active-end": "#323232",
      "window-caption-inactive-start": "#AFAFAF",
      "window-caption-inactive-end": "#6D6D6D"
    }
  });
  graydienttheme.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();
