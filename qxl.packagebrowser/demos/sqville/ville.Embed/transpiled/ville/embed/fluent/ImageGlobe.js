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
  qx.Class.define("ville.embed.fluent.ImageGlobe", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.55 2.15A8.9 8.9 0 0 0 4.01 5h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91C5.73 1.04 5.59 1 5.5 1c-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 3 5H1.03a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0A9.92 9.92 0 0 1 7.99 5h1.98a4.5 4.5 0 0 0-2.8-3.68ZM9.97 6H8a9.92 9.92 0 0 1-.82 3.68A4.5 4.5 0 0 0 9.97 6ZM5.5 10c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85H4.01a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32A4.5 4.5 0 0 1 1.03 6H3a9.92 9.92 0 0 0 .82 3.68ZM14 4h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2Zm0 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM6 16h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58A2 2 0 0 0 6 16Z",
      FILLED: "M4.55 2.15A8.9 8.9 0 0 0 4.01 5h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91C5.73 1.04 5.59 1 5.5 1c-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 3 5H1.03a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0A9.92 9.92 0 0 1 7.99 5h1.98a4.5 4.5 0 0 0-2.8-3.68ZM9.97 6H8a9.92 9.92 0 0 1-.82 3.68A4.5 4.5 0 0 0 9.97 6ZM5.5 10c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85H4.01a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32A4.5 4.5 0 0 1 1.03 6H3a9.92 9.92 0 0 0 .82 3.68ZM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 3 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 0 0-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-3.6c.75.38 1.6.6 2.5.6Zm7-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 0 0-.7 0l-5.38 5.3Z"
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
  ville.embed.fluent.ImageGlobe.$$dbClassInfo = $$dbClassInfo;
})();
