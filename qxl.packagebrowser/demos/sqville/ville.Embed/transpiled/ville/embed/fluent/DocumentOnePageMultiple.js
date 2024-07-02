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
  qx.Class.define("ville.embed.fluent.DocumentOnePageMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12 5.5a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5ZM12 9a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5ZM6 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM5 14V3.89A1 1 0 0 1 6 3h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm11-6a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z",
      FILLED: "M4.01 3.8 4 4v10c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-1.99 1.8ZM12 5.5a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5ZM12 9a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5Zm0 3.5a.5.5 0 0 1-.41.5H7.5a.5.5 0 0 1-.09-1h4.09c.28 0 .5.22.5.5ZM16 8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z"
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
  ville.embed.fluent.DocumentOnePageMultiple.$$dbClassInfo = $$dbClassInfo;
})();
