function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.Direct": {},
      "qx.event.handler.Object": {},
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "qx.event.Registration": {
        "require": true
      },
      "qx.Promise": {},
      "qx.event.type.Data": {}
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
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * This mixin offers basic event handling capabilities. It includes the
   * commonly known methods for managing event listeners and firing events.
   *
   * @use(qx.event.dispatch.Direct)
   * @use(qx.event.handler.Object)
   */
  qx.Mixin.define("qx.core.MEvent", {
    members: {
      /** @type {Class} Pointer to the regular event registration class */
      __P_79_0: qx.event.Registration,
      /**
       * Add event listener to this object.
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param self {Object ? null} Reference to the 'this' variable inside
       *         the event listener. When not given, the corresponding dispatcher
       *         usually falls back to a default, which is the target
       *         by convention. Note this is not a strict requirement, i.e.
       *         custom dispatchers can follow a different strategy.
       * @param capture {Boolean ? false} Whether to attach the event to the
       *         capturing phase or the bubbling phase of the event. The default is
       *         to attach the event handler to the bubbling phase.
       * @return {String} An opaque id, which can be used to remove the event listener
       *         using the {@link #removeListenerById} method.
       */
      addListener: function addListener(type, listener, self, capture) {
        if (!this.$$disposed) {
          return this.__P_79_0.addListener(this, type, listener, self, capture);
        }
        return null;
      },
      /**
       * Add event listener to this object, which is only called once. After the
       * listener is called the event listener gets removed.
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param context {Object ? window} reference to the 'this' variable inside the callback
       * @param capture {Boolean ? false} Whether to attach the event to the
       *         capturing phase or the bubbling phase of the event. The default is
       *         to attach the event handler to the bubbling phase.
       * @return {String} An opaque id, which can be used to remove the event listener
       *         using the {@link #removeListenerById} method.
       */
      addListenerOnce: function addListenerOnce(type, listener, context, capture) {
        var self = this; // self is needed to remove the listener inside the callback
        if (!context) {
          context = this;
        }
        var id; // store id in closure context
        var callback = function callback(e) {
          self.removeListenerById(id);
          listener.call(context, e);
        };
        // check for wrapped callback storage
        if (!listener.$$wrapped_callback) {
          listener.$$wrapped_callback = {};
        }
        // store the call for each type in case the listener is
        // used for more than one type [BUG #8038]
        listener.$$wrapped_callback[type + this.toHashCode()] = callback;
        id = this.addListener(type, callback, context, capture);
        return id;
      },
      /**
       * Remove event listener from this object
       *
       * @param type {String} name of the event type
       * @param listener {Function} event callback function
       * @param self {Object ? null} reference to the 'this' variable inside the callback
       * @param capture {Boolean} Whether to remove the event listener of
       *   the bubbling or of the capturing phase.
       * @return {Boolean} Whether the event was removed successfully (has existed)
       */
      removeListener: function removeListener(type, listener, self, capture) {
        if (!this.$$disposed) {
          // special handling for wrapped once listener
          if (listener.$$wrapped_callback && listener.$$wrapped_callback[type + this.$$hash]) {
            var callback = listener.$$wrapped_callback[type + this.$$hash];
            delete listener.$$wrapped_callback[type + this.$$hash];
            listener = callback;
          }
          return this.__P_79_0.removeListener(this, type, listener, self, capture);
        }
        return false;
      },
      /**
       * Removes an event listener from an event target by an id returned by
       * {@link #addListener}
       *
       * @param id {String} The id returned by {@link #addListener}
       * @return {Boolean} Whether the event was removed successfully (has existed)
       */
      removeListenerById: function removeListenerById(id) {
        if (!this.$$disposed) {
          return this.__P_79_0.removeListenerById(this, id);
        }
        return false;
      },
      /**
       * Check if there are one or more listeners for an event type.
       *
       * @param type {String} name of the event type
       * @param capture {Boolean ? false} Whether to check for listeners of
       *         the bubbling or of the capturing phase.
       * @return {Boolean} Whether the object has a listener of the given type.
       */
      hasListener: function hasListener(type, capture) {
        return this.__P_79_0.hasListener(this, type, capture);
      },
      /**
       * Dispatch an event on this object
       *
       * @param evt {qx.event.type.Event} event to dispatch
       * @return {Boolean} Whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      dispatchEvent: function dispatchEvent(evt) {
        if (!this.$$disposed) {
          return this.__P_79_0.dispatchEvent(this, evt);
        }
        return true;
      },
      /** @type{Object<String,qx.Promise>} list of pending events, indexed by hash code */
      __P_79_1: null,
      /** @type{qx.Promise} promise that callers are waiting on, ready for when all events are finished */
      __P_79_2: null,
      /**
       * Internal helper method to track promises returned from event handlers
       *
       * @param {var} result the result from the event handler
       * @returns {qx.Promise|var} the value to return
       */
      __P_79_3: function __P_79_3(result) {
        var _this = this;
        {
          if (!qx.Promise.isPromise(result)) {
            return result;
          }
          if (!this.__P_79_1) {
            this.__P_79_1 = {};
          }
          if (!(result instanceof qx.Promise)) {
            result = qx.Promise.resolve(result);
          }
          var hashCode = result.toHashCode();
          var newPromise = result.then(function (result) {
            delete _this.__P_79_1[hashCode];
            var promise = _this.__P_79_2;
            if (promise && Object.keys(_this.__P_79_1).length == 0) {
              _this.__P_79_1 = null;
              _this.__P_79_2 = null;
              promise.resolve();
            }
            return result;
          })["catch"](function (err) {
            delete _this.__P_79_1[hashCode];
            var promise = _this.__P_79_2;
            if (promise && Object.keys(_this.__P_79_1).length == 0) {
              _this.__P_79_1 = null;
              _this.__P_79_2 = null;
              promise.reject(err);
            }
            throw err;
          });
          this.__P_79_1[hashCode] = newPromise;
          return newPromise;
        }
      },
      /**
       * Waits for all pending events to be resolved
       */
      waitForPendingEvents: function waitForPendingEvents() {
        var _this2 = this;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var promise;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this2.__P_79_1) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                if (!_this2.__P_79_2) {
                  _this2.__P_79_2 = new qx.Promise();
                }
                promise = _this2.__P_79_2;
                _context.next = 6;
                return promise;
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      /**
       * Creates and dispatches an event on this object.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean|qx.Promise} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireEvent: function fireEvent(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__P_79_3(this.__P_79_0.fireEvent(this, type, clazz, args));
        }
        return true;
      },
      /**
       * Creates and dispatches an event on this object; equivalent to fireEvent, except that it
       * always returns a promise
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireEventAsync: function fireEventAsync(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__P_79_3(this.__P_79_0.fireEventAsync(this, type, clazz, args));
        }
        return qx.Promise.resolve(true);
      },
      /**
       * Create an event object and dispatch it on this object.
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {Boolean} Whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireNonBubblingEvent: function fireNonBubblingEvent(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__P_79_3(this.__P_79_0.fireNonBubblingEvent(this, type, clazz, args));
        }
        return true;
      },
      /**
       * Create an event object and dispatch it on this object; equivalent to fireNonBubblingEvent,
       * except that it always returns a promise.
       *
       * The event dispatched with this method does never bubble! Use only if you
       * are sure that bubbling is not required.
       *
       * @param type {String} Event type to fire
       * @param clazz {Class?qx.event.type.Event} The event class
       * @param args {Array?null} Arguments, which will be passed to
       *       the event's init method.
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireNonBubblingEventAsync: function fireNonBubblingEventAsync(type, clazz, args) {
        if (!this.$$disposed) {
          return this.__P_79_3(this.__P_79_0.fireNonBubblingEventAsync(this, type, clazz, args));
        }
        return qx.Promise.resolve(true);
      },
      /**
       * Creates and dispatches an non-bubbling data event on this object.
       *
       * @param type {String} Event type to fire
       * @param data {var} User defined data attached to the event object
       * @param oldData {var?null} The event's old data (optional)
       * @param cancelable {Boolean?false} Whether or not an event can have its default
       *     action prevented. The default action can either be the browser's
       *     default action of a native event (e.g. open the context menu on a
       *     right click) or the default action of a qooxdoo class (e.g. close
       *     the window widget). The default action can be prevented by calling
       *     {@link qx.event.type.Event#preventDefault}
       * @return {Boolean|qx.Promise} whether the event default was prevented or not.
       *     Returns true, when the event was NOT prevented.
       */
      fireDataEvent: function fireDataEvent(type, data, oldData, cancelable) {
        if (!this.$$disposed) {
          if (oldData === undefined) {
            oldData = null;
          }
          return this.__P_79_3(this.__P_79_0.fireEvent(this, type, qx.event.type.Data, [data, oldData, !!cancelable]));
        }
        return true;
      },
      /**
       * Creates and dispatches an non-bubbling data event on this object; equivalent to
       * fireEvent, except that it always returns a promise.
       *
       * @param type {String} Event type to fire
       * @param data {var} User defined data attached to the event object
       * @param oldData {var?null} The event's old data (optional)
       * @param cancelable {Boolean?false} Whether or not an event can have its default
       *     action prevented. The default action can either be the browser's
       *     default action of a native event (e.g. open the context menu on a
       *     right click) or the default action of a qooxdoo class (e.g. close
       *     the window widget). The default action can be prevented by calling
       *     {@link qx.event.type.Event#preventDefault}
       * @return {qx.Promise} a promise aggregated from the event handlers;
       *  if the default was prevented, the promise is rejected
       */
      fireDataEventAsync: function fireDataEventAsync(type, data, oldData, cancelable) {
        if (!this.$$disposed) {
          if (oldData === undefined) {
            oldData = null;
          }
          return this.__P_79_3(this.__P_79_0.fireEventAsync(this, type, qx.event.type.Data, [data, oldData, !!cancelable]));
        }
        return qx.Promise.resolve(true);
      }
    }
  });
  qx.core.MEvent.$$dbClassInfo = $$dbClassInfo;
})();