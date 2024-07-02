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
  qx.Class.define("ville.embed.fluent.ArrowHookDownRight", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M4 9a5 5 0 0 1 5-5h4.5a.5.5 0 0 1 0 1H9a4 4 0 1 0 0 8h5.3l-2.7-2.7a.5.5 0 1 1 .7-.7l3.54 3.53a.5.5 0 0 1 .13.5.5.5 0 0 1-.14.25L12.3 17.4a.5.5 0 0 1-.71-.7l2.7-2.71H9a5 5 0 0 1-5-5Z",
      FILLED: "M9 14c.06 0-.06 0 0 0h4.65l-2.27 2.27a.75.75 0 1 0 1.06 1.06l3.35-3.35a.75.75 0 0 0 .21-.64.75.75 0 0 0-.21-.45l-3.25-3.24a.75.75 0 1 0-1.06 1.06l1.8 1.79H9a3.5 3.5 0 1 1 0-7h4.25a.75.75 0 0 0 0-1.5H9a5 5 0 0 0 0 10Z"
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
  ville.embed.fluent.ArrowHookDownRight.$$dbClassInfo = $$dbClassInfo;
})();