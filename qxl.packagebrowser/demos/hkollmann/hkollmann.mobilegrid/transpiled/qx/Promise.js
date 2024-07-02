function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
      "qx.core.Assert": {
        "construct": true
      },
      "qx.data.Array": {},
      "qx.lang.Array": {},
      "qx.log.Logger": {},
      "qx.bom.Event": {},
      "qx.lang.Type": {},
      "qx.event.GlobalError": {},
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": ["qx.promise.warnings", "qx.promise.longStackTraces"],
      "required": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2016 Zenesis Limited, http://www.zenesis.com
       BluebirdJS Copyright (c) 2013-2016 Petka Antonov http://bluebirdjs.com/
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
   * John Spackman (john.spackman@zenesis.com)
  
   ************************************************************************ */

  /**
   * This class adds Promise/A+ support to Qooxdoo, as specified at
   * https://github.com/promises-aplus/promises-spec and using the Bluebird Promise
   * library (http://bluebirdjs.com/) to implement it.  The official Promise/A+ API)
   * is mirrored exactly, and a number of extension methods are added with the BluebirdJS
   * API for inspiration (many/most of the extension functions are taken verbatim).
   *
   * There are two ways to bind a 'this' value to callbacks - the first is to
   * append a context method to methods like then(), and the second is to specify
   * the context as the second parameter to the constructor and all callbacks will
   * be bound to that value.
   *
   * For example:
   *
   * <pre class="javascript">
   *   var promise = new qx.Promise(myAsyncFunction, this);
   *   promise.then(function() {
   *     // 'this' is preserved from the outer scope
   *   });
   *
   *   // ... is the same as: ...
   *   var promise = new qx.Promise(myAsyncFunction);
   *   promise.then(function() {
   *     // 'this' is preserved from the outer scope
   *   }, this);
   * </pre>
   *
   * If you have an existing qx.Promise and want to bind all callbacks, use the
   * bind() method - but note that it returns a new promise:
   *
   *  <pre class="javascript">
   *    var promise = someMethodThatReturnsAPromise();
   *    var boundPromise = promise.bind(this);
   *    boundPromise.then(function() {
   *      // 'this' is preserved from the outer scope
   *    }, this);
   *  </pre>
   *
   */

  /**
   @ignore(process.*)
   @ignore(global.*)
   @ignore(Symbol.*)
   @ignore(chrome.*)
  */

  /* global global, setImmediate, chrome, _dereq_ */
  /* eslint-disable no-global-assign */
  qx.Class.define("qx.Promise", {
    extend: qx.core.Object,
    /**
     * Constructor.
     *
     * The promise function is called with two parameters, functions which are to be called
     * when the promise is fulfilled or rejected respectively.  If you do not provide any
     * parameters, the promise can be externally resolved or rejected by calling the
     * <code>resolve()</code> or <code>reject()</code> methods.
     *
     * @param fn {Function} the promise function called with <code>(resolve, reject)</code>
     * @param context {Object?} optional context for all callbacks
     */
    construct: function construct(fn, context) {
      qx.core.Object.constructor.call(this);
      qx.Promise.__P_74_0();
      if (fn instanceof qx.Promise.Bluebird) {
        this.__P_74_1 = fn;
      } else if (fn) {
        if (context !== undefined && context !== null) {
          fn = fn.bind(context);
        }
        this.__P_74_1 = new qx.Promise.Bluebird(fn);
      } else {
        this.__P_74_1 = new qx.Promise.Bluebird(this.__P_74_2.bind(this));
      }
      qx.core.Assert.assertTrue(!this.__P_74_1.$$qxPromise);
      this.__P_74_1.$$qxPromise = this;
      if (context !== undefined && context !== null) {
        this.__P_74_1 = this.__P_74_1.bind(context);
      }
    },
    /**
     * Destructor
     */
    destruct: function destruct() {
      delete this.__P_74_1.$$qxPromise;
      delete this.__P_74_1;
    },
    members: {
      /** The Promise */
      __P_74_1: null,
      /** Stores data for completing the promise externally */
      __P_74_3: null,
      /* *********************************************************************************
       *
       * Promise API methods
       *
       */
      /**
       * Returns a promise which is determined by the functions <code>onFulfilled</code>
       * and <code>onRejected</code>.
       *
       * @param onFulfilled {Function} called when the Promise is fulfilled. This function
       *  has one argument, the fulfillment value.
       * @param onRejected {Function?} called when the Promise is rejected. This function
       *  has one argument, the rejection reason.
       * @return {qx.Promise}
       */
      then: function then(onFulfilled, onRejected) {
        return this._callMethod("then", arguments);
      },
      /**
       * Appends a rejection handler callback to the promise, and returns a new promise
       * resolving to the return value of the callback if it is called, or to its original
       * fulfillment value if the promise is instead fulfilled.
       *
       * @param onRejected {Function?} called when the Promise is rejected. This function
       *  has one argument, the rejection reason.
       * @return {qx.Promise} a qx.Promise is rejected if onRejected throws an error or
       *  returns a Promise which is itself rejected; otherwise, it is resolved.
       */
      "catch": function _catch(onRejected) {
        return this._callMethod("catch", arguments);
      },
      /* *********************************************************************************
       *
       * Extension Promise methods
       *
       */
      /**
       * Creates a new qx.Promise with the 'this' set to a different context
       *
       * @param context {Object} the 'this' context for the new Promise
       * @return {qx.Promise} the new promise
       */
      bind: function bind(context) {
        return qx.Promise.__P_74_4(this.__P_74_1.bind(context));
      },
      /**
       * Like calling <code>.then</code>, but the fulfillment value must be an array, which is flattened
       * to the formal parameters of the fulfillment handler.
       *
       * For example:
       * <pre>
       * qx.Promise.all([
       *   fs.readFileAsync("file1.txt"),
       *   fs.readFileAsync("file2.txt")
       * ]).spread(function(file1text, file2text) {
       *   if (file1text === file2text) {
       *     console.log("files are equal");
       *   }
       *   else {
       *     console.log("files are not equal");
       *   }
       * });
       * </pre>
       *
       * @param fulfilledHandler {Function} called when the Promises are fulfilled.
       * @return {qx.Promise}
       */
      spread: function spread(fulfilledHandler) {
        return this._callMethod("spread", arguments);
      },
      /**
       * Appends a handler that will be called regardless of this promise's fate. The handler
       * is not allowed to modify the value of the promise
       *
       * @param handler {Function?} called when the Promise is fulfilled or rejected. This function
       *  has no arguments, but can return a promise
       * @return {qx.Promise} a qx.Promise chained from this promise
       */
      "finally": function _finally(onRejected) {
        return this._callMethod("finally", arguments);
      },
      /**
       * Cancel this promise. Will not do anything if this promise is already settled.
       */
      cancel: function cancel() {
        return this._callMethod("cancel", arguments);
      },
      /**
       * Same as {@link qx.Promise.all} except that it iterates over the value of this promise, when
       * it is fulfilled; for example, if this Promise resolves to an Iterable (eg an Array),
       * <code>.all</code> will return a Promise that waits for all promises in that Iterable to be
       * fullfilled.  The Iterable can be a mix of values and Promises
       *
       * @return {qx.Promise}
       */
      all: function all() {
        return this._callIterableMethod("all", arguments);
      },
      /**
       * Same as {@link qx.Promise.race} except that it iterates over the value of this promise, when
       * it is fulfilled; for example, if this Promise resolves to an Iterable (eg an Array),
       * <code>.race</code> will return a Promise that waits until the first promise in that Iterable
       * has been fullfilled.  The Iterable can be a mix of values and Promises
       *
       * @return {qx.Promise}
       */
      race: function race(iterable) {
        return this._callIterableMethod("race", arguments);
      },
      /**
       * Same as {@link qx.Promise.some} except that it iterates over the value of this promise, when
       * it is fulfilled.  Like <code>some</code>, with 1 as count. However, if the promise fulfills,
       * the fulfillment value is not an array of 1 but the value directly.
       *
       * @return {qx.Promise}
       */
      any: function any(iterable) {
        return this._callIterableMethod("any", arguments);
      },
      /**
       * Same as {@link qx.Promise.some} except that it iterates over the value of this promise, when
       * it is fulfilled; return a promise that is fulfilled as soon as count promises are fulfilled
       * in the array. The fulfillment value is an array with count values in the order they were fulfilled.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param count {Integer}
       * @return {qx.Promise}
       */
      some: function some(iterable, count) {
        return this._callIterableMethod("some", arguments);
      },
      /**
       * Same as {@link qx.Promise.forEach} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over the values with the given <code>iterator</code> function with the signature
       * <code>(value, index, length)</code> where <code>value</code> is the resolved value. Iteration happens
       * serially. If any promise is rejected the returned promise is rejected as well.
       *
       * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator
       * function returns a promise or a thenable, then the result of the promise is awaited, before continuing with
       * next iteration.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.Promise}
       */
      forEach: function forEach(iterable, iterator) {
        return this._callIterableMethod("each", arguments);
      },
      /**
       * Same as {@link qx.Promise.filter} except that it iterates over the value of this promise, when it is fulfilled;
       * iterates over all the values into an array and filter the array to another using the given filterer function.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} options; can be:
       *  <code>concurrency</code> max nuber of simultaneous filters, default is <code>Infinity</code>
       * @return {qx.Promise}
       */
      filter: function filter(iterable, iterator, options) {
        return this._callIterableMethod("filter", arguments);
      },
      /**
       * Same as {@link qx.Promise.map} except that it iterates over the value of this promise, when it is fulfilled;
       * iterates over all the values into an array and map the array to another using the given mapper function.
       *
       * Promises returned by the mapper function are awaited for and the returned promise doesn't fulfill
       * until all mapped promises have fulfilled as well. If any promise in the array is rejected, or
       * any promise returned by the mapper function is rejected, the returned promise is rejected as well.
       *
       * The mapper function for a given item is called as soon as possible, that is, when the promise
       * for that item's index in the input array is fulfilled. This doesn't mean that the result array
       * has items in random order, it means that .map can be used for concurrency coordination unlike
       * .all.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} options; can be:
       *  <code>concurrency</code> max nuber of simultaneous filters, default is <code>Infinity</code>
       * @return {qx.Promise}
       */
      map: function map(iterable, iterator, options) {
        return this._callIterableMethod("map", arguments);
      },
      /**
       * Same as {@link qx.Promise.mapSeries} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over all the values into an array and iterate over the array serially,
       * in-order.
       *
       * Returns a promise for an array that contains the values returned by the iterator function in their
       * respective positions. The iterator won't be called for an item until its previous item, and the
       * promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of
       * utility but it can also be used simply as a side effect iterator similar to Array#forEach.
       *
       * If any promise in the input array is rejected or any promise returned by the iterator function is
       * rejected, the result will be rejected as well.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.Promise}
       */
      mapSeries: function mapSeries(iterable, iterator) {
        return this._callIterableMethod("mapSeries", arguments);
      },
      /**
       * Same as {@link qx.Promise.reduce} except that it iterates over the value of this promise, when
       * it is fulfilled; iterates over all the values in the <code>Iterable</code> into an array and
       * reduce the array to a value using the given reducer function.
       *
       * If the reducer function returns a promise, then the result of the promise is awaited, before
       * continuing with next iteration. If any promise in the array is rejected or a promise returned
       * by the reducer function is rejected, the result is rejected as well.
       *
       * If initialValue is undefined (or a promise that resolves to undefined) and the iterable contains
       * only 1 item, the callback will not be called and the iterable's single item is returned. If the
       * iterable is empty, the callback will not be called and initialValue is returned (which may be
       * undefined).
       *
       * qx.Promise.reduce will start calling the reducer as soon as possible, this is why you might want to
       * use it over qx.Promise.all (which awaits for the entire array before you can call Array#reduce on it).
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param reducer {Function} the callback, with <code>(value, index, length)</code>
       * @param initialValue {Object?} optional initial value
       * @return {qx.Promise}
       */
      reduce: function reduce(iterable, reducer, initialValue) {
        return this._callIterableMethod("reduce", arguments);
      },
      /**
       * External promise handler
       */
      __P_74_2: function __P_74_2(resolve, reject) {
        this.__P_74_3 = {
          resolve: resolve,
          reject: reject,
          complete: false
        };
      },
      /**
       * Returns the data stored by __externalPromise, throws an exception once processed
       */
      __P_74_5: function __P_74_5() {
        if (!this.__P_74_3) {
          throw new Error("Promise cannot be resolved externally");
        }
        if (this.__P_74_3.complete) {
          throw new Error("Promise has already been resolved or rejected");
        }
        this.__P_74_3.complete = true;
        return this.__P_74_3;
      },
      /**
       * Resolves an external promise
       */
      resolve: function resolve(value) {
        this.__P_74_5().resolve(value);
      },
      /**
       * Rejects an external promise
       */
      reject: function reject(reason) {
        this.__P_74_5().reject(reason);
      },
      /* *********************************************************************************
       *
       * Utility methods
       *
       */
      /**
       * Helper method used to call Promise methods which iterate over an array
       */
      _callIterableMethod: function _callIterableMethod(methodName, args) {
        args = qx.Promise.__P_74_6(args);
        return qx.Promise.__P_74_4(this.__P_74_1.then(function (value) {
          var newP = qx.Promise.Bluebird.resolve(value instanceof qx.data.Array ? value.toArray() : value);
          return qx.Promise.__P_74_4(newP[methodName].apply(newP, args));
        }));
      },
      /**
       * Helper method used to call a Promise method
       */
      _callMethod: function _callMethod(methodName, args) {
        args = qx.Promise.__P_74_6(args);
        return qx.Promise.__P_74_4(this.__P_74_1[methodName].apply(this.__P_74_1, args));
      },
      /**
       * Returns the actual Promise implementation.
       *
       * Note that Bluebird is the current implementation, and may change without
       * notice in the future; if you use this API you accept that this is a private
       * implementation detail exposed for debugging or diagnosis purposes only.  For
       * this reason, the toPromise() method is listed as deprecated starting from the
       * first release
       * @deprecated {6.0} this API method is subject to change
       */
      toPromise: function toPromise() {
        return this.__P_74_1;
      }
    },
    statics: {
      /** Bluebird Promise library; always available */
      Bluebird: null,
      /** Native Promise library; only available if the browser supports it */
      Native: null,
      /** Promise library, either the Native one or a Polyfill; reliable choice for native Promises */
      Promise: null,
      /** This is used to suppress warnings about rejections without an Error object, only used if
       * the reason is undefined
       */
      __P_74_7: new Error("Default Error"),
      /* *********************************************************************************
       *
       * Promise API methods
       *
       */
      /**
       * Detects whether the value is a promise.
       *
       * Note that this is not an `instanceof` check and while it may look odd to just test whether
       * there is a property called `then` which is a Function, that's the actual spec -
       * @see https://promisesaplus.com/
       *
       * The difficulty is that it also needs to have a `.finally` and `.catch` methods in order to
       * always be routinely useful; it's debatable what we can do about that here - if the calling code
       * definitely requires a promise then it can use `.resolve` to upgrade it or make sure that it is
       * a fully featured promise.  In this function, we detect that it is thenable, and then give a warning
       * if it is not catchable.
       *
       * @param {*} value
       * @returns {Boolean} true if it is a promise
       */
      isPromise: function isPromise(value) {
        if (!value || typeof value.then != "function") return false;
        return true;
      },
      /**
       * Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e.
       * has a then method), the returned promise will "follow" that thenable, adopting its eventual
       * state; otherwise the returned promise will be fulfilled with the value. Generally, if you
       * don't know if a value is a promise or not, Promise.resolve(value) it instead and work with
       * the return value as a promise.
       *
       * @param value {Object}
       * @param context {Object?} optional context for callbacks to be bound to
       * @return {qx.Promise}
       */
      resolve: function resolve(value, context) {
        var promise;
        if (value instanceof qx.Promise) {
          promise = value;
        } else {
          promise = qx.Promise.__P_74_4(qx.Promise.Bluebird.resolve(value));
        }
        if (context !== undefined) {
          promise = promise.bind(context);
        }
        return promise;
      },
      /**
       * Returns a Promise object that is rejected with the given reason.
       * @param reason {Object?} Reason why this Promise rejected. A warning is generated if not instanceof Error. If undefined, a default Error is used.
       * @param context {Object?} optional context for callbacks to be bound to
       * @return {qx.Promise}
       */
      reject: function reject(reason, context) {
        var args = qx.lang.Array.fromArguments(arguments);
        if (reason === undefined) {
          args.shift();
          args.unshift(qx.Promise.__P_74_7);
        } else if (!(reason instanceof Error)) {
          qx.log.Logger.warn("Rejecting a promise with a non-Error value");
        }
        var promise = qx.Promise.__P_74_8("reject", args, 0);
        if (context !== undefined) {
          promise = promise.bind(context);
        }
        return promise;
      },
      /**
       * Returns a promise that resolves when all of the promises in the object properties have resolved,
       * or rejects with the reason of the first passed promise that rejects.  The result of each property
       * is placed back in the object, replacing the promise.  Note that non-promise values are untouched.
       *
       * @param value {var} An object
       * @return {qx.Promise}
       */
      allOf: function allOf(value) {
        function action(value) {
          var arr = [];
          var names = [];
          for (var name in value) {
            if (value.hasOwnProperty(name) && qx.Promise.isPromise(value[name])) {
              arr.push(value[name]);
              names.push(name);
            }
          }
          return qx.Promise.all(arr).then(function (arr) {
            arr.forEach(function (item, index) {
              value[names[index]] = item;
            });
            return value;
          });
        }
        return qx.Promise.isPromise(value) ? value.then(action) : action(value);
      },
      /**
       * Returns a promise that resolves when all of the promises in the iterable argument have resolved,
       * or rejects with the reason of the first passed promise that rejects.  Note that non-promise values
       * are untouched.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.Promise}
       */
      all: function all(iterable) {
        return qx.Promise.__P_74_8("all", arguments);
      },
      /**
       * Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves
       * or rejects, with the value or reason from that promise.
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.Promise}
       */
      race: function race(iterable) {
        return qx.Promise.__P_74_8("race", arguments);
      },
      /* *********************************************************************************
       *
       * Extension API methods
       *
       */
      /**
       * Like Promise.some, with 1 as count. However, if the promise fulfills, the fulfillment value is not an
       * array of 1 but the value directly.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @return {qx.Promise}
       */
      any: function any(iterable) {
        return qx.Promise.__P_74_8("any", arguments);
      },
      /**
       * Given an Iterable (arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix
       * of promises and values), iterate over all the values in the Iterable into an array and return a promise
       * that is fulfilled as soon as count promises are fulfilled in the array. The fulfillment value is an
       * array with count values in the order they were fulfilled.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param count {Integer}
       * @return {qx.Promise}
       */
      some: function some(iterable, count) {
        return qx.Promise.__P_74_8("some", arguments);
      },
      /**
       * Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values)
       * with the given <code>iterator</code> function with the signature <code>(value, index, length)</code> where
       * <code>value</code> is the resolved value of a respective promise in the input array. Iteration happens
       * serially. If any promise in the input array is rejected the returned promise is rejected as well.
       *
       * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator
       * function returns a promise or a thenable, then the result of the promise is awaited, before continuing with
       * next iteration.
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.Promise}
       */
      forEach: function forEach(iterable, iterator) {
        return qx.Promise.__P_74_8("each", arguments);
      },
      /**
       * Given an Iterable(arrays are Iterable), or a promise of an Iterable, which produces promises (or a mix of
       * promises and values), iterate over all the values in the Iterable into an array and filter the array to
       * another using the given filterer function.
       *
       * It is essentially an efficient shortcut for doing a .map and then Array#filter:
       * <pre>
       *   qx.Promise.map(valuesToBeFiltered, function(value, index, length) {
       *       return Promise.all([filterer(value, index, length), value]);
       *   }).then(function(values) {
       *       return values.filter(function(stuff) {
       *           return stuff[0] == true
       *       }).map(function(stuff) {
       *           return stuff[1];
       *       });
       *   });
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} options; can be:
       *  <code>concurrency</code> max nuber of simultaneous filters, default is <code>Infinity</code>
       * @return {qx.Promise}
       */
      filter: function filter(iterable, iterator, options) {
        return qx.Promise.__P_74_8("filter", arguments);
      },
      /**
       * Given an <code>Iterable</code> (arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate over
       * all the values in the <code>Iterable</code> into an array and map the array to another using
       * the given mapper function.
       *
       * Promises returned by the mapper function are awaited for and the returned promise doesn't fulfill
       * until all mapped promises have fulfilled as well. If any promise in the array is rejected, or
       * any promise returned by the mapper function is rejected, the returned promise is rejected as well.
       *
       * The mapper function for a given item is called as soon as possible, that is, when the promise
       * for that item's index in the input array is fulfilled. This doesn't mean that the result array
       * has items in random order, it means that .map can be used for concurrency coordination unlike
       * .all.
       *
       * A common use of Promise.map is to replace the .push+Promise.all boilerplate:
       *
       * <pre>
       *   var promises = [];
       *   for (var i = 0; i < fileNames.length; ++i) {
       *       promises.push(fs.readFileAsync(fileNames[i]));
       *   }
       *   qx.Promise.all(promises).then(function() {
       *       console.log("done");
       *   });
       *
       *   // Using Promise.map:
       *   qx.Promise.map(fileNames, function(fileName) {
       *       // Promise.map awaits for returned promises as well.
       *       return fs.readFileAsync(fileName);
       *   }).then(function() {
       *       console.log("done");
       *   });
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @param options {Object?} options; can be:
       *  <code>concurrency</code> max nuber of simultaneous filters, default is <code>Infinity</code>
       * @return {qx.Promise}
       */
      map: function map(iterable, iterator, options) {
        return qx.Promise.__P_74_8("map", arguments);
      },
      /**
       * Given an <code>Iterable</code>(arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate over
       * all the values in the <code>Iterable</code> into an array and iterate over the array serially,
       * in-order.
       *
       * Returns a promise for an array that contains the values returned by the iterator function in their
       * respective positions. The iterator won't be called for an item until its previous item, and the
       * promise returned by the iterator for that item are fulfilled. This results in a mapSeries kind of
       * utility but it can also be used simply as a side effect iterator similar to Array#forEach.
       *
       * If any promise in the input array is rejected or any promise returned by the iterator function is
       * rejected, the result will be rejected as well.
       *
       * Example where .mapSeries(the instance method) is used for iterating with side effects:
       *
       * <pre>
       * // Source: http://jakearchibald.com/2014/es7-async-functions/
       * function loadStory() {
       *   return getJSON('story.json')
       *     .then(function(story) {
       *       addHtmlToPage(story.heading);
       *       return story.chapterURLs.map(getJSON);
       *     })
       *     .mapSeries(function(chapter) { addHtmlToPage(chapter.html); })
       *     .then(function() { addTextToPage("All done"); })
       *     .catch(function(err) { addTextToPage("Argh, broken: " + err.message); })
       *     .then(function() { document.querySelector('.spinner').style.display = 'none'; });
       * }
       * </pre>
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param iterator {Function} the callback, with <code>(value, index, length)</code>
       * @return {qx.Promise}
       */
      mapSeries: function mapSeries(iterable, iterator) {
        return qx.Promise.__P_74_8("mapSeries", arguments);
      },
      /**
       * Given an <code>Iterable</code> (arrays are <code>Iterable</code>), or a promise of an
       * <code>Iterable</code>, which produces promises (or a mix of promises and values), iterate
       * over all the values in the <code>Iterable</code> into an array and reduce the array to a
       * value using the given reducer function.
       *
       * If the reducer function returns a promise, then the result of the promise is awaited, before
       * continuing with next iteration. If any promise in the array is rejected or a promise returned
       * by the reducer function is rejected, the result is rejected as well.
       *
       * Read given files sequentially while summing their contents as an integer. Each file contains
       * just the text 10.
       *
       * <pre>
       *   qx.Promise.reduce(["file1.txt", "file2.txt", "file3.txt"], function(total, fileName) {
       *       return fs.readFileAsync(fileName, "utf8").then(function(contents) {
       *           return total + parseInt(contents, 10);
       *       });
       *   }, 0).then(function(total) {
       *       //Total is 30
       *   });
       * </pre>
       *
       * If initialValue is undefined (or a promise that resolves to undefined) and the iterable contains
       * only 1 item, the callback will not be called and the iterable's single item is returned. If the
       * iterable is empty, the callback will not be called and initialValue is returned (which may be
       * undefined).
       *
       * Promise.reduce will start calling the reducer as soon as possible, this is why you might want to
       * use it over Promise.all (which awaits for the entire array before you can call Array#reduce on it).
       *
       * @param iterable {Iterable} An iterable object, such as an Array
       * @param reducer {Function} the callback, with <code>(value, index, length)</code>
       * @param initialValue {Object?} optional initial value
       * @return {qx.Promise}
       */
      reduce: function reduce(iterable, reducer, initialValue) {
        return qx.Promise.__P_74_8("reduce", arguments);
      },
      /**
       * Returns a new function that wraps the given function fn. The new function will always return a promise that is
       * fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
       * @param cb {Function}
       * @return {Function}
       */
      method: function method(cb) {
        var wrappedCb = qx.Promise.Bluebird.method(cb);
        return function () {
          return qx.Promise.__P_74_4(wrappedCb.apply(this, arguments));
        };
      },
      /**
       * Like .all but for object properties or Maps* entries instead of iterated values. Returns a promise that
       * is fulfilled when all the properties of the object or the Map's' values** are fulfilled. The promise's
       * fulfillment value is an object or a Map with fulfillment values at respective keys to the original object
       * or a Map. If any promise in the object or Map rejects, the returned promise is rejected with the rejection
       * reason.
       *
       * If object is a trusted Promise, then it will be treated as a promise for object rather than for its
       * properties. All other objects (except Maps) are treated for their properties as is returned by
       * Object.keys - the object's own enumerable properties.
       *
       * @param input {Object} An Object
       * @return {qx.Promise}
       */
      props: function props(input) {
        return qx.Promise.__P_74_8("props", arguments);
      },
      /**
       * Returns a new function that wraps a function that is in node.js
       * style. The resulting function returns a promise instead of taking a
       * callback function as an argument. The promise is resolved or rejected
       * by the action of the callback function. The provided function must
       * accept a callback as its last argument, and that callback function must
       * expect its first argument to be an error if non-null. If the first
       * argument is null, the second argument (optional) will be the success
       * value.
       *
       * Example:
       *
       * Assume there is a member method in myApp.Application such as the
       * following:
       * <pre><code>
       *   issueRpc : function(method, params, callback)
       *   {
       *     ...
       *   }
       * </code></pre>
       *
       * where the signature of <code>callback</code> is:
       * <pre><code>
       *   function callback(e, result)
       * </code></pre>
       *
       * The <code>issueRpc</code>method could be converted to be called using
       * promises instead of callbacks, as shown here:
       * <pre><code>
       *   var app = qx.core.Init.getApplication();
       *   var rpc = qx.Promise.promisify(app.issueRpc, { context : app });
       *   rpc("ping", [ "hello world" ])
       *     .then(
       *       function(pongValue)
       *       {
       *         // handle result
       *       })
       *     .catch(
       *       function(e)
       *       {
       *         throw e;
       *       });
       * </code></pre>
       *
       * @param f {Function} The node.js-style function to be promisified
       *
       * @param options {Map?}
       *   The sole user option in this map is <code>context</code>, which may
       *   be specified to arrange for the provided callback function to be
       *   called in the specified context.
       *
       * @return {qx.Promise}
       */
      promisify: function promisify(f, options) {
        return qx.Promise.__P_74_8("promisify", arguments);
      },
      /* *********************************************************************************
       *
       * Internal API methods
       *
       */
      /**
       * Called when the Bluebird Promise class is loaded
       * @param Promise {Class} the Promise class
       */
      __P_74_9: function __P_74_9(Promise) {
        qx.Promise.Bluebird = Promise;
        Promise.config({
          warnings: true,
          longStackTraces: true,
          cancellation: true
        });
      },
      /** Whether one-time initialisaton has happened */
      __P_74_10: false,
      /**
       * One-time initializer
       */
      __P_74_0: function __P_74_0() {
        if (qx.Promise.__P_74_10) {
          return;
        }
        qx.Promise.__P_74_10 = true;
        var isNode = typeof process !== "undefined";
        if (isNode) {
          process.on("unhandledRejection", qx.Promise.__P_74_11.bind(this));
        } else {
          qx.bom.Event.addNativeListener(window, "unhandledrejection", qx.Promise.__P_74_11.bind(this));
        }
      },
      /**
       * Handles unhandled errors and passes them through to Qooxdoo's global error handler
       * @param e {NativeEvent}
       */
      __P_74_11: function __P_74_11(e) {
        if (qx.lang.Type.isFunction(e.preventDefault)) {
          e.preventDefault();
        }
        var reason = null;
        if (e instanceof Error) {
          reason = e;
        } else if (e.reason instanceof Error) {
          reason = e.reason;
        } else if (e.detail && e.detail.reason instanceof Error) {
          reason = e.detail.reason;
        }
        qx.log.Logger.error(this, "Unhandled promise rejection: " + (reason ? reason.stack : "(not from exception)"));
        qx.event.GlobalError.handleError(reason);
      },
      /**
       * Wraps values, converting Promise into qx.Promise
       * @param value {Object}
       * @return {Object}
       */
      __P_74_4: function __P_74_4(value) {
        if (value instanceof qx.Promise.Bluebird) {
          if (value.$$qxPromise) {
            value = value.$$qxPromise;
          } else {
            value = new qx.Promise(value);
          }
        }
        return value;
      },
      /**
       * Binds all functions in the array to the context at the end of the array;
       * the last value must be a qx.core.Object to distinguish itself from configuration
       * objects passed to some methods.
       * @param args {arguments}
       * @param minArgs {Integer?} minimum number of arguments expected for the method call;
       * 	this is used to determine whether the last value is for binding (default is 1)
       * @return {Array} array of new arguments with functions bound as necessary
       */
      __P_74_6: function __P_74_6(args, minArgs) {
        args = qx.lang.Array.fromArguments(args);
        if (minArgs === undefined) {
          minArgs = 1;
        }
        if (args.length > minArgs) {
          var context = args[args.length - 1];
          if (context instanceof qx.core.Object || qx.Class.isClass(context)) {
            args.pop();
            for (var i = 0; i < args.length; i++) {
              if (typeof args[i] == "function") {
                args[i] = args[i].bind(context);
              }
            }
          }
        }
        return args;
      },
      /**
       * Helper method used to call a Bluebird Promise method
       * @param methodName {String} method name to call
       * @param args {Array} arguments to pass
       * @param minArgs {Integer?} {@see __bindArgs}
       * @return {Object?}
       */
      __P_74_8: function __P_74_8(methodName, args, minArgs) {
        args = qx.Promise.__P_74_6(args, minArgs);
        return qx.Promise.__P_74_4(qx.Promise.Bluebird[methodName].apply(qx.Promise.Bluebird, qx.Promise.__P_74_12(args)));
      },
      /**
       * Maps all arguments ready for passing to a Bluebird function; qx.data.Array are
       * translated to native arrays and qx.Promise to Promise.  This is not recursive.
       */
      __P_74_12: function __P_74_12(args) {
        var dest = [];
        args.forEach(function (arg) {
          if (arg instanceof qx.data.Array) {
            dest.push(arg.toArray());
          } else if (arg instanceof qx.Promise) {
            dest.push(arg.toPromise());
          } else {
            dest.push(arg);
          }
        });
        return dest;
      }
    },
    defer: function defer(statics, members) {
      statics.Promise = statics.Native = window.Promise;
      var debug = false;
      qx.core.Environment.add("qx.promise.warnings", debug);
      qx.core.Environment.add("qx.promise.longStackTraces", false);
    }
  });

  /*eslint curly: ["off"]*/
  /**
   * @lint ignoreUnused(exports)
   * @lint ignoreUnused(module)
   * @lint ignoreUnused(define)
   * @lint ignoreUnused(CapturedTrace)
   * @lint ignoreUnused(bitField)
   * @lint ignoreUnused(isArray)
   * @lint ignoreDeprecated(eval)
   * @lint ignoreNoLoopBlock()
   * @ignore(Map)
   * @ignore(MutationObserver)
   * @ignore(Symbol)
   * @ignore(Symbol.iterator)
   * @ignore(_dereq_)
   * @ignore(chrome)
   * @ignore(chrome.loadTimes)
   * @ignore(CustomEvent)
   * @ignore(define)
   * @ignore(define.amd)
   * @ignore(enumeration)
   * @ignore(Event)
   * @ignore(exports)
   * @ignore(global)
   * @ignore(global.setImmediate)
   * @ignore(module)
   * @ignore(module.exports)
   * @ignore(MutationObserver)
   * @ignore(obj)
   * @ignore(obj.toPromise)
   * @ignore(predicateLoop)
   * @ignore(process)
   * @ignore(process.domain)
   * @ignore(process.emit.apply)
   * @ignore(process.env)
   * @ignore(process.exit)
   * @ignore(process.nextTick)
   * @ignore(process.stderr.isTTY)
   * @ignore(process.stderr.write)
   * @ignore(process.versions.node.split)
   * @ignore(promise)
   * @ignore(Promise)
   * @ignore(self)
   * @ignore(setImmediate)
   */
  (function () {
    /* @preserve
     * The MIT License (MIT)
     *
     * Copyright (c) 2013-2015 Petka Antonov
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     *
     */
    /**
     * bluebird build version 3.4.5
     * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
     */
    !function (e) {
      qx.Promise.__P_74_9(e());
    }(function () {
      var define, module, exports;
      return function e(t, n, r) {
        function s(o, u) {
          if (!n[o]) {
            if (!t[o]) {
              var a = typeof _dereq_ == "function" && _dereq_;
              if (!u && a) return a(o, true);
              if (i) return i(o, true);
              var f = new Error("Cannot find module '" + o + "'");
              /* eslint-disable-next-line no-sequences */
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
              exports: {}
            };
            t[o][0].call(l.exports, function (e) {
              var n = t[o][1][e];
              return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
          }
          return n[o].exports;
        }
        var i = typeof _dereq_ == "function" && _dereq_;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
      }({
        1: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise) {
            var SomePromiseArray = Promise._SomePromiseArray;
            function any(promises) {
              var ret = new SomePromiseArray(promises);
              var promise = ret.promise();
              ret.setHowMany(1);
              ret.setUnwrap();
              ret.init();
              return promise;
            }
            Promise.any = function (promises) {
              return any(promises);
            };
            Promise.prototype.any = function () {
              return any(this);
            };
          };
        }, {}],
        2: [function (_dereq_, module, exports) {
          "use strict";

          var firstLineError;
          try {
            throw new Error();
          } catch (e) {
            firstLineError = e;
          }
          var schedule = _dereq_("./schedule");
          var Queue = _dereq_("./queue");
          var util = _dereq_("./util");
          function Async() {
            this._customScheduler = false;
            this._isTickUsed = false;
            this._lateQueue = new Queue(16);
            this._normalQueue = new Queue(16);
            this._haveDrainedQueues = false;
            this._trampolineEnabled = true;
            var self = this;
            this.drainQueues = function () {
              self._drainQueues();
            };
            this._schedule = schedule;
          }
          Async.prototype.setScheduler = function (fn) {
            var prev = this._schedule;
            this._schedule = fn;
            this._customScheduler = true;
            return prev;
          };
          Async.prototype.hasCustomScheduler = function () {
            return this._customScheduler;
          };
          Async.prototype.enableTrampoline = function () {
            this._trampolineEnabled = true;
          };
          Async.prototype.disableTrampolineIfNecessary = function () {
            if (util.hasDevTools) {
              this._trampolineEnabled = false;
            }
          };
          Async.prototype.haveItemsQueued = function () {
            return this._isTickUsed || this._haveDrainedQueues;
          };
          Async.prototype.fatalError = function (e, isNode) {
            if (isNode) {
              process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
              process.exit(2);
            } else {
              this.throwLater(e);
            }
          };
          Async.prototype.throwLater = function (fn, arg) {
            if (arguments.length === 1) {
              arg = fn;
              fn = function fn() {
                throw arg;
              };
            }
            if (typeof setTimeout !== "undefined") {
              setTimeout(function () {
                fn(arg);
              }, 0);
            } else try {
              this._schedule(function () {
                fn(arg);
              });
            } catch (e) {
              throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
            }
          };
          function AsyncInvokeLater(fn, receiver, arg) {
            this._lateQueue.push(fn, receiver, arg);
            this._queueTick();
          }
          function AsyncInvoke(fn, receiver, arg) {
            this._normalQueue.push(fn, receiver, arg);
            this._queueTick();
          }
          function AsyncSettlePromises(promise) {
            this._normalQueue._pushOne(promise);
            this._queueTick();
          }
          if (!util.hasDevTools) {
            Async.prototype.invokeLater = AsyncInvokeLater;
            Async.prototype.invoke = AsyncInvoke;
            Async.prototype.settlePromises = AsyncSettlePromises;
          } else {
            Async.prototype.invokeLater = function (fn, receiver, arg) {
              if (this._trampolineEnabled) {
                AsyncInvokeLater.call(this, fn, receiver, arg);
              } else {
                this._schedule(function () {
                  setTimeout(function () {
                    fn.call(receiver, arg);
                  }, 100);
                });
              }
            };
            Async.prototype.invoke = function (fn, receiver, arg) {
              if (this._trampolineEnabled) {
                AsyncInvoke.call(this, fn, receiver, arg);
              } else {
                this._schedule(function () {
                  fn.call(receiver, arg);
                });
              }
            };
            Async.prototype.settlePromises = function (promise) {
              if (this._trampolineEnabled) {
                AsyncSettlePromises.call(this, promise);
              } else {
                this._schedule(function () {
                  promise._settlePromises();
                });
              }
            };
          }
          Async.prototype.invokeFirst = function (fn, receiver, arg) {
            this._normalQueue.unshift(fn, receiver, arg);
            this._queueTick();
          };
          Async.prototype._drainQueue = function (queue) {
            while (queue.length() > 0) {
              var fn = queue.shift();
              if (typeof fn !== "function") {
                fn._settlePromises();
                continue;
              }
              var receiver = queue.shift();
              var arg = queue.shift();
              fn.call(receiver, arg);
            }
          };
          Async.prototype._drainQueues = function () {
            this._drainQueue(this._normalQueue);
            this._reset();
            this._haveDrainedQueues = true;
            this._drainQueue(this._lateQueue);
          };
          Async.prototype._queueTick = function () {
            if (!this._isTickUsed) {
              this._isTickUsed = true;
              this._schedule(this.drainQueues);
            }
          };
          Async.prototype._reset = function () {
            this._isTickUsed = false;
          };
          module.exports = Async;
          module.exports.firstLineError = firstLineError;
        }, {
          "./queue": 26,
          "./schedule": 29,
          "./util": 36
        }],
        3: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
            var calledBind = false;
            var rejectThis = function rejectThis(_, e) {
              this._reject(e);
            };
            var targetRejected = function targetRejected(e, context) {
              context.promiseRejectionQueued = true;
              context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
            };
            var bindingResolved = function bindingResolved(thisArg, context) {
              if ((this._bitField & 50397184) === 0) {
                this._resolveCallback(context.target);
              }
            };
            var bindingRejected = function bindingRejected(e, context) {
              if (!context.promiseRejectionQueued) this._reject(e);
            };
            Promise.prototype.bind = function (thisArg) {
              if (!calledBind) {
                calledBind = true;
                Promise.prototype._propagateFrom = debug.propagateFromFunction();
                Promise.prototype._boundValue = debug.boundValueFunction();
              }
              var maybePromise = tryConvertToPromise(thisArg);
              var ret = new Promise(INTERNAL);
              ret._propagateFrom(this, 1);
              var target = this._target();
              ret._setBoundTo(maybePromise);
              if (maybePromise instanceof Promise) {
                var context = {
                  promiseRejectionQueued: false,
                  promise: ret,
                  target: target,
                  bindingPromise: maybePromise
                };
                target._then(INTERNAL, targetRejected, undefined, ret, context);
                maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                ret._setOnCancel(maybePromise);
              } else {
                ret._resolveCallback(target);
              }
              return ret;
            };
            Promise.prototype._setBoundTo = function (obj) {
              if (obj !== undefined) {
                this._bitField = this._bitField | 2097152;
                this._boundTo = obj;
              } else {
                this._bitField = this._bitField & ~2097152;
              }
            };
            Promise.prototype._isBound = function () {
              return (this._bitField & 2097152) === 2097152;
            };
            Promise.bind = function (thisArg, value) {
              return Promise.resolve(value).bind(thisArg);
            };
          };
        }, {}],
        4: [function (_dereq_, module, exports) {
          "use strict";

          var old;
          if (typeof Promise !== "undefined") old = Promise;
          function noConflict() {
            try {
              if (Promise === bluebird) Promise = old;
            } catch (e) {}
            return bluebird;
          }
          var bluebird = _dereq_("./promise")();
          bluebird.noConflict = noConflict;
          module.exports = bluebird;
        }, {
          "./promise": 22
        }],
        5: [function (_dereq_, module, exports) {
          "use strict";

          var cr = Object.create;
          if (cr) {
            var callerCache = cr(null);
            var getterCache = cr(null);
            callerCache[" size"] = getterCache[" size"] = 0;
          }
          module.exports = function (Promise) {
            var util = _dereq_("./util");
            var canEvaluate = util.canEvaluate;
            var isIdentifier = util.isIdentifier;
            var getMethodCaller;
            var getGetter;
            function ensureMethod(obj, methodName) {
              var fn;
              if (obj != null) fn = obj[methodName];
              if (typeof fn !== "function") {
                var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                throw new Promise.TypeError(message);
              }
              return fn;
            }
            function caller(obj) {
              var methodName = this.pop();
              var fn = ensureMethod(obj, methodName);
              return fn.apply(obj, this);
            }
            Promise.prototype.call = function (methodName) {
              var args = [].slice.call(arguments, 1);
              args.push(methodName);
              return this._then(caller, undefined, undefined, args, undefined);
            };
            function namedGetter(obj) {
              return obj[this];
            }
            function indexedGetter(obj) {
              var index = +this;
              if (index < 0) index = Math.max(0, index + obj.length);
              return obj[index];
            }
            Promise.prototype.get = function (propertyName) {
              var isIndex = typeof propertyName === "number";
              var getter;
              if (!isIndex) {
                if (canEvaluate) {
                  var maybeGetter = getGetter(propertyName);
                  getter = maybeGetter !== null ? maybeGetter : namedGetter;
                } else {
                  getter = namedGetter;
                }
              } else {
                getter = indexedGetter;
              }
              return this._then(getter, undefined, undefined, propertyName, undefined);
            };
          };
        }, {
          "./util": 36
        }],
        6: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, apiRejection, debug) {
            var util = _dereq_("./util");
            var tryCatch = util.tryCatch;
            var errorObj = util.errorObj;
            var async = Promise._async;
            Promise.prototype["break"] = Promise.prototype.cancel = function () {
              if (!debug.cancellation()) return this._warn("cancellation is disabled");
              var promise = this;
              var child = promise;
              while (promise._isCancellable()) {
                if (!promise._cancelBy(child)) {
                  if (child._isFollowing()) {
                    child._followee().cancel();
                  } else {
                    child._cancelBranched();
                  }
                  break;
                }
                var parent = promise._cancellationParent;
                if (parent == null || !parent._isCancellable()) {
                  if (promise._isFollowing()) {
                    promise._followee().cancel();
                  } else {
                    promise._cancelBranched();
                  }
                  break;
                } else {
                  if (promise._isFollowing()) promise._followee().cancel();
                  promise._setWillBeCancelled();
                  child = promise;
                  promise = parent;
                }
              }
            };
            Promise.prototype._branchHasCancelled = function () {
              this._branchesRemainingToCancel--;
            };
            Promise.prototype._enoughBranchesHaveCancelled = function () {
              return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
            };
            Promise.prototype._cancelBy = function (canceller) {
              if (canceller === this) {
                this._branchesRemainingToCancel = 0;
                this._invokeOnCancel();
                return true;
              } else {
                this._branchHasCancelled();
                if (this._enoughBranchesHaveCancelled()) {
                  this._invokeOnCancel();
                  return true;
                }
              }
              return false;
            };
            Promise.prototype._cancelBranched = function () {
              if (this._enoughBranchesHaveCancelled()) {
                this._cancel();
              }
            };
            Promise.prototype._cancel = function () {
              if (!this._isCancellable()) return;
              this._setCancelled();
              async.invoke(this._cancelPromises, this, undefined);
            };
            Promise.prototype._cancelPromises = function () {
              if (this._length() > 0) this._settlePromises();
            };
            Promise.prototype._unsetOnCancel = function () {
              this._onCancelField = undefined;
            };
            Promise.prototype._isCancellable = function () {
              return this.isPending() && !this._isCancelled();
            };
            Promise.prototype.isCancellable = function () {
              return this.isPending() && !this.isCancelled();
            };
            Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
              if (util.isArray(onCancelCallback)) {
                for (var i = 0; i < onCancelCallback.length; ++i) {
                  this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                }
              } else if (onCancelCallback !== undefined) {
                if (typeof onCancelCallback === "function") {
                  if (!internalOnly) {
                    var e = tryCatch(onCancelCallback).call(this._boundValue());
                    if (e === errorObj) {
                      this._attachExtraTrace(e.e);
                      async.throwLater(e.e);
                    }
                  }
                } else {
                  onCancelCallback._resultCancelled(this);
                }
              }
            };
            Promise.prototype._invokeOnCancel = function () {
              var onCancelCallback = this._onCancel();
              this._unsetOnCancel();
              async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
            };
            Promise.prototype._invokeInternalOnCancel = function () {
              if (this._isCancellable()) {
                this._doInvokeOnCancel(this._onCancel(), true);
                this._unsetOnCancel();
              }
            };
            Promise.prototype._resultCancelled = function () {
              this.cancel();
            };
          };
        }, {
          "./util": 36
        }],
        7: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (NEXT_FILTER) {
            var util = _dereq_("./util");
            var getKeys = _dereq_("./es5").keys;
            var tryCatch = util.tryCatch;
            var errorObj = util.errorObj;
            function catchFilter(instances, cb, promise) {
              return function (e) {
                var boundTo = promise._boundValue();
                predicateLoop: for (var i = 0; i < instances.length; ++i) {
                  var item = instances[i];
                  if (item === Error || item != null && item.prototype instanceof Error) {
                    if (e instanceof item) {
                      return tryCatch(cb).call(boundTo, e);
                    }
                  } else if (typeof item === "function") {
                    var matchesPredicate = tryCatch(item).call(boundTo, e);
                    if (matchesPredicate === errorObj) {
                      return matchesPredicate;
                    } else if (matchesPredicate) {
                      return tryCatch(cb).call(boundTo, e);
                    }
                  } else if (util.isObject(e)) {
                    var keys = getKeys(item);
                    for (var j = 0; j < keys.length; ++j) {
                      var key = keys[j];
                      if (item[key] != e[key]) {
                        continue predicateLoop;
                      }
                    }
                    return tryCatch(cb).call(boundTo, e);
                  }
                }
                return NEXT_FILTER;
              };
            }
            return catchFilter;
          };
        }, {
          "./es5": 13,
          "./util": 36
        }],
        8: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise) {
            var longStackTraces = false;
            var contextStack = [];
            Promise.prototype._promiseCreated = function () {};
            Promise.prototype._pushContext = function () {};
            Promise.prototype._popContext = function () {
              return null;
            };
            Promise._peekContext = Promise.prototype._peekContext = function () {};
            function Context() {
              this._trace = new Context.CapturedTrace(peekContext());
            }
            Context.prototype._pushContext = function () {
              if (this._trace !== undefined) {
                this._trace._promiseCreated = null;
                contextStack.push(this._trace);
              }
            };
            Context.prototype._popContext = function () {
              if (this._trace !== undefined) {
                var trace = contextStack.pop();
                var ret = trace._promiseCreated;
                trace._promiseCreated = null;
                return ret;
              }
              return null;
            };
            function createContext() {
              if (longStackTraces) return new Context();
            }
            function peekContext() {
              var lastIndex = contextStack.length - 1;
              if (lastIndex >= 0) {
                return contextStack[lastIndex];
              }
              return undefined;
            }
            Context.CapturedTrace = null;
            Context.create = createContext;
            Context.deactivateLongStackTraces = function () {};
            Context.activateLongStackTraces = function () {
              var Promise_pushContext = Promise.prototype._pushContext;
              var Promise_popContext = Promise.prototype._popContext;
              var Promise_PeekContext = Promise._peekContext;
              var Promise_peekContext = Promise.prototype._peekContext;
              var Promise_promiseCreated = Promise.prototype._promiseCreated;
              Context.deactivateLongStackTraces = function () {
                Promise.prototype._pushContext = Promise_pushContext;
                Promise.prototype._popContext = Promise_popContext;
                Promise._peekContext = Promise_PeekContext;
                Promise.prototype._peekContext = Promise_peekContext;
                Promise.prototype._promiseCreated = Promise_promiseCreated;
                longStackTraces = false;
              };
              longStackTraces = true;
              Promise.prototype._pushContext = Context.prototype._pushContext;
              Promise.prototype._popContext = Context.prototype._popContext;
              Promise._peekContext = Promise.prototype._peekContext = peekContext;
              Promise.prototype._promiseCreated = function () {
                var ctx = this._peekContext();
                if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
              };
            };
            return Context;
          };
        }, {}],
        9: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, Context) {
            var getDomain = Promise._getDomain;
            var async = Promise._async;
            var Warning = _dereq_("./errors").Warning;
            var util = _dereq_("./util");
            var canAttachTrace = util.canAttachTrace;
            var unhandledRejectionHandled;
            var possiblyUnhandledRejection;
            var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
            var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
            var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
            var stackFramePattern = null;
            var formatStack = null;
            var indentStackFrames = false;
            var printWarning;
            var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));
            var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));
            var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));
            var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
            Promise.prototype.suppressUnhandledRejections = function () {
              var target = this._target();
              target._bitField = target._bitField & ~1048576 | 524288;
            };
            Promise.prototype._ensurePossibleRejectionHandled = function () {
              if ((this._bitField & 524288) !== 0) return;
              this._setRejectionIsUnhandled();
              async.invokeLater(this._notifyUnhandledRejection, this, undefined);
            };
            Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
              fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
            };
            Promise.prototype._setReturnedNonUndefined = function () {
              this._bitField = this._bitField | 268435456;
            };
            Promise.prototype._returnedNonUndefined = function () {
              return (this._bitField & 268435456) !== 0;
            };
            Promise.prototype._notifyUnhandledRejection = function () {
              if (this._isRejectionUnhandled()) {
                var reason = this._settledValue();
                this._setUnhandledRejectionIsNotified();
                fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
              }
            };
            Promise.prototype._setUnhandledRejectionIsNotified = function () {
              this._bitField = this._bitField | 262144;
            };
            Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
              this._bitField = this._bitField & ~262144;
            };
            Promise.prototype._isUnhandledRejectionNotified = function () {
              return (this._bitField & 262144) > 0;
            };
            Promise.prototype._setRejectionIsUnhandled = function () {
              this._bitField = this._bitField | 1048576;
            };
            Promise.prototype._unsetRejectionIsUnhandled = function () {
              this._bitField = this._bitField & ~1048576;
              if (this._isUnhandledRejectionNotified()) {
                this._unsetUnhandledRejectionIsNotified();
                this._notifyUnhandledRejectionIsHandled();
              }
            };
            Promise.prototype._isRejectionUnhandled = function () {
              return (this._bitField & 1048576) > 0;
            };
            Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
              return warn(message, shouldUseOwnTrace, promise || this);
            };
            Promise.onPossiblyUnhandledRejection = function (fn) {
              var domain = getDomain();
              possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
            };
            Promise.onUnhandledRejectionHandled = function (fn) {
              var domain = getDomain();
              unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
            };
            var disableLongStackTraces = function disableLongStackTraces() {};
            Promise.longStackTraces = function () {
              if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
              }
              if (!config.longStackTraces && longStackTracesIsSupported()) {
                var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                config.longStackTraces = true;
                disableLongStackTraces = function disableLongStackTraces() {
                  if (async.haveItemsQueued() && !config.longStackTraces) {
                    throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                  }
                  Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                  Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                  Context.deactivateLongStackTraces();
                  async.enableTrampoline();
                  config.longStackTraces = false;
                };
                Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                Context.activateLongStackTraces();
                async.disableTrampolineIfNecessary();
              }
            };
            Promise.hasLongStackTraces = function () {
              return config.longStackTraces && longStackTracesIsSupported();
            };
            var fireDomEvent = function () {
              try {
                if (typeof CustomEvent === "function") {
                  var event = new CustomEvent("CustomEvent");
                  util.global.dispatchEvent(event);
                  return function (name, event) {
                    var domEvent = new CustomEvent(name.toLowerCase(), {
                      detail: event,
                      cancelable: true
                    });
                    return !util.global.dispatchEvent(domEvent);
                  };
                } else if (typeof Event === "function") {
                  var event = new Event("CustomEvent");
                  util.global.dispatchEvent(event);
                  return function (name, event) {
                    var domEvent = new Event(name.toLowerCase(), {
                      cancelable: true
                    });
                    domEvent.detail = event;
                    return !util.global.dispatchEvent(domEvent);
                  };
                } else {
                  var event = document.createEvent("CustomEvent");
                  event.initCustomEvent("testingtheevent", false, true, {});
                  util.global.dispatchEvent(event);
                  return function (name, event) {
                    var domEvent = document.createEvent("CustomEvent");
                    domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
                    return !util.global.dispatchEvent(domEvent);
                  };
                }
              } catch (e) {}
              return function () {
                return false;
              };
            }();
            var fireGlobalEvent = function () {
              if (util.isNode) {
                return function () {
                  return process.emit.apply(process, arguments);
                };
              } else {
                if (!util.global) {
                  return function () {
                    return false;
                  };
                }
                return function (name) {
                  var methodName = "on" + name.toLowerCase();
                  var method = util.global[methodName];
                  if (!method) return false;
                  method.apply(util.global, [].slice.call(arguments, 1));
                  return true;
                };
              }
            }();
            function generatePromiseLifecycleEventObject(name, promise) {
              return {
                promise: promise
              };
            }
            var eventToObjectGenerator = {
              promiseCreated: generatePromiseLifecycleEventObject,
              promiseFulfilled: generatePromiseLifecycleEventObject,
              promiseRejected: generatePromiseLifecycleEventObject,
              promiseResolved: generatePromiseLifecycleEventObject,
              promiseCancelled: generatePromiseLifecycleEventObject,
              promiseChained: function promiseChained(name, promise, child) {
                return {
                  promise: promise,
                  child: child
                };
              },
              warning: function warning(name, _warning) {
                return {
                  warning: _warning
                };
              },
              unhandledRejection: function unhandledRejection(name, reason, promise) {
                return {
                  reason: reason,
                  promise: promise
                };
              },
              rejectionHandled: generatePromiseLifecycleEventObject
            };
            var activeFireEvent = function activeFireEvent(name) {
              var globalEventFired = false;
              try {
                globalEventFired = fireGlobalEvent.apply(null, arguments);
              } catch (e) {
                async.throwLater(e);
                globalEventFired = true;
              }
              var domEventFired = false;
              try {
                domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
              } catch (e) {
                async.throwLater(e);
                domEventFired = true;
              }
              return domEventFired || globalEventFired;
            };
            Promise.config = function (opts) {
              opts = Object(opts);
              if ("longStackTraces" in opts) {
                if (opts.longStackTraces) {
                  Promise.longStackTraces();
                } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                  disableLongStackTraces();
                }
              }
              if ("warnings" in opts) {
                var warningsOption = opts.warnings;
                config.warnings = !!warningsOption;
                wForgottenReturn = config.warnings;
                if (util.isObject(warningsOption)) {
                  if ("wForgottenReturn" in warningsOption) {
                    wForgottenReturn = !!warningsOption.wForgottenReturn;
                  }
                }
              }
              if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                if (async.haveItemsQueued()) {
                  throw new Error("cannot enable cancellation after promises are in use");
                }
                Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                Promise.prototype._propagateFrom = cancellationPropagateFrom;
                Promise.prototype._onCancel = cancellationOnCancel;
                Promise.prototype._setOnCancel = cancellationSetOnCancel;
                Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                Promise.prototype._execute = cancellationExecute;
                _propagateFromFunction = cancellationPropagateFrom;
                config.cancellation = true;
              }
              if ("monitoring" in opts) {
                if (opts.monitoring && !config.monitoring) {
                  config.monitoring = true;
                  Promise.prototype._fireEvent = activeFireEvent;
                } else if (!opts.monitoring && config.monitoring) {
                  config.monitoring = false;
                  Promise.prototype._fireEvent = defaultFireEvent;
                }
              }
            };
            function defaultFireEvent() {
              return false;
            }
            Promise.prototype._fireEvent = defaultFireEvent;
            Promise.prototype._execute = function (executor, resolve, reject) {
              try {
                executor(resolve, reject);
              } catch (e) {
                return e;
              }
            };
            Promise.prototype._onCancel = function () {};
            Promise.prototype._setOnCancel = function (handler) {};
            Promise.prototype._attachCancellationCallback = function (onCancel) {};
            Promise.prototype._captureStackTrace = function () {};
            Promise.prototype._attachExtraTrace = function () {};
            Promise.prototype._clearCancellationData = function () {};
            Promise.prototype._propagateFrom = function (parent, flags) {};
            function cancellationExecute(executor, resolve, reject) {
              var promise = this;
              try {
                executor(resolve, reject, function (onCancel) {
                  if (typeof onCancel !== "function") {
                    throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                  }
                  promise._attachCancellationCallback(onCancel);
                });
              } catch (e) {
                return e;
              }
            }
            function cancellationAttachCancellationCallback(onCancel) {
              if (!this._isCancellable()) return this;
              var previousOnCancel = this._onCancel();
              if (previousOnCancel !== undefined) {
                if (util.isArray(previousOnCancel)) {
                  previousOnCancel.push(onCancel);
                } else {
                  this._setOnCancel([previousOnCancel, onCancel]);
                }
              } else {
                this._setOnCancel(onCancel);
              }
            }
            function cancellationOnCancel() {
              return this._onCancelField;
            }
            function cancellationSetOnCancel(onCancel) {
              this._onCancelField = onCancel;
            }
            function cancellationClearCancellationData() {
              this._cancellationParent = undefined;
              this._onCancelField = undefined;
            }
            function cancellationPropagateFrom(parent, flags) {
              if ((flags & 1) !== 0) {
                this._cancellationParent = parent;
                var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                if (branchesRemainingToCancel === undefined) {
                  branchesRemainingToCancel = 0;
                }
                parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
              }
              if ((flags & 2) !== 0 && parent._isBound()) {
                this._setBoundTo(parent._boundTo);
              }
            }
            function bindingPropagateFrom(parent, flags) {
              if ((flags & 2) !== 0 && parent._isBound()) {
                this._setBoundTo(parent._boundTo);
              }
            }
            var _propagateFromFunction = bindingPropagateFrom;
            function _boundValueFunction() {
              var ret = this._boundTo;
              if (ret !== undefined) {
                if (ret instanceof Promise) {
                  if (ret.isFulfilled()) {
                    return ret.value();
                  } else {
                    return undefined;
                  }
                }
              }
              return ret;
            }
            function longStackTracesCaptureStackTrace() {
              this._trace = new CapturedTrace(this._peekContext());
            }
            function longStackTracesAttachExtraTrace(error, ignoreSelf) {
              if (canAttachTrace(error)) {
                var trace = this._trace;
                if (trace !== undefined) {
                  if (ignoreSelf) trace = trace._parent;
                }
                if (trace !== undefined) {
                  trace.attachExtraTrace(error);
                } else if (!error.__P_74_13) {
                  var parsed = parseStackAndMessage(error);
                  util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                  util.notEnumerableProp(error, "__P_74_13", true);
                }
              }
            }
            function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
              if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
                if (parent !== undefined && parent._returnedNonUndefined()) return;
                if ((promise._bitField & 65535) === 0) return;
                if (name) name = name + " ";
                var handlerLine = "";
                var creatorLine = "";
                if (promiseCreated._trace) {
                  var traceLines = promiseCreated._trace.stack.split("\n");
                  var stack = cleanStack(traceLines);
                  for (var i = stack.length - 1; i >= 0; --i) {
                    var line = stack[i];
                    if (!nodeFramePattern.test(line)) {
                      var lineMatches = line.match(parseLinePattern);
                      if (lineMatches) {
                        handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                      }
                      break;
                    }
                  }
                  if (stack.length > 0) {
                    var firstUserLine = stack[0];
                    for (var i = 0; i < traceLines.length; ++i) {
                      if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                          creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                      }
                    }
                  }
                }
                var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
                promise._warn(msg, true, promiseCreated);
              }
            }
            function deprecated(name, replacement) {
              var message = name + " is deprecated and will be removed in a future version.";
              if (replacement) message += " Use " + replacement + " instead.";
              return warn(message);
            }
            function warn(message, shouldUseOwnTrace, promise) {
              if (!config.warnings) return;
              var warning = new Warning(message);
              var ctx;
              if (shouldUseOwnTrace) {
                promise._attachExtraTrace(warning);
              } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                ctx.attachExtraTrace(warning);
              } else {
                var parsed = parseStackAndMessage(warning);
                warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
              }
              if (!activeFireEvent("warning", warning)) {
                formatAndLogError(warning, "", true);
              }
            }
            function reconstructStack(message, stacks) {
              for (var i = 0; i < stacks.length - 1; ++i) {
                stacks[i].push("From previous event:");
                stacks[i] = stacks[i].join("\n");
              }
              if (i < stacks.length) {
                stacks[i] = stacks[i].join("\n");
              }
              return message + "\n" + stacks.join("\n");
            }
            function removeDuplicateOrEmptyJumps(stacks) {
              for (var i = 0; i < stacks.length; ++i) {
                if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
                  stacks.splice(i, 1);
                  i--;
                }
              }
            }
            function removeCommonRoots(stacks) {
              var current = stacks[0];
              for (var i = 1; i < stacks.length; ++i) {
                var prev = stacks[i];
                var currentLastIndex = current.length - 1;
                var currentLastLine = current[currentLastIndex];
                var commonRootMeetPoint = -1;
                for (var j = prev.length - 1; j >= 0; --j) {
                  if (prev[j] === currentLastLine) {
                    commonRootMeetPoint = j;
                    break;
                  }
                }
                for (var j = commonRootMeetPoint; j >= 0; --j) {
                  var line = prev[j];
                  if (current[currentLastIndex] === line) {
                    current.pop();
                    currentLastIndex--;
                  } else {
                    break;
                  }
                }
                current = prev;
              }
            }
            function cleanStack(stack) {
              var ret = [];
              for (var i = 0; i < stack.length; ++i) {
                var line = stack[i];
                var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
                var isInternalFrame = isTraceLine && shouldIgnore(line);
                if (isTraceLine && !isInternalFrame) {
                  if (indentStackFrames && line.charAt(0) !== " ") {
                    line = "    " + line;
                  }
                  ret.push(line);
                }
              }
              return ret;
            }
            function stackFramesAsArray(error) {
              var stack = error.stack.replace(/\s+$/g, "").split("\n");
              for (var i = 0; i < stack.length; ++i) {
                var line = stack[i];
                if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                  break;
                }
              }
              if (i > 0) {
                stack = stack.slice(i);
              }
              return stack;
            }
            function parseStackAndMessage(error) {
              var stack = error.stack;
              var message = error.toString();
              stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
              return {
                message: message,
                stack: cleanStack(stack)
              };
            }
            function formatAndLogError(error, title, isSoft) {
              if (typeof console !== "undefined") {
                var message;
                if (util.isObject(error)) {
                  var stack = error.stack;
                  message = title + formatStack(stack, error);
                } else {
                  message = title + String(error);
                }
                if (typeof printWarning === "function") {
                  printWarning(message, isSoft);
                } else if (typeof console.log === "function" || _typeof(console.log) === "object") {
                  console.log(message);
                }
              }
            }
            function fireRejectionEvent(name, localHandler, reason, promise) {
              var localEventFired = false;
              try {
                if (typeof localHandler === "function") {
                  localEventFired = true;
                  if (name === "rejectionHandled") {
                    localHandler(promise);
                  } else {
                    localHandler(reason, promise);
                  }
                }
              } catch (e) {
                async.throwLater(e);
              }
              if (name === "unhandledRejection") {
                if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                  formatAndLogError(reason, "Unhandled rejection ");
                }
              } else {
                activeFireEvent(name, promise);
              }
            }
            function formatNonError(obj) {
              var str;
              if (typeof obj === "function") {
                str = "[function " + (obj.name || "anonymous") + "]";
              } else {
                str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
                var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                if (ruselessToString.test(str)) {
                  try {
                    var newStr = JSON.stringify(obj);
                    str = newStr;
                  } catch (e) {}
                }
                if (str.length === 0) {
                  str = "(empty array)";
                }
              }
              return "(<" + snip(str) + ">, no stack trace)";
            }
            function snip(str) {
              var maxChars = 41;
              if (str.length < maxChars) {
                return str;
              }
              return str.substr(0, maxChars - 3) + "...";
            }
            function longStackTracesIsSupported() {
              return typeof captureStackTrace === "function";
            }
            var shouldIgnore = function shouldIgnore() {
              return false;
            };
            var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
            function parseLineInfo(line) {
              var matches = line.match(parseLineInfoRegex);
              if (matches) {
                return {
                  fileName: matches[1],
                  line: parseInt(matches[2], 10)
                };
              }
            }
            function setBounds(firstLineError, lastLineError) {
              if (!longStackTracesIsSupported()) return;
              var firstStackLines = firstLineError.stack.split("\n");
              var lastStackLines = lastLineError.stack.split("\n");
              var firstIndex = -1;
              var lastIndex = -1;
              var firstFileName;
              var lastFileName;
              for (var i = 0; i < firstStackLines.length; ++i) {
                var result = parseLineInfo(firstStackLines[i]);
                if (result) {
                  firstFileName = result.fileName;
                  firstIndex = result.line;
                  break;
                }
              }
              for (var i = 0; i < lastStackLines.length; ++i) {
                var result = parseLineInfo(lastStackLines[i]);
                if (result) {
                  lastFileName = result.fileName;
                  lastIndex = result.line;
                  break;
                }
              }
              if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
                return;
              }
              shouldIgnore = function shouldIgnore(line) {
                if (bluebirdFramePattern.test(line)) return true;
                var info = parseLineInfo(line);
                if (info) {
                  if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
                    return true;
                  }
                }
                return false;
              };
            }
            function CapturedTrace(parent) {
              this._parent = parent;
              this._promisesCreated = 0;
              var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
              captureStackTrace(this, CapturedTrace);
              if (length > 32) this.uncycle();
            }
            util.inherits(CapturedTrace, Error);
            Context.CapturedTrace = CapturedTrace;
            CapturedTrace.prototype.uncycle = function () {
              var length = this._length;
              if (length < 2) return;
              var nodes = [];
              var stackToIndex = {};
              for (var i = 0, node = this; node !== undefined; ++i) {
                nodes.push(node);
                node = node._parent;
              }
              length = this._length = i;
              for (var i = length - 1; i >= 0; --i) {
                var stack = nodes[i].stack;
                if (stackToIndex[stack] === undefined) {
                  stackToIndex[stack] = i;
                }
              }
              for (var i = 0; i < length; ++i) {
                var currentStack = nodes[i].stack;
                var index = stackToIndex[currentStack];
                if (index !== undefined && index !== i) {
                  if (index > 0) {
                    nodes[index - 1]._parent = undefined;
                    nodes[index - 1]._length = 1;
                  }
                  nodes[i]._parent = undefined;
                  nodes[i]._length = 1;
                  var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
                  if (index < length - 1) {
                    cycleEdgeNode._parent = nodes[index + 1];
                    cycleEdgeNode._parent.uncycle();
                    cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
                  } else {
                    cycleEdgeNode._parent = undefined;
                    cycleEdgeNode._length = 1;
                  }
                  var currentChildLength = cycleEdgeNode._length + 1;
                  for (var j = i - 2; j >= 0; --j) {
                    nodes[j]._length = currentChildLength;
                    currentChildLength++;
                  }
                  return;
                }
              }
            };
            CapturedTrace.prototype.attachExtraTrace = function (error) {
              if (error.__P_74_13) return;
              this.uncycle();
              var parsed = parseStackAndMessage(error);
              var message = parsed.message;
              var stacks = [parsed.stack];
              var trace = this;
              while (trace !== undefined) {
                stacks.push(cleanStack(trace.stack.split("\n")));
                trace = trace._parent;
              }
              removeCommonRoots(stacks);
              removeDuplicateOrEmptyJumps(stacks);
              util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
              util.notEnumerableProp(error, "__P_74_13", true);
            };
            var captureStackTrace = function stackDetection() {
              var v8stackFramePattern = /^\s*at\s*/;
              var v8stackFormatter = function v8stackFormatter(stack, error) {
                if (typeof stack === "string") return stack;
                if (error.name !== undefined && error.message !== undefined) {
                  return error.toString();
                }
                return formatNonError(error);
              };
              if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
                Error.stackTraceLimit += 6;
                stackFramePattern = v8stackFramePattern;
                formatStack = v8stackFormatter;
                var captureStackTrace = Error.captureStackTrace;
                shouldIgnore = function shouldIgnore(line) {
                  return bluebirdFramePattern.test(line);
                };
                return function (receiver, ignoreUntil) {
                  Error.stackTraceLimit += 6;
                  captureStackTrace(receiver, ignoreUntil);
                  Error.stackTraceLimit -= 6;
                };
              }
              var err = new Error();
              if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                stackFramePattern = /@/;
                formatStack = v8stackFormatter;
                indentStackFrames = true;
                return function captureStackTrace(o) {
                  o.stack = new Error().stack;
                };
              }
              var hasStackAfterThrow;
              try {
                throw new Error();
              } catch (e) {
                hasStackAfterThrow = "stack" in e;
              }
              if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
                stackFramePattern = v8stackFramePattern;
                formatStack = v8stackFormatter;
                return function captureStackTrace(o) {
                  Error.stackTraceLimit += 6;
                  try {
                    throw new Error();
                  } catch (e) {
                    o.stack = e.stack;
                  }
                  Error.stackTraceLimit -= 6;
                };
              }
              formatStack = function formatStack(stack, error) {
                if (typeof stack === "string") return stack;
                if ((_typeof(error) === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
                  return error.toString();
                }
                return formatNonError(error);
              };
              return null;
            }([]);
            if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
              printWarning = function printWarning(message) {
                console.warn(message);
              };
              if (util.isNode && process.stderr.isTTY) {
                printWarning = function printWarning(message, isSoft) {
                  var color = isSoft ? "\x1B[33m" : "\x1B[31m";
                  console.warn(color + message + "\x1B[0m\n");
                };
              } else if (!util.isNode && typeof new Error().stack === "string") {
                printWarning = function printWarning(message, isSoft) {
                  console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                };
              }
            }
            var config = {
              warnings: warnings,
              longStackTraces: false,
              cancellation: false,
              monitoring: false
            };
            if (longStackTraces) Promise.longStackTraces();
            return {
              longStackTraces: function longStackTraces() {
                return config.longStackTraces;
              },
              warnings: function warnings() {
                return config.warnings;
              },
              cancellation: function cancellation() {
                return config.cancellation;
              },
              monitoring: function monitoring() {
                return config.monitoring;
              },
              propagateFromFunction: function propagateFromFunction() {
                return _propagateFromFunction;
              },
              boundValueFunction: function boundValueFunction() {
                return _boundValueFunction;
              },
              checkForgottenReturns: checkForgottenReturns,
              setBounds: setBounds,
              warn: warn,
              deprecated: deprecated,
              CapturedTrace: CapturedTrace,
              fireDomEvent: fireDomEvent,
              fireGlobalEvent: fireGlobalEvent
            };
          };
        }, {
          "./errors": 12,
          "./util": 36
        }],
        10: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise) {
            function returner() {
              return this.value;
            }
            function thrower() {
              throw this.reason;
            }
            Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
              if (value instanceof Promise) value.suppressUnhandledRejections();
              return this._then(returner, undefined, undefined, {
                value: value
              }, undefined);
            };
            Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
              return this._then(thrower, undefined, undefined, {
                reason: reason
              }, undefined);
            };
            Promise.prototype.catchThrow = function (reason) {
              if (arguments.length <= 1) {
                return this._then(undefined, thrower, undefined, {
                  reason: reason
                }, undefined);
              } else {
                var _reason = arguments[1];
                var handler = function handler() {
                  throw _reason;
                };
                return this.caught(reason, handler);
              }
            };
            Promise.prototype.catchReturn = function (value) {
              if (arguments.length <= 1) {
                if (value instanceof Promise) value.suppressUnhandledRejections();
                return this._then(undefined, returner, undefined, {
                  value: value
                }, undefined);
              } else {
                var _value = arguments[1];
                if (_value instanceof Promise) _value.suppressUnhandledRejections();
                var handler = function handler() {
                  return _value;
                };
                return this.caught(value, handler);
              }
            };
          };
        }, {}],
        11: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL) {
            var PromiseReduce = Promise.reduce;
            var PromiseAll = Promise.all;
            function promiseAllThis() {
              return PromiseAll(this);
            }
            function PromiseMapSeries(promises, fn) {
              return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
            }
            Promise.prototype.each = function (fn) {
              return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
            };
            Promise.prototype.mapSeries = function (fn) {
              return PromiseReduce(this, fn, INTERNAL, INTERNAL);
            };
            Promise.each = function (promises, fn) {
              return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
            };
            Promise.mapSeries = PromiseMapSeries;
          };
        }, {}],
        12: [function (_dereq_, module, exports) {
          "use strict";

          var es5 = _dereq_("./es5");
          var Objectfreeze = es5.freeze;
          var util = _dereq_("./util");
          var inherits = util.inherits;
          var notEnumerableProp = util.notEnumerableProp;
          function subError(nameProperty, defaultMessage) {
            function SubError(message) {
              if (!(this instanceof SubError)) return new SubError(message);
              notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
              notEnumerableProp(this, "name", nameProperty);
              if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
              } else {
                Error.call(this);
              }
            }
            inherits(SubError, Error);
            return SubError;
          }
          var _TypeError, _RangeError;
          var Warning = subError("Warning", "warning");
          var CancellationError = subError("CancellationError", "cancellation error");
          var TimeoutError = subError("TimeoutError", "timeout error");
          var AggregateError = subError("AggregateError", "aggregate error");
          try {
            _TypeError = TypeError;
            _RangeError = RangeError;
          } catch (e) {
            _TypeError = subError("TypeError", "type error");
            _RangeError = subError("RangeError", "range error");
          }
          var methods = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" ");
          for (var i = 0; i < methods.length; ++i) {
            if (typeof Array.prototype[methods[i]] === "function") {
              AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
            }
          }
          es5.defineProperty(AggregateError.prototype, "length", {
            value: 0,
            configurable: false,
            writable: true,
            enumerable: true
          });
          AggregateError.prototype["isOperational"] = true;
          var level = 0;
          AggregateError.prototype.toString = function () {
            var indent = Array(level * 4 + 1).join(" ");
            var ret = "\n" + indent + "AggregateError of:" + "\n";
            level++;
            indent = Array(level * 4 + 1).join(" ");
            for (var i = 0; i < this.length; ++i) {
              var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
              var lines = str.split("\n");
              for (var j = 0; j < lines.length; ++j) {
                lines[j] = indent + lines[j];
              }
              str = lines.join("\n");
              ret += str + "\n";
            }
            level--;
            return ret;
          };
          function OperationalError(message) {
            if (!(this instanceof OperationalError)) return new OperationalError(message);
            notEnumerableProp(this, "name", "OperationalError");
            notEnumerableProp(this, "message", message);
            this.cause = message;
            this["isOperational"] = true;
            if (message instanceof Error) {
              notEnumerableProp(this, "message", message.message);
              notEnumerableProp(this, "stack", message.stack);
            } else if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor);
            }
          }
          inherits(OperationalError, Error);
          var errorTypes = Error["__BluebirdErrorTypes__"];
          if (!errorTypes) {
            errorTypes = Objectfreeze({
              CancellationError: CancellationError,
              TimeoutError: TimeoutError,
              OperationalError: OperationalError,
              RejectionError: OperationalError,
              AggregateError: AggregateError
            });
            es5.defineProperty(Error, "__BluebirdErrorTypes__", {
              value: errorTypes,
              writable: false,
              enumerable: false,
              configurable: false
            });
          }
          module.exports = {
            Error: Error,
            TypeError: _TypeError,
            RangeError: _RangeError,
            CancellationError: errorTypes.CancellationError,
            OperationalError: errorTypes.OperationalError,
            TimeoutError: errorTypes.TimeoutError,
            AggregateError: errorTypes.AggregateError,
            Warning: Warning
          };
        }, {
          "./es5": 13,
          "./util": 36
        }],
        13: [function (_dereq_, module, exports) {
          var isES5 = function () {
            "use strict";

            return this === undefined;
          }();
          if (isES5) {
            module.exports = {
              freeze: Object.freeze,
              defineProperty: Object.defineProperty,
              getDescriptor: Object.getOwnPropertyDescriptor,
              keys: Object.keys,
              names: Object.getOwnPropertyNames,
              getPrototypeOf: Object.getPrototypeOf,
              isArray: Array.isArray,
              isES5: isES5,
              propertyIsWritable: function propertyIsWritable(obj, prop) {
                var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                return !!(!descriptor || descriptor.writable || descriptor.set);
              }
            };
          } else {
            var has = {}.hasOwnProperty;
            var str = {}.toString;
            var proto = {}.constructor.prototype;
            var ObjectKeys = function ObjectKeys(o) {
              var ret = [];
              for (var key in o) {
                if (has.call(o, key)) {
                  ret.push(key);
                }
              }
              return ret;
            };
            var ObjectGetDescriptor = function ObjectGetDescriptor(o, key) {
              return {
                value: o[key]
              };
            };
            var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
              o[key] = desc.value;
              return o;
            };
            var ObjectFreeze = function ObjectFreeze(obj) {
              return obj;
            };
            var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
              try {
                return Object(obj).constructor.prototype;
              } catch (e) {
                return proto;
              }
            };
            var ArrayIsArray = function ArrayIsArray(obj) {
              try {
                return str.call(obj) === "[object Array]";
              } catch (e) {
                return false;
              }
            };
            module.exports = {
              isArray: ArrayIsArray,
              keys: ObjectKeys,
              names: ObjectKeys,
              defineProperty: ObjectDefineProperty,
              getDescriptor: ObjectGetDescriptor,
              freeze: ObjectFreeze,
              getPrototypeOf: ObjectGetPrototypeOf,
              isES5: isES5,
              propertyIsWritable: function propertyIsWritable() {
                return true;
              }
            };
          }
        }, {}],
        14: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL) {
            var PromiseMap = Promise.map;
            Promise.prototype.filter = function (fn, options) {
              return PromiseMap(this, fn, options, INTERNAL);
            };
            Promise.filter = function (promises, fn, options) {
              return PromiseMap(promises, fn, options, INTERNAL);
            };
          };
        }, {}],
        15: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, tryConvertToPromise) {
            var util = _dereq_("./util");
            var CancellationError = Promise.CancellationError;
            var errorObj = util.errorObj;
            function PassThroughHandlerContext(promise, type, handler) {
              this.promise = promise;
              this.type = type;
              this.handler = handler;
              this.called = false;
              this.cancelPromise = null;
            }
            PassThroughHandlerContext.prototype.isFinallyHandler = function () {
              return this.type === 0;
            };
            function FinallyHandlerCancelReaction(finallyHandler) {
              this.finallyHandler = finallyHandler;
            }
            FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
              checkCancel(this.finallyHandler);
            };
            function checkCancel(ctx, reason) {
              if (ctx.cancelPromise != null) {
                if (arguments.length > 1) {
                  ctx.cancelPromise._reject(reason);
                } else {
                  ctx.cancelPromise._cancel();
                }
                ctx.cancelPromise = null;
                return true;
              }
              return false;
            }
            function succeed() {
              return finallyHandler.call(this, this.promise._target()._settledValue());
            }
            function fail(reason) {
              if (checkCancel(this, reason)) return;
              errorObj.e = reason;
              return errorObj;
            }
            function finallyHandler(reasonOrValue) {
              var promise = this.promise;
              var handler = this.handler;
              if (!this.called) {
                this.called = true;
                var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                if (ret !== undefined) {
                  promise._setReturnedNonUndefined();
                  var maybePromise = tryConvertToPromise(ret, promise);
                  if (maybePromise instanceof Promise) {
                    if (this.cancelPromise != null) {
                      if (maybePromise._isCancelled()) {
                        var reason = new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                      } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                      }
                    }
                    return maybePromise._then(succeed, fail, undefined, this, undefined);
                  }
                }
              }
              if (promise.isRejected()) {
                checkCancel(this);
                errorObj.e = reasonOrValue;
                return errorObj;
              } else {
                checkCancel(this);
                return reasonOrValue;
              }
            }
            Promise.prototype._passThrough = function (handler, type, success, fail) {
              if (typeof handler !== "function") return this.then();
              return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
            };
            Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
              return this._passThrough(handler, 0, finallyHandler, finallyHandler);
            };
            Promise.prototype.tap = function (handler) {
              return this._passThrough(handler, 1, finallyHandler);
            };
            return PassThroughHandlerContext;
          };
        }, {
          "./util": 36
        }],
        16: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
            var errors = _dereq_("./errors");
            var TypeError = errors.TypeError;
            var util = _dereq_("./util");
            var errorObj = util.errorObj;
            var tryCatch = util.tryCatch;
            var yieldHandlers = [];
            function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
              for (var i = 0; i < yieldHandlers.length; ++i) {
                traceParent._pushContext();
                var result = tryCatch(yieldHandlers[i])(value);
                traceParent._popContext();
                if (result === errorObj) {
                  traceParent._pushContext();
                  var ret = Promise.reject(errorObj.e);
                  traceParent._popContext();
                  return ret;
                }
                var maybePromise = tryConvertToPromise(result, traceParent);
                if (maybePromise instanceof Promise) return maybePromise;
              }
              return null;
            }
            function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
              if (debug.cancellation()) {
                var internal = new Promise(INTERNAL);
                var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                this._promise = internal.lastly(function () {
                  return _finallyPromise;
                });
                internal._captureStackTrace();
                internal._setOnCancel(this);
              } else {
                var promise = this._promise = new Promise(INTERNAL);
                promise._captureStackTrace();
              }
              this._stack = stack;
              this._generatorFunction = generatorFunction;
              this._receiver = receiver;
              this._generator = undefined;
              this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
              this._yieldedPromise = null;
              this._cancellationPhase = false;
            }
            util.inherits(PromiseSpawn, Proxyable);
            PromiseSpawn.prototype._isResolved = function () {
              return this._promise === null;
            };
            PromiseSpawn.prototype._cleanup = function () {
              this._promise = this._generator = null;
              if (debug.cancellation() && this._finallyPromise !== null) {
                this._finallyPromise._fulfill();
                this._finallyPromise = null;
              }
            };
            PromiseSpawn.prototype._promiseCancelled = function () {
              if (this._isResolved()) return;
              var implementsReturn = typeof this._generator["return"] !== "undefined";
              var result;
              if (!implementsReturn) {
                var reason = new Promise.CancellationError("generator .return() sentinel");
                Promise.coroutine.returnSentinel = reason;
                this._promise._attachExtraTrace(reason);
                this._promise._pushContext();
                result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                this._promise._popContext();
              } else {
                this._promise._pushContext();
                result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                this._promise._popContext();
              }
              this._cancellationPhase = true;
              this._yieldedPromise = null;
              this._continue(result);
            };
            PromiseSpawn.prototype._promiseFulfilled = function (value) {
              this._yieldedPromise = null;
              this._promise._pushContext();
              var result = tryCatch(this._generator.next).call(this._generator, value);
              this._promise._popContext();
              this._continue(result);
            };
            PromiseSpawn.prototype._promiseRejected = function (reason) {
              this._yieldedPromise = null;
              this._promise._attachExtraTrace(reason);
              this._promise._pushContext();
              var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
              this._promise._popContext();
              this._continue(result);
            };
            PromiseSpawn.prototype._resultCancelled = function () {
              if (this._yieldedPromise instanceof Promise) {
                var promise = this._yieldedPromise;
                this._yieldedPromise = null;
                promise.cancel();
              }
            };
            PromiseSpawn.prototype.promise = function () {
              return this._promise;
            };
            PromiseSpawn.prototype._run = function () {
              this._generator = this._generatorFunction.call(this._receiver);
              this._receiver = this._generatorFunction = undefined;
              this._promiseFulfilled(undefined);
            };
            PromiseSpawn.prototype._continue = function (result) {
              var promise = this._promise;
              if (result === errorObj) {
                this._cleanup();
                if (this._cancellationPhase) {
                  return promise.cancel();
                } else {
                  return promise._rejectCallback(result.e, false);
                }
              }
              var value = result.value;
              if (result.done === true) {
                this._cleanup();
                if (this._cancellationPhase) {
                  return promise.cancel();
                } else {
                  return promise._resolveCallback(value);
                }
              } else {
                var maybePromise = tryConvertToPromise(value, this._promise);
                if (!(maybePromise instanceof Promise)) {
                  maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                  if (maybePromise === null) {
                    this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", value) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                    return;
                  }
                }
                maybePromise = maybePromise._target();
                var bitField = maybePromise._bitField;
                if ((bitField & 50397184) === 0) {
                  this._yieldedPromise = maybePromise;
                  maybePromise._proxy(this, null);
                } else if ((bitField & 33554432) !== 0) {
                  Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                } else if ((bitField & 16777216) !== 0) {
                  Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                } else {
                  this._promiseCancelled();
                }
              }
            };
            Promise.coroutine = function (generatorFunction, options) {
              if (typeof generatorFunction !== "function") {
                throw new TypeError("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
              }
              var yieldHandler = Object(options).yieldHandler;
              var PromiseSpawn$ = PromiseSpawn;
              var stack = new Error().stack;
              return function () {
                var generator = generatorFunction.apply(this, arguments);
                var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                var ret = spawn.promise();
                spawn._generator = generator;
                spawn._promiseFulfilled(undefined);
                return ret;
              };
            };
            Promise.coroutine.addYieldHandler = function (fn) {
              if (typeof fn !== "function") {
                throw new TypeError("expecting a function but got " + util.classString(fn));
              }
              yieldHandlers.push(fn);
            };
            Promise.spawn = function (generatorFunction) {
              debug.deprecated("Promise.spawn()", "Promise.coroutine()");
              if (typeof generatorFunction !== "function") {
                return apiRejection("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
              }
              var spawn = new PromiseSpawn(generatorFunction, this);
              var ret = spawn.promise();
              spawn._run(Promise.spawn);
              return ret;
            };
          };
        }, {
          "./errors": 12,
          "./util": 36
        }],
        17: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
            var util = _dereq_("./util");
            var canEvaluate = util.canEvaluate;
            var tryCatch = util.tryCatch;
            var errorObj = util.errorObj;
            var reject;
            Promise.join = function () {
              var last = arguments.length - 1;
              var fn;
              if (last > 0 && typeof arguments[last] === "function") {
                fn = arguments[last];
              }
              var args = [].slice.call(arguments);
              if (fn) {
                args.pop();
              }
              var ret = new PromiseArray(args).promise();
              return fn !== undefined ? ret.spread(fn) : ret;
            };
          };
        }, {
          "./util": 36
        }],
        18: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
            var getDomain = Promise._getDomain;
            var util = _dereq_("./util");
            var tryCatch = util.tryCatch;
            var errorObj = util.errorObj;
            function MappingPromiseArray(promises, fn, limit, _filter) {
              this.constructor$(promises);
              this._promise._captureStackTrace();
              var domain = getDomain();
              this._callback = domain === null ? fn : util.domainBind(domain, fn);
              this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
              this._limit = limit;
              this._inFlight = 0;
              this._queue = [];
              this._init$(undefined, -2);
            }
            util.inherits(MappingPromiseArray, PromiseArray);
            MappingPromiseArray.prototype._init = function () {};
            MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
              var values = this._values;
              var length = this.length();
              var preservedValues = this._preservedValues;
              var limit = this._limit;
              if (index < 0) {
                index = index * -1 - 1;
                values[index] = value;
                if (limit >= 1) {
                  this._inFlight--;
                  this._drainQueue();
                  if (this._isResolved()) return true;
                }
              } else {
                if (limit >= 1 && this._inFlight >= limit) {
                  values[index] = value;
                  this._queue.push(index);
                  return false;
                }
                if (preservedValues !== null) preservedValues[index] = value;
                var promise = this._promise;
                var callback = this._callback;
                var receiver = promise._boundValue();
                promise._pushContext();
                var ret = tryCatch(callback).call(receiver, value, index, length);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                if (ret === errorObj) {
                  this._reject(ret.e);
                  return true;
                }
                var maybePromise = tryConvertToPromise(ret, this._promise);
                if (maybePromise instanceof Promise) {
                  maybePromise = maybePromise._target();
                  var bitField = maybePromise._bitField;
                  if ((bitField & 50397184) === 0) {
                    if (limit >= 1) this._inFlight++;
                    values[index] = maybePromise;
                    maybePromise._proxy(this, (index + 1) * -1);
                    return false;
                  } else if ((bitField & 33554432) !== 0) {
                    ret = maybePromise._value();
                  } else if ((bitField & 16777216) !== 0) {
                    this._reject(maybePromise._reason());
                    return true;
                  } else {
                    this._cancel();
                    return true;
                  }
                }
                values[index] = ret;
              }
              var totalResolved = ++this._totalResolved;
              if (totalResolved >= length) {
                if (preservedValues !== null) {
                  this._filter(values, preservedValues);
                } else {
                  this._resolve(values);
                }
                return true;
              }
              return false;
            };
            MappingPromiseArray.prototype._drainQueue = function () {
              var queue = this._queue;
              var limit = this._limit;
              var values = this._values;
              while (queue.length > 0 && this._inFlight < limit) {
                if (this._isResolved()) return;
                var index = queue.pop();
                this._promiseFulfilled(values[index], index);
              }
            };
            MappingPromiseArray.prototype._filter = function (booleans, values) {
              var len = values.length;
              var ret = new Array(len);
              var j = 0;
              for (var i = 0; i < len; ++i) {
                if (booleans[i]) ret[j++] = values[i];
              }
              ret.length = j;
              this._resolve(ret);
            };
            MappingPromiseArray.prototype.preservedValues = function () {
              return this._preservedValues;
            };
            function map(promises, fn, options, _filter) {
              if (typeof fn !== "function") {
                return apiRejection("expecting a function but got " + util.classString(fn));
              }
              var limit = 0;
              if (options !== undefined) {
                if (_typeof(options) === "object" && options !== null) {
                  if (typeof options.concurrency !== "number") {
                    return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                  }
                  limit = options.concurrency;
                } else {
                  return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                }
              }
              limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
              return new MappingPromiseArray(promises, fn, limit, _filter).promise();
            }
            Promise.prototype.map = function (fn, options) {
              return map(this, fn, options, null);
            };
            Promise.map = function (promises, fn, options, _filter) {
              return map(promises, fn, options, _filter);
            };
          };
        }, {
          "./util": 36
        }],
        19: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
            var util = _dereq_("./util");
            var tryCatch = util.tryCatch;
            Promise.method = function (fn) {
              if (typeof fn !== "function") {
                throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
              }
              return function () {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                ret._pushContext();
                var value = tryCatch(fn).apply(this, arguments);
                var promiseCreated = ret._popContext();
                debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                ret._resolveFromSyncValue(value);
                return ret;
              };
            };
            Promise.attempt = Promise["try"] = function (fn) {
              if (typeof fn !== "function") {
                return apiRejection("expecting a function but got " + util.classString(fn));
              }
              var ret = new Promise(INTERNAL);
              ret._captureStackTrace();
              ret._pushContext();
              var value;
              if (arguments.length > 1) {
                debug.deprecated("calling Promise.try with more than 1 argument");
                var arg = arguments[1];
                var ctx = arguments[2];
                value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
              } else {
                value = tryCatch(fn)();
              }
              var promiseCreated = ret._popContext();
              debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
              ret._resolveFromSyncValue(value);
              return ret;
            };
            Promise.prototype._resolveFromSyncValue = function (value) {
              if (value === util.errorObj) {
                this._rejectCallback(value.e, false);
              } else {
                this._resolveCallback(value, true);
              }
            };
          };
        }, {
          "./util": 36
        }],
        20: [function (_dereq_, module, exports) {
          "use strict";

          var util = _dereq_("./util");
          var maybeWrapAsError = util.maybeWrapAsError;
          var errors = _dereq_("./errors");
          var OperationalError = errors.OperationalError;
          var es5 = _dereq_("./es5");
          function isUntypedError(obj) {
            return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
          }
          var rErrorKey = /^(?:name|message|stack|cause)$/;
          function wrapAsOperationalError(obj) {
            var ret;
            if (isUntypedError(obj)) {
              ret = new OperationalError(obj);
              ret.name = obj.name;
              ret.message = obj.message;
              ret.stack = obj.stack;
              var keys = es5.keys(obj);
              for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!rErrorKey.test(key)) {
                  ret[key] = obj[key];
                }
              }
              return ret;
            }
            util.markAsOriginatingFromRejection(obj);
            return obj;
          }
          function nodebackForPromise(promise, multiArgs) {
            return function (err, value) {
              if (promise === null) return;
              if (err) {
                var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                promise._attachExtraTrace(wrapped);
                promise._reject(wrapped);
              } else if (!multiArgs) {
                promise._fulfill(value);
              } else {
                var args = [].slice.call(arguments, 1);
                promise._fulfill(args);
              }
              promise = null;
            };
          }
          module.exports = nodebackForPromise;
        }, {
          "./errors": 12,
          "./es5": 13,
          "./util": 36
        }],
        21: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise) {
            var util = _dereq_("./util");
            var async = Promise._async;
            var tryCatch = util.tryCatch;
            var errorObj = util.errorObj;
            function spreadAdapter(val, nodeback) {
              var promise = this;
              if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
              var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
              if (ret === errorObj) {
                async.throwLater(ret.e);
              }
            }
            function successAdapter(val, nodeback) {
              var promise = this;
              var receiver = promise._boundValue();
              var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
              if (ret === errorObj) {
                async.throwLater(ret.e);
              }
            }
            function errorAdapter(reason, nodeback) {
              var promise = this;
              if (!reason) {
                var newReason = new Error(reason + "");
                newReason.cause = reason;
                reason = newReason;
              }
              var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
              if (ret === errorObj) {
                async.throwLater(ret.e);
              }
            }
            Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
              if (typeof nodeback == "function") {
                var adapter = successAdapter;
                if (options !== undefined && Object(options).spread) {
                  adapter = spreadAdapter;
                }
                this._then(adapter, errorAdapter, undefined, this, nodeback);
              }
              return this;
            };
          };
        }, {
          "./util": 36
        }],
        22: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function () {
            var makeSelfResolutionError = function makeSelfResolutionError() {
              return new TypeError("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
            };
            var reflectHandler = function reflectHandler() {
              return new Promise.PromiseInspection(this._target());
            };
            var apiRejection = function apiRejection(msg) {
              return Promise.reject(new TypeError(msg));
            };
            function Proxyable() {}
            var UNDEFINED_BINDING = {};
            var util = _dereq_("./util");
            var getDomain;
            if (util.isNode) {
              getDomain = function getDomain() {
                var ret = process.domain;
                if (ret === undefined) ret = null;
                return ret;
              };
            } else {
              getDomain = function getDomain() {
                return null;
              };
            }
            util.notEnumerableProp(Promise, "_getDomain", getDomain);
            var es5 = _dereq_("./es5");
            var Async = _dereq_("./async");
            var async = new Async();
            es5.defineProperty(Promise, "_async", {
              value: async
            });
            var errors = _dereq_("./errors");
            var TypeError = Promise.TypeError = errors.TypeError;
            Promise.RangeError = errors.RangeError;
            var CancellationError = Promise.CancellationError = errors.CancellationError;
            Promise.TimeoutError = errors.TimeoutError;
            Promise.OperationalError = errors.OperationalError;
            Promise.RejectionError = errors.OperationalError;
            Promise.AggregateError = errors.AggregateError;
            var INTERNAL = function INTERNAL() {};
            var APPLY = {};
            var NEXT_FILTER = {};
            var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
            var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
            var Context = _dereq_("./context")(Promise);
            /*jshint unused:false*/
            var createContext = Context.create;
            var debug = _dereq_("./debuggability")(Promise, Context);
            var CapturedTrace = debug.CapturedTrace;
            var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise);
            var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
            var nodebackForPromise = _dereq_("./nodeback");
            var errorObj = util.errorObj;
            var tryCatch = util.tryCatch;
            function check(self, executor) {
              if (typeof executor !== "function") {
                throw new TypeError("expecting a function but got " + util.classString(executor));
              }
              if (self.constructor !== Promise) {
                throw new TypeError("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
              }
            }
            function Promise(executor) {
              this._bitField = 0;
              this._fulfillmentHandler0 = undefined;
              this._rejectionHandler0 = undefined;
              this._promise0 = undefined;
              this._receiver0 = undefined;
              if (executor !== INTERNAL) {
                check(this, executor);
                this._resolveFromExecutor(executor);
              }
              this._promiseCreated();
              this._fireEvent("promiseCreated", this);
            }
            Promise.prototype.toString = function () {
              return "[object Promise]";
            };
            Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
              var len = arguments.length;
              if (len > 1) {
                var catchInstances = new Array(len - 1),
                  j = 0,
                  i;
                for (i = 0; i < len - 1; ++i) {
                  var item = arguments[i];
                  if (util.isObject(item)) {
                    catchInstances[j++] = item;
                  } else {
                    return apiRejection("expecting an object but got A catch statement predicate " + util.classString(item));
                  }
                }
                catchInstances.length = j;
                fn = arguments[i];
                return this.then(undefined, catchFilter(catchInstances, fn, this));
              }
              return this.then(undefined, fn);
            };
            Promise.prototype.reflect = function () {
              return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
            };
            Promise.prototype.then = function (didFulfill, didReject) {
              if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
                var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                if (arguments.length > 1) {
                  msg += ", " + util.classString(didReject);
                }
                this._warn(msg);
              }
              return this._then(didFulfill, didReject, undefined, undefined, undefined);
            };
            Promise.prototype.done = function (didFulfill, didReject) {
              var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
              promise._setIsFinal();
            };
            Promise.prototype.spread = function (fn) {
              if (typeof fn !== "function") {
                return apiRejection("expecting a function but got " + util.classString(fn));
              }
              return this.all()._then(fn, undefined, undefined, APPLY, undefined);
            };
            Promise.prototype.toJSON = function () {
              var ret = {
                isFulfilled: false,
                isRejected: false,
                fulfillmentValue: undefined,
                rejectionReason: undefined
              };
              if (this.isFulfilled()) {
                ret.fulfillmentValue = this.value();
                ret.isFulfilled = true;
              } else if (this.isRejected()) {
                ret.rejectionReason = this.reason();
                ret.isRejected = true;
              }
              return ret;
            };
            Promise.prototype.all = function () {
              if (arguments.length > 0) {
                this._warn(".all() was passed arguments but it does not take any");
              }
              return new PromiseArray(this).promise();
            };
            Promise.prototype.error = function (fn) {
              return this.caught(util.originatesFromRejection, fn);
            };
            Promise.getNewLibraryCopy = module.exports;
            Promise.is = function (val) {
              return val instanceof Promise;
            };
            Promise.fromNode = Promise.fromCallback = function (fn) {
              var ret = new Promise(INTERNAL);
              ret._captureStackTrace();
              var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
              var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
              if (result === errorObj) {
                ret._rejectCallback(result.e, true);
              }
              if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
              return ret;
            };
            Promise.all = function (promises) {
              return new PromiseArray(promises).promise();
            };
            Promise.cast = function (obj) {
              var ret = tryConvertToPromise(obj);
              if (!(ret instanceof Promise)) {
                ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                ret._setFulfilled();
                ret._rejectionHandler0 = obj;
              }
              return ret;
            };
            Promise.resolve = Promise.fulfilled = Promise.cast;
            Promise.reject = Promise.rejected = function (reason) {
              var ret = new Promise(INTERNAL);
              ret._captureStackTrace();
              ret._rejectCallback(reason, true);
              return ret;
            };
            Promise.setScheduler = function (fn) {
              if (typeof fn !== "function") {
                throw new TypeError("expecting a function but got " + util.classString(fn));
              }
              return async.setScheduler(fn);
            };
            Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
              var haveInternalData = internalData !== undefined;
              var promise = haveInternalData ? internalData : new Promise(INTERNAL);
              var target = this._target();
              var bitField = target._bitField;
              if (!haveInternalData) {
                promise._propagateFrom(this, 3);
                promise._captureStackTrace();
                if (receiver === undefined && (this._bitField & 2097152) !== 0) {
                  if (!((bitField & 50397184) === 0)) {
                    receiver = this._boundValue();
                  } else {
                    receiver = target === this ? undefined : this._boundTo;
                  }
                }
                this._fireEvent("promiseChained", this, promise);
              }
              var domain = getDomain();
              if (!((bitField & 50397184) === 0)) {
                var handler,
                  value,
                  settler = target._settlePromiseCtx;
                if ((bitField & 33554432) !== 0) {
                  value = target._rejectionHandler0;
                  handler = didFulfill;
                } else if ((bitField & 16777216) !== 0) {
                  value = target._fulfillmentHandler0;
                  handler = didReject;
                  target._unsetRejectionIsUnhandled();
                } else {
                  settler = target._settlePromiseLateCancellationObserver;
                  value = new CancellationError("late cancellation observer");
                  target._attachExtraTrace(value);
                  handler = didReject;
                }
                async.invoke(settler, target, {
                  handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
                  promise: promise,
                  receiver: receiver,
                  value: value
                });
              } else {
                target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
              }
              return promise;
            };
            Promise.prototype._length = function () {
              return this._bitField & 65535;
            };
            Promise.prototype._isFateSealed = function () {
              return (this._bitField & 117506048) !== 0;
            };
            Promise.prototype._isFollowing = function () {
              return (this._bitField & 67108864) === 67108864;
            };
            Promise.prototype._setLength = function (len) {
              this._bitField = this._bitField & -65536 | len & 65535;
            };
            Promise.prototype._setFulfilled = function () {
              this._bitField = this._bitField | 33554432;
              this._fireEvent("promiseFulfilled", this);
            };
            Promise.prototype._setRejected = function () {
              this._bitField = this._bitField | 16777216;
              this._fireEvent("promiseRejected", this);
            };
            Promise.prototype._setFollowing = function () {
              this._bitField = this._bitField | 67108864;
              this._fireEvent("promiseResolved", this);
            };
            Promise.prototype._setIsFinal = function () {
              this._bitField = this._bitField | 4194304;
            };
            Promise.prototype._isFinal = function () {
              return (this._bitField & 4194304) > 0;
            };
            Promise.prototype._unsetCancelled = function () {
              this._bitField = this._bitField & ~65536;
            };
            Promise.prototype._setCancelled = function () {
              this._bitField = this._bitField | 65536;
              this._fireEvent("promiseCancelled", this);
            };
            Promise.prototype._setWillBeCancelled = function () {
              this._bitField = this._bitField | 8388608;
            };
            Promise.prototype._setAsyncGuaranteed = function () {
              if (async.hasCustomScheduler()) return;
              this._bitField = this._bitField | 134217728;
            };
            Promise.prototype._receiverAt = function (index) {
              var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
              if (ret === UNDEFINED_BINDING) {
                return undefined;
              } else if (ret === undefined && this._isBound()) {
                return this._boundValue();
              }
              return ret;
            };
            Promise.prototype._promiseAt = function (index) {
              return this[index * 4 - 4 + 2];
            };
            Promise.prototype._fulfillmentHandlerAt = function (index) {
              return this[index * 4 - 4 + 0];
            };
            Promise.prototype._rejectionHandlerAt = function (index) {
              return this[index * 4 - 4 + 1];
            };
            Promise.prototype._boundValue = function () {};
            Promise.prototype._migrateCallback0 = function (follower) {
              var bitField = follower._bitField;
              var fulfill = follower._fulfillmentHandler0;
              var reject = follower._rejectionHandler0;
              var promise = follower._promise0;
              var receiver = follower._receiverAt(0);
              if (receiver === undefined) receiver = UNDEFINED_BINDING;
              this._addCallbacks(fulfill, reject, promise, receiver, null);
            };
            Promise.prototype._migrateCallbackAt = function (follower, index) {
              var fulfill = follower._fulfillmentHandlerAt(index);
              var reject = follower._rejectionHandlerAt(index);
              var promise = follower._promiseAt(index);
              var receiver = follower._receiverAt(index);
              if (receiver === undefined) receiver = UNDEFINED_BINDING;
              this._addCallbacks(fulfill, reject, promise, receiver, null);
            };
            Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
              var index = this._length();
              if (index >= 65531) {
                index = 0;
                this._setLength(0);
              }
              if (index === 0) {
                this._promise0 = promise;
                this._receiver0 = receiver;
                if (typeof fulfill === "function") {
                  this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
                }
                if (typeof reject === "function") {
                  this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
                }
              } else {
                var base = index * 4 - 4;
                this[base + 2] = promise;
                this[base + 3] = receiver;
                if (typeof fulfill === "function") {
                  this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
                }
                if (typeof reject === "function") {
                  this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
                }
              }
              this._setLength(index + 1);
              return index;
            };
            Promise.prototype._proxy = function (proxyable, arg) {
              this._addCallbacks(undefined, undefined, arg, proxyable, null);
            };
            Promise.prototype._resolveCallback = function (value, shouldBind) {
              if ((this._bitField & 117506048) !== 0) return;
              if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
              var maybePromise = tryConvertToPromise(value, this);
              if (!(maybePromise instanceof Promise)) return this._fulfill(value);
              if (shouldBind) this._propagateFrom(maybePromise, 2);
              var promise = maybePromise._target();
              if (promise === this) {
                this._reject(makeSelfResolutionError());
                return;
              }
              var bitField = promise._bitField;
              if ((bitField & 50397184) === 0) {
                var len = this._length();
                if (len > 0) promise._migrateCallback0(this);
                for (var i = 1; i < len; ++i) {
                  promise._migrateCallbackAt(this, i);
                }
                this._setFollowing();
                this._setLength(0);
                this._setFollowee(promise);
              } else if ((bitField & 33554432) !== 0) {
                this._fulfill(promise._value());
              } else if ((bitField & 16777216) !== 0) {
                this._reject(promise._reason());
              } else {
                var reason = new CancellationError("late cancellation observer");
                promise._attachExtraTrace(reason);
                this._reject(reason);
              }
            };
            Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
              var trace = util.ensureErrorObject(reason);
              var hasStack = trace === reason;
              if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                var message = "a promise was rejected with a non-error: " + util.classString(reason);
                this._warn(message, true);
              }
              this._attachExtraTrace(trace, synchronous ? hasStack : false);
              this._reject(reason);
            };
            Promise.prototype._resolveFromExecutor = function (executor) {
              var promise = this;
              this._captureStackTrace();
              this._pushContext();
              var synchronous = true;
              var r = this._execute(executor, function (value) {
                promise._resolveCallback(value);
              }, function (reason) {
                promise._rejectCallback(reason, synchronous);
              });
              synchronous = false;
              this._popContext();
              if (r !== undefined) {
                promise._rejectCallback(r, true);
              }
            };
            Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
              var bitField = promise._bitField;
              if ((bitField & 65536) !== 0) return;
              promise._pushContext();
              var x;
              if (receiver === APPLY) {
                if (!value || typeof value.length !== "number") {
                  x = errorObj;
                  x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
                } else {
                  x = tryCatch(handler).apply(this._boundValue(), value);
                }
              } else {
                x = tryCatch(handler).call(receiver, value);
              }
              var promiseCreated = promise._popContext();
              bitField = promise._bitField;
              if ((bitField & 65536) !== 0) return;
              if (x === NEXT_FILTER) {
                promise._reject(value);
              } else if (x === errorObj) {
                promise._rejectCallback(x.e, false);
              } else {
                debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                promise._resolveCallback(x);
              }
            };
            Promise.prototype._target = function () {
              var ret = this;
              while (ret._isFollowing()) ret = ret._followee();
              return ret;
            };
            Promise.prototype._followee = function () {
              return this._rejectionHandler0;
            };
            Promise.prototype._setFollowee = function (promise) {
              this._rejectionHandler0 = promise;
            };
            Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
              var isPromise = promise instanceof Promise;
              var bitField = this._bitField;
              var asyncGuaranteed = (bitField & 134217728) !== 0;
              if ((bitField & 65536) !== 0) {
                if (isPromise) promise._invokeInternalOnCancel();
                if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
                  receiver.cancelPromise = promise;
                  if (tryCatch(handler).call(receiver, value) === errorObj) {
                    promise._reject(errorObj.e);
                  }
                } else if (handler === reflectHandler) {
                  promise._fulfill(reflectHandler.call(receiver));
                } else if (receiver instanceof Proxyable) {
                  receiver._promiseCancelled(promise);
                } else if (isPromise || promise instanceof PromiseArray) {
                  promise._cancel();
                } else {
                  receiver.cancel();
                }
              } else if (typeof handler === "function") {
                if (!isPromise) {
                  handler.call(receiver, value, promise);
                } else {
                  if (asyncGuaranteed) promise._setAsyncGuaranteed();
                  this._settlePromiseFromHandler(handler, receiver, value, promise);
                }
              } else if (receiver instanceof Proxyable) {
                if (!receiver._isResolved()) {
                  if ((bitField & 33554432) !== 0) {
                    receiver._promiseFulfilled(value, promise);
                  } else {
                    receiver._promiseRejected(value, promise);
                  }
                }
              } else if (isPromise) {
                if (asyncGuaranteed) promise._setAsyncGuaranteed();
                if ((bitField & 33554432) !== 0) {
                  promise._fulfill(value);
                } else {
                  promise._reject(value);
                }
              }
            };
            Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
              var handler = ctx.handler;
              var promise = ctx.promise;
              var receiver = ctx.receiver;
              var value = ctx.value;
              if (typeof handler === "function") {
                if (!(promise instanceof Promise)) {
                  handler.call(receiver, value, promise);
                } else {
                  this._settlePromiseFromHandler(handler, receiver, value, promise);
                }
              } else if (promise instanceof Promise) {
                promise._reject(value);
              }
            };
            Promise.prototype._settlePromiseCtx = function (ctx) {
              this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
            };
            Promise.prototype._settlePromise0 = function (handler, value, bitField) {
              var promise = this._promise0;
              var receiver = this._receiverAt(0);
              this._promise0 = undefined;
              this._receiver0 = undefined;
              this._settlePromise(promise, handler, receiver, value);
            };
            Promise.prototype._clearCallbackDataAtIndex = function (index) {
              var base = index * 4 - 4;
              this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
            };
            Promise.prototype._fulfill = function (value) {
              var bitField = this._bitField;
              if ((bitField & 117506048) >>> 16) return;
              if (value === this) {
                var err = makeSelfResolutionError();
                this._attachExtraTrace(err);
                return this._reject(err);
              }
              this._setFulfilled();
              this._rejectionHandler0 = value;
              if ((bitField & 65535) > 0) {
                if ((bitField & 134217728) !== 0) {
                  this._settlePromises();
                } else {
                  async.settlePromises(this);
                }
              }
            };
            Promise.prototype._reject = function (reason) {
              var bitField = this._bitField;
              if ((bitField & 117506048) >>> 16) return;
              this._setRejected();
              this._fulfillmentHandler0 = reason;
              if (this._isFinal()) {
                return async.fatalError(reason, util.isNode);
              }
              if ((bitField & 65535) > 0) {
                async.settlePromises(this);
              } else {
                this._ensurePossibleRejectionHandled();
              }
            };
            Promise.prototype._fulfillPromises = function (len, value) {
              for (var i = 1; i < len; i++) {
                var handler = this._fulfillmentHandlerAt(i);
                var promise = this._promiseAt(i);
                var receiver = this._receiverAt(i);
                this._clearCallbackDataAtIndex(i);
                this._settlePromise(promise, handler, receiver, value);
              }
            };
            Promise.prototype._rejectPromises = function (len, reason) {
              for (var i = 1; i < len; i++) {
                var handler = this._rejectionHandlerAt(i);
                var promise = this._promiseAt(i);
                var receiver = this._receiverAt(i);
                this._clearCallbackDataAtIndex(i);
                this._settlePromise(promise, handler, receiver, reason);
              }
            };
            Promise.prototype._settlePromises = function () {
              var bitField = this._bitField;
              var len = bitField & 65535;
              if (len > 0) {
                if ((bitField & 16842752) !== 0) {
                  var reason = this._fulfillmentHandler0;
                  this._settlePromise0(this._rejectionHandler0, reason, bitField);
                  this._rejectPromises(len, reason);
                } else {
                  var value = this._rejectionHandler0;
                  this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                  this._fulfillPromises(len, value);
                }
                this._setLength(0);
              }
              this._clearCancellationData();
            };
            Promise.prototype._settledValue = function () {
              var bitField = this._bitField;
              if ((bitField & 33554432) !== 0) {
                return this._rejectionHandler0;
              } else if ((bitField & 16777216) !== 0) {
                return this._fulfillmentHandler0;
              }
            };
            function deferResolve(v) {
              this.promise._resolveCallback(v);
            }
            function deferReject(v) {
              this.promise._rejectCallback(v, false);
            }
            Promise.defer = Promise.pending = function () {
              debug.deprecated("Promise.defer", "new Promise");
              var promise = new Promise(INTERNAL);
              return {
                promise: promise,
                resolve: deferResolve,
                reject: deferReject
              };
            };
            util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);
            _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
            _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
            _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
            _dereq_("./direct_resolve")(Promise);
            _dereq_("./synchronous_inspection")(Promise);
            _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
            Promise.Promise = Promise;
            Promise.version = "3.4.5";
            _dereq_("./map.js")(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
            _dereq_("./call_get.js")(Promise);
            _dereq_("./using.js")(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
            _dereq_("./timers.js")(Promise, INTERNAL, debug);
            _dereq_("./generators.js")(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
            _dereq_("./nodeify.js")(Promise);
            _dereq_("./promisify.js")(Promise, INTERNAL);
            _dereq_("./props.js")(Promise, PromiseArray, tryConvertToPromise, apiRejection);
            _dereq_("./race.js")(Promise, INTERNAL, tryConvertToPromise, apiRejection);
            _dereq_("./reduce.js")(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
            _dereq_("./settle.js")(Promise, PromiseArray, debug);
            _dereq_("./some.js")(Promise, PromiseArray, apiRejection);
            _dereq_("./filter.js")(Promise, INTERNAL);
            _dereq_("./each.js")(Promise, INTERNAL);
            _dereq_("./any.js")(Promise);
            util.toFastProperties(Promise);
            util.toFastProperties(Promise.prototype);
            function fillTypes(value) {
              var p = new Promise(INTERNAL);
              p._fulfillmentHandler0 = value;
              p._rejectionHandler0 = value;
              p._promise0 = value;
              p._receiver0 = value;
            }
            // Complete slack tracking, opt out of field-type tracking and
            // stabilize map
            fillTypes({
              a: 1
            });
            fillTypes({
              b: 2
            });
            fillTypes({
              c: 3
            });
            fillTypes(1);
            fillTypes(function () {});
            fillTypes(undefined);
            fillTypes(false);
            fillTypes(new Promise(INTERNAL));
            debug.setBounds(Async.firstLineError, util.lastLineError);
            return Promise;
          };
        }, {
          "./any.js": 1,
          "./async": 2,
          "./bind": 3,
          "./call_get.js": 5,
          "./cancel": 6,
          "./catch_filter": 7,
          "./context": 8,
          "./debuggability": 9,
          "./direct_resolve": 10,
          "./each.js": 11,
          "./errors": 12,
          "./es5": 13,
          "./filter.js": 14,
          "./finally": 15,
          "./generators.js": 16,
          "./join": 17,
          "./map.js": 18,
          "./method": 19,
          "./nodeback": 20,
          "./nodeify.js": 21,
          "./promise_array": 23,
          "./promisify.js": 24,
          "./props.js": 25,
          "./race.js": 27,
          "./reduce.js": 28,
          "./settle.js": 30,
          "./some.js": 31,
          "./synchronous_inspection": 32,
          "./thenables": 33,
          "./timers.js": 34,
          "./using.js": 35,
          "./util": 36
        }],
        23: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
            var util = _dereq_("./util");
            var isArray = util.isArray;
            function toResolutionValue(val) {
              switch (val) {
                case -2:
                  return [];
                case -3:
                  return {};
              }
            }
            function PromiseArray(values) {
              var promise = this._promise = new Promise(INTERNAL);
              if (values instanceof Promise) {
                promise._propagateFrom(values, 3);
              }
              promise._setOnCancel(this);
              this._values = values;
              this._length = 0;
              this._totalResolved = 0;
              this._init(undefined, -2);
            }
            util.inherits(PromiseArray, Proxyable);
            PromiseArray.prototype.length = function () {
              return this._length;
            };
            PromiseArray.prototype.promise = function () {
              return this._promise;
            };
            PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
              var values = tryConvertToPromise(this._values, this._promise);
              if (values instanceof Promise) {
                values = values._target();
                var bitField = values._bitField;
                this._values = values;
                if ((bitField & 50397184) === 0) {
                  this._promise._setAsyncGuaranteed();
                  return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                } else if ((bitField & 33554432) !== 0) {
                  values = values._value();
                } else if ((bitField & 16777216) !== 0) {
                  return this._reject(values._reason());
                } else {
                  return this._cancel();
                }
              }
              values = util.asArray(values);
              if (values === null) {
                var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                this._promise._rejectCallback(err, false);
                return;
              }
              if (values.length === 0) {
                if (resolveValueIfEmpty === -5) {
                  this._resolveEmptyArray();
                } else {
                  this._resolve(toResolutionValue(resolveValueIfEmpty));
                }
                return;
              }
              this._iterate(values);
            };
            PromiseArray.prototype._iterate = function (values) {
              var len = this.getActualLength(values.length);
              this._length = len;
              this._values = this.shouldCopyValues() ? new Array(len) : this._values;
              var result = this._promise;
              var isResolved = false;
              var bitField = null;
              for (var i = 0; i < len; ++i) {
                var maybePromise = tryConvertToPromise(values[i], result);
                if (maybePromise instanceof Promise) {
                  maybePromise = maybePromise._target();
                  bitField = maybePromise._bitField;
                } else {
                  bitField = null;
                }
                if (isResolved) {
                  if (bitField !== null) {
                    maybePromise.suppressUnhandledRejections();
                  }
                } else if (bitField !== null) {
                  if ((bitField & 50397184) === 0) {
                    maybePromise._proxy(this, i);
                    this._values[i] = maybePromise;
                  } else if ((bitField & 33554432) !== 0) {
                    isResolved = this._promiseFulfilled(maybePromise._value(), i);
                  } else if ((bitField & 16777216) !== 0) {
                    isResolved = this._promiseRejected(maybePromise._reason(), i);
                  } else {
                    isResolved = this._promiseCancelled(i);
                  }
                } else {
                  isResolved = this._promiseFulfilled(maybePromise, i);
                }
              }
              if (!isResolved) result._setAsyncGuaranteed();
            };
            PromiseArray.prototype._isResolved = function () {
              return this._values === null;
            };
            PromiseArray.prototype._resolve = function (value) {
              this._values = null;
              this._promise._fulfill(value);
            };
            PromiseArray.prototype._cancel = function () {
              if (this._isResolved() || !this._promise._isCancellable()) return;
              this._values = null;
              this._promise._cancel();
            };
            PromiseArray.prototype._reject = function (reason) {
              this._values = null;
              this._promise._rejectCallback(reason, false);
            };
            PromiseArray.prototype._promiseFulfilled = function (value, index) {
              this._values[index] = value;
              var totalResolved = ++this._totalResolved;
              if (totalResolved >= this._length) {
                this._resolve(this._values);
                return true;
              }
              return false;
            };
            PromiseArray.prototype._promiseCancelled = function () {
              this._cancel();
              return true;
            };
            PromiseArray.prototype._promiseRejected = function (reason) {
              this._totalResolved++;
              this._reject(reason);
              return true;
            };
            PromiseArray.prototype._resultCancelled = function () {
              if (this._isResolved()) return;
              var values = this._values;
              this._cancel();
              if (values instanceof Promise) {
                values.cancel();
              } else {
                for (var i = 0; i < values.length; ++i) {
                  if (values[i] instanceof Promise) {
                    values[i].cancel();
                  }
                }
              }
            };
            PromiseArray.prototype.shouldCopyValues = function () {
              return true;
            };
            PromiseArray.prototype.getActualLength = function (len) {
              return len;
            };
            return PromiseArray;
          };
        }, {
          "./util": 36
        }],
        24: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL) {
            var THIS = {};
            var util = _dereq_("./util");
            var nodebackForPromise = _dereq_("./nodeback");
            var withAppended = util.withAppended;
            var maybeWrapAsError = util.maybeWrapAsError;
            var canEvaluate = util.canEvaluate;
            var TypeError = _dereq_("./errors").TypeError;
            var defaultSuffix = "Async";
            var defaultPromisified = {
              __P_74_14: true
            };
            var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__P_74_14"];
            var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");
            var defaultFilter = function defaultFilter(name) {
              return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
            };
            function propsFilter(key) {
              return !noCopyPropsPattern.test(key);
            }
            function isPromisified(fn) {
              try {
                return fn.__P_74_14 === true;
              } catch (e) {
                return false;
              }
            }
            function hasPromisified(obj, key, suffix) {
              var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
              return val ? isPromisified(val) : false;
            }
            function checkValid(ret, suffix, suffixRegexp) {
              for (var i = 0; i < ret.length; i += 2) {
                var key = ret[i];
                if (suffixRegexp.test(key)) {
                  var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                  for (var j = 0; j < ret.length; j += 2) {
                    if (ret[j] === keyWithoutAsyncSuffix) {
                      throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", suffix));
                    }
                  }
                }
              }
            }
            function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
              var keys = util.inheritedDataKeys(obj);
              var ret = [];
              for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                var value = obj[key];
                var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
                if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
                  ret.push(key, value);
                }
              }
              checkValid(ret, suffix, suffixRegexp);
              return ret;
            }
            var escapeIdentRegex = function escapeIdentRegex(str) {
              return str.replace(/([$])/, "\\$");
            };
            var makeNodePromisifiedEval;
            function makeNodePromisifiedClosure(callback, receiver, _, fn, __P_74_15, multiArgs) {
              var defaultThis = function () {
                return this;
              }();
              var method = callback;
              if (typeof method === "string") {
                callback = fn;
              }
              function promisified() {
                var _receiver = receiver;
                if (receiver === THIS) _receiver = this;
                var promise = new Promise(INTERNAL);
                promise._captureStackTrace();
                var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
                var fn = nodebackForPromise(promise, multiArgs);
                try {
                  cb.apply(_receiver, withAppended(arguments, fn));
                } catch (e) {
                  promise._rejectCallback(maybeWrapAsError(e), true, true);
                }
                if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
                return promise;
              }
              util.notEnumerableProp(promisified, "__P_74_14", true);
              return promisified;
            }
            var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;
            function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
              var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
              var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);
              for (var i = 0, len = methods.length; i < len; i += 2) {
                var key = methods[i];
                var fn = methods[i + 1];
                var promisifiedKey = key + suffix;
                if (promisifier === makeNodePromisified) {
                  obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                } else {
                  var promisified = promisifier(fn, function () {
                    return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                  });
                  util.notEnumerableProp(promisified, "__P_74_14", true);
                  obj[promisifiedKey] = promisified;
                }
              }
              util.toFastProperties(obj);
              return obj;
            }
            function promisify(callback, receiver, multiArgs) {
              return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
            }
            Promise.promisify = function (fn, options) {
              if (typeof fn !== "function") {
                throw new TypeError("expecting a function but got " + util.classString(fn));
              }
              if (isPromisified(fn)) {
                return fn;
              }
              options = Object(options);
              var receiver = options.context === undefined ? THIS : options.context;
              var multiArgs = !!options.multiArgs;
              var ret = promisify(fn, receiver, multiArgs);
              util.copyDescriptors(fn, ret, propsFilter);
              return ret;
            };
            Promise.promisifyAll = function (target, options) {
              if (typeof target !== "function" && _typeof(target) !== "object") {
                throw new TypeError("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
              }
              options = Object(options);
              var multiArgs = !!options.multiArgs;
              var suffix = options.suffix;
              if (typeof suffix !== "string") suffix = defaultSuffix;
              var filter = options.filter;
              if (typeof filter !== "function") filter = defaultFilter;
              var promisifier = options.promisifier;
              if (typeof promisifier !== "function") promisifier = makeNodePromisified;
              if (!util.isIdentifier(suffix)) {
                throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
              }
              var keys = util.inheritedDataKeys(target);
              for (var i = 0; i < keys.length; ++i) {
                var value = target[keys[i]];
                if (keys[i] !== "constructor" && util.isClass(value)) {
                  promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                  promisifyAll(value, suffix, filter, promisifier, multiArgs);
                }
              }
              return promisifyAll(target, suffix, filter, promisifier, multiArgs);
            };
          };
        }, {
          "./errors": 12,
          "./nodeback": 20,
          "./util": 36
        }],
        25: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
            var util = _dereq_("./util");
            var isObject = util.isObject;
            var es5 = _dereq_("./es5");
            var Es6Map;
            if (typeof Map === "function") Es6Map = Map;
            var mapToEntries = function () {
              var index = 0;
              var size = 0;
              function extractEntry(value, key) {
                this[index] = value;
                this[index + size] = key;
                index++;
              }
              return function mapToEntries(map) {
                size = map.size;
                index = 0;
                var ret = new Array(map.size * 2);
                map.forEach(extractEntry, ret);
                return ret;
              };
            }();
            var entriesToMap = function entriesToMap(entries) {
              var ret = new Es6Map();
              var length = entries.length / 2 | 0;
              for (var i = 0; i < length; ++i) {
                var key = entries[length + i];
                var value = entries[i];
                ret.set(key, value);
              }
              return ret;
            };
            function PropertiesPromiseArray(obj) {
              var isMap = false;
              var entries;
              if (Es6Map !== undefined && obj instanceof Es6Map) {
                entries = mapToEntries(obj);
                isMap = true;
              } else {
                var keys = es5.keys(obj);
                var len = keys.length;
                entries = new Array(len * 2);
                for (var i = 0; i < len; ++i) {
                  var key = keys[i];
                  entries[i] = obj[key];
                  entries[i + len] = key;
                }
              }
              this.constructor$(entries);
              this._isMap = isMap;
              this._init$(undefined, -3);
            }
            util.inherits(PropertiesPromiseArray, PromiseArray);
            PropertiesPromiseArray.prototype._init = function () {};
            PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
              this._values[index] = value;
              var totalResolved = ++this._totalResolved;
              if (totalResolved >= this._length) {
                var val;
                if (this._isMap) {
                  val = entriesToMap(this._values);
                } else {
                  val = {};
                  var keyOffset = this.length();
                  for (var i = 0, len = this.length(); i < len; ++i) {
                    val[this._values[i + keyOffset]] = this._values[i];
                  }
                }
                this._resolve(val);
                return true;
              }
              return false;
            };
            PropertiesPromiseArray.prototype.shouldCopyValues = function () {
              return false;
            };
            PropertiesPromiseArray.prototype.getActualLength = function (len) {
              return len >> 1;
            };
            function props(promises) {
              var ret;
              var castValue = tryConvertToPromise(promises);
              if (!isObject(castValue)) {
                return apiRejection("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
              } else if (castValue instanceof Promise) {
                ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
              } else {
                ret = new PropertiesPromiseArray(castValue).promise();
              }
              if (castValue instanceof Promise) {
                ret._propagateFrom(castValue, 2);
              }
              return ret;
            }
            Promise.prototype.props = function () {
              return props(this);
            };
            Promise.props = function (promises) {
              return props(promises);
            };
          };
        }, {
          "./es5": 13,
          "./util": 36
        }],
        26: [function (_dereq_, module, exports) {
          "use strict";

          function arrayMove(src, srcIndex, dst, dstIndex, len) {
            for (var j = 0; j < len; ++j) {
              dst[j + dstIndex] = src[j + srcIndex];
              src[j + srcIndex] = undefined;
            }
          }
          function Queue(capacity) {
            this._capacity = capacity;
            this._length = 0;
            this._front = 0;
          }
          Queue.prototype._willBeOverCapacity = function (size) {
            return this._capacity < size;
          };
          Queue.prototype._pushOne = function (arg) {
            var length = this.length();
            this._checkCapacity(length + 1);
            var i = this._front + length & this._capacity - 1;
            this[i] = arg;
            this._length = length + 1;
          };
          Queue.prototype._unshiftOne = function (value) {
            var capacity = this._capacity;
            this._checkCapacity(this.length() + 1);
            var front = this._front;
            var i = (front - 1 & capacity - 1 ^ capacity) - capacity;
            this[i] = value;
            this._front = i;
            this._length = this.length() + 1;
          };
          Queue.prototype.unshift = function (fn, receiver, arg) {
            this._unshiftOne(arg);
            this._unshiftOne(receiver);
            this._unshiftOne(fn);
          };
          Queue.prototype.push = function (fn, receiver, arg) {
            var length = this.length() + 3;
            if (this._willBeOverCapacity(length)) {
              this._pushOne(fn);
              this._pushOne(receiver);
              this._pushOne(arg);
              return;
            }
            var j = this._front + length - 3;
            this._checkCapacity(length);
            var wrapMask = this._capacity - 1;
            this[j + 0 & wrapMask] = fn;
            this[j + 1 & wrapMask] = receiver;
            this[j + 2 & wrapMask] = arg;
            this._length = length;
          };
          Queue.prototype.shift = function () {
            var front = this._front,
              ret = this[front];
            this[front] = undefined;
            this._front = front + 1 & this._capacity - 1;
            this._length--;
            return ret;
          };
          Queue.prototype.length = function () {
            return this._length;
          };
          Queue.prototype._checkCapacity = function (size) {
            if (this._capacity < size) {
              this._resizeTo(this._capacity << 1);
            }
          };
          Queue.prototype._resizeTo = function (capacity) {
            var oldCapacity = this._capacity;
            this._capacity = capacity;
            var front = this._front;
            var length = this._length;
            var moveItemsCount = front + length & oldCapacity - 1;
            arrayMove(this, 0, this, oldCapacity, moveItemsCount);
          };
          module.exports = Queue;
        }, {}],
        27: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
            var util = _dereq_("./util");
            var raceLater = function raceLater(promise) {
              return promise.then(function (array) {
                return race(array, promise);
              });
            };
            function race(promises, parent) {
              var maybePromise = tryConvertToPromise(promises);
              if (maybePromise instanceof Promise) {
                return raceLater(maybePromise);
              } else {
                promises = util.asArray(promises);
                if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
              }
              var ret = new Promise(INTERNAL);
              if (parent !== undefined) {
                ret._propagateFrom(parent, 3);
              }
              var fulfill = ret._fulfill;
              var reject = ret._reject;
              for (var i = 0, len = promises.length; i < len; ++i) {
                var val = promises[i];
                if (val === undefined && !(i in promises)) {
                  continue;
                }
                Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
              }
              return ret;
            }
            Promise.race = function (promises) {
              return race(promises, undefined);
            };
            Promise.prototype.race = function () {
              return race(this, undefined);
            };
          };
        }, {
          "./util": 36
        }],
        28: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
            var getDomain = Promise._getDomain;
            var util = _dereq_("./util");
            var tryCatch = util.tryCatch;
            function ReductionPromiseArray(promises, fn, initialValue, _each) {
              this.constructor$(promises);
              var domain = getDomain();
              this._fn = domain === null ? fn : util.domainBind(domain, fn);
              if (initialValue !== undefined) {
                initialValue = Promise.resolve(initialValue);
                initialValue._attachCancellationCallback(this);
              }
              this._initialValue = initialValue;
              this._currentCancellable = null;
              if (_each === INTERNAL) {
                this._eachValues = Array(this._length);
              } else if (_each === 0) {
                this._eachValues = null;
              } else {
                this._eachValues = undefined;
              }
              this._promise._captureStackTrace();
              this._init$(undefined, -5);
            }
            util.inherits(ReductionPromiseArray, PromiseArray);
            ReductionPromiseArray.prototype._gotAccum = function (accum) {
              if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
                this._eachValues.push(accum);
              }
            };
            ReductionPromiseArray.prototype._eachComplete = function (value) {
              if (this._eachValues !== null) {
                this._eachValues.push(value);
              }
              return this._eachValues;
            };
            ReductionPromiseArray.prototype._init = function () {};
            ReductionPromiseArray.prototype._resolveEmptyArray = function () {
              this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
            };
            ReductionPromiseArray.prototype.shouldCopyValues = function () {
              return false;
            };
            ReductionPromiseArray.prototype._resolve = function (value) {
              this._promise._resolveCallback(value);
              this._values = null;
            };
            ReductionPromiseArray.prototype._resultCancelled = function (sender) {
              if (sender === this._initialValue) return this._cancel();
              if (this._isResolved()) return;
              this._resultCancelled$();
              if (this._currentCancellable instanceof Promise) {
                this._currentCancellable.cancel();
              }
              if (this._initialValue instanceof Promise) {
                this._initialValue.cancel();
              }
            };
            ReductionPromiseArray.prototype._iterate = function (values) {
              this._values = values;
              var value;
              var i;
              var length = values.length;
              if (this._initialValue !== undefined) {
                value = this._initialValue;
                i = 0;
              } else {
                value = Promise.resolve(values[0]);
                i = 1;
              }
              this._currentCancellable = value;
              if (!value.isRejected()) {
                for (; i < length; ++i) {
                  var ctx = {
                    accum: null,
                    value: values[i],
                    index: i,
                    length: length,
                    array: this
                  };
                  value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                }
              }
              if (this._eachValues !== undefined) {
                value = value._then(this._eachComplete, undefined, undefined, this, undefined);
              }
              value._then(completed, completed, undefined, value, this);
            };
            Promise.prototype.reduce = function (fn, initialValue) {
              return reduce(this, fn, initialValue, null);
            };
            Promise.reduce = function (promises, fn, initialValue, _each) {
              return reduce(promises, fn, initialValue, _each);
            };
            function completed(valueOrReason, array) {
              if (this.isFulfilled()) {
                array._resolve(valueOrReason);
              } else {
                array._reject(valueOrReason);
              }
            }
            function reduce(promises, fn, initialValue, _each) {
              if (typeof fn !== "function") {
                return apiRejection("expecting a function but got " + util.classString(fn));
              }
              var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
              return array.promise();
            }
            function gotAccum(accum) {
              this.accum = accum;
              this.array._gotAccum(accum);
              var value = tryConvertToPromise(this.value, this.array._promise);
              if (value instanceof Promise) {
                this.array._currentCancellable = value;
                return value._then(gotValue, undefined, undefined, this, undefined);
              } else {
                return gotValue.call(this, value);
              }
            }
            function gotValue(value) {
              var array = this.array;
              var promise = array._promise;
              var fn = tryCatch(array._fn);
              promise._pushContext();
              var ret;
              if (array._eachValues !== undefined) {
                ret = fn.call(promise._boundValue(), value, this.index, this.length);
              } else {
                ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
              }
              if (ret instanceof Promise) {
                array._currentCancellable = ret;
              }
              var promiseCreated = promise._popContext();
              debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
              return ret;
            }
          };
        }, {
          "./util": 36
        }],
        29: [function (_dereq_, module, exports) {
          "use strict";

          var util = _dereq_("./util");
          var schedule;
          var noAsyncScheduler = function noAsyncScheduler() {
            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
          };
          var NativePromise = util.getNativePromise();
          if (util.isNode && typeof MutationObserver === "undefined") {
            var GlobalSetImmediate = global.setImmediate;
            var ProcessNextTick = process.nextTick;
            schedule = util.isRecentNode ? function (fn) {
              GlobalSetImmediate.call(global, fn);
            } : function (fn) {
              ProcessNextTick.call(process, fn);
            };
          } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
            var nativePromise = NativePromise.resolve();
            schedule = function schedule(fn) {
              nativePromise.then(fn);
            };
          } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
            schedule = function () {
              var div = document.createElement("div");
              var opts = {
                attributes: true
              };
              var toggleScheduled = false;
              var div2 = document.createElement("div");
              var o2 = new MutationObserver(function () {
                div.classList.toggle("foo");
                toggleScheduled = false;
              });
              o2.observe(div2, opts);
              var scheduleToggle = function scheduleToggle() {
                if (toggleScheduled) return;
                toggleScheduled = true;
                div2.classList.toggle("foo");
              };
              return function schedule(fn) {
                var o = new MutationObserver(function () {
                  o.disconnect();
                  fn();
                });
                o.observe(div, opts);
                scheduleToggle();
              };
            }();
          } else if (typeof setImmediate !== "undefined") {
            schedule = function schedule(fn) {
              setImmediate(fn);
            };
          } else if (typeof setTimeout !== "undefined") {
            schedule = function schedule(fn) {
              setTimeout(fn, 0);
            };
          } else {
            schedule = noAsyncScheduler;
          }
          module.exports = schedule;
        }, {
          "./util": 36
        }],
        30: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, debug) {
            var PromiseInspection = Promise.PromiseInspection;
            var util = _dereq_("./util");
            function SettledPromiseArray(values) {
              this.constructor$(values);
            }
            util.inherits(SettledPromiseArray, PromiseArray);
            SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
              this._values[index] = inspection;
              var totalResolved = ++this._totalResolved;
              if (totalResolved >= this._length) {
                this._resolve(this._values);
                return true;
              }
              return false;
            };
            SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
              var ret = new PromiseInspection();
              ret._bitField = 33554432;
              ret._settledValueField = value;
              return this._promiseResolved(index, ret);
            };
            SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
              var ret = new PromiseInspection();
              ret._bitField = 16777216;
              ret._settledValueField = reason;
              return this._promiseResolved(index, ret);
            };
            Promise.settle = function (promises) {
              debug.deprecated(".settle()", ".reflect()");
              return new SettledPromiseArray(promises).promise();
            };
            Promise.prototype.settle = function () {
              return Promise.settle(this);
            };
          };
        }, {
          "./util": 36
        }],
        31: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, PromiseArray, apiRejection) {
            var util = _dereq_("./util");
            var RangeError = _dereq_("./errors").RangeError;
            var AggregateError = _dereq_("./errors").AggregateError;
            var isArray = util.isArray;
            var CANCELLATION = {};
            function SomePromiseArray(values) {
              this.constructor$(values);
              this._howMany = 0;
              this._unwrap = false;
              this._initialized = false;
            }
            util.inherits(SomePromiseArray, PromiseArray);
            SomePromiseArray.prototype._init = function () {
              if (!this._initialized) {
                return;
              }
              if (this._howMany === 0) {
                this._resolve([]);
                return;
              }
              this._init$(undefined, -5);
              var isArrayResolved = isArray(this._values);
              if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
                this._reject(this._getRangeError(this.length()));
              }
            };
            SomePromiseArray.prototype.init = function () {
              this._initialized = true;
              this._init();
            };
            SomePromiseArray.prototype.setUnwrap = function () {
              this._unwrap = true;
            };
            SomePromiseArray.prototype.howMany = function () {
              return this._howMany;
            };
            SomePromiseArray.prototype.setHowMany = function (count) {
              this._howMany = count;
            };
            SomePromiseArray.prototype._promiseFulfilled = function (value) {
              this._addFulfilled(value);
              if (this._fulfilled() === this.howMany()) {
                this._values.length = this.howMany();
                if (this.howMany() === 1 && this._unwrap) {
                  this._resolve(this._values[0]);
                } else {
                  this._resolve(this._values);
                }
                return true;
              }
              return false;
            };
            SomePromiseArray.prototype._promiseRejected = function (reason) {
              this._addRejected(reason);
              return this._checkOutcome();
            };
            SomePromiseArray.prototype._promiseCancelled = function () {
              if (this._values instanceof Promise || this._values == null) {
                return this._cancel();
              }
              this._addRejected(CANCELLATION);
              return this._checkOutcome();
            };
            SomePromiseArray.prototype._checkOutcome = function () {
              if (this.howMany() > this._canPossiblyFulfill()) {
                var e = new AggregateError();
                for (var i = this.length(); i < this._values.length; ++i) {
                  if (this._values[i] !== CANCELLATION) {
                    e.push(this._values[i]);
                  }
                }
                if (e.length > 0) {
                  this._reject(e);
                } else {
                  this._cancel();
                }
                return true;
              }
              return false;
            };
            SomePromiseArray.prototype._fulfilled = function () {
              return this._totalResolved;
            };
            SomePromiseArray.prototype._rejected = function () {
              return this._values.length - this.length();
            };
            SomePromiseArray.prototype._addRejected = function (reason) {
              this._values.push(reason);
            };
            SomePromiseArray.prototype._addFulfilled = function (value) {
              this._values[this._totalResolved++] = value;
            };
            SomePromiseArray.prototype._canPossiblyFulfill = function () {
              return this.length() - this._rejected();
            };
            SomePromiseArray.prototype._getRangeError = function (count) {
              var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
              return new RangeError(message);
            };
            SomePromiseArray.prototype._resolveEmptyArray = function () {
              this._reject(this._getRangeError(0));
            };
            function some(promises, howMany) {
              if ((howMany | 0) !== howMany || howMany < 0) {
                return apiRejection("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
              }
              var ret = new SomePromiseArray(promises);
              var promise = ret.promise();
              ret.setHowMany(howMany);
              ret.init();
              return promise;
            }
            Promise.some = function (promises, howMany) {
              return some(promises, howMany);
            };
            Promise.prototype.some = function (howMany) {
              return some(this, howMany);
            };
            Promise._SomePromiseArray = SomePromiseArray;
          };
        }, {
          "./errors": 12,
          "./util": 36
        }],
        32: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise) {
            function PromiseInspection(promise) {
              if (promise !== undefined) {
                promise = promise._target();
                this._bitField = promise._bitField;
                this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
              } else {
                this._bitField = 0;
                this._settledValueField = undefined;
              }
            }
            PromiseInspection.prototype._settledValue = function () {
              return this._settledValueField;
            };
            var value = PromiseInspection.prototype.value = function () {
              if (!this.isFulfilled()) {
                throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
              }
              return this._settledValue();
            };
            var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
              if (!this.isRejected()) {
                throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
              }
              return this._settledValue();
            };
            var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
              return (this._bitField & 33554432) !== 0;
            };
            var isRejected = PromiseInspection.prototype.isRejected = function () {
              return (this._bitField & 16777216) !== 0;
            };
            var isPending = PromiseInspection.prototype.isPending = function () {
              return (this._bitField & 50397184) === 0;
            };
            var isResolved = PromiseInspection.prototype.isResolved = function () {
              return (this._bitField & 50331648) !== 0;
            };
            PromiseInspection.prototype.isCancelled = function () {
              return (this._bitField & 8454144) !== 0;
            };
            Promise.prototype.__P_74_16 = function () {
              return (this._bitField & 65536) === 65536;
            };
            Promise.prototype._isCancelled = function () {
              return this._target().__P_74_16();
            };
            Promise.prototype.isCancelled = function () {
              return (this._target()._bitField & 8454144) !== 0;
            };
            Promise.prototype.isPending = function () {
              return isPending.call(this._target());
            };
            Promise.prototype.isRejected = function () {
              return isRejected.call(this._target());
            };
            Promise.prototype.isFulfilled = function () {
              return isFulfilled.call(this._target());
            };
            Promise.prototype.isResolved = function () {
              return isResolved.call(this._target());
            };
            Promise.prototype.value = function () {
              return value.call(this._target());
            };
            Promise.prototype.reason = function () {
              var target = this._target();
              target._unsetRejectionIsUnhandled();
              return reason.call(target);
            };
            Promise.prototype._value = function () {
              return this._settledValue();
            };
            Promise.prototype._reason = function () {
              this._unsetRejectionIsUnhandled();
              return this._settledValue();
            };
            Promise.PromiseInspection = PromiseInspection;
          };
        }, {}],
        33: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL) {
            var util = _dereq_("./util");
            var errorObj = util.errorObj;
            var isObject = util.isObject;
            function tryConvertToPromise(obj, context) {
              if (isObject(obj)) {
                if (obj instanceof Promise) return obj;
                var then = getThen(obj);
                if (then === errorObj) {
                  if (context) context._pushContext();
                  var ret = Promise.reject(then.e);
                  if (context) context._popContext();
                  return ret;
                } else if (typeof then === "function") {
                  if (isAnyBluebirdPromise(obj)) {
                    var ret = new Promise(INTERNAL);
                    obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                    return ret;
                  }
                  return doThenable(obj, then, context);
                }
              }
              return obj;
            }
            function doGetThen(obj) {
              return obj.then;
            }
            function getThen(obj) {
              try {
                return doGetThen(obj);
              } catch (e) {
                errorObj.e = e;
                return errorObj;
              }
            }
            var hasProp = {}.hasOwnProperty;
            function isAnyBluebirdPromise(obj) {
              try {
                return hasProp.call(obj, "_promise0");
              } catch (e) {
                return false;
              }
            }
            function doThenable(x, then, context) {
              var promise = new Promise(INTERNAL);
              var ret = promise;
              if (context) context._pushContext();
              promise._captureStackTrace();
              if (context) context._popContext();
              var synchronous = true;
              var result = util.tryCatch(then).call(x, resolve, reject);
              synchronous = false;
              if (promise && result === errorObj) {
                promise._rejectCallback(result.e, true, true);
                promise = null;
              }
              function resolve(value) {
                if (!promise) return;
                promise._resolveCallback(value);
                promise = null;
              }
              function reject(reason) {
                if (!promise) return;
                promise._rejectCallback(reason, synchronous, true);
                promise = null;
              }
              return ret;
            }
            return tryConvertToPromise;
          };
        }, {
          "./util": 36
        }],
        34: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, INTERNAL, debug) {
            var util = _dereq_("./util");
            var TimeoutError = Promise.TimeoutError;
            function HandleWrapper(handle) {
              this.handle = handle;
            }
            HandleWrapper.prototype._resultCancelled = function () {
              clearTimeout(this.handle);
            };
            var afterValue = function afterValue(value) {
              return delay(+this).thenReturn(value);
            };
            var delay = Promise.delay = function (ms, value) {
              var ret;
              var handle;
              if (value !== undefined) {
                ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
                if (debug.cancellation() && value instanceof Promise) {
                  ret._setOnCancel(value);
                }
              } else {
                ret = new Promise(INTERNAL);
                handle = setTimeout(function () {
                  ret._fulfill();
                }, +ms);
                if (debug.cancellation()) {
                  ret._setOnCancel(new HandleWrapper(handle));
                }
                ret._captureStackTrace();
              }
              ret._setAsyncGuaranteed();
              return ret;
            };
            Promise.prototype.delay = function (ms) {
              return delay(ms, this);
            };
            var afterTimeout = function afterTimeout(promise, message, parent) {
              var err;
              if (typeof message !== "string") {
                if (message instanceof Error) {
                  err = message;
                } else {
                  err = new TimeoutError("operation timed out");
                }
              } else {
                err = new TimeoutError(message);
              }
              util.markAsOriginatingFromRejection(err);
              promise._attachExtraTrace(err);
              promise._reject(err);
              if (parent != null) {
                parent.cancel();
              }
            };
            function successClear(value) {
              clearTimeout(this.handle);
              return value;
            }
            function failureClear(reason) {
              clearTimeout(this.handle);
              throw reason;
            }
            Promise.prototype.timeout = function (ms, message) {
              ms = +ms;
              var ret, parent;
              var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                if (ret.isPending()) {
                  afterTimeout(ret, message, parent);
                }
              }, ms));
              if (debug.cancellation()) {
                parent = this.then();
                ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                ret._setOnCancel(handleWrapper);
              } else {
                ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
              }
              return ret;
            };
          };
        }, {
          "./util": 36
        }],
        35: [function (_dereq_, module, exports) {
          "use strict";

          module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
            var util = _dereq_("./util");
            var TypeError = _dereq_("./errors").TypeError;
            var inherits = _dereq_("./util").inherits;
            var errorObj = util.errorObj;
            var tryCatch = util.tryCatch;
            var NULL = {};
            function thrower(e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
            function castPreservingDisposable(thenable) {
              var maybePromise = tryConvertToPromise(thenable);
              if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
                maybePromise._setDisposable(thenable._getDisposer());
              }
              return maybePromise;
            }
            function dispose(resources, inspection) {
              var i = 0;
              var len = resources.length;
              var ret = new Promise(INTERNAL);
              function iterator() {
                if (i >= len) return ret._fulfill();
                var maybePromise = castPreservingDisposable(resources[i++]);
                if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                  try {
                    maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                  } catch (e) {
                    return thrower(e);
                  }
                  if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower, null, null, null);
                  }
                }
                iterator();
              }
              iterator();
              return ret;
            }
            function Disposer(data, promise, context) {
              this._data = data;
              this._promise = promise;
              this._context = context;
            }
            Disposer.prototype.data = function () {
              return this._data;
            };
            Disposer.prototype.promise = function () {
              return this._promise;
            };
            Disposer.prototype.resource = function () {
              if (this.promise().isFulfilled()) {
                return this.promise().value();
              }
              return NULL;
            };
            Disposer.prototype.tryDispose = function (inspection) {
              var resource = this.resource();
              var context = this._context;
              if (context !== undefined) context._pushContext();
              var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
              if (context !== undefined) context._popContext();
              this._promise._unsetDisposable();
              this._data = null;
              return ret;
            };
            Disposer.isDisposer = function (d) {
              return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
            };
            function FunctionDisposer(fn, promise, context) {
              this.constructor$(fn, promise, context);
            }
            inherits(FunctionDisposer, Disposer);
            FunctionDisposer.prototype.doDispose = function (resource, inspection) {
              var fn = this.data();
              return fn.call(resource, resource, inspection);
            };
            function maybeUnwrapDisposer(value) {
              if (Disposer.isDisposer(value)) {
                this.resources[this.index]._setDisposable(value);
                return value.promise();
              }
              return value;
            }
            function ResourceList(length) {
              this.length = length;
              this.promise = null;
              this[length - 1] = null;
            }
            ResourceList.prototype._resultCancelled = function () {
              var len = this.length;
              for (var i = 0; i < len; ++i) {
                var item = this[i];
                if (item instanceof Promise) {
                  item.cancel();
                }
              }
            };
            Promise.using = function () {
              var len = arguments.length;
              if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
              var fn = arguments[len - 1];
              if (typeof fn !== "function") {
                return apiRejection("expecting a function but got " + util.classString(fn));
              }
              var input;
              var spreadArgs = true;
              if (len === 2 && Array.isArray(arguments[0])) {
                input = arguments[0];
                len = input.length;
                spreadArgs = false;
              } else {
                input = arguments;
                len--;
              }
              var resources = new ResourceList(len);
              for (var i = 0; i < len; ++i) {
                var resource = input[i];
                if (Disposer.isDisposer(resource)) {
                  var disposer = resource;
                  resource = resource.promise();
                  resource._setDisposable(disposer);
                } else {
                  var maybePromise = tryConvertToPromise(resource);
                  if (maybePromise instanceof Promise) {
                    resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                      resources: resources,
                      index: i
                    }, undefined);
                  }
                }
                resources[i] = resource;
              }
              var reflectedResources = new Array(resources.length);
              for (var i = 0; i < reflectedResources.length; ++i) {
                reflectedResources[i] = Promise.resolve(resources[i]).reflect();
              }
              var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                  var inspection = inspections[i];
                  if (inspection.isRejected()) {
                    errorObj.e = inspection.error();
                    return errorObj;
                  } else if (!inspection.isFulfilled()) {
                    resultPromise.cancel();
                    return;
                  }
                  inspections[i] = inspection.value();
                }
                promise._pushContext();
                fn = tryCatch(fn);
                var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                return ret;
              });
              var promise = resultPromise.lastly(function () {
                var inspection = new Promise.PromiseInspection(resultPromise);
                return dispose(resources, inspection);
              });
              resources.promise = promise;
              promise._setOnCancel(resources);
              return promise;
            };
            Promise.prototype._setDisposable = function (disposer) {
              this._bitField = this._bitField | 131072;
              this._disposer = disposer;
            };
            Promise.prototype._isDisposable = function () {
              return (this._bitField & 131072) > 0;
            };
            Promise.prototype._getDisposer = function () {
              return this._disposer;
            };
            Promise.prototype._unsetDisposable = function () {
              this._bitField = this._bitField & ~131072;
              this._disposer = undefined;
            };
            Promise.prototype.disposer = function (fn) {
              if (typeof fn === "function") {
                return new FunctionDisposer(fn, this, createContext());
              }
              throw new TypeError();
            };
          };
        }, {
          "./errors": 12,
          "./util": 36
        }],
        36: [function (_dereq_, module, exports) {
          "use strict";

          var es5 = _dereq_("./es5");
          var canEvaluate = typeof navigator == "undefined";
          var errorObj = {
            e: {}
          };
          var tryCatchTarget;
          var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;
          function tryCatcher() {
            try {
              var target = tryCatchTarget;
              tryCatchTarget = null;
              return target.apply(this, arguments);
            } catch (e) {
              errorObj.e = e;
              return errorObj;
            }
          }
          function tryCatch(fn) {
            tryCatchTarget = fn;
            return tryCatcher;
          }
          var inherits = function inherits(Child, Parent) {
            var hasProp = {}.hasOwnProperty;
            function T() {
              this.constructor = Child;
              this.constructor$ = Parent;
              for (var propertyName in Parent.prototype) {
                if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
                  this[propertyName + "$"] = Parent.prototype[propertyName];
                }
              }
            }
            T.prototype = Parent.prototype;
            Child.prototype = new T();
            return Child.prototype;
          };
          function isPrimitive(val) {
            return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
          }
          function isObject(value) {
            return typeof value === "function" || _typeof(value) === "object" && value !== null;
          }
          function maybeWrapAsError(maybeError) {
            if (!isPrimitive(maybeError)) return maybeError;
            return new Error(safeToString(maybeError));
          }
          function withAppended(target, appendee) {
            var len = target.length;
            var ret = new Array(len + 1);
            var i;
            for (i = 0; i < len; ++i) {
              ret[i] = target[i];
            }
            ret[i] = appendee;
            return ret;
          }
          function getDataPropertyOrDefault(obj, key, defaultValue) {
            if (es5.isES5) {
              var desc = Object.getOwnPropertyDescriptor(obj, key);
              if (desc != null) {
                return desc.get == null && desc.set == null ? desc.value : defaultValue;
              }
            } else {
              return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
            }
          }
          function notEnumerableProp(obj, name, value) {
            if (isPrimitive(obj)) return obj;
            var descriptor = {
              value: value,
              configurable: true,
              enumerable: false,
              writable: true
            };
            es5.defineProperty(obj, name, descriptor);
            return obj;
          }
          function thrower(r) {
            throw r;
          }
          var inheritedDataKeys = function () {
            var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];
            var isExcludedProto = function isExcludedProto(val) {
              for (var i = 0; i < excludedPrototypes.length; ++i) {
                if (excludedPrototypes[i] === val) {
                  return true;
                }
              }
              return false;
            };
            if (es5.isES5) {
              var getKeys = Object.getOwnPropertyNames;
              return function (obj) {
                var ret = [];
                var visitedKeys = Object.create(null);
                while (obj != null && !isExcludedProto(obj)) {
                  var keys;
                  try {
                    keys = getKeys(obj);
                  } catch (e) {
                    return ret;
                  }
                  for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                      ret.push(key);
                    }
                  }
                  obj = es5.getPrototypeOf(obj);
                }
                return ret;
              };
            } else {
              var hasProp = {}.hasOwnProperty;
              return function (obj) {
                if (isExcludedProto(obj)) return [];
                var ret = [];

                /*jshint forin:false */
                enumeration: for (var key in obj) {
                  if (hasProp.call(obj, key)) {
                    ret.push(key);
                  } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                      if (hasProp.call(excludedPrototypes[i], key)) {
                        continue enumeration;
                      }
                    }
                    ret.push(key);
                  }
                }
                return ret;
              };
            }
          }();
          var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
          function isClass(fn) {
            try {
              if (typeof fn === "function") {
                var keys = es5.names(fn.prototype);
                var hasMethods = es5.isES5 && keys.length > 1;
                var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
                var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
                if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
                  return true;
                }
              }
              return false;
            } catch (e) {
              return false;
            }
          }
          function toFastProperties(obj) {
            /*jshint -W027,-W055,-W031*/
            function FakeConstructor() {}
            FakeConstructor.prototype = obj;
            var l = 8;
            while (l--) new FakeConstructor();
            return obj;
          }
          var rident = /^[a-z$_][a-z$_0-9]*$/i;
          function isIdentifier(str) {
            return rident.test(str);
          }
          function filledRange(count, prefix, suffix) {
            var ret = new Array(count);
            for (var i = 0; i < count; ++i) {
              ret[i] = prefix + i + suffix;
            }
            return ret;
          }
          function safeToString(obj) {
            try {
              return obj + "";
            } catch (e) {
              return "[no string representation]";
            }
          }
          function isError(obj) {
            return obj !== null && _typeof(obj) === "object" && typeof obj.message === "string" && typeof obj.name === "string";
          }
          function markAsOriginatingFromRejection(e) {
            try {
              notEnumerableProp(e, "isOperational", true);
            } catch (ignore) {}
          }
          function originatesFromRejection(e) {
            if (e == null) return false;
            return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
          }
          function canAttachTrace(obj) {
            return isError(obj) && es5.propertyIsWritable(obj, "stack");
          }
          var ensureErrorObject = function () {
            if (!("stack" in new Error())) {
              return function (value) {
                if (canAttachTrace(value)) return value;
                try {
                  throw new Error(safeToString(value));
                } catch (err) {
                  return err;
                }
              };
            } else {
              return function (value) {
                if (canAttachTrace(value)) return value;
                return new Error(safeToString(value));
              };
            }
          }();
          function classString(obj) {
            return {}.toString.call(obj);
          }
          function copyDescriptors(from, to, filter) {
            var keys = es5.names(from);
            for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (filter(key)) {
                try {
                  es5.defineProperty(to, key, es5.getDescriptor(from, key));
                } catch (ignore) {}
              }
            }
          }
          var asArray = function asArray(v) {
            if (es5.isArray(v)) {
              return v;
            }
            return null;
          };
          if (typeof Symbol !== "undefined" && Symbol.iterator) {
            var ArrayFrom = typeof Array.from === "function" ? function (v) {
              return Array.from(v);
            } : function (v) {
              var ret = [];
              var it = v[Symbol.iterator]();
              var itResult;
              while (!(itResult = it.next()).done) {
                ret.push(itResult.value);
              }
              return ret;
            };
            asArray = function asArray(v) {
              if (es5.isArray(v)) {
                return v;
              } else if (v != null && typeof v[Symbol.iterator] === "function") {
                return ArrayFrom(v);
              }
              return null;
            };
          }
          var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";
          function env(key, def) {
            return isNode ? process.env[key] : def;
          }
          function getNativePromise() {
            if (typeof Promise === "function") {
              try {
                var promise = new Promise(function () {});
                if ({}.toString.call(promise) === "[object Promise]") {
                  return Promise;
                }
              } catch (e) {}
            }
          }
          function domainBind(self, cb) {
            return self.bind(cb);
          }
          var ret = {
            isClass: isClass,
            isIdentifier: isIdentifier,
            inheritedDataKeys: inheritedDataKeys,
            getDataPropertyOrDefault: getDataPropertyOrDefault,
            thrower: thrower,
            isArray: es5.isArray,
            asArray: asArray,
            notEnumerableProp: notEnumerableProp,
            isPrimitive: isPrimitive,
            isObject: isObject,
            isError: isError,
            canEvaluate: canEvaluate,
            errorObj: errorObj,
            tryCatch: tryCatch,
            inherits: inherits,
            withAppended: withAppended,
            maybeWrapAsError: maybeWrapAsError,
            toFastProperties: toFastProperties,
            filledRange: filledRange,
            toString: safeToString,
            canAttachTrace: canAttachTrace,
            ensureErrorObject: ensureErrorObject,
            originatesFromRejection: originatesFromRejection,
            markAsOriginatingFromRejection: markAsOriginatingFromRejection,
            classString: classString,
            copyDescriptors: copyDescriptors,
            hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
            isNode: isNode,
            env: env,
            global: globalObject,
            getNativePromise: getNativePromise,
            domainBind: domainBind
          };
          ret.isRecentNode = ret.isNode && function () {
            var version = process.versions.node.split(".").map(Number);
            return version[0] === 0 && version[1] > 10 || version[0] > 0;
          }();
          if (ret.isNode) ret.toFastProperties(process);
          try {
            throw new Error();
          } catch (e) {
            ret.lastLineError = e;
          }
          module.exports = ret;
        }, {
          "./es5": 13
        }]
      }, {}, [4])(4);
    });
  })();
  qx.Promise.$$dbClassInfo = $$dbClassInfo;
})();
