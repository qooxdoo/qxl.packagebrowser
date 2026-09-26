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
      "qx.ui.mobile.basic.Label": {}
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
   * This page displays a single tweet.
   */
  qx.Class.define("qxl.mobiletweets.page.TweetDetail", {
    extend: qx.ui.mobile.page.NavigationPage,
    construct: function construct() {
      qx.ui.mobile.page.NavigationPage.constructor.call(this);
      this.set({
        title: "Details",
        showBackButton: true,
        backButtonText: "Back"
      });
    },
    properties: {
      /** Holds the current shown tweet */
      tweet: {
        check: "Object",
        nullable: true,
        init: null,
        event: "changeTweet"
      }
    },
    members: {
      // overridden
      _initialize: function _initialize() {
        qxl.mobiletweets.page.TweetDetail.superclass.prototype._initialize.call(this);
        // Create a new label instance
        var label = new qx.ui.mobile.basic.Label();
        this.getContent().add(label);
        // bind the "tweet.getText" property to the "value" of the label
        this.bind("tweet.text", label, "value");
      }
    }
  });
  qxl.mobiletweets.page.TweetDetail.$$dbClassInfo = $$dbClassInfo;
})();
