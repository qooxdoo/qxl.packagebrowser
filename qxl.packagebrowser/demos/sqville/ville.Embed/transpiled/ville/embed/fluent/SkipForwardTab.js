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
  qx.Class.define("ville.embed.fluent.SkipForwardTab", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M2.9 7.81C4.01 6.4 5.92 4.66 8.3 4.15c2.1-.46 4.7.03 7.54 2.85H12.5a.5.5 0 0 0 0 1H17a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v2.75c-3.03-2.97-5.92-3.62-8.42-3.08C5.4 3.76 3.31 5.7 2.11 7.2a.5.5 0 0 0 .78.62ZM6.5 11c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-7ZM6 12.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-3Z",
      FILLED: "M3.09 7.97C4.2 6.57 6.07 4.89 8.35 4.4c1.9-.42 4.25-.04 6.86 2.35H12.5a.75.75 0 1 0 0 1.5H17c.41 0 .75-.34.75-.75v-4a.75.75 0 0 0-1.5 0v2.17c-2.92-2.68-5.75-3.28-8.22-2.74-2.76.6-4.9 2.58-6.12 4.1a.75.75 0 0 0 1.18.94Zm3.41 2.78c-.97 0-1.75.78-1.75 1.75v3c0 .97.78 1.75 1.75 1.75h7c.97 0 1.75-.78 1.75-1.75v-3c0-.97-.78-1.75-1.75-1.75h-7Zm-.25 1.75c0-.14.11-.25.25-.25h7c.14 0 .25.11.25.25v3c0 .14-.11.25-.25.25h-7a.25.25 0 0 1-.25-.25v-3Z"
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
  ville.embed.fluent.SkipForwardTab.$$dbClassInfo = $$dbClassInfo;
})();
