function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.scroll.AbstractScrollArea": {
        "construct": true,
        "require": true
      },
      "qx.ui.core.MRemoteChildrenHandling": {
        "require": true
      },
      "qx.ui.form.IModel": {
        "require": true
      },
      "qxgraphql.demo.views.widgets.MHeadersListModel": {
        "construct": true
      },
      "qx.data.marshal.Json": {
        "construct": true
      },
      "qxgraphql.demo.views.widgets.HeadersListItem": {
        "construct": true
      },
      "qx.data.controller.List": {
        "construct": true
      },
      "qx.data.Array": {},
      "qx.Bootstrap": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.container.Composite": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  qx.Class.define("qxgraphql.demo.views.widgets.HeadersList", {
    extend: qx.ui.core.scroll.AbstractScrollArea,
    include: [qx.ui.core.MRemoteChildrenHandling],
    implement: [qx.ui.form.IModel],
    construct: function construct(model) {
      qx.ui.core.scroll.AbstractScrollArea.constructor.call(this); // create the marshaler

      var marshalerDelegate = {
        getModelMixins: function getModelMixins() {
          return qxgraphql.demo.views.widgets.MHeadersListModel;
        }
      };
      this.__P_155_0 = new qx.data.marshal.Json(marshalerDelegate);

      this.__P_155_0.toClass({
        key: null,
        value: null
      }, true);

      this.__P_155_1 = this._createItemsContainer();

      this.__P_155_1.addListener("addChildWidget", this._onAddChild, this);

      this.getChildControl("pane").add(this.__P_155_1);

      var _this = this;

      var delegate = {
        bindItem: function bindItem(controller, item, id) {
          controller.bindProperty("", "model", null, item, id);
          controller.bindProperty("key", "key", null, item, id);
          controller.bindPropertyReverse("key", "key", null, item, id);
          controller.bindProperty("value", "value", null, item, id);
          controller.bindPropertyReverse("value", "value", null, item, id);
        },
        createItem: function createItem() {
          return new qxgraphql.demo.views.widgets.HeadersListItem();
        },
        configureItem: function configureItem(item) {
          item.addListener("delete", function (e) {
            var model = this.getModel();
            var itemModel = item.getModel();
            model.remove(itemModel);
          }, _this);
        }
      };
      this.__P_155_2 = new qx.data.controller.List(null, this);

      this.__P_155_2.setDelegate(delegate);

      this.initModel(model);
    },
    properties: {
      model: {
        nullable: true,
        event: "changeModel",
        apply: "_applyModel",
        transform: "_transformModel",
        check: function check(value) {
          return qx.Class.isSubClassOf(value.constructor, qx.data.Array) || qx.Bootstrap.getClass(value) === "Map";
        },
        dereference: true,
        deferredInit: true
      }
    },
    members: {
      __P_155_2: null,
      // overridden
      __P_155_0: null,
      __P_155_1: null,
      _createItemsContainer: function _createItemsContainer() {
        var layout = new qx.ui.layout.VBox(10);
        var container = new qx.ui.container.Composite(layout);
        container.setPaddingRight(3);
        return container;
      },
      getChildrenContainer: function getChildrenContainer() {
        return this.__P_155_1;
      },
      _applyModel: function _applyModel(value, old) {
        // initialize 
        if (value) {
          this.__P_155_3();

          value.addListener("changeBubble", this.__P_155_3, this);
        }

        this.__P_155_2.setModel(value);

        if (old && !old.isDisposed()) {
          old.dispose();
        }
      },

      /**
       * Transforms incoming value. 
       * * If the incoming value is of type `qx.data.Array` it returns it as it is.
       * * If the incoming value is of type `Map` it returns a `qx.data.Array` array of models.
       * @param value {qx.data.Array|Map|null}
       * @return qx.data.Array
       */
      _transformModel: function _transformModel(value) {
        var array;

        if (value === null) {
          array = null;
        } else if (qx.Class.isSubClassOf(value.constructor, qx.data.Array)) {
          array = value;
        } else {
          // model is a Map()
          array = new qx.data.Array();
          array.setAutoDisposeItems(true);

          var _iterator = _createForOfIteratorHelper(value.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  _value = _step$value[1];

              var model = this.createModelItem(key, _value);
              array.push(model);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return array;
      },
      // appends an empty item at the end of the model if needed
      __P_155_3: function __P_155_3() {
        var model = this.getModel();
        var length = model.getLength();
        var last = model.getItem(length - 1);

        if (!last || !last.isEmpty()) {
          var empty = this.__P_155_4();

          model.push(empty);
        }
      },
      //  returns an empty model item to add to the end
      __P_155_4: function __P_155_4() {
        return this.createModelItem(null, null);
      },
      createModelItem: function createModelItem(key, value) {
        return this.__P_155_0.toModel({
          key: key,
          value: value
        });
      },
      _onAddChild: function _onAddChild(e) {
        var child = e.getData();
        this.scrollChildIntoView(child);
      },
      _deleteItem: function _deleteItem(item) {
        this.remove(item);
        item.destroy();
      }
    },
    destruct: function destruct() {
      this.getChildrenContainer().destroy();

      this.__P_155_2.dispose();

      this.__P_155_0.dispose();
    }
  });
  qxgraphql.demo.views.widgets.HeadersList.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=HeadersList.js.map?dt=1626060613344