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
  qx.Class.define("ville.embed.fluent.MoneyCalculator", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM2 4.5C2 3.67 2.67 3 3.5 3h11c.83 0 1.5.67 1.5 1.5V8h-1V7h-1a2 2 0 0 1-2-2V4H6v1a2 2 0 0 1-2 2H3v2h1a2 2 0 0 1 2 2v1h5v1H3.5A1.5 1.5 0 0 1 2 11.5v-7ZM3.5 4a.5.5 0 0 0-.5.5V6h1a1 1 0 0 0 1-1V4H3.5Zm11 0H13v1a1 1 0 0 0 1 1h1V4.5a.5.5 0 0 0-.5-.5Zm-11 8H5v-1a1 1 0 0 0-1-1H3v1.5c0 .28.22.5.5.5ZM17 8V5.09c.58.2 1 .76 1 1.41V8h-1Zm-6 6v1H5.5a1.5 1.5 0 0 1-1.41-1H11Zm2.5-5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4Zm0 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1ZM13 10.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1Z",
      FILLED: "M2 4.5C2 3.67 2.67 3 3.5 3h11c.83 0 1.5.67 1.5 1.5V8h-3a2 2 0 0 0-2 2v3H3.5A1.5 1.5 0 0 1 2 11.5v-7ZM4 7a2 2 0 0 0 2-2V4H5v1a1 1 0 0 1-1 1H3v1h1Zm3.25 1a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0ZM3 9v1h1a1 1 0 0 1 1 1v1h1v-1a2 2 0 0 0-2-2H3Zm12-2V6h-1a1 1 0 0 1-1-1V4h-1v1c0 1.1.9 2 2 2h1Zm2 1V5.09c.58.2 1 .76 1 1.41V8h-1Zm-6 6v1H5.5a1.5 1.5 0 0 1-1.41-1H11Zm2.5-5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4Zm0 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1ZM13 10.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1Z"
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
  ville.embed.fluent.MoneyCalculator.$$dbClassInfo = $$dbClassInfo;
})();