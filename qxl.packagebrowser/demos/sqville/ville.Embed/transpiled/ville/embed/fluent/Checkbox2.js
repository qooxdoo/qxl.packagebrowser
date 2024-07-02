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
  qx.Class.define("ville.embed.fluent.Checkbox2", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7.05c.06-.3.18-.63.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5c.35 0 .69.06 1 .17V6a3 3 0 0 0-3-3H6Zm7.85 4.85a.5.5 0 0 0-.7-.7L8.5 11.79l-1.65-1.64a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l5-5ZM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45 1.43 1.43 0 0 1 .03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29Z",
      FILLED: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h7.05c.06-.3.18-.63.4-1 .23-.4.57-.8 1.04-1.23a1.5 1.5 0 0 1-1.12-2.48A3.51 3.51 0 0 1 15.82 11c.42-.02.82.05 1.18.17V6a3 3 0 0 0-3-3H6Zm7.85 4.85-5 5a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7l1.65 1.64 4.65-4.64a.5.5 0 0 1 .7.7ZM15.93 13c-.3.02-.67.16-1.05.6a.5.5 0 1 1-.76-.65c.54-.61 1.15-.91 1.76-.95.6-.03 1.14.2 1.52.57.38.36.63.88.59 1.43-.04.57-.38 1.1-.99 1.45-1.1.64-1.6 1.2-1.82 1.55h2.32a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.45 1.43 1.43 0 0 1 .03-.34c.04-.19.12-.42.28-.7a5.8 5.8 0 0 1 2.2-1.93c.36-.21.47-.46.48-.65a.84.84 0 0 0-.28-.64c-.2-.19-.48-.3-.78-.29Z"
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
  ville.embed.fluent.Checkbox2.$$dbClassInfo = $$dbClassInfo;
})();