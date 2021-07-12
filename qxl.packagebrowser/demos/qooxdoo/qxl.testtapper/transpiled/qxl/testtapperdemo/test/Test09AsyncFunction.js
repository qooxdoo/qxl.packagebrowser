function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.dev.unit.TestCase": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxl.testtapperdemo.test.Test09AsyncFunction", {
    extend: qx.dev.unit.TestCase,
    members: {
      "test01: async function": function () {
        var _test01AsyncFunction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var value;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                      resolve("resolved");
                    }, 1000);
                  });

                case 2:
                  value = _context.sent;
                  this.assertEquals("resolved", value, "Timeout Resolved");

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function test01AsyncFunction() {
          return _test01AsyncFunction.apply(this, arguments);
        }

        return test01AsyncFunction;
      }(),
      "test02: async function fail": function () {
        var _test02AsyncFunctionFail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var value;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                      reject("unresolved");
                    }, 1000);
                  });

                case 3:
                  value = _context2.sent;
                  _context2.next = 9;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  this.assertEquals("unresolved", _context2.t0, "Timeout Rejected");

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 6]]);
        }));

        function test02AsyncFunctionFail() {
          return _test02AsyncFunctionFail.apply(this, arguments);
        }

        return test02AsyncFunctionFail;
      }(),
      "test03: async function exception": function () {
        var _test03AsyncFunctionException = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var value, e;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return new Promise(function (resolve, reject) {
                    unknownFunctionCall();
                  });

                case 3:
                  value = _context3.sent;
                  _context3.next = 10;
                  break;

                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  e = _context3.t0;
                  this.assertEquals("unknownFunctionCall is not defined", e.message, "unknownFunctionCall");

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 6]]);
        }));

        function test03AsyncFunctionException() {
          return _test03AsyncFunctionException.apply(this, arguments);
        }

        return test03AsyncFunctionException;
      }(),
      "test04: async exception": function () {
        var _test04AsyncException = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var value, e;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return new Promise(function (resolve, reject) {
                    throw new Error("exc");
                  });

                case 3:
                  value = _context4.sent;
                  _context4.next = 10;
                  break;

                case 6:
                  _context4.prev = 6;
                  _context4.t0 = _context4["catch"](0);
                  e = _context4.t0;
                  this.assertEquals("exc", e.message, "throw Error");

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[0, 6]]);
        }));

        function test04AsyncException() {
          return _test04AsyncException.apply(this, arguments);
        }

        return test04AsyncException;
      }()
    }
  });
  qxl.testtapperdemo.test.Test09AsyncFunction.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Test09AsyncFunction.js.map?dt=1626058336543