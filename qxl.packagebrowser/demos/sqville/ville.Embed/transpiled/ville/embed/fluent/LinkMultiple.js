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
  qx.Class.define("ville.embed.fluent.LinkMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H9.5a.5.5 0 0 1 0-1H11a3 3 0 1 0 0-6H5a3 3 0 0 0-.87 5.87 5 5 0 0 0-.13 1A4 4 0 0 1 1 8Zm17 4a3 3 0 0 0-2.13-2.87c.08-.32.12-.66.13-1A4 4 0 0 1 15 16H9a4 4 0 0 1 0-8h1.5a.5.5 0 0 1 0 1H9a3 3 0 1 0 0 6h6a3 3 0 0 0 3-3Z",
      FILLED: "M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H9.75a.75.75 0 0 1 0-1.5H11a2.5 2.5 0 0 0 0-5H5a2.5 2.5 0 0 0-.74 4.89c-.15.47-.25.97-.26 1.48A4 4 0 0 1 1 8Zm15 .13c-.01.51-.1 1.01-.26 1.48A2.5 2.5 0 0 1 15 14.5H9a2.5 2.5 0 0 1 0-5h1.25a.75.75 0 0 0 0-1.5H9a4 4 0 1 0 0 8h6a4 4 0 0 0 1-7.87Z"
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
  ville.embed.fluent.LinkMultiple.$$dbClassInfo = $$dbClassInfo;
})();
