(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "zx.ui.theme.avocado.ColorHelper": {
        "require": true
      },
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "zx.ui.theme.avocado.ColorGreen": {
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
  qx.Theme.define("zx.ui.theme.avocado.ColorBlue", {
    extend: zx.ui.theme.avocado.ColorGreen,
    colors: {
      primary: "#7ad4f2"
    }
  });
  zx.ui.theme.avocado.ColorBlue.$$dbClassInfo = $$dbClassInfo;
})();
