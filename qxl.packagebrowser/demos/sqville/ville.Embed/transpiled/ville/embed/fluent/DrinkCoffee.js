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
  qx.Class.define("ville.embed.fluent.DrinkCoffee", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 2.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87L5.8 3.6c-.53-.4-.8-.63-.8-1.1Zm10 5.43V9h1a3 3 0 1 1 0 6h-1.8A6 6 0 0 1 3 12V7.93c0-.51.42-.93.93-.93h10.14c.51 0 .93.42.93.93ZM4 8v4a5 5 0 0 0 10 0V8H4Zm11 4c0 .7-.12 1.37-.34 2H16a2 2 0 1 0 0-4h-1v2ZM7.5 2c.28 0 .5.22.5.5 0 .47.27.7.8 1.1l.04.03C9.31 3.98 10 4.5 10 5.5a.5.5 0 0 1-1 0c0-.47-.27-.7-.8-1.1l-.04-.03C7.69 4.02 7 3.5 7 2.5c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87l-.04-.03c-.53-.4-.8-.63-.8-1.1Z",
      FILLED: "M5 2.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87L5.8 3.6c-.53-.4-.8-.63-.8-1.1ZM3.93 7a.93.93 0 0 0-.93.93V12a6 6 0 0 0 11.2 3H16a3 3 0 1 0 0-6h-1V7.93a.93.93 0 0 0-.93-.93H3.93ZM16 14h-1.34c.22-.63.34-1.3.34-2v-2h1a2 2 0 1 1 0 4ZM7.5 2c.28 0 .5.22.5.5 0 .47.27.7.8 1.1l.04.03C9.31 3.98 10 4.5 10 5.5a.5.5 0 0 1-1 0c0-.47-.27-.7-.8-1.1l-.04-.03C7.69 4.02 7 3.5 7 2.5c0-.28.22-.5.5-.5Zm3.5.5a.5.5 0 0 0-1 0c0 1 .69 1.52 1.16 1.87l.04.03c.53.4.8.63.8 1.1a.5.5 0 0 0 1 0c0-1-.69-1.52-1.16-1.87l-.04-.03c-.53-.4-.8-.63-.8-1.1Z"
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
  ville.embed.fluent.DrinkCoffee.$$dbClassInfo = $$dbClassInfo;
})();
