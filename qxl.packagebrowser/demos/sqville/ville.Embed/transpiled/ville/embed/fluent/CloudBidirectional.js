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
  qx.Class.define("ville.embed.fluent.CloudBidirectional", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.62 3.33 3.33 0 0 1 14.72 13H11v-1h3.72A2.33 2.33 0 0 0 17 9.62a2.33 2.33 0 0 0-2.28-2.37h-.07a1 1 0 0 1-1-.9C13.45 4.32 12.11 3 10 3S6.55 4.32 6.35 6.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 9.62 2.33 2.33 0 0 0 5.28 12H8v1H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm1.85 7.85a.5.5 0 0 1-.7 0L10 8.71v7.58l1.15-1.14a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L9 16.29V8.71L7.85 9.85a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7Z",
      FILLED: "M10 2c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 9.62 3.33 3.33 0 0 1 14.72 13H11v-2.09a1.5 1.5 0 0 0 1.56-2.47l-2-2a1.5 1.5 0 0 0-2.12 0l-2 2A1.5 1.5 0 0 0 8 10.9V13H5.28A3.33 3.33 0 0 1 2 9.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 3.9 7.18 2 10 2Zm1.85 7.85a.5.5 0 0 1-.7 0L10 8.71v7.58l1.15-1.14a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L9 16.29V8.71L7.85 9.85a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7Z"
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
  ville.embed.fluent.CloudBidirectional.$$dbClassInfo = $$dbClassInfo;
})();