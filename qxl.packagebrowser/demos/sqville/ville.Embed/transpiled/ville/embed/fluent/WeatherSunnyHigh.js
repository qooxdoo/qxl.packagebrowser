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
  qx.Class.define("ville.embed.fluent.WeatherSunnyHigh", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M9.5 2.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM10 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-1.87 8.46C7.18 16.19 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 0 1 3.02 1.33l.03.03a.5.5 0 0 0 .63-.78l-.02-.02-.04-.03a4.8 4.8 0 0 0-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0 0 10 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 0 0-3.45 1.44 4.84 4.84 0 0 0-.23.16l-.01.01h-.01v.01a.5.5 0 0 0 .62.78 1.6 1.6 0 0 1 .19-.13 11.45 11.45 0 0 1 3.14-1.3ZM9.5 13.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0ZM4 8.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm10.5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1ZM6.85 5.85a.5.5 0 0 1-.7 0l-1-1a.5.5 0 1 1 .7-.7l1 1c.2.2.2.5 0 .7Zm-.7 5.3a.5.5 0 1 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Zm7-5.3c.2.2.5.2.7 0l1-1a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7Zm.7 5.3a.5.5 0 0 0-.7.7l1 1a.5.5 0 0 0 .7-.7l-1-1Z",
      FILLED: "M9.5 3.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0ZM7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm2.5 4.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0ZM4.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm11 1h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1ZM6.15 5.85a.5.5 0 1 0 .7-.7l-1-1a.5.5 0 1 0-.7.7l1 1Zm.7 5.3a.5.5 0 0 0-.7 0l-1 1a.5.5 0 1 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm7-5.3a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm-.7 5.3c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm-7.02 5.3C7.18 16.2 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 0 1 3.02 1.33l.03.03a.5.5 0 0 0 .63-.78l-.02-.02-.04-.03a4.8 4.8 0 0 0-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0 0 10 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 0 0-3.45 1.44 4.84 4.84 0 0 0-.23.16l-.01.01h-.01v.01a.5.5 0 0 0 .62.78 1.6 1.6 0 0 1 .19-.13 11.45 11.45 0 0 1 3.14-1.3Z"
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
  ville.embed.fluent.WeatherSunnyHigh.$$dbClassInfo = $$dbClassInfo;
})();