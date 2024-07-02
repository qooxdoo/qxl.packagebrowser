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
  qx.Class.define("ville.embed.fluent.TableDismiss", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H8v-3h1.2c.1-.35.24-.68.4-1H8V8h4v1.6c.32-.16.65-.3 1-.4V8h3v1.2c.35.1.68.24 1 .4V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 4v3H8V4h4Zm1 0H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.36A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Zm12 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z",
      FILLED: "M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm2.6 0A5.52 5.52 0 0 1 12 9.6V8H8v4h1.6Zm4.9-3c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2ZM9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5ZM7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm12 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-3.8 0 1.15-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15Z"
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
  ville.embed.fluent.TableDismiss.$$dbClassInfo = $$dbClassInfo;
})();
