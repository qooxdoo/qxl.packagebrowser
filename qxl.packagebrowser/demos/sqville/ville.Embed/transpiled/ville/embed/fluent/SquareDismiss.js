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
  qx.Class.define("ville.embed.fluent.SquareDismiss", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6c-.16-.32-.3-.65-.4-1H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3.2c.35.1.68.24 1 .4V6a3 3 0 0 0-3-3H6Zm8.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z",
      FILLED: "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3H6Zm8.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.85-6.35c.2.2.2.5 0 .7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0Z"
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
  ville.embed.fluent.SquareDismiss.$$dbClassInfo = $$dbClassInfo;
})();
