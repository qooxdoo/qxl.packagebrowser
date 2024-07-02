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
  qx.Class.define("ville.embed.fluent.Fps960", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7 7.5a2.5 2.5 0 0 1-5 0 .5.5 0 0 1 1 0 1.5 1.5 0 1 0 3 0v-1a2.5 2.5 0 1 1 1-2v3Zm-1-3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM10.5 2A2.5 2.5 0 0 0 8 4.5v3a2.5 2.5 0 1 0 1-2v-1a1.5 1.5 0 1 1 3 0 .5.5 0 0 0 1 0A2.5 2.5 0 0 0 10.5 2Zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm6-6c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3c0-.83-.67-1.5-1.5-1.5ZM14 4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3ZM3.5 12a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm1.5 3H9v-2h1a1 1 0 1 1 0 2Zm3-1.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z",
      FILLED: "M4.5 10A2.5 2.5 0 0 0 7 7.5v-3A2.5 2.5 0 1 0 4.5 7h.1c.32 0 .62-.06.9-.17v.67a1 1 0 0 1-1 1h-.25a.75.75 0 0 1-.75-.75.75.75 0 0 0-1.5 0C2 8.99 3 10 4.25 10h.25Zm1-5.5v.1c0 .5-.4.9-.9.9h-.1a1 1 0 1 1 1-1Zm5-2.5A2.5 2.5 0 0 0 8 4.5v3A2.5 2.5 0 1 0 10.5 5h-.1c-.32 0-.62.06-.9.17V4.5a1 1 0 0 1 1-1h.25c.41 0 .75.34.75.75a.75.75 0 0 0 1.5 0C13 3.01 12 2 10.75 2h-.25Zm-1 5.5v-.1c0-.5.4-.9.9-.9h.1a1 1 0 1 1-1 1Zm6-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm1-2.5A2.5 2.5 0 0 0 14 4.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 16.5 2Zm-13 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H4v-2h2.5a.5.5 0 0 0 0-1h-3Zm5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V16h1a2 2 0 1 0 0-4H8.5Zm2.5 2a1 1 0 0 1-1 1H9v-2h1a1 1 0 0 1 1 1Zm2-.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0 0 1.5h.5a1.75 1.75 0 1 1 0 3.5h-.75a1.5 1.5 0 0 1-1.5-1.5.5.5 0 0 1 1 0c0 .28.22.5.5.5h.75a.75.75 0 0 0 0-1.5h-.5c-.97 0-1.75-.78-1.75-1.75Z"
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
  ville.embed.fluent.Fps960.$$dbClassInfo = $$dbClassInfo;
})();