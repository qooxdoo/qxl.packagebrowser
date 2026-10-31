(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "minesweeper.theme.Color": {},
      "minesweeper.theme.Font": {},
      "minesweeper.theme.Decoration": {},
      "minesweeper.theme.Appearance": {},
      "qx.Theme": {},
      "qx.theme.manager.Meta": {},
      "qx.theme.Indigo": {},
      "qx.theme.Classic": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("minesweeper.ThemeChanger", {
    type: "static",
    statics: {
      setTheme: function setTheme(theme) {
        var themeAParts = [theme.meta.color, theme.meta.font, theme.meta.decoration, theme.meta.appearance];
        var themeBParts = [minesweeper.theme.Color, minesweeper.theme.Font, minesweeper.theme.Decoration, minesweeper.theme.Appearance];
        for (var i = 0; i < themeAParts.length; i++) {
          qx.Theme.include(themeAParts[i], themeBParts[i]);
        }
        qx.theme.manager.Meta.getInstance().setTheme(theme);
      },
      setThemeByStringName: function setThemeByStringName(themeName) {
        switch (themeName) {
          case "indigo":
            this.setTheme(qx.theme.Indigo);
            break;
          default:
            this.setTheme(qx.theme.Classic);
        }
      }
    }
  });
  minesweeper.ThemeChanger.$$dbClassInfo = $$dbClassInfo;
})();
