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
  qx.Class.define("ville.embed.fluent.TableOffsetSettings", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V13h5.2c.1-.35.24-.68.4-1H8V8h8v1.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 12H4V8h3v4ZM4 7V5.5C4 4.67 4.67 4 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5c.83 0 1.5.67 1.5 1.5Zm-3.93 5.94a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
      FILLED: "M5.5 3H12v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM8 8h9v1.6A5.48 5.48 0 0 0 9.6 12H8V8Zm1 6.5c0-.52.07-1.02.2-1.5H3v1.5A2.5 2.5 0 0 0 5.5 17h4.1c-.38-.75-.6-1.6-.6-2.5ZM7 12V8H3v4h4Zm6-5h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-.93 4.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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
  ville.embed.fluent.TableOffsetSettings.$$dbClassInfo = $$dbClassInfo;
})();
