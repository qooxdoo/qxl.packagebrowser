(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      },
      "qx.data.store.Jsonp": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.tweets.IdenticaService", {
    extend: qx.core.Object,
    properties: {
      tweets: {
        nullable: true,
        event: "changeTweets"
      }
    },
    events: {
      postOk: "qx.event.type.Event"
    },
    members: {
      __P_594_0: null,
      fetchTweets: function fetchTweets() {
        if (this.__P_594_0 === null) {
          var location = window.location;
          var url = location.origin + "/resource/qxl/tweets/service.js";
          this.__P_594_0 = new qx.data.store.Jsonp();
          this.__P_594_0.setCallbackName("callback");
          this.__P_594_0.setUrl(url);
          this.__P_594_0.bind("model", this, "tweets");
        } else {
          this.__P_594_0.reload();
        }
      },
      /**
       * @param message
       * @lint ignoreDeprecated(alert)
       */
      post: function post(message) {
        /* eslint-disable-next-line no-alert */
        alert("Post this message: " + message);
      }
    }
  });
  qxl.tweets.IdenticaService.$$dbClassInfo = $$dbClassInfo;
})();
