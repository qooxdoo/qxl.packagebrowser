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
  qx.Class.define("ville.embed.fluent.Fireplace", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 9a7 7 0 0 1 14 0v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Zm7-6a6 6 0 0 0-6 6v5h3.5c-.62-.62-1-1.48-1-2.5a4.85 4.85 0 0 1 1.34-3.35l.02-.01v-.01a.5.5 0 0 1 .65-.02c.02-.28.08-.58.2-.9.25-.63.75-1.24 1.65-1.72a.5.5 0 0 1 .74.44c0 1.14.5 1.9 1.1 2.7l.13.18c.54.72 1.17 1.56 1.17 2.69 0 1.02-.38 1.88-1 2.5H16V9a6 6 0 0 0-6-6ZM8.22 9.25a3.85 3.85 0 0 0-.72 2.25c0 1.49 1.1 2.5 2.5 2.5s2.5-1.01 2.5-2.5c0-.79-.43-1.37-1.02-2.16l-.08-.1c-.48-.65-1-1.4-1.21-2.42a2.03 2.03 0 0 0-.66 1.88c0 .09.02.16.03.23v.05l.03.15c0 .05.02.15 0 .25 0 .05-.02.17-.12.28-.12.15-.3.2-.44.2a.59.59 0 0 1-.25-.09 2.72 2.72 0 0 1-.32-.27l-.24-.25ZM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z",
      FILLED: "M10 2a7 7 0 0 0-7 7v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a7 7 0 0 0-7-7ZM4 9a6 6 0 1 1 12 0v5h-3.5c.62-.62 1-1.48 1-2.5 0-1.13-.63-1.97-1.17-2.7l-.13-.16c-.6-.8-1.1-1.57-1.1-2.71a.5.5 0 0 0-.76-.43c-1.4.85-1.45 2.17-1.39 3l-.42-.37a.5.5 0 0 0-.66 0h-.01l-.02.02a2.23 2.23 0 0 0-.2.22A4.85 4.85 0 0 0 6.5 11.5c-.01 1.02.37 1.88 1 2.5H4V9Zm-1.5 7a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
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
  ville.embed.fluent.Fireplace.$$dbClassInfo = $$dbClassInfo;
})();