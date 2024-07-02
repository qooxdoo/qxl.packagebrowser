(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Mobile": {
        "require": true
      },
      "qx.data.Array": {},
      "qx.ui.mobile.page.Manager": {},
      "qxl.mobiletweets.page.Input": {},
      "qxl.mobiletweets.page.Tweets": {},
      "qxl.mobiletweets.page.TweetDetail": {},
      "qx.lang.Json": {},
      "qx.data.store.Jsonp": {}
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

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * This is the main application class of your custom application "mobiletweets"
   *
   * @asset(qxl/mobiletweets/*)
   */
  qx.Class.define("qxl.mobiletweets.Application", {
    extend: qx.application.Mobile,
    properties: {
      /** Holds all feeds of a user */
      tweets: {
        check: "qx.data.Array",
        nullable: true,
        init: null,
        event: "changeTweets",
        apply: "_applyTweets" // just for logging the data
      },
      /** The current username */
      username: {
        check: "String",
        nullable: false,
        init: "",
        event: "changeUsername",
        apply: "_applyUsername" // this method will be called when the property is set
      }
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __P_587_0: null,
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        qxl.mobiletweets.Application.superclass.prototype.main.call(this);

        // Enable logging in debug variant

        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
          Remove or edit the following code to create your application.
        -------------------------------------------------------------------------
        */

        // Create a manager in mobile device context >> "false"
        var manager = new qx.ui.mobile.page.Manager(false);

        // Create an instance of the Input class and initial show it
        var inputPage = this.__P_587_0 = new qxl.mobiletweets.page.Input();

        // Add page to manager
        manager.addDetail(inputPage);

        // Display inputPage on start
        inputPage.show();

        // Create an instance of the Tweets class and establish data bindings
        var tweetsPage = new qxl.mobiletweets.page.Tweets();
        this.bind("tweets", tweetsPage, "tweets");
        this.bind("username", tweetsPage, "title");

        // Add page to manager
        manager.addDetail(tweetsPage);

        // Create an instance of the Tweet class
        var tweetPage = new qxl.mobiletweets.page.TweetDetail();

        // Add page to manager
        manager.addDetail(tweetPage);

        // Load the tweets and show the tweets page
        inputPage.addListener("requestTweet", function (evt) {
          this.setUsername(evt.getData());
          tweetsPage.show();
        }, this);

        // Show the selected tweet
        tweetsPage.addListener("showTweet", function (evt) {
          var index = evt.getData();
          tweetPage.setTweet(this.getTweets().getItem(index));
          tweetPage.show();
        }, this);

        // Return to the Input page
        tweetsPage.addListener("back", function (evt) {
          inputPage.show({
            reverse: true
          });
        }, this);

        // Return to the Tweets Page.
        tweetPage.addListener("back", function (evt) {
          tweetsPage.show({
            reverse: true
          });
        }, this);
      },
      // property apply
      _applyUsername: function _applyUsername(value, old) {
        this.__P_587_1();
      },
      // property apply
      _applyTweets: function _applyTweets(value, old) {
        // print the loaded data in the console
        this.debug("Tweets: ", qx.lang.Json.stringify(value)); // just display the data
      },
      /**
       * Loads all tweets of the currently set user.
       */
      __P_587_1: function __P_587_1() {
        // Mocked Identica Tweets API
        // Create a new JSONP store instance with the given url
        var url = "http://demo.qooxdoo.org/" + null + "/tweets_step4.5/resource/tweets/service.js";
        var store = new qx.data.store.Jsonp();
        store.setCallbackName("callback");
        store.setUrl(url);

        // Use data binding to bind the "model" property of the store to the "tweets" property
        store.bind("model", this, "tweets");
      },
      /**
       * Shows the input page of the application.
       */
      __P_587_2: function __P_587_2() {
        this.__P_587_0.show({
          reverse: true
        });
      }
    }
  });
  qxl.mobiletweets.Application.$$dbClassInfo = $$dbClassInfo;
})();
