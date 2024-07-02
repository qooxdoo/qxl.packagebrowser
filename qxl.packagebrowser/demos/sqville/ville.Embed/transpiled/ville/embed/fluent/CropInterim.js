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
  qx.Class.define("ville.embed.fluent.CropInterim", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1H7a2 2 0 0 1-1.77 1.99l-.47 4.16A2 2 0 0 1 6 12h5a2 2 0 0 1 1.24-1.85L11.77 6A2 2 0 0 1 10 4Zm1.27 9H5.73a2 2 0 1 1-1.96-2.99l.47-4.16A2 2 0 1 1 6.74 3h3.53a2 2 0 1 1 2.5 2.85l.46 4.16A2 2 0 1 1 11.27 13ZM3 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm2-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1.97-4.4A4.5 4.5 0 1 1 9.65 15h.85a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.72A5.48 5.48 0 0 0 18.5 12a5.5 5.5 0 0 0-4.65-5.43l.12 1.03Z",
      FILLED: "M7 4h3a2 2 0 0 0 1.77 1.99l.47 4.16A2 2 0 0 0 11 12H6a2 2 0 0 0-1.24-1.85L5.23 6A2 2 0 0 0 7 4Zm6.23 6.01-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 1 0-2.5 2.85L3.78 10A2 2 0 1 0 5.73 13h5.54a2 2 0 1 0 1.96-2.99Zm.74-2.4A4.5 4.5 0 1 1 9.65 15h.85a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.72A5.48 5.48 0 0 0 18.5 12a5.5 5.5 0 0 0-4.65-5.43l.12 1.03Z"
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
  ville.embed.fluent.CropInterim.$$dbClassInfo = $$dbClassInfo;
})();