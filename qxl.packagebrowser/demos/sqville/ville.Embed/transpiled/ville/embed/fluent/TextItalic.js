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
  qx.Class.define("ville.embed.fluent.TextItalic", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M16 3a.5.5 0 0 1 0 1h-3.16L8.23 16h3.27a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1h3.16l4.61-12H8.5a.5.5 0 0 1 0-1H16Z",
      FILLED: "M8 3.25c0-.41.34-.75.75-.75h7.5a.75.75 0 0 1 0 1.5h-3.23L8.59 15.5h2.66a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3.23L11.41 4H8.75A.75.75 0 0 1 8 3.25Z"
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
  ville.embed.fluent.TextItalic.$$dbClassInfo = $$dbClassInfo;
})();
