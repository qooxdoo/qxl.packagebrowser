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
  qx.Class.define("ville.embed.fluent.SlideMultipleSearch", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a4 4 0 0 0-4 4v2.76c.3-.2.64-.38 1-.5V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm10 14h-5.88l-1-1H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.26a4.47 4.47 0 0 0-1-.23V8c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
      FILLED: "M6 3a4 4 0 0 0-4 4v2.76c.58-.4 1.27-.65 2-.73V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm10 14h-5.88l-1.56-1.56A4.5 4.5 0 0 0 5 9.03V8c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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
  ville.embed.fluent.SlideMultipleSearch.$$dbClassInfo = $$dbClassInfo;
})();
