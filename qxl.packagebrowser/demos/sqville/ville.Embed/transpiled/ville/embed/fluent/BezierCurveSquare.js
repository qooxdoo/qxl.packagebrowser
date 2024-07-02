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
  qx.Class.define("ville.embed.fluent.BezierCurveSquare", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm11 9.92a3.5 3.5 0 0 1-1.86-.88 5.42 5.42 0 0 1-1.3-2.2l-.28-.87-.13-.41a8.91 8.91 0 0 0-.47-1.19c-.18-.36-.41-.7-.74-.96C10.9 6.14 10.48 6 10 6s-.89.14-1.22.4c-.33.26-.56.6-.74.97-.18.36-.33.78-.47 1.19l-.13.4c-.09.3-.18.58-.29.87-.3.86-.67 1.64-1.29 2.21a3.5 3.5 0 0 1-1.86.88V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.92ZM4 13.93a4.55 4.55 0 0 0 2.54-1.16c.8-.74 1.24-1.7 1.56-2.6l.3-.92.12-.38c.14-.4.27-.76.41-1.05.15-.3.3-.5.46-.63.16-.12.34-.19.61-.19.27 0 .45.07.6.2.17.12.32.32.47.62a8 8 0 0 1 .4 1.05l.13.38.3.92c.32.9.76 1.86 1.56 2.6.63.59 1.45 1 2.54 1.16V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.07Z",
      FILLED: "M5 3a2 2 0 0 0-2 2v8c1.4 0 2.26-.4 2.86-.96.62-.57.99-1.35 1.3-2.2l.28-.87.13-.41c.14-.41.29-.83.47-1.19s.41-.7.74-.96C9.1 6.14 9.52 6 10 6s.89.14 1.22.4c.33.26.56.6.74.97.18.36.33.78.47 1.19l.13.4c.09.3.18.58.29.87.3.86.67 1.64 1.29 2.21.6.56 1.47.96 2.86.96V5a2 2 0 0 0-2-2H5Zm12 11c-1.6 0-2.74-.47-3.54-1.23a6.39 6.39 0 0 1-1.56-2.6l-.3-.92-.12-.38a8 8 0 0 0-.41-1.05c-.15-.3-.3-.5-.46-.63A.93.93 0 0 0 10 7a.93.93 0 0 0-.6.2c-.17.12-.32.32-.47.62-.14.3-.27.64-.4 1.05l-.13.38-.3.92c-.32.9-.76 1.86-1.56 2.6A4.95 4.95 0 0 1 3 14v1c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-1Z"
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
  ville.embed.fluent.BezierCurveSquare.$$dbClassInfo = $$dbClassInfo;
})();
