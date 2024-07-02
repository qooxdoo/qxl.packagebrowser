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
  qx.Class.define("ville.embed.fluent.WindowDevTools", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.03a4.54 4.54 0 0 0-1 0V7H4v7c0 1.1.9 2 2 2h3.5c-.23.3-.38.65-.45 1H6a3 3 0 0 1-3-3V6Zm10.04 3.59L11.6 8.15a.5.5 0 0 0-.7.7l1.57 1.58c.16-.3.35-.58.57-.84ZM6 4a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm3.1 4.85a.5.5 0 1 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.96 11 9.1 8.85Zm7.8.17c.36.05.46.48.2.75l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73a3.52 3.52 0 0 1 3.72-4.68Z",
      FILLED: "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.03a4.54 4.54 0 0 0-1 0V7H4v7c0 1.1.9 2 2 2h3.5c-.23.3-.38.65-.45 1H6a3 3 0 0 1-3-3V6Zm10.04 3.59L11.6 8.15a.5.5 0 0 0-.7.7l1.57 1.58c.16-.3.35-.58.57-.84ZM9.1 8.85a.5.5 0 1 0-.7-.7l-2.5 2.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L6.96 11 9.1 8.85Zm7.8.17c.36.05.46.48.2.75l-.97.97a1.5 1.5 0 1 0 2.13 2.13l.97-.97c.27-.26.7-.16.75.2a3.51 3.51 0 0 1-4.68 3.73l-2.73 2.73a1.5 1.5 0 1 1-2.13-2.13l2.73-2.73a3.52 3.52 0 0 1 3.72-4.68Z"
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
  ville.embed.fluent.WindowDevTools.$$dbClassInfo = $$dbClassInfo;
})();