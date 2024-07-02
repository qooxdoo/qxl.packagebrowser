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
  qx.Class.define("ville.embed.fluent.ChannelSubtract", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3.2 4.52a2.02 2.02 0 0 1 1.06.13C4.53 4.25 5 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v3.7c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0 0 14.5 3h-9a2.5 2.5 0 0 0-2.3 1.52ZM9.6 17c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 0 1 4 14.5V8.44a2 2 0 0 1-1 0v6.06A2.5 2.5 0 0 0 5.5 17h4.1Zm0-5c.18-.36.4-.7.66-1H7.5a.5.5 0 0 0 0 1h2.1ZM3 5.63a1 1 0 0 1 1 0 1 1 0 1 1-1 0ZM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z",
      FILLED: "M3.2 4.52A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.48 5.48 0 0 0-6.74 1.4H7.5a.5.5 0 0 0 0 1h2.1a5.48 5.48 0 0 0 0 5H5.5A2.5 2.5 0 0 1 3 14.5V8.44a2 2 0 1 0 .2-3.92ZM7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM3 5.63a1 1 0 1 1 1 1.73 1 1 0 0 1-1-1.73ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1Z"
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
  ville.embed.fluent.ChannelSubtract.$$dbClassInfo = $$dbClassInfo;
})();
