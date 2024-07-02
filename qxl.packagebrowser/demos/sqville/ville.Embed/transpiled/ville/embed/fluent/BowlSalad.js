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
  qx.Class.define("ville.embed.fluent.BowlSalad", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.92 4.83a3.5 3.5 0 0 1 6.25.17 3.75 3.75 0 0 0-3.39 2.32 6.15 6.15 0 0 0-2.86-2.49ZM17 9a3.76 3.76 0 0 0-2.7-3.85A4.5 4.5 0 0 0 6 4.48 10.07 10.07 0 0 0 3.14 4a9.5 9.5 0 0 0-.67 0 .5.5 0 0 0-.47.47 4.84 4.84 0 0 0 0 .67c.01.41.05.98.17 1.62.12.68.33 1.46.68 2.23H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 1 0 16 0v-.5a.5.5 0 0 0-.5-.5H17ZM4 9a7.87 7.87 0 0 1-.83-2.4A10.47 10.47 0 0 1 3 5a9.4 9.4 0 0 1 1.59.16c1.18.22 2.57.69 3.57 1.7A5.83 5.83 0 0 1 9.48 9H7.7L5.85 7.15a.5.5 0 1 0-.7.7L6.29 9H4Zm6.54 0-.02-.08-.01-.17a2.75 2.75 0 1 1 5.49.25h-5.46ZM3 10h14a7 7 0 0 1-.29 2H3.29A7 7 0 0 1 3 10Zm7 7a7 7 0 0 1-6.33-4h12.66A7 7 0 0 1 10 17Z",
      FILLED: "M6.92 4.83a3.5 3.5 0 0 1 6.25.17 3.75 3.75 0 0 0-3.39 2.32 6.15 6.15 0 0 0-2.86-2.49ZM17 9a3.76 3.76 0 0 0-2.7-3.85A4.5 4.5 0 0 0 6 4.48 10.07 10.07 0 0 0 3.14 4a9.5 9.5 0 0 0-.67 0 .5.5 0 0 0-.47.47 4.84 4.84 0 0 0 0 .67c.01.41.05.98.17 1.62.12.68.33 1.46.68 2.23H2.5a.5.5 0 0 0-.5.5v.5c0 .7.09 1.36.25 2h15.5c.16-.64.25-1.3.25-2v-.5a.5.5 0 0 0-.5-.5H17ZM4 9a7.87 7.87 0 0 1-.83-2.4A10.47 10.47 0 0 1 3 5a9.4 9.4 0 0 1 1.59.16c1.18.22 2.57.69 3.57 1.7A5.83 5.83 0 0 1 9.48 9H7.7L5.85 7.15a.5.5 0 1 0-.7.7L6.29 9H4Zm6.54 0-.02-.08-.01-.17a2.75 2.75 0 1 1 5.49.25h-5.46ZM10 18a8 8 0 0 1-7.42-5h14.84A8 8 0 0 1 10 18Z"
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
  ville.embed.fluent.BowlSalad.$$dbClassInfo = $$dbClassInfo;
})();
