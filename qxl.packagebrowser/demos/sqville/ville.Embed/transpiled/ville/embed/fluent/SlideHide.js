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
  qx.Class.define("ville.embed.fluent.SlideHide", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a4 4 0 0 0-4 4v5c0 1.1.9 2 2 2v-1a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h7a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H6Zm0 5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H7a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V8Zm3.5-2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V8a2 2 0 0 0-2-2h-.5ZM6 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm12 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm-12 4a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H7a1 1 0 0 1-1-1v-.5Zm12 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5ZM9.5 16a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
      FILLED: "M6 3a4 4 0 0 0-4 4v5c0 1.1.9 2 2 2V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm0 5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H7a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V8Zm3.5-2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h.5a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V8a2 2 0 0 0-2-2h-.5ZM6 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm12 0a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm-12 4a.5.5 0 0 0-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 0 0 0-1H7a1 1 0 0 1-1-1v-.5Zm12 0a.5.5 0 0 0-1 0v.5a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h.5a2 2 0 0 0 2-2v-.5ZM9.5 16a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
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
  ville.embed.fluent.SlideHide.$$dbClassInfo = $$dbClassInfo;
})();