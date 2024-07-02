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
  qx.Class.define("ville.embed.fluent.DocumentLightning", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 2a2 2 0 0 0-2 2v5.12c.18-.08.38-.12.59-.12H5V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1H7.93l-1.07 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM2.5 16h1.75l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66H4.59a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z",
      FILLED: "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H6.86l3.18-2.97a1.75 1.75 0 0 0-.9-3l.34-1.06A1.5 1.5 0 0 0 8.06 9H4.59c-.21 0-.4.04-.59.12V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM2.5 16h1.75l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66H4.59a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z"
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
  ville.embed.fluent.DocumentLightning.$$dbClassInfo = $$dbClassInfo;
})();