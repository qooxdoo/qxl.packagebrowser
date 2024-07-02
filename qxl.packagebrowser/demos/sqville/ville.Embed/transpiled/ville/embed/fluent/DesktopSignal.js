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
  qx.Class.define("ville.embed.fluent.DesktopSignal", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12 1c-.18 0-.36 0-.54.02a.5.5 0 1 0 .08 1L12 2a6 6 0 0 1 5.98 6.46.5.5 0 1 0 1 .08L19 8a7 7 0 0 0-7-7Zm0 2c-.19 0-.37.01-.55.03a.5.5 0 0 0 .1 1L12 4a4 4 0 0 1 3.98 4.45.5.5 0 1 0 .99.1A5 5 0 0 0 12 3Zm0 2c-.2 0-.4.02-.6.06a.5.5 0 0 0 .2.98A2.01 2.01 0 0 1 14 8c0 .14-.01.27-.04.4a.5.5 0 0 0 .98.2A3.01 3.01 0 0 0 12 5Zm-1.92-3H4a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V9.92a1.5 1.5 0 0 1-.52-.3c-.14.12-.3.22-.48.28V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.1c.06-.18.16-.34.29-.48a1.5 1.5 0 0 1-.31-.52ZM12 15v2H8v-2h4Zm1-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      FILLED: "M12 1c-.18 0-.36 0-.54.02a.5.5 0 1 0 .08 1L12 2a6 6 0 0 1 5.98 6.46.5.5 0 1 0 1 .08L19 8a7 7 0 0 0-7-7Zm0 2c-.19 0-.37.01-.55.03a.5.5 0 0 0 .1 1L12 4a4 4 0 0 1 3.98 4.45.5.5 0 1 0 .99.1A5 5 0 0 0 12 3Zm0 2c-.2 0-.4.02-.6.06a.5.5 0 0 0 .2.98A2.01 2.01 0 0 1 14 8c0 .14-.01.27-.04.4a.5.5 0 0 0 .98.2A3.01 3.01 0 0 0 12 5Zm-1.92-3H3.5C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 1 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5V9.92a1.5 1.5 0 0 1-.52-.3 1.5 1.5 0 0 1-2.02-.01 1.5 1.5 0 0 1-2.13-.11 2 2 0 0 1-2.82-2.82 1.5 1.5 0 0 1-.12-2.14 1.5 1.5 0 0 1 0-2.02 1.5 1.5 0 0 1-.31-.52ZM12 15v2H8v-2h4Zm1-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
  ville.embed.fluent.DesktopSignal.$$dbClassInfo = $$dbClassInfo;
})();
