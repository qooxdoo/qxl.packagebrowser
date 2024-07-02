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
  qx.Class.define("ville.embed.fluent.GiftOpen", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M13.5 4.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 10.5a.5.5 0 0 0-.76-.43l-2.5 1.5a.5.5 0 1 0 .52.86L4 11.38v4.12A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-4.12l1.74 1.05a.5.5 0 0 0 .52-.86l-2.5-1.5a.5.5 0 0 0-.76.43v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-5ZM16.5 5c.28 0 .5.22.5.5V6h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V7h-.5a.5.5 0 1 1 0-1h.5v-.5c0-.28.22-.5.5-.5Zm-7 0a3 3 0 0 0-3 3A2.5 2.5 0 0 0 9 10.5a2 2 0 0 0 2-2c0-.83-.67-1.5-1.5-1.5a1 1 0 0 0-1 1 .5.5 0 0 0 1 0c.28 0 .5.22.5.5a1 1 0 0 1-1 1A1.5 1.5 0 0 1 7.5 8c0-1.1.9-2 2-2A2.5 2.5 0 0 1 12 8.5a3 3 0 0 1-3 3 .5.5 0 0 0 0 1 4 4 0 0 0 4-4A3.5 3.5 0 0 0 9.5 5Z",
      FILLED: "M14.25 3.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 5a3 3 0 0 0-3 3A2.5 2.5 0 0 0 9 10.5a2 2 0 0 0 2-2c0-.83-.67-1.5-1.5-1.5a1 1 0 0 0-1 1 .5.5 0 0 0 1 0c.28 0 .5.22.5.5a1 1 0 0 1-1 1A1.5 1.5 0 0 1 7.5 8c0-1.1.9-2 2-2A2.5 2.5 0 0 1 12 8.5a3 3 0 0 1-3 3 .5.5 0 0 0 0 1 4 4 0 0 0 4-4A3.5 3.5 0 0 0 9.5 5Zm-4.45 5h1.08c.39.56.93 1 1.57 1.25A1.5 1.5 0 0 0 9 13.5a5 5 0 0 0 4.77-3.5h1.18c.45 0 .9.12 1.28.36l2.03 1.21a.5.5 0 1 1-.52.86L16 11.38v4.12a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-4.12l-1.74 1.05a.5.5 0 1 1-.52-.86l2.03-1.21A2.5 2.5 0 0 1 5.05 10ZM17 5.5a.5.5 0 0 0-1 0V6h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V7h.5a.5.5 0 0 0 0-1H17v-.5Z"
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
  ville.embed.fluent.GiftOpen.$$dbClassInfo = $$dbClassInfo;
})();
