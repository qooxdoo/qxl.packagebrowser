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
  qx.Class.define("ville.embed.fluent.ArchiveMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M7.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4-6C2.67 2 2 2.67 2 3.5v2c0 .66.42 1.21 1 1.42A.5.5 0 0 0 3 7v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7a.5.5 0 0 0 0-.08c.58-.2 1-.76 1-1.42v-2c0-.83-.67-1.5-1.5-1.5h-11ZM4 12.5V7h10v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 12.5Zm-1-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z",
      FILLED: "M3.5 2C2.67 2 2 2.67 2 3.5v1C2 5.33 2.67 6 3.5 6h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11ZM15 7H3v5.5A3.5 3.5 0 0 0 6.5 16h5a3.5 3.5 0 0 0 3.5-3.5V7ZM7 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 0 0 3.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 0 1-4.5 4.5h-4Z"
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
  ville.embed.fluent.ArchiveMultiple.$$dbClassInfo = $$dbClassInfo;
})();