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
  qx.Class.define("ville.embed.fluent.DocumentBulletListClock", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.02c.34.03.68.1 1 .19V7.4c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM9 14.5c0-.17 0-.34.02-.5H8.5a.5.5 0 0 0 0 1h.52a5.57 5.57 0 0 1-.02-.5Zm.2-1.5c.1-.35.24-.68.4-1H8.5a.5.5 0 0 0 0 1h.7Zm1.06-2c.31-.38.67-.72 1.08-1H8.5a.5.5 0 0 0 0 1h1.76ZM6.5 10a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm13 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-3a.5.5 0 0 0-1 0v3c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H15v-2.5Z",
      FILLED: "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.76a5.47 5.47 0 0 1-1.24-3H8.5a.5.5 0 0 1 0-1h.52c.03-.34.1-.68.19-1H8.5a.5.5 0 0 1 0-1h1.1c.18-.36.4-.7.66-1H8.5a.5.5 0 0 1 0-1h2.84A5.47 5.47 0 0 1 16 9.2V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.DocumentBulletListClock.$$dbClassInfo = $$dbClassInfo;
})();
