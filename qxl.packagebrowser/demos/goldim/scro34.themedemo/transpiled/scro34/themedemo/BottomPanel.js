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
      "scro34.themedemo.ButtonPanel": {
        "construct": true
      },
      "qx.bom.Font": {},
      "qx.ui.basic.Label": {},
      "qx.ui.layout.HBox": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright:
       2024 Dmitrii Zolotov
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Dmitrii Zolotov (goldim)
  
  ************************************************************************ */

  /**
   * @usefont(JosefinSlabBold)
   */
  qx.Class.define("scro34.themedemo.BottomPanel", {
    extend: qx.ui.container.Composite,
    construct: function construct(docHeight) {
      qx.ui.container.Composite.constructor.call(this);
      this.__P_59_0 = docHeight;
      this.setLayout(new qx.ui.layout.Canvas());
      var buttonPanel = this.__P_59_1 = new scro34.themedemo.ButtonPanel();
      this.add(buttonPanel, {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      });
      this.add(this.createVersionInfo(), {
        bottom: 2,
        right: 0
      });
      this.addListener("mousemove", this._onMouseMove, this);
    },
    members: {
      _onMouseMove: function _onMouseMove(e) {
        var docHeight = this.__P_59_0;
        var buttonDockHeight = this._computeSizeHint().height;
        var buttonPanel = this.__P_59_1;
        var topHeight = e.getDocumentTop();
        if (!buttonPanel.hasActiveButtons() || topHeight >= docHeight - 20 && topHeight <= docHeight - 3) {
          buttonPanel.setVisibility("visible");
        } else if (topHeight <= docHeight - buttonDockHeight + 10 || topHeight >= docHeight - 3) {
          buttonPanel.setVisibility("excluded");
        }
      },
      createVersionInfo: function createVersionInfo() {
        var _this = this;
        var font = new qx.bom.Font(19, ["JosefinSlab Bold", "serif"]);
        var qooxdoo = new qx.ui.basic.Label("qooxdoo").set({
          font: font,
          paddingBottom: 3,
          cursor: "pointer"
        });
        qooxdoo.addListener("mouseover", function () {
          return qooxdoo.setTextColor("text-selected");
        });
        qooxdoo.addListener("mouseout", function () {
          return qooxdoo.setTextColor("text-label");
        });
        qooxdoo.addListener("click", function () {
          return _this.__P_59_1.pressButton("WebBrowser");
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(5).set({
          alignY: "middle"
        }));
        container.add(new qx.ui.basic.Label("powered by").set({
          font: "small"
        }));
        container.add(qooxdoo);
        container.add(new qx.ui.basic.Label(null).set({
          font: "small"
        }));
        return container;
      }
    }
  });
  scro34.themedemo.BottomPanel.$$dbClassInfo = $$dbClassInfo;
})();
