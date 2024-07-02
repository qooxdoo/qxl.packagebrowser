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
  qx.Class.define("ville.embed.fluent.Rss", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2.5 0a.5.5 0 0 0 0 1 6.5 6.5 0 0 1 6.5 6.5.5.5 0 0 0 1 0A7.5 7.5 0 0 0 6.5 6ZM6 9.5c0-.28.22-.5.5-.5a4.5 4.5 0 0 1 4.5 4.5.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5ZM7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      FILLED: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm.5 3a7.5 7.5 0 0 1 7.5 7.5.5.5 0 0 1-1 0A6.5 6.5 0 0 0 6.5 7a.5.5 0 0 1 0-1ZM6 9.5c0-.28.22-.5.5-.5a4.5 4.5 0 0 1 4.5 4.5.5.5 0 0 1-1 0A3.5 3.5 0 0 0 6.5 10a.5.5 0 0 1-.5-.5ZM7 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
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
  ville.embed.fluent.Rss.$$dbClassInfo = $$dbClassInfo;
})();