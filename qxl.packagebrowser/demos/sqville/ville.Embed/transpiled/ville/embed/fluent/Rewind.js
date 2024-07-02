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
  qx.Class.define("ville.embed.fluent.Rewind", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 5.49a1 1 0 0 0-1.6-.8l-5.87 4.3c-.68.5-.68 1.52 0 2.02l5.88 4.31a1 1 0 0 0 1.59-.8v-3.17l5.4 3.97a1 1 0 0 0 1.6-.8V5.48a1 1 0 0 0-1.6-.8L10 8.64V5.49Zm-6.88 4.3L9 5.5v9.02l-5.88-4.3a.25.25 0 0 1 0-.41Zm7 0L16 5.5v9.02l-5.88-4.3a.25.25 0 0 1 0-.41Z",
      FILLED: "M10 5.49a1 1 0 0 0-1.6-.8l-5.87 4.3c-.68.5-.68 1.52 0 2.02l5.88 4.31a1 1 0 0 0 1.59-.8v-3.17l5.4 3.97a1 1 0 0 0 1.6-.8V5.48a1 1 0 0 0-1.6-.8L10 8.64V5.49Zm-1.6-.8.3.39Z"
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
  ville.embed.fluent.Rewind.$$dbClassInfo = $$dbClassInfo;
})();
