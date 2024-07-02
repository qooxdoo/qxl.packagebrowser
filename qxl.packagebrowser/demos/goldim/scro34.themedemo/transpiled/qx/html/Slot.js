(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.html.Element": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2023 ZenesisUK https://www.zenesis.com/
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * The slot turns JSX from a syntax convenience into a declaratively expressive system.
   *
   * Passing children to a custom tag:
   * ```jsx
   * const MyFirstSlot = () => (
   *   <p>
   *     <slot />
   *   </p>
   * );
   *
   * const UseFirstSlot = (
   *   <MyFirstSlot>
   *     Lorem Ipsum Dolor Sit Amet
   *   </MyFirstSlot>
   * );
   * ```
   * Output:
   * ```html
   * <p>
   *   Lorem Ipsum Dolor Sit Amet
   * </p>
   * ```
   *
   * Declared children of the slot are the default children to use when no
   * children are passed or injected. Default children may be *any* valid JSX.
   *
   * Slots are named by passing a `name` attribute to the slot, and used by
   * passing a corresponding `slot` attribute to the child. In this way, slots
   * can be used to declare multiple remote children of the Custom Tag.
   */
  qx.Class.define("qx.html.Slot", {
    extend: qx.html.Element,
    /**
     * Creates a new Slot
     *
     * @see constructor for {Element}
     */
    construct: function construct(slotName) {
      if (typeof slotName === "string" && !(slotName !== null && slotName !== void 0 && slotName.match(/^[a-zA-Z0-9\-\_]+$/))) {
        throw new Error("Slot name \"".concat(slotName, "\" is invalid! Slot names may only contain alphanumeric characters, hyphens, and underscores."));
      }
      qx.html.Element.constructor.call(this, "slot", {}, {
        name: slotName !== null && slotName !== void 0 ? slotName : qx.html.Slot.DEFAULT
      });
      this._defaultChildren = [];
    },
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**@override */inject: function inject() {
        throw new Error("Cannot inject into <slot>! Injections only work for the top-most element of a JSX expression.");
      },
      /**@override */_serializeImpl: function _serializeImpl(serializer) {
        var _this$_children;
        serializer.openTag(this._nodeName);
        serializer.pushQxObject(this);
        var id = serializer.getQxObjectIdFor(this);
        if (id) {
          serializer.setAttribute("data-qx-object-id", "\"".concat(id, "\""));
        }

        // Children
        if ((_this$_children = this._children) !== null && _this$_children !== void 0 && _this$_children.length) {
          for (var i = 0; i < this._children.length; i++) {
            this._children[i]._serializeImpl(serializer);
          }
        } else {
          for (var i = 0; i < this._defaultChildren.length; i++) {
            this._defaultChildren[i]._serializeImpl(serializer);
          }
        }
        serializer.closeTag();
        serializer.popQxObject(this);
      },
      /*
      ---------------------------------------------------------------------------
        SLOT API
      ---------------------------------------------------------------------------
      */

      _defaultChildren: null,
      /**
       * @returns {ReadonlyArray<qx.html.Node>} The default children of this slot
       */
      getDefaultChildren: function getDefaultChildren() {
        return this._defaultChildren;
      },
      addDefaultChild: function addDefaultChild(child) {
        try {
          this._defaultChildren.push(child);
        } catch (e) {
          throw new Error("Cannot modify default children of <slot> outside of declaration!");
        }
      },
      sealDefaultChildren: function sealDefaultChildren() {
        Object.seal(this._defaultChildren);
      },
      getName: function getName() {
        return this.getAttribute("name");
      }
    },
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */
    statics: {
      DEFAULT: "qx.html.Slot.DEFAULT"
    }
  });
  qx.html.Slot.$$dbClassInfo = $$dbClassInfo;
})();
