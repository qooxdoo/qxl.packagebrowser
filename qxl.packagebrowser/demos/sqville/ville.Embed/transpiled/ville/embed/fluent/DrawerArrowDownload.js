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
  qx.Class.define("ville.embed.fluent.DrawerArrowDownload", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9 5.5a4.5 4.5 0 0 1 4-4.47v3.76l-.65-.64a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V1.03A4.5 4.5 0 1 1 9 5.5Zm2 2c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm6 2.24c-.3.26-.64.48-1 .66v.6h-3.5a.5.5 0 0 0-.5.5 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.5H4V8h4.6c-.16-.32-.3-.65-.4-1H4c0-1.1.9-2 2-2h2.02c.03-.34.1-.68.19-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.74ZM16 15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3h3.04a3 3 0 0 0 5.92 0H16v3Z",
      FILLED: "M9 5.5a4.5 4.5 0 0 1 4-4.47v3.76l-.65-.64a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V1.03A4.5 4.5 0 1 1 9 5.5Zm2 2c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM6 4h2.2c-.08.32-.15.66-.18 1H6a2 2 0 0 0-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 1 0 4 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
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
  ville.embed.fluent.DrawerArrowDownload.$$dbClassInfo = $$dbClassInfo;
})();