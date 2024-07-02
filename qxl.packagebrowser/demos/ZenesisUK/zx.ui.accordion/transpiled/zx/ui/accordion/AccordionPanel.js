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
      "qx.ui.core.MRemoteChildrenHandling": {
        "require": true
      },
      "qx.ui.core.MRemoteLayoutHandling": {
        "require": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "zx.ui.accordion.AccordionHeader": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * A single panel in an accordion.
   *
   * This class is the container for the content of the panel, and the header.
   */
  qx.Class.define("zx.ui.accordion.AccordionPanel", {
    extend: qx.ui.container.Composite,
    include: [qx.ui.core.MRemoteChildrenHandling, qx.ui.core.MRemoteLayoutHandling],
    /**
     * @param {string} [label] The label to display in the header.
     */
    construct(label) {
      qx.ui.container.Composite.constructor.call(this, new qx.ui.layout.VBox());
      this.setLabel(label !== null && label !== void 0 ? label : "");
      this._add(this.getChildControl("header"));
      this._add(this.getChildControl("content"));
      this.setPanelOpen(false);
      this.getChildControl("header").addListener("tap", this._onTap, this);
    },
    properties: {
      appearance: {
        init: "accordion-panel",
        refine: true
      },
      /**
       * The label to display in the header.
       */
      label: {
        check: "String",
        nullable: false,
        event: "changeLabel",
        apply: "_applyLabel"
      },
      /**
       * Whether the panel is open or closed.
       * - `true` = open
       * - `false` = closed
       */
      panelOpen: {
        check: "Boolean",
        nullable: false,
        event: "changePanelOpen",
        apply: "_applyPanelOpen"
      }
    },
    events: {
      /**
       * fired when the size hint of the panel changes
       */
      sizeHintChanged: "qx.event.type.Data"
    },
    members: {
      _forwardStates: {
        open: true
      },
      /**
       * Returns the content widget. Necessary implementation for
       * {@link qx.ui.core.MRemoteChildrenHandling}.
       */
      getChildrenContainer() {
        return this.getChildControl("content");
      },
      /**
       * Apply for the panelOpen property.
       */
      _applyPanelOpen(value) {
        this.getChildControl("content").setVisibility(value ? "visible" : "excluded");
        if (value) this.addState("open");else this.removeState("open");
      },
      /**
       * Apply for the label property.
       */
      _applyLabel(value) {
        this.getChildControl("header").setLabel(value);
      },
      /**
       * Toggles the panelOpen property when the header is tapped.
       */
      _onTap(e) {
        this.setPanelOpen(!this.getPanelOpen());
        e.stopPropagation();
      },
      /**
       * @override
       */
      _createChildControlImpl(id) {
        var _control;
        let control;
        switch (id) {
          case "header":
            control = new zx.ui.accordion.AccordionHeader(this.getLabel());
            break;
          case "content":
            control = new qx.ui.container.Composite(new qx.ui.layout.VBox());
            break;
        }
        return (_control = control) !== null && _control !== void 0 ? _control : zx.ui.accordion.AccordionPanel.superclass.prototype._createChildControlImpl.call(this, id);
      },
      /**
       * The last recorded height by {@link #renderLayout}, if any.
       *
       * @type {number | null}
       */
      __P_4_0: null,
      /**
       * @override
       */
      renderLayout(left, top, width, height) {
        if (height !== this.__P_4_0) {
          this.__P_4_0 = height;
          this.fireDataEvent("sizeHintChanged", this.getPanelOpen());
        }
        return zx.ui.accordion.AccordionPanel.superclass.prototype.renderLayout.call(this, left, top, width, height);
      }
    }
  });
  zx.ui.accordion.AccordionPanel.$$dbClassInfo = $$dbClassInfo;
})();
