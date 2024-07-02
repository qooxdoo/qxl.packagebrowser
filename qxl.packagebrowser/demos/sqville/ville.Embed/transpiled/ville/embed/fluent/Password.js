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
  qx.Class.define("ville.embed.fluent.Password", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.85 8.15a.5.5 0 0 0-.7 0l-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0 0-.7Zm3.3 0a.5.5 0 0 1 .7.7l-.64.65.64.65a.5.5 0 0 1-.7.7l-.65-.64-.65.64a.5.5 0 0 1-.7-.7l.64-.65-.64-.65a.5.5 0 1 1 .7-.7l.65.64.65-.64ZM13.5 10a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h10.5A2.75 2.75 0 0 0 18 12.25v-5.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 14 3 13.22 3 12.25v-5.5Z",
      FILLED: "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v5.5A2.75 2.75 0 0 1 15.25 15H4.75A2.75 2.75 0 0 1 2 12.25v-5.5Zm5.15 1.4-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 1 0-.7-.7Zm4 0-.65.64-.65-.64a.5.5 0 1 0-.7.7l.64.65-.64.65a.5.5 0 0 0 .7.7l.65-.64.65.64a.5.5 0 0 0 .7-.7l-.64-.65.64-.65a.5.5 0 0 0-.7-.7ZM13 10.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"
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
  ville.embed.fluent.Password.$$dbClassInfo = $$dbClassInfo;
})();
