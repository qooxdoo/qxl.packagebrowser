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
  qx.Class.define("ville.embed.fluent.EmojiSadSlight", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.3 2.5c-1.27 0-2.52.38-3.58 1.08a.5.5 0 0 0 .56.84c.9-.6 1.95-.92 3.02-.92h.8a.5.5 0 0 0 0-1h-.8ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
      FILLED: "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.3 4.5h.8a.5.5 0 0 1 0 1h-.8c-1.07 0-2.13.32-3.02.92a.5.5 0 1 1-.56-.84A6.45 6.45 0 0 1 12.8 12Z"
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
  ville.embed.fluent.EmojiSadSlight.$$dbClassInfo = $$dbClassInfo;
})();