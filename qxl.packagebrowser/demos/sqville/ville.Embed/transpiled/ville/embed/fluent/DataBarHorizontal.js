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
  qx.Class.define("ville.embed.fluent.DataBarHorizontal", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2 4c0-1.1.9-2 2-2h5a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H4Zm-2 7c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H4Zm-2 7c0-1.1.9-2 2-2h12a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Zm2-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z",
      FILLED: "M4 2a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4H4Zm0 6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z"
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
  ville.embed.fluent.DataBarHorizontal.$$dbClassInfo = $$dbClassInfo;
})();