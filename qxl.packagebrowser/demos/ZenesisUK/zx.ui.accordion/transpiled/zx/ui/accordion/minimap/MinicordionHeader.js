(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * Header for the {@link zx.ui.accordion.minimap.MinicordionPanel}.
   */
  qx.Class.define("zx.ui.accordion.minimap.MinicordionHeader", {
    extend: qx.ui.container.Composite,
    /**
     * @param {string} [label] The label to display in the header.
     */
    construct(label) {
      qx.ui.container.Composite.constructor.call(this, new qx.ui.layout.Canvas());
      this.getChildControl("label").setValue(label !== null && label !== void 0 ? label : "");
      this._add(this.getChildControl("label"), {
        left: 0,
        top: 0,
        bottom: 0
      });
    },
    properties: {
      /**
       * The label to display in the header.
       */
      value: {
        check: "String",
        nullable: false,
        event: "changeValue",
        apply: "_applyValue"
      }
    },
    members: {
      /**
       * Apply for the label property.
       */
      _applyValue(value) {
        this.getChildControl("label").setValue(value);
      },
      /**
       * @override
       */
      _createChildControlImpl(id) {
        switch (id) {
          case "label":
            return new qx.ui.basic.Label();
        }
        return zx.ui.accordion.minimap.MinicordionHeader.superclass.prototype._createChildControlImpl.call(this, id);
      }
    }
  });
  zx.ui.accordion.minimap.MinicordionHeader.$$dbClassInfo = $$dbClassInfo;
})();
