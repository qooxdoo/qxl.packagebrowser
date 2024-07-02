(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Messaging": {
        "construct": true
      },
      "qx.bom.History": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
       * Tino Butz (tbtz)
  
  ************************************************************************ */

  /**
   *
   * Basic application routing manager.
   *
   * Define routes to react on certain GET / POST / DELETE / PUT operations.
   *
   * * GET is triggered when the hash value of the url is changed. Can be called
   *   manually by calling the {@link #executeGet} method.
   * * POST / DELETE / PUT has to be triggered manually right now (will be changed later)
   *    by calling the {@link #executePost}, {@link #executeDelete}, {@link #executePut} method.
   *
   * This manager can also be used to provide browser history.
   *
   * *Example*
   *
   * Here is a little example of how to use the widget.
   *
   * <pre class='javascript'>
   *   var r = new qx.application.Routing();
   *
   *   // show the start page, when no hash is given or the hash is "#/"
   *   r.onGet("/", function(data) {
   *     startPage.show();
   *   }, this);
   *
   *   // whenever the url /address is called show the address book page.
   *   r.onGet("/address", function(data) {
   *     addressBookPage.show();
   *   }, this);
   *
   *   // address with the parameter "id"
   *   r.onGet("/address/{id}", function(data) {
   *     addressPage.show();
   *     model.loadAddress(data.params.id);
   *   }, this);
   *
   *   // Alternative you can use regExp for a route
   *   r.onGet(/address\/(.*)/, function(data) {
   *     addressPage.show();
   *     model.loadAddress(data.params.0);
   *   }, this);
   *
   *   // make sure that the data is always loaded
   *   r.onGet("/address.*", function(data) {
   *     if (!model.isLoaded()) {
   *       model.loadAddresses();
   *     }
   *   }, this);
   *
   *   // update the address
   *   r.onPost("/address/{id}", function(data) {
   *     model.updateAddress(data.params.id);
   *   }, this);
   *
   *   // delete the address and navigate back
   *   r.onDelete("/address/{id}", function(data) {
   *     model.deleteAddress(data.params.id);
   *     r.executeGet("/address", {reverse:true});
   *   }, this);
   * </pre>
   *
   * This example defines different routes to handle navigation events.
   *
   * Note this class must be disposed after use
   */
  qx.Bootstrap.define("qx.application.Routing", {
    implement: [qx.core.IDisposable],
    construct: function construct() {
      this.__P_18_0 = new qx.event.Messaging();
      this.__P_18_1 = qx.bom.History.getInstance();
      this.__P_18_1.addListener("changeState", this.__P_18_2, this);
    },
    statics: {
      DEFAULT_PATH: "/",
      __P_18_3: [],
      __P_18_4: []
    },
    members: {
      __P_18_1: null,
      __P_18_0: null,
      __P_18_5: null,
      /**
       * Initialization method used to execute the get route for the currently set history path.
       * If no path is set, either the given argument named <code>defaultPath</code>
       * or the {@link #DEFAULT_PATH} will be used for initialization.
       *
       * @param defaultPath {String?} Optional default path for initialization.
       */
      init: function init(defaultPath) {
        var path = this.getState();
        path = this._getPathOrFallback(path, defaultPath);
        this._executeGet(path, null, true);
      },
      /**
       * Checks if path is valid and registered in channel "get" and then just returns it.
       * If the path is not valid either the <code>defaultPath</code> (if given) or the
       * {@link #DEFAULT_PATH} will be returned.
       *
       * @param path {String} Path which gets checked.
       * @param defaultPath {String?} Optional default path.
       * @return {String} A valid path.
       */
      _getPathOrFallback: function _getPathOrFallback(path, defaultPath) {
        if (path == "" || path == null || !this.__P_18_0.has("get", path)) {
          path = defaultPath || qx.application.Routing.DEFAULT_PATH;
        }
        return path;
      },
      /**
       * Adds a route handler for the "get" operation. The route gets called
       * when the {@link #executeGet} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      onGet: function onGet(route, handler, scope) {
        return this.__P_18_0.on("get", route, handler, scope);
      },
      /**
       * This is a shorthand for {@link #onGet}.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      on: function on(route, handler, scope) {
        return this.onGet(route, handler, scope);
      },
      /**
       * Adds a route handler for the "post" operation. The route gets called
       * when the {@link #executePost} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches.
       * @param handler {Function} The handler to call, when the route matches with the executed path.
       * @param scope {Object} The scope of the handler.
       * @return {String} Event listener ID
       */
      onPost: function onPost(route, handler, scope) {
        return this.__P_18_0.on("post", route, handler, scope);
      },
      /**
       * Adds a route handler for the "put" operation. The route gets called
       * when the {@link #executePut} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onPut: function onPut(route, handler, scope) {
        return this.__P_18_0.on("put", route, handler, scope);
      },
      /**
       * Adds a route handler for the "delete" operation. The route gets called
       * when the {@link #executeDelete} method found a match.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onDelete: function onDelete(route, handler, scope) {
        return this.__P_18_0.on("delete", route, handler, scope);
      },
      /**
       * Adds a route handler for the "any" operation. The "any" operation is called
       * before all other operations.
       *
       * @param route {String|RegExp} The route, used for checking if the executed path matches
       * @param handler {Function} The handler to call, when the route matches with the executed path
       * @param scope {Object} The scope of the handler
       * @return {String} Event listener ID
       */
      onAny: function onAny(route, handler, scope) {
        return this.__P_18_0.onAny(route, handler, scope);
      },
      /**
       * Removes a registered route by the given id.
       *
       * @param id {String} The id of the registered route
       */
      remove: function remove(id) {
        this.__P_18_0.remove(id);
      },
      /**
       * Hash change event handler.
       *
       * @param evt {qx.event.type.Data} The changeHash event.
       */
      __P_18_2: function __P_18_2(evt) {
        var path = evt.getData();
        path = this._getPathOrFallback(path);
        if (path != this.__P_18_5) {
          this._executeGet(path, null, true);
        }
      },
      /**
       * Executes the get operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       * @param fromEvent {var} Determines whether this method was called from history
       *
       */
      _executeGet: function _executeGet(path, customData, fromEvent) {
        this.__P_18_5 = path;
        var history = this.__P_18_6(path);
        if (history) {
          if (!customData) {
            customData = history.data.customData || {};
            customData.fromHistory = true;
            customData.action = history.action;
            customData.fromEvent = fromEvent;
          } else {
            this.__P_18_7(path, customData);
          }
        } else {
          this.__P_18_8(path, customData);
          qx.application.Routing.__P_18_4 = [];
        }
        this.__P_18_1.setState(path);
        this.__P_18_0.emit("get", path, null, customData);
      },
      /**
       * Executes the get operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       */
      executeGet: function executeGet(path, customData) {
        this._executeGet(path, customData);
      },
      /**
       * This is a shorthand for {@link #executeGet}.
       *
       * @param path {String} The path to execute
       * @param customData {var} The given custom data that should be propagated
       */
      execute: function execute(path, customData) {
        this.executeGet(path, customData);
      },
      /**
       * Executes the post operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executePost: function executePost(path, params, customData) {
        this.__P_18_0.emit("post", path, params, customData);
      },
      /**
       * Executes the put operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executePut: function executePut(path, params, customData) {
        this.__P_18_0.emit("put", path, params, customData);
      },
      /**
       * Executes the delete operation and informs all matching route handler.
       *
       * @param path {String} The path to execute
       * @param params {Map} The given parameters that should be propagated
       * @param customData {var} The given custom data that should be propagated
       */
      executeDelete: function executeDelete(path, params, customData) {
        this.__P_18_0.emit("delete", path, params, customData);
      },
      /**
       * Returns state value (history hash) of the navigation handler.
       * @return {String} State of history navigation handler
       */
      getState: function getState() {
        return this.__P_18_1.getState();
      },
      /**
       * Adds the custom data of a given path to the history.
       *
       * @param path {String} The path to store.
       * @param customData {var} The custom data to store
       */
      __P_18_8: function __P_18_8(path, customData) {
        qx.application.Routing.__P_18_3.unshift({
          path: path,
          customData: customData
        });
      },
      /**
       * Replaces the customData in the history objects with the recent custom data.
       * @param path {String} The path to replace.
       * @param customData {var} The custom data to store.
       */
      __P_18_7: function __P_18_7(path, customData) {
        var register = [qx.application.Routing.__P_18_3, qx.application.Routing.__P_18_4];
        for (var i = 0; i < register.length; i++) {
          for (var j = 0; j < register[i].length; j++) {
            if (register[i][j].path == path) {
              register[i][j].customData = customData;
            }
          }
        }
      },
      /**
       * Returns a history entry for a certain path.
       *
       * @param path {String} The path of the entry
       * @return {Map|null} The retrieved entry. <code>null</code> when no entry was found.
       */
      __P_18_6: function __P_18_6(path) {
        var back = qx.application.Routing.__P_18_3;
        var forward = qx.application.Routing.__P_18_4;
        var found = false;
        var entry = null;
        var length = back.length;
        for (var i = 0; i < length; i++) {
          if (back[i].path == path) {
            entry = back[i];
            var toForward = back.splice(0, i);
            for (var a = 0; a < toForward.length; a++) {
              forward.unshift(toForward[a]);
            }
            found = true;
            break;
          }
        }
        if (found) {
          return {
            data: entry,
            action: "back"
          };
        }
        var length = forward.length;
        for (var i = 0; i < length; i++) {
          if (forward[i].path == path) {
            entry = forward[i];
            var toBack = forward.splice(0, i + 1);
            for (var a = 0; a < toBack.length; a++) {
              back.unshift(toBack[a]);
            }
            break;
          }
        }
        if (entry) {
          return {
            data: entry,
            action: "forward"
          };
        }
        return entry;
      },
      /**
       * Navigates back to the previously executed path.
       *
       * @param customData {Map?} The given custom data that should be propagated.
       *   If it contains a key <code>defaultPath</code> and no history data is
       *   available, its value is used as a target path. If it does not include
       *   such a key, the routing's default path is used instead (again only for
       *   empty history).
       *   This behavior is useful for instance when reloading a page during
       *   development but expecting the page's back button always to work.
       */
      back: function back(customData) {
        var data = customData;
        if (data) {
          data["action"] = "back";
        } else {
          data = {
            action: "back"
          };
        }
        var path,
          back = qx.application.Routing.__P_18_3;
        if (back.length > 0) {
          // Remove current state
          back.shift();
        }
        if (back.length > 0) {
          // Get previous state
          var state = back.shift();
          this._executeGet(state.path, data);
        } else if (data.defaultPath) {
          path = data.defaultPath;
          delete data.defaultPath;
          this._executeGet(path, data);
        } else if (qx.application.Routing.DEFAULT_PATH) {
          this._executeGet(qx.application.Routing.DEFAULT_PATH, data);
        }
      },
      /**
       * Decouples the Routing from the navigation handler.
       */
      dispose: function dispose() {
        this.__P_18_1.removeListener("changeState", this.__P_18_2, this);
      }
    }
  });
  qx.application.Routing.$$dbClassInfo = $$dbClassInfo;
})();