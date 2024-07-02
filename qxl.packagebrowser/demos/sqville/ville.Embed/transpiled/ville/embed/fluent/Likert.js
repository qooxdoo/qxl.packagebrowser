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
  qx.Class.define("ville.embed.fluent.Likert", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.5 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v2.5h3V5H5Zm1 5.5H3V13c0 1.1.9 2 2 2h1v-4.5Zm1 0V15h8a2 2 0 0 0 2-2v-2.5H7Zm10-1V7a2 2 0 0 0-2-2H7v4.5h10Z",
      FILLED: "M6 16v-5.5H2V13a3 3 0 0 0 3 3h1Zm1 0h8a3 3 0 0 0 3-3v-2.5H7V16Zm2-2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm2.25 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM18 9.5V7a3 3 0 0 0-3-3H7v5.5h11ZM9.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6 4H5a3 3 0 0 0-3 3v2.5h4V4Z"
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
  ville.embed.fluent.Likert.$$dbClassInfo = $$dbClassInfo;
})();