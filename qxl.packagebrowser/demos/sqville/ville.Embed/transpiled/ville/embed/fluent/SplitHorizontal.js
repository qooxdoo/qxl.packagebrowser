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
  qx.Class.define("ville.embed.fluent.SplitHorizontal", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM16 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1V4Zm0 7h-1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4H4v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4Z",
      FILLED: "M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1h15ZM14 2a2 2 0 0 1 2 2v4H4V4c0-1.1.9-2 2-2h8ZM4 11v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-4H4Z"
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
  ville.embed.fluent.SplitHorizontal.$$dbClassInfo = $$dbClassInfo;
})();