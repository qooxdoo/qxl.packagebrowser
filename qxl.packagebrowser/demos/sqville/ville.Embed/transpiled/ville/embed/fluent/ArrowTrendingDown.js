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
  qx.Class.define("ville.embed.fluent.ArrowTrendingDown", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17.96 14.7a.5.5 0 0 1-.46.3h-6a.5.5 0 0 1 0-1h4.8l-5.8-5.8-2.15 2.15a.5.5 0 0 1-.7 0l-5.5-5.5a.5.5 0 1 1 .7-.7L8 9.29l2.15-2.14c.2-.2.5-.2.7 0L17 13.29V8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.04.2Z",
      FILLED: "M17.94 14.54a.75.75 0 0 1-.7.46h-5.49a.75.75 0 0 1 0-1.5h3.69L10.5 8.56l-1.97 1.97c-.3.3-.77.3-1.06 0L2.22 5.28a.75.75 0 0 1 1.06-1.06L8 8.94l1.97-1.97c.3-.3.77-.3 1.06 0l5.47 5.47V8.75a.75.75 0 0 1 1.5 0v5.5c0 .1-.02.2-.06.29Z"
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
  ville.embed.fluent.ArrowTrendingDown.$$dbClassInfo = $$dbClassInfo;
})();
