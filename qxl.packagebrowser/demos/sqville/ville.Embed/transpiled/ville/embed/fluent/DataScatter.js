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
  qx.Class.define("ville.embed.fluent.DataScatter", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3 2.5a.5.5 0 0 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1H3V2.5Zm3 5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.5 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm7-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-1 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
      FILLED: "M3 2.5a.5.5 0 0 0-1 0v15c0 .28.22.5.5.5h15a.5.5 0 0 0 0-1H3V2.5ZM7.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
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
  ville.embed.fluent.DataScatter.$$dbClassInfo = $$dbClassInfo;
})();