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
  qx.Class.define("ville.embed.fluent.PersonLock", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h8.67a3 3 0 0 0-.17 1H4a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17c.7 0 1.38-.06 2-.18v1.02c-.64.1-1.31.16-2 .16a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm11.5 0v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
      FILLED: "M5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h8.67a3 3 0 0 0-.17 1v.06A2 2 0 0 0 11 14v3.84c-.64.1-1.31.16-2 .16a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm11.5 0v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
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
  ville.embed.fluent.PersonLock.$$dbClassInfo = $$dbClassInfo;
})();