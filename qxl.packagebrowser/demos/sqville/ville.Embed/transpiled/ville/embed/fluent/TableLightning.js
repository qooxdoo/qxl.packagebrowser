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
  qx.Class.define("ville.embed.fluent.TableLightning", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h6a1.5 1.5 0 0 1-1.41-1H8v-3h2.92l.41-1H8V8h4v2.4l.2-.48c.15-.37.45-.65.8-.8V8h3v1h1V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm5.61 8c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z",
      FILLED: "M13.58 9H17V8h-4v1.12c.18-.08.38-.12.58-.12Zm-2.25 3 .67-1.6V8H8v4h3.33Zm-1.21 2.92.8-1.92H8v4h3.5a1.5 1.5 0 0 1-1.38-2.08ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5.61 13c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-.4a.5.5 0 0 1-.48-.66l.56-1.68a.5.5 0 0 0-.47-.66h-3.48a.5.5 0 0 0-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11Z"
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
  ville.embed.fluent.TableLightning.$$dbClassInfo = $$dbClassInfo;
})();
