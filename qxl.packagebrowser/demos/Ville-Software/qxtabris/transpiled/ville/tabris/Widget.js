function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
      "ville.tabris.theme.Appearance": {},
      "qx.Bootstrap": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /**
   * Widget
   * @ignore(tabris)
   */
  qx.Class.define("ville.tabris.Widget", {
    extend: qx.core.Object,
    construct: function construct(attributes) {
      this._attributes = attributes;
      this._nonsettableprops = ['padding'];
      this.initAppearance();
      if (this._initattributes) this.Widget = tabris.Widget(this._initattributes);else this.Widget = tabris.Widget(_objectSpread({}, attributes));
    },
    properties: {
      appearance: {
        init: "widget",
        nullable: true,
        check: "String",
        apply: "_applyAppearance"
      }
    },
    members: {
      Widget: null,
      _attributes: null,
      _initattributes: null,
      _nonsettableprops: null,
      _applyAppearance: function _applyAppearance(value) {
        if (value) {
          if (value in ville.tabris.theme.Appearance) {
            var firstlevel = null;
            var secondlevel = null;
            var baselevel = null;
            var appearance = ville.tabris.theme.Appearance[value];
            if ('include' in appearance) {
              if (appearance.include in ville.tabris.theme.Appearance) {
                firstlevel = ville.tabris.theme.Appearance[appearance.include];
                if ('include' in firstlevel) {
                  if (firstlevel.include in ville.tabris.theme.Appearance) {
                    secondlevel = ville.tabris.theme.Appearance[firstlevel.include];
                    if ('include' in secondlevel) {
                      if (secondlevel.include in ville.tabris.theme.Appearance) {
                        baselevel = ville.tabris.theme.Appearance[secondlevel.include];
                      }
                    }
                  }
                }
              }
            }

            // Execute style functions on each before merging objects
            var target = {};
            if (baselevel) {
              if ('style' in baselevel) {
                if (qx.Bootstrap.isFunction(baselevel.style)) qx.Bootstrap.objectMergeWith(target, baselevel.style(), true);else qx.Bootstrap.objectMergeWith(target, baselevel, true);
              } else {
                qx.Bootstrap.objectMergeWith(target, baselevel, true);
              }
            }
            if (secondlevel) {
              if ('style' in secondlevel) {
                if (qx.Bootstrap.isFunction(secondlevel.style)) qx.Bootstrap.objectMergeWith(target, secondlevel.style(), true);else qx.Bootstrap.objectMergeWith(target, secondlevel, true);
              } else {
                qx.Bootstrap.objectMergeWith(target, secondlevel, true);
              }
            }
            if (firstlevel) {
              if ('style' in firstlevel) {
                if (qx.Bootstrap.isFunction(firstlevel.style)) qx.Bootstrap.objectMergeWith(target, firstlevel.style(), true);else qx.Bootstrap.objectMergeWith(target, firstlevel, true);
              } else {
                qx.Bootstrap.objectMergeWith(target, firstlevel, true);
              }
            }
            if (appearance) {
              if ('style' in appearance) {
                if (qx.Bootstrap.isFunction(appearance.style)) qx.Bootstrap.objectMergeWith(target, appearance.style(), true);else qx.Bootstrap.objectMergeWith(target, appearance, true);
              } else {
                qx.Bootstrap.objectMergeWith(target, appearance, true);
              }
            }
            if (this._attributes) {
              qx.Bootstrap.objectMergeWith(target, this._attributes, true);
              this._attributes = null;
            }
            if (this.Widget) {
              if (this._nonsettableprops) {
                this._nonsettableprops.forEach(function (prop) {
                  delete target[prop];
                });
              }
              this.Widget.set(target);
            } else {
              this._initattributes = target;
            }
          }
        }
      }
    }
  });
  ville.tabris.Widget.$$dbClassInfo = $$dbClassInfo;
})();
