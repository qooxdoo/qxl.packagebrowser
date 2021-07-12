(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.popup.Popup": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.ui.basic.Atom": {
        "construct": true
      },
      "qx.bom.Document": {},
      "qx.event.Timer": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /**
   * A singleton instance of a popup to display informational text (and optionally, an icon) to the user.
   * @asset(icon/32/status/dialog-information.png)
   */
  qx.Class.define("qxl.packagebrowser.Popup", {
    type: "singleton",
    extend: qx.ui.popup.Popup,
    statics: {
      icon: {
        "waiting": "qxl/packagebrowser/icon/ajax-loader.gif",
        "info": "icon/32/status/dialog-information.png"
      }
    },
    construct: function construct() {
      qx.ui.popup.Popup.constructor.call(this, new qx.ui.layout.Canvas());
      this.set({
        decorator: "window",
        minWidth: 100,
        minHeight: 30,
        padding: 10,
        backgroundColor: "#f0f0f0",
        autoHide: false
      });
      this.__P_31_0 = new qx.ui.basic.Atom();

      this.__P_31_0.getChildControl("label").set({
        rich: true,
        wrap: true
      });

      this.add(this.__P_31_0);
      this.addListenerOnce("appear", this.center, this);
    },
    members: {
      __P_31_0: null,

      /**
       * Center the widget
       * @return {qxl.packagebrowser.Popup}
       */
      center: function center() {
        if (!this.isVisible()) {
          this.addListenerOnce("appear", this.center, this);
          return this;
        }

        var bounds = this.getBounds();

        if (!bounds) {
          return this;
        }

        this.set({
          marginTop: Math.round((qx.bom.Document.getHeight() - bounds.height) / 2),
          marginLeft: Math.round((qx.bom.Document.getWidth() - bounds.width) / 2)
        });
        return this;
      },

      /**
       * Displays the given text. Can optionally be placed next to a widget
       * @param text {String|false} The text to display. If false, hide the widget
       * @param widgetToPlaceTo {qx.ui.core.Widget|undefined} If given, place the
       * info panel next to this widget
       * @return {qxl.packagebrowser.Popup}
       * @ignore(widgetToPlaceTo)
       */
      display: function display(text) {
        var _this = this;

        var widgetToPlaceTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!text) {
          this.hide();
        }

        this.__P_31_0.setLabel(text);

        this.show();

        if (widgetToPlaceTo) {
          this.set({
            marginTop: 0,
            marginLeft: 0
          });

          if (widgetToPlaceTo.isVisible()) {
            this.placeToWidget(widgetToPlaceTo, true);
          } else {
            widgetToPlaceTo.addListenerOnce("appear", function () {
              _this.placeToWidget(widgetToPlaceTo, true);
            });
          }
        } else {
          qx.event.Timer.once(this.center, this, 100);
        }

        return this;
      },

      /**
       * Return the content of the text label
       * @return {String}
       */
      getDisplayedText: function getDisplayedText() {
        return this.__P_31_0.getLabel();
      },

      /**
       * When displaying the info, show the icon associated with the given alias
       * @param alias
       * @return {qxl.packagebrowser.Popup}
       */
      useIcon: function useIcon(alias) {
        var iconpath = qxl.packagebrowser.Popup.icon[alias];

        if (!iconpath) {
          throw new Error("Icon alias \"".concat(alias, "\" is invalid."));
        }

        this.__P_31_0.setIcon(iconpath);

        return this;
      },

      /**
       * Show the info pane. Overridden to return instance & allow chaining method calls.
       * @return {qxl.packagebrowser.Popup}
       */
      show: function show() {
        qxl.packagebrowser.Popup.prototype.show.base.call(this);
        return this;
      }
    },

    /**
      * Destructor
      */
    destruct: function destruct() {
      this._disposeObjects("__P_31_0");
    }
  });
  qxl.packagebrowser.Popup.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Popup.js.map?dt=1626055236791