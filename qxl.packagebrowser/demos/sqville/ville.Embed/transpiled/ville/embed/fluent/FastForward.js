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
  qx.Class.define("ville.embed.fluent.FastForward", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10.02 5.49a1 1 0 0 1 1.59-.81l5.88 4.31c.68.5.68 1.52 0 2.02l-5.88 4.3a1 1 0 0 1-1.6-.8v-3.16l-5.4 3.97a1 1 0 0 1-1.6-.8V5.48a1 1 0 0 1 1.6-.81l5.4 3.97V5.49Zm6.88 4.3-5.88-4.3v9.02l5.88-4.3c.13-.1.13-.31 0-.41Zm-7 0L4.02 5.5v9.02l5.88-4.3c.13-.1.13-.31 0-.41Z",
      FILLED: "M10.02 5.49a1 1 0 0 1 1.59-.81l5.88 4.31c.68.5.68 1.52 0 2.02l-5.88 4.3a1 1 0 0 1-1.6-.8v-3.16l-5.4 3.97a1 1 0 0 1-1.6-.8V5.48a1 1 0 0 1 1.6-.81l5.4 3.97V5.49Z"
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
  ville.embed.fluent.FastForward.$$dbClassInfo = $$dbClassInfo;
})();