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
      "qx.ui.basic.Label": {},
      "qx.ui.basic.Image": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * The header segment for an {@link zx.ui.accordion.AccordionPanel}
   */
  qx.Class.define("zx.ui.accordion.AccordionHeader", {
    extend: qx.ui.container.Composite,
    /**
     * @param {string} [label] The label to display in the header.
     */
    construct(label) {
      qx.ui.container.Composite.constructor.call(this, new qx.ui.layout.Canvas());
      this.setLabel(label !== null && label !== void 0 ? label : "");
      this._add(this.getChildControl("label"), {
        left: 0,
        top: 0,
        bottom: 0
      });
      this._add(this.getChildControl("icon"), {
        right: 0,
        top: 0,
        bottom: 0
      });
    },
    properties: {
      /**
       * The label to display in the header.
       */
      label: {
        check: "String",
        nullable: false,
        event: "changeLabel",
        apply: "_applyLabel"
      }
    },
    members: {
      _forwardStates: {
        open: true
      },
      /**
       * Apply for the label property.
       */
      _applyLabel(value) {
        this.getChildControl("label").setValue(value);
      },
      /**
       * Apply for the icon property.
       */
      _applyIcon(value) {
        this.getChildControl("icon").setSource(value);
      },
      /**
       * @override
       */
      _createChildControlImpl(id) {
        let control;
        switch (id) {
          case "label":
            control = new qx.ui.basic.Label(this.getLabel());
            return control;
          case "icon":
            control = new qx.ui.basic.Image();
            return control;
        }
        return zx.ui.accordion.AccordionHeader.superclass.prototype._createChildControlImpl.call(this, id);
      }
    }
  });
  zx.ui.accordion.AccordionHeader.$$dbClassInfo = $$dbClassInfo;
})();
