(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "ville.embed.fluent.Abstract": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);
  /* ************************************************************************
     License:
       MIT: https://opensource.org/licenses/MIT
     Authors:
       * Chris Eskew (SQville) sqville@gmail.com
  ************************************************************************ */
  qx.Class.define("ville.embed.fluent.CellularWarning", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.5 4a.5.5 0 0 1 .5.41v7.12l-.7-1.42c-.09-.17-.19-.31-.3-.44V4.5c0-.28.23-.5.5-.5ZM10 15.53l1-2V8.4a.5.5 0 0 0-1 .1v7.03Zm3-5.85c.27-.32.62-.52 1-.62V6.41a.5.5 0 0 0-1 .1v3.17ZM7.5 10a.5.5 0 0 1 .5.4v5.1a.5.5 0 0 1-.99.09v-5.1c0-.27.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.4v3.1a.5.5 0 0 1-1 .09v-3.1c0-.27.22-.5.5-.5Zm9.1-1.45-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z",
      FILLED: "M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v3.79l-1.47 2.93a.75.75 0 0 1-.02-.1l-.01-.12v-6.5c0-.41.34-.75.75-.75ZM13 9.68c.4-.45.95-.68 1.5-.68V6.64a.75.75 0 0 0-1.5.11v2.93Zm3.3.43 1.19 2.39.01-7.76v-.11a.74.74 0 0 0-1.49.12v4.93c.1.12.2.27.28.43Zm-2.7.44-3.5 7A1 1 0 0 0 11 19h7a1 1 0 0 0 .9-1.45l-3.5-7a1 1 0 0 0-1.8 0ZM15 12.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 1 0Zm-.5 5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    },
    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */
    /**
     * @param size {Integer} The size of the icon in px. Sets width and height to this value.
     * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
     * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
     * @param title {String} If included, adds a title tag to the svg root tag. 
     */
    construct: function construct(size, color, iconstyle, title) {
      ville.embed.fluent.Abstract.constructor.call(this);
      if (size != null) {
        this.setWidth(size);
        this.setHeight(size);
      }
      if (color != null) this.setTextColor(color);
      if (iconstyle != null) this.setIconStyle(iconstyle);
      if (title != null) this.setTitle(title);

      //prep regular
      this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
      //prep filled
      this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
      if (this.getIconStyle() == "filled") this.setHtml(this._htmlfilled);else this.setHtml(this._htmlregular);
    }
  });
  ville.embed.fluent.CellularWarning.$$dbClassInfo = $$dbClassInfo;
})();
