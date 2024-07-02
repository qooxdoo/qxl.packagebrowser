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
  qx.Class.define("ville.embed.fluent.PinGlobe", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.12 3.14a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.21 3.02c-.37-.2-.77-.37-1.2-.49l.44-.22a1 1 0 0 0 .26-1.6l-4.05-4.06a1 1 0 0 0-1.6.26L9.29 7.04a2.5 2.5 0 0 1-1.31 1.2L4.39 9.69 9 14.3a5.6 5.6 0 0 0 .18 1.58L7 13.71 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 0 1 .34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46Zm3.43 8.01a8.9 8.9 0 0 0-.54 2.85h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91c-.19-.2-.33-.24-.42-.24-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 12 14h-1.98a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0a9.92 9.92 0 0 1 .82 3.68h1.98a4.5 4.5 0 0 0-2.8-3.68Zm2.8 4.68H17a9.92 9.92 0 0 1-.82 3.68 4.5 4.5 0 0 0 2.8-3.68Zm-4.47 4c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85h-2.98a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32a4.5 4.5 0 0 1-2.8-3.68H12a9.92 9.92 0 0 0 .82 3.68Z",
      FILLED: "M13.33 2.62a2 2 0 0 0-3.2.52L8.38 6.6a1.5 1.5 0 0 1-.78.72L4 8.75a1 1 0 0 0-.33 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.18 2.18a5.51 5.51 0 0 1 7.99-6.2 2 2 0 0 0 .21-3l-4.05-4.06Zm.22 8.53a8.9 8.9 0 0 0-.54 2.85h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91c-.19-.2-.33-.24-.42-.24-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 12 14h-1.98a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0a9.92 9.92 0 0 1 .82 3.68h1.98a4.5 4.5 0 0 0-2.8-3.68Zm2.8 4.68H17a9.92 9.92 0 0 1-.82 3.68 4.5 4.5 0 0 0 2.8-3.68Zm-4.47 4c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85h-2.98a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32a4.5 4.5 0 0 1-2.8-3.68H12a9.92 9.92 0 0 0 .82 3.68Z"
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
  ville.embed.fluent.PinGlobe.$$dbClassInfo = $$dbClassInfo;
})();
