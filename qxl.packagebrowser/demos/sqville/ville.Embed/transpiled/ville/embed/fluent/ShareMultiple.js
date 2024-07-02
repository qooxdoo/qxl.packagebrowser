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
  qx.Class.define("ville.embed.fluent.ShareMultiple", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.31 11.96a.4.4 0 0 0 .19.04c.13 0 .25-.05.35-.14l4-3.91a.5.5 0 0 0 .01-.71l-4-4.09a.51.51 0 0 0-.55-.11.49.49 0 0 0-.31.46v1.76c-5.93.32-6 6.18-6 6.24 0 .19.11.37.28.45.17.08.38.06.53-.06l.01-.01c.2-.15 2.52-1.9 5.18-2.11v1.73c0 .2.12.38.31.46ZM14 5.75V4.72l2.79 2.86L14 10.31V9.25a.5.5 0 0 0-.5-.5c-2.23 0-4.25 1.02-5.38 1.72.31-1.54 1.43-4.22 5.38-4.22a.5.5 0 0 0 .5-.5ZM10 4.5a.5.5 0 0 0-.5-.5H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 2.96-2.5c.04-.27-.18-.5-.46-.5s-.5.23-.56.5A2 2 0 0 1 13 14H8a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1.5a.5.5 0 0 0 .5-.5ZM4 7v-.24A3 3 0 0 0 3 9v3a5 5 0 0 0 5 5h3a3 3 0 0 0 2.24-1H8a4 4 0 0 1-4-4V7Z",
      FILLED: "M13.31 11.96a.4.4 0 0 0 .19.04c.13 0 .25-.05.35-.14l4-3.91a.5.5 0 0 0 .01-.71l-4-4.09a.51.51 0 0 0-.55-.11.49.49 0 0 0-.31.46v1.76c-5.93.32-6 6.18-6 6.24 0 .19.11.37.28.45.17.08.38.06.53-.06l.01-.01c.2-.15 2.52-1.9 5.18-2.11v1.73c0 .2.12.38.31.46ZM10 4.5a.5.5 0 0 0-.5-.5H8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 2.96-2.5c.04-.27-.18-.5-.46-.5s-.5.23-.56.5A2 2 0 0 1 13 14H8a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1.5a.5.5 0 0 0 .5-.5ZM4 7v-.24A3 3 0 0 0 3 9v3a5 5 0 0 0 5 5h3a3 3 0 0 0 2.24-1H8a4 4 0 0 1-4-4V7Z"
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
  ville.embed.fluent.ShareMultiple.$$dbClassInfo = $$dbClassInfo;
})();