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
  qx.Class.define("ville.embed.fluent.VehicleTractor", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.3 4.67A2 2 0 0 1 6.27 3h2.46a2 2 0 0 1 1.97 1.67L11.26 8H13V6a.5.5 0 0 1 1 0v2h1a3 3 0 0 1 3 3v1a3 3 0 0 1-.08.7A3 3 0 1 1 13 15h-2.42a5 5 0 1 1-6.94-6.41l.66-3.92ZM10.84 9H9a5 5 0 0 1 1.9 5h2.27A3 3 0 0 1 17 12.17V11a2 2 0 0 0-2-2h-4.15ZM9.71 4.84A1 1 0 0 0 8.73 4H6.27a1 1 0 0 0-.99.84l-.55 3.32A5 5 0 0 1 6 8h4.24l-.53-3.16ZM6 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
      FILLED: "M4.3 4.67A2 2 0 0 1 6.27 3h2.46a2 2 0 0 1 1.97 1.67L11.26 8H13V6a.5.5 0 0 1 1 0v2h1a3 3 0 0 1 3 3v1c0 .24-.03.47-.08.7A3 3 0 1 1 13 15h-2.42a5 5 0 1 1-6.94-6.41l.66-3.92Zm5.41.17A1 1 0 0 0 8.73 4H6.27a1 1 0 0 0-.99.84l-.55 3.32A5 5 0 0 1 6 8h4.24l-.53-3.16ZM6 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
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
  ville.embed.fluent.VehicleTractor.$$dbClassInfo = $$dbClassInfo;
})();