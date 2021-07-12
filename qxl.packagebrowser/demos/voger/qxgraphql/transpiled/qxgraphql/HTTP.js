(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.Promise": {},
      "qx.event.Timer": {},
      "qx.io.request.Xhr": {},
      "qx.core.Assert": {},
      "qx.core.ValidationError": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.HTTP", {
    extend: qx.core.Object,

    /**
     * Basic HTTP GraphQL client
     */
    construct: function construct(url) {
      qx.core.Object.constructor.call(this);

      if (url) {
        this.setUrl(url);
      }

      this.__P_51_0 = new Map(); // Maximum delay between retries 3 seconds

      this.setMaxDelay(3000); // set defaults

      this.setRequestHeader("Accept", "application/json");
      this.setRequestHeader("Content-Type", "application/json");
    },
    events: {
      /**
       * Fired when the request was successful
       */
      "success": "qxgraphql.event.type.GraphQL",

      /**
       * Fired when the request fails
       */
      "error": "qxgraphql.event.type.GraphQL"
    },
    properties: {
      /** The timeout for asynchronous calls in milliseconds.
       * Default (0) means no limit
       */
      timeout: {
        validate: "_validateTimeout",
        nullable: false,
        init: 0
      },

      /**
       * Number of communication attempts. Default is 5
       *
       */
      attempts: {
        validate: "_validateAttempts",
        nullable: false,
        init: 15
      },
      url: {
        check: "String",
        event: "changeUrl",
        init: null
      }
    },
    members: {
      __P_51_0: null,
      // maximum delay between retries is 3 seconds
      __P_51_1: null,
      __P_51_2: 50,

      /**
       * Returns a javascript Map() object with the headers that will be set
       * to the request
       *
       */
      getRequestHeaders: function getRequestHeaders() {
        return this.__P_51_0;
      },

      /**
       * Returns the value of the header or `undefined` if the 
       * header is not set
       *
       */
      getRequestHeader: function getRequestHeader(key) {
        this.getRequestHeaders().get(key);
      },

      /**
       * Adds a request key to the requests. Case sensitive. Keys with different 
       * casing will produce duplicate entries.
       * @param key {String} The name of the header whose value is to be set.
       * @param value {String}  The value to set as the body of the header.
       */
      setRequestHeader: function setRequestHeader(key, value) {
        this.__P_51_0.set(key, value);
      },

      /**
       * Removes a request header
       * @param key {String} The header to be removed
       */
      removeRequestHeader: function removeRequestHeader(key) {
        this.getRequestHeaders()["delete"](key);
      },

      /**
       * Clears all the request headers.
       *
       */
      clearRequestHeaders: function clearRequestHeaders() {
        this.getRequestHeaders().clear();
      },

      /**
       * Sends the query and returns a promise.
       * @query {String} The query to send
       * @attempts {Integer}  The number of attempts to try sending the query
       *                      after failure. Must be a positive integer greater
       *                      than 0. Default is the value of the property attempts
       * @return {qx.Promise} A promise that resolves with the result of the request 
       * 
       */
      send: function send(query) {
        var attempts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getAttempts();

        var request = this.__P_51_3();

        request.setUrl(this.getUrl()); // only POST is supported for now

        request.setMethod("POST");
        request.setTimeout(this.getTimeout());
        this.getRequestHeaders().forEach(function (value, header) {
          request.setRequestHeader(header, value);
        });
        request.setRequestData(query.toJson());
        return this.__P_51_4(request, attempts);
      },

      /**
       * Set the maximum delay between retries
       * 
       * @delay {Integer} The delay to set
       */
      setMaxDelay: function setMaxDelay(delay) {
        this.__P_51_1 = delay;
      },

      /**
       * Get the maximum delay between retries
       *
       * @return {Integer} the maximum delay between retries
       */
      getMaxDelay: function getMaxDelay(delay) {
        return this.__P_51_1;
      },

      /**
       * Perform the send attempts. If the request fails with a 
       * retirable error, then it is tried again using backoff with jitter.
       *
       * @request {qx.io.request.AbstractRequest} The request to attempt
       * @attempts {Integer} The number of attempts
       * @delay {Integer} The first delay between the retries.
       * @runs {Integer} The times it has run so far. This parametter is used to help 
       *                 with the backtracking algorithm and the deafult value of `1`
       *                 shouldn't be changed.
       * @return {qx.Promise} A promise that resolves with the result of the request 
       */
      __P_51_4: function __P_51_4(request, attempts) {
        var _this = this;

        var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.__P_51_2;
        var runs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        return request.sendWithPromise()["catch"](function (error) {
          if (attempts === 1) {
            throw error;
          }

          if (!_this._isRetriable(request)) {
            throw error;
          } // return a promise that waits for `delay` milisecconds
          // then returns the __performAttempts methos


          return new qx.Promise(function (resolve) {
            qx.event.Timer.once(function () {
              resolve(delay);
            }, this, delay);
          }).then(function () {
            // calculate the new delay that may be needed for the next iteration
            var min = 0;
            var max = Math.min(_this.getMaxDelay(), _this.__P_51_2 * Math.pow(2, runs));
            var newDelay = Math.floor(Math.random() * (max - min + 1)) + min;
            return _this.__P_51_4(request, attempts - 1, newDelay, runs + 1);
          });
        });
      },

      /**
       * Return a new request object
       *
       */
      __P_51_3: function __P_51_3() {
        return new qx.io.request.Xhr();
      },

      /**
       * Returns true if the `request` status is one of the 
       * HTTP status codes that makes sense to retry sending the 
       * request or if the request failed with timeout.
       * 
       * @param {qx.io.request.AbstractRequest} The request to check 
       * @return {Boolean} Whether is retriable or not
       */
      _isRetriable: function _isRetriable(request) {
        return [0, 408, 502, 503, 504].includes(request.getStatus()) || request.getPhase() === "timeout";
      },
      _validateTimeout: function _validateTimeout(value) {
        try {
          qx.core.Assert.assertPositiveInteger(value);
        } catch (e) {
          throw new qx.core.ValidationError("ValidationError", "Time out value must be a positive integer. Found: ".concat(value, "."));
        }
      },
      _validateAttempts: function _validateAttempts(value) {
        try {
          qx.core.Assert.assertPositiveInteger(value);
          qx.core.Assert.assertTrue(value > 0);
        } catch (e) {
          throw new qx.core.ValidationError("ValidationError", "Attempts must be a natural number greater than 0. Found: ".concat(value, "."));
        }
      }
    }
  });
  qxgraphql.HTTP.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=HTTP.js.map?dt=1626060603382