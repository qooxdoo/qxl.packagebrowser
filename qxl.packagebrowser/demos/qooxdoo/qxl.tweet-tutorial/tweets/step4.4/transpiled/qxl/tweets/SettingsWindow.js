(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Basic": {
        "construct": true
      },
      "qx.ui.form.Form": {
        "construct": true
      },
      "qx.ui.form.RadioButtonGroup": {
        "construct": true
      },
      "qx.locale.Manager": {
        "construct": true
      },
      "qx.ui.form.RadioButton": {
        "construct": true
      },
      "qx.ui.form.renderer.Single": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.tweets.SettingsWindow", {
    extend: qx.ui.window.Window,
    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, this.tr("Preferences"));
      this.setLayout(new qx.ui.layout.Basic());
      var form = new qx.ui.form.Form();
      var radioGroup = new qx.ui.form.RadioButtonGroup();
      form.add(radioGroup, this.tr("Language"));
      var localeManager = qx.locale.Manager.getInstance();
      var locales = localeManager.getAvailableLocales();
      var currentLocale = localeManager.getLocale();

      // mark this for translation (should hold the langauge name)
      this.marktr("$$languagename");

      // create a radio button for every available locale
      for (var i = 0; i < locales.length; i++) {
        var locale = locales[i];
        var languageName = localeManager.translate("$$languagename", [], locale);
        var localeButton = new qx.ui.form.RadioButton(languageName.toString());
        // save the local as model
        localeButton.setModel(locale);
        radioGroup.add(localeButton);

        // preselect the current locale
        if (currentLocale == locale) {
          localeButton.setValue(true);
        }
      }

      // get the model selection and listen to its change
      radioGroup.getModelSelection().addListener("change", function (e) {
        // selection is the first item of the data array
        var newLocale = radioGroup.getModelSelection().getItem(0);
        localeManager.setLocale(newLocale);
      }, this);
      var renderer = new qx.ui.form.renderer.Single(form);
      this.add(renderer);
    }
  });
  qxl.tweets.SettingsWindow.$$dbClassInfo = $$dbClassInfo;
})();
