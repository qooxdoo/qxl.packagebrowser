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
  qx.Class.define("ville.embed.fluent.ArrowDownLeft", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.5 16a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v6.8L16.15 3.14a.5.5 0 1 1 .7.7L4.71 16h6.79Z",
      FILLED: "M12 16.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v5.69L15.72 3.22a.75.75 0 1 1 1.06 1.06L5.56 15.5h5.7c.4 0 .74.34.74.75Z"
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
  ville.embed.fluent.ArrowDownLeft.$$dbClassInfo = $$dbClassInfo;
})();