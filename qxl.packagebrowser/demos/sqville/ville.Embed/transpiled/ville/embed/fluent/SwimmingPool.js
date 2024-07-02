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
  qx.Class.define("ville.embed.fluent.SwimmingPool", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M5 5a1 1 0 0 1 2 0v5.05c.32.03.65.1 1 .19V9h5v3c.37 0 .7-.03 1-.09V5a2 2 0 1 0-4 0v.5a.5.5 0 0 0 1 0V5a1 1 0 1 1 2 0v3H8V5a2 2 0 1 0-4 0v.5a.5.5 0 0 0 1 0V5Zm8.08 9a7.6 7.6 0 0 1-3.83-1.08c-3.42-1.97-5.32-.15-5.39-.08a.5.5 0 0 1-.71 0 .48.48 0 0 1 0-.7c.1-.1 2.48-2.46 6.6-.1a6 6 0 0 0 6.45.05c.22-.16.53-.11.7.1a.5.5 0 0 1-.1.7 6.65 6.65 0 0 1-3.72 1.1V14Zm-3.83 1.92A7.6 7.6 0 0 0 13.08 17v-.01a6.65 6.65 0 0 0 3.71-1.1.5.5 0 0 0 .11-.7.51.51 0 0 0-.7-.1 6 6 0 0 1-6.44-.04c-4.13-2.37-6.5 0-6.61.1-.2.19-.2.5 0 .7.2.19.52.18.71 0 .07-.08 1.97-1.9 5.39.07Z",
      FILLED: "M5.75 4a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0v-.5a2.25 2.25 0 0 1 4.5 0V7.5h5V4.75a.75.75 0 1 0-1.5 0v.5a.75.75 0 1 1-1.5 0v-.5a2.25 2.25 0 0 1 4.5 0v7.03c-.4.13-.91.23-1.5.22V9H8v1.23A7.16 7.16 0 0 0 6.5 10V4.75A.75.75 0 0 0 5.75 4Zm.06 8.53c-.8.09-1.35.42-1.6.61a.75.75 0 0 1-.9-1.2c.4-.31 1.2-.77 2.33-.9a6.84 6.84 0 0 1 4.24 1.05c2.93 1.7 5.3.58 6 .17a.75.75 0 1 1 .75 1.3 7.33 7.33 0 0 1-7.5-.17 5.36 5.36 0 0 0-3.32-.86Zm0 3c-.8.09-1.35.42-1.6.61a.75.75 0 0 1-.9-1.2c.4-.31 1.2-.77 2.33-.9a6.84 6.84 0 0 1 4.24 1.05c2.93 1.7 5.3.58 6 .17a.75.75 0 1 1 .75 1.3 7.33 7.33 0 0 1-7.5-.17 5.36 5.36 0 0 0-3.32-.86Z"
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
  ville.embed.fluent.SwimmingPool.$$dbClassInfo = $$dbClassInfo;
})();