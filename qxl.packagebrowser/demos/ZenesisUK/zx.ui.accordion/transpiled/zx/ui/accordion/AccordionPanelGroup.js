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
      "qx.ui.core.MChildrenHandling": {
        "require": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2023 ZenesisUK
  
     License: MIT license
  
     Authors: Will Johnson (WillsterJohnson)
  
  ************************************************************************ */

  /**
   * This class exists to fire events when an {@link zx.ui.accordion.AccordionPanel}
   * is added or removed from the {@link zx.ui.accordion.Accordion}.
   */
  qx.Class.define("zx.ui.accordion.AccordionPanelGroup", {
    extend: qx.ui.core.Widget,
    include: [qx.ui.core.MChildrenHandling],
    construct() {
      qx.ui.core.Widget.constructor.call(this);
      this._setLayout(new qx.ui.layout.VBox());
    },
    events: {
      /**
       * Fired when a panel is added to the group.
       */
      panelAdd: "qx.event.type.Data",
      /**
       * Fired when a panel is removed from the group.
       */
      panelRemove: "qx.event.type.Data"
    },
    members: {
      /**
       * @override
       */
      _afterAddChild(child) {
        this.fireDataEvent("panelAdd", child);
      },
      /**
       * @override
       */
      _afterRemoveChild(child) {
        this.fireDataEvent("panelRemove", child);
      }
    }
  });
  zx.ui.accordion.AccordionPanelGroup.$$dbClassInfo = $$dbClassInfo;
})();
