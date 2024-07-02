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
  qx.Class.define("ville.embed.fluent.TextQuote", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.83 8.62a8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 9 6.5a2.5 2.5 0 1 0-1.17 2.12ZM8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.83 2.12a8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 16 6.5a2.5 2.5 0 1 0-1.17 2.12ZM13.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z",
      FILLED: "M9 6.5a2.5 2.5 0 1 0-1.17 2.12 8.8 8.8 0 0 1-.96 2.76 12.06 12.06 0 0 1-2.22 2.77.5.5 0 0 0 .7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 0 0 9 6.5Zm5.83 2.12A2.5 2.5 0 1 1 16 6.5c0 2.33-.52 4.04-1.25 5.37-.72 1.3-1.64 2.23-2.38 2.97l-.02.01a.5.5 0 0 1-.7-.7c.75-.76 1.57-1.59 2.22-2.77a8.8 8.8 0 0 0 .96-2.76Z"
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
  ville.embed.fluent.TextQuote.$$dbClassInfo = $$dbClassInfo;
})();
