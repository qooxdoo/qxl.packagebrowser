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
  qx.Class.define("ville.embed.fluent.TextboxAlignTopCenter", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9Zm2.5.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm1 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
      FILLED: "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm1 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm1 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.TextboxAlignTopCenter.$$dbClassInfo = $$dbClassInfo;
})();
