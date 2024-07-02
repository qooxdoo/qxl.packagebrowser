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
  qx.Class.define("ville.embed.fluent.RatioOneToOne", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6.76 7.07c.15.1.24.26.24.43v5a.5.5 0 0 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5a.5.5 0 0 1 .48.02ZM14 7.5a.5.5 0 0 0-.72-.45l-1 .5a.5.5 0 1 0 .44.9L13 8.3v4.19a.5.5 0 0 0 1 0v-5Zm-4 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM4.75 5C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 5.78 16.22 5 15.25 5H4.75Z",
      FILLED: "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM7 7.5v5a.5.5 0 0 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5A.5.5 0 0 1 7 7.5Zm7 0v5a.5.5 0 1 1-1 0V8.3l-.28.15a.5.5 0 1 1-.44-.9l1-.5a.5.5 0 0 1 .72.45Zm-4 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM9.5 12a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
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
  ville.embed.fluent.RatioOneToOne.$$dbClassInfo = $$dbClassInfo;
})();
