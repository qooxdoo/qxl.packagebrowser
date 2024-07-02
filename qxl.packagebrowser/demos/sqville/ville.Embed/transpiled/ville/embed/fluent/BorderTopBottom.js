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
  qx.Class.define("ville.embed.fluent.BorderTopBottom", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M3.07 5.34a.5.5 0 0 0 .38.66.5.5 0 0 0 .6-.46A2 2 0 0 1 6 4h8a2 2 0 0 1 1.95 1.6.5.5 0 0 0 .6.4.5.5 0 0 0 .38-.66A3 3 0 0 0 14 3H6a3 3 0 0 0-2.93 2.34Zm0 9.32a.5.5 0 0 1 .38-.66.5.5 0 0 1 .6.46A2 2 0 0 0 6 16h8a2 2 0 0 0 1.95-1.6.5.5 0 0 1 .6-.4.5.5 0 0 1 .38.66A3 3 0 0 1 14 17H6a3 3 0 0 1-2.93-2.34ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5ZM3 11.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
      FILLED: "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6Zm-3 6.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm12.5 0a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm-10.9 3.3c.22.56.77.95 1.4.95h8a1.5 1.5 0 0 0 1.43-1.03v-.01a.75.75 0 0 1 1.38.58A3 3 0 0 1 14 17H6a3 3 0 0 1-2.81-1.96.75.75 0 1 1 1.41-.49Z"
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
  ville.embed.fluent.BorderTopBottom.$$dbClassInfo = $$dbClassInfo;
})();