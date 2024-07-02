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
  qx.Class.define("ville.embed.fluent.CloudSwap", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62c0 .38-.06.75-.17 1.09l-.84-.84.01-.25a2.33 2.33 0 0 0-2.28-2.37h-.07a1 1 0 0 1-1-.9C13.45 6.32 12.11 5 10 5S6.55 6.32 6.35 8.35a1 1 0 0 1-1 .9h-.07A2.33 2.33 0 0 0 3 11.62 2.33 2.33 0 0 0 5.28 14h2.8a1.5 1.5 0 0 0 0 1h-2.8A3.33 3.33 0 0 1 2 11.62c0-1.8 1.37-3.27 3.1-3.37h.25C5.6 5.9 7.18 4 10 4Zm1.85 8.85a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 14h-5.58l1.14-1.15Z",
      FILLED: "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h2.8a1.5 1.5 0 0 1 .36-1.56l2-2A1.5 1.5 0 0 1 12.9 13h1.18a1.5 1.5 0 0 1 2.47-1.56l1.27 1.27c.1-.34.17-.7.17-1.09a3.33 3.33 0 0 0-3.28-3.37h-.07Zm-2.8 4.6a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L10.71 15h5.58l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L16.29 14h-5.58l1.14-1.15Z"
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
  ville.embed.fluent.CloudSwap.$$dbClassInfo = $$dbClassInfo;
})();