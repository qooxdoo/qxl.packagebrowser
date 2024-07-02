(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Mixin.define("ugpa.completer.MFilterMode", {
    construct: function construct() {
      this.__P_97_0 = this.__P_97_1();
    },
    destruct: function destruct() {
      this.__P_97_0 = null;
    },
    properties: {
      completionColumn: {
        nullable: true,
        init: null
      },
      filterMode: {
        init: "startsWith",
        check: ["startsWith", "contains", "endsWith"],
        apply: "_applyFilterMode",
        event: "changeFilterMode"
      }
    },
    members: {
      _applyFilterMode: function _applyFilterMode() {
        this.__P_97_0 = this.__P_97_1();
      },
      filterByInput: function filterByInput(input, source) {
        var values;
        if (this.getCaseSensitivity() === "insensitive") {
          values = this.__P_97_2(input, source);
        } else {
          values = this.__P_97_3(input, source);
        }
        return values;
      },
      __P_97_2: function __P_97_2(input, source) {
        var _this = this;
        input = input.toLowerCase();
        return source.filter(function (value) {
          value = _this.__P_97_4(value);
          value = value.toLowerCase();
          return _this.__P_97_0(input)(value);
        }, this);
      },
      __P_97_3: function __P_97_3(input, source) {
        var _this2 = this;
        return source.filter(function (value) {
          value = _this2.__P_97_4(value);
          return _this2.__P_97_0(input)(value);
        }, this);
      },
      __P_97_4: function __P_97_4(value) {
        if (this.getCompletionColumn()) {
          return value.get(this.getCompletionColumn());
        }
        return value;
      },
      __P_97_1: function __P_97_1() {
        var table = {
          startsWith: function startsWith(input) {
            return function (value) {
              return value.startsWith(input);
            };
          },
          contains: function contains(input) {
            return function (value) {
              return value.includes(input);
            };
          },
          endsWith: function endsWith(input) {
            return function (value) {
              return value.endsWith(input);
            };
          }
        };
        return table[this.getFilterMode()];
      }
    }
  });
  ugpa.completer.MFilterMode.$$dbClassInfo = $$dbClassInfo;
})();
