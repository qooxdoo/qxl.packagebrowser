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
  qx.Class.define("ville.embed.fluent.MyLocation", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.5-10.5a.5.5 0 0 0-1 0v1.52A6 6 0 0 0 4.02 9.5H2.5a.5.5 0 0 0 0 1h1.52a6 6 0 0 0 5.48 5.48v1.52a.5.5 0 0 0 1 0v-1.52a6 6 0 0 0 5.48-5.48h1.52a.5.5 0 0 0 0-1h-1.52a6 6 0 0 0-5.48-5.48V2.5ZM10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z",
      FILLED: "M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.75-10.25a.75.75 0 0 0-1.5 0v1.3a6 6 0 0 0-5.2 5.2h-1.3a.75.75 0 0 0 0 1.5h1.3a6 6 0 0 0 5.2 5.2v1.3a.75.75 0 0 0 1.5 0v-1.3a6 6 0 0 0 5.2-5.2h1.3a.75.75 0 0 0 0-1.5h-1.3a6 6 0 0 0-5.2-5.2v-1.3ZM10 14.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
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
  ville.embed.fluent.MyLocation.$$dbClassInfo = $$dbClassInfo;
})();