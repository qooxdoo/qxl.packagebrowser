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
  qx.Class.define("ville.embed.fluent.Symbols", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M14.14 7.97c.2.2.51.2.7 0l2.56-2.55a2 2 0 1 0-2.83-2.83l-.07.08-.08-.08a2 2 0 0 0-2.83 2.83l2.55 2.55ZM12.3 4.71a1 1 0 1 1 1.42-1.41l.79.78.5-.5.28-.28a1 1 0 0 1 1.43 0 1 1 0 0 1 0 1.4L14.5 6.92l-2.2-2.2ZM2 5.51a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM5.5 3c-.5 0-.98.15-1.38.4L7.6 6.89A2.5 2.5 0 0 0 5.5 3ZM3 5.5a2.5 2.5 0 0 0 3.88 2.08L3.4 4.12C3.15 4.52 3 5 3 5.5Zm9.34 7.74A2.5 2.5 0 0 1 16.5 13h-1a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.55a3.49 3.49 0 0 0-5.53.7.5.5 0 0 0 .87.5Zm-.34 3.7v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 1 1 0 1h-1a2.5 2.5 0 0 0 4.17-.25.5.5 0 0 1 .86.5 3.5 3.5 0 0 1-5.53.7ZM5.5 11c.28 0 .5.23.5.5V14h2.5a.5.5 0 1 1 0 1H6v2.5a.5.5 0 0 1-1 0V15H2.5a.5.5 0 1 1 0-1H5v-2.5c0-.27.22-.5.5-.5Z",
      FILLED: "M14.14 7.97c.2.2.51.2.7 0l2.56-2.55a2 2 0 1 0-2.83-2.83l-.07.08-.08-.08a2 2 0 0 0-2.83 2.83l2.55 2.55ZM2 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM5.5 3c-.5 0-.98.16-1.38.42L7.6 6.88A2.5 2.5 0 0 0 5.5 3ZM3 5.5A2.5 2.5 0 0 0 6.88 7.6L3.4 4.12C3.15 4.52 3 5 3 5.5Zm9.34 7.75A2.5 2.5 0 0 1 16.5 13h-1a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.55a3.49 3.49 0 0 0-5.53.7.5.5 0 0 0 .87.5Zm-.34 3.7v.55a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 1 1 0 1h-1a2.5 2.5 0 0 0 4.17-.25.5.5 0 0 1 .86.5 3.5 3.5 0 0 1-5.53.7ZM5.5 11c.28 0 .5.23.5.5V14h2.5a.5.5 0 1 1 0 1H6v2.5a.5.5 0 0 1-1 0V15H2.5a.5.5 0 1 1 0-1H5v-2.5c0-.27.22-.5.5-.5Z"
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
  ville.embed.fluent.Symbols.$$dbClassInfo = $$dbClassInfo;
})();
