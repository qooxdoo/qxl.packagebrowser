(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.ui.form.IModel": {
        "require": true
      },
      "ugpa.completer.MFilterMode": {
        "require": true
      },
      "qx.data.IListData": {},
      "ugpa.completer.IWidget": {},
      "ugpa.completer.IPopup": {},
      "qx.event.Timer": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
  
     Copyright: 2022
  
     License: MIT license
  
     Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru
  
  ************************************************************************ */

  qx.Class.define("ugpa.completer.Completer", {
    extend: qx.core.Object,
    implement: [qx.ui.form.IModel],
    include: [ugpa.completer.MFilterMode],
    construct: function construct(source, widget) {
      // noinspection JSAnnotator
      qx.core.Object.constructor.call(this);
      this.__P_34_0 = source;
      this.setWidget(widget);
      this.__P_34_1 = null;
    },
    destruct: function destruct() {
      this.__P_34_1 = null;
    },
    events: {
      "activated": "qx.event.type.Event",
      "highlighted": "qx.event.type.Event"
    },
    properties: {
      /** The delay in milliseconds between when a keystroke occurs and when a search is performed.
       *  A zero-delay makes sense for local data (more responsive),
       *  but can produce a lot of load for remote data,
       *  while being less responsive */
      delay: {
        init: 0,
        check: "Integer",
        event: "changeDelay"
      },
      enabled: {
        init: true,
        check: "Boolean",
        event: "changeEnabled"
      },
      model: {
        init: null,
        event: "changeModel",
        check: "qx.data.IListData"
      },
      /**
       * If set to true the first item will automatically
       * be focused when the menu is shown.
       */
      autoFocus: {
        init: false,
        check: "Boolean",
        event: "changeAutoFocus"
      },
      /**
       *  The case sensitivity of the matching
       */
      caseSensitivity: {
        init: "sensitive",
        check: ["insensitive", "sensitive"],
        event: "changeCaseSensitivity"
      },
      /**
       * The minimum number of characters a user must type before a search is performed.
       * Zero is useful for local data with just a few items,
       * but a higher value should be used
       * when a single character search could match a few thousand items.
       */
      minLength: {
        init: 1,
        check: "Integer",
        event: "changeMinLength"
      },
      /**
       * The maximum allowed size on screen of the completer, measured in items
       */
      maxVisibleItems: {
        init: 7,
        check: "Integer",
        event: "changeMaxVisibleItems"
      },
      widget: {
        init: null,
        apply: "_applyWidget",
        check: "ugpa.completer.IWidget"
      },
      popup: {
        init: null,
        apply: "_applyPopup",
        check: "ugpa.completer.IPopup"
      }
    },
    members: {
      _applyWidget: function _applyWidget(widget) {
        widget.addListener("input", this._onInput, this);
        widget.addListener("click", this._onFocus, this);
        widget.addListener("tap", this._onFocus, this);
        this.__P_34_2(this.getPopup());
      },
      __P_34_2: function __P_34_2(popup) {
        if (popup) {
          var widget = this.getWidget();
          if (widget) {
            popup.setWidth(widget.getWidth());
          }
        }
      },
      _applyPopup: function _applyPopup(popup) {
        this.__P_34_2(popup);
      },
      _onFocus: function _onFocus() {
        if (!this.getEnabled()) {
          this.getPopup().hide();
          return;
        }
        var value = this.getWidget().getValue();
        if (!value && this.getMinLength() > 0) {
          return;
        }
        this.__P_34_3();
        this.__P_34_4(value === null ? "" : value);
      },
      _onInput: function _onInput(e) {
        if (!this.getEnabled()) {
          return;
        }
        var input = e.getData();
        if (input.length < this.getMinLength()) {
          if (this.getPopup().isVisible()) {
            this.getPopup().hide();
          }
          return;
        }
        this.__P_34_5(input);
      },
      __P_34_5: function __P_34_5(input) {
        this.__P_34_6();
        this.__P_34_1 = qx.event.Timer.once(function () {
          this.__P_34_3();
          this.__P_34_4(input);
        }, this, this.getDelay());
      },
      __P_34_6: function __P_34_6() {
        if (this.__P_34_1) {
          this.__P_34_1.stop();
          this.__P_34_1 = null;
        }
      },
      __P_34_3: function __P_34_3() {
        var popup = this.getPopup();
        popup.show();
        popup.placeToWidget(this.getWidget());
      },
      __P_34_7: function __P_34_7() {
        if (this.getAutoFocus()) {
          var popup = this.getPopup();
          this._setupAutoFocus(popup);
        }
      },
      search: function search(value) {
        this.__P_34_5(value);
      },
      __P_34_4: function __P_34_4(input) {
        this._clearPopup();
        var values = this.filterByInput(input, this.__P_34_0);
        if (values.length) {
          values.slice(0, this.getMaxVisibleItems()).forEach(this._addItemOnPopup, this);
          this.__P_34_7();
        } else {
          this.getPopup().hide();
        }
      }
    }
  });
  ugpa.completer.Completer.$$dbClassInfo = $$dbClassInfo;
})();
