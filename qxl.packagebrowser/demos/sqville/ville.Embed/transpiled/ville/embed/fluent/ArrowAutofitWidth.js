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
  qx.Class.define("ville.embed.fluent.ArrowAutofitWidth", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "m16.37 15-1.18 1.14a.5.5 0 1 0 .7.72l1.88-1.82c.3-.3.3-.78 0-1.08l-1.88-1.82a.5.5 0 1 0-.7.72L16.38 14H12.5a.5.5 0 1 0 0 1h3.87ZM15 3a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V5c0-1.1.9-2 2-2h10ZM4.81 16.14 3.63 15H7.5a.5.5 0 1 0 0-1H3.63l1.18-1.14a.5.5 0 0 0-.7-.72l-1.88 1.82c-.3.3-.3.79 0 1.08l1.89 1.82a.5.5 0 1 0 .69-.72Z",
      FILLED: "m15.5 15-.73.71a.75.75 0 1 0 1.04 1.08l1.89-1.82a1 1 0 0 0 0-1.44l-1.89-1.82a.75.75 0 0 0-1.04 1.08l.74.71h-2.76a.75.75 0 0 0 0 1.5h2.75ZM15 3a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v4.25a.75.75 0 0 1-1.5 0V5c0-1.1.9-2 2-2h10ZM5.23 15.71l-.73-.7h2.75a.75.75 0 1 0 0-1.5H4.5l.73-.72a.75.75 0 0 0-1.04-1.08l-1.88 1.82a1 1 0 0 0 0 1.44l1.88 1.82a.75.75 0 0 0 1.04-1.08Z"
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
  ville.embed.fluent.ArrowAutofitWidth.$$dbClassInfo = $$dbClassInfo;
})();