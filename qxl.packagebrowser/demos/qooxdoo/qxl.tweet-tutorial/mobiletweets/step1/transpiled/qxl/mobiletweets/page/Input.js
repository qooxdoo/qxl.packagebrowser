(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.mobile.page.NavigationPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.mobile.form.Title": {},
      "qx.ui.mobile.form.Form": {},
      "qx.ui.mobile.form.TextField": {},
      "qx.ui.mobile.form.renderer.Single": {},
      "qx.ui.mobile.form.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   * This page displays an input form to enter the username to show.
   */
  qx.Class.define("qxl.mobiletweets.page.Input", {
    extend: qx.ui.mobile.page.NavigationPage,
    construct: function construct() {
      qx.ui.mobile.page.NavigationPage.constructor.call(this);
      this.setTitle("Mobile Tweets");
    },
    events: {
      /** Fired when the tweets of a user are requested */
      requestTweet: "qx.event.type.Data"
    },
    members: {
      __P_594_0: null,
      __P_594_1: null,
      // overridden
      _initialize: function _initialize() {
        qxl.mobiletweets.page.Input.superclass.prototype._initialize.call(this);
        var title = new qx.ui.mobile.form.Title("Please enter an identi.ca username");
        this.getContent().add(title);
        var form = this.__P_594_0 = new qx.ui.mobile.form.Form();
        var input = this.__P_594_1 = new qx.ui.mobile.form.TextField();
        input.setPlaceholder("Username");
        input.setRequired(true);
        form.add(input, "Username");

        // Add the form to the content of the page, using the SinglePlaceholder to render
        // the form.
        this.getContent().add(new qx.ui.mobile.form.renderer.Single(form));

        // Create a new button instance and set the title of the button to "Show"
        var button = new qx.ui.mobile.form.Button("Show");
        // Add the "tap" listener to the button
        button.addListener("tap", this._onTap, this);
        // Add the button the content of the page
        this.getContent().add(button);
      },
      /**
       * On Tap handler. Called when the user taps on the input button.
       * @param evt {qx.event.type.Data} the causing event.
       */
      _onTap: function _onTap(evt) {
        // validate the form
        if (this.__P_594_0.validate()) {
          var username = this.__P_594_1.getValue();
          this.fireDataEvent("requestTweet", username);
        }
      }
    }
  });
  qxl.mobiletweets.page.Input.$$dbClassInfo = $$dbClassInfo;
})();
