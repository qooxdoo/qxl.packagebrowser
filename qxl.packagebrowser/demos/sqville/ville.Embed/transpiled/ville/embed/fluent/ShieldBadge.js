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
  qx.Class.define("ville.embed.fluent.ShieldBadge", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 7c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v1.57a2.11 2.11 0 0 1-1-.82V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v1H4a2 2 0 0 1-2-2V7Zm12.53 1.83a.5.5 0 0 1 .95.02 1.63 1.63 0 0 0 .45.5c.4.3 1.16.65 2.57.65.28 0 .5.22.5.5v2c0 1.03-.13 2.14-.7 3.12a5.35 5.35 0 0 1-3.14 2.35.5.5 0 0 1-.32 0 5.35 5.35 0 0 1-3.15-2.35A6.19 6.19 0 0 1 11 12.5v-2a.5.5 0 0 1 .5-.5c1.41 0 2.18-.35 2.57-.65a1.63 1.63 0 0 0 .46-.52Zm.94 0v.01Zm0 0Zm-.94 0v.01Zm.15 1.32c-.54.4-1.38.76-2.68.84v1.51c0 .97.12 1.86.56 2.63A4.27 4.27 0 0 0 15 16.97a4.27 4.27 0 0 0 2.44-1.84c.44-.77.56-1.66.56-2.63v-1.51a4.81 4.81 0 0 1-2.68-.84L15 9.87c-.1.09-.2.19-.32.28Zm-.15-1.32",
      FILLED: "M4 5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h6V9c3.23 0 3.75-.83 4.11-1.43.2-.32.36-.57.89-.57s.69.25.89.57c.2.32.43.7 1.11 1V7a2 2 0 0 0-2-2H4Zm10.53 3.83v.02a1.63 1.63 0 0 1-.45.5c-.4.3-1.17.65-2.58.65a.5.5 0 0 0-.5.5v2c0 1.03.13 2.14.7 3.12.56 1 1.55 1.82 3.14 2.35.1.04.22.04.32 0a5.35 5.35 0 0 0 3.15-2.35c.56-.98.69-2.09.69-3.12v-2a.5.5 0 0 0-.5-.5c-1.41 0-2.18-.35-2.57-.65a1.63 1.63 0 0 1-.46-.52.5.5 0 0 0-.94 0Zm.94 0v.01Zm-.94 0v.01Z"
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
  ville.embed.fluent.ShieldBadge.$$dbClassInfo = $$dbClassInfo;
})();