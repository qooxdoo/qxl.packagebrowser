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
  qx.Class.define("ville.embed.fluent.KeyReset", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 .5C7 4.42 9.42 2 12.5 2S18 4.42 18 7.5c0 1-.26 1.93-.7 2.74a4.99 4.99 0 0 0-.83-.59c.34-.63.53-1.37.53-2.15C17 4.98 15.02 3 12.5 3a4.45 4.45 0 0 0-4.4 5.46c.1.52.02 1.13-.41 1.56l-4.54 4.54a.5.5 0 0 0-.15.35v1.59c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V16a1 1 0 0 1 1-1h1v-1a1 1 0 0 1 1-1h.38A1.5 1.5 0 0 0 9 14v1a1 1 0 0 1-1 1H7v.5c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 2 16.5v-1.59c0-.4.16-.78.44-1.06l4.54-4.54c.13-.13.2-.37.14-.64A5.62 5.62 0 0 1 7 7.5Zm4.85 1.35a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 11H14a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z",
      FILLED: "M12.5 2a5.45 5.45 0 0 0-5.38 6.67c.06.27 0 .5-.14.64l-4.54 4.54A1.5 1.5 0 0 0 2 14.91v1.59c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V16h1a1 1 0 0 0 1-1v-1c0-.51.26-.96.65-1.23l-1.21-1.2a1.5 1.5 0 0 1 0-2.13l2-2A1.5 1.5 0 0 1 12.9 9H14a5 5 0 0 1 3.3 1.24A5.54 5.54 0 0 0 12.5 2ZM14 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-2.15 3.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 11H14a3 3 0 1 1-3 3 .5.5 0 1 0-1 0 4 4 0 1 0 4-4h-3.3l1.15-1.15Z"
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
  ville.embed.fluent.KeyReset.$$dbClassInfo = $$dbClassInfo;
})();
