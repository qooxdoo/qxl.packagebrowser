(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.util.ColorUtil": {},
      "qx.theme.manager.Color": {}
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

  qx.Class.define("zx.ui.theme.avocado.ColorHelper", {
    statics: {
      tone(color) {
        if (color == "dark" || color == "light") {
          return color;
        }
        const minimumContrast = 3.1;
        const lightContrast = qx.util.ColorUtil.contrast(color, "#fff");
        const darkContrast = qx.util.ColorUtil.contrast(color, "rgba(0,0,0,0.87)");
        if (lightContrast < minimumContrast && darkContrast > lightContrast) {
          return "light";
        } else {
          return "dark";
        }
      },
      /**
       * contrastTone
       *
       * Should dark or light text be used on top of the given
       * color to get readable text.
       *
       * @param color {String} a valid qooxdoo/CSS rgb color string
       * @return {String} "dark" if color is light and vise versa
       */
      contrastTone(color) {
        return zx.ui.theme.avocado.ColorHelper.tone(color) === "dark" ? "light" : "dark";
      },
      /**
       * inkColorForFill
       *
       * @param textStyle {String}  primary|secondary|hint|disabled|icon
       * @param fillColor {String} a valid qooxdoo/CSS rgb color string
       * @return {String} a CSS rgba color string
       */
      inkColorForFill(textStyle, fillColor) {
        const textColor = {
          dark: {
            primary: "rgba(0,0,0,0.87)",
            secondary: "rgba(0,0,0,0.54)",
            hint: "rgba(0,0,0,0.38)",
            disabled: "rgba(0,0,0,0.38)",
            icon: "rgba(0,0,0,0.38)"
          },
          light: {
            primary: "#fff",
            secondary: "rgba(255,255,255,0.7)",
            hint: "rgba(255,255,255,0.5)",
            disabled: "rgba(255,255,255,0.5)",
            icon: "rgba(255,255,255,0.5)"
          }
        };
        const contrastTone = zx.ui.theme.avocado.ColorHelper.contrastTone(fillColor);
        return textColor[contrastTone][textStyle];
      },
      // zx.ui.theme.avocado.ColorHelpers
      onX(key) {
        const baseColor = key.split("-")[2];
        const contrastTone = zx.ui.theme.avocado.ColorHelper.contrastTone(baseColor);
        const out = contrastTone === "dark" ? "#000000" : "#ffffff";
        return out;
      },
      darker(color) {
        return qx.util.ColorUtil.scale(color, {
          lightness: -20,
          saturation: -10
        });
      },
      /**
       * USAGE: `"<existing-color-name>-<state-name>": helper.xState`
       *
       * KNOWN STATES:
       * - `focused`
       * - `hovered`
       * - `disabled`
       * - `selected`
       * - `selected_disabled`
       * All other states revert to the base color.
       */
      xState(key) {
        const d = key.split("-");
        const color = d.slice(0, -1).join("-");
        const state = d.slice(-1)[0];
        let out;
        switch (state) {
          case "focused":
            out = qx.util.ColorUtil.scale(color, {
              lightness: 10,
              saturation: 10
            });
            break;
          case "hovered":
            out = qx.util.ColorUtil.scale(color, {
              lightness: 10
            });
            break;
          case "disabled":
            out = qx.util.ColorUtil.scale(color, {
              lightness: -10,
              saturation: -70
            });
            break;
          case "selected":
            out = qx.util.ColorUtil.scale(color, {
              lightness: 30
            });
            break;
          case "selected_disabled":
            out = qx.util.ColorUtil.scale(color, {
              lightness: 30,
              saturation: -70
            });
            break;
          default:
            out = color;
            break;
        }
        return out;
      },
      textXonY(key) {
        let match = key.match(/^text-([a-z]+)-on-([a-z]+)$/);
        const textStyle = match[1];
        const fillColor = match[2];
        if (!textStyle || !fillColor) {
          throw new Error("Cannot calculate textXonY for " + key);
        }
        return zx.ui.theme.avocado.ColorHelper.inkColorForFill(textStyle, fillColor);
      },
      setAlpha(key) {
        const splitKey = key.split("-");
        if (splitKey.length == 4) {
          splitKey[1] = splitKey[0] + "-" + splitKey[1];
          splitKey.shift();
        }
        const baseColor = splitKey[0];
        const alphaPercent = splitKey[2];
        const actualColor = qx.theme.manager.Color.getInstance().resolve(baseColor);
        const rgba = qx.util.ColorUtil.stringToRgb(actualColor);
        rgba[3] = alphaPercent / 100;
        return qx.util.ColorUtil.rgbToRgbString(rgba);
      }
    }
  });
  zx.ui.theme.avocado.ColorHelper.$$dbClassInfo = $$dbClassInfo;
})();
