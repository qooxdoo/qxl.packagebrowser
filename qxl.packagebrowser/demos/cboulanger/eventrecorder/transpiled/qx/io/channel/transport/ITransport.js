(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Interface": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /**
   * A Transport is an object that can send and receive arbitrary JSON objects to
   * a remote target using an endpoint object that does the actual communication
   * with the target. It can be used by one or more channels.
   */
  qx.Interface.define("qx.io.channel.transport.ITransport", {
    events: {
      /**
       * Whenever a endpoint sends a message over this transport,
       * this event is fired with the message object as data.
       */
      "message": "qx.event.type.Data"
    },
    properties: {
      /**
       * The endpoint object
       */
      endpoint: {},

      /**
       * An optional human-readable name of the endpoint for use in logging, debugging etc.
       */
      endpointName: {},

      /**
       * The status of the endpoint, any of {@link qx.io.channel.Channel}'s
       * CHANNEL_STATUS_* static constants
       */
      status: {}
    },
    members: {
      /**
       * Send a message into the channel
       * @param messageObj {Object}
       */
      sendMessage: function sendMessage(messageObj) {}
    }
  });
  qx.io.channel.transport.ITransport.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ITransport.js.map?dt=1626055608865