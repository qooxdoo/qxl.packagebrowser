function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  var _colors;

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

  /* *********************************************************************
  
     Copyright: sqville 2021
  
     License:
       MIT
  
     Authors:
       * Chris Eskew (sqville) chris.eskew@sqville.com
  
  ************************************************************************ */

  /**
   * wireframe color theme, based off of Simple color theme (qooxdoo) and Semantic default
   */
  qx.Theme.define("ville.theme.wireframe.Color", {
    aliases: {
      primarycolor: "#3b83c0"
    },
    colors: (_colors = {
      //black
      "main": "#000000",
      //white
      "background": "#ffffff",
      //gray
      "primary": "#808080",
      //yellow
      "highlight": "gray",
      "text-disabled": "rgba(0, 0, 0, 0.4)",
      //************************
      //*** Color Pallette 1 ***
      //************************
      //"primary" : [33, 133, 208], //#2185D0
      "secondary": "#1b1c1d",
      "tertiary": "#5bbd72"
    }, _defineProperty(_colors, "background", "#ffffff"), _defineProperty(_colors, "light-background", "#E0ECFF"), _defineProperty(_colors, "background-selected", "#6694E3"), _defineProperty(_colors, "background-selected-disabled", "#CDCDCD"), _defineProperty(_colors, "background-selected-dark", "#5685D6"), _defineProperty(_colors, "background-disabled", "#F7F7F7"), _defineProperty(_colors, "background-disabled-checked", "#BBBBBB"), _defineProperty(_colors, "background-pane", "#ffffff"), _defineProperty(_colors, "background-invalid", "#fff0f0"), _defineProperty(_colors, "background-group-item", "#BABABA"), _defineProperty(_colors, "tabview-unselected", "#1866B5"), _defineProperty(_colors, "tabview-button-border", "#134983"), _defineProperty(_colors, "tabview-label-active-disabled", "#D9D9D9"), _defineProperty(_colors, "tabviewspacebar-bar-selected", "#888888"), _defineProperty(_colors, "tabview-text-normal", "#444444"), _defineProperty(_colors, "tabviewspot-button-checked", "#F2F2F2"), _defineProperty(_colors, "tabviewspot-button-hovered", "#F7F7F7"), _defineProperty(_colors, "combobox-hovered", "#F2F2F2"), _defineProperty(_colors, "combobox-item-selected", "#F7F7F7"), _defineProperty(_colors, "group-item-", "#ffffff"), _defineProperty(_colors, "link", "#24B"), _defineProperty(_colors, "group-item", "#ffffff"), _defineProperty(_colors, "scrollbar-bright", "#F1F1F1"), _defineProperty(_colors, "scrollbar-dark", "#EBEBEB"), _defineProperty(_colors, "button", "rgba(0, 0, 0, 0.6)"), _defineProperty(_colors, "button-border", "#BBB"), _defineProperty(_colors, "button-border-hovered", "#939393"), _defineProperty(_colors, "invalid", "#FF0000"), _defineProperty(_colors, "button-box-bright", "#e0e0e0"), _defineProperty(_colors, "button-box-bright-hovered", "#e8e8e8"), _defineProperty(_colors, "button-box-dark", "#E3E3E3"), _defineProperty(_colors, "button-box-bright-pressed", "#cccccc"), _defineProperty(_colors, "button-box-dark-pressed", "#F5F5F5"), _defineProperty(_colors, "border-lead", "#888888"), _defineProperty(_colors, "button-text", "rgba(0, 0, 0, 0.6)"), _defineProperty(_colors, "button-text-hovered", "rgba(0, 0, 0, 0.8)"), _defineProperty(_colors, "button-focus-shadow", qx.core.Environment.get("css.rgba") ? "rgba(81, 167, 232, 0.8)" : "#51A7E8"), _defineProperty(_colors, "textfield-selected", qx.core.Environment.get("css.rgba") ? "rgba(133, 183, 217, 1)" : "#85b7d9"), _defineProperty(_colors, "textfield-selected-darker", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.5)" : "#BDBEBE"), _defineProperty(_colors, "progressbar-base", qx.core.Environment.get("css.rgba") ? "rgba(229, 229, 229, 1)" : "#E5E5E5"), _defineProperty(_colors, "progressbar-gray", qx.core.Environment.get("css.rgba") ? "rgba(136, 136, 136, 1)" : "#888888"), _defineProperty(_colors, "progressbar-complete", qx.core.Environment.get("css.rgba") ? "rgba(33, 186, 69, 1)" : "#21BA45"), _defineProperty(_colors, "progressbar-warning", qx.core.Environment.get("css.rgba") ? "rgba(242, 192, 55, 1)" : "#F2C037"), _defineProperty(_colors, "progressbar-error", qx.core.Environment.get("css.rgba") ? "rgba(219, 40, 40, 1)" : "#DB2828"), _defineProperty(_colors, "ville-black", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 1)" : "#000000"), _defineProperty(_colors, "ville-arrow-gray", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.6)" : "#444444"), _defineProperty(_colors, "ville-arrow-med-gray", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#444444"), _defineProperty(_colors, "window-border", "#2E3A46"), _defineProperty(_colors, "window-border-inner", "white"), _defineProperty(_colors, "white-box-border", "#D8D8D8"), _defineProperty(_colors, "shadow", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999"), _defineProperty(_colors, "shadow-light", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#CCCCCC"), _defineProperty(_colors, "border-main", "#6694E3"), _defineProperty(_colors, "border-light", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8"), _defineProperty(_colors, "border-light-darker", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#D8D8D8"), _defineProperty(_colors, "border-light-shadow", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8"), _defineProperty(_colors, "border-super-light", qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.06)" : "#EEEEEE"), _defineProperty(_colors, "border-separator", "#808080"), _defineProperty(_colors, "text-combobox-listitem", "rgba(0, 0, 0, 0.6)"), _defineProperty(_colors, "text", "rgba(0, 0, 0, 0.87)"), _defineProperty(_colors, "text-darker", "rgba(0, 0, 0, 0.9)"), _defineProperty(_colors, "text-selected", "#000000"), _defineProperty(_colors, "text-placeholder", "rgba(0, 0, 0, 0.4)"), _defineProperty(_colors, "tooltip", "#FFFFE1"), _defineProperty(_colors, "tooltip-text", "#000000"), _defineProperty(_colors, "table-border", "#DEDEDE"), _defineProperty(_colors, "table-header", "#F9FAFB"), _defineProperty(_colors, "table-focus-indicator", [179, 217, 255]), _defineProperty(_colors, "table-header-cell", "background"), _defineProperty(_colors, "table-row-background-focused-selected", "#808080"), _defineProperty(_colors, "table-row-background-focused", "#808080"), _defineProperty(_colors, "table-row-background-selected", "gray"), _defineProperty(_colors, "table-row-background-even", "#ffffff"), _defineProperty(_colors, "table-row-background-odd", "#ffffff"), _defineProperty(_colors, "table-row-selected", [255, 255, 255]), _defineProperty(_colors, "table-row", [0, 0, 0]), _defineProperty(_colors, "table-row-line", "black"), _defineProperty(_colors, "table-column-line", "black"), _defineProperty(_colors, "progressive-table-header", "#AAAAAA"), _defineProperty(_colors, "progressive-table-row-background-even", [250, 248, 243]), _defineProperty(_colors, "progressive-table-row-background-odd", [255, 255, 255]), _defineProperty(_colors, "progressive-progressbar-background", "gray"), _defineProperty(_colors, "progressive-progressbar-indicator-done", "#CCCCCC"), _defineProperty(_colors, "progressive-progressbar-indicator-undone", "#ffffff"), _defineProperty(_colors, "progressive-progressbar-percent-background", "gray"), _defineProperty(_colors, "progressive-progressbar-percent-text", "#ffffff"), _colors)
  });
  ville.theme.wireframe.Color.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Color.js.map?dt=1626060471486