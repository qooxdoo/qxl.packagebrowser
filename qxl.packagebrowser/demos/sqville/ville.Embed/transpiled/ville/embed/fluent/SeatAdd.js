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
  qx.Class.define("ville.embed.fluent.SeatAdd", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm1 8c0-.24-.06-.46-.16-.67.4-.1.8-.24 1.16-.43V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h3.6c-.16.32-.3.65-.4 1H6a2 2 0 0 0-2 2v3.5a2.49 2.49 0 0 1 3.62.67 3 3 0 0 1 2.65-1.16 5.5 5.5 0 0 0 2.89 1.82c-.1.2-.16.43-.16.67V16h2a1 1 0 0 0 1-1v-3.5Zm-4 .5a2 2 0 1 0-4 0v4h4v-4Zm-8 3a1 1 0 0 0 1 1h2v-4.5a1.5 1.5 0 0 0-3 0V15Z",
      FILLED: "M19 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm-.5 7.5c.7 0 1.35-.13 1.97-.36A2 2 0 0 1 17 12v3a2 2 0 0 1-2 2h-2v-5a2 2 0 0 1 .34-1.12c.38.08.76.12 1.16.12ZM6 3h3.6a5.48 5.48 0 0 0 .67 6.01L10 9a3 3 0 0 0-2.5 1.34A3 3 0 0 0 3 9.76V6a3 3 0 0 1 3-3Zm6 9a2 2 0 1 0-4 0v5h4v-5Zm-5 5H5a2 2 0 0 1-2-2v-3a2 2 0 1 1 4 0v5Z"
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
  ville.embed.fluent.SeatAdd.$$dbClassInfo = $$dbClassInfo;
})();
