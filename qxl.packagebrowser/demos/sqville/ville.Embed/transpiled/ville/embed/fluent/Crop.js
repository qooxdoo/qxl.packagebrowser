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
  qx.Class.define("ville.embed.fluent.Crop", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 2.5a.5.5 0 0 0-1 0V5H2.5a.5.5 0 0 0 0 1H5v6.5A2.5 2.5 0 0 0 7.5 15H14v2.5a.5.5 0 0 0 1 0V15h2.5a.5.5 0 0 0 0-1h-10A1.5 1.5 0 0 1 6 12.5v-10Zm8 5V13h1V7.5A2.5 2.5 0 0 0 12.5 5H7v1h5.5c.83 0 1.5.67 1.5 1.5Z",
      FILLED: "M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v6.75a2.75 2.75 0 0 0 2.75 2.75H14v1.75a.75.75 0 0 0 1.5 0V15.5h1.75a.75.75 0 0 0 0-1.5h-10C6.56 14 6 13.44 6 12.75v-10Zm8 4.5V13h1.5V7.25a2.75 2.75 0 0 0-2.75-2.75H7V6h5.75c.69 0 1.25.56 1.25 1.25Z"
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
  ville.embed.fluent.Crop.$$dbClassInfo = $$dbClassInfo;
})();
