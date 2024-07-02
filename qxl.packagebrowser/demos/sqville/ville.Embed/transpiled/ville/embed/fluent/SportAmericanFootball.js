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
  qx.Class.define("ville.embed.fluent.SportAmericanFootball", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11.85 8.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3ZM18 4.23A2.25 2.25 0 0 0 15.7 2c-5.62.07-9.12 2.15-11.18 4.96-2.04 2.78-2.6 6.2-2.51 8.88.04 1.18 1 2.09 2.15 2.14 5.53.26 9.03-1.73 11.13-4.56 2.07-2.8 2.73-6.36 2.71-9.2ZM15.71 3c.72 0 1.29.54 1.3 1.23 0 .9-.07 1.86-.23 2.84l-3.84-3.84C13.79 3.09 14.7 3 15.7 3Zm-3.95.46 4.79 4.8c-.39 1.6-1.04 3.19-2.07 4.56a10.01 10.01 0 0 1-6.1 3.85.5.5 0 0 0-.03-.02l-4.93-4.93a11.8 11.8 0 0 1 1.9-4.17 10.8 10.8 0 0 1 6.44-4.09ZM3.19 12.9l3.98 3.99c-.9.11-1.89.15-2.96.1A1.24 1.24 0 0 1 3 15.81c-.03-.91.02-1.9.18-2.92Z",
      FILLED: "M10.94 2.64A11.63 11.63 0 0 0 2.6 10.9l6.6 6.6a10.9 10.9 0 0 0 6.08-4.08 13.32 13.32 0 0 0 2.07-4.35l-6.42-6.43Zm.91 5.5c.2.2.2.52 0 .71l-3 3a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0Zm5.8-.2c.26-1.3.36-2.56.35-3.71A2.25 2.25 0 0 0 15.7 2c-1.32.02-2.53.15-3.62.37l5.56 5.56Zm-9.6 9.81-5.72-5.72A16.1 16.1 0 0 0 2 15.84c.04 1.18 1 2.09 2.15 2.14 1.43.07 2.72-.02 3.89-.23Z"
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
  ville.embed.fluent.SportAmericanFootball.$$dbClassInfo = $$dbClassInfo;
})();
