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
  qx.Class.define("ville.embed.fluent.Wifi1", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16.83 7.38c.41.41.8.88 1.14 1.37a.5.5 0 0 1-.83.57 8.61 8.61 0 0 0-14.2 0 .5.5 0 0 1-.82-.58 9.61 9.61 0 0 1 14.71-1.36ZM14.6 9.36c.47.47.88 1.04 1.19 1.65a.5.5 0 0 1-.89.46 5.45 5.45 0 0 0-9.73-.01.5.5 0 1 1-.89-.46A6.45 6.45 0 0 1 14.6 9.35Zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 0 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 1 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.93a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
      FILLED: "M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 0 1-1.23.85 7.97 7.97 0 0 0-13.14 0 .75.75 0 1 1-1.23-.86 9.47 9.47 0 0 1 14.5-1.34Zm-2.14 1.9c.47.46.88 1.04 1.2 1.64a.75.75 0 1 1-1.34.69 4.94 4.94 0 0 0-8.82-.02.75.75 0 0 1-1.34-.67 6.44 6.44 0 0 1 10.3-1.64Zm-1.64 2.38c.37.36.67.8.87 1.28a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.04a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z"
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
  ville.embed.fluent.Wifi1.$$dbClassInfo = $$dbClassInfo;
})();