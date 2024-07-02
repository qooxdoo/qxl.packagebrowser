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
  qx.Class.define("ville.embed.fluent.Scratchpad", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5H12v-.7a5.46 5.46 0 0 1-.8-.3H4.5a.5.5 0 0 1-.5-.5v-13c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1.88c.4.32.75.72 1 1.18V3.5c0-.83-.67-1.5-1.5-1.5h-11ZM8 11.5c0-.18.03-.34.09-.5H6.5a.5.5 0 0 0 0 1H8v-.5Zm-1.5-3h3v1h-3a.5.5 0 0 1 0-1ZM9.8 7a4 4 0 0 1 .58-1H6.5a.5.5 0 0 0 0 1h3.3Zm3.7-1.5a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0v-3a3 3 0 0 0-3-3Zm-2 3a2 2 0 1 1 4 0v3a2 2 0 1 1-4 0v-3Zm-1.5 3a.5.5 0 0 0-1 0v.5a4.5 4.5 0 0 0 4 4.47V18a.5.5 0 0 0 1 0v-1.53A4.5 4.5 0 0 0 18 12v-.5a.5.5 0 0 0-1 0v.5a3.5 3.5 0 1 1-7 0v-.5Z",
      FILLED: "M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5H12v-.7A5.5 5.5 0 0 1 8 12H6.5a.5.5 0 0 1 0-1h1.59c.2-.58.76-1 1.41-1v-.5h-3a.5.5 0 0 1 0-1h3c0-.53.1-1.04.3-1.5H6.5a.5.5 0 0 1 0-1h3.88a4 4 0 0 1 6.62.56V3.5c0-.83-.67-1.5-1.5-1.5h-11Zm9 3.5a3 3 0 0 0-3 3v3a3 3 0 1 0 6 0v-3a3 3 0 0 0-3-3Zm-4 5.5c.28 0 .5.22.5.5v.5a3.5 3.5 0 1 0 7 0v-.5a.5.5 0 0 1 1 0v.5a4.5 4.5 0 0 1-4 4.47V18a.5.5 0 0 1-1 0v-1.53A4.5 4.5 0 0 1 9 12v-.5c0-.28.22-.5.5-.5Z"
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
  ville.embed.fluent.Scratchpad.$$dbClassInfo = $$dbClassInfo;
})();
