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
  qx.Class.define("ville.embed.fluent.Drawer", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M8.5 14a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-4.15-2A1.5 1.5 0 0 0 3 13.5v2c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2c0-.78-.6-1.42-1.35-1.5l-.72-2H15a1 1 0 0 0 1-1V7.03a2 2 0 0 0-.26-1l-1.16-2.02A2 2 0 0 0 12.84 3H7.16a2 2 0 0 0-1.74 1L4.26 6.05a2 2 0 0 0-.26 1V9a1 1 0 0 0 1 1h.07l-.72 2Zm8.49-8a1 1 0 0 1 .87.5l.85 1.5H5.44l.85-1.5a1 1 0 0 1 .87-.5h5.68Zm-.04 3 1.78 5H5.42L7.2 7h5.6Zm2.7 6c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h11ZM5.43 9H5V7h1.14l-.71 2Zm9.14 0-.71-2H15v2h-.43Z",
      FILLED: "M7.16 3a2 2 0 0 0-1.74 1L4.26 6.05a2 2 0 0 0-.26 1V9a1 1 0 0 0 1 1h.07l-.72 2A1.5 1.5 0 0 0 3 13.5v2c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-2c0-.78-.6-1.42-1.35-1.5l-.72-2H15a1 1 0 0 0 1-1V7.03a2 2 0 0 0-.26-1l-1.16-2.02A2 2 0 0 0 12.84 3H7.16Zm7.41 6-.71-2H15v2h-.43ZM12.8 7l1.78 5H5.42L7.2 7h5.6ZM6.14 7l-.71 2H5V7h1.14Zm2.36 7h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z"
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
  ville.embed.fluent.Drawer.$$dbClassInfo = $$dbClassInfo;
})();