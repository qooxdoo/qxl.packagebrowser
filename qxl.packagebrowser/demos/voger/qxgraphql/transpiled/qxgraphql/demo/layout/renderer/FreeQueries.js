(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.form.renderer.AbstractRenderer": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      },
      "qx.ui.layout.VBox": {},
      "qx.ui.container.Composite": {},
      "qx.ui.core.Spacer": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /** ***************************************************************************
   * Simplified version of qx.ui.form.renderer.Single
   * It adds the labels above the widget instead of the left
   * The buttons row is placed on the right of the widgets instead 
   * of the bottom. 
   */
  qx.Class.define("qxgraphql.demo.layout.renderer.FreeQueries", {
    extend: qx.ui.form.renderer.AbstractRenderer,
    construct: function construct(form) {
      // initialize the renderer
      var layout = new qx.ui.layout.HBox(6);

      this._setLayout(layout);

      qx.ui.form.renderer.AbstractRenderer.constructor.call(this, form);
    },
    members: {
      __P_52_0: null,
      __P_52_1: null,

      /**
       * Add a group of form items with the corresponding names. The names
       * are displayed as label. No support for title or translation
       * as this is a demo application
       */
      addItems: function addItems(items, names, title, options) {
        // initialize the widgets column
        if (!this.__P_52_0) {
          var layout = new qx.ui.layout.VBox(5);
          this.__P_52_0 = new qx.ui.container.Composite(layout);

          this._add(this.__P_52_0, {
            flex: 1
          });
        }

        for (var i = 0; i < items.length; i++) {
          var label = this._createLabel(names[i], items[i]);

          this.__P_52_0._add(label);

          var item = items[i];
          label.setBuddy(item);

          this.__P_52_0.add(item, options[i]);

          this._connectVisibility(item, label);
        }
      },
      addButton: function addButton(button) {
        if (!this.__P_52_1) {
          // create the buttons column
          this.__P_52_1 = new qx.ui.container.Composite();

          this.__P_52_1.setMargin(5);

          var vbox = new qx.ui.layout.VBox();
          vbox.setAlignY("top");
          vbox.setSpacing(5);

          this.__P_52_1._setLayout(vbox); // add spacers so the buttons won't be added at the top 
          // of the column.


          this.__P_52_1.add(new qx.ui.core.Spacer(0, 50));

          this.__P_52_1.add(new qx.ui.core.Spacer(), {
            flex: 4
          });

          this._add(this.__P_52_1, {
            flex: 0
          });
        } // add the button before the second spacer


        var lastPosition = this.__P_52_1.getChildren().length - 1;

        this.__P_52_1.addAt(button, lastPosition);
      },

      /**
       * Creates a label for the given form item.
       *
       * @param name {String} The content of the label without the
       *   trailing * and :
       * @param item {qx.ui.core.Widget} The item, which has the required state.
       * @return {qx.ui.basic.Label} The label for the given item.
       */
      _createLabel: function _createLabel(name, item) {
        var label = new qx.ui.basic.Label(this._createLabelText(name, item)); // store labels for disposal

        this._labels.push(label);

        label.setRich(true);
        label.setAppearance("form-renderer-label");
        return label;
      },

      /*
       *****************************************************************************
       DESTRUCTOR
       *****************************************************************************
       */
      destruct: function destruct() {
        // first, remove all buttons from the button row because they
        // should not be disposed
        if (this.__P_52_1) {
          this.__P_52_1.removeAll();

          this._disposeObjects("__P_52_1");
        }
      }
    }
  });
  qxgraphql.demo.layout.renderer.FreeQueries.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FreeQueries.js.map?dt=1626060603484