(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qxl.tweets.MainWindow": {},
      "qxl.tweets.IdenticaService": {},
      "qx.data.Array": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */
  /**
   * This is the main application class of your custom application "tweets"
   *
   * @asset(qxl/tweets/*)
   */
  qx.Class.define("qxl.tweets.Application", {
    extend: qx.application.Standalone,
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       *
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        // Call super class
        qxl.tweets.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */

        var main = new qxl.tweets.MainWindow();
        main.moveTo(50, 30);
        main.open();
        var service = new qxl.tweets.IdenticaService();

        // handler after posting a tweet
        service.addListener("postOk", function () {
          main.clearPostMessage();
          service.fetchTweets();
        }, this);

        // reload handling
        main.addListener("reload", function () {
          service.fetchTweets();
        }, this);

        // post handling
        main.addListener("post", function (e) {
          service.post(e.getData());
        }, this);

        // setup list binding
        var list = main.getList();
        list.setItemHeight(68);
        list.setLabelPath("text");
        list.setIconPath("user.profile_image_url");
        list.setDelegate({
          configureItem: function configureItem(item) {
            item.getChildControl("icon").setWidth(48);
            item.getChildControl("icon").setHeight(48);
            item.getChildControl("icon").setScale(true);
            item.setRich(true);
          }
        });
        service.bind("tweets", list, "model", {
          converter: function converter(value) {
            return value || new qx.data.Array();
          }
        });

        // start the loading on startup
        service.fetchTweets();
      }
    }
  });
  qxl.tweets.Application.$$dbClassInfo = $$dbClassInfo;
})();
