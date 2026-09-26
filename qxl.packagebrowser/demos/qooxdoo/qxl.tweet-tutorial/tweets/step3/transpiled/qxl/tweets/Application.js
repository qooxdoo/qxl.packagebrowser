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
      "qx.data.controller.List": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
  
     License:
  
     Authors:
  
  ************************************************************************ */

  /* ************************************************************************
  
  
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

        // create the controller
        var controller = new qx.data.controller.List(null, main.getList());
        controller.setLabelPath("text");
        controller.setIconPath("user.profile_image_url");
        controller.setDelegate({
          configureItem: function configureItem(item) {
            item.getChildControl("icon").setWidth(48);
            item.getChildControl("icon").setHeight(48);
            item.getChildControl("icon").setScale(true);
            item.setRich(true);
          }
        });
        service.bind("tweets", controller, "model");

        // start the loading on startup
        service.fetchTweets();
      }
    }
  });
  qxl.tweets.Application.$$dbClassInfo = $$dbClassInfo;
})();
