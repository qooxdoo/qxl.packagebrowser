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
      "qx.ui.form.TextField": {
        "construct": true
      },
      "qx.ui.form.PasswordField": {
        "construct": true
      },
      "qx.data.controller.Form": {
        "construct": true
      },
      "qx.ui.form.Button": {
        "construct": true
      },
      "qx.ui.form.renderer.Single": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.tweets.LoginWindow", {
    extend: qx.ui.window.Window,
    events: {
      changeLoginData: "qx.event.type.Data"
    },
    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, "Login", "qxl/tweets/logo.png");
      var layout = new qx.ui.layout.Basic();
      this.setLayout(layout);
      this.setModal(true);
      var form = new qx.ui.form.Form();
      var username = new qx.ui.form.TextField();
      username.setRequired(true);
      form.add(username, "Username", null, "username");
      var password = new qx.ui.form.PasswordField();
      password.setRequired(true);
      form.add(password, "Password", null, "password");
      var controller = new qx.data.controller.Form(null, form);
      controller.createModel();
      var loginbutton = new qx.ui.form.Button("Login");
      form.addButton(loginbutton);
      loginbutton.addListener("execute", function () {
        if (form.validate()) {
          var loginData = {
            username: controller.getModel().getUsername(),
            password: controller.getModel().getPassword()
          };
          this.fireDataEvent("changeLoginData", loginData);
          this.close();
        }
      }, this);

      // add a reset button
      var cancelbutton = new qx.ui.form.Button("Cancel");
      form.addButton(cancelbutton);
      cancelbutton.addListener("execute", function () {
        this.close();
      }, this);
      var renderer = new qx.ui.form.renderer.Single(form);
      this.add(renderer);
    }
  });
  qxl.tweets.LoginWindow.$$dbClassInfo = $$dbClassInfo;
})();
