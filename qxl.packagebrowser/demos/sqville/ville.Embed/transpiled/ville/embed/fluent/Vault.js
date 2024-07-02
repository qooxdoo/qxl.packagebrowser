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
  qx.Class.define("ville.embed.fluent.Vault", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.72 11.02a2 2 0 0 0 0-2.04l.63-.63a.5.5 0 0 0-.7-.7l-.63.63a2 2 0 0 0-2.04 0l-.63-.63a.5.5 0 0 0-.7.7l.63.63a2 2 0 0 0 0 2.04l-.63.63a.5.5 0 0 0 .7.7l.63-.63a2 2 0 0 0 2.04 0l.63.63a.5.5 0 0 0 .7-.7l-.63-.63ZM12 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6 7.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z",
      FILLED: "M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm8.85.65a.5.5 0 0 0-.7 0l-.63.63a2 2 0 0 0-2.04 0l-.63-.63a.5.5 0 0 0-.7.7l.63.63a2 2 0 0 0 0 2.04l-.63.63a.5.5 0 0 0 .7.7l.63-.63a2 2 0 0 0 2.04 0l.63.63a.5.5 0 0 0 .7-.7l-.63-.63a2 2 0 0 0 0-2.04l.63-.63a.5.5 0 0 0 0-.7Z"
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
  ville.embed.fluent.Vault.$$dbClassInfo = $$dbClassInfo;
})();
