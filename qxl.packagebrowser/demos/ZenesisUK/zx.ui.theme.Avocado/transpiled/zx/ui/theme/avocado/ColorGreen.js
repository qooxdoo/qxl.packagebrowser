(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "zx.ui.theme.avocado.ColorHelper": {
        "require": true
      },
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      }
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
   *    2019-2022 Zenesis Ltd, https://www.zenesis.com
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

  const helper = zx.ui.theme.avocado.ColorHelper;
  qx.Theme.define("zx.ui.theme.avocado.ColorGreen", {
    colors: {
      // actual implementations must supply these 4 colors
      // at least

      // theme colors
      primary: "#067B42",
      "text-disabled-on-box": "white",
      menu: "white",
      "border-tab": "grey",
      "text-on-box": "black",
      "half-selected": "#DEFFD5",
      "selected-on-box": "half-selected",
      "button-border": "#ACACAC",
      "inlinebutton-hovered": "#989898",
      secondary: "#018786",
      surface: "white",
      widget: "#333F4A",
      textbox_background: "widget",
      box: "#E7E7E8",
      error: "red",
      grey: "#949494",
      light_grey: "#DBDBDB",
      "toolbar-button": "widget",
      // automatic colors

      "text-on-primary": helper.onX,
      "text-on-primary-disabled": helper.xState,
      "text-on-primary-selected": helper.xState,
      "text-on-primary-hovered": helper.xState,
      "text-on-secondary": helper.onX,
      "text-on-secondary-disabled": helper.xState,
      "text-on-secondary-selected": helper.xState,
      "text-on-secondary-hovered": helper.xState,
      "text-on-surface": helper.onX,
      "text-on-surface-disabled": helper.xState,
      "text-on-surface-selected": helper.xState,
      "text-on-surface-hovered": helper.xState,
      "text-on-error": helper.onX,
      "text-on-error-disabled": helper.xState,
      "text-on-error-selected": helper.xState,
      "text-on-error-hovered": helper.xState,
      "text-on-widget": helper.onX,
      "text-on-widget-disabled": helper.xState,
      "text-on-widget-selected": helper.xState,
      "text-on-widget-hovered": helper.xState,
      "selected-on-widget": helper.xState,
      "primary-hovered": helper.xState,
      "primary-disabled": helper.xState,
      "primary-focused": helper.xState,
      "primary-selected": helper.xState,
      "primary-selected_disabled": helper.xState,
      "error-focused": helper.xState,
      "widget-disabled": helper.xState,
      "widget-hovered": helper.xState,
      "primary-on-widget": "#A2D8C1",
      "toolbar-button-disabled": helper.xState,
      // alpha colors
      "primary-alpha-5": helper.setAlpha,
      "primary-alpha-10": helper.setAlpha,
      "primary-alpha-30": helper.setAlpha,
      "secondary-alpha-5": helper.setAlpha,
      "secondary-alpha-7": helper.setAlpha,
      "primary-disabled-alpha-20": helper.setAlpha,
      // Text-primary on "surface" background
      "text-primary-on-surface": helper.textXonY,
      "text-hint-on-surface": "grey",
      "text-disabled-on-surface": helper.textXonY,
      "text-icon-on-surface": helper.textXonY,
      "text-disabled-on-primary": helper.textXonY,
      "text-disabled-on-widget": helper.textXonY,
      "text-icon-on-primary": helper.textXonY,
      // the following colors are used directly in table code

      "table-row-background-focused-selected": "primary-focused",
      "table-row-background-focused": "primary-alpha-5",
      "table-row-background-selected": "secondary-alpha-7",
      "table-row-background-even": "transparent",
      "table-row-background-odd": "transparent",
      "table-header": "box",
      "text-on-table-header": "text-on-surface",
      "table-header-border": "widget",
      "table-header-cell": "widget",
      "table-header-cell-hover": [255, 255, 255],
      // foreground
      "table-row": "text-on-widget",
      "text-on-widget_selected": helper.xState,
      "table-row-selected": "text-on-widget_selected",
      // table grid color
      "table-row-line": "text-hint-on-surface",
      "table-column-line": "black",
      // used in the widget-browser-app
      "text-disabled": "text-disabled-on-surface",
      // used in progressive code
      "progressive-table-header": "table-header-cell",
      "progressive-table-row-background-even": "primary-alpha-5",
      "progressive-table-row-background-odd": "surface",
      "progressive-progressbar-background": "surface",
      "progressive-progressbar-indicator-done": "primary",
      "progressive-progressbar-indicator-undone": "surface",
      "progressive-progressbar-percent-background": "surface",
      "progressive-progressbar-percent-text": "text-primary-on-surface",
      // accordion

      "accordion-panel-background": "surface",
      "accordion-minimap-content-background": "transparent",
      "accordion-minimap-floatybit-background": "primary",
      "accordion-minimap-tooltip-background": "surface",
      "accordion-minimap-skeleton-background": "primary",
      header_on_widget: "#FB4646",
      header: "primary",
      avocadowhite: "#FFFFFF",
      cpanel: "header",
      "cpanel-selected": () => zx.ui.theme.avocado.ColorHelper.darker("header"),
      "text-on-cpanel": helper.onX
    }
  });
  zx.ui.theme.avocado.ColorGreen.$$dbClassInfo = $$dbClassInfo;
})();
