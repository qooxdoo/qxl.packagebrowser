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

  /**
   * The simple qooxdoo font theme.
   *
   * @usefont(Roboto)
   * @usefont(Roboto Mono)
   * @usefont(Avenir)
   * @usefont(AvenirLight)
   * @usefont(AvenirMedium)
   * @usefont(AvenirBlack)
   */
  qx.Theme.define("zx.ui.theme.avocado.Font", {
    fonts: {
      "controlpanel-button-font": {
        size: 13,
        family: ["Avenir"],
        bold: false
      },
      default: {
        size: 13,
        family: ["AvenirLight"],
        fontName: "AvenirLight"
      },
      italic: {
        size: 13,
        italic: true,
        family: ["AvenirLight"],
        fontName: "AvenirLight"
      },
      bold: {
        size: 13,
        family: ["AvenirMedium"],
        fontName: "AvenirMedium"
      },
      heavy: {
        size: 13,
        family: ["AvenirBlack"],
        fontName: "AvenirBlack"
      },
      headline: {
        size: 24,
        family: ["AvenirLight"],
        fontName: "AvenirLight"
      },
      micro: {
        size: 4,
        lineHeight: 1,
        family: ["AvenirLight"]
      },
      tiny: {
        size: 9,
        lineHeight: 1,
        family: ["AvenirLight"]
      },
      small: {
        size: 12,
        family: ["AvenirLight"],
        fontName: "AvenirLight"
      },
      medium: {
        size: 13,
        family: ["AvenirLight"],
        fontName: "AvenirLight"
      },
      large: {
        size: 16,
        family: ["AvenirLight"],
        fontName: "Avenir"
      },
      strikeout: {
        size: 13,
        lineHeight: 1.4,
        family: ["AvenirLight"],
        fontName: "AvenirLight",
        decoration: "line-through"
      },
      heading1: {
        size: 24,
        family: ["AvenirBlack"]
      },
      heading2: {
        size: 21,
        family: ["AvenirBlack"]
      },
      heading3: {
        size: 18,
        family: ["AvenirBlack"]
      },
      monospace: {
        size: 14,
        family: ["monospace"],
        color: "text-primary-on-surface",
        fontName: "Avenir"
      },
      "mce-style-paragraph": {
        size: 13,
        family: ["arial", "sans-serif"],
        bold: false
      },
      "mce-style-heading1": {
        size: 20,
        family: ["Times New Roman", "Georgia", "Serif"],
        bold: false
      },
      "mce-style-heading2": {
        size: 17,
        family: ["Times New Roman", "Georgia", "Serif"],
        bold: false
      },
      "mce-style-heading3": {
        size: 14,
        family: ["Times New Roman", "Georgia", "Serif"],
        bold: false
      },
      "mce-style-heading4": {
        size: 12,
        family: ["Times New Roman", "Georgia", "Serif"],
        bold: false
      },
      "mce-html-editor": {
        size: 12,
        family: ["DejaVu Sans Mono", "Courier New", "monospace"]
      }
    }
  });
  zx.ui.theme.avocado.Font.$$dbClassInfo = $$dbClassInfo;
})();
