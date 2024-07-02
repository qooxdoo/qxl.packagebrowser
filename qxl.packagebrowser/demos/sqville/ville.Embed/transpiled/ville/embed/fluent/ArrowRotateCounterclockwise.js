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
  qx.Class.define("ville.embed.fluent.ArrowRotateCounterclockwise", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17 10a7 7 0 1 0-10 6.33V14.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.62A8 8 0 1 1 18 10a.5.5 0 0 1-1 0Zm-7 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      FILLED: "M10 3.5a6.5 6.5 0 0 1 6.5 6.5.75.75 0 0 0 1.5 0 8 8 0 1 0-12.66 6.5H4.25a.75.75 0 0 0 0 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v1.23A6.5 6.5 0 0 1 10 3.5ZM7.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
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
  ville.embed.fluent.ArrowRotateCounterclockwise.$$dbClassInfo = $$dbClassInfo;
})();