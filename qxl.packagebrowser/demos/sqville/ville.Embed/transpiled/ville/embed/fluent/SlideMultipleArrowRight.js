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
  qx.Class.define("ville.embed.fluent.SlideMultipleArrowRight", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a4 4 0 0 0-4 4v5c0 1.1.9 2 2 2v-1a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm1 3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.6c-.16-.32-.3-.65-.4-1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1.6c.36.18.7.4 1 .66V8a2 2 0 0 0-2-2H7Zm7.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
      FILLED: "M6 3a4 4 0 0 0-4 4v5c0 1.1.9 2 2 2V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm1 3a2 2 0 0 0-2 2v7c0 1.1.9 2 2 2h2.6a5.5 5.5 0 0 1 8.4-6.74V8a2 2 0 0 0-2-2H7Zm7.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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
  ville.embed.fluent.SlideMultipleArrowRight.$$dbClassInfo = $$dbClassInfo;
})();