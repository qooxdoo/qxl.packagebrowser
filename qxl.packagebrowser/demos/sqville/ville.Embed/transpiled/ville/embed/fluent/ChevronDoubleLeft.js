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
  qx.Class.define("ville.embed.fluent.ChevronDoubleLeft", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.35 15.85a.5.5 0 0 1-.7 0L5.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L6.2 10l5.16 5.15c.2.2.2.5 0 .7Zm4 0a.5.5 0 0 1-.7 0L9.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L10.2 10l5.16 5.15c.2.2.2.5 0 .7Z",
      FILLED: "M11.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L6.8 10l4.5 4.73c.29.3.28.78-.02 1.06Zm4 0a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.09 1.04L10.79 10l4.5 4.73c.3.3.28.78-.02 1.06Z"
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
  ville.embed.fluent.ChevronDoubleLeft.$$dbClassInfo = $$dbClassInfo;
})();
