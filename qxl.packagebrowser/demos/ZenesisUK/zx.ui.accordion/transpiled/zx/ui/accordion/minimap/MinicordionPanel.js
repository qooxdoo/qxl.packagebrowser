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
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "zx.ui.accordion.AccordionPanel": {},
      "qx.data.SingleValueBinding": {},
      "qx.ui.tooltip.ToolTip": {},
      "zx.ui.accordion.minimap.MinicordionHeader": {},
      "zx.ui.SkeletonText": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * Panel representation for the {@link zx.ui.accordion.minimap.Minicordion}
   */
  qx.Class.define("zx.ui.accordion.minimap.MinicordionPanel", {
    extend: qx.ui.container.Composite,
    /**
     * @param {zx.ui.accordion.AccordionPanel} panel The accordion panel to mirror
     */
    construct(panel) {
      qx.ui.container.Composite.constructor.call(this, new qx.ui.layout.VBox());
      this.setPanel(panel);
      panel.bind("label", this.getChildControl("tooltip"), "label");
      this.add(this.getChildControl("header"));
      this.add(this.getChildControl("content"));
    },
    properties: {
      appearance: {
        init: "accordion-minimap-panel",
        refine: true
      },
      /**
       * The {@link zx.ui.accordion.AccordionPanel} to mirror.
       */
      panel: {
        check: "zx.ui.accordion.AccordionPanel",
        nullable: false,
        event: "changePanel",
        apply: "_applyPanel"
      },
      /**
       * The percentage by which to scale the height of the panel.
       *
       * Interpreted as `1` = 100%, `0.5` = 50%, &c.
       *
       * ! In normal use, this is automatically updated by the accordion system.
       * ! Manual changes will be overwritten, and may not have the desired effect.
       */
      scaleFactor: {
        check: "Number",
        nullable: false,
        event: "changeScalefactor",
        apply: "_applyScaleFactor",
        init: 0.186
      }
    },
    members: {
      __P_66_0: null,
      __P_66_1: null,
      /**
       * Apply for the panel property.
       */
      _applyPanel(value, oldValue) {
        if (oldValue) {
          this.__P_66_0.forEach(binding => qx.data.SingleValueBinding.removeBindingFromObject(oldValue, binding));
          this.__P_66_0 = [];
          this.__P_66_1.forEach(listener => oldValue.removeListenerById(listener));
        }
        if (value) {
          this.__P_66_0 = [];
          this.__P_66_0.push(value.bind("label", this.getChildControl("header"), "value"));
          this.__P_66_0.push(value.bind("visibility", this, "visibility"));
          this.__P_66_1 = [];
          this.__P_66_1.push(value.addListener("sizeHintChanged", this._onPanelOpenChange, this));
        }
      },
      /**
       * Apply for the scaleFactor property.
       */
      _applyScaleFactor(value) {
        this._updateSize();
      },
      /**
       * Mirrors the open state of the panel.
       */
      _onPanelOpenChange(e) {
        this.getChildControl("content").setVisibility(e.getData() ? "visible" : "excluded");
        this._updateSize();
      },
      /**
       * Update the size of the panel to ensure changes to the scale factor are
       * reflected.
       */
      _updateSize() {
        this.getChildControl("content").setMaxHeight(Math.trunc(this.getPanel().getChildControl("content").getSizeHint().height * this.getScaleFactor()));
        this.getChildControl("header").setMaxHeight(Math.trunc(this.getPanel().getChildControl("header").getSizeHint().height * this.getScaleFactor()));
        this.getChildControl("content").setLines(Math.trunc(this.getPanel().getChildControl("content").getSizeHint().height * this.getScaleFactor() / 2));
      },
      /**
       * @override
       */
      _createChildControlImpl(id) {
        var _control;
        let control;
        switch (id) {
          case "tooltip":
            control = new qx.ui.tooltip.ToolTip("");
            break;
          case "header":
            control = new zx.ui.accordion.minimap.MinicordionHeader();
            control.setToolTip(this.getChildControl("tooltip"));
            break;
          case "content":
            control = new zx.ui.SkeletonText(Math.trunc(this.getPanel().getChildControl("content").getSizeHint().height * this.getScaleFactor() / 4));
            control.setToolTip(this.getChildControl("tooltip"));
            control.setVisibility(this.getPanel().getPanelOpen() ? "visible" : "excluded");
            control.setWidthScaleFactor(0.2);
            control.setAppearance("accordion-minimap-skeleton-text");
            control.init();
            break;
        }
        return (_control = control) !== null && _control !== void 0 ? _control : zx.ui.accordion.minimap.MinicordionPanel.superclass.prototype._createChildControlImpl.call(this, id);
      }
    }
  });
  zx.ui.accordion.minimap.MinicordionPanel.$$dbClassInfo = $$dbClassInfo;
})();
