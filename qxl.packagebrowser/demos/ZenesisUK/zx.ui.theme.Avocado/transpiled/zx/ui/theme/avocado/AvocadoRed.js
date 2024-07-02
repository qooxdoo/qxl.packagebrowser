(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "zx.ui.theme.avocado.ColorRed": {
        "require": true
      },
      "zx.ui.theme.avocado.Decoration": {
        "require": true
      },
      "zx.ui.theme.avocado.Font": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      },
      "zx.ui.theme.avocado.Appearance": {
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

  qx.Theme.define("zx.ui.theme.avocado.AvocadoRed", {
    title: "Avocado Red Theme",
    meta: {
      color: zx.ui.theme.avocado.ColorRed,
      decoration: zx.ui.theme.avocado.Decoration,
      font: zx.ui.theme.avocado.Font,
      icon: qx.theme.icon.Tango,
      appearance: zx.ui.theme.avocado.Appearance
    }
  });
  zx.ui.theme.avocado.AvocadoRed.$$dbClassInfo = $$dbClassInfo;
})();
