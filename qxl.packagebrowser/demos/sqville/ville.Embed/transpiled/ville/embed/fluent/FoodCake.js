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
  qx.Class.define("ville.embed.fluent.FoodCake", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 0 0-.47-1.43C11.28 2.55 10.77 2 10 2ZM8.96 4.51c0-.2.11-.63.33-.99.22-.37.46-.54.7-.54.25 0 .5.17.72.55.21.37.32.8.33.98.04.6-.07.96-.23 1.16-.14.18-.38.31-.81.31-.45 0-.69-.12-.82-.3-.15-.18-.26-.54-.22-1.17ZM5 8a2 2 0 0 0-2 2v6h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-6a2 2 0 0 0-2-2H5Zm11 8H4v-3.88l1.54 1.38a2 2 0 0 0 2.83-.16l.88-1a1 1 0 0 1 1.5 0l.88 1a2 2 0 0 0 2.83.16L16 12.12V16Zm0-5.22-2.21 1.97a1 1 0 0 1-1.42-.08l-.87-.99a2 2 0 0 0-3 0l-.87 1a1 1 0 0 1-1.42.07L4 10.78V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.78Z",
      FILLED: "M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 0 0-.47-1.43C11.28 2.55 10.77 2 10 2ZM3 9.78l3.2 2.94a1 1 0 0 0 1.43-.07l.86-.98a2 2 0 0 1 3 0l.86.98a1 1 0 0 0 1.43.07l3.2-2.94A2 2 0 0 0 15 8H5a2 2 0 0 0-1.99 1.79ZM17 11.14l-2.54 2.33a2 2 0 0 1-2.85-.15l-.86-.97a1 1 0 0 0-1.5 0l-.86.97a2 2 0 0 1-2.85.15L3 11.14V16h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-4.86Z"
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
  ville.embed.fluent.FoodCake.$$dbClassInfo = $$dbClassInfo;
})();