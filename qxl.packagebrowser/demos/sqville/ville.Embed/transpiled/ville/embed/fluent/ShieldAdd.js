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
  qx.Class.define("ville.embed.fluent.ShieldAdd", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.72 2.08a.5.5 0 0 1 .56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.6c-.32-.16-.65-.3-1-.4V5.44a15.97 15.97 0 0 1-5.6-2.08L10 3.1l-.4.25A15.97 15.97 0 0 1 4 5.43V9.5c0 3.24 1.8 5.64 5.48 7.25.2.43.44.84.74 1.2l-.04.02a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
      FILLED: "M9.72 2.08a.5.5 0 0 1 .56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0 1 17 5v4.6a5.5 5.5 0 0 0-6.78 8.35l-.04.02a.5.5 0 0 1-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.5 15.05 15.05 0 0 0 6.3-2.42ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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
  ville.embed.fluent.ShieldAdd.$$dbClassInfo = $$dbClassInfo;
})();
