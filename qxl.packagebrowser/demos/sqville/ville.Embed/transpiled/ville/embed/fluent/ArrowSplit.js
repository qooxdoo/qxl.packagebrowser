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
  qx.Class.define("ville.embed.fluent.ArrowSplit", {
    extend: ville.embed.fluent.Abstract,
    statics: {
      REGULAR: "M10 3c.28 0 .5.22.5.5V8H13a2 2 0 0 1 2 2v5.3l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.7L14 15.29V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5.3l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.7L5 15.29V10c0-1.1.9-2 2-2h2.5V3.5c0-.28.22-.5.5-.5Z",
      FILLED: "M10 3c.41 0 .75.34.75.75V8h2.24a2 2 0 0 1 2 2v4.44l1.23-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5c-.3.3-.77.3-1.07 0l-2.5-2.5a.75.75 0 1 1 1.07-1.06l1.21 1.22V10a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v4.44l1.23-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L5 14.44V10c0-1.1.9-2 2-2h2.25V3.75c0-.41.34-.75.75-.75Z"
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
  ville.embed.fluent.ArrowSplit.$$dbClassInfo = $$dbClassInfo;
})();