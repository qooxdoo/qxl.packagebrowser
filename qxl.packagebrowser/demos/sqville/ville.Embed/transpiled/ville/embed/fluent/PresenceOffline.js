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
  qx.Class.define("ville.embed.fluent.PresenceOffline", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.7 6.3a1 1 0 0 1 0 1.4L11.42 10l2.3 2.3a1 1 0 0 1-1.42 1.4L10 11.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L8.58 10l-2.3-2.3a1 1 0 0 1 1.42-1.4L10 8.58l2.3-2.3a1 1 0 0 1 1.4 0ZM0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
      FILLED: ""
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
  ville.embed.fluent.PresenceOffline.$$dbClassInfo = $$dbClassInfo;
})();