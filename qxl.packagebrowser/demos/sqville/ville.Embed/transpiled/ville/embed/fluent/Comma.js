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
  qx.Class.define("ville.embed.fluent.Comma", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.5 7.5a3.5 3.5 0 1 0-1.28 2.7 7.78 7.78 0 0 1-1.24 2.89A4.26 4.26 0 0 1 7.5 15a.5.5 0 0 0 0 1c1.7 0 3.22-.84 4.3-2.32 1.07-1.48 1.7-3.6 1.7-6.18Z",
      FILLED: "M13.5 7.5a3.5 3.5 0 1 0-1.88 3.1c-.23.87-.56 1.6-.95 2.18-.8 1.16-1.83 1.72-2.92 1.72a.75.75 0 0 0 0 1.5c1.67 0 3.14-.88 4.16-2.38 1-1.49 1.59-3.58 1.59-6.12Z"
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
  ville.embed.fluent.Comma.$$dbClassInfo = $$dbClassInfo;
})();
