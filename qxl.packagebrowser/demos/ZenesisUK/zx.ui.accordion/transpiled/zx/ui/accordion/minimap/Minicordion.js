(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.core.Widget": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "zx.ui.accordion.minimap.MinicordionPanel": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "zx.ui.accordion.minimap.FloatyBit": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * A minimap for large {@link zx.ui.accordion.Accordion}s.
   */
  qx.Class.define("zx.ui.accordion.minimap.Minicordion", {
    extend: qx.ui.core.Widget,
    /**
     * @param {zx.ui.accordion.AccrodionPanelGroup} accordion The accordion to mirror
     */
    construct(accordion) {
      qx.ui.core.Widget.constructor.call(this);
      this._setLayout(new qx.ui.layout.Canvas());
      this.getChildControl("content");
      this.getChildControl("floatybit");
      this.__P_19_0 = new Map();
      this.__P_19_1 = new Map();
      accordion.addListener("panelAdd", this._onPanelAdd, this);
      accordion.addListener("panelRemove", this._onPanelRemove, this);
      accordion.getChildren().forEach(panel => this._addPanel(panel));
    },
    properties: {
      /**
       * The percentage by which to scale the height of the minimap.
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
    events: {
      /**
       * Fired when a panel is tapped.
       */
      panelTap: "qx.event.type.Data"
    },
    members: {
      /**
       * @type {Map<string, zx.ui.accordion.minimap.MinicordionPanel>}
       */
      __P_19_0: null,
      /**
       * @type {Map<string, unknown>}
       */
      __P_19_1: null,
      /**
       * Apply for the scaleFactor property.
       */
      _applyScaleFactor(value) {
        if (value) this.__P_19_0.forEach(panel => panel.setScaleFactor(value));
      },
      /**
       * Adds a panel to the minimap when it is added to the accordion.
       */
      _onPanelAdd(e) {
        this._addPanel(e.getData());
      },
      /**
       * Removes a panel from the minimap when it is removed from the accordion.
       */
      _onPanelRemove(e) {
        this._removePanel(e.getData());
      },
      /**
       * Adds a panel to the minimap.
       *
       * @param {zx.ui.accordion.AccordionPanel} panel The panel to add
       */
      _addPanel(panel) {
        const panelHash = panel.toHashCode();
        if (this.__P_19_0.has(panelHash)) this._removePanel(this.__P_19_0.get(panelHash));
        const minicordionPanel = new zx.ui.accordion.minimap.MinicordionPanel(panel);
        minicordionPanel.setScaleFactor(this.getScaleFactor());
        this.getChildControl("content")._add(minicordionPanel);
        this.__P_19_1.set(panelHash, minicordionPanel.addListener("tap", () => this.fireDataEvent("panelTap", panel)));
        this.__P_19_0.set(panelHash, minicordionPanel);
      },
      /**
       * Removes a panel from the minimap.
       *
       * @param {zx.ui.accordion.AccordionPanel} panel The panel to remove
       */
      _removePanel(panel) {
        const panelHash = panel.toHashCode();
        if (this.__P_19_0.has(panelHash)) {
          this.getChildControl("content")._remove(this.__P_19_0.get(panelHash));
          this.__P_19_0.get(panelHash).removeListener(this.__P_19_1.get(panelHash));
          this.__P_19_0.get(panelHash).dispose();
          this.__P_19_0.delete(panelHash);
          this.__P_19_1.delete(panelHash);
        }
      },
      /**
       * @override
       */
      _createChildControlImpl(id) {
        var _control;
        let control;
        switch (id) {
          case "content":
            control = new qx.ui.container.Composite(new qx.ui.layout.VBox());
            this._add(control, {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            });
            break;
          case "floatybit":
            control = new zx.ui.accordion.minimap.FloatyBit();
            this._add(control, {
              left: 0,
              right: 0,
              top: 0
            });
            this.addListener("roll", control.onWheelRoll, control);
            break;
        }
        return (_control = control) !== null && _control !== void 0 ? _control : zx.ui.accordion.minimap.Minicordion.superclass.prototype._createChildControlImpl.call(this, id);
      }
    }
  });
  zx.ui.accordion.minimap.Minicordion.$$dbClassInfo = $$dbClassInfo;
})();
