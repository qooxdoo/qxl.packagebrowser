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
  qx.Class.define("ville.embed.fluent.LockClosedKey", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M11 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 6H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-.59a2 2 0 0 1 .04-.41H6a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2 4 4 0 0 1 1 .13V9a3 3 0 0 0-3-3h-1V5a3 3 0 1 0-6 0v1Zm1-1a2 2 0 1 1 4 0v1H8V5Zm8 11a3 3 0 1 0-2.87-2.13l-2.84 2.84a1 1 0 0 0-.29.7v1.09c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V18h.5a.5.5 0 0 0 .5-.5V17h.5a.5.5 0 0 0 .5-.5v-.67a3 3 0 0 0 1 .17Zm.75-4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
      FILLED: "M7 5a3 3 0 0 1 6 0v1h1a3 3 0 0 1 3 3v.13a4 4 0 0 0-4.96 4.42L9.59 16A2 2 0 0 0 9 17.41V18H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5Zm3-2a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2Zm-1 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7 4a3 3 0 1 0-2.87-2.13l-2.84 2.84a1 1 0 0 0-.29.7v1.09c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V18h.5a.5.5 0 0 0 .5-.5V17h.5a.5.5 0 0 0 .5-.5v-.67a3 3 0 0 0 1 .17Zm.75-4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
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
  ville.embed.fluent.LockClosedKey.$$dbClassInfo = $$dbClassInfo;
})();
