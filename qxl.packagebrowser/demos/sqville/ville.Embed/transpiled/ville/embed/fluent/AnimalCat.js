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
  qx.Class.define("ville.embed.fluent.AnimalCat", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.97 18h9.28c.95 0 1.72-.77 1.72-1.72v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 8.11 8.11 0 0 0-1.52 3.35A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Zm7.97-15v1.12c0 .28.22.5.5.5h1.93c.4 0 .75.2.96.53l.5.81c.46.75-.08 1.72-.95 1.72h-.41a.5.5 0 0 0-.5.5v8.1c0 .4-.32.72-.72.72h-.72v-.72a2.93 2.93 0 0 0-2.93-2.93H9.6a.5.5 0 0 0 0 1h1.01c1.07 0 1.93.87 1.93 1.93V17h-5.9A18 18 0 0 1 7 13.05c.26-1.1.67-2.16 1.32-2.93A3.32 3.32 0 0 1 11 8.88a.5.5 0 0 0 .5-.5V4.45c0-.8.64-1.44 1.43-1.45Z",
      FILLED: "M4.97 18H13v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 0 1 3.5 3.5V18h.25c.47 0 .9-.2 1.21-.5h.04v-.04c.29-.3.47-.72.47-1.18v-7.6a2.12 2.12 0 0 0 1.7-3.24l-.5-.81c-.38-.63-1.06-1-1.8-1h-1.43v-.64a.99.99 0 0 0-.99-.99 2.45 2.45 0 0 0-2.44 2.45V7.9a4.28 4.28 0 0 0-2.95 1.58 6.69 6.69 0 0 0-1.04 1.8c-.23.46-.39.96-.47 1.49l-.01.06A17.04 17.04 0 0 0 5.63 17h-.66a1.97 1.97 0 0 1-1.44-3.32l.92-.98a3.59 3.59 0 0 0-.09-4.99l-.9-.9a.5.5 0 1 0-.7.7l.9.9a2.59 2.59 0 0 1 .06 3.6l-.92 1A2.97 2.97 0 0 0 4.97 18Z"
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
  ville.embed.fluent.AnimalCat.$$dbClassInfo = $$dbClassInfo;
})();