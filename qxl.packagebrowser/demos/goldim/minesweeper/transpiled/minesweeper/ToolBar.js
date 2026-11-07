(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.toolbar.ToolBar": {
        "construct": true,
        "require": true
      },
      "qx.locale.MTranslation": {
        "require": true
      },
      "qx.ui.toolbar.MenuButton": {},
      "qx.ui.menu.Menu": {},
      "qx.ui.menu.Button": {},
      "minesweeper.Game": {},
      "qx.ui.form.RadioGroup": {},
      "qx.lang.String": {},
      "qx.ui.menu.RadioButton": {},
      "qx.locale.Manager": {},
      "minesweeper.ThemeChanger": {},
      "minesweeper.window.Desktop": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 Dmitrii Zolotov
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("minesweeper.ToolBar", {
    extend: qx.ui.toolbar.ToolBar,
    include: qx.locale.MTranslation,
    construct: function construct() {
      // noinspection JSAnnotator
      qx.ui.toolbar.ToolBar.constructor.call(this);
      this.__P_65_0();
    },
    members: {
      __P_65_0: function __P_65_0() {
        this.add(this.__P_65_1());
        this.add(this.__P_65_2());
      },
      __P_65_1: function __P_65_1() {
        var button = new qx.ui.toolbar.MenuButton(this.tr("Game"));
        button.setMenu(this.getGameMenu());
        return button;
      },
      getGameMenu: function getGameMenu() {
        var menu = new qx.ui.menu.Menu();
        var newButton = new qx.ui.menu.Button(this.tr("New"));
        newButton.addListener("execute", function () {
          minesweeper.Game.getInstance().startNew();
        }, this);
        menu.add(newButton);
        var difficultyButton = new qx.ui.menu.Button(this.tr("Difficulty"));
        difficultyButton.setMenu(this.__P_65_3());
        menu.add(difficultyButton);
        var languageButton = new qx.ui.menu.Button(this.tr("Language"));
        languageButton.setMenu(this.__P_65_4());
        menu.add(languageButton);
        var themeButton = new qx.ui.menu.Button(this.tr("Theme"));
        themeButton.setMenu(this.__P_65_5());
        menu.add(themeButton);
        return menu;
      },
      __P_65_3: function __P_65_3() {
        var menu = new qx.ui.menu.Menu();
        var difficulties = minesweeper.Game.getDifficulties();
        var difficultyGroup = new qx.ui.form.RadioGroup();
        difficulties.forEach(function (difficulty) {
          var capitalized = qx.lang.String.firstUp(difficulty);
          var button = new qx.ui.menu.RadioButton(capitalized, null);
          menu.add(button);
          difficultyGroup.add(button);
        });
        difficultyGroup.addListener("changeValue", function (e) {
          var value = qx.lang.String.firstLow(e.getData().getLabel());
          minesweeper.Game.getInstance().setDifficulty(value);
        }, this);
        return menu;
      },
      __P_65_4: function __P_65_4() {
        var menu = new qx.ui.menu.Menu();
        var languages = qx.locale.Manager.getInstance().getAvailableLocales();
        var languageGroup = new qx.ui.form.RadioGroup();
        languages.forEach(function (language) {
          var capitalized = qx.lang.String.firstUp(language);
          var button = new qx.ui.menu.RadioButton(capitalized, null);
          menu.add(button);
          languageGroup.add(button);
        });
        languageGroup.addListener("changeValue", function (e) {
          var locale = qx.lang.String.firstLow(e.getData().getLabel());
          qx.locale.Manager.getInstance().setLocale(locale);
        }, this);
        qx.locale.Manager.getInstance().setLocale(qx.lang.String.firstLow(languageGroup.getValue().getLabel()));
        return menu;
      },
      __P_65_5: function __P_65_5() {
        var menu = new qx.ui.menu.Menu();
        var themes = ["classic", "indigo"];
        var themeGroup = new qx.ui.form.RadioGroup();
        themes.forEach(function (language) {
          var capitalized = qx.lang.String.firstUp(language);
          var button = new qx.ui.menu.RadioButton(capitalized, null);
          menu.add(button);
          themeGroup.add(button);
        });
        themeGroup.addListener("changeValue", function (e) {
          var themeName = qx.lang.String.firstLow(e.getData().getLabel());
          minesweeper.ThemeChanger.setThemeByStringName(themeName);
        }, this);
        return menu;
      },
      __P_65_2: function __P_65_2() {
        var menuButton = new qx.ui.toolbar.MenuButton(this.tr("Help"));
        var menu = new qx.ui.menu.Menu();
        menuButton.setMenu(menu);
        var aboutButton = new qx.ui.menu.Button(this.tr("About"));
        aboutButton.addListener("execute", this._onAboutButton, this);
        menu.add(aboutButton);
        return menuButton;
      },
      _onAboutButton: function _onAboutButton() {
        minesweeper.window.Desktop.getInstance().openAboutWindow();
      }
    }
  });
  minesweeper.ToolBar.$$dbClassInfo = $$dbClassInfo;
})();
